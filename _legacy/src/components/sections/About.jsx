import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const staggerChild = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FACTS = [
  { label: "Education", value: "EMSI — CS & Networks, 2023–2028" },
  { label: "Focus", value: "AI, data & software engineering" },
  { label: "Based in", value: profile.location },
  { label: "Languages", value: "Arabic · French · English" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-primary">
      <div className="container-custom">
        <SectionTitle
          label="About"
          title="Engineer first,"
          highlight="AI on the horizon"
          subtitle="How I got here, and where I'm heading."
        />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 lg:gap-20 items-start">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-5 text-muted text-base md:text-lg leading-relaxed"
          >
            <motion.p variants={staggerChild} className="text-ink text-xl md:text-2xl font-display font-medium leading-snug">
              I like building things that work — then understanding exactly why they work.
            </motion.p>

            <motion.p variants={staggerChild}>
              I'm a computer science &amp; networks engineering student at EMSI
              (2023–2028). The engineering program gave me the fundamentals —
              algorithms in C/C++, OOP in Java and C#, databases and SQL,
              networks and Linux — and I kept gravitating toward the layer where
              those fundamentals meet real products.
            </motion.p>

            <motion.p variants={staggerChild}>
              That pull shows up in my projects. AirCanvas came from curiosity
              about computer vision; MediCare from wanting to understand how a
              full multi-role platform holds together; Woodora and this site
              from caring about the front-end details most people skip.
            </motion.p>

            <motion.p variants={staggerChild}>
              My direction is{" "}
              <span className="text-ink font-medium">AI engineering</span>: the
              data side (Python, NumPy, Pandas) applied to problems with real
              interfaces. In a hackathon, in coursework, and in side projects, my
              goal stays the same — solutions that ship and hold up afterwards.
            </motion.p>

            <motion.div variants={staggerChild} className="pt-2 flex flex-wrap gap-2.5">
              {["Problem solving", "Clean architecture", "Design details", "Teamwork"].map(
                (trait) => (
                  <span key={trait} className="chip">
                    {trait}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          <Reveal delay={0.15} className="card-surface bg-surface p-7 md:p-8">
            <p className="eyebrow mb-6">Quick facts</p>
            <dl className="grid gap-5">
              {FACTS.map((fact) => (
                <div key={fact.label} className="border-b border-line last:border-0 pb-5 last:pb-0">
                  <dt className="text-[0.65rem] uppercase tracking-[0.22em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-ink font-medium mt-1.5">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
