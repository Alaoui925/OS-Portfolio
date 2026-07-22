import { motion } from "framer-motion";
import { Monitor, Brain, Palette, Server } from "lucide-react";

const featuredServices = [
  {
    id: 1,
    icon: Monitor,
    title: "Web Development",
    description:
      "Building modern, responsive web applications with React, Next.js, and cutting-edge technologies.",
  },
  {
    id: 2,
    icon: Brain,
    title: "AI & ML Solutions",
    description:
      "Developing intelligent systems and data-driven solutions powered by machine learning.",
  },
  {
    id: 3,
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting elegant, user-centered interfaces with modern design principles.",
  },
  {
    id: 4,
    icon: Server,
    title: "Backend Development",
    description:
      "Building robust APIs and server architectures with Node.js, Python, and MySQL.",
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
    <section className="bg-[#0a0a0f] py-24 md:py-32 px-6 md:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#6b7280] mb-4"
          >
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold leading-[1.1] text-white"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Services
          </motion.h2>
        </div>

        {/* Services row with dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group relative py-10 px-6 lg:px-8 transition-all duration-300 hover:-translate-y-1 ${
                index < featuredServices.length - 1
                  ? "lg:border-r lg:border-white/[0.06]"
                  : ""
              } ${
                index < featuredServices.length - 2
                  ? "max-md:border-b max-md:border-white/[0.06] max-md:pb-10 max-md:mb-0"
                  : ""
              } ${
                index === featuredServices.length - 2 ||
                index === featuredServices.length - 3
                  ? "max-md:border-b max-md:border-white/[0.06] max-md:pb-10"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#8A9576]/10 flex items-center justify-center mb-7 transition-all duration-300 group-hover:bg-[#3D8B5E]/20">
                <service.icon
                  size={24}
                  strokeWidth={1.6}
                  className="text-[#8A9576] transition-colors duration-300 group-hover:text-[#4ade80]"
                />
              </div>

              {/* Title */}
              <h3
                className="text-[1.05rem] font-bold text-white mb-3 tracking-wide transition-colors duration-300 group-hover:text-[#f0f0f0]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[0.85rem] leading-relaxed text-[#6b7280] max-w-[260px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
