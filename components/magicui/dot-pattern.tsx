import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Atlas dot-grid motif — pure SVG pattern (server-renderable, zero JS),
 * standing in for Magic UI's canvas DotPattern at a fraction of the weight.
 */
export function DotPattern({
  gap = 20,
  radius = 1.05,
  className,
}: {
  gap?: number;
  radius?: number;
  className?: string;
}) {
  return (
    <svg aria-hidden="true" className={cn("h-full w-full", className)}>
      <defs>
        <pattern
          id="atlas-dots"
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={gap / 2} cy={gap / 2} r={radius} fill="var(--line-strong)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#atlas-dots)" />
    </svg>
  );
}
