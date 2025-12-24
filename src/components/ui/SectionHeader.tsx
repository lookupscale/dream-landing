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
  <div className={cn("mb-16", centered ? "text-center max-w-3xl mx-auto" : "max-w-md")}>
    <Badge icon={badgeIcon} className={badgeClassName}>
      {badge}
    </Badge>
    <h2 className="text-3xl md:text-5xl font-helvetica font-medium text-zinc-900 dark:text-white mb-6 leading-tight">
      {title}
    </h2>
    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
      {description}
    </p>
  </div>
);
