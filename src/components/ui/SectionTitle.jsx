import { motion } from "framer-motion";

export default function SectionTitle({ title, highlight, subtitle, label }) {
  return (
    <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        viewport={{ once: true }}
        className="heading-display"
      >
        {title}{" "}
        <em className="text-accent not-italic font-medium">{highlight}</em>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          viewport={{ once: true }}
          className="mt-5 text-muted text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}