import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionTitle
          label="Skills"
          title="Evidence,"
          highlight="not percentages"
          subtitle="No progress bars. Every group points to where the skill was actually used."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 0.06}
              className={`card-surface p-6 md:p-8 ${
                index === skillGroups.length - 1 && skillGroups.length % 2 === 1
                  ? "md:col-span-2"
                : ""
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
                <span className="text-xs italic text-muted">{group.note}</span>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-[0.78rem] leading-relaxed text-muted mt-5 pt-4 border-t border-line">
                <span className="text-accent font-semibold uppercase tracking-[0.16em] text-[0.62rem] mr-2">
                  Evidence
                </span>
                {group.evidence}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
