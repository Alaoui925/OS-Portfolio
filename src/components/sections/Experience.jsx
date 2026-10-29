import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import experience from "@/data/experience";

const kindStyles = {
  education: { label: "Education", cls: "border-accent/40 bg-accent-soft text-accent" },
  award: { label: "Award", cls: "border-accent/40 bg-accent-soft text-accent" },
  certification: { label: "Certification", cls: "border-line bg-surface text-muted" },
  experience: { label: "Projects", cls: "border-line bg-surface text-muted" },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionTitle
          label="Experience & Education"
          title="The timeline"
          highlight="so far"
          subtitle="Early in the career, honest about it — but everything below actually happened."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* spine */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] md:left-[9px] top-1.5 bottom-1.5 w-px bg-gradient-to-b from-accent/50 via-line to-transparent"
          />

          <div className="space-y-10">
            {experience.map((item, index) => {
              const kind = kindStyles[item.kind] ?? kindStyles.experience;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
                  className="relative pl-9 md:pl-12"
                >
                  {/* node */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 ${
                      item.kind === "education" || item.kind === "award"
                        ? "border-accent bg-accent-soft"
                        : "border-line bg-primary"
                    }`}
                  />

                  <div className="card-surface p-6 md:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`px-2.5 py-1 rounded-full border text-[0.6rem] font-semibold uppercase tracking-[0.2em] ${kind.cls}`}
                      >
                        {kind.label}
                      </span>
                      <span className="font-mono text-xs text-muted">{item.period}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-semibold text-ink mt-3.5">
                      {item.role}
                    </h3>
                    <p className="text-sm text-accent font-medium mt-0.5">
                      {item.company}
                    </p>
                    <p className="text-sm md:text-[0.92rem] text-muted leading-relaxed mt-3.5">
                      {item.description}
                    </p>

                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag) => (
                          <span key={tag} className="chip text-[0.68rem] font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-12 text-center">
          <p className="text-muted text-sm">
            …and the timeline keeps going —{" "}
            <a
              href="/CV.pdf"
              download
              className="text-accent font-semibold hover:text-accent-hover transition-colors underline underline-offset-4 decoration-accent/30"
            >
              download the CV
            </a>{" "}
            for the formal version.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
