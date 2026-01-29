import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type { ButtonProps } from "@/types";

import { cn } from "@/lib";

const buttonVariants = cva(
    // Base styles (your rounded-full + shadow + transition)
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    {
        variants: {
            variant: {
                primary:
                    "bg-accent text-white hover:bg-accent/90 dark:bg-accent-light dark:hover:bg-accent-light/90",
            
            secondary:
                    "bg-transparent border border-accent text-accent hover:bg-accent/10 dark:border-accent-light dark:text-accent-light dark:hover:bg-accent-light/10",

            ghost:
                    "bg-transparent hover:bg-accent/10 dark:hover:bg-accent-light/10 text-accent dark:text-accent-light",

            danger: 
                    "bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
            },
            size: {
                sm: "px-4 py-1.5 text-sm",
                md: "px-6 py-2.5 text-sm",
                lg: "px-7 py-3 text-base",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md"
        }
    }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = "Button";

export { Button, buttonVariants }