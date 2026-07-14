"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { prefersReducedMotion } from "@/lib/animations/prefers-reduced-motion";

const TYPE_SPEED = 70; // ms per character while typing
const DELETE_SPEED = 40; // ms per character while deleting
const HOLD = 1600; // ms to hold a completed word before deleting
const PAUSE = 400; // ms pause between words

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

/**
 * Cycles through `words`, typing each out, holding, deleting, and moving to the
 * next — with a blinking caret. Falls back to the first word (static) under
 * reduced-motion.
 */
export function Typewriter({ words }: { words: string[] }) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    () => prefersReducedMotion(),
    () => false,
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const current = words[wordIndex % words.length];

    // Finished typing the word → hold, then start deleting.
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), HOLD);
      return () => clearTimeout(t);
    }

    // Finished deleting → pause briefly, then advance to the next word.
    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, PAUSE);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
        ),
      deleting ? DELETE_SPEED : TYPE_SPEED,
    );
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, reduced]);

  return (
    <span className="inline-flex items-baseline">
      <span>{reduced ? words[0] : text}</span>
      <span
        aria-hidden="true"
        className="animate-blink ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.06em] rounded-full bg-current motion-reduce:hidden"
      />
    </span>
  );
}
