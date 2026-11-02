import type { Metadata } from "next";
import { AwardsIndex } from "@/components/awards/AwardsIndex";
import { Section } from "@/components/layout/Section";
import { getSiteRoute } from "@/lib/site-routes";

const route = getSiteRoute("awards")!;

export const metadata: Metadata = {
  title: `${route.title} — Wince Larcen Rivano`,
  description: route.metaDescription,
};

export default function AwardsPage() {
  return (
    <Section>
      <AwardsIndex />
    </Section>
  );
}
