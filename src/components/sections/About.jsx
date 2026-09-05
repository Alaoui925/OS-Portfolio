import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import profileImg from "@/assets/images/Profil.jpg";

const stats = [
  { value: "3+", label: "Years coding" },
  { value: "15+", label: "Projects shipped" },
  { value: "AI/ML", label: "Current focus" },
];

const focusAreas = ["React", "Tailwind CSS", "C++", "Algorithms", "UI/UX"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container-custom">
        <SectionTitle
          label="About Me"
          title="Who I am and"
          highlight="what I do"
        />

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-24 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={item}
              className="text-2xl md:text-3xl font-display font-medium text-ink leading-snug mb-8 max-w-xl"
            >
              I build interactive web experiences and explore where AI meets
              good design.
            </motion.p>

            <motion.div
              variants={item}
              className="space-y-5 text-muted text-base md:text-lg leading-relaxed max-w-xl"
            >
              <p>
                I&apos;m Oussama El Alaoui, an engineering student
                specializing in artificial intelligence, and a web developer
                who likes turning ideas into things people can actually
                click on.
              </p>
              <p>
                Most of my work happens in React, Tailwind CSS, and modern
                JavaScript, but I spend just as much time thinking through
                layout and interaction as I do writing code.
              </p>
              <p>
                Outside of that, I sharpen my problem-solving through C++
                and algorithm challenges, and I&apos;m always up for
                collaborating on something meaningful.
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-2 mt-8 max-w-xl"
            >
              {focusAreas.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-line bg-surface text-muted text-sm"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-6 mt-10 max-w-md border-t border-line pt-6"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-ink">
                    {stat.value}
                  </div>
                  <div className="text-muted text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-4 mt-10">
              <a href="/CV.pdf" download className="btn-primary">
                <FaDownload className="w-4 h-4" />
                Download CV
              </a>
              <a href="#contact" className="btn-secondary">
                Let&apos;s talk
                <FaArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-80 md:w-72 md:h-96">
              {/* offset accent panel behind the photo */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-accent/15 border border-accent/20" />

              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-line">
                <img
                  src={profileImg}
                  alt="Oussama El Alaoui"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-surface border border-line px-5 py-4 shadow-xl">
                <div className="text-accent text-xl font-bold leading-none">
                  3+
                </div>
                <div className="text-muted text-xs mt-1 leading-tight">
                  years coding
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}