/**
 * Skills — evidence-based, no progress bars.
 * Categories carry an `evidence` line pointing at real projects
 * or coursework, so the reader can trace every claim.
 */

export const skillGroups = [
  {
    id: "ai-data",
    title: "AI & Data",
    note: "The direction I'm building toward.",
    evidence: "AirCanvas — MediaPipe hand tracking at ~30 FPS with smoothed landmark input.",
    skills: [
      "Machine learning fundamentals",
      "Computer vision",
      "Python",
      "NumPy",
      "Pandas",
      "Data visualization",
      "OpenCV",
      "MediaPipe",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    note: "The core of the engineering program.",
    evidence: "Coursework at EMSI plus every project in this portfolio.",
    skills: ["Python", "JavaScript", "C", "C++", "Java", "C#", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    note: "Where my design instinct lives.",
    evidence: "MediCare, Woodora and this site.",
    skills: ["React", "Tailwind CSS", "GSAP", "Framer Motion", "Vite", "Responsive design"],
  },
  {
    id: "backend-data",
    title: "Backend & Databases",
    note: "Engineering-style coursework and app work.",
    evidence: "MediCare's service layer and mock API; database modeling in coursework.",
    skills: ["SQL", "Database design", "REST APIs", "Supabase Auth", "Node.js basics"],
  },
  {
    id: "tools",
    title: "Tools & Systems",
    note: "Daily working environment.",
    evidence: "All repositories versioned and structured on GitHub.",
    skills: ["Linux", "Git & GitHub", "VS Code", "npm ecosystem", "Problem solving"],
  },
];

export default skillGroups;
