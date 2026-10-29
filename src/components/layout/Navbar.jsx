import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Mail } from "lucide-react";
import useScrollSpy from "@/hooks/useScrollSpy";
import { scrollToSection } from "@/utils/helpers";
import { profile } from "@/data/profile";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id), 150);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
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
        isScrolled
          ? "border-line bg-primary/85 backdrop-blur-md"
          : "border-transparent bg-primary"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 py-4">
        {/* Brand */}
        <button
          onClick={() => handleNav("hero")}
          className="flex items-center gap-3 text-left group"
          aria-label="Oussama El Alaoui — back to top"
        >
          <span className="w-9 h-9 rounded-full border border-accent/40 bg-accent-soft flex items-center justify-center font-display text-sm font-semibold text-accent group-hover:border-accent transition-colors">
            {profile.initials}
          </span>
          <span className="leading-none hidden sm:block">
            <span className="block text-sm font-semibold text-ink tracking-wide">
              {profile.name}
            </span>
            <span className="block text-[0.6rem] text-muted tracking-[0.22em] uppercase mt-1">
              {profile.role}
            </span>
          </span>
        </button>

        {/* Center nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  aria-current={activeId === item.id ? "true" : undefined}
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
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hidden sm:inline-flex w-10 h-10 items-center justify-center rounded-full border border-line text-muted hover:text-ink hover:border-ink/40 transition-colors"
          >
            <Github size={17} strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="hidden md:inline-flex w-10 h-10 items-center justify-center rounded-full border border-line text-muted hover:text-accent hover:border-accent/50 transition-colors"
          >
            <Mail size={17} strokeWidth={1.75} />
          </a>

          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full text-muted hover:text-ink hover:bg-ink/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-primary border-t border-line"
          >
            <ul className="px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className={`w-full text-left py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeId === item.id
                        ? "text-accent"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-line mt-2">
                <button
                  onClick={() => handleNav("contact")}
                  className="w-full text-left py-3 text-sm font-semibold text-accent"
                >
                  Get in touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
