import { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPhp,
  FaGithub,
  FaGitAlt,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { SiCplusplus, SiTypescript, SiNextdotjs } from "react-icons/si";
import { gsap } from "gsap";

const icons = [
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  RiTailwindCssFill,
  FaPhp,
  DiMysql,
  SiCplusplus,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPython,
  SiTypescript,
  SiNextdotjs,
];

export default function Timeline() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const tween = gsap.to(marquee, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "linear",
    });

    return () => tween.kill();
  }, []);

  const allIcons = [...icons, ...icons];

  return (
    <section className="relative overflow-hidden py-20   bg-black">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.10),transparent_70%)] pointer-events-none" />

      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

      <div ref={marqueeRef} className="flex min-w-max">
        {allIcons.map((Icon, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-14 flex items-center justify-center"
          >
            <Icon
              className="
                text-5xl
                text-gray-500
                transition-all
                duration-300
                cursor-pointer
                
                hover:scale-125
                hover:-translate-y-1
                hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.45)]
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}
