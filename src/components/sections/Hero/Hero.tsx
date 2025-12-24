import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { SlackSimulation } from "./SlackSimulation";
import { DreamTag } from "../../ui";
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
          transition={{ duration: 0.8 }}
          className="text-xl md:text-3xl font-helvetica font-medium tracking-tight mb-8 leading-[1.3] text-zinc-900 dark:text-white"
        >
          <span>
            Message <DreamTag /> in Slack like a coworker.
          </span><br />
          <span>Dream uses the browser on your computer to <span className="whitespace-nowrap underline decoration-brand-primary/30 underline-offset-[6px]">get real work done.</span></span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start justify-start gap-4 text-left"
        >
          <button className="px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-[#b02a03] transition-all text-sm flex items-center gap-3 shadow-[0_0_30px_-5px_rgba(219,51,4,0.4)] hover:shadow-[0_0_40px_-5px_rgba(219,51,4,0.6)] hover:scale-105 active:scale-95 group">
            <span>Download for macOS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: .6, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-start gap-2 mt-8 mb-20"
        >
          <span className="font-helvetica font-medium text-zinc-400 dark:text-zinc-500 text-base">Backed by</span>
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
