/**
 * Selected projects — case studies.
 * Every entry links to a real public GitHub repository that was audited,
 * first in the Vite build of this site and re-checked against the READMEs
 * and source code for this rebuild. Nothing here is invented.
 *
 * UniConnect and Haven audits (2026-10-31) are grounded in the source:
 * backend/composer.json (Laravel 12, Sanctum, Cloudinary), api.js endpoints,
 * the Eloquent model/controller list, and haven's components + package.json.
 * Both repos ship boilerplate READMEs — where this applies the card says so.
 *
 * `visual` controls the bespoke illustration panel when no screenshot
 * exists ("gestures" renders AirCanvas's real gesture map; "tokens"
 * renders this site's real design tokens).
 */

export type ProjectVisual =
  | { kind: "image"; src: string; width: number; height: number; alt: string }
  | { kind: "gestures" }
  | { kind: "tokens" };

export interface Project {
  id: string;
  index: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  github: string;
  stack: string[];
  problem: string;
  features: string[];
  decision: string;
  role: string;
  visual: ProjectVisual;
  /** one–two line copy for the pinned horizontal showcase card. Compressed from the audited long description — never invented. */
  exhibit?: string;
  /** verified public deployment URL. Absent = no live demo link confirmed — the card shows a disabled pending chip instead of inventing one. */
  demo?: string;
  /** true when the repository README carries no real description and the copy was carried over from the previous audit, pending a rewrite. */
  contentPlaceholder?: boolean;
}

