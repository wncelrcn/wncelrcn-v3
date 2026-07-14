import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = {
  title: "Recognition — Wince Larcen Rivano",
  description: "Awards, honors, and recognition earned by Wince Larcen Rivano.",
};

export default function RecognitionPage() {
  return (
    <PagePlaceholder
      title="Recognition"
      description="Awards, honors, and the moments worth remembering — coming soon."
    />
  );
}
