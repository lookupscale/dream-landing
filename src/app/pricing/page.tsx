"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { ArrowRight, Zap, Users, ShieldCheck } from "lucide-react";
import { PricingCard } from "@/components/ui";
import Link from "next/link";

const SHARED_FEATURES = [
  "Local execution on your device",
  "Slack integration",
  "Real-time visibility",
  "Background browser control",
  "Unlimited connected services",
];

const FEATURES = {
  individual: [
    ...SHARED_FEATURES,
    "Standard support",
  ],
  teams: [
    "Everything in Individual",
    "Team workspace & collaboration",
    "Centralized billing",
    "Priority support",
  ],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark text-zinc-900 dark:text-white">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            >
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
                Start <span className="text-brand-primary font-bold">dreaming</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Choose the plan that's right for you. Whether you're working solo or building the next big team.
              </p>
            </motion.div>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
            <div className="absolute inset-x-0 -top-20 -bottom-20 bg-zinc-100/30 dark:bg-white/2 rounded-full blur-[120px] opacity-50 pointer-events-none" />
            
            <PricingCard
              icon={Zap}
              title="Individual"
              description="For power users getting work done."
              price="$20"
              priceSubtext="/mo"
              features={FEATURES.individual}
              ctaText={
                <>
                  Download Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              }
              ctaClassName="w-full h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 gap-2 group"
              delay={0.1}
              direction="left"
            />

            <PricingCard
              icon={Users}
              title="Teams"
              description="Collaboration for modern workplaces."
              price="$25"
              priceSubtext="/user/mo"
              features={FEATURES.teams}
              ctaText={
                <>
                  Contact Sales
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              }
              ctaHref="/contact"
              ctaClassName="w-full h-14 gap-2 group shadow-lg shadow-brand-primary/20"
              isPopular
              delay={0.2}
              direction="right"
            />
          </div>

          {/* Enterprise Note */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-white/5 rounded-full border border-zinc-200 dark:border-white/10">
              <ShieldCheck className="w-4 h-4 text-zinc-500" />
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                Need something else? <Link href="/contact" className="text-zinc-900 dark:text-white hover:underline">Chat with us about Enterprise</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
