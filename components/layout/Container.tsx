import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Centered content column matching the Figma canvas: 1170px of content with
 * 135px side gutters at ≥1440px, tightening to smaller padding on narrow viewports.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-[135px]", className)}>
      {children}
    </div>
  );
}
