import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Your Name Here",
    role: "Title, Company",
    text: "Add a real quote here from a client, collaborator, professor, or colleague.",
    rating: 5,
  },
  {
    id: 2,
    name: "Your Name Here",
    role: "Title, Company",
    text: "Add a real quote here from a client, collaborator, professor, or colleague.",
    rating: 5,
  },
  {
    id: 3,
    name: "Your Name Here",
    role: "Title, Company",
    text: "Add a real quote here from a client, collaborator, professor, or colleague.",
    rating: 5,
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionTitle
          label="Clients Say"
          title="Kind"
          highlight="Words"
          subtitle="Feedback from colleagues and clients I've had the pleasure to work with"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-surface rounded-2xl border border-line p-8 md:p-10 hover:border-accent/30 transition-all duration-500"
            >
              <FaQuoteLeft className="absolute top-8 right-8 text-accent/15 w-12 h-12" />

              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-muted text-lg leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-accent text-white font-bold flex items-center justify-center">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-ink font-bold text-base">{t.name}</p>
                  <p className="text-muted text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* carousel dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === 0 ? "bg-accent w-6" : "bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}