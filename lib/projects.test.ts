import { describe, expect, it } from "vitest";
import {
  featuredProjects,
  projectHighlights,
  projectLinkLabel,
  projectListings,
  projects,
} from "@/lib/projects";

describe("featuredProjects", () => {
  it("reserves five homepage grid slots", () => {
    expect(featuredProjects).toHaveLength(5);
  });

  it("uses unique ids", () => {
    const ids = featuredProjects.map((slot) => slot.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("projects", () => {
  it("lists six highlights then three listings", () => {
    expect(projectHighlights.map((project) => project.title)).toEqual([
      "Airphabets",
      "Kusho'",
      "Tala",
      "Rippl",
      "SanKa",
      "MindMap",
    ]);
    expect(projectListings).toHaveLength(3);
    expect(projects).toHaveLength(9);
  });

  it("uses unique ids", () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("keeps a Project as either a highlight or a listing", () => {
    for (const project of projects) {
      expect(["highlight", "listing"]).toContain(project.placement);
    }
    expect(projectHighlights.every((project) => project.placement === "highlight")).toBe(true);
    expect(projectListings.every((project) => project.placement === "listing")).toBe(true);
  });

  it("gives listings a tagline and blurb", () => {
    for (const project of projectListings) {
      expect(project.tagline?.length).toBeGreaterThan(0);
      expect(project.blurb?.length).toBeGreaterThan(0);
    }
  });

  it("gives every project a title", () => {
    for (const project of projects) {
      expect(project.title.length).toBeGreaterThan(0);
    }
  });

  it("does not share links or media arrays across records", () => {
    const [first, second] = projects;
    expect(first.links).not.toBe(second.links);
    expect(first.media).not.toBe(second.media);
  });
});

describe("projectLinkLabel", () => {
  it("uses the kind label unless overridden", () => {
    expect(projectLinkLabel({ kind: "github", href: "https://github.com" })).toBe("Github");
    expect(
      projectLinkLabel({ kind: "github", href: "https://github.com", label: "Source" }),
    ).toBe("Source");
  });
});
