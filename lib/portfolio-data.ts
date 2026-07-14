export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "Recognition", href: "#recognition" },
  { label: "Practicum", href: "#practicum" },
];

export interface ExperienceItem {
  period: string;
  role: string;
  type: string;
}

export const experience: ExperienceItem[] = [
  { period: "Apr 2026 — Present", role: "Co-Founder of Neko Labs", type: "Startup" },
  { period: "Jan 2026 — Jul 2026", role: "AI Engineer Rookie at GoTyme Bank", type: "Internship" },
  {
    period: "Mar 2025 — Aug 2025",
    role: "Frontend Dev Trainee & UI/UX Designer at Codebility",
    type: "Internship",
  },
  { period: "Dec 2024 — Feb 2025", role: "Freelance Software Developer", type: "Freelance" },
  {
    period: "Jul 2024 — Sep 2024",
    role: "Software Engineering Fellow at Headstarter AI",
    type: "Fellowship",
  },
];

// Education tab has no content in the design yet — kept empty until provided.
export const education: ExperienceItem[] = [];

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
    href: "https://www.linkedin.com/in/wince-larcen-rivano",
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
