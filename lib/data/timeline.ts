/**
 * Experience, education and evidence timeline.
 * Only verified items: the user's own records + public repos.
 * No fabricated roles or internships.
 */

export type TimelineKind = "education" | "award" | "certification" | "experience";

export interface TimelineItem {
  id: string;
  numeral: string;
  role: string;
  org: string;
  period: string;
  description: string;
  tags: string[];
  kind: TimelineKind;
}

export const timeline: TimelineItem[] = [
  {
    id: "emsi",
    numeral: "01",
    role: "Engineering Student — Computer Science & Networks",
    org: "EMSI — École Marocaine des Sciences de l'Ingénieur",
    period: "2023 – 2028",
    description:
      "Degree program combining software-engineering fundamentals — algorithms in C/C++, OOP in Java and C#, databases and SQL, networks and Linux — with a growing specialization in AI and data science.",
    tags: ["C/C++", "Java", "C#", "SQL", "Linux"],
    kind: "education",
  },
  {
    id: "hackathon",
    numeral: "02",
    role: "1st Place — EMSI Hackathon",
    org: "EMSI",
    period: "2025",
    description:
      "Shipped a working product with a team under hackathon-time constraints — rapid prototyping, division of work, and a demo that stood up under scrutiny.",
    tags: ["React", "Node.js", "MySQL"],
    kind: "award",
  },
  {
    id: "meta-fed",
    numeral: "03",
    role: "Meta Front-End Developer Professional Certificate",
    org: "Meta · Coursera",
    period: "2025",
    description:
      "Professional certificate covering front-end fundamentals: UI patterns, React, version control basics and a testing mindset.",
    tags: ["React", "JavaScript", "HTML/CSS"],
    kind: "certification",
  },
  {
    id: "independent",
    numeral: "04",
    role: "Independent Projects & Self-Directed Learning",
    org: "Personal",
    period: "2023 – now",
    description:
      "Building real applications end to end — AirCanvas for computer vision, MediCare and UniConnect for full-stack product architecture, Woodora, Haven and this portfolio for front-end craft — and sharpening problem-solving through algorithm work.",
    tags: ["Python", "React", "Laravel", "Next.js"],
    kind: "experience",
  },
] as const;
