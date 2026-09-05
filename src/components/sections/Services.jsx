import { motion } from "framer-motion";
import { Monitor, Brain, Palette, Server } from "lucide-react";

const featuredServices = [
  {
    id: 1,
    icon: Monitor,
    title: "Web Design",
    description:
      "Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.",
  },
  {
    id: 2,
    icon: Brain,
    title: "AI & ML Solutions",
    description:
      "Intelligent systems and data-driven solutions powered by machine learning.",
  },
  {
    id: 3,
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Elegant, user-centered interfaces crafted with modern design principles.",
  },
  {
    id: 4,
    icon: Server,
    title: "Backend Development",
    description:
      "Robust APIs and server architectures with Node.js, Python, and MySQL.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative bg-surface py-24 md:py-32 px-6 md:px-10 lg:px-14 overflow-hidden">
      {/* faint circuit decoration */}
      <svg
        aria-hidden="true"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-40 h-64 opacity-[0.14] text-accent"
        viewBox="0 0 100 160"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M90 10 H50 V60 H10 M50 60 V110 H90 M90 110 H70" />
        <circle cx="90" cy="10" r="3" />
        <circle cx="10" cy="60" r="3" />
        <circle cx="90" cy="110" r="3" />
        <circle cx="70" cy="160" r="3" fill="currentColor" />
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="heading-display"
          >
            Services
          </motion.h2>
        </div>

        {/* Services row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 lg:divide-x lg:divide-line">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group lg:px-8"
            >
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent-hover group-hover:-translate-y-1">
                <service.icon
                  size={22}
                  strokeWidth={1.6}
                  className="text-white"
                />
              </div>
              <h3 className="text-lg font-bold text-ink mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="text-[0.9rem] leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}