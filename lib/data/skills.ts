/**
 * Skills — evidence-based, no progress bars, no invented percentages.
 * Each group carries an `evidence` line pointing at real projects
 * or coursework, so the reader can trace every claim.
 */

export interface SkillGroup {
  id: string;
  title: string;
  note: string;
  evidence: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
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
    skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java", "C#", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    note: "Where my design instinct lives.",
    evidence: "UniConnect, MediCare, Woodora, Haven and this site — built across React, Next.js 15 and 16.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion", "Vite", "Responsive design"],
  },
  {
    id: "backend-data",
    title: "Backend & Data",
    note: "Engineering-style coursework and app work.",
    evidence: "UniConnect's Laravel 12 + Sanctum REST API and MediCare's service layer; database modeling in coursework.",
    skills: ["Laravel", "PHP", "SQL", "Database design", "REST APIs", "Supabase Auth", "Node.js basics"],
  },
  {
    id: "tools",
    title: "Tools & Systems",
    note: "Daily working environment.",
    evidence: "All repositories versioned and structured on GitHub.",
    skills: ["Linux", "Git & GitHub", "VS Code", "npm ecosystem", "Problem solving"],
  },
] as const;
