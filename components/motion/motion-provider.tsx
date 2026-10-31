"use client";

import { MotionConfig } from "motion/react";
import * as React from "react";

/**
 * Global motion contract for the site: users with prefers-reduced-motion
 * get every Motion animation rendered as an instant state change —
 * the CSS fallback in globals.css covers the animate-* utilities too.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
