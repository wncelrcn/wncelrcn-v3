import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ProjectsIndex } from "@/components/projects/ProjectsIndex";
import { getSiteRoute } from "@/lib/site-routes";

const route = getSiteRoute("projects")!;

export const metadata: Metadata = {
  title: `${route.title} — Wince Larcen Rivano`,
  description: route.metaDescription,
};

export default function ProjectsPage() {
  return (
    <Section>
      <ProjectsIndex />
    </Section>
  );
}
