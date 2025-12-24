import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

export const Badge = ({ children, icon: Icon, className }: { children: ReactNode; icon?: any; className?: string }) => (
  <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6", className)}>
    {Icon && <Icon className="w-3 h-3" />}
    {children}
  </div>
);
