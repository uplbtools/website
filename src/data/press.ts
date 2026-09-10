/**
 * Press kit content.
 *
 * Who goes in which list is written on uplb.tools/people under "How this page
 * works". Change the rule there first, then the data here.
 *
 * Everything an editor might copy lives here rather than in the page markup,
 * so updating a number or a name is a one-line edit and the phrasing stays
 * consistent across the boilerplate, the credit line, and the fast facts.
 *
 * Rule for this file: verified numbers only. If a figure cannot be pointed at
 * a source (Vercel Analytics, the GitHub API, a row count), it does not go in.
 * Editors quote whatever is here, and a number invented once gets repeated for
 * years.
 */

export type CoreMember = {
  name: string;
  /** What they actually work on. Plain scope, not a rank. */
  role: string;
  /**
   * A sentence or two an editor can quote or paraphrase.
   *
   * Every bio below is a DRAFT written only from what the repository shows
   * (commit history and the work each person shipped). Nobody's course, year,
   * background, or interests are invented here. Each person should replace
   * their own line with whatever they actually want printed about them, and
   * should see this page before it is handed to a publication.
   */
  bio: string;
  /** Optional headshot in public/press/. Renders initials until one exists. */
  headshot?: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  /** Personal site or portfolio. Checked live before being listed here. */
  website?: string;
};

/**
 * The named core team, decided in advance rather than assembled under a
 * deadline. This is the list that goes out with every press submission.
 *
 * Roles are scope, not rank. Deliberately no titles: a six-person student team
 * that invents "Lead Frontend Developer" only creates something it has to
 * revoke later.
 */
export const coreTeam: CoreMember[] = [
  {
    name: "Simonee Ezekiel Mariquit",
    role: "Founder and lead. App architecture, campus data pipeline, releases.",
    bio: "Simonee started Room TBA in January 2026 and is still its largest contributor. He works on the app architecture, the campus data pipeline that imports class schedules each term, and the release process. He also maintains Elbi GradeSim and runs Pizza & Friends.",
    github: "smmariquit",
    website: "https://stimmie.dev",
  },
  {
    name: "Ken Ramiscal",
    role: "Offline support, map, interface.",
    bio: "Ken built the offline support that keeps Room TBA usable when campus signal drops, and he works across the map and the interface. He is the second-largest contributor to the project and a web designer and frontend developer at UPLB.",
    github: "Kenramiscal1106",
    website: "https://kendan.dev",
    linkedin: "https://www.linkedin.com/in/ken-daniele-ramiscal-1684b3376/",
  },
  {
    name: "Eunice Almeyda",
    role: "Directions, map chrome, mobile interface.",
    bio: "Eunice built the directions feature and much of the mobile map interface, including the bottom sheet and the search overlay students use on their phones. She also designed the Room TBA logo.",
    github: "unisA02",
    linkedin: "https://www.linkedin.com/in/eunice-almeyda-6a254a351/",
  },
  {
    name: "Simeon Ricalde",
    role: "Publicity and outreach.",
    bio: "Simeon handles publicity and outreach for Room TBA, including press and campus communications. He is a student at UPLB and a member of the UPLB Mathematical Sciences Society.",
    github: "meonnn",
    website: "https://meonnn.github.io/",
    linkedin: "https://www.linkedin.com/in/simeon-ricalde-218084380/",
  },
  {
    name: "Kalinaw Lukas Aom Bebis",
    role: "Interface, map, bug fixes.",
    bio: "Lukas works on the Room TBA interface and map, and on the bug fixes that keep each term's release stable. He is a fullstack developer and a BS Computer Science undergraduate at UPLB.",
    github: "klnwlks",
    website: "https://lukasbebis.com",
    linkedin: "https://www.linkedin.com/in/lukas-bebis/",
  },
];

/**
 * Named design credit. Not core, but a large enough body of design work that
 * the flat contributor list below would undersell it. Kept as its own clause
 * so the tiers stay honest in both directions.
 */
export const designCredits: CoreMember[] = [
  {
    name: "Mary Gwyneth Telmosa",
    role: "Interface design.",
    bio: "Gwy did interface design on Room TBA.",
  },
  {
    name: "Rovic Villaralvo",
    role: "Design.",
    bio: "Rovic is a product designer and did a large share of the design work across Room TBA and the other uplb.tools projects. His client work includes MyNaga and Agently.",
    linkedin: "https://www.linkedin.com/in/rovic-villaralvo/",
    website: "https://rovicdesign.framer.website/",
  },
];

export type NamedContributor = {
  name: string;
  /** What they did, in plain words. */
  role: string;
  facebook?: string;
  website?: string;
};

