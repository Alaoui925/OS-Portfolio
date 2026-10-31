import { motion } from "framer-motion";

/**
 * Shared scroll-reveal wrapper — one place to tune the motion language.
 * Rides on MotionConfig(reducedMotion="user") from App.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className,
  ...rest
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
