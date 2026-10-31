/**
 * Single source of truth for identity, links and contact info.
 * Every component reads from here — no duplicated or placeholder links.
 */

// Only links verified to exist. Add a LinkedIn URL here once available —
// hero and footer will pick it up automatically.
export const profile = {
  name: "Oussama El Alaoui",
  shortName: "O. El Alaoui",
  initials: "OE",
  role: "AI & Software Engineering Student",
  positioning:
    "Engineering student in Computer Science & Networks, focused on AI and data — and on software that actually ships.",
  location: "Morocco",
  github: "https://github.com/Alaoui925",
  // linkedin: "https://www.linkedin.com/in/…", // ← add when ready; hero/footer render it if present
  email: "elalaouioussama2002@gmail.com",
  cv: "/CV.pdf",
  education: {
    school: "EMSI — École Marocaine des Sciences de l'Ingénieur",
    program: "Engineering degree — Computer Science & Networks",
    period: "2023 – 2028 (in progress)",
  },
  languages: ["Arabic — native", "French — fluent", "English — advanced"],
};

export const socialLinks = [
  { name: "GitHub", url: profile.github },
  { name: "Email", url: `mailto:${profile.email}` },
].concat(profile.linkedin ? [{ name: "LinkedIn", url: profile.linkedin }] : []);
