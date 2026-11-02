import { describe, expect, it } from "vitest";
import { shouldResetDevCache } from "./ensure-dev-cache.mjs";

const root = "/Users/example/personal_projects/wncelrcn-v3";
const previous = "/Users/example/Documents/CodingStuff/wncelrcn-v3";

describe("shouldResetDevCache", () => {
  it("keeps a cache written for this directory", () => {
    expect(shouldResetDevCache(root, true, root)).toBe(false);
  });

  it("keeps going when there is no Turbopack cache yet", () => {
    expect(shouldResetDevCache(null, false, root)).toBe(false);
    expect(shouldResetDevCache(previous, false, root)).toBe(false);
  });

  it("resets a cache written for another directory", () => {
    expect(shouldResetDevCache(previous, true, root)).toBe(true);
  });

  it("resets a cache that has no recorded directory", () => {
    expect(shouldResetDevCache(null, true, root)).toBe(true);
  });
});
