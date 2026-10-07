import { describe, expect, it } from "vitest";
import { aboutMe, companyById, education, workExperience, type AboutRun } from "@/lib/about/content";

function paragraphText(runs: AboutRun[]) {
  return runs
    .map((run) => {
      switch (run.kind) {
        case "company":
          return companyById(run.id).name;
        case "spark":
        case "build":
          return "";
        case "text":
        case "em":
          return run.text;
        default: {
          const exhaustive: never = run;
          return exhaustive;
        }
      }
    })
    .join("");
}

describe("Work Experience", () => {
  it("lists companies in frame order", () => {
    expect(workExperience.map((company) => company.name)).toEqual([
      "GoTymeX",
      "GoTyme Bank",
      "Neko Labs",
      "Codebility",
      "Freelance",
      "Headstarter AI",
    ]);
  });

  it("lists the current AI Engineer role under GoTymeX", () => {
    const gotymex = workExperience[0];
    expect(gotymex).toMatchObject({
      name: "GoTymeX",
      logo: "/figma/tymex-logo.png",
      rounded: true,
      contain: true,
    });
    expect(gotymex.roles).toEqual([
      {
        id: "gotymex-ai-engineer",
        title: "AI Engineer",
        meta: "Oct 2026 - Present • Ho Chi Minh City, Vietnam • Full-time",
      },
    ]);
  });

  it("keeps the internship on GoTyme Bank", () => {
    const bank = workExperience[1];
    expect(bank.name).toBe("GoTyme Bank");
    expect(bank.roles.map((role) => role.title)).toEqual(["AI Engineer Rookie"]);
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

  it("lists each company with a single role", () => {
    for (const company of workExperience) {
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
    expect(mapua.programs[0].details?.[0]).toBe(
      "Graduating as Summa Cum Laude (1.155 GWA)",
    );
  });

  it("does not include ACM or JPCS", () => {
    const blob = JSON.stringify(education);
    expect(blob).not.toMatch(
      /ACM|JPCS|Association for Computing Machinery|Junior Philippine Computer Society/,
    );
  });
});

describe("About Me", () => {
  it("mentions GoTymeX and Neko Labs in prose order", () => {
    const mentions = aboutMe.flat().flatMap((run) => (run.kind === "company" ? [run.id] : []));
    expect(mentions).toEqual(["gotymex", "neko-labs"]);
  });

  it("opens the GoTymeX page from its Company record and leaves Neko Labs unlinked", () => {
    expect(companyById("gotymex").href).toBe("https://www.gotyme.com/gotyme-x");
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

  it("places the spark between who and the flowing designer phrase", () => {
    expect(aboutMe[0].map((run) => run.kind)).toEqual([
      "text",
      "spark",
      "em",
      "text",
      "build",
      "em",
      "text",
    ]);
    expect(aboutMe[0][2]).toEqual({
      kind: "em",
      text: "thinks like a designer",
      flow: true,
    });
    expect(aboutMe[0][5]).toEqual({
      kind: "em",
      text: "builds with intention",
      flow: true,
    });
    expect(aboutMe[1][1]).toEqual({
      kind: "em",
      text: "craft, clarity, and how things feel to use",
      wave: true,
    });
  });

  it("keeps the four paragraphs", () => {
    expect(aboutMe.map(paragraphText)).toEqual([
      "I’m an engineer who thinks like a designer and builds with intention.",
      "I care deeply about craft, clarity, and how things feel to use, believing that the best engineering doesn’t just work on paper, it gives people their time back.",
      "Right now, I’m an AI Engineer at GoTymeX, where I build custom AI systems for the business.",
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
