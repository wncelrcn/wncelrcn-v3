export interface SiteRoute {
  label: string;
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
}

/** Nav labels, paths, and placeholder copy for standalone pages. */
export const siteRoutes: SiteRoute[] = [
  {
    label: "Projects",
    slug: "projects",
    title: "Projects",
    description: "Software projects, from highlights to the rest of the work.",
    metaDescription: "A closer look at what Wince Larcen Rivano has built.",
  },
  {
    label: "Certifications",
    slug: "certifications",
    title: "Certifications",
    description: "Credentials and certifications I've earned along the way — coming soon.",
    metaDescription: "Professional certifications earned by Wince Larcen Rivano.",
  },
  {
    label: "Awards",
    slug: "awards",
    title: "Awards",
    description: "Awards, honors, and the moments worth remembering — coming soon.",
    metaDescription: "Awards and honors earned by Wince Larcen Rivano.",
  },
];

export const navLinks = siteRoutes.map(({ label, slug }) => ({
  label,
  href: `/${slug}`,
}));

export function getSiteRoute(slug: string): SiteRoute | undefined {
  return siteRoutes.find((route) => route.slug === slug);
}

/** Params for `app/[slug]`. Dedicated routes like `/projects` are excluded. */
export function getSlugPageParams() {
  return siteRoutes
    .filter((route) => route.slug !== "projects")
    .map(({ slug }) => ({ slug }));
}
