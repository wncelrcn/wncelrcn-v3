import { AppWindow } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectHighlight({
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
      className="flex h-[240px] w-full flex-col rounded-[30px] bg-accent-surface px-6 pt-6 pb-4 text-left shadow-card transition-transform duration-300 hover:-translate-y-1 active:scale-[0.96] md:h-[280px]"
    >
      <span className="min-h-0 flex-1 rounded-[30px] bg-accent-surface" />
      <span className="mx-auto mt-4 inline-flex h-[30px] max-w-full items-center gap-2 rounded-full bg-accent-surface px-3 shadow-pill">
        <span className="flex size-[25px] shrink-0 items-center justify-center text-ink" aria-hidden>
          <AppWindow className="size-4" strokeWidth={1.5} />
        </span>
        <span className="truncate text-base font-medium">{project.title}</span>
      </span>
    </button>
  );
}
