import { describe, expect, it } from "vitest";
import { awards } from "@/lib/awards";

describe("awards", () => {
  it("lists the four placeholder rows from the Awards mockup", () => {
    expect(awards.map((award) => award.event)).toEqual([
      "ASEAN AI Hackathon",
      "Ship or Be Shipped Hackathon",
      "Byte Forward Hackathon",
      "DLSU Hackercup",
    ]);
  });

  it("keeps placeholder months and places on every row", () => {
    expect(awards.map((award) => [award.when, award.place])).toEqual([
      ["Month 2026", "Top 16 Finalist"],
      ["Month 2025", "Bounty Winner"],
      ["Month 2025", "Award Name"],
      ["Month 2025", "Award Name"],
    ]);
  });

  it("gives every award a unique id", () => {
    const ids = awards.map((award) => award.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every photo a public path and alt text", () => {
    for (const photo of awards.flatMap((award) => award.photos)) {
      expect(photo.src).toMatch(/^\//);
      expect(photo.alt.trim()).not.toBe("");
    }
  });
});
