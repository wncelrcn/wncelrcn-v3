import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Projects — Wince Larcen Rivano",
  description: "A closer look at what Wince Larcen Rivano has built.",
};

export default function ProjectsPage() {
  return (
    <PagePlaceholder
      title="Projects"
      description="A closer look at the things I've built — full case studies are on the way."
    />
  );
}
