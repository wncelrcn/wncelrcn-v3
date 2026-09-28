import { describe, expect, it } from "vitest";
import { aboutMe, companyById, education, workExperience, type AboutRun } from "@/lib/about/content";

function paragraphText(runs: AboutRun[]) {
  return runs
    .map((run) => (run.kind === "company" ? companyById(run.id).name : run.text))
    .join("");
}

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

  it("gives every company a logo and at least one role with a meta line", () => {
    for (const company of workExperience) {
      expect(company.logo.startsWith("/figma/")).toBe(true);
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

  it("lists one program with a logo and highlight bullets", () => {
    const mapua = education[0];
    expect(mapua.logo).toBe("/figma/mmcl-logo.png");
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

describe("About Me", () => {
  it("mentions GoTyme Bank and Neko Labs in prose order", () => {
    const mentions = aboutMe.flat().flatMap((run) => (run.kind === "company" ? [run.id] : []));
    expect(mentions).toEqual(["gotyme-bank", "neko-labs"]);
  });

  it("opens GoTyme Bank’s site from its Company record and leaves Neko Labs unlinked", () => {
    expect(companyById("gotyme-bank").href).toBe("https://www.gotyme.com.ph/");
    expect(companyById("neko-labs").href).toBeUndefined();
  });

  it("resolves every mention to a Company", () => {
    for (const runs of aboutMe) {
      for (const run of runs) {
        if (run.kind === "company") expect(companyById(run.id).name.length).toBeGreaterThan(0);
      }
    }
  });

  it("keeps the four paragraphs", () => {
    expect(aboutMe.map(paragraphText)).toEqual([
      "I’m an engineer who thinks like a designer and builds with intention.",
      "I care deeply about craft, clarity, and how things feel to use, believing that the best engineering doesn’t just work on paper, it gives people their time back.",
      "Right now, I’m an AI Engineer at GoTyme Bank, where I build custom AI systems for the business.",
      "Outside of that, I’m the Co-Founder of Neko Labs, where we build and ship our own products, finding real problems, shipping fast, and making it work.",
    ]);
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
