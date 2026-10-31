"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

/**
 * Fixed top bar of the Atlas. Twelve-col mono chrome: name mark left,
 * index-numbered nav right. Gains a hairline + paper blur once the page
 * scrolls. On mobile the nav folds into a full-height overlay panel.
 */
export function TopBar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const wasOpen = React.useRef(false);

  React.useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (wasOpen.current && !open) triggerRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const menu = document.getElementById("mobile-menu");
    const focusables = () =>
      menu
        ? Array.from(
            menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
          )
        : [];
    // move focus into the dialog once it mounts
    requestAnimationFrame(() => {
      focusables()[0]?.focus();
    });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      // simple focus trap — Tab cycles inside the overlay
      if (e.key === "Tab") {
        const items = focusables();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-(--bar-h) transition-colors duration-300",
          scrolled
            ? "bg-paper/88 shadow-bar backdrop-blur-sm border-b border-line"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-full max-w-(--max-w) items-center justify-between gap-6 px-5 sm:px-8">
          <a
            href="#top"
            className="micro text-ink transition-colors duration-200 hover:text-brand"
          >
            OUSSAMA EL ALAOUI
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-6 md:flex">
            {navLinks.slice(1).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="micro text-muted transition-colors duration-200 hover:text-brand"
              >
                <span className="text-brand">{l.index}</span>
                <span className="ml-1.5">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <p className="micro hidden items-center gap-2 text-muted lg:flex">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-brand animate-gauge-pulse"
              />
              Open&nbsp;to&nbsp;AI/DS · PFE
            </p>
            <button
              ref={triggerRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="micro border border-ink/60 px-3 py-2.5 text-ink transition-colors duration-200 hover:bg-ink hover:text-paper md:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-50 flex flex-col bg-paper px-5 pt-5 sm:px-8"
          >
            <div className="flex h-(--bar-h) items-center justify-between">
              <p className="micro text-ink">OUSSAMA EL ALOUI</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="border border-ink/60 p-2 text-ink transition-colors duration-200 hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
                aria-label="Close menu"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Sections (mobile)" className="mt-10 flex flex-col">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.3, ease: "easeOut" }}
                  className="display flex items-baseline gap-4 border-b border-line py-4 text-[2rem] text-ink transition-colors hover:text-brand"
                >
                  <span className="font-mono text-xs tracking-[0.08em] text-brand">
                    {l.index}
                  </span>
                  {l.label.toUpperCase()}
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto mb-6 flex items-center justify-between">
              <p className="micro text-muted">MOROCCO · 2026</p>
              <a
                href="https://github.com/Alaoui925"
                target="_blank"
                rel="noreferrer"
                className="micro inline-flex items-center gap-1 text-ink hover:text-brand"
              >
                GITHUB ↗
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
