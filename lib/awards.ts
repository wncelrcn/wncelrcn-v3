export interface AwardPhoto {
  /** Path under `public/`, e.g. `/awards/asean-ai-hackathon/1.jpg`. */
  src: string;
  /** What the photo shows, read by screen readers. */
  alt: string;
}

export interface Award {
  id: string;
  /** Month and year, e.g. "Mar 2026". */
  when: string;
  event: string;
  place: string;
  /** One sentence on what was built. Leave out to hide the line. */
  blurb?: string;
  /** Carousel photos in order. An empty list shows the empty photo card. */
  photos: AwardPhoto[];
}

const PLACEHOLDER_BLURB = "One sentence on what the team built and the part you owned.";

/** Placeholder rows from Figma Awards - Mockup (179:2). Replace fields on the records later. */
export const awards: Award[] = [
  {
    id: "asean-ai-hackathon",
    when: "Month 2026",
    event: "ASEAN AI Hackathon",
    place: "Top 16 Finalist",
    blurb: PLACEHOLDER_BLURB,
    photos: [],
  },
  {
    id: "ship-or-be-shipped",
    when: "Month 2025",
    event: "Ship or Be Shipped Hackathon",
    place: "Bounty Winner",
    blurb: PLACEHOLDER_BLURB,
    photos: [],
  },
  {
    id: "byte-forward",
    when: "Month 2025",
    event: "Byte Forward Hackathon",
    place: "Award Name",
    blurb: PLACEHOLDER_BLURB,
    photos: [],
  },
  {
    id: "dlsu-hackercup",
    when: "Month 2025",
    event: "DLSU Hackercup",
    place: "Award Name",
    blurb: PLACEHOLDER_BLURB,
    photos: [],
  },
];
