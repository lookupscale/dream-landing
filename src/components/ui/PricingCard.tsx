"use client";

import { motion } from "framer-motion";
import { Check, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui";

interface PricingCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
  priceSubtext: string;
  features: string[];
  ctaText: React.ReactNode;
  ctaHref?: string;
  ctaClassName?: string;
  isPopular?: boolean;
  delay?: number;
  direction?: "left" | "right";
}

export function PricingCard({
  icon: Icon,
  title,
  description,
  price,
  priceSubtext,
  features,
  ctaText,
  ctaHref,
  ctaClassName,
  isPopular = false,
  delay = 0,
  direction = "left",
}: PricingCardProps) {
  const initialX = direction === "left" ? -20 : 20;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      className={`relative bg-light-alt dark:bg-dark-alt border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-premium flex flex-col ${
        isPopular ? "ring-2 ring-brand-primary/20" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 right-8 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-zinc-900 dark:text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-zinc-500 dark:text-zinc-400">{priceSubtext}</span>
        </div>
      </div>

      <div className="space-y-4 mb-10 flex-1">
        {features.map((feature, i) => (
          <div key={i} className="flex gap-3 items-center text-sm text-zinc-600 dark:text-zinc-300">
            <Check className="w-4 h-4 text-brand-primary shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Button href={ctaHref} className={ctaClassName}>
        {ctaText}
      </Button>
    </motion.div>
  );
}
