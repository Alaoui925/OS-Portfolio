import { ArrowRight } from "lucide-react";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section className="bg-[#050506] text-white py-20 md:py-24 px-6 md:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <p className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[#6b7280] mb-3">
              Selected Work
            </p>
            <h2
              className="text-[clamp(2rem,4vw,2.8rem)] font-semibold leading-[1.15] text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Featured Projects
            </h2>
          </div>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-[0.8rem] font-medium tracking-wider uppercase text-[#6b7280] hover:text-white transition-colors whitespace-nowrap"
          >
            View All Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-[#111111] rounded-2xl overflow-hidden border border-white/[0.06] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] hover:border-white/[0.12]"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#1a1a1a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
              </div>
              <div className="p-5 md:p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[0.95rem] font-bold tracking-wide uppercase text-white mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-[0.82rem] text-[#6b7280] font-normal">
                    {project.technologies.join(", ")}
                  </p>
                </div>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-[#6b7280] transition-all duration-200 group-hover:bg-white group-hover:border-white group-hover:text-[#050506] group-hover:rotate-[-45deg] flex-shrink-0 mt-0.5"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </a>
                ) : (
                  <div className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-[#6b7280] transition-all duration-200 group-hover:bg-white group-hover:border-white group-hover:text-[#050506] group-hover:rotate-[-45deg] flex-shrink-0 mt-0.5">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
