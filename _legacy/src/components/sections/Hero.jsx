import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Github, Mail, Download } from "lucide-react";
import profileImg from "@/assets/images/Profil.jpg";
import { profile } from "@/data/profile";

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center overflow-hidden bg-primary pt-32 pb-20 px-6 md:px-10 lg:px-14"
    >
      {/* Restrained guidance grid — half-branch, fades out */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.05] [background-image:linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
      />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
        {/* Left — identity */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {profile.role} · EMSI 2023–2028
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-5 font-display text-[clamp(2.6rem,6vw,4.6rem)] font-medium leading-[1.04] tracking-tight text-ink"
          >
            Oussama <span className="text-accent">.</span>
            <br />
            <span className="text-ink/85">El Alaoui</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-muted"
          >
            I'm an engineering student in{" "}
            <span className="text-ink font-medium">Computer Science & Networks</span>{" "}
            working toward{" "}
            <span className="text-ink font-medium">AI engineering</span> — recently
            shipped a computer-vision drawing app, a three-role hospital platform,
            and the site you're reading — all real, public repositories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button onClick={() => scrollTo("projects")} className="btn-primary">
              View projects
              <ArrowRight size={16} strokeWidth={2.25} />
            </button>
            <a href={profile.cv} download className="btn-secondary">
              <Download size={16} strokeWidth={2} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted hover:text-accent transition-colors"
            >
              <Github size={19} strokeWidth={1.75} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              className="text-muted hover:text-accent transition-colors"
            >
              <Mail size={19} strokeWidth={1.75} />
            </a>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <button
              onClick={() => scrollTo("about")}
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted hover:text-accent transition-colors"
            >
              Scroll the story
              <ArrowDown size={13} strokeWidth={2} className="transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-[26rem]">
            {/* offset frame */}
            <div
              aria-hidden="true"
              className="absolute -top-3.5 -right-3.5 w-full h-full rounded-3xl border border-accent/25"
            />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-line bg-surface">
              <img
                src={profileImg}
                alt={`Portrait of ${profile.name}`}
                className="w-full h-full object-cover"
              />
              {/* tonal grade to sit in the dark UI */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"
              />
            </div>

            {/* caption card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-surface border border-line px-5 py-4 shadow-xl shadow-black/30">
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                Now building
              </p>
              <p className="text-accent text-sm font-semibold mt-0.5">
                CS &amp; Networks → AI
              </p>
            </div>

            {/* corner tick */}
            <span
              aria-hidden="true"
              className="absolute -top-3 left-8 w-8 h-px bg-accent/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
