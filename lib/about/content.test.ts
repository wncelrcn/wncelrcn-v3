import { describe, expect, it } from "vitest";
import { education, workExperience } from "@/lib/about/content";

describe("Work Experience", () => {
  it("lists companies in frame order", () => {
    expect(workExperience.map((company) => company.name)).toEqual([
      "GoTyme Bank",
      "Neko Labs",
      "Codebility",
      "Freelance",
      "Headstarter AI",
    ]);
  });

  it("groups GoTyme Bank with two roles", () => {
    const gotyme = workExperience[0];
    expect(gotyme.name).toBe("GoTyme Bank");
    expect(gotyme.roles).toHaveLength(2);
    expect(gotyme.roles.map((role) => role.title)).toEqual([
      "AI Engineer",
      "AI Engineer Rookie",
    ]);
  });

  it("gives every company at least one role with a meta line", () => {
    for (const company of workExperience) {
      expect(company.roles.length).toBeGreaterThan(0);
      for (const role of company.roles) {
        expect(role.meta.length).toBeGreaterThan(0);
      }
    }
  });

  it("lists each remaining company with a single role", () => {
    for (const company of workExperience.slice(1)) {
      expect(company.roles).toHaveLength(1);
    }
  });
});

describe("Education", () => {
  it("contains only Mapúa Malayan Colleges Laguna", () => {
    expect(education.map((institution) => institution.name)).toEqual([
      "Mapúa Malayan Colleges Laguna",
    ]);
  });

  it("lists one program with highlight bullets", () => {
    const mapua = education[0];
    expect(mapua.programs).toHaveLength(1);
    expect(mapua.programs[0].title.length).toBeGreaterThan(0);
    expect(mapua.programs[0].details?.length).toBeGreaterThan(0);
  });

  it("does not include ACM or JPCS", () => {
    const blob = JSON.stringify(education);
    expect(blob).not.toMatch(
      /ACM|JPCS|Association for Computing Machinery|Junior Philippine Computer Society/,
    );
  });
});

describe("About content ids", () => {
  it("are unique across companies, institutions, roles, and programs", () => {
    const companyIds = workExperience.map((company) => company.id);
    const roleIds = workExperience.flatMap((company) => company.roles.map((role) => role.id));
    const institutionIds = education.map((institution) => institution.id);
    const programIds = education.flatMap((institution) =>
      institution.programs.map((program) => program.id),
    );

    expect(new Set(companyIds).size).toBe(companyIds.length);
    expect(new Set(roleIds).size).toBe(roleIds.length);
    expect(new Set(institutionIds).size).toBe(institutionIds.length);
    expect(new Set(programIds).size).toBe(programIds.length);
  });
});
