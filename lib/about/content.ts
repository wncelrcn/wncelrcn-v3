/** Lines cycled by the typewriter after "I'm " in the About section intro. */
export const typewriterRoles: string[] = [
  "an AI Engineer",
  "a Builder",
  "a Problem Solver",
  "a Creative Thinker",
  "a Lifelong Learner",
];

/** A job under a Company. Title in sans; meta is the serif-italic period • location • type line. */
export interface Role {
  id: string;
  title: string;
  meta: string;
}

/** An employer grouping on Work Experience: name, logo, then one or more Roles. */
export interface Company {
  id: string;
  name: string;
  logo: string;
  /** Crop the mark to a rounded square. Each surface picks its own radius. */
  rounded?: boolean;
  /** Site opened from an About Me mention. The Work Experience name is not a link. */
  href?: string;
  roles: Role[];
}

/** A degree or course of study under an Institution, with optional italic highlight bullets. */
export interface Program {
  id: string;
  title: string;
  details?: string[];
}

/** A school grouping on Education: name, logo, then one or more Programs. */
export interface Institution {
  id: string;
  name: string;
  logo: string;
  programs: Program[];
}

export const workExperience: Company[] = [
  {
    id: "gotyme-bank",
    name: "GoTyme Bank",
    logo: "/figma/gotyme-logo.png",
    href: "https://www.gotyme.com.ph/",
    roles: [
      {
        id: "gotyme-bank-ai-engineer",
        title: "AI Engineer",
        meta: "Oct 2026 - Present • Quezon City, Philippines • Full-time",
      },
      {
        id: "gotyme-bank-ai-engineer-rookie",
        title: "AI Engineer Rookie",
        meta: "Jan 2026 - Jul 2026 • Quezon City, Philippines • Internship",
      },
    ],
  },
  {
    id: "neko-labs",
    name: "Neko Labs",
    logo: "/figma/neko-labs-logo.jpg",
    rounded: true,
    roles: [
      {
        id: "neko-labs-co-founder",
        title: "Co-Founder",
        meta: "Apr 2026 - Present • Remote • Start-up",
      },
    ],
  },
  {
    id: "codebility",
    name: "Codebility",
    logo: "/figma/codebility-logo.jpg",
    rounded: true,
    roles: [
      {
        id: "codebility-frontend-trainee",
        title: "Frontend Dev Trainee & UI/UX Designer",
        meta: "Mar 2025 - Aug 2025 • Remote • Internship",
      },
    ],
  },
  {
    id: "freelance",
    name: "Freelance",
    logo: "/figma/freelance-logo.png",
    rounded: true,
    roles: [
      {
        id: "freelance-software-developer",
        title: "Freelance Software Developer",
        meta: "Dec 2024 - Feb 2025 • Remote • Freelance",
      },
    ],
  },
  {
    id: "headstarter-ai",
    name: "Headstarter AI",
    logo: "/figma/headstarter-logo.png",
    roles: [
      {
        id: "headstarter-ai-fellow",
        title: "Software Engineering Fellow",
        meta: "Jul 2024 - Sep 2024 • Remote • Fellowship",
      },
    ],
  },
];

export const education: Institution[] = [
  {
    id: "mapua-mcl",
    name: "Mapúa Malayan Colleges Laguna",
    logo: "/figma/mmcl-logo.png",
    programs: [
      {
        id: "mapua-mcl-bscs-ml",
        title: "BS in Computer Science with Specialization in Machine Learning",
        details: [
          "Expected to graduate as Summa Cum Laude (1.155 Running GWA)",
          "Consistently recognized as President’s and Dean’s Lister throughout my academic tenure",
        ],
      },
    ],
  },
];

/** A slice of an About Me paragraph: plain text, serif-italic emphasis, or a Company mention. */
export type AboutRun =
  | { kind: "text"; text: string }
  | { kind: "em"; text: string }
  | { kind: "company"; id: string };

/** About Me body. Company mentions resolve through `companyById`. */
export const aboutMe: AboutRun[][] = [
  [
    { kind: "text", text: "I\u2019m an engineer who " },
    { kind: "em", text: "thinks like a designer" },
    { kind: "text", text: " and " },
    { kind: "em", text: "builds with intention" },
    { kind: "text", text: "." },
  ],
  [
    { kind: "text", text: "I care deeply about " },
    { kind: "em", text: "craft, clarity, and how things feel to use" },
    {
      kind: "text",
      text: ", believing that the best engineering doesn\u2019t just work on paper, it gives people their time back.",
    },
  ],
  [
    { kind: "text", text: "Right now, I\u2019m an " },
    { kind: "em", text: "AI Engineer" },
    { kind: "text", text: " at " },
    { kind: "company", id: "gotyme-bank" },
    { kind: "text", text: ", where I build custom AI systems for the business." },
  ],
  [
    { kind: "text", text: "Outside of that, I\u2019m the " },
    { kind: "em", text: "Co-Founder" },
    { kind: "text", text: " of " },
    { kind: "company", id: "neko-labs" },
    {
      kind: "text",
      text: ", where we build and ship our own products, finding real problems, shipping fast, and making it work.",
    },
  ],
];

export function companyById(id: string): Company {
  const company = workExperience.find((item) => item.id === id);
  if (!company) throw new Error(`Unknown company: ${id}`);
  return company;
}
