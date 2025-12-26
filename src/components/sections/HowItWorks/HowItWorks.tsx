"use client";

import { motion } from "framer-motion";
import { DreamTag } from "../../ui";
import { HOW_IT_WORKS_STEPS } from "../../../constants/landing-data";

export const HowItWorks = () => {
  return (
    <section className="py-32 bg-light-alt dark:bg-dark-alt border-none relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-medium text-zinc-900 dark:text-white mb-6 tracking-tight">
            Get up and running with <span className="inline-flex items-center gap-3 align-middle"><img src="/logo.png" alt="Dream" className="w-10 h-10" /> DREAM</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-linear-to-r from-transparent via-zinc-200 dark:via-white/10 to-transparent -z-1" />
          
          {HOW_IT_WORKS_STEPS.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-4xl bg-light dark:bg-dark border border-zinc-200 dark:border-white/10 flex items-center justify-center mb-8 shadow-premium group-hover:shadow-premium-hover group-hover:-translate-y-2 transition-all duration-500 z-10">
                <item.icon className="w-8 h-8 text-zinc-900 dark:text-white stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-[280px] text-balance leading-relaxed">
                {item.title === "Message" ? (
                  <span>Just mention <DreamTag /> in any channel to start.</span>
                ) : item.title === "Connect Workplace" ? (
                  <span>Connect your <img src="/slack-logo-dark.svg" alt="Slack" className="inline h-3 w-auto brightness-0 dark:invert align-baseline mx-1 opacity-70 pt-[2px]" /> workspace securely.</span>
                ) : (
                  item.description
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
