export const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="DREAM Logo" className="w-8 h-8 rounded-lg" />
          <span className="font-helvetica font-black text-2xl tracking-tighter text-zinc-900 dark:text-white uppercase">DREAM</span>
        </div>
        
        <div className="flex items-center gap-3">
             <span className="font-helvetica font-medium text-zinc-400 dark:text-zinc-500 text-sm">Backed by</span>
             <img src="/yc-logo-black.svg" alt="Y Combinator" className="h-5 dark:hidden opacity-80" />
             <img src="/yc-logo-white.svg" alt="Y Combinator" className="h-5 hidden dark:block opacity-80" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-zinc-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-500">
        <p>© 2025 Dream</p>
        <p>All Systems Operational.</p>
      </div>
    </footer>
  );
};
