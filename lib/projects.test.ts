import { describe, expect, it } from "vitest";
import { featuredProjects, projects } from "@/lib/projects";

describe("featuredProjects", () => {
  it("reserves five homepage grid slots", () => {
    expect(featuredProjects).toHaveLength(5);
  });

  it("uses unique ids", () => {
    const ids = featuredProjects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("projects", () => {
  it("stays empty until case studies are designed", () => {
    expect(projects).toEqual([]);
  });
});
