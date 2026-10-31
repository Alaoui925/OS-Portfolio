import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionLabel } from "@/components/sections/section-label";
import { profile } from "@/lib/data/profile";

/**
 * 02 — Profile. A 7/5 asymmetric split: the ingress statement owns
 * the wide column, the portrait card sits in the narrow one.
 * Below, an A24-style tabular fact table — every row a hairline.
 */
export function About() {
  return (
    <section id="about" aria-label="Profile" className="mx-auto max-w-(--max-w) px-5 py-(--space-section) sm:px-8">
      <SectionLabel index="02" title="Profile" hint="ABOUT" />

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <BlurFade>
            <p className="display text-[clamp(1.7rem,1.2rem+1.9vw,2.9rem)]">
              From building software <span className="text-brand">to teaching it to learn.</span>
            </p>
          </BlurFade>

          <BlurFade delay={1}>
            <div className="mt-8 max-w-prose space-y-5 text-soft">
              <p>
                Since 2023 at EMSI I have built across the classic engineering
                core — algorithms in C/C++, OOP in Java and C#, databases, SQL,
                networks and Linux. On my own time that turned into products: a
                computer-vision drawing tool, a three-role hospital platform, a
                storefront, and this site.
              </p>
              <p>
                The next phase is deliberate: {profile.goal} I want to earn it
                the same way I learned to build software — by shipping, measuring
                and reading past the tutorial.
              </p>
              <p className="micro normal-case tracking-[0.04em] text-muted">
                // EVERY CLAIM ON THIS SITE TRACES TO A REPOSITORY — INCLUDING
                THIS SITE: GITHUB.COM⁄ALAOUI925⁄OS-PORTFOLIO
              </p>
            </div>
          </BlurFade>
        </div>

        <div className="lg:col-span-5">
          <BlurFade delay={2}>
            <figure>
              <div className="group relative">
                <span
                  aria-hidden="true"
                  className="chamfer absolute inset-0 translate-x-2 translate-y-2 border border-line"
                />
                <div className="chamfer relative bg-well">
                  <Image
                    src="/images/Profil.jpg"
                    alt="Portrait of Oussama El Alaoui"
                    width={880}
                    height={1100}
                    className="h-auto w-full object-cover"
                    sizes="(min-width: 1024px) 38vw, 92vw"
                  />
                </div>
              </div>
              <figcaption className="micro mt-3 text-muted">
                FIG.01 — {profile.name.toUpperCase()} ⁄ MOROCCO
              </figcaption>
            </figure>
          </BlurFade>
        </div>
      </div>

      {/* tabular fact rows */}
      <dl className="mt-16 border-t border-line">
        <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-line py-4 sm:grid-cols-[10rem_1fr]">
          <dt className="micro text-muted">Status</dt>
          <dd className="text-sm text-ink">
            {profile.education.program} — {profile.education.period}
          </dd>
        </div>
        <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-line py-4 sm:grid-cols-[10rem_1fr]">
          <dt className="micro text-muted">Focus</dt>
          <dd className="text-sm text-ink">{profile.goal}</dd>
        </div>
        <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-line py-4 sm:grid-cols-[10rem_1fr]">
          <dt className="micro text-muted">Looking&nbsp;for</dt>
          <dd className="text-sm font-medium text-brand">
            {profile.seeking.join(" · ")}
          </dd>
        </div>
        <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-line py-4 sm:grid-cols-[10rem_1fr]">
          <dt className="micro text-muted">Languages</dt>
          <dd className="text-sm text-ink">
            {profile.languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(" · ")}
          </dd>
        </div>
        <div className="grid grid-cols-[7rem_1fr] items-baseline gap-4 border-b border-line py-4 sm:grid-cols-[10rem_1fr]">
          <dt className="micro text-muted">Base</dt>
          <dd className="text-sm text-ink">Morocco — open to remote ⁄ on-site</dd>
        </div>
      </dl>
    </section>
  );
}
