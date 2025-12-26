"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { SectionHeader } from "../../ui";
import { SECURITY_FEATURES } from "../../../constants/landing-data";

export const Security = () => {
  return (
    <section className="py-32 bg-white dark:bg-black border-none relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionHeader 
            centered
            badge="Security First"
            badgeIcon={Shield}
            badgeClassName="bg-zinc-100 ring-zinc-200/50 text-zinc-900 dark:bg-white/5 dark:ring-white/10 dark:text-zinc-400"
            title={<>Everything runs on<br /><span className="text-brand-primary font-bold">your device.</span></>}
            description="Dream executes all browser actions locally. Your credentials never leave your machine. No cloud servers, no data harvesting—just your browser, under your control."
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
           <div className="absolute inset-x-0 -top-20 -bottom-20 bg-zinc-100/30 dark:bg-white/2 rounded-full blur-[120px] opacity-50 pointer-events-none" />
          {SECURITY_FEATURES.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="relative bg-white dark:bg-bg-dark p-8 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-premium hover:shadow-premium-hover"
            >
              <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-zinc-900 dark:text-white stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
