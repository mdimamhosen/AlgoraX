import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ShieldCheck, Cpu, GitBranch, Zap, FileCode2, Target } from "lucide-react";

const icons = [ShieldCheck, Cpu, GitBranch, Zap, FileCode2, Target];

export function WhyUs() {
  const items = siteConfig.whyUs;

  return (
    <section id="why-us" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our Advantage"
          title="Why AlgoraX?"
          subtitle="We bridge cutting-edge artificial intelligence with disciplined software craftsmanship to eliminate guesswork and compound value."
        />

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            const num = (idx + 1).toString().padStart(2, "0");

            return (
              <div
                key={item.title}
                className="group relative p-7 rounded-xl bg-[#0A0A0A] border border-[#222222] transition-all duration-300 hover:border-[#555555] hover:bg-[#0E0E0E]"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]">
                  <span className="text-xs font-mono text-[#666666] group-hover:text-white transition-colors">
                    [{num}]
                  </span>
                  <div className="w-8 h-8 rounded bg-[#111111] border border-[#222222] flex items-center justify-center text-[#A0A0A0] group-hover:text-white group-hover:border-[#444444] transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#A0A0A0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
