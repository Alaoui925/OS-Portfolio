import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";
import { Hexagon } from "lucide-react";
import useScrollSpy from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/utils/helpers";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(
    NAV_ITEMS.map((item) => item.id),
    150,
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (id) => {
    scrollToSection(`#${id}`);
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 ${
        isScrolled ? "border-line bg-primary/90 backdrop-blur-md" : "border-transparent bg-primary"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-14 py-4">
        {/* Logo */}
        <button
          onClick={() => handleNav("hero")}
          className="flex items-center gap-3 text-left group"
          aria-label="Go to home"
        >
          <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent-hover transition-colors">
            <Hexagon size={18} strokeWidth={2} className="text-white" />
          </span>
          <span className="leading-none">
            <span className="block font-display font-semibold text-ink text-sm tracking-wide uppercase">
              Oussama El Alaoui
            </span>
            <span className="block text-[0.6rem] text-muted tracking-[0.2em] uppercase mt-0.5">
              AI Engineer · Frontend Dev
            </span>
          </span>
        </button>

        {/* Center nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeId === item.id
                    ? "text-accent bg-accent/10"
                    : "text-muted hover:text-ink hover:bg-ink/5"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* CTA */}
          <button
            onClick={() => handleNav("contact")}
            className="hidden sm:inline-flex btn-primary !px-6 !py-2.5 text-xs tracking-wider uppercase"
          >
            Let&apos;s Talk
          </button>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-muted hover:text-ink hover:bg-ink/5 transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={20} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-primary border-t border-line"
          >
            <ul className="flex flex-col px-6 py-4">
              <li>
                <button
                  onClick={() => handleNav("hero")}
                  className="w-full text-left py-3 text-sm font-medium text-ink"
                >
                  Home
                </button>
              </li>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className={`w-full text-left py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeId === item.id
                        ? "text-accent"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}