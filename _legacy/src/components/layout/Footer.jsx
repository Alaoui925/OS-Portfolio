import { Github, Mail, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

const footerNav = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const jump = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-line bg-primary px-6 md:px-10 lg:px-14 py-12">
      <div className="container-custom flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full border border-accent/40 bg-accent-soft flex items-center justify-center font-display text-xs font-semibold text-accent">
              {profile.initials}
            </span>
            <span className="text-sm font-semibold text-ink">{profile.name}</span>
          </div>
          <p className="text-muted text-xs mt-3 max-w-sm leading-relaxed">
            Designed and built with React, Tailwind CSS and Framer Motion. All
            project links go to real public repositories.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {footerNav.map((item) => (
            <button
              key={item.id}
              onClick={() => jump(item.id)}
              className="text-xs font-semibold uppercase tracking-wider text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-line text-muted hover:text-ink hover:border-ink/40 transition-colors"
          >
            <Github size={16} strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-line text-muted hover:text-accent hover:border-accent/50 transition-colors"
          >
            <Mail size={16} strokeWidth={1.75} />
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-line text-muted hover:text-ink hover:border-ink/40 transition-colors"
            >
              <Linkedin size={16} strokeWidth={1.75} />
            </a>
          )}
          <button
            onClick={() => jump("hero")}
            aria-label="Back to top"
            className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-line text-muted hover:text-accent hover:border-accent/50 transition-colors"
          >
            <ArrowUp size={16} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div className="container-custom mt-10 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-3 text-[0.7rem] text-muted tracking-wide">
        <span>© {year} Oussama El Alaoui. All rights reserved.</span>
        <span className="font-mono">CS & Networks → AI Engineering</span>
      </div>
    </footer>
  );
}
