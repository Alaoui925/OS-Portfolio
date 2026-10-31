import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { profile } from "@/lib/data/profile";
import { stackMarquee } from "@/lib/data/projects";
import { Marquee } from "@/components/magicui/marquee";

/**
 * 01 — Hero. One message per viewport: who I am, what I'm becoming,
 * and where to go next. On large screens the right column carries the
 * dossier panel — real profile data, not decoration.
 */
export function Hero() {
  return (
    <article id="top" aria-label="Start" className="relative overflow-hidden">
      {/* dot-grid motif, fading left */}
      <DotPattern className="pointer-events-none absolute inset-y-0 right-0 w-3/4 opacity-70 [mask-image:linear-gradient(to_left,black_10%,transparent_85%)]" />

      <div className="relative mx-auto flex min-h-svh max-w-(--max-w) flex-col justify-center px-5 pb-16 pt-32 sm:px-8 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <BlurFade delay={0} duration={0.6}>
              <p className="micro flex items-center gap-2.5 text-muted">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-brand animate-gauge-pulse"
                />
                {profile.role} — EMSI · MOROCCO
              </p>
            </BlurFade>

            <h1 className="display mt-6 text-[clamp(2.9rem,1.3rem+6vw,6.5rem)]">
              <BlurFade as="span" delay={1} duration={0.55} className="block">
                <span className="block">Teaching machines</span>
              </BlurFade>
              <BlurFade as="span" delay={2} duration={0.55} className="block">
                <span className="block text-brand">to see.</span>
              </BlurFade>
            </h1>

            <BlurFade delay={3} duration={0.55}>
              <p className="mt-8 max-w-2xl text-lg text-soft sm:text-xl leading-relaxed">
                I'm {profile.name} — engineering student at EMSI
                (Computer&nbsp;Science&nbsp;&&nbsp;Networks, 2023–2028). I build
                real software with Python, OpenCV and React today, and I'm
                training toward data science, machine learning and deep learning
                tomorrow.{" "}
                <strong className="font-semibold text-ink">
                  Open to an AI/Data-Science internship and a final-year project
                  (PFE).
                </strong>
              </p>
            </BlurFade>

            <BlurFade delay={4} duration={0.55}>
              <div className="mt-10 flex flex-wrap items-center gap-3.5">
                <Button href="#work" variant="ink" size="lg">
                  View selected work
                  <ArrowDown className="size-4" aria-hidden="true" />
                </Button>
                <Button href="#contact" variant="outline" size="lg">
                  Get in touch
                </Button>
                <Button
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  variant="link"
                  size="lg"
                >
                  CV / PDF
                  <FileDown className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={4} duration={0.6} className="hidden lg:block lg:col-span-4">
            <DossierPanel />
          </BlurFade>
        </div>

        <BlurFade delay={5} duration={0.55}>
          <div className="micro mt-16 flex items-center justify-between gap-4 border-t border-line pt-4 text-muted">
            <span className="inline-flex items-center gap-2">
              SCROLL ⁄ 01–06
              <ArrowDown className="size-3" aria-hidden="true" />
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-brand"
            >
              GITHUB — ALAOUI925
              <ArrowUpRight className="size-3" aria-hidden="true" />
            </a>
          </div>
        </BlurFade>
      </div>
    </article>
  );
}

/**
 * The dossier — every row is verifiable profile data, the same
 * tabular-label grammar the case studies use. Sits in the hero's
 * right column on desktop only.
 */
function DossierPanel() {
  const rows = [
    { label: "Role", value: "AI engineer-in-training" },
    { label: "Program", value: "CS & Networks ⁄ '23–'28" },
    { label: "Building with", value: "Python · OpenCV · React" },
    { label: "Training toward", value: "DS ⁄ ML → Deep Learning" },
    { label: "Base", value: "Morocco" },
  ];

  return (
    <aside aria-label="Profile summary" className="relative">
      {/* echo frame */}
      <span
        aria-hidden="true"
        className="chamfer absolute inset-0 -translate-x-2 translate-y-2 border border-line"
      />
      <div className="chamfer relative border border-line bg-well px-6 py-6">
        <p className="micro flex items-center justify-between gap-3 text-muted">
          <span className="text-ink">
            <span className="text-brand">DOSSIER</span> ⁄ OE·A925
          </span>
          <span aria-hidden="true" className="size-2 bg-brand" />
        </p>

        <dl className="mt-5 border-t border-line">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[8.5rem_1fr] items-baseline gap-3 border-b border-line py-3"
            >
              <dt className="micro text-muted">{row.label}</dt>
              <dd className="text-sm font-medium text-ink">{row.value}</dd>
            </div>
          ))}
          <div className="grid grid-cols-[8.5rem_1fr] items-baseline gap-3 border-b border-line py-3">
            <dt className="micro text-muted">Status</dt>
            <dd className="flex items-center gap-2 text-sm font-medium text-brand">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-brand animate-gauge-pulse"
              />
              Open to internship · PFE
            </dd>
          </div>
        </dl>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="micro mt-4 inline-flex items-center gap-1 text-ink underline-offset-4 transition-colors hover:text-brand hover:underline"
        >
          GITHUB ⁄ ALAOUI925
          <ArrowUpRight className="size-3" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}

/**
 * Tech ribbon — every item is evidence-backed (used in a real project
 * or coursework). Pure-CSS marquee, pauses on hover.
 */
export function MarqueeStrip() {
  return (
    <div className="border-y border-line bg-well py-3" aria-hidden="true">
      <Marquee duration="44s" pauseOnHover>
        {stackMarquee.map((tool) => (
          <span
            key={tool}
            className="micro flex items-center gap-4 whitespace-nowrap text-muted"
          >
            {tool}
            <span className="text-brand">⁄</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
