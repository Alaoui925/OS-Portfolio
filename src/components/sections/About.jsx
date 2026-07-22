import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionTitle title="About" highlight="Me" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                Hey there! I&apos;m{" "}
                <span className="text-white font-semibold">
                  Oussama El Alaoui
                </span>
                , a passionate web developer and engineering student specializing
                in{" "}
                <span className="text-accent font-semibold">
                  Artificial Intelligence
                </span>
                .
              </p>
              <p>
                I love turning ideas into interactive and visually appealing
                websites using{" "}
                <span className="text-white font-medium">React</span>,{" "}
                <span className="text-white font-medium">Tailwind CSS</span>,
                and modern JavaScript frameworks.
              </p>
              <p>
                Beyond coding, I explore UI/UX designs, learn new technologies,
                and improve my problem-solving skills through C++ and algorithm
                challenges. I&apos;m always looking for opportunities to
                collaborate on meaningful projects.
              </p>
            </div>

            <motion.div
              className="mt-10 flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="/CV.pdf"
                download
                className="btn-primary inline-flex items-center gap-3"
              >
                <FaDownload className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent/20 animate-pulse-glow">
                <img
                  src="/src/assets/images/Profil.jpg"
                  alt="Oussama El Alaoui"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center backdrop-blur-sm">
                <span className="text-accent text-2xl font-bold">3+</span>
                <span className="text-white/50 text-xs ml-1">
                  years<br />coding
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
