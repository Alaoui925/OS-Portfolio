/**
 * Selected projects — case studies.
 * Every entry links to a real, public GitHub repository that was audited.
 * Fields write only what the repositories actually demonstrate.
 *
 * `visual`, when present, controls a bespoke illustration panel
 * ("gestures" renders the authentic AirCanvas gesture map — no screenshots exist for it).
 */

import medicareImg from "@/assets/images/medicare.jpg";
import woodoraImg from "@/assets/images/woodora.jpg";
import portfolioImg from "@/assets/images/portfolio-shot.jpg";

export const projects = [
  {
    id: "aircanvas",
    name: "AirCanvas",
    category: "AI · Computer Vision",
    year: "2026",
    tagline: "Draw in the air — your hand is the brush.",
    description:
      "A real-time computer-vision application that turns hand movements into a drawing tool: a webcam feed plus MediaPipe hand tracking, with gesture-driven pencil and eraser modes and no mouse needed.",
    github: "https://github.com/Alaoui925/Air-Canvas",
    live: null,
    stack: ["Python", "OpenCV", "MediaPipe Hands", "NumPy"],
    problem:
      "Standard drawing apps need a mouse or stylus. I wanted to explore how far pure computer vision can go as an input device — tracking a fingertip in real time and translating gestures into drawing actions.",
    role: "Solo project — architecture and implementation.",
    features: [
      "Real-time fingertip tracking from 21 hand landmarks at ~30 FPS",
      "Gesture mapping: index only → pencil, index + middle → eraser, other poses → idle",
      "Moving-average smoothing so strokes don't jitter between frames",
      "Strokes composited on a transparent canvas overlay over the live feed",
    ],
    decisions: [
      "Split into small modules (tracker / drawing / config) so the tracking algorithm and rendering never bleed into each other",
      "All tunables (colors, smoothing window, thresholds) centralized in one config file",
    ],
    visual: "gestures",
    image: null,
    featured: true,
  },
  {
    id: "medicare",
    name: "MediCare",
    category: "Full-stack web · App platform",
    year: "2026",
    tagline: "A three-role hospital booking platform, browser-only.",
    description:
      "A complete hospital appointment system with separate patient, doctor and administrator experiences — browsing departments and doctors, real booking flows with availability, medical records, email verification, and an admin console for the whole operation.",
    github: "https://github.com/Alaoui925/Hospital-Reservation",
    live: null,
    stack: ["React", "Vite", "React Router", "Supabase Auth", "CSS design system"],
    image: medicareImg,
    problem:
      "Booking an appointment is one of the most tedious real-world flows. I built the full system — patients book, doctors manage their schedules, administrators run the hospital — to learn how a role-based product holds together end to end.",
    role: "Solo project — designed and built end to end.",
    features: [
      "Doctor directory with search, filters, sorting and pagination; profile pages with live availability and slot picking",
      "Patient area: booking with reschedule/cancel, medical records per visit, profile & photo upload",
      "Doctor dashboard: today's schedule, confirm/complete visits, availability editor, visit reports",
      "Admin console: doctor-application review queue, CRUD for doctors & departments, charts and workload reports",
      "6-digit email verification, with a Supabase mode (real OTP + social sign-in) switched by one env var",
    ],
    decisions: [
      "All data flows through a service layer (`src/services/*`) that returns promises — swapping the mock localStorage API for a real backend touches no component or route",
      "Role-aware routing with protected routes per persona (patient / doctor / admin)",
      "Mock database is seeded relative to 'today' so any demo always looks current",
    ],
    featured: true,
  },
  {
    id: "woodora",
    name: "Woodora",
    category: "Front-end · E-commerce UI",
    year: "2026",
    tagline: "A furniture storefront with editorial art direction.",
    description:
      "A furniture store experience built with React, Tailwind CSS and Vite — an image-led catalogue with a responsive, curated marketing layout.",
    github: "https://github.com/Alaoui925/Woodora---Store",
    live: null,
    stack: ["React", "Tailwind CSS", "Vite"],
    image: woodoraImg,
    problem:
      "Most student stores look like bootstrap templates. I wanted a storefront with real art direction — photography, typography and spacing doing the selling — rather than another generic product grid.",
    role: "Solo project — design and front-end implementation.",
    features: [
      "Image-driven landing and shop experience",
      "Componentized catalogue layout with Tailwind",
      "Fully responsive, mobile-first layout",
    ],
    decisions: [
      "Kept the visual system in Tailwind utilities — no one-off CSS, so the whole theme lives in config",
    ],
    featured: false,
  },
  {
    id: "portfolio",
    name: "This portfolio",
    category: "Front-end · Design system",
    year: "2026",
    tagline: "The site you're looking at.",
    description:
      "A dark, editorial portfolio built as a design system exercise: token-based theming, scroll-spy navigation, case-study layouts, and motion that respects reduced-motion preferences.",
    github: "https://github.com/Alaoui925/OS-Portfolio",
    live: null,
    stack: ["React 19", "Tailwind CSS 4", "Framer Motion", "GSAP", "Vite"],
    image: portfolioImg,
    problem: null,
    role: "Solo project.",
    features: null,
    decisions: null,
    featured: false,
  },
];
