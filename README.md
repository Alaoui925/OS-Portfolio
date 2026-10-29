# Oussama El Alaoui — Portfolio

AI-focused engineering portfolio, built with React 19 + Tailwind CSS 4 + Vite.

Computer science & networks student at EMSI (2023–2028), working toward AI
engineering. Every project on the site links to a real public repository —
the portfolio itself is [OS-Portfolio](https://github.com/Alaoui925/OS-Portfolio).

## Development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & deploy

```bash
npm run build      # production bundle → dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
```

## Project structure

```
src/
  data/        profile, projects (case studies), skills, experience — single source of truth
  components/
    layout/    Navbar, Footer
    sections/  Hero, TechMarquee, About, Skills, Projects, Experience, Contact
    ui/        Reveal (shared motion), SectionTitle, ScrollToTop
  hooks/       useScrollSpy
  styles/      globals.css — "Carbon & Emerald" design tokens
```

## Design notes

- Dark tonal surfaces (`#0b0c0a`) with a single emerald accent (`#22C55E`).
- Fraunces for display type, Inter for UI text.
- Case studies with **verified** links only; skills organized by evidence
  (which project used what), with no invented percentages.
- `prefers-reduced-motion` respected globally, including the GSAP marquee.
