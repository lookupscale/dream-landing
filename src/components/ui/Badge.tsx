import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

export const Badge = ({ children, icon: Icon, className }: { children: ReactNode; icon?: any; className?: string }) => (
  <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.08em] uppercase mb-6 ring-1 ring-inset", className)}>
    {Icon && <Icon className="w-3 h-3 stroke-[2.5]" />}
    <span>{children}</span>
  </div>
);
