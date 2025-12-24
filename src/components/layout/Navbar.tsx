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
          <span className="font-helvetica font-black text-xl tracking-tighter uppercase text-zinc-900 dark:text-white">DREAM</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 bg-brand-primary text-white text-xs font-semibold rounded-full hover:bg-red-600 transition-all shadow-[0_0_20px_-5px_rgba(219,51,4,0.3)]">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
};
