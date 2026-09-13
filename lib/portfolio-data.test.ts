import { describe, expect, it } from "vitest";
import { education, experience } from "@/lib/portfolio-data";

function idsOf(
  groups: { id: string; entries: { id: string }[] }[],
): { orgIds: string[]; entryIds: string[] } {
  return {
    orgIds: groups.map((org) => org.id),
    entryIds: groups.flatMap((org) => org.entries.map((entry) => entry.id)),
  };
}

describe("Work Experience", () => {
  it("groups GoTyme Bank with the full-time and internship roles from the frame", () => {
    expect(experience[0]).toEqual({
      id: "gotyme-bank",
      name: "GoTyme Bank",
      kind: "company",
      entries: [
        {
          id: "gotyme-bank-ai-engineer",
          title: "AI Engineer",
          meta: "Oct 2026 - Present • Quezon City, Philippines • Full-time",
        },
        {
          id: "gotyme-bank-ai-engineer-rookie",
          title: "AI Engineer Rookie",
          meta: "Jan 2026 - Jul 2026 • Quezon City, Philippines • Internship",
        },
      ],
    });
  });

  it("lists companies in frame order", () => {
    expect(experience.map((org) => org.name)).toEqual([
      "GoTyme Bank",
      "Neko Labs",
      "Codebility",
      "Freelance",
      "Headstarter AI",
    ]);
  });

  it("lists each remaining company with a single role from the frame", () => {
    expect(experience.slice(1)).toEqual([
      {
        id: "neko-labs",
        name: "Neko Labs",
        kind: "company",
        entries: [
          {
            id: "neko-labs-co-founder",
            title: "Co-Founder",
            meta: "Apr 2026 - Present • Remote • Start-up",
          },
        ],
      },
      {
        id: "codebility",
        name: "Codebility",
        kind: "company",
        entries: [
          {
            id: "codebility-frontend-trainee",
            title: "Frontend Dev Trainee & UI/UX Designer",
            meta: "Mar 2025 - Aug 2025 • Remote • Internship",
          },
        ],
      },
      {
        id: "freelance",
        name: "Freelance",
        kind: "company",
        entries: [
          {
            id: "freelance-software-developer",
            title: "Freelance Software Developer",
            meta: "Dec 2024 - Feb 2025 • Remote • Freelance",
          },
        ],
      },
      {
        id: "headstarter-ai",
        name: "Headstarter AI",
        kind: "company",
        entries: [
          {
            id: "headstarter-ai-fellow",
            title: "Software Engineering Fellow",
            meta: "Jul 2024 - Sep 2024 • Remote • Fellowship",
          },
        ],
      },
    ]);
  });
});

describe("Education", () => {
  it("contains only Mapúa Malayan Colleges Laguna", () => {
    expect(education.map((org) => org.name)).toEqual([
      "Mapúa Malayan Colleges Laguna",
    ]);
  });

  it("shows the Mapúa program and highlight bullets from the frame", () => {
    expect(education[0]).toEqual({
      id: "mapua-mcl",
      name: "Mapúa Malayan Colleges Laguna",
      kind: "institution",
      entries: [
        {
          id: "mapua-mcl-bscs-ml",
          title: "BS in Computer Science with Specialization in Machine Learning",
          details: [
            "Expected to graduate as Summa Cum Laude (1.155 Running GWA)",
            "Consistently recognized as President’s and Dean’s Lister throughout my academic tenure",
          ],
        },
      ],
    });
  });

  it("does not include ACM or JPCS", () => {
    const blob = JSON.stringify(education);
    expect(blob).not.toMatch(
      /ACM|JPCS|Association for Computing Machinery|Junior Philippine Computer Society/,
    );
  });
});

describe("org ids", () => {
  it("are unique across companies, institutions, and their entries", () => {
    const { orgIds, entryIds } = idsOf([...experience, ...education]);
    expect(new Set(orgIds).size).toBe(orgIds.length);
    expect(new Set(entryIds).size).toBe(entryIds.length);
  });
});
