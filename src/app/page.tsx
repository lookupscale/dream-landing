import { Navbar, Footer } from "@/components/layout";
import { 
  Hero, 
  HowItWorks, 
  BrowserControl, 
  Visibility, 
  Security, 
  Connections 
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-bg-dark text-zinc-900 dark:text-white selection:bg-brand-primary/20 dark:selection:bg-white/20">
      <Navbar />
      <Hero />
      <HowItWorks />
      <BrowserControl />
      <Visibility />
      <Security />
      <Connections />
      <Footer />
    </div>
  );
}
