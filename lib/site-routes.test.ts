import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getSiteRoute, getSlugPageParams, navLinks, siteRoutes } from "@/lib/site-routes";

describe("siteRoutes", () => {
  it("lists Projects, Certifications, and Awards in order", () => {
    expect(siteRoutes.map((route) => route.label)).toEqual([
      "Projects",
      "Certifications",
      "Awards",
    ]);
  });

  it("uses unique slugs", () => {
    const slugs = siteRoutes.map((route) => route.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("gives every route title and description copy", () => {
    for (const route of siteRoutes) {
      expect(route.title.length).toBeGreaterThan(0);
      expect(route.description.length).toBeGreaterThan(0);
      expect(route.metaDescription.length).toBeGreaterThan(0);
    }
  });
});

describe("navLinks", () => {
  it("derives hrefs from siteRoutes", () => {
    expect(navLinks).toEqual([
      { label: "Projects", href: "/projects" },
      { label: "Certifications", href: "/certifications" },
      { label: "Awards", href: "/awards" },
    ]);
  });

  it("points nav hrefs at real routes", () => {
    expect(existsSync(join(process.cwd(), "app", "projects", "page.tsx"))).toBe(true);
    expect(existsSync(join(process.cwd(), "app", "certifications", "page.tsx"))).toBe(true);
    expect(existsSync(join(process.cwd(), "app", "[slug]", "page.tsx"))).toBe(true);

    for (const link of navLinks) {
      const slug = link.href.replace(/^\//, "");
      expect(getSiteRoute(slug), `${link.href} is missing from siteRoutes`).toBeDefined();
    }
  });
});

describe("getSlugPageParams", () => {
  it("omits dedicated /projects and /certifications routes", () => {
    expect(getSlugPageParams().map((param) => param.slug)).toEqual(["awards"]);
  });
});
