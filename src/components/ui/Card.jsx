import { motion } from "framer-motion";
import { cn } from "@/utils/helpers";

export default function Card({
  children,
  className,
  hover = true,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "bg-surface rounded-2xl border border-glass-border p-6 transition-all duration-500",
        hover && "card-hover",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
