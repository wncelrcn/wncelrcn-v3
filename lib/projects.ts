/** Homepage featured grid slot. Cover picture comes later; not a Project highlight tile. */
export interface FeaturedSlot {
  id: string;
  title?: string;
}

export const featuredProjects: FeaturedSlot[] = [
  { id: "featured-1" },
  { id: "featured-2" },
  { id: "featured-3" },
  { id: "featured-4" },
  { id: "featured-5" },
];

export type ProjectPlacement = "highlight" | "listing";

export type ProjectLinkKind = "github" | "live" | "figma" | "slides" | "pdf" | "colab";

export interface ProjectLink {
  kind: ProjectLinkKind;
  href: string;
  label?: string;
}

export interface Project {
  id: string;
  title: string;
  placement: ProjectPlacement;
  tagline?: string;
  blurb?: string;
  techStack?: string;
  description?: string;
  links?: ProjectLink[];
  media?: string[];
}

export const PROJECT_LINK_LABELS: Record<ProjectLinkKind, string> = {
  github: "Github",
  live: "Live site",
  figma: "Figma",
  slides: "Slides",
  pdf: "PDF",
  colab: "Colab",
};

export function projectLinkLabel(link: ProjectLink): string {
  return link.label ?? PROJECT_LINK_LABELS[link.kind];
}

/** Dummy modal fields until real copy replaces them on the Project record. */
function placeholderModal(): Pick<Project, "techStack" | "description" | "links" | "media"> {
  return {
    techStack: "React, Supabase, Gemini",
    description: [
      "Lorem Ipsum Dolor sit amet lorem ipsum dolor sit amet lorem ipsum",
      "Lorem Ipsum Dolor sit amet lorem ipsum dolor sit amet lorem ipsum",
      "Lorem Ipsum Dolor sit amet lorem ipsum dolor sit amet lorem ipsum",
      "Lorem Ipsum Dolor sit amet lorem ipsum dolor sit amet lorem ipsum",
    ].join("\n"),
    links: [{ kind: "github", href: "https://github.com" }],
    media: [],
  };
}

function highlight(id: string, title: string): Project {
  return { id, title, placement: "highlight", ...placeholderModal() };
}

function listing(id: string): Project {
  return {
    id,
    title: "To-do List",
    placement: "listing",
    tagline: "AI-Powered App",
    blurb: "Lorem Ipsum Dolor sit amet lorem ipsum dolor sit amet lorem ipsum",
    ...placeholderModal(),
  };
}

export const projects: Project[] = [
  highlight("airphabets", "Airphabets"),
  highlight("kusho", "Kusho'"),
  highlight("tala", "Tala"),
  highlight("rippl", "Rippl"),
  highlight("sanka", "SanKa"),
  highlight("mindmap", "MindMap"),
  listing("listing-1"),
  listing("listing-2"),
  listing("listing-3"),
];

export const projectHighlights = projects.filter((project) => project.placement === "highlight");
export const projectListings = projects.filter((project) => project.placement === "listing");