/**
 * People whose work never lands as a commit: publication graphics, building
 * data, room directions. The GitHub list cannot see them, which is the whole
 * reason this list is kept by hand. Add a line when someone does something.
 */
export const namedContributors: NamedContributor[] = [
  {
    name: "Reann Vargas",
    role: "Publication graphics",
    facebook: "https://www.facebook.com/drsc.v",
  },
  {
    name: "Amelie de Pano",
    role: "Publication graphics",
    facebook: "https://www.facebook.com/amelie.de.pano",
  },
  {
    name: "Niño Anthony Marmeto",
    role: "Electrical Engineering building data",
  },
  { name: "Rosh Almario", role: "Institute of Chemistry room directions" },
];

/** Short version. Fits a caption or a lede. */
export const boilerplateShort =
  "uplb.tools is a student-led open-source collective at UP Los Baños. Its main tool, Room TBA, is a campus map that tells you where a room is, which is the question every student asks during enlistment.";

/** Long version. Fits an "about the project" paragraph at the end of a piece. */
export const boilerplateLong =
  "uplb.tools is an independent, student-led open-source collective at the University of the Philippines Los Baños, not affiliated with or endorsed by the UPLB administration. It maintains Room TBA, a campus map with room search, class schedules, a planner, and jeepney routes that keeps working offline. It also maintains Elbi GradeSim, a browser extension for GWA simulation, and several smaller campus tools. Everything is MIT-licensed on GitHub, and the campus map data is published as open data under CC-BY 4.0. Room TBA has been forked for UP Visayas, UP Baguio, and Bulacan State University.";

/**
 * The credit line. Send this with every submission and it removes the question
 * of who gets named, permanently, from every future deadline.
 */
export const creditLine = `Room TBA is built by UPLB students under uplb.tools. Core team: ${coreTeam
  .map((member) => member.name)
  .join(", ")}. Design by ${designCredits
  .map((member) => member.name)
  .join(", ")}. Full contributor list at uplb.tools/press.`;

export type Fact = { value: string; label: string; source: string };

/**
 * TODO(stimmie): the traffic figure conflicts across our own surfaces. The
 * room-tba README says "~21,000 page views in the 30 days to Aug 2026,
 * measured during term break"; src/data/tools.ts says "50,000+ monthly page
 * views". Both cannot go out. The conservative, qualified one is used here
 * because a press kit is the worst place to be caught inflating. Pick one and
 * make the other match.
 */
export const facts: Fact[] = [
  {
    value: "~21,000",
    label: "page views in the 30 days to Aug 2026, measured during term break",
    source: "Vercel Analytics",
  },
  {
    value: "58",
    label: "buildings mapped, searchable, and routable",
    source: "Room TBA data",
  },
  {
    value: "94,000+",
    label: "class sections imported across 9 academic terms (AY 2023 onward)",
    source: "Room TBA data",
  },
  { value: "20", label: "contributors, 30+ tagged releases", source: "GitHub" },
  {
    value: "3",
    label: "campuses running forks: UP Visayas, UP Baguio, BulSU",
    source: "GitHub",
  },
  { value: "Jan 2026", label: "first commit", source: "Git history" },
];

export type PressScreenshot = {
  src: string;
  alt: string;
  /** Caption an editor can paste as-is. */
  caption: string;
  width: number;
  height: number;
};

export const screenshots: PressScreenshot[] = [
  {
    src: "/room-tba-screenshot.png",
    alt: "Room TBA campus map of UP Los Baños with pins for buildings, dorms, offices, and jeepney routes",
    caption:
      "Room TBA maps all 58 UPLB buildings. Students search a room code, a building nickname, or a course.",
    width: 1800,
    height: 1000,
  },
  {
    src: "/room-tba-schedule.png",
    alt: "Room TBA weekly schedule for room ICS PC7, showing lecture and lab sections across the week",
    caption:
      "Every room shows its weekly schedule and written walking directions, so students know which floor and which entrance.",
    width: 1800,
    height: 1000,
  },
  {
    src: "/gradesim-screenshot.png",
    alt: "Elbi GradeSim simulating grades and GWA inside the UPLB student portal",
    caption:
      "Elbi GradeSim simulates grades and GWA inside the student portal. Calculations stay on the student's device.",
    width: 1200,
    height: 700,
  },
];

export type LogoAsset = { src: string; label: string; note: string };

export const logos: LogoAsset[] = [
  {
    src: "/icon.png",
    label: "App icon",
    note: "PNG, square. Use on light backgrounds.",
  },
  {
    src: "/icon-512.png",
    label: "App icon, 512px",
    note: "PNG. For print or large layouts.",
  },
  {
    src: "/og.png",
    label: "Social card",
    note: "1200x630 PNG. For link previews.",
  },
];
