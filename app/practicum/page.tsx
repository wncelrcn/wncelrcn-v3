import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Practicum — Wince Larcen Rivano",
  description: "Wince Larcen Rivano's practicum experience and internship work.",
};

export default function PracticumPage() {
  return (
    <PagePlaceholder
      title="Practicum"
      description="My practicum journey and the work that came out of it — coming soon."
    />
  );
}
