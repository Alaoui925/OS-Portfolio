import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const processSteps = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    description:
      "Understanding your goals, audience, and requirements before a single pixel is placed.",
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design",
    description:
      "Crafting clean, user-centered layouts and interactions that feel effortless.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Develop",
    description:
      "Building with modern, reliable technology that's fast, accessible, and maintainable.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Ship it, measure it, and iterate — growth is part of the process.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-primary">
      <div className="container-custom">
        <SectionTitle
          label="My Process"
          title="How I"
          highlight="Work"
          subtitle="A clear, four-step path from idea to launch"
        />

        <div className="relative grid md:grid-cols-4 gap-12 md:gap-6 max-w-6xl mx-auto">
          {/* dotted connector (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[12.5%] right-[12.5%] top-7 border-t-2 border-dotted border-accent/30"
          />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-md shadow-accent/20">
                <step.icon size={20} strokeWidth={1.7} />
              </div>

              <span className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-muted">
                {step.num}
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted max-w-[220px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}