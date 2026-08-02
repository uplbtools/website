export type ToolStatus = "active" | "live" | "partner";

export type ToolEntry = {
  id: string;
  name: string;
  description: string;
  href: string;
  githubHref?: string;
  actionLabel: string;
  status: ToolStatus;
  statusLabel: string;
  tags: string[];
  screenshot: string;
  screenshotAlt: string;
  /** Real, reproducible numbers only — see design.md § Copy rules. */
  stats?: string[];
  flagship?: boolean;
};

export const tools: ToolEntry[] = [
  {
    id: "room-tba",
    name: "Room TBA",
    description:
      "Look up room schedules, navigate between class buildings, and view jeepney routes around the UPLB campus. Works offline once loaded.",
    href: "https://room-tba.uplb.tools",
    githubHref: "https://github.com/uplbtools/room-tba",
    actionLabel: "Open the map",
    status: "live",
    statusLabel: "Live",
    tags: ["Map", "Open source"],
    screenshot: "/room-tba-screenshot.png",
    screenshotAlt: "Room TBA campus map and room search",
    stats: ["58 buildings mapped", "94k+ class sections", "9 terms of schedules"],
    flagship: true,
  },
  {
    id: "gradesim",
    name: "Elbi GradeSim",
    description:
      "GWA simulation browser extension that overlays on the UPLB AMIS grades portal to model target graduation honor requirements.",
    href: "https://gradesim.uplbtools.me",
    githubHref: "https://github.com/uplbtools/gradesim",
    actionLabel: "Install extension",
    status: "live",
    statusLabel: "Live",
    tags: ["Extension", "Open source"],
    screenshot: "/gradesim-screenshot.png",
    screenshotAlt: "Elbi GradeSim AMIS extension",
  },
  {
    id: "kubo",
    name: "Kubo",
    description:
      "A student housing platform that helps students find trusted places to stay and gives dorm owners tools to reach more students. Verified Room TBA dorms link to their Kubo listings.",
    href: "https://www.facebook.com/findkubo/",
    actionLabel: "Visit Kubo",
    status: "partner",
    statusLabel: "Community partner",
    tags: ["Housing"],
    screenshot: "/kubo-screenshot.png",
    screenshotAlt: "Kubo student housing map showing dorm listings around UPLB",
  },
];
