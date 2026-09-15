"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderGit2,
  Globe,
  NotebookPen,
  PenTool,
  Presentation,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { prefersReducedMotion } from "@/lib/animations/prefers-reduced-motion";
import {
  projectLinkLabel,
  type Project,
  type ProjectLinkKind,
} from "@/lib/projects";

const LINK_ICONS: Record<ProjectLinkKind, LucideIcon> = {
  github: FolderGit2,
  live: Globe,
  figma: PenTool,
  slides: Presentation,
  pdf: FileText,
  colab: NotebookPen,
};

const SCRIM_OPEN = 0.4;

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const exitingRef = useRef(false);
  const ignoreCloseRef = useRef(false);
  const scrimRef = useRef({ value: 0 });
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const dialog = dialogRef.current;
      const card = cardRef.current;
      if (!project || !dialog) return;

      if (!dialog.open) dialog.showModal();
      exitingRef.current = false;

      const applyScrim = () => {
        dialog.style.setProperty("--modal-scrim", String(scrimRef.current.value));
      };

      if (!card) {
        scrimRef.current.value = SCRIM_OPEN;
        applyScrim();
        return;
      }

      const chunks = card.querySelectorAll<HTMLElement>("[data-modal-chunk]");
      const media = card.querySelector<HTMLElement>("[data-modal-media]");

      if (prefersReducedMotion()) {
        scrimRef.current.value = SCRIM_OPEN;
        applyScrim();
        gsap.set(card, { autoAlpha: 1, y: 0 });
        if (chunks.length) gsap.set(chunks, { autoAlpha: 1, y: 0 });
        if (media) gsap.set(media, { autoAlpha: 1, y: 0 });
        return;
      }

      scrimRef.current.value = 0;
      applyScrim();
      gsap.set(card, { autoAlpha: 1, y: 16 });
      if (chunks.length) gsap.set(chunks, { autoAlpha: 0, y: 12 });
      if (media) gsap.set(media, { autoAlpha: 0, y: 16 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      timelineRef.current = tl;
      tl.to(scrimRef.current, { value: SCRIM_OPEN, duration: 0.3, onUpdate: applyScrim }, 0);
      tl.to(card, { y: 0, duration: 0.35, clearProps: "transform" }, 0);
      if (media) {
        tl.to(media, { autoAlpha: 1, y: 0, duration: 0.35, clearProps: "transform" }, 0.05);
      }
      if (chunks.length) {
        tl.to(
          chunks,
          { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.1, clearProps: "transform" },
          0.08,
        );
      }
    },
    { dependencies: [project], scope: dialogRef },
  );

  function requestClose() {
    const dialog = dialogRef.current;
    const card = cardRef.current;
    if (!dialog?.open || exitingRef.current) return;
    exitingRef.current = true;

    const applyScrim = () => {
      dialog.style.setProperty("--modal-scrim", String(scrimRef.current.value));
    };

    timelineRef.current?.kill();
    gsap.killTweensOf([card, scrimRef.current]);
    if (card) {
      gsap.killTweensOf(card.querySelectorAll("[data-modal-chunk], [data-modal-media]"));
    }

    if (prefersReducedMotion() || !card) {
      dialog.close();
      return;
    }

    timelineRef.current = gsap
      .timeline({
        defaults: { duration: 0.15, ease: "power2.in" },
        onComplete: () => dialog.close(),
      })
      .to(scrimRef.current, { value: 0, onUpdate: applyScrim }, 0)
      .to(card, { autoAlpha: 0, y: -12 }, 0);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    return () => {
      timelineRef.current?.kill();
      if (!dialog?.open) return;
      ignoreCloseRef.current = true;
      dialog.close();
    };
  }, []);

  function handleDialogClose() {
    exitingRef.current = false;
    if (ignoreCloseRef.current) {
      ignoreCloseRef.current = false;
      return;
    }
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleDialogClose}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
      className={cn(
        "project-modal fixed inset-0 z-[80] m-0 h-full max-h-none w-full max-w-none bg-transparent p-4",
        "open:flex open:items-center open:justify-center",
      )}
      aria-labelledby={project ? `project-modal-${project.id}` : undefined}
    >
      {project ? (
        <div
          ref={cardRef}
          role="document"
          className="relative grid max-h-[min(90dvh,720px)] w-full max-w-[1118px] overflow-hidden rounded-[30px] bg-accent-surface md:grid-cols-2"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={requestClose}
            className="absolute top-3 right-3 z-10 flex size-10 items-center justify-center rounded-full bg-accent-surface/90 text-ink transition-[transform,opacity] hover:opacity-70 active:scale-[0.96] md:top-4 md:right-4"
            aria-label="Close project"
          >
            <X className="size-6" />
          </button>
          <div className="flex min-h-0 flex-col gap-8 overflow-y-auto px-8 py-10 md:gap-10 md:px-16 md:py-16">
            <h2
              data-modal-chunk
              id={`project-modal-${project.id}`}
              className="text-[clamp(1.75rem,4vw,48px)] leading-none font-semibold text-balance"
            >
              {project.title}
            </h2>
            {project.techStack ? (
              <p
                data-modal-chunk
                className="font-serif text-[clamp(1.1rem,2vw,24px)] italic"
              >
                {project.techStack}
              </p>
            ) : null}
            {project.description ? (
              <p
                data-modal-chunk
                className="text-[clamp(1rem,1.6vw,20px)] leading-normal whitespace-pre-line text-pretty"
              >
                {project.description}
              </p>
            ) : null}
            {project.links?.length ? (
              <ul data-modal-chunk className="flex flex-col gap-3">
                {project.links.map((link) => {
                  const Icon = LINK_ICONS[link.kind];
                  return (
                    <li key={`${link.kind}-${link.href}`}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 font-serif text-base italic underline decoration-solid underline-offset-4 transition-[opacity,scale] hover:opacity-70 active:scale-[0.96]"
                      >
                        <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                        {projectLinkLabel(link)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>

          <MediaWell key={project.id} title={project.title} media={project.media ?? []} />
        </div>
      ) : null}
    </dialog>
  );
}

function MediaWell({ title, media }: { title: string; media: string[] }) {
  const [index, setIndex] = useState(0);

  const current = media[index];
  const canPage = media.length > 1;

  return (
    <div
      data-modal-media
      className="relative order-first h-[36svh] max-h-[280px] shrink-0 bg-faint-ink md:order-none md:h-full md:max-h-none md:min-h-[min(580px,calc(90dvh-2rem))]"
    >
      {current ? (
        <Image
          src={current}
          alt={`${title} screenshot ${index + 1}`}
          fill
          className="object-cover outline outline-1 -outline-offset-1 outline-black/10"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      ) : null}

      {canPage ? (
        <>
          <button
            type="button"
            onClick={() => setIndex((value) => (value - 1 + media.length) % media.length)}
            className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-accent-surface/90 text-ink transition-transform active:scale-[0.96]"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => setIndex((value) => (value + 1) % media.length)}
            className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-accent-surface/90 text-ink transition-transform active:scale-[0.96]"
            aria-label="Next screenshot"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      ) : null}
    </div>
  );
}
