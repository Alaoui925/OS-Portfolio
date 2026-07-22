import { motion } from "framer-motion";
import socialLinks from "@/data/socialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-glass-border">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto section-padding"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-gradient">OE</span>
            <span className="text-white/20 ml-1">|</span>
            <span className="text-white/40 ml-2 text-lg font-medium">
              Portfolio
            </span>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-white/30 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-white/25">
            &copy; {currentYear} Oussama El Alaoui. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
