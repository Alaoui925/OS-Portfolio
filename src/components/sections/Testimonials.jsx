import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "CEO, Company",
    text: "Oussama delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and professional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Collaborator Name",
    role: "Lead Developer",
    text: "Working with Oussama was a pleasure. He brings strong technical skills, great communication, and a genuine passion for building quality software.",
    rating: 5,
  },
  {
    id: 3,
    name: "Professor Name",
    role: "University of Jakarta",
    text: "Oussama consistently demonstrates exceptional analytical thinking and a deep understanding of AI/ML concepts. He is among the top students in his cohort.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="What People"
          highlight="Say"
          subtitle="Feedback from colleagues and clients I've had the pleasure to work with"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-surface rounded-3xl p-8 md:p-12 border border-glass-border min-h-[300px]">
            <FaQuoteLeft className="absolute top-6 left-6 md:top-8 md:left-8 text-accent/15 w-10 h-10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-white/60 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-bold text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-accent/70 text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white/40 hover:text-white"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="w-3.5 h-3.5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-accent w-6"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white/40 hover:text-white"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
