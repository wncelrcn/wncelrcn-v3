export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Recognition", href: "/recognition" },
  { label: "Practicum", href: "/practicum" },
];

/**
 * A single timeline row shared by the Work Experience and Education tabs so both
 * render through the same layout. `title` is the emphasized line, `subtitle` the
 * muted line beneath it, and `details` optional bullet points (used by Education).
 */
export interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
  details?: string[];
}

export const experience: TimelineEntry[] = [
  { period: "Apr 2026 — Present", title: "Co-Founder of Neko Labs", subtitle: "Startup" },
  {
    period: "Jan 2026 — Jul 2026",
    title: "AI Engineer Rookie at GoTyme Bank",
    subtitle: "Internship",
  },
  {
    period: "Mar 2025 — Aug 2025",
    title: "Frontend Dev Trainee & UI/UX Designer at Codebility",
    subtitle: "Internship",
  },
  { period: "Dec 2024 — Feb 2025", title: "Freelance Software Developer", subtitle: "Freelance" },
  {
    period: "Jul 2024 — Sep 2024",
    title: "Software Engineering Fellow at Headstarter AI",
    subtitle: "Fellowship",
  },
];

export const education: TimelineEntry[] = [
  {
    period: "Aug 2022 — Oct 2026",
    title: "BS in Computer Science with Specialization in Machine Learning",
    subtitle: "Mapúa Malayan Colleges Laguna",
    details: [
      "Expected to graduate as Summa Cum Laude (1.155 Running GWA)",
      "Consistently recognized as President’s and Dean’s Lister throughout my academic tenure",
    ],
  },
  {
    period: "Aug 2024 — Aug 2025",
    title: "Association for Computing Machinery - Mapúa MCL Chapter",
    subtitle: "Research & Development Committee",
  },
  {
    period: "Aug 2023 — Jun 2024",
    title: "Junior Philippine Computer Society - Mapúa MCL Chapter",
    subtitle: "Second Year Representative",
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
