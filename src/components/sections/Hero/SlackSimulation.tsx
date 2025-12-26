import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../../lib/utils";
import { AppTag } from "../../ui/AppTag";

interface SlackSimulationProps {
  currentScenario: any;
  scenarioIndex: number;
  step: number;
}

export const SlackSimulation = ({ currentScenario, scenarioIndex, step }: SlackSimulationProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-7xl mx-auto px-6 relative z-20"
    >
      <div className="relative rounded-t-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#0c0c0c] shadow-2xl overflow-hidden ring-1 ring-zinc-200 dark:ring-white/5">
          {/* Window Controls */}
          <div className="h-10 border-b border-zinc-200 dark:border-white/5 flex items-center px-4 bg-zinc-50/80 dark:bg-[#0c0c0c]/80 backdrop-blur-md sticky top-0 z-30">
             <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-[#2c2c2c]" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-[#2c2c2c]" />
                <div className="w-3 h-3 rounded-full bg-zinc-300 dark:bg-[#2c2c2c]" />
             </div>
          </div>

          {/* Content Area */}
          <div className="aspect-3/4 md:aspect-16/10 bg-white dark:bg-[#111111] relative overflow-hidden flex">
             {/* Sidebar */}
             <div className="w-64 border-r border-zinc-200 dark:border-white/5 bg-zinc-50 dark:bg-[#0c0c0c] p-4 hidden md:block">
                <div className="flex items-center gap-3 mb-6">
                   <img src="/slack-logo-dark.svg" className="h-5 w-auto brightness-0 dark:invert opacity-80" alt="Slack" />
                   <span className="font-semibold text-zinc-700 dark:text-zinc-300 text-sm">Workplace</span>
                </div>
                <div className="space-y-1">
                   <div className="px-3 py-1.5 bg-zinc-200 dark:bg-white/5 rounded-md text-zinc-900 dark:text-zinc-300 text-sm font-medium">Threads</div>
                   <div className="px-3 py-1.5 text-zinc-500 text-sm hover:text-zinc-900 dark:hover:text-zinc-300 cursor-pointer">All DMs</div>
                   <div className="px-3 py-1.5 text-zinc-500 text-sm hover:text-zinc-900 dark:hover:text-zinc-300 cursor-pointer">Mentions</div>
                </div>
             </div>

             {/* Chat Area */}
             <div className="flex-1 flex flex-col bg-white dark:bg-[#111111] relative">
                {/* Messages */}
                <div className="flex-1 p-8 space-y-8 min-h-[300px] md:min-h-[400px]">
                    {/* User Message */}
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={`user-${scenarioIndex}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10, transition: { duration: 0.2 } }}
                        className="flex gap-4 group"
                      >
                        <div className={cn("w-9 h-9 rounded flex items-center justify-center text-white font-bold text-xs shrink-0", currentScenario.userColor)}>
                          {currentScenario.initials}
                        </div>
                        <div className="space-y-1">
                           <div className="flex items-baseline gap-2">
                              <span className="text-zinc-900 dark:text-zinc-200 font-bold text-sm">{currentScenario.user}</span>
                               <span className="text-zinc-500 dark:text-zinc-600 text-[11px] font-medium">Just now</span>
                           </div>
                           <p className="text-zinc-800 dark:text-zinc-300 text-sm leading-relaxed">
                              <span className="bg-brand-primary/10 text-brand-primary px-1 rounded-sm mr-1">@Dream</span>
                              {currentScenario.query.replace("@Dream ", "")}
                           </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Dream Response */}
                    <AnimatePresence mode="wait">
                       {step >= 1 && (
                          <motion.div 
                            key={`ai-${scenarioIndex}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, transition: { duration: 0.2 } }}
                            className="flex gap-4"
                          >
                             <img src="/logo.png" className="w-9 h-9 rounded-lg shrink-0" />
                             <div className="space-y-2 max-w-2xl w-full">
                                <div className="flex items-baseline gap-2">
                                   <span className="text-zinc-900 dark:text-white font-bold text-sm">Dream</span>
                                   <AppTag />
                                </div>
                                
                                {step >= 1 && (
                                   <motion.div 
                                      initial={{ opacity: 0 }} 
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      className="text-zinc-800 dark:text-zinc-300 text-sm leading-relaxed"
                                   >
                                      {currentScenario.response}
                                   </motion.div>
                                )}
                             </div>
                          </motion.div>
                       )}
                    </AnimatePresence>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-[#111]">
                   <div className="rounded border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#1a1a1a] h-10 flex items-center px-3 gap-2">
                      <div className="w-4 h-4 rounded-full border border-zinc-400 dark:border-zinc-600" />
                      <span className="text-zinc-400 dark:text-zinc-500 text-sm">Message #general...</span>
                   </div>
                </div>
             </div>
          </div>
      </div>
    </motion.div>
  );
};
