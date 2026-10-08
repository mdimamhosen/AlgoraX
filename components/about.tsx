import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7">
            <SectionHeading
              tag="About the Studio"
              title={about.heading}
            />

            <div className="mt-8 space-y-6 text-base sm:text-lg text-[#A0A0A0] leading-relaxed">
              {about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Principles summary list */}
            <div className="mt-10 pt-8 border-t border-[#1C1C1C] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#0A0A0A] border border-[#222222]">
                <span className="font-mono text-xs text-[#666666] block">CORE PILLAR</span>
                <span className="text-sm font-semibold text-white mt-1 block">Production Pragmatism</span>
                <p className="text-xs text-[#888888] mt-1 leading-normal">
                  We don&apos;t build speculative prototypes. We engineer resilient systems designed to run reliably at scale.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0A0A0A] border border-[#222222]">
                <span className="font-mono text-xs text-[#666666] block">CORE PILLAR</span>
                <span className="text-sm font-semibold text-white mt-1 block">Autonomous Architecture</span>
                <p className="text-xs text-[#888888] mt-1 leading-normal">
                  Combining deterministic code with intelligent LLM reasoning for high accuracy workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#0A0A0A] border border-[#222222] hover:border-[#444444] transition-colors flex flex-col justify-between"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-6">
                  <div className="text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#666666] font-mono mt-1">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
