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
