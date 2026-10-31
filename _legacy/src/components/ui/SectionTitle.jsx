import Reveal from "@/components/ui/Reveal";

export default function SectionTitle({ label, title, highlight, subtitle }) {
  return (
    <Reveal className="max-w-2xl mb-12 md:mb-16">
      {label && <p className="eyebrow mb-3">{label}</p>}
      <h2 className="heading-display">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-accent">{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg leading-relaxed mt-4">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
