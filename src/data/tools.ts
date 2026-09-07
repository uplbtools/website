export type ToolStatus = "active" | "live";

export type ToolStat = {
  value: string;
  label: string;
};

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
  /** Real, verified numbers only. Shown on the flagship card. */
  stats?: ToolStat[];
  /** Short trailing line for the flagship card. */
  note?: string;
};

export const tools: ToolEntry[] = [
  {
    id: "room-tba",
    name: "Room TBA",
    description:
      "Search a room, a building nickname, or a course and see it on the campus map. Room schedules, a class planner, jeepney routes, and it keeps working when the signal drops.",
    href: "https://room-tba.uplb.tools",
    githubHref: "https://github.com/uplbtools/room-tba",
    actionLabel: "Open the map",
    status: "active",
    statusLabel: "Active",
    tags: ["Map", "Open source"],
    screenshot: "/room-tba-screenshot.png",
    screenshotAlt: "Room TBA campus map with room search and building pins",
    stats: [
      { value: "50,000+", label: "monthly page views" },
      { value: "58", label: "buildings mapped" },
      { value: "94,000+", label: "class sections" },
    ],
    note: "Forked for UP Visayas, UP Baguio, and BulSU.",
  },
  {
    id: "uppetite",
    name: "UPPETITE",
    description:
      "Food that fits your break. Pick where you are, your next class, and how long you have, and get only the food stops that fit the walk around Elbi.",
    href: "https://uppetite.uplb.tools",
    actionLabel: "Open app",
    status: "active",
    statusLabel: "Active",
    tags: ["Food"],
    screenshot: "/uppetite-screenshot.png",
    screenshotAlt:
      "UPPETITE break planner choosing a building, next class, and break time to find food stops",
  },
  {
    id: "kubo",
    name: "Kubo",
    description:
      "Student housing near campus. Find a dorm you can trust, and dorm owners get tools to list rooms and manage availability.",
    href: "https://www.facebook.com/findkubo/",
    actionLabel: "Visit Kubo",
    status: "active",
    statusLabel: "Community partner",
    tags: ["Housing"],
    screenshot: "/kubo-screenshot.png",
    screenshotAlt: "Kubo student housing map showing dorm listings around UPLB",
  },
  {
    id: "gradesim",
    name: "Elbi GradeSim",
    description:
      "A browser extension that sits on top of the AMIS grades page and simulates your GWA against Latin honor targets.",
    href: "https://gradesim.uplbtools.me",
    githubHref: "https://github.com/uplbtools/gradesim",
    actionLabel: "Install extension",
    status: "active",
    statusLabel: "Active",
    tags: ["Extension", "Open source"],
    screenshot: "/gradesim-screenshot.png",
    screenshotAlt: "Elbi GradeSim AMIS extension",
  },
  {
    id: "gwa-calculator",
    name: "UP GWA Calculator",
    description:
      "Track your grades per semester and check your Latin honors standing. Built for UP students.",
    href: "https://up-gwa.vercel.app",
    actionLabel: "Visit website",
    status: "active",
    statusLabel: "Active",
    tags: ["Academics"],
    screenshot: "/gwa-calculator-screenshot.png",
    screenshotAlt:
      "UP GWA Calculator grade tracking dashboard showing subjects, GWA, and Latin honors status",
  },
  {
    id: "uplb-trail",
    name: "UPLB TRAIL",
    description:
      "A quick search over hundreds of UPLB websites, offices, resources, and student organizations.",
    href: "https://uplb-trail.vercel.app",
    actionLabel: "Visit website",
    status: "active",
    statusLabel: "Active",
    tags: ["Directory"],
    screenshot: "/trail-screenshot.png",
    screenshotAlt:
      "UPLB TRAIL search engine page showing category tags and directory search results",
  },
];
