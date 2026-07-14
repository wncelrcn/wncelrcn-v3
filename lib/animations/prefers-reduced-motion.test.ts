import { describe, it, expect } from "vitest";
import { prefersReducedMotion } from "@/lib/animations/prefers-reduced-motion";

// Minimal fake of window.matchMedia returning a fixed `matches`.
const fakeMatchMedia = (matches: boolean) =>
  ((query: string) => ({ matches, media: query })) as unknown as typeof window.matchMedia;

describe("prefersReducedMotion", () => {
  it("returns true when the user requests reduced motion", () => {
    expect(prefersReducedMotion(fakeMatchMedia(true))).toBe(true);
  });

  it("returns false when reduced motion is not requested", () => {
    expect(prefersReducedMotion(fakeMatchMedia(false))).toBe(false);
  });

  it("returns false when matchMedia is unavailable (SSR)", () => {
    expect(prefersReducedMotion(undefined)).toBe(false);
  });
});
