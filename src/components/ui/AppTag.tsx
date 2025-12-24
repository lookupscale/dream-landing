import { cn } from "../../lib/utils";

export const AppTag = ({ className }: { className?: string }) => (
  <span className={cn("px-1.5 py-0.5 bg-zinc-100 dark:bg-white/10 rounded text-[10px] text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider", className)}>
    APP
  </span>
);
