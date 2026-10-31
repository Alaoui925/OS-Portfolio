"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Magic UI — NumberTicker. Counts up when scrolled into view, once.
 * Spring physics instead of linear ticking; formatting is locale-stable.
 * With reduced-motion, MotionConfig turns the spring into an instant set.
 */
export function NumberTicker({
  value,
  startValue = 0,
  delay = 0,
  className,
}: {
  value: number;
  startValue?: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 120 });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => motionValue.set(value), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [motionValue, isInView, delay, value]);

  useEffect(
    () =>
      springValue.on("change", (latest: number) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            Number(latest.toFixed(0)),
          );
        }
      }),
    [springValue],
  );

  return (
    <span ref={ref} className={cn("inline-block tabular", className)}>
      {startValue}
    </span>
  );
}
