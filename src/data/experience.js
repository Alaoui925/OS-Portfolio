/**
 * Experience & education timeline.
 * Only verified items: the user's own data files + public GitHub repos.
 * No fabricated internships or roles.
 */

const experience = [
  {
    id: 1,
    role: "Engineering Student — Computer Science & Networks",
    company: "EMSI — École Marocaine des Sciences de l'Ingénieur",
    period: "2023 – 2028 (in progress)",
    description:
      "Degree program combining software engineering fundamentals — algorithms in C/C++, OOP in Java and C#, databases and SQL, networks and Linux — with a growing specialization in AI and data science.",
    tags: ["C/C++", "Java", "C#", "SQL", "Linux"],
    kind: "education",
  },
  {
    id: 2,
    role: "1st Place — EMSI Hackathon",
    company: "EMSI",
    period: "2025",
    description:
      "Shipped a working product with a team under hackathon-time constraints — rapid prototyping, division of work and a demo that stood up under scrutiny.",
    tags: ["React", "Node.js", "MySQL"],
    kind: "award",
  },
  {
    id: 3,
    role: "Meta Front-End Developer Professional Certificate",
    company: "Meta · Coursera",
    period: "2025",
    description:
      "Professional certificate covering the front-end fundamentals: UI patterns, React, version control basics and testing mindset.",
    tags: ["React", "JavaScript", "HTML/CSS"],
    kind: "certification",
  },
  {
    id: 4,
    role: "Independent Projects & Self-Directed Learning",
    company: "Personal",
    period: "2023 – present",
    description:
      "Building real applications end to end — AirCanvas for computer vision, MediCare for product architecture, Woodora and this portfolio for front-end craft — and sharpening problem-solving through algorithm work.",
    tags: ["Python", "React", "OpenCV", "Vite"],
    kind: "experience",
  },
];

export default experience;
