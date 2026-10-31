import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { SectionLabel } from "@/components/sections/section-label";
import { skillGroups } from "@/lib/data/skills";

/**
 * 04 — Stack. Evidence first: the AI & Data group is the headline row
 * (it is the direction), the remaining four follow in a two-column field.
 * Every group cites the project or coursework that proves it.
 */
export function Stack() {
  const [aiData, ...rest] = skillGroups;

  return (
    <section id="stack" aria-label="Stack and toolbox" className="mx-auto max-w-(--max-w) px-5 py-(--space-section) sm:px-8">
      <SectionLabel index="04" title="Stack" hint="TOOLBOX — EVIDENCE-BASED" />

      <BlurFade className="mt-12">
        <div className="grid gap-6 border border-line bg-well p-6 sm:p-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="display text-2xl">{aiData.title}</h3>
            <p className="mt-2 text-sm text-muted">{aiData.note}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-wrap gap-1.5">
              {aiData.skills.map((skill) => (
                <Badge key={skill} variant="brand">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <p className="micro text-muted">Used in</p>
            <p className="mt-2 text-sm text-soft">{aiData.evidence}</p>
          </div>
        </div>
      </BlurFade>

      <div className="mt-10 grid gap-x-14 gap-y-12 sm:grid-cols-2">
        {rest.map((group, i) => (
          <BlurFade key={group.id} delay={i + 1} className="border-t border-line pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="display text-lg">
                {group.title}
              </h3>
              <span className="font-mono text-[0.625rem] tabular text-muted">
                0{i + 2}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted">{group.note}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
            <p className="micro mt-4 text-muted normal-case">
              USED IN — {group.evidence}
            </p>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
