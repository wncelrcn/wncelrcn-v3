import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectListing({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (id: string) => void;
}) {
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={() => onOpen(project.id)}
      className="grid w-full items-center gap-6 rounded-[30px] bg-accent-surface px-8 py-10 text-left shadow-card transition-transform duration-300 hover:-translate-y-1 active:scale-[0.96] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_50px] md:px-14 md:py-16"
    >
      <span className="text-[clamp(1.75rem,4vw,48px)] leading-none font-semibold text-balance">
        {project.title}
      </span>
      <span className="flex min-w-0 flex-col gap-2">
        {project.tagline ? (
          <span className="font-serif text-[clamp(1rem,2vw,24px)] italic">{project.tagline}</span>
        ) : null}
        {project.blurb ? (
          <span className="text-[clamp(1rem,2vw,24px)] leading-snug text-pretty">{project.blurb}</span>
        ) : null}
      </span>
      <ArrowUpRight className="size-8 justify-self-end md:size-[50px]" aria-hidden />
    </button>
  );
}
