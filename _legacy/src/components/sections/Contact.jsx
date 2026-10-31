import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { profile } from "@/data/profile";

const CONTACT_LINKS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: `@Alaoui925`, href: profile.github },
  ...(profile.linkedin
    ? [{ label: "LinkedIn", value: "My LinkedIn profile", href: profile.linkedin }]
    : []),
  { label: "Based in", value: profile.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        <SectionTitle
          label="Contact"
          title="Let's build something"
          highlight="real"
          subtitle="Open to internships, collaboration, and interesting student or junior roles — especially anywhere AI meets solid software."
        />

        <Reveal className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <a href={`mailto:${profile.email}`} className="group inline-flex flex-col gap-1">
              <span className="text-sm text-muted font-medium">Email me directly</span>
              <span className="text-xl md:text-2xl font-medium text-ink group-hover:text-accent transition-colors break-all">
                {profile.email}
              </span>
              <span className="text-accent text-sm font-semibold mt-1 inline-flex items-center gap-1.5">
                Write a message
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <p className="text-muted leading-relaxed mt-8 max-w-md">
              If you're a recruiter or a peer with a project idea, email works best
              — I read everything and reply within a day or two.
            </p>
          </div>

          <address className="not-italic grid content-start gap-4">
            {CONTACT_LINKS.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4 border-b border-line pb-4">
                <span className="text-[0.65rem] uppercase tracking-[0.22em] text-muted">
                  {item.label}
                </span>
                {item.href ? (
                  <a href={item.href} className="text-sm font-medium text-ink hover:text-accent transition-colors text-right">
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-ink text-right">{item.value}</span>
                )}
              </div>
            ))}
          </address>
        </Reveal>
      </div>
    </section>
  );
}
