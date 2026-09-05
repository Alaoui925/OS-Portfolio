import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github, Twitter, Mail } from "lucide-react";
import profileImg from "@/assets/images/Profil.jpg";

const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "#", Icon: Linkedin },
  { name: "GitHub", url: "https://github.com/Alaoui925", Icon: Github },
  { name: "Twitter", url: "#", Icon: Twitter },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary pt-32 pb-16 px-6 md:px-10 lg:px-14"
    >
      {/* subtle background wash */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(122,138,111,0.12),transparent_65%)]"
      />

      {/* left edge timeline accent */}
      <div aria-hidden="true" className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        <span className="w-px h-40 bg-line" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left — copy */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            AI Engineering Student &amp; Frontend Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-ink text-balance"
          >
            Digital experiences that are{" "}
            <em className="text-accent not-italic">intuitive</em>,{" "}
            <em className="text-accent not-italic">intelligent</em> and
            impactful.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted"
          >
            I&apos;m Oussama El Alaoui — a designer-minded engineer turning
            ideas into clean, thoughtful web experiences built with React,
            modern tooling, and a healthy dose of AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button onClick={() => scrollTo("projects")} className="btn-primary">
              View My Work
              <ArrowRight size={17} strokeWidth={2.25} />
            </button>
            <button onClick={() => scrollTo("contact")} className="btn-secondary">
              Let&apos;s Work Together
              <ArrowRight size={17} strokeWidth={2.25} />
            </button>
          </motion.div>

          {/* socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-12 flex items-center gap-5"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label={`${link.name} profile`}
              >
                <link.Icon size={19} strokeWidth={1.75} />
              </a>
            ))}
            <a
              href="mailto:elalaouioussama2002@gmail.com"
              className="text-muted hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={19} strokeWidth={1.75} />
            </a>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* gradient halo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/25 via-accent/10 to-transparent blur-sm"
            />
            {/* decorative ring */}
            <div
              aria-hidden="true"
              className="absolute inset-3 rounded-full border border-accent/20"
            />

            <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-accent/10">
              <img
                src={profileImg}
                alt="Oussama El Alaoui"
                className="w-full h-full object-cover"
              />
            </div>

            {/* small floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white border border-line px-5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent shadow-lg"
            >
              AI + Design · Human + Impact
            </motion.div>

            {/* corner decorations */}
            <span aria-hidden="true" className="absolute -top-2 -right-4 font-display text-3xl text-accent/60">
              +
            </span>
            <span aria-hidden="true" className="absolute top-8 -left-6 font-display text-xl text-accent/40">
              +
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}