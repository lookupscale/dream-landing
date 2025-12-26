"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";
import React from "react";

import Link from "next/link";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "outline" | "ghost" | "secondary";
  size?: "xs" | "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const MotionLink = motion.create(Link);

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", size = "sm", children, className, href, ...props }, ref) => {
    const variants = {
      primary: "bg-brand-primary text-white shadow-premium hover:bg-brand-primary/90",
      outline: "bg-transparent border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-white/5",
      ghost: "bg-transparent text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5",
      secondary: "bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-white/10",
    };

    const sizes = {
      xs: "px-3 py-1.5 text-[10px]",
      sm: "px-5 py-2.5 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const commonClasses = cn(
      "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200",
      variants[variant],
      sizes[size],
      className
    );

    const animationProps = {
      whileHover: { y: -1 },
      whileTap: { y: 0 },
    };

    if (href) {
      return (
        <MotionLink
          href={href}
          className={commonClasses}
          {...animationProps}
          {...(props as any)}
        >
          {children}
        </MotionLink>
      );
    }

    return (
      <motion.button
        ref={ref as any}
        className={commonClasses}
        {...animationProps}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
