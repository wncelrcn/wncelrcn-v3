import { cn } from "@/lib/utils";
import type { FeaturedSlot } from "@/lib/projects";

export function ProjectCard({
  project,
  className,
}: {
  project: FeaturedSlot;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-[240px] rounded-[30px] bg-accent-surface shadow-card transition-transform duration-300 hover:-translate-y-1 md:h-[335px]",
        className,
      )}
      aria-hidden={!project.title}
    >
      {project.title}
    </div>
  );
}
