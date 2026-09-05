import { motion } from "framer-motion";
import experience from "@/data/experience";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionTitle
          label="My Journey"
          title="Work"
          highlight="Experience"
          subtitle="My professional journey and the roles that shaped my path"
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/15 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-accent border-4 border-primary shadow-md shadow-accent/20" />

                <div className="card-surface p-6 md:p-8 hover:border-accent/30 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-ink">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted font-mono uppercase tracking-wider">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed mb-5">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}