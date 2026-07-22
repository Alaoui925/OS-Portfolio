import { motion } from "framer-motion";
import certifications from "@/data/certifications";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <SectionTitle
          title="Certifications"
          highlight="&& Awards"
          subtitle="Professional certifications and achievements that validate my expertise"
        />

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex items-start gap-4 bg-surface rounded-2xl p-6 border border-glass-border hover:border-accent/20 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-accent text-lg font-bold">
                  {cert.id}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-white/40 text-sm mt-1">{cert.issuer}</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs text-white/25 font-mono">
                    {cert.date}
                  </span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent/60 hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
