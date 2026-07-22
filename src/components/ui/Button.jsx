import { scrollToSection } from "@/utils/helpers";
import { cn } from "@/utils/helpers";

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  ...props
}) {
  const baseClass = cn(variants[variant], sizes[size], className);

  if (href) {
    return (
      <button
        onClick={() => scrollToSection(href)}
        className={baseClass}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button onClick={onClick} className={baseClass} {...props}>
      {children}
    </button>
  );
}
