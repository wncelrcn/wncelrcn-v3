import { describe, expect, it } from "vitest";
import {
  certificationCta,
  certifications,
  VIEW_CERTIFICATION_LABEL,
} from "@/lib/certifications";

describe("certifications", () => {
  it("lists twelve dummy cards", () => {
    expect(certifications).toHaveLength(12);
  });

  it("uses unique ids", () => {
    const ids = certifications.map((certification) => certification.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("gives every certification a title, issuer, and certification link", () => {
    for (const certification of certifications) {
      expect(certification.title.length).toBeGreaterThan(0);
      expect(certification.issuer.length).toBeGreaterThan(0);
      expect(certification.href.startsWith("http")).toBe(true);
    }
  });

  it("does not share record objects", () => {
    const [first, second] = certifications;
    expect(first).not.toBe(second);
  });
});

describe("certificationCta", () => {
  it("uses View Certification unless overridden", () => {
    expect(certificationCta(certifications[0])).toBe(VIEW_CERTIFICATION_LABEL);
    expect(
      certificationCta({
        ...certifications[0],
        cta: "See credential",
      }),
    ).toBe("See credential");
  });
});
