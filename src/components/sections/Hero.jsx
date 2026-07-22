import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Linkedin,
  Github,
  Twitter,
  Mail,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://linkedin.com/in/your-username", Icon: Linkedin },
  { name: "GitHub", url: "https://github.com/your-username", Icon: Github },
  { name: "Twitter", url: "https://twitter.com/your-username", Icon: Twitter },
];

export default function Hero() {
  const canvasRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationId = null;

    const palette = [
      "#4fc3f7",
      "#3b82f6",
      "#7c93f0",
      "#a78bfa",
      "#c084fc",
      "#e879a8",
    ];

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      buildParticles();
    }

    function buildParticles() {
      const count = Math.max(
        36,
        Math.min(90, Math.round((width * height) / 15000)),
      );
      particles = Array.from({ length: count }, () => ({
        baseX: Math.random() * (width + 200) - 100,
        baseY: height * (0.32 + Math.random() * 0.58),
        amp: 16 + Math.random() * 36,
        freq: 0.0025 + Math.random() * 0.0035,
        phase: Math.random() * Math.PI * 2,
        speed: 0.006 + Math.random() * 0.014,
        radius:
          Math.random() < 0.16
            ? 3 + Math.random() * 2.2
            : 1 + Math.random() * 1.6,
        color: palette[Math.floor(Math.random() * palette.length)],
      }));
    }

    function frame(timestamp) {
      const t = timestamp || 0;
      ctx.clearRect(0, 0, width, height);

      const pts = particles.map((p) => {
        const x = ((p.baseX + t * p.speed) % (width + 200)) - 100;
        const y =
          p.baseY + Math.sin(x * p.freq + p.phase + t * 0.00035) * p.amp;
        return { x, y, radius: p.radius, color: p.color };
      });

      const maxDist = 125;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(150, 170, 255, ${0.14 * (1 - dist / maxDist)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        ctx.beginPath();
        if (p.radius > 2.6) {
          ctx.shadowBlur = 14;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(frame);
      }
    }

    resize();
    frame(0);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <section className="hero-shell relative w-full min-h-screen overflow-hidden">
      <style>{`
        .hero-shell {
          background-color: #050506;
          background-image: radial-gradient(ellipse 80% 55% at 50% -5%, rgba(59,130,246,0.14), transparent 60%);
          font-family: 'Inter', sans-serif;
        }
        .hero-vignette {
          background: radial-gradient(ellipse 65% 55% at 50% 42%, rgba(5,5,6,0.6) 0%, rgba(5,5,6,0) 72%);
        }
        .nav-link {
          position: relative;
          color: #a9b2c3;
          font-size: 0.95rem;
          font-weight: 500;
          padding-bottom: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s ease;
          cursor: pointer;
          background: none;
          border: none;
          font-family: inherit;
        }
        .nav-link:hover { color: #ffffff; }
        .nav-link.is-active { color: #4fc3f7; }
        .nav-link.is-active::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          border-radius: 2px;
          background: #4fc3f7;
          box-shadow: 0 0 10px 1px rgba(79,195,247,0.85), 0 0 20px 4px rgba(79,195,247,0.35);
        }
        .icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.03);
          color: #cdd3dc;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .icon-btn:hover {
          color: #ffffff;
          border-color: rgba(255,255,255,0.28);
          background: rgba(255,255,255,0.07);
        }
        .icon-btn:focus-visible,
        .nav-link:focus-visible,
        .cta-button:focus-visible,
        .social-icon:focus-visible {
          outline: 2px solid #4fc3f7;
          outline-offset: 3px;
        }
        .eyebrow {
          font-family: 'Playfair Display', serif;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #f3f4f6;
          font-size: clamp(1rem, 1.6vw, 1.4rem);
          margin: 0 0 1.25rem;
        }
        .headline {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          color: #ffffff;
          font-size: clamp(2.5rem, 6.6vw, 6.25rem);
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin: 0;
          text-wrap: balance;
        }
        .description {
          color: #99a3b3;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0;
        }
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          padding: 1rem 1.85rem;
          border-radius: 9999px;
          border: none;
          background: linear-gradient(135deg, #5fc6fb 0%, #2f74e8 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 10px 26px -8px rgba(47,116,232,0.65), inset 0 0 0 1px rgba(255,255,255,0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -8px rgba(47,116,232,0.8), inset 0 0 0 1px rgba(255,255,255,0.12);
        }
        .social-icon {
          color: #8b93a3;
          transition: color 0.2s ease;
          display: inline-flex;
        }
        .social-icon:hover { color: #ffffff; }
        .scroll-text {
          font-size: 0.68rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7d8593;
          margin: 0;
        }
        .scroll-chevron {
          color: #7d8593;
          animation: bob 2s ease-in-out infinite;
        }
        @keyframes bob {
          0%, 100% { transform: translateY(0); opacity: 0.55; }
          50% { transform: translateY(6px); opacity: 1; }
        }
        .reveal { animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .reveal-delay-1 { animation-delay: 0.1s; }
        .reveal-delay-2 { animation-delay: 0.24s; }
        @keyframes reveal-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-chevron { animation: none; }
          .reveal, .reveal-delay-1, .reveal-delay-2 {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
        @font-face {
          font-family: 'Playfair Display';
          font-display: swap;
        }
      `}</style>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      <div className="hero-vignette absolute inset-0" aria-hidden="true" />

      <div className="relative flex flex-col min-h-screen">
        {/* NAV */}
        <nav className="grid grid-cols-3 items-center px-6 md:px-10 lg:px-14 py-6 md:py-8">
          <div aria-hidden="true" />

          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link ${item.id === "hero" ? "is-active" : ""}`}
              >
                {item.label}
                {item.id === "about" && (
                  <ChevronDown size={14} strokeWidth={2} />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="icon-btn md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X size={17} strokeWidth={2} />
              ) : (
                <Menu size={17} strokeWidth={2} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-4 right-4 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <div className="flex flex-col items-center gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`nav-link text-base ${item.id === "hero" ? "is-active" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* HERO CONTENT */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-14 py-10">
          <div className="max-w-7xl mx-auto w-full text-center">
            <p className="eyebrow reveal">Hi, I&apos;m Oussama El Alaoui</p>
            <h1 className="headline reveal reveal-delay-1">
              AI &amp; Data
              <br />
              Software Engineer
            </h1>
          </div>

          <div className="max-w-7xl mx-auto w-full mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 reveal reveal-delay-2">
            <p className="description max-w-md">
              AI/ML Engineer building intelligent solutions and data-driven
              systems. Powered by advanced algorithms and deep learning.
            </p>
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="cta-button"
            >
              Explore Work
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="grid grid-cols-3 items-center px-6 md:px-10 lg:px-14 pb-8 md:pb-10">
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={`${link.name} profile`}
              >
                <link.Icon size={19} strokeWidth={1.75} />
              </a>
            ))}
            <a
              href="mailto:elalaouioussama2002@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={19} strokeWidth={1.75} />
            </a>
          </div>

          <div className="hidden sm:flex flex-col items-center gap-2">
            <ChevronDown
              size={16}
              strokeWidth={2}
              className="scroll-chevron"
            />
            <span className="scroll-text">Scroll to discover</span>
          </div>

          <div aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
