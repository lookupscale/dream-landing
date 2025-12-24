import { Shield } from "lucide-react";
import { SectionHeader } from "../../ui";
import { SECURITY_FEATURES } from "../../../constants/landing-data";

export const Security = () => {
  return (
    <section className="py-32 bg-white dark:bg-black border-none relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          centered
          badge="Security First"
          badgeIcon={Shield}
          badgeClassName="bg-green-500/10 text-green-500"
          title={<>Everything runs on <span className="text-zinc-400 dark:text-zinc-600">your device.</span></>}
          description="Dream executes all browser actions locally. Your credentials never leave your machine. No cloud servers, no data harvesting—just your browser, under your control."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {SECURITY_FEATURES.map((feature, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