export const projects: Project[] = [
  {
    id: "aircanvas",
    index: "W.01",
    name: "AirCanvas",
    category: "AI · Computer Vision",
    year: "2026",
    tagline: "Draw in the air — your hand is the brush.",
    description:
      "A real-time computer-vision application that turns hand movements into a drawing tool: a webcam feed plus MediaPipe hand tracking, with gesture-driven pencil and eraser modes — and no mouse needed.",
    exhibit:
      "Real-time CV drawing — MediaPipe hand tracking turns your index fingertip into a brush: pencil and eraser by gesture, webcam only.",
    github: "https://github.com/Alaoui925/Air-Canvas",
    stack: ["Python", "OpenCV", "MediaPipe Hands", "NumPy"],
    problem:
      "Standard drawing apps need a mouse or stylus. I wanted to find out how far pure computer vision can go as an input device — tracking a fingertip in real time and translating gestures into drawing actions.",
    features: [
      "Real-time fingertip tracking from 21 hand landmarks at ~30 FPS",
      "Gesture mapping: index only → pencil, index + middle → eraser",
      "Moving-average smoothing so strokes don't jitter between frames",
      "Strokes composited on a transparent overlay over the live feed",
    ],
    decision:
      "Split into small modules (tracker / drawing / config) so the tracking algorithm and the rendering never bleed into each other.",
    role: "Solo project — architecture and implementation",
    visual: { kind: "gestures" },
  },
  {
    id: "uniconnect",
    index: "W.02",
    name: "UniConnect",
    category: "Full stack · Student platform",
    year: "2026",
    tagline: "Tutoring, housing, chat — one system for student life.",
    description:
      "A university-life platform: a peer-driven course-revision marketplace, a student-housing marketplace with reservations and payment records, in-platform chat with unread tracking, favourites, report and support flows, and an admin dashboard with live statistics — a Laravel 12 REST API consumed by a React 19 SPA.",
    exhibit:
      "Revision marketplace, student housing with reservations, in-platform chat and an admin dashboard — Laravel 12 API + React 19 SPA.",
    github: "https://github.com/Alaoui925/UniConnect-Platform",
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "Sanctum",
      "React 19",
      "Tailwind CSS 4",
      "Recharts",
      "Cloudinary",
    ],
    problem:
      "Student life is scattered across WhatsApp groups, classifieds pages and paper boards: revision help is word-of-mouth, housing goes stale, and there is nowhere official to report anything. One platform is the answer — building it end to end, alone, is the exercise.",
    features: [
      "Housing marketplace — listings with uploadable images, reservations, favourites and payment records",
      "Revision system — courses, subjects, evaluations and professor statistics endpoints",
      "In-platform chat — per-conversation read state and an unread-total endpoint",
      "Moderation layer — reports (signalements), support claims (réclamations), admin dashboard",
    ],
    decision:
      "Split the SPA by feature (chat, housing, revisions) with a per-domain API client per domain — one module can't destabilise the rest, as proven by the api folder layout.",
    role: "Solo project — REST API and SPA",
    visual: {
      kind: "image",
      src: "/images/uniconnect.jpg",
      width: 1440,
      height: 900,
      alt: "UniConnect — student platform interface",
    },
    contentPlaceholder: false,
  },
  {
    id: "medicare",
    index: "W.03",
    name: "MediCare",
    category: "Full-stack web · App platform",
    year: "2026",
    tagline: "A three-role hospital booking platform, browser-only.",
    description:
      "A complete hospital appointment system with separate patient, doctor and administrator experiences — departments and doctors, real booking flows with live availability, medical records, and an admin console for the whole operation.",
    exhibit:
      "Patients book, doctors manage schedules, admins run the hospital — department directory, live slot availability, medical records.",
    github: "https://github.com/Alaoui925/Hospital-Reservation",
    demo: "https://hospital-reservation-ecru.vercel.app/",
    stack: ["React", "Vite", "React Router", "Supabase Auth"],
    problem:
      "Booking an appointment is one of the most tedious real-world flows. I built the full system — patients book, doctors manage schedules, administrators run the hospital — to learn how a role-based product holds together end to end.",
    features: [
      "Doctor directory with search, filters, sorting and pagination, plus live availability and slot picking",
      "Patient area: booking with reschedule/cancel, per-visit medical records",
      "Admin console: application review queue, doctor & department CRUD, workload reports",
      "6-digit email verification, with a Supabase mode switched by one env var",
    ],
    decision:
      "All data flows through a service layer that returns promises — swapping the mock API for a real backend touches no component or route.",
    role: "Solo project — designed and built end to end",
    visual: {
      kind: "image",
      src: "/images/medicare.jpg",
      width: 980,
      height: 853,
      alt: "MediCare hospital reservation platform — doctor directory with live availability",
    },
  },
  {
    id: "woodora",
    index: "W.04",
    name: "Woodora",
    category: "Front-end · E-commerce UI",
    year: "2026",
    tagline: "A furniture storefront with editorial art direction.",
    description:
      "A furniture store experience built with React, Tailwind CSS and Vite — an image-led catalogue with a responsive, curated marketing layout.",
    exhibit:
      "Furniture storefront with editorial art direction — image-led catalogue and curated marketing layout (React + Tailwind + Vite).",
    github: "https://github.com/Alaoui925/Woodora---Store",
    demo: "https://woodora-store.vercel.app/",
    stack: ["React", "Tailwind CSS", "Vite"],
    problem:
      "Most student stores look like bootstrap templates. I wanted a storefront with real art direction — photography, typography and spacing doing the selling — rather than another generic product grid.",
    features: [
      "Image-driven landing and shop experience",
      "Componentized catalogue layout with Tailwind",
      "Fully responsive, mobile-first layout",
    ],
    decision:
      "Kept the visual system in Tailwind utilities — no one-off CSS, so the whole theme lives in config.",
    role: "Solo project — design and front-end implementation",
    visual: {
      kind: "image",
      src: "/images/woodora.jpg",
      width: 1000,
      height: 456,
      alt: "Woodora furniture storefront — image-led catalogue layout",
    },
    contentPlaceholder: false,
  },
  {
    id: "haven",
    index: "W.05",
    name: "Haven Coffee",
    category: "Front-end · Editorial concept",
    year: "2026",
    tagline: "A premium editorial site for an artisanal café.",
    description:
      "A front-end concept translating Haven Coffee + Kitchen — an Australian-inspired brunch café in Annecy, France (an independent portfolio concept, not the official site) — into a warm, editorial web experience: narrative typography, seasonal roast drops with roast-log details, plans and stats, an in-page cart and newsletter — cream on terracotta, micro-details everywhere.",
    exhibit:
      "Editorial concept for an Annecy café — narrative typography, seasonal roast drops as tasting notes, in-page cart. Cream on terracotta.",
    github: "https://github.com/Alaoui925/haven-coffee-website",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "shadcn-style UI", "Lucide"],
    problem:
      "Café and roastery sites are usually interchangeable template grids. I wanted the warmth of a real roastery translated into a design system — serif editorial type over espresso-brown, terracotta accents, roast cards that read like tasting notes.",
    features: [
      "Editorial hero with serif display type and a live next-drop rail",
      "Roast log, plans, FAQ and stats with an in-page cart",
      "Section-reveal motion that respects the atmosphere (scroll cues, no flash)",
      "Responsive across desktop, tablet and mobile",
    ],
    decision:
      "Rebuilt from the original single-page concept as a Next.js App-Router project — typed components, shadcn-style primitives, Tailwind tokens only.",
    role: "Solo project — concept, design and implementation",
    visual: {
      kind: "image",
      src: "/images/haven.jpg",
      width: 1200,
      height: 750,
      alt: "Haven Coffee editorial website — roasted-the-slow-way hero with roast card",
    },
  },
  {
    id: "os-portfolio",
    index: "W.06",
    name: "OS-Portfolio",
    category: "Front-end · Design system",
    year: "2026",
    tagline: "The site you're reading right now.",
    description:
      "A light, editorial portfolio built as a design-system exercise: token-based theming on Next.js and TypeScript, case-study layouts, index-numbered sections, and motion that always respects reduced-motion preferences.",
    github: "https://github.com/Alaoui925/OS-Portfolio",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS 4", "Motion", "shadcn-style UI"],
    problem:
      "Recruiters scan a personal site in under a minute. The open problem was how to carry real evidence — repos, awards, certificates — in a design people remember, without a dark theme and without decoration standing in for content.",
    features: [
      "Every colour, radius and spacing value as a CSS variable in one tokens file",
      "Case-study blocks with alternating asymmetry instead of a uniform grid",
      "prefers-reduced-motion honoured globally, motion converted to instant changes",
    ],
    decision:
      "Built static-first (Next.js static export) so the site deploys anywhere, with self-hosted fonts and no client data fetching.",
    role: "Solo project — design, content and implementation",
    visual: { kind: "tokens" },
  },
] as const;

/**
 * Section 03 — pinned horizontal showcase order. Matches the exhibit brief
 * (AirCanvas → UniConnect → MediCare → Woodora → Haven). OS-Portfolio is
 * deliberately excluded: it is the site the reader is already on.
 */
export const exhibitProjects = projects.filter(
  (project) => project.id !== "os-portfolio",
);

export const stackMarquee = [
  "Python",
  "NumPy",
  "Pandas",
  "OpenCV",
  "MediaPipe",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Laravel",
  "C / C++",
  "SQL",
  "Git",
  "Linux",
] as const;
