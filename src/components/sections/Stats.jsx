import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Smile, Award, Layers } from "lucide-react";

const stats = [
  { id: 1, value: 10, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { id: 2, value: 5, suffix: "+", label: "Happy Clients", icon: Smile },
  { id: 3, value: 3, suffix: "+", label: "Years Experience", icon: Award },
  { id: 4, value: 15, suffix: "+", label: "Technologies", icon: Layers },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const duration = 1600;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-secondary py-16 md:py-24 px-6 md:px-10 lg:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center gap-3"
            >
              <span className="w-11 h-11 rounded-full bg-white border border-line flex items-center justify-center">
                <stat.icon size={19} strokeWidth={1.5} className="text-accent" />
              </span>
              <p className="text-[clamp(2.4rem,4vw,3.4rem)] font-display font-medium text-ink leading-none">
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-[0.78rem] text-muted uppercase tracking-[0.14em] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}