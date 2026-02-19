import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-midnight-accent text-white hover:bg-midnight-accentDark shadow-steel hover:shadow-steel-lg transform hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-midnight-border bg-midnight-surface text-midnight-text hover:bg-midnight-accent/10 hover:text-midnight-accent hover:border-midnight-accent/50",
        secondary:
          "bg-midnight-surface text-midnight-textSecondary hover:bg-midnight-accent/10 hover:text-midnight-accent border border-midnight-border",
        ghost: "hover:bg-midnight-accent/10 hover:text-midnight-accent text-midnight-textSecondary",
        link: "text-midnight-accent underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-midnight-accent to-midnight-accentDark text-white hover:from-midnight-accentDark hover:to-midnight-accent shadow-steel hover:shadow-steel-lg transform hover:-translate-y-0.5 active:translate-y-0",
        glass: "glass-steel text-midnight-text hover:bg-midnight-accent/10 hover:text-midnight-accent border border-midnight-border shadow-steel hover:shadow-steel-lg",
        premium: "bg-gradient-to-r from-midnight-accent via-midnight-accent to-midnight-accentDark text-white shadow-steel-lg hover:shadow-steel-xl transform hover:-translate-y-1 active:translate-y-0 border border-midnight-accent/30",
      },
      size: {
        default: "h-12 px-6 py-2 text-sm sm:text-base",
        sm: "h-10 rounded-xl px-4 text-xs sm:text-sm",
        lg: "h-14 rounded-3xl px-8 text-base sm:text-lg",
        xl: "h-16 rounded-3xl px-10 text-lg sm:text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
