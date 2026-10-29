import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * A quiet strip of the technologies that actually appear in the projects
 * below — text only, no borrowed logos. Pauses for reduced-motion users.
 */
const ITEMS = [
  "Python",
  "OpenCV",
  "MediaPipe",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "SQL",
  "NumPy",
  "Vite",
  "C++",
  "GSAP",
  "Linux",
  "Git",
];

export default function TechMarquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: "linear",
    });

    return () => tween.kill();
  }, []);

  const row = [...ITEMS, ...ITEMS];

  return (
    <section aria-label="Technologies used in the projects below" className="relative bg-secondary border-y border-line py-6 overflow-hidden">
      <div
        ref={trackRef}
        className="flex min-w-max items-center"
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center shrink-0">
            <span className="text-sm font-mono tracking-wide text-muted px-6">
              {item}
            </span>
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          </span>
        ))}
      </div>
    </section>
  );
}
