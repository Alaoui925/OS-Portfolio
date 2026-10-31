import { cn } from "@/lib/utils";

/**
 * Shared section header: the index-numbered mono label that opens
 * every numbered section after the hero.
 */
export function SectionLabel({
  index,
  title,
  hint,
  className,
}: {
  index: string;
  title: string;
  hint?: string;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "micro flex items-baseline gap-3 border-b border-line pb-3 font-normal",
        className,
      )}
    >
      <span className="text-brand">{index}</span>
      <span className="text-ink">{title}</span>
      {hint ? <span className="text-muted">{hint}</span> : null}
    </h2>
  );
}
