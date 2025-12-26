"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SlackSimulation } from "./SlackSimulation";
import { DreamTag, Button } from "../../ui";
import { SCENARIOS } from "../../../constants/landing-data";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [step, setStep] = useState(0);

  const currentScenario = SCENARIOS[scenarioIndex];

  useEffect(() => {
    const times = [1500, 3500, 500]; 
    let timer: ReturnType<typeof setTimeout>;

    const runStep = () => {
      if (step === 2) {
        setStep(0);
        setScenarioIndex((current) => (current + 1) % SCENARIOS.length);
      } else {
        setStep((s) => s + 1);
      }
    };

    timer = setTimeout(runStep, times[step]);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex flex-col items-center justify-start pt-40 pb-32 overflow-hidden bg-white dark:bg-black text-zinc-900 dark:text-white">
      {/* Background Gradient for soft transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none z-10" />
      
      <motion.div style={{ y, opacity }} className="relative z-20 text-left px-6 max-w-7xl mx-auto w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg md:text-2xl lg:text-3xl font-medium tracking-tight mb-12 text-zinc-900 dark:text-white"
        >
          <span className="md:block md:mb-2">
            Message <DreamTag /> in Slack like a coworker.{" "}
          </span>
          <span className="md:block">
            Dream uses your browser to
            <span className="underline decoration-brand-primary/30 underline-offset-8"> get real work done.</span>
          </span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-start justify-start gap-4 text-left"
        >
          <button className="px-8 py-5 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-primary/90 transition-all text-base flex items-center gap-3 shadow-premium hover:shadow-premium-hover hover:-translate-y-1 active:scale-[0.98] group">
            <span>Download for macOS</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: .6, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-start gap-2 mt-8 mb-20"
        >
          <span className="font-medium text-zinc-400 dark:text-zinc-500 text-base">Backed by</span>
          <img src="/yc-logo-black.svg" alt="Y Combinator" className="h-5 dark:hidden" />
          <img src="/yc-logo-white.svg" alt="Y Combinator" className="h-5 hidden dark:block" />
        </motion.div>
      </motion.div>

      <div className="-mb-24 w-full flex justify-center relative z-10">
        <SlackSimulation 
          currentScenario={currentScenario} 
          scenarioIndex={scenarioIndex} 
          step={step} 
        />
      </div>
    </section>
  );
};
