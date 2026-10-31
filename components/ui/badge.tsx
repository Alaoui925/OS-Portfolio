import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * shadcn/ui Badge — squared outline chip in mono micro type.
 * The default stamp of the Atlas: evidence terms, stack tags, states.
 */
const badgeVariants = cva(
  cn(
    "inline-flex items-center border px-2 py-0.5 font-mono text-[0.8125rem] uppercase leading-6 tracking-[0.04em] whitespace-nowrap",
  ),
  {
    variants: {
      variant: {
        outline: "border-line-strong text-muted",
        brand: "border-brand/45 text-brand",
        ink: "border-ink bg-ink text-paper",
      },
    },
    defaultVariants: { variant: "outline" },
  },
);

function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
