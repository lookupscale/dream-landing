import type { ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge: ReactNode;
  badgeIcon: any;
  badgeClassName: string;
  title: ReactNode;
  description: ReactNode;
  centered?: boolean;
}

export const SectionHeader = ({ badge, badgeIcon, badgeClassName, title, description, centered = false }: SectionHeaderProps) => (
  <div className={cn("mb-16", centered ? "text-center max-w-3xl mx-auto" : "max-w-xl")}>
    <Badge icon={badgeIcon} className={badgeClassName}>
      {badge}
    </Badge>
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-zinc-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
      {title}
    </h2>
    <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
      {description}
    </p>
  </div>
);
