import { DreamTag } from "../../ui";
import { HOW_IT_WORKS_STEPS } from "../../../constants/landing-data";

export const HowItWorks = () => {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-black border-none relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-helvetica font-medium text-zinc-900 dark:text-white mb-4">
            Get up and running with <span className="inline-flex items-center gap-2 align-bottom"><img src="/logo.png" alt="Dream" className="w-8 h-8" /> DREAM</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-zinc-200 dark:bg-white/10 -z-1" />
          
          {HOW_IT_WORKS_STEPS.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-white dark:bg-[#111] border border-zinc-200 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300 z-10">
                <item.icon className="w-6 h-6 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs text-balance">
                {item.title === "Message" ? (
                  <span>Just mention <DreamTag /> in any channel to start.</span>
                ) : item.title === "Connect Workplace" ? (
                  <span>Connect your <img src="/slack-logo-dark.svg" alt="Slack" className="inline h-3 w-auto brightness-0 dark:invert align-baseline mx-1 opacity-70 pt-[2px]" /> workspace securely.</span>
                ) : (
                  item.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
