export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Recognition", href: "/recognition" },
  { label: "Practicum", href: "/practicum" },
];

// Roles cycled by the typewriter after "I'm " in the About intro.
export const roles: string[] = [
  "an AI Engineer",
  "a Builder",
  "a Problem Solver",
  "a Creative Thinker",
  "a Lifelong Learner",
];

/**
 * A Company or Institution grouping: placeholder logo + name, then Roles or Programs.
 * `kind` chooses the Lucide stand-in until the real mark is dropped in.
 */
export type OrgKind = "company" | "institution";

export interface OrgEntry {
  id: string;
  title: string;
  /** Serif-italic `period • location • type` line on Work Experience. */
  meta?: string;
  /** Serif-italic highlight bullets on Education. */
  details?: string[];
}

export interface OrgGroup {
  id: string;
  name: string;
  kind: OrgKind;
  entries: OrgEntry[];
}

export const experience: OrgGroup[] = [
  {
    id: "gotyme-bank",
    name: "GoTyme Bank",
    kind: "company",
    entries: [
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
    kind: "company",
    entries: [
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
    kind: "company",
    entries: [
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
    kind: "company",
    entries: [
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
    kind: "company",
    entries: [
      {
        id: "headstarter-ai-fellow",
        title: "Software Engineering Fellow",
        meta: "Jul 2024 - Sep 2024 • Remote • Fellowship",
      },
    ],
  },
];

export const education: OrgGroup[] = [
  {
    id: "mapua-mcl",
    name: "Mapúa Malayan Colleges Laguna",
    kind: "institution",
    entries: [
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

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // path under /public
}

// NOTE: hrefs are best-guess from the handles/name in the design.
// GitHub is confirmed (wncelrcn); confirm the others before publishing.
export const socials: SocialLink[] = [
  {
    label: "Wince Larcen Rivano",
    href: "https://www.linkedin.com/in/wincelarcen",
    icon: "/figma/social-linkedin.png",
  },
  { label: "wncelrcn", href: "https://github.com/wncelrcn", icon: "/figma/social-github.png" },
  {
    label: "wince.lrcn",
    href: "https://www.instagram.com/wince.lrcn",
    icon: "/figma/social-instagram.png",
  },
  {
    label: "wncelrcn_dev",
    href: "https://www.tiktok.com/@wncelrcn_dev",
    icon: "/figma/social-tiktok.png",
  },
];

export const contactEmail = "rivanowincelarcen@gmail.com";
