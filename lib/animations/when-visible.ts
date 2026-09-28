/**
 * One-shot viewport check shared by ScrollReveal and the About Me timeline.
 * Fires immediately when the element is already in view, so entrance motion
 * cannot stick at opacity 0. ScrollTrigger stays unregistered (ADR-0001).
 */
export const revealView = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" } as const;

export function observeOnce(el: Element, onVisible: () => void) {
  const observer = new IntersectionObserver((entries, obs) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      onVisible();
      obs.disconnect();
    }
  }, revealView);
  observer.observe(el);
  return () => observer.disconnect();
}
