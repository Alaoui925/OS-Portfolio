import type { Metadata, Viewport } from "next";
import { Archivo, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/motion-provider";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/lib/data/profile";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oaportfolio.com"),
  alternates: { canonical: "/" },
  title: {
    default: "Oussama El Alaoui — AI Engineer-in-Training",
    template: "%s — Oussama El Alaoui",
  },
  description:
    "Personal portfolio of Oussama El Alaoui — engineering student at EMSI (Computer Science & Networks, Morocco), building with Python, OpenCV and React, and training toward AI and data science. Open to AI/Data-Science internships and a final-year project (PFE).",
  authors: [{ name: profile.name, url: profile.github }],
  keywords: [
    "Oussama El Alaoui",
    "AI engineer Morocco",
    "machine learning",
    "data science",
    "EMSI",
    "PFE",
    "internship",
    "portfolio",
    "Python",
    "OpenCV",
  ],
  openGraph: {
    title: "Oussama El Alaoui — AI Engineer-in-Training",
    description: profile.positioning,
    type: "website",
    locale: "en_US",
    siteName: "OS-Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Oussama El Alaoui — AI Engineer-in-Training",
    description: profile.positioning,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f6f3ec",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: profile.education.school,
  },
  knowsLanguage: profile.languages.map((l) => l.name),
  knowsAbout: [
    "Machine learning",
    "Computer vision",
    "Python",
    "OpenCV",
    "Data science",
    "React",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${hanken.variable} ${spaceMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-paper"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        {/*
            Vercel Web Analytics — injects the edge-served script on Vercel
            deployments (static export included) and no-ops everywhere else
            (silently skips development; local exports just skip the fetch).
            Cookie-less, so no consent banner is needed.
        */}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
