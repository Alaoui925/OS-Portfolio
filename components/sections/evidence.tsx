import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/sections/section-label";
import { timeline } from "@/lib/data/timeline";

/**
 * 05 — Evidence. Rows with oversized ghost numerals; hover stays
 * colour-only (layout never shifts). A stat band closes the section —
 * numbers only the repositories can falsify.
 */
export function Evidence() {
  return (
    <section id="evidence" aria-label="Evidence and achievements" className="mx-auto max-w-(--max-w) px-5 py-(--space-section) sm:px-8">
      <SectionLabel index="05" title="Evidence" hint="PROOF OF WORK" />

      <div className="mt-12 border-t border-line">
        {timeline.map((item, i) => (
          <BlurFade key={item.id} delay={i} className="group">
            <div className="grid gap-x-8 gap-y-4 border-b border-line py-8 transition-colors duration-300 group-hover:bg-well sm:grid-cols-[auto_1fr_auto] sm:items-start sm:px-4 md:py-10">
              <p
                aria-hidden="true"
                className="display text-5xl leading-none text-faint transition-colors duration-300 group-hover:text-brand/60 md:text-6xl"
              >
                {item.numeral}
              </p>
              <div>
                <h3 className="font-body text-xl font-semibold text-ink md:text-2xl">
                  {item.role}
                </h3>
                <p className="micro mt-1 text-brand">{item.org}</p>
                <p className="mt-3 max-w-prose text-sm text-soft">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
              <p className="micro tabular self-start text-muted sm:text-right">
                {item.period}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* stat band */}
      <div className="mt-(--space-block) grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          { value: 6, label: "Public repositories — all featured on this page" },
          { value: 1, label: "Hackathon — 1st place, EMSI" },
          { value: 3, label: "Working languages — AR · FR · EN" },
        ].map((stat, i) => (
          <div key={stat.label} className="bg-paper p-6 sm:p-8">
            <BlurFade delay={i}>
              <p className="display text-6xl md:text-7xl">
                <NumberTicker value={stat.value} className="text-ink" />
              </p>
              <p className="micro mt-3 text-muted">{stat.label}</p>
            </BlurFade>
          </div>
        ))}
      </div>
    </section>
  );
}
