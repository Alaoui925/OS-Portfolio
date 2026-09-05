import { useState } from "react";
import { motion } from "framer-motion";
import { Hexagon, Send } from "lucide-react";
import socialLinks from "@/data/socialLinks";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Services", id: "services" },
];

const resourceLinks = [
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Process", id: "process" },
  { label: "Certifications", id: "certifications" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-primary border-t border-line">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <Hexagon size={18} strokeWidth={2} className="text-white" />
              </span>
              <div className="leading-none">
                <span className="block font-display font-semibold text-ink text-sm tracking-wide uppercase">
                  Oussama El Alaoui
                </span>
                <span className="block text-[0.6rem] text-muted tracking-[0.2em] uppercase mt-0.5">
                  AI Engineer · Frontend Dev
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted leading-relaxed max-w-[240px]">
              Building intuitive, intelligent digital experiences at the
              intersection of design and AI.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-ink mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-ink mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/CV.pdf"
                  download
                  className="text-sm text-muted hover:text-accent transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-ink mb-5">
              Stay Inspired
            </h4>
            <p className="text-sm text-muted mb-4">
              Occasional updates on what I&apos;m building.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full min-w-0 flex-1 bg-surface border border-line rounded-full px-4 py-2.5 text-sm text-ink placeholder-muted/70 outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-10 h-10 shrink-0 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center transition-colors"
              >
                <Send size={15} strokeWidth={2} />
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 text-sm text-accent">Thanks for subscribing!</p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {currentYear} Oussama El Alaoui. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted hover:text-accent transition-colors">
              Terms of Service
            </a>
            <div className="flex items-center gap-3 ml-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.2 }}
                  className="text-muted hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}