"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { prefersReducedMotion } from "@/lib/animations/prefers-reduced-motion";
import type { AwardPhoto } from "@/lib/awards";
import { cn } from "@/lib/utils";

const NAV_BUTTON =
  "absolute top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-accent-surface/90 text-ink opacity-0 transition-[opacity,scale] group-hover:opacity-100 focus-visible:opacity-100 active:scale-[0.96] disabled:invisible pointer-coarse:hidden";

/** Swipeable photo card for one award. Scroll-snap does the paging; the buttons only scroll the track. */
export function AwardPhotos({ event, photos }: { event: string; photos: AwardPhoto[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const count = photos.length;
  const canPage = count > 1;

  function goTo(next: number) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({
      left: next * track.clientWidth,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${event} photos`}
      className="group relative mt-5 aspect-[3/2] w-full shrink-0 overflow-hidden lg:mt-0 rounded-[30px] bg-accent-surface shadow-card lg:w-96"
    >
      {count > 0 ? (
        <div
          ref={trackRef}
          onScroll={(e) =>
            setIndex(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))
          }
          className="flex size-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              className="relative size-full shrink-0 snap-start"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}

      {canPage ? (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous photo"
            className={cn(NAV_BUTTON, "left-3")}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === count - 1}
            aria-label="Next photo"
            className={cn(NAV_BUTTON, "right-3")}
          >
            <ChevronRight className="size-5" />
          </button>
          <p
            aria-live="polite"
            className="absolute bottom-[18px] left-[18px] rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white tabular-nums"
          >
            {index + 1} / {count}
          </p>
        </>
      ) : null}
    </div>
  );
}
