import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { Check } from "lucide-react";

export function Process() {
  const processSteps = siteConfig.process;

  return (
    <section id="process" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Methodology"
          title="How we work."
          subtitle="A deterministic, phased engineering lifecycle that takes you from ambiguity to scalable production software."
        />

        {/* Timeline container */}
        <div className="mt-14 sm:mt-20">
          {/* Desktop Horizontal Timeline / Mobile Vertical */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {/* Desktop continuous connecting line */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#222222] z-0" />

            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className="relative z-10 flex flex-col justify-between p-6 rounded-xl bg-[#0A0A0A] border border-[#222222] hover:border-[#444444] transition-all duration-200"
              >
                <div>
                  {/* Step Header with Node */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white" />
                      <span className="font-mono text-xs font-bold text-[#A0A0A0]">
                        PHASE {item.step}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-[#666666]">
                      0{index + 1}/04
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-5">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#A0A0A0] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-4 border-t border-[#1A1A1A] space-y-2">
                  <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider block">
                    Deliverables
                  </span>
                  {item.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-center gap-2 text-xs text-[#CCCCCC]">
                      <Check className="w-3 h-3 text-white shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
