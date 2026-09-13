/** A portfolio project. Title and href are filled in when the case study is designed. */
export interface Project {
  id: string;
  title?: string;
  href?: string;
}

/** Homepage featured grid slots until case studies are designed. */
export const featuredProjects: Project[] = [
  { id: "featured-1" },
  { id: "featured-2" },
  { id: "featured-3" },
  { id: "featured-4" },
  { id: "featured-5" },
];

/** All projects for /projects. Empty until case studies land. */
export const projects: Project[] = [];
