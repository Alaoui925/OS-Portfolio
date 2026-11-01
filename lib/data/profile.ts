
export const profile = {
  name: "Oussama El Alaoui",
  shortName: "O. El Alaoui",
  initials: "OE",
  role: "AI engineer-in-training",
  positioning:
    "Engineering student in Computer Science & Networks, focused on AI and data — and on software that actually ships.",
  location: "Morocco",
  github: "https://github.com/Alaoui925",
  email: "elalaouioussama2002@gmail.com",
  cv: "/cv.pdf",
  education: {
    school: "EMSI — École Marocaine des Sciences de l'Ingénieur",
    program: "Engineering degree — Computer Science & Networks",
    period: "2023 – 2028 (in progress)",
  },
  goal:
    "Python, then data science and machine learning, then deep learning.",
  seeking: ["AI/Data Science internship", "Final-year project (PFE)"],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Fluent" },
    { name: "English", level: "Advanced" },
  ],
} as const;

export const socialLinks = [
  { name: "GitHub", url: profile.github },
  { name: "Email", url: `mailto:${profile.email}` },
];
