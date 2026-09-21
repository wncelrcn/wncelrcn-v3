import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { CertificationsIndex } from "@/components/certifications/CertificationsIndex";
import { getSiteRoute } from "@/lib/site-routes";

const route = getSiteRoute("certifications")!;

export const metadata: Metadata = {
  title: `${route.title} — Wince Larcen Rivano`,
  description: route.metaDescription,
};

export default function CertificationsPage() {
  return (
    <Section>
      <CertificationsIndex />
    </Section>
  );
}
