import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/animations/Reveal";

/**
 * Shared shell for the standalone routes (Projects, Recognition, Practicum)
 * until their real content is designed. Reuses the site's section rhythm and
 * type scale so it feels consistent with the home page.
 */
export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Section className="min-h-[55vh]">
      <Reveal>
        <h1 className="text-title font-medium text-balance">{title}</h1>
        <p className="mt-4 max-w-2xl text-lead text-muted-ink text-pretty">{description}</p>
      </Reveal>
    </Section>
  );
}
