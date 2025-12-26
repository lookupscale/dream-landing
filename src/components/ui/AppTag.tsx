import { cn } from "../../lib/utils";

export const AppTag = ({ className }: { className?: string }) => (
  <span className={cn("px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-sm text-[9px] text-zinc-500 dark:text-zinc-500 font-bold uppercase tracking-widest", className)}>
    APP
  </span>
);
