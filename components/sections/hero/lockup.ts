/** Reading order shared by the mobile and desktop hero lockups. Doodles count as items. */
export const heroTokens = [
  "I",
  "turn",
  "heart",
  "great",
  "ideas",
  "into",
  "things",
  "gears",
  "people",
  "actually",
  "use.",
] as const;

export type HeroToken = (typeof heroTokens)[number];

/** Desktop line slices of `heroTokens`: "I … ideas" / "into … people" / "actually use." */
export const desktopLines = [
  heroTokens.slice(0, 5),
  heroTokens.slice(5, 9),
  heroTokens.slice(9),
] as const;

export const HERO_START = 0.2;
export const HERO_STAGGER = 0.13;

/** When the nth item in reading order starts to rise. */
export function heroItemAt(n: number) {
  return HERO_START + n * HERO_STAGGER;
}

/** Delay passed into HeartPencil / Gears. Their timelines are unchanged. */
export function doodleDelay(token: "heart" | "gears") {
  const at = heroItemAt(heroTokens.indexOf(token));
  return token === "gears" ? at + 0.35 : at;
}

export const doodleFrames = {
  mobile: {
    heart: { width: 2.2, height: 1.45, rotate: 20.26, offsetY: -0.16 },
    gears: { width: 1.9, height: 1.3, rotate: 9.55, offsetY: 0.05 },
  },
  desktop: {
    heart: { width: 2.5, height: 1.6, rotate: 20.26, offsetY: -0.28 },
    gears: { width: 2, height: 1.38, rotate: 9.55, offsetY: 0.05 },
  },
} as const;
