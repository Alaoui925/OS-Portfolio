import { FileDown, Github } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionLabel } from "@/components/sections/section-label";
import { profile } from "@/lib/data/profile";

/**
 * 06 — Contact. The one primary action of this view is the email —
 * it carries the size; GitHub and CV are supporting rails.
 */
export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="mx-auto max-w-(--max-w) px-5 py-(--space-section) sm:px-8">
      <SectionLabel index="06" title="Contact" hint="OPEN CHANNEL" />

      <BlurFade className="mt-12">
        <h2 className="display text-[clamp(2.2rem,1.4rem+4.4vw,5rem)]">
          Let's build <span className="text-brand">intelligent</span> things.
        </h2>
      </BlurFade>

      <BlurFade delay={1}>
        <p className="micro mt-5 text-muted">
          OPEN TO — AI ⁄ DATA-SCIENCE INTERNSHIP · FINAL-YEAR PROJECT (PFE)
        </p>
      </BlurFade>

      <BlurFade delay={2}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block max-w-full break-all font-body text-[clamp(1.25rem,1rem+2.2vw,2.5rem)] font-semibold text-ink underline-offset-8 transition-colors hover:text-brand hover:underline decoration-2"
        >
          {profile.email}
        </a>
      </BlurFade>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        <BlurFade delay={3}>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 border border-ink/70 px-6 py-6 transition-colors duration-200 hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
          >
            <span>
              <span className="micro block transition-colors group-hover:text-paper/60">
                REPOSITORY ⁄ ALAOUI925
              </span>
              <span className="font-body mt-1.5 block text-lg font-semibold transition-colors group-hover:text-paper">
                The code behind every claim here
              </span>
            </span>
            <Github
              className="size-6 shrink-0 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-brand-on-ink"
              aria-hidden="true"
            />
          </a>
        </BlurFade>

        <BlurFade delay={4}>
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-6 border border-ink/70 px-6 py-6 transition-colors duration-200 hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
          >
            <span>
              <span className="micro block transition-colors group-hover:text-paper/60">
                CV ⁄ PDF
              </span>
              <span className="font-body mt-1.5 block text-lg font-semibold transition-colors group-hover:text-paper">
                One-page consideration sheet
              </span>
            </span>
            <FileDown
              className="size-6 shrink-0 transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:text-brand-on-ink"
              aria-hidden="true"
            />
          </a>
        </BlurFade>
      </div>
    </section>
  );
}
