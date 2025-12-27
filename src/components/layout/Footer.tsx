import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-white/10 bg-light dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="DREAM Logo" className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tighter text-zinc-900 dark:text-white uppercase">DREAM</span>
        </Link>
        
        <div className="flex items-center gap-6">
             <Link href="/pricing" className="text-sm font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Pricing</Link>
             <Link href="/contact" className="text-sm font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</Link>
             {/* <div className="flex items-center gap-3">
                  <span className="font-medium text-zinc-400 dark:text-zinc-500 text-sm">Backed by</span>
                  <img src="/yc-logo-black.svg" alt="Y Combinator" className="h-5 dark:hidden opacity-50 grayscale hover:grayscale-0 transition-all" />
                  <img src="/yc-logo-white.svg" alt="Y Combinator" className="h-5 hidden dark:block opacity-50 grayscale hover:grayscale-0 transition-all" />
             </div> */}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-600">
        <p>© 2025 DREAM</p>
        <div className="flex items-center gap-2">
           <p>All Systems Operational</p>
        </div>
      </div>
    </footer>
  );
};
