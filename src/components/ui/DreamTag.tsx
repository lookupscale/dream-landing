import { cn } from "../../lib/utils";

export const DreamTag = ({ className }: { className?: string }) => (
  <span className={cn("bg-brand-primary/10 text-brand-primary px-1 rounded-sm", className)}>
    @Dream
  </span>
);
