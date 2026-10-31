"use client";

import * as React from "react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Magic UI — BlurFade. The shared scroll-reveal primitive of this site:
 * small rise (10px) + blur clear, staggered by caller-supplied delay.
 * Every use honours reduced motion through <MotionConfig reducedMotion="user">.
 */
interface BlurFadeProps extends Omit<React.ComponentProps<typeof motion.div>, "as"> {
  as?: "div" | "span";
  delay?: number;
  duration?: number;
  inView?: boolean;
  inViewMargin?: string;
}

export function BlurFade({
  as = "div",
  children,
  className,
  delay = 0,
  duration = 0.5,
  inView = true,
  inViewMargin = "-60px",
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const observed = useInView(ref, {
    once: true,
    margin: (inViewMargin ?? "-60px") as NonNullable<
      Parameters<typeof useInView>[1]
    >["margin"],
  });
  const visible = inView && observed;

  if (as === "span") {
    return (
      <motion.span
        ref={ref as unknown as React.Ref<HTMLSpanElement>}
        className={cn(className)}
        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
        animate={visible ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
        transition={{ delay: 0.02 * delay, duration, ease: [0.21, 0.47, 0.32, 0.98] }}
        {...props}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
      animate={visible ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined}
      transition={{ delay: 0.02 * delay, duration, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

