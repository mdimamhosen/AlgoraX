import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ShieldCheck, Lock, EyeOff, FileCheck2 } from "lucide-react";

const icons = [EyeOff, Lock, ShieldCheck, FileCheck2];

export function Security() {
  const pillars = siteConfig.securityPillars;

  return (
    <section id="security" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Security & Sovereignty"
          title="Enterprise AI governance by default."
          subtitle="Every line of code and AI workflow is architected with strict confidentiality, zero data retention, and isolated perimeter boundaries."
        />

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={pillar.title}
                className="p-6 rounded-xl bg-[#0A0A0A] border border-[#222222] hover:border-[#444444] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]">
                    <span className="font-mono text-[10px] text-[#666666]">
                      {pillar.code}
                    </span>
                    <div className="w-7 h-7 rounded bg-[#111111] border border-[#222222] flex items-center justify-center text-white">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#A0A0A0] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[#141414] text-[10px] font-mono text-[#555555]">
                  STATUS: ENFORCED
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
