import { useState } from "react";
import { motion } from "framer-motion";
import skills, { skillCategories } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          label="My Stack"
          title="Technologies I"
          highlight="work with"
          subtitle="Tools and languages I use to bring ideas to life"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {["All", ...skillCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "bg-surface text-muted hover:text-ink hover:bg-surface-light border border-line"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="group card-surface p-5 hover:border-accent/40 hover:-translate-y-1 cursor-default"
            >
              <div className="flex flex-col items-center gap-3">
                <skill.icon
                  className="text-3xl md:text-4xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{ color: skill.color }}
                />
                <span className="text-sm text-muted group-hover:text-ink transition-colors duration-300 font-medium">
                  {skill.name}
                </span>
                <div className="w-full bg-ink/5 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.03 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}