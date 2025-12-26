import { motion } from "framer-motion";
import { useState } from "react";
import { Zap } from "lucide-react";
import { cn } from "../../../lib/utils";
import { SectionHeader } from "../../ui/SectionHeader";

export const Connections = () => {
  const [connections, setConnections] = useState({
    google: true,
    stripe: true,
    notion: false,
  });

  const toggleConnection = (key: keyof typeof connections) => {
    setConnections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const services = [
    { id: "google", name: "Google Workspace", desc: "Calendar, Drive, Gmail", color: "bg-blue-500", initial: "G" },
    { id: "stripe", name: "Stripe", desc: "Payments, Invoices", color: "bg-indigo-500", initial: "S" },
    { id: "notion", name: "Notion", desc: "Wiki, Docs, Projects", color: "bg-zinc-800 dark:bg-zinc-700", initial: "N" },
  ];

  return (
    <section className="py-32 bg-zinc-50 dark:bg-zinc-950 border-none relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <SectionHeader 
            badge="Seamless Access"
            badgeIcon={Zap}
            badgeClassName="bg-zinc-100 ring-zinc-200/50 text-zinc-900 dark:bg-white/5 dark:ring-white/10 dark:text-zinc-400"
            title={<>One click to connect everything.<br /><span className="text-brand-primary font-bold">One click to disconnect.</span></>}
            description="Grant Dream access to all your authenticated browser sessions instantly. Then, toggle individual services on or off to ensure Dream only accesses exactly what you want it to."
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
           <div className="absolute inset-x-0 -top-10 -bottom-10 bg-zinc-100/50 dark:bg-white/2 rounded-full blur-[100px] opacity-50 pointer-events-none" />
           <div className="relative bg-white dark:bg-bg-dark border border-zinc-200 dark:border-white/10 rounded-2xl p-8 shadow-premium">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-6 font-medium">Connected Services</p>
              
              <div className="space-y-4">
                {services.map((s) => (
                  <div key={s.id} onClick={() => toggleConnection(s.id as keyof typeof connections)} className="flex items-center justify-between p-4 bg-white dark:bg-bg-dark/50 border border-zinc-200 dark:border-white/10 rounded-xl cursor-pointer hover:border-brand-primary/30 dark:hover:border-brand-primary/30 transition-all group/item">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center text-white font-bold text-lg`}>{s.initial}</div>
                      <div>
                        <div className="text-zinc-900 dark:text-zinc-200 font-medium">{s.name}</div>
                        <div className="text-zinc-500 text-xs">{s.desc}</div>
                      </div>
                    </div>
                    
                    <div className={cn("w-12 h-6 rounded-full p-1 transition-colors duration-300", connections[s.id as keyof typeof connections] ? "bg-brand-primary" : "bg-zinc-200 dark:bg-white/10")}>
                      <div className={cn("w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300", connections[s.id as keyof typeof connections] ? "translate-x-6" : "translate-x-0")} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-white/10 text-center">
                <button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:white transition-colors">
                  + Add another service
                </button>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
