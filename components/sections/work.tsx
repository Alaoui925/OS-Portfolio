"use client";

import * as React from "react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { SectionLabel } from "@/components/sections/section-label";
import { exhibitProjects, type Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

/**
 * 03 — Selected work. Pinned horizontal exhibit.
 *
 * The section docks to the viewport (CSS `sticky` stage over a scroll
 * runway of `100svh + track overflow`) and vertical scroll drives the card
 * track right→left. Movement is scroll-linked — no horizontal scrollbar,
 * no scroll event hijacking — and spring-smoothed (≈ GSAP "scrub: 1").
 * The mechanical model follows two Awwwards references measured in the
 * research step: Brave People (linear scrub rail, scroll distance ≈ track
 * overflow, discrete eased accents) and TARQ (calm light editorial pacing).
 *
 * Under 768px, or when the user prefers reduced motion, the pin is skipped
 * entirely and the cards stack vertically with native scrolling.
 */

const SPRING = { stiffness: 140, damping: 32, mass: 0.4 } as const;
const PARALLAX = 10; /* px the image drifts inside its window */
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export function Work() {
  const [mode, setMode] = useState<"rail" | "stack">("rail");

  // rail ⇄ stack — narrow viewport or reduced-motion preference shows the
  // simple stacked layout (and motion always stays scroll-driven, never
  // auto-playing, in either mode).
  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 767.98px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const decide = () =>
      setMode(narrow.matches || reduced.matches ? "stack" : "rail");
    decide();
    narrow.addEventListener("change", decide);
    reduced.addEventListener("change", decide);
    return () => {
      narrow.removeEventListener("change", decide);
      reduced.removeEventListener("change", decide);
    };
  }, []);

  return (
    <section id="work" aria-label="Selected work">
      <div className="mx-auto max-w-(--max-w) px-5 pt-(--space-section) pb-10 sm:px-8">
        <SectionLabel index="03" title="Selected work" hint="PINNED SHOWCASE — 05" />
      </div>
      {mode === "rail" ? <Rail /> : <Stack />}
    </section>
  );
}

/* ── rail: the pinned stage ───────────────────────────────── */

function Rail() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const cardsRef = useRef<Array<HTMLElement | null>>([]);
  const overflowRef = useRef(0);
  const activeRef = useRef(0);

  const count = exhibitProjects.length;

  const x = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  // display progress derived from the same spring — bar, counter and the
  // active-card emphasis stay in step with what is actually on screen
  const progress = useTransform(springX, (v) =>
    overflowRef.current > 0 ? clamp01(-v / overflowRef.current) : 0,
  );

  // The pin itself is CSS sticky; JS only maps window scroll → track x
  // (≈ 1px scroll : 1px translate, the reference scrub ratio). Re-measured
  // on resize; media lives in fixed-ratio boxes, so image loading can never
  // shift the track.
  useLayoutEffect(() => {
    const runway = runwayRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!runway || !stage || !track) return;

    let overflow = 0;

    const measure = () => {
      overflow = Math.max(0, track.scrollWidth - stage.clientWidth);
      overflowRef.current = overflow;
      runway.style.setProperty("--exhibit-overflow", `${overflow}px`);
    };

    const drive = () => {
      const vh = window.innerHeight;
      const runwayTop = runway.getBoundingClientRect().top + window.scrollY;
      const span = Math.max(1, runway.offsetHeight - vh);
      const p = clamp01((window.scrollY - runwayTop) / span);
      x.set(-p * overflow);
    };

    const onResize = () => {
      measure();
      drive();
    };

    measure();
    drive();

    window.addEventListener("scroll", drive, { passive: true });
    window.addEventListener("resize", onResize);

    // will-change lives only while the exhibit is near the viewport
    const observer = new IntersectionObserver(
      ([entry]) => runway.classList.toggle("is-animating", entry?.isIntersecting ?? false),
      { rootMargin: "30% 0px" },
    );
    observer.observe(runway);

    return () => {
      window.removeEventListener("scroll", drive);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      runway.classList.remove("is-animating");
    };
  }, [x]);

  // active card + counter — written straight to the DOM on spring updates,
  // never through React state, so a scroll pass costs zero re-renders
  useMotionValueEvent(progress, "change", (p) => {
    const idx = Math.max(0, Math.min(count - 1, Math.round(p * (count - 1))));
    if (idx === activeRef.current) return;
    activeRef.current = idx;
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      if (i === idx) card.setAttribute("data-active", "true");
      else card.removeAttribute("data-active");
    });
    if (counterRef.current) {
      counterRef.current.textContent = String(idx + 1).padStart(2, "0");
    }
  });

  // keyboard: focusing an off-screen card scrolls the runway to that card.
  // The track jumps straight to it — a keyboard user wants the card now,
  // not a second of smoothing; wheel scrolling keeps the spring.
  const focusOnCard = (event: React.FocusEvent<HTMLDivElement>) => {
    const card = (event.target as HTMLElement).closest<HTMLElement>("[data-card-index]");
    if (!card) return;
    const idx = Number(card.dataset.cardIndex);
    const runway = runwayRef.current;
    if (!runway || Number.isNaN(idx)) return;
    const overflow = overflowRef.current;
    if (overflow <= 0) return;
    const top = runway.getBoundingClientRect().top + window.scrollY;
    const at = count > 1 ? idx / (count - 1) : 0;
    const targetX = -at * overflow;
    window.scrollTo({ top: top + at * overflow, behavior: "instant" });
    x.set(targetX);
    springX.jump(targetX);
  };

  return (
    <div
      ref={runwayRef}
      className="work-runway relative"
      style={{ "--exhibit-overflow": "0px" } as React.CSSProperties}
      onFocusCapture={focusOnCard}
    >
      <div ref={stageRef} className="sticky top-0 h-svh overflow-clip">
        <motion.ol
          ref={trackRef}
          aria-label="Selected projects"
          className="exhibit-track flex h-full w-max list-none items-center gap-(--exhibit-gap) pl-(--exhibit-inset) pr-(--exhibit-inset)"
          style={{ x: springX }}
        >
          {exhibitProjects.map((project, i) => (
            <li key={project.id} className="relative list-none">
              <span
                aria-hidden="true"
                className="chamfer absolute inset-0 translate-x-2 translate-y-2 border border-line"
              />
              <WorkCard
                project={project}
                rail
                progress={progress}
                idx={i}
                count={count}
                cardRef={(el) => {
                  cardsRef.current[i] = el;
                }}
              />
            </li>
          ))}
        </motion.ol>

        {/* progress: counter + hairline bar, decorative — screen readers
            reach the cards in DOM order, one scroll at a time */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-(--exhibit-inset) bottom-[2svh] flex items-center gap-5"
        >
          <p className="micro tabular">
            <span ref={counterRef} className="text-ink">01</span>
            <span className="text-muted"> ⁄ {String(count).padStart(2, "0")}</span>
          </p>
          <div className="relative h-px flex-1 bg-line">
            <motion.div
              className="absolute left-0 top-[-1px] h-[3px] w-full origin-left bg-brand"
              style={{ scaleX: progress }}
            />
          </div>
          <p className="micro tabular text-muted">SCROLL ⁄ PIN</p>
        </div>
      </div>
    </div>
  );
}

