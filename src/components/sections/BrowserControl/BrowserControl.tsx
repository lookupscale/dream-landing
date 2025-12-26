import { motion } from "framer-motion";
import { Cloud, Check, MousePointer2 } from "lucide-react";
import { SectionHeader } from "../../ui/SectionHeader";

export const BrowserControl = () => {
  return (
    <section className="py-32 bg-white dark:bg-black relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionHeader 
            centered
            badge="Background Control"
            badgeIcon={MousePointer2}
            badgeClassName="bg-zinc-100 ring-zinc-200/50 text-zinc-900 dark:bg-white/5 dark:ring-white/10 dark:text-zinc-400"
            title={<>Dream controls your browser<br /><span className="text-brand-primary font-bold">in the background.</span></>}
            description="It operates in the background, clicking buttons, filling forms, and navigating sites just like you would, freeing you up to focus on what matters."
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="w-full max-w-5xl relative"
        >
          <div className="absolute inset-x-0 -top-20 -bottom-20 bg-zinc-100/50 dark:bg-white/2 rounded-full blur-[120px] opacity-50 pointer-events-none" />
          <div className="relative bg-white dark:bg-bg-dark border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-premium">
            {/* Browser Header */}
            <div className="bg-zinc-100/80 dark:bg-white/5 backdrop-blur-md border-b border-zinc-200 dark:border-white/5 px-4 py-3 flex items-center gap-4 sticky top-0 z-40">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex-1 bg-white/50 dark:bg-black/40 rounded-md h-6 flex items-center px-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium font-mono border border-zinc-200/50 dark:border-white/5">
                salesforce.com/opportunities/acme-corp
              </div>
            </div>

            {/* Browser Content */}
            <div className="p-6 md:p-12 min-h-[300px] md:min-h-[400px] relative bg-zinc-50 dark:bg-[#111] flex flex-col gap-6 md:gap-10">
              {/* Mock App Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-white/5">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="w-32 md:w-48 h-6 bg-zinc-200 dark:bg-white/10 rounded" />
                </div>
                <div className="flex gap-3">
                  <div className="w-20 md:w-24 h-10 bg-brand-primary text-white text-sm font-medium rounded flex items-center justify-center shadow-lg shadow-brand-primary/20">Save</div>
                </div>
              </div>

              {/* Mock Form */}
              <div className="max-w-4xl space-y-6 md:space-y-8">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="p-4 md:p-5 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-xl space-y-3">
                    <div className="w-16 md:w-24 h-4 bg-zinc-100 dark:bg-white/10 rounded" />
                    <div className="w-full max-w-[120px] h-6 bg-zinc-200 dark:bg-white/20 rounded" />
                  </div>
                  <div className="p-4 md:p-5 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-xl space-y-3">
                    <div className="w-16 md:w-24 h-4 bg-zinc-100 dark:bg-white/10 rounded" />
                    <div className="w-full max-w-[100px] h-6 bg-zinc-200 dark:bg-white/20 rounded" />
                  </div>
                </div>
                <div className="p-4 md:p-5 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/5 rounded-xl space-y-3">
                    <div className="w-24 md:w-32 h-4 bg-zinc-100 dark:bg-white/10 rounded" />
                    <div className="flex items-center gap-3">
                        <div className="px-3 py-1.5 bg-green-500/10 text-green-600 text-sm font-medium rounded border border-green-500/20">
                            Closed Won
                        </div>
                        <div className="w-5 h-5 rounded-full border border-green-500 bg-green-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                    </div>
                </div>
              </div>

              {/* Cursor Animation */}
              <motion.div
                className="absolute z-30 pointer-events-none drop-shadow-2xl"
                initial={{ x: "80%", y: "80%" }}
                animate={{ x: "65%", y: "45%" }}
                transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse", 
                    ease: "easeInOut",
                    repeatDelay: 0.5
                }}
              >
                <MousePointer2 className="w-8 h-8 text-black dark:text-white fill-black dark:fill-white stroke-white dark:stroke-black" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
