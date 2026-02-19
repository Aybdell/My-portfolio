import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-midnight-accent text-white hover:bg-midnight-accentDark shadow-steel hover:shadow-steel-lg transform hover:scale-105",
        secondary:
          "border-midnight-border bg-midnight-surface text-midnight-textSecondary hover:bg-midnight-accent/10 hover:text-midnight-accent hover:border-midnight-accent/50",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border-midnight-border text-midnight-text hover:bg-midnight-accent/10 hover:text-midnight-accent hover:border-midnight-accent/50",
        gradient: "border-transparent bg-gradient-to-r from-midnight-accent to-midnight-accentDark text-white hover:from-midnight-accentDark hover:to-midnight-accent shadow-steel hover:shadow-steel-lg transform hover:scale-105",
        glass: "glass-steel text-midnight-text hover:bg-midnight-accent/10 hover:text-midnight-accent border border-midnight-border shadow-steel hover:shadow-steel-lg transform hover:scale-105",
        premium: "border-midnight-accent/30 bg-gradient-to-r from-midnight-accent/20 to-midnight-accentDark/20 text-midnight-text hover:from-midnight-accent/30 hover:to-midnight-accentDark/30 shadow-steel hover:shadow-steel-lg transform hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
