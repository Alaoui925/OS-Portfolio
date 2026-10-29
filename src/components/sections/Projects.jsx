import { ExternalLink, Github, Pointer, Eraser, Hand } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";

/* ── Bespoke visuals ──────────────────────────────
   Authentic panels instead of fake screenshots. */

function GesturePanel() {
  const gestures = [
    { Icon: Pointer, pose: "Index finger only", action: "Pencil — draws cyan strokes" },
    { Icon: Eraser, pose: "Index + middle up", action: "Eraser — clears strokes" },
    { Icon: Hand, pose: "Any other pose", action: "Idle — hand ignored" },
  ];

  return (
    <div className="card-surface p-6 md:p-7 h-full flex flex-col justify-between">
      <div>
        <p className="eyebrow mb-5">Gesture map</p>
        <ul className="grid gap-3">
          {gestures.map(({ Icon, pose, action }) => (
            <li
              key={pose}
              className="flex items-center gap-4 rounded-xl border border-line bg-secondary px-4 py-3.5"
            >
              <span className="w-9 h-9 shrink-0 rounded-full bg-accent-soft border border-accent/25 flex items-center justify-center text-accent">
                <Icon size={17} strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink">{pose}</span>
                <span className="block text-xs text-muted mt-0.5">{action}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mt-6">
        {["21 landmarks / frame", "~30 FPS", "moving-average smoothing"].map((t) => (
          <span key={t} className="chip font-mono text-[0.68rem]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ScreenshotFrame({ src, alt }) {
  return (
    <figure className="rounded-2xl border border-line bg-surface p-2.5 shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 px-3 py-2" aria-hidden="true">
        <span className="w-2 h-2 rounded-full bg-line" />
        <span className="w-2 h-2 rounded-full bg-line" />
        <span className="w-2 h-2 rounded-full bg-line" />
        <span className="ml-2 h-3 w-40 rounded-full bg-line/70" />
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="rounded-xl w-full object-cover border border-line/60"
      />
    </figure>
  );
}

/* ── Case study block ───────────────────────────── */

function CaseStudy({ project, index }) {
  const flip = index % 2 === 1;

  return (
    <article className="border-t border-line pt-14 md:pt-20 first:border-t-0 first:pt-0">
      <div
        className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          flip ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Visual */}
        <Reveal y={26} className="min-w-0">
          {project.visual === "gestures" ? (
            <GesturePanel />
          ) : project.image ? (
            <ScreenshotFrame
              src={project.image}
              alt={`${project.name} screenshot — the real interface of the project`}
            />
          ) : null}
        </Reveal>

        {/* Copy */}
        <Reveal y={26} delay={0.08} className="min-w-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
            {project.category} · {project.year}
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-medium text-ink mt-3">
            {project.name}
          </h3>
          <p className="text-muted mt-1.5 text-sm md:text-base">{project.tagline}</p>

          <p className="text-muted leading-relaxed mt-5 text-[0.92rem] md:text-base">
            {project.description}
          </p>

          {project.problem && (
            <div className="mt-6 rounded-xl border border-line bg-surface p-5">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-accent font-semibold">
                The problem
              </p>
              <p className="text-[0.85rem] md:text-sm text-muted leading-relaxed mt-2">
                {project.problem}
              </p>
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-accent font-semibold mt-4">
                My role
              </p>
              <p className="text-[0.85rem] md:text-sm text-muted leading-relaxed mt-2">
                {project.role}
              </p>
            </div>
          )}

          {project.features && (
            <div className="mt-6">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted font-semibold mb-3">
                Key features
              </p>
              <ul className="grid gap-2">
                {project.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-[0.85rem] md:text-sm text-muted leading-relaxed">
                    <span aria-hidden="true" className="text-accent mt-[0.35rem]">
                      <svg width="9" height="9" viewBox="0 0 10 10">
                        <path d="M5 0l1.2 3.8H10L6.8 6l1.2 3.8L5 7.5 1.2 9.8 2.4 6 0 3.8h3.8z" fill="currentColor" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.decisions && (
            <div className="mt-6">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-muted font-semibold mb-3">
                Technical decisions
              </p>
              <ul className="grid gap-2">
                {project.decisions.map((decision) => (
                  <li key={decision} className="text-[0.82rem] md:text-sm text-muted leading-relaxed border-l-2 border-accent/40 pl-3.5 py-0.5">
                    {decision}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack + links */}
          <div className="mt-7 flex flex-wrap items-center gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="chip chip-accent text-[0.7rem] font-mono">{tech}</span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-3"
            >
              <Github size={15} strokeWidth={2} />
              View repository
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-3"
              >
                <ExternalLink size={15} strokeWidth={2} />
                Live demo
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

/* ── Section ────────────────────────────────────── */

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container-custom">
        <Reveal className="max-w-2xl mb-14 md:mb-20">
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="heading-display">
            Projects, <span className="text-accent">with receipts</span>
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed mt-4">
            Every case study links to the real public repository. Where a demo
            doesn't exist yet, the code and the README are the source of truth —
            no mockups, no invented metrics.
          </p>
        </Reveal>

        <div className="space-y-16 md:space-y-20">
          {featured.map((project, index) => (
            <CaseStudy key={project.id} project={project} index={index} />
          ))}
        </div>

        {others.length > 0 && (
          <div className="mt-16 md:mt-20 border-t border-line pt-10">
            <p className="eyebrow mb-6">Also on GitHub</p>
            <div className="grid md:grid-cols-2 gap-5">
              {others.map((project) => (
                <Reveal
                  key={project.id}
                  className="card-surface p-5 md:p-6 flex items-start justify-between gap-5 group"
                >
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-ink group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted mt-1.5 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span key={tech} className="chip text-[0.65rem] font-mono">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="shrink-0 w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-colors"
                  >
                    <Github size={15} strokeWidth={1.75} />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
