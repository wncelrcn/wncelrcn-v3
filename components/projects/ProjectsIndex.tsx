"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProjectHighlight } from "@/components/projects/ProjectHighlight";
import { ProjectListing } from "@/components/projects/ProjectListing";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { projectHighlights, projectListings, projects } from "@/lib/projects";

export function ProjectsIndex() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((project) => project.id === activeId) ?? null;

  return (
    <>
      <ScrollReveal>
        <h1 className="text-center text-[clamp(2.5rem,6vw,64px)] font-medium">Projects</h1>
      </ScrollReveal>

      <div className="mt-10 grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
        {projectHighlights.map((project, index) => (
          <ScrollReveal key={project.id} className="h-full" delay={index * 0.1} y={20}>
            <ProjectHighlight project={project} onOpen={setActiveId} />
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-20 flex flex-col gap-[25px] md:mt-32">
        {projectListings.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 0.1} y={20}>
            <ProjectListing project={project} onOpen={setActiveId} />
          </ScrollReveal>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActiveId(null)} />
    </>
  );
}
