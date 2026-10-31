import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Magic UI — Marquee (CSS-driven, no JS timers).
 * Duplicated track + translateX keyframes; pauses on hover.
 */
interface MarqueeProps extends React.ComponentProps<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
  gap?: string;
}

export function Marquee({
  reverse = false,
  pauseOnHover = false,
  duration = "38s",
  gap = "1rem",
  className,
  ...props
}: MarqueeProps) {
  const track = cn(
    "group-hover:[animation-play-state:paused] w-max shrink-0 flex items-center gap-(--marquee-gap) animate-marquee",
    reverse && "[animation-direction:reverse]",
  );

  return (
    <div
      style={{ "--marquee-duration": duration, "--marquee-gap": gap } as React.CSSProperties}
      className={cn("group flex w-full flex-1 overflow-hidden [--marquee-gap:1rem]", className)}
      {...props}
    >
      <div className={track}>{props.children}</div>
      <div className={track} aria-hidden="true">
        {props.children}
      </div>
    </div>
  );
}
