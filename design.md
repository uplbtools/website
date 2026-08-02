# Design — uplb.tools

A locked design system for this site, adopted from Room TBA (the org's flagship
app) so every uplbtools surface reads as one family. Every page redesign reads
this file before emitting code. Extend or amend this file when the system needs
to grow; do not regenerate per page.

## Source of truth

Room TBA's app chrome (`room-tba/src/styles`, `room-tba/src/layouts/Layout.astro`).
Color values are kept in HSL, verbatim from Room TBA, instead of OKLCH: exact
cross-app parity with the flagship wins over notation preference. Treat the HSL
values below as canonical.

## Genre

editorial

## Macrostructure family

- Marketing/home: Index-First (the site is a directory of tools; navigation is
  the design). Varies: directory-row density, stat strip on the flagship row.
- Content/legal pages (privacy, terms): typography only, no enrichment, no
  cards. Inherit tokens; single-column measure of 65ch.

## Theme (Room TBA, locked)

- `--brand-maroon`        hsl(5, 53%, 32%)   — accent; Room TBA primary
- `--brand-maroon-deep`   hsl(5, 55%, 27%)
- `--brand-maroon-muted`  hsl(5, 40%, 94%)
- `--brand-green`         hsl(152, 45%, 28%) — status/live only
- `--bg-page`             hsl(5, 22%, 96%)   — warm paper
- `--bg-elevated`         hsl(0, 0%, 100%)
- `--border`              hsl(5, 10%, 68%)
- `--border-subtle`       hsl(5, 12%, 88%)
- `--text-ink`            hsl(5, 12%, 16%)
- `--text-body`           hsl(5, 14%, 24%)
- `--text-muted`          hsl(5, 10%, 38%)
- Focus ring: `--brand-maroon`, 2px, offset 2px, never animated.

Accent discipline: maroon carries the wordmark dot, links, badges, the double
rule, and one filled Donate button. Under 5% of any viewport.

## Typography

- Display: "Cormorant Garamond", Georgia, serif — weight 600/700, roman only.
  This is Room TBA's declared `--font-display`. Used for the masthead wordmark,
  h1, and directory tool names. Never italic in headings.
- Body: "Inter", system-ui, sans-serif — 400/500/600/700. Room TBA's UI font.
- Mono (colophon/meta only): ui-monospace stack, no webfont.
- Raleway is retired on this site (Room TBA uses it only in one legacy modal).

## Spacing

4-point named scale in `tokens.css` (`--space-3xs` … `--space-3xl`). Pages use
named tokens, never raw values.

## Motion

- Motion-cut project: no reveal animations, no scroll effects.
- Hover/focus transitions only: color, border-color, background at
  `--dur-short` (150ms) `--ease-out`.
- `prefers-reduced-motion`: transitions drop to none.

## Microinteractions stance

- Silent success; no toasts on this site.
- External links always carry the visually-hidden "opens in new tab" hint.
- Hit targets ≥ 44px at every viewport.

## CTA voice

- Primary (one per page max): filled `--brand-maroon`, white text, radius
  `--radius-sm`, verb-first copy ("Donate").
- Secondary: outlined chip, transparent bg, `--border` border.
- Tertiary/inline: typographic link, 1px underline, "Label ↗" for external.

## Copy rules

- Honest numbers only: stats on this site must be reproducible from the repos
  or Vercel Analytics (58 buildings, 94k+ class sections, 9 terms, contributor
  counts). No invented metrics.
- No privacy claims the stack contradicts. Room TBA runs cookieless Vercel
  Analytics and a Supabase Postgres backend: say "no ads, no data sold,
  cookieless analytics", never "no analytics, no databases".
- Bilingual flavor is welcome ("Saan sa UPLB ang ___?") — it is Room TBA's
  tagline and real campus voice.

## What pages MUST share

- The masthead wordmark treatment (Cormorant, maroon dot).
- The maroon accent and its ≤5% budget.
- Inter body + Cormorant display.
- The colophon footer with license lines (MIT code, CC-BY 4.0 campus data).
- The "student-run, not an official UPLB website" disclaimer.

## What pages MAY differ on

- Legal pages drop the full masthead nav for a plain back link.
- Directory-row anatomy may grow fields (stars, status) as tools mature.

## Exports

### tokens.css

See [`tokens.css`](tokens.css) at the project root — canonical, kept in sync
with `src/styles/global.css`.
