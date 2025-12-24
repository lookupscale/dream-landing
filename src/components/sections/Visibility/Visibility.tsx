import { Eye } from "lucide-react";
import { AppTag, SectionHeader } from "../../ui";
import { VISIBILITY_ACTIVITIES } from "../../../constants/landing-data";

export const Visibility = () => {
  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-950 border-none relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-1 lg:order-2">
          <SectionHeader 
            badge="Full Visibility"
            badgeIcon={Eye}
            badgeClassName="bg-blue-500/10 text-blue-500"
            title={<>Watch every step<br /><span className="text-zinc-400 dark:text-zinc-600">in real-time.</span></>}
            description="See exactly what Dream is doing as it works. Every click, every navigation, every action. No black boxes."
          />
        </div>

        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-0 bg-zinc-200/50 dark:bg-white/5 rounded-2xl blur-3xl opacity-50" />
          <div className="relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-900">
              <div className="flex items-center gap-1.5">
                 <span className="text-zinc-400 font-medium text-lg">#</span>
                 <span className="text-sm font-bold text-zinc-900 dark:text-white">general</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-white/5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-zinc-500 font-medium">Live</span>
              </div>
            </div>
            <div className="p-4 space-y-5 bg-white dark:bg-zinc-900">
              {VISIBILITY_ACTIVITIES.map((item, i) => (
                <div key={i} className="flex gap-3 group">
                   <div className="w-9 h-9 rounded bg-brand-primary/10 flex items-center justify-center shrink-0">
                      <img src="/logo.png" className="w-5 h-5 rounded-sm" />
                   </div>
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
        </div>
      </div>
    </section>
  );
};
