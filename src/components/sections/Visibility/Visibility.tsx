import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { AppTag, SectionHeader } from "../../ui";
import { VISIBILITY_ACTIVITIES } from "../../../constants/landing-data";

export const Visibility = () => {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-950 border-none relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="order-1 lg:order-2"
        >
          <SectionHeader 
            badge="Full Visibility"
            badgeIcon={Eye}
            badgeClassName="bg-zinc-100 ring-zinc-200/50 text-zinc-900 dark:bg-white/5 dark:ring-white/10 dark:text-zinc-400"
            title={<>Watch every step<br /><span className="text-brand-primary font-bold">in real-time.</span></>}
            description="See exactly what Dream is doing as it works. Every click, every navigation, every action. No black boxes."
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="order-2 lg:order-1 relative"
        >
          <div className="absolute inset-x-0 -top-10 -bottom-10 bg-zinc-100/50 dark:bg-white/2 rounded-full blur-[100px] opacity-50 pointer-events-none" />
          <div className="relative bg-white dark:bg-bg-dark border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-premium">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900">
              <div className="flex items-center gap-1.5">
                 <span className="text-zinc-400 font-medium text-lg">#</span>
                 <span className="text-sm font-bold text-zinc-900 dark:text-white">general</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/5">
                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(219,51,4,0.4)]" />
                <span className="text-[10px] text-zinc-500 font-medium">Live</span>
              </div>
            </div>
            <div className="p-4 space-y-5 bg-white dark:bg-zinc-900">
              {VISIBILITY_ACTIVITIES.map((item, i) => (
                <div key={i} className="flex gap-3 group">
                   <img src="/logo.png" className="w-9 h-9 rounded-lg shrink-0" />
                   <div className="min-w-0">
                      <div className="flex items-baseline gap-2 mb-0.5">
                         <span className="font-bold text-sm text-zinc-900 dark:text-white">Dream</span>
                         <AppTag />
                         <span className="text-[10px] text-zinc-400">{item.time}</span>
                      </div>
                      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {item.text}
                      </p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
