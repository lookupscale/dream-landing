"use client";

import { motion } from "framer-motion";
import { Navbar, Footer } from "@/components/layout";
import { Check, ArrowRight, Zap, Users, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

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
    <div className="min-h-screen bg-white dark:bg-bg-dark text-zinc-900 dark:text-white">
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
            
            {/* Individual Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="relative bg-white dark:bg-[#0c0c0c] border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-premium flex flex-col"
            >
              <div className="mb-8">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-zinc-900 dark:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Individual</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">For power users getting work done.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$20</span>
                  <span className="text-zinc-500 dark:text-zinc-400">/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {FEATURES.individual.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-center text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group">
                Download Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Teams Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative bg-white dark:bg-[#0c0c0c] border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-premium flex flex-col ring-2 ring-brand-primary/20"
            >
              <div className="absolute -top-4 right-8 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </div>
              
              <div className="mb-8">
                <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-zinc-900 dark:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Teams</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">Collaboration for modern workplaces.</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$25</span>
                  <span className="text-zinc-500 dark:text-zinc-400">/user/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {FEATURES.teams.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-center text-sm text-zinc-600 dark:text-zinc-300">
                    <Check className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="w-full py-4 bg-brand-primary text-white font-bold rounded-2xl shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 group">
                Contact Sales
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
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
