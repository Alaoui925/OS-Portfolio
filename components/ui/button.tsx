import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui Button — reseated on the Digital Atlas tokens.
 * Hard edges (radius 0), mono-micro copy, ink fill as the primary weight,
 * Majorelle reserved for focus and for the hover shift of ghost actions.
 * Buttons never change size or position on hover (stability rule) —
 * feedback is colour and shadow, never transform.
 */
const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap select-none",
    "font-body text-[0.8125rem] font-semibold uppercase tracking-[0.06em]",
    "transition-[background-color,border-color,color,box-shadow] duration-200 ease-out",
    "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand",
    "disabled:pointer-events-none disabled:opacity-45",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-200",
  ),
  {
    variants: {
      variant: {
        ink: [
          "bg-ink text-paper border border-ink shadow-inset-transparent",
          "hover:bg-brand hover:border-brand hover:shadow-[inset_0_2px_4px_hsla(248,60%,12%,0.35)]",
          "hover:[&_svg]:translate-x-0.5",
          "active:bg-brand-active active:border-brand-active",
        ],
        outline: [
          "bg-transparent text-ink border border-ink/70",
          "hover:bg-ink hover:text-paper hover:border-ink",
          "hover:[&_svg]:translate-x-0.5",
          "active:bg-soft active:border-soft",
        ],
        link: [
          "bg-transparent text-ink border border-transparent px-0",
          "hover:text-brand [&_svg]:hover:translate-x-0.5",
          "underline-offset-4 hover:underline decoration-1",
          "active:text-brand-active",
        ],
      },
      size: {
        sm: "h-9 px-3.5",
        md: "h-11 px-6",
        lg: "h-12 px-7 text-[0.875rem]",
      },
    },
    defaultVariants: {
      variant: "ink",
      size: "md",
    },
  },
);

function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"a"> & VariantProps<typeof buttonVariants>) {
  return (
    <a className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { Button, buttonVariants };
