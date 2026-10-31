"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data/profile";

/**
 * Footer — the one deliberate dark band on the page (an ink accent,
 * per the brief: dark permitted on small details only).
 */
function LocalClock() {
  const [time, setTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Africa/Casablanca",
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span suppressHydrationWarning>{time ?? "--:--"}</span>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-(--max-w) grid-cols-2 items-center gap-4 px-5 py-6 sm:px-8 md:grid-cols-3">
        <p className="micro text-paper/70">
          {profile.initials}·A925 — © 2026
        </p>
        <p className="micro text-paper/70 max-md:col-start-1 max-md:row-start-2 md:text-center">
          Morocco — local time <LocalClock />
        </p>
        <div className="flex justify-end max-md:col-start-2 max-md:row-start-1">
          <a
            href="#top"
            className="micro inline-flex items-center gap-1.5 text-paper/70 transition-colors duration-200 hover:text-brand-on-ink"
          >
            BACK TO TOP
            <ArrowUp className="size-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
