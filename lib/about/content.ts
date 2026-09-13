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

/** An employer grouping on Work Experience: name, then one or more Roles. */
export interface Company {
  id: string;
  name: string;
  roles: Role[];
}

/** A degree or course of study under an Institution, with optional italic highlight bullets. */
export interface Program {
  id: string;
  title: string;
  details?: string[];
}

/** A school grouping on Education: name, then one or more Programs. */
export interface Institution {
  id: string;
  name: string;
  programs: Program[];
}

export const workExperience: Company[] = [
  {
    id: "gotyme-bank",
    name: "GoTyme Bank",
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
