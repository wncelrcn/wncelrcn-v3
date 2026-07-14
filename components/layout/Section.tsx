import { type ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/**
 * A page section with consistent vertical rhythm and a centered content column.
 * Pass `id` to make it an anchor target for the nav.
 */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
