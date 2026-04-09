import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "rounded-full px-3 py-0.5 border-transparent bg-primary/10 text-primary hover:bg-primary/15 ring-offset-background",
        pill: "rounded-full px-3 py-0.5 border-transparent bg-primary/10 text-primary hover:bg-primary/15 ring-offset-background",
        muted: "rounded-full px-3 py-0.5 border-transparent bg-muted text-muted-foreground hover:bg-muted/80",
        outline: "rounded-full px-3 py-0.5 text-foreground border-border hover:bg-muted/60",
        chip: "rounded-lg px-3 py-1.5 border-transparent bg-muted/60 text-foreground hover:bg-muted/80 flex items-center gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
