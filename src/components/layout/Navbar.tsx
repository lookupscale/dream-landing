import { cn } from "../../lib/utils";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "bg-white/80 dark:bg-black/50 backdrop-blur-md border-b border-zinc-200 dark:border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="DREAM Logo" className="w-8 h-8 rounded-lg" />
          <span className="font-black text-xl tracking-tighter uppercase text-zinc-900 dark:text-white">DREAM</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-5 py-2.5 bg-brand-primary text-white text-xs font-semibold rounded-full hover:bg-brand-primary/90 transition-all shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 active:translate-y-0">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};
