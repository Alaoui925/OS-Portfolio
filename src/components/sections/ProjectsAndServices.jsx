import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import projects from "@/data/projects";

const cardThemes = [
  { bg: "bg-accent-soft", title: "text-ink", sub: "text-muted", dots: "bg-ink/10", border: "border-ink/20" },
  { bg: "bg-ink", title: "text-white", sub: "text-white/60", dots: "bg-white/15", border: "border-white/30" },
  { bg: "bg-[#f1efe7]", title: "text-ink", sub: "text-muted", dots: "bg-ink/10", border: "border-ink/20" },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary py-20 md:py-24 px-6 md:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2
              className="font-display text-[clamp(2rem,4vw,2.8rem)] font-medium leading-[1.1] text-ink"
            >
              Featured Projects
            </h2>
          </div>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-muted hover:text-accent transition-colors whitespace-nowrap"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const theme = cardThemes[index % cardThemes.length];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group rounded-2xl overflow-hidden border border-line cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(32,31,27,0.25)] ${theme.bg}`}
              >
                {/* Browser mockup */}
                <div className="p-3 pb-0">
                  <div className="rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm border border-white/40">
                    <div className="h-7 flex items-center gap-1.5 px-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${theme.dots}`} />
                      <span className={`w-2.5 h-2.5 rounded-full ${theme.dots}`} />
                      <span className={`w-2.5 h-2.5 rounded-full ${theme.dots}`} />
                      <span className={`ml-2 h-3.5 w-2/3 rounded-full ${theme.dots}`} />
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Info row */}
                <div className={`p-5 md:p-6 flex items-start justify-between gap-4 ${theme.title}`}>
                  <div>
                    <h3 className="text-[0.95rem] font-bold tracking-wide uppercase mb-1.5">
                      {project.title}
                    </h3>
                    <p className={`text-[0.82rem] font-normal ${theme.sub}`}>
                      {project.technologies.join(", ")}
                    </p>
                  </div>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-full border flex items-center justify-center ${theme.border} transition-all duration-200 group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:rotate-[-45deg] flex-shrink-0 mt-0.5`}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </a>
                  ) : (
                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center ${theme.border} transition-all duration-200 group-hover:bg-accent group-hover:border-accent group-hover:text-white group-hover:rotate-[-45deg] flex-shrink-0 mt-0.5`}>
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}