/* ── stack: <768px / reduced-motion fallback ─────────────── */

function Stack() {
  return (
    <div className="mx-auto max-w-(--max-w) px-5 pb-(--space-section) pt-10 sm:px-8">
      <ol aria-label="Selected projects" className="list-none space-y-(--space-block) p-0">
        {exhibitProjects.map((project, i) => (
          <li key={project.id}>
            <BlurFade delay={i % 3}>
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="chamfer absolute inset-0 translate-x-2 translate-y-2 border border-line"
                />
                <WorkCard project={project} rail={false} idx={i} count={exhibitProjects.length} />
              </div>
              <p className="micro mt-3 text-muted">
                FIG.0{project.index.slice(-1)} — {project.name.toUpperCase()} ⁄ {project.year}
              </p>
            </BlurFade>
          </li>
        ))}
      </ol>
      <p className="micro mt-14 border-t border-line pt-6 text-muted normal-case">
        ⁄⁄ 05 repos on the rail — full sources at github.com⁄Alaoui925
      </p>
    </div>
  );
}

/* ── the card: one fixed slot contract, every instance ────── */

function WorkCard({
  project,
  rail,
  progress,
  idx,
  count,
  cardRef,
}: {
  project: Project;
  rail: boolean;
  /* present in rail mode only; the stacked calling site passes none */
  progress?: MotionValue<number>;
  idx: number;
  count: number;
  cardRef?: (el: HTMLElement | null) => void;
}) {
  // stable hook chain in both modes; the fallback value never animates
  const zero = useMotionValue(0);
  const source = progress ?? zero;
  // this card sits on screen around p ≈ idx/(count-1) — give its image a
  // slower parcel drift (±PARALLAX px) across that window, legibility-grade
  const f = count > 1 ? idx / (count - 1) : 0.5;
  const mediaX = useTransform(source, [clamp01(f - 0.65), clamp01(f + 0.65)], [-PARALLAX, PARALLAX]);

  const visual = project.visual;

  return (
    <article
      ref={cardRef}
      data-card-index={idx}
      data-active={rail && idx === 0 ? "true" : undefined}
      aria-labelledby={`${project.id}-exhibit-title`}
      className={cn(
        "chamfer relative flex flex-col overflow-hidden border border-line bg-raised",
        rail ? "work-card shadow-card" : "w-full",
      )}
    >
      {/* media slot — one shared aspect-video (16/9) class in both modes, so
          the proportion is identical on every card, every viewport.
          object-cover anchored top-left keeps app-screenshot headers (logo,
          product title) in frame instead of slicing them. */}
      <div
        className={cn(
          "relative shrink-0 overflow-hidden border-b border-line bg-well",
          "aspect-video w-full",
        )}
      >
        <span
          aria-hidden="true"
          className="micro absolute left-0 top-0 z-10 border-b border-r border-line bg-raised px-3 py-1.5 text-ink tabular"
        >
          {project.index}
        </span>

        {/* px-based overhang ≥ 2 × PARALLAX at any card width */}
        {visual.kind === "image" ? (
          <div className="absolute inset-y-0 left-[-12px] w-[calc(100%+24px)]">
            <motion.div className="exhibit-media-x h-full w-full" style={{ x: mediaX }}>
              <Image
                src={visual.src}
                alt={visual.alt}
                width={visual.width}
                height={visual.height}
                className="h-full w-full object-cover object-left-top"
                sizes="(min-width: 768px) 65vw, 100vw"
              />
            </motion.div>
          </div>
        ) : visual.kind === "gestures" ? (
          <GesturesPanel />
        ) : null}
      </div>

      {/* body slots */}
      <div className="flex min-h-0 flex-1 flex-col px-7 py-6 sm:px-8">
        <div className="flex items-baseline justify-between gap-4">
          <p className="micro text-muted">{project.category}</p>
          <p className="micro tabular text-muted">{project.year}</p>
        </div>

        <h3
          id={`${project.id}-exhibit-title`}
          className="display mt-2 text-[clamp(1.6rem,1.1rem+1.7vw,2.4rem)]"
        >
          {project.name}
        </h3>

        <p className="mt-3 line-clamp-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-soft">
          {project.exhibit ?? project.description}
        </p>

        {project.contentPlaceholder ? (
          <p className="micro mt-2 text-muted normal-case">
            ⁄⁄ repo README pending — description carried from the previous content audit
          </p>
        ) : null}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 6).map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
            {project.stack.length > 6 ? (
              <Badge className="border-transparent text-muted">+{project.stack.length - 6}</Badge>
            ) : null}
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              href={project.github}
              target="_blank"
              rel="noreferrer"
              variant="ink"
              size={rail ? "sm" : "md"}
            >
              GitHub
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </Button>
            {/* sites with a verified deployment link it; the rest carry the
                disabled pending chip — never invent a live URL */}
            {project.demo ? (
              <Button
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size={rail ? "sm" : "md"}
              >
                Live demo
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Button>
            ) : (
              <span
                aria-disabled="true"
                title="Live demo link not published yet — GitHub is the live link for now"
                className={cn(
                  buttonVariants({ variant: "outline", size: rail ? "sm" : "md" }),
                  "cursor-not-allowed opacity-45",
                )}
              >
                Live demo <span className="text-muted">⁄ pending</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * AirCanvas's real gesture map — the drawing surface described by the
 * repository itself: index → pencil (trajectory + landmark dots),
 * index+middle → eraser, anything else → idle. Drawn on a 16:10 plate
 * so it fills the rail media slot edge to edge.
 */
function GesturesPanel() {
  return (
    <svg
      viewBox="0 0 480 270"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="AirCanvas gesture map — fingertip trajectory, landmarks and tool states"
      className="h-full w-full"
    >
      {/* landmark cluster */}
      {[
        [232, 160], [246, 147], [262, 137], [276, 129], [288, 124],
        [224, 174], [242, 168], [258, 160], [272, 155],
        [152, 201], [168, 194], [184, 185], [198, 177], [212, 171],
        [204, 189], [214, 183], [224, 177], [232, 173],
        [196, 205], [204, 198], [212, 192],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={2.6} fill="var(--ink)" opacity={0.35} />
      ))}
      {/* pencil trajectory */}
      <path
        d="M96 222 C 150 187, 190 180, 240 160 S 340 112, 396 63"
        fill="none"
        stroke="var(--brand)"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <circle cx="396" cy="63" r={4.5} fill="var(--brand)" />
      <text
        x="386"
        y="70"
        textAnchor="end"
        fontFamily="var(--font-mono), monospace"
        fontSize={10}
        letterSpacing="1.5"
        fill="var(--brand)"
      >
        INDEX → PENCIL
      </text>

      {/* tool states */}
      <g fontFamily="var(--font-mono), monospace" fontSize={11} letterSpacing="1.5">
        <rect x="24" y="22" width="104" height="28" fill="var(--ink)" />
        <text x="36" y="40" fill="var(--paper)">PENCIL ●</text>
        <rect x="140" y="22" width="96" height="28" fill="none" stroke="var(--line-strong)" />
        <text x="152" y="40" fill="var(--ink-muted)">ERASER</text>
        <rect x="248" y="22" width="76" height="28" fill="none" stroke="var(--line-strong)" />
        <text x="260" y="40" fill="var(--ink-muted)">IDLE</text>
      </g>
      <text
        x="24"
        y="256"
        fontFamily="var(--font-mono), monospace"
        fontSize={10}
        letterSpacing="1.5"
        fill="var(--ink-muted)"
      >
        MEDIAPIPE · 21 LANDMARKS · ~30 FPS
      </text>
    </svg>
  );
}
