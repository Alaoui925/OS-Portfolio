import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { contactInfo } from "@/data/socialLinks";

const contactItems = [
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: contactInfo.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-accent-soft border border-accent/20 px-6 md:px-12 lg:px-16 py-14 md:py-20"
        >
          {/* soft glow */}
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/15 blur-3xl"
          />

          <div className="relative max-w-3xl">
            <p className="eyebrow">Let&apos;s Create Something Great</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.12] text-ink">
              Have a project in mind? I&apos;d{" "}
              <em className="text-accent not-italic">love</em> to hear about
              it.
            </h2>

            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center">
                    <item.icon size={15} strokeWidth={1.8} className="text-accent" />
                  </span>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-ink hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-ink">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a href={`mailto:${contactInfo.email}`} className="btn-primary mt-10">
              Let&apos;s Talk
              <ArrowRight size={17} strokeWidth={2.25} />
            </a>
          </div>

          {/* decorative dot */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 right-8 w-2.5 h-2.5 rounded-full bg-accent/50"
          />
        </motion.div>
      </div>
    </section>
  );
}