#!/usr/bin/env python3
"""Generate public/og.jpg (1200x630) for Open Graph embeds.

Layout rules:
- Everything that must survive is inside the centered 630x630 square, because
  Messenger, WhatsApp and iMessage often crop link previews to a square.
- Brand maroon background with the campus photo as a maroon duotone, so the
  photo adds place without competing with the text.
- JPEG under 300 KB: WhatsApp drops previews for heavier images.

Run: python3 scripts/generate-og-image.py
"""

from __future__ import annotations

import colorsys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
FONTS = Path(__file__).resolve().parent / "fonts"
ICON = ROOT / "public" / "icon.png"
PHOTO = ROOT / "public" / "uplb-bg.webp"
OUT = ROOT / "public" / "og.jpg"

W, H = 1200, 630
MAX_BYTES = 300_000


def hsl(h: float, s: float, l: float) -> tuple[int, int, int]:
    r, g, b = colorsys.hls_to_rgb(h / 360, l / 100, s / 100)
    return round(r * 255), round(g * 255), round(b * 255)


MAROON_DEEP = hsl(5, 53, 13)
MAROON = hsl(5, 53, 32)
CREAM = hsl(20, 60, 92)
WHITE = (255, 255, 255)
MUTED = hsl(10, 25, 80)


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONTS / name, size)


def background() -> Image.Image:
    """Campus photo as a maroon duotone, darkened toward the center column."""
    photo = Image.open(PHOTO).convert("L")
    scale = max(W / photo.width, H / photo.height)
    photo = photo.resize((round(photo.width * scale), round(photo.height * scale)), Image.Resampling.LANCZOS)
    left, top = (photo.width - W) // 2, (photo.height - H) // 2
    photo = photo.crop((left, top, left + W, top + H))
    photo = ImageOps.autocontrast(photo, cutoff=1)
    duo = ImageOps.colorize(photo, black=MAROON_DEEP, white=hsl(5, 45, 42))

    # Radial-ish vignette: keep the photo visible at the edges, quiet in the
    # middle where the text sits.
    mask = Image.new("L", (W, H), 0)
    d = ImageDraw.Draw(mask)
    d.ellipse((W * 0.5 - 520, H * 0.5 - 360, W * 0.5 + 520, H * 0.5 + 360), fill=225)
    mask = mask.filter(ImageFilter.GaussianBlur(120))
    solid = Image.new("RGB", (W, H), MAROON_DEEP)
    return Image.composite(solid, duo, mask)


def text_w(draw: ImageDraw.ImageDraw, text: str, f: ImageFont.FreeTypeFont) -> int:
    box = draw.textbbox((0, 0), text, font=f)
    return box[2] - box[0]


def centered(draw: ImageDraw.ImageDraw, y: int, text: str, f: ImageFont.FreeTypeFont, fill) -> None:
    draw.text(((W - text_w(draw, text, f)) // 2, y), text, font=f, fill=fill)


def chip(draw: ImageDraw.ImageDraw, x: int, y: int, name: str, what: str, bold, regular) -> int:
    """Draw a pill with a bold tool name and a short description. Returns width."""
    pad_x, h = 22, 52
    name_w = text_w(draw, name, bold)
    gap = 12
    what_w = text_w(draw, what, regular)
    w = pad_x + name_w + gap + what_w + pad_x
    draw.rounded_rectangle((x, y, x + w, y + h), radius=h // 2, fill=(255, 255, 255, 30), outline=(255, 255, 255, 70), width=2)
    draw.text((x + pad_x, y + 12), name, font=bold, fill=WHITE)
    draw.text((x + pad_x + name_w + gap, y + 13), what, font=regular, fill=MUTED)
    return w


def chip_width(draw, name, what, bold, regular) -> int:
    return 22 + text_w(draw, name, bold) + 12 + text_w(draw, what, regular) + 22


def main() -> None:
    canvas = background().convert("RGBA")
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    wordmark = font("Raleway-Bold.ttf", 112)
    headline = font("Inter-SemiBold.ttf", 38)
    chip_bold = font("Inter-SemiBold.ttf", 25)
    chip_reg = font("Inter-Regular.ttf", 25)
    foot = font("Inter-Medium.ttf", 22)

    # Icon
    icon_size = 96
    icon = Image.open(ICON).convert("RGBA").resize((icon_size, icon_size), Image.Resampling.LANCZOS)
    icon_y = 92
    overlay.paste(icon, ((W - icon_size) // 2, icon_y), icon)

    # Wordmark: "uplb" white, "." cream, "tools" white, like the site header.
    y = icon_y + icon_size + 18
    parts = [("uplb", WHITE), (".", CREAM), ("tools", WHITE)]
    total = sum(text_w(draw, p, wordmark) for p, _ in parts)
    x = (W - total) // 2
    for text, color in parts:
        draw.text((x, y), text, font=wordmark, fill=color)
        x += text_w(draw, text, wordmark)

    # Headline
    centered(draw, y + 138, "Free tools for UP Los Baños students", headline, WHITE)

    # Tool chips
    chips = [("Room TBA", "find any room or class"), ("Elbi GradeSim", "GWA and Latin honors")]
    gap = 16
    widths = [chip_width(draw, n, w, chip_bold, chip_reg) for n, w in chips]
    x = (W - (sum(widths) + gap * (len(chips) - 1))) // 2
    chip_y = y + 212
    for (name, what), w in zip(chips, widths):
        chip(draw, x, chip_y, name, what, chip_bold, chip_reg)
        x += w + gap

    centered(draw, chip_y + 82, "Open source, built by UPLB students", foot, MUTED)

    canvas = Image.alpha_composite(canvas, overlay).convert("RGB")

    for quality in (88, 84, 80, 76, 72):
        canvas.save(OUT, "JPEG", quality=quality, optimize=True, progressive=True)
        if OUT.stat().st_size <= MAX_BYTES:
            break
    size = OUT.stat().st_size
    assert size <= MAX_BYTES, f"{OUT.name} is {size} bytes, over {MAX_BYTES}"
    print(f"Wrote {OUT} ({W}x{H}, {size // 1024} KB, q={quality})")


if __name__ == "__main__":
    main()
