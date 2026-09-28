import { describe, expect, it } from "vitest";
import { desktopLines, doodleDelay, heroItemAt, heroTokens } from "@/components/sections/hero/lockup";

describe("hero lockup", () => {
  it("counts the heart as the third item and the gears as the eighth", () => {
    expect(heroTokens.indexOf("heart")).toBe(2);
    expect(heroTokens.indexOf("gears")).toBe(7);
    expect(doodleDelay("heart")).toBe(heroItemAt(2));
    expect(doodleDelay("gears")).toBe(heroItemAt(7) + 0.35);
  });

  it("splits the same tokens across the three desktop lines", () => {
    expect(desktopLines.flat()).toEqual([...heroTokens]);
    expect(desktopLines).toHaveLength(3);
  });
});
