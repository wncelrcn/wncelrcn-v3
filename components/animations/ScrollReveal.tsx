"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/animations/gsap";
import { prefersReducedMotion } from "@/lib/animations/prefers-reduced-motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}

/**
 * Fades and rises its children in when scrolled into view.
 * Uses an IntersectionObserver (fires immediately for elements already in view,
 * so content can never get stuck hidden) and GSAP for the motion.
 * Skips motion entirely when reduced-motion is requested.
 */
export function ScrollReveal({ children, className, y = 40, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(el, { opacity: 0, y });

      const observer = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              gsap.to(el, { opacity: 1, y: 0, duration: 0.8, delay, ease: "power3.out" });
              obs.disconnect();
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
      );

      observer.observe(el);
      return () => observer.disconnect();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
