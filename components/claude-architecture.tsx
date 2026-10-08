import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { Zap, Sparkles, ArrowRight } from "lucide-react";

export function ClaudeArchitecture() {
  const capabilities = siteConfig.claudeCapabilities;

  return (
    <section
      id="claude-architecture"
      className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="Claude for Startups Architecture"
            title="Engineered on Anthropic Claude 3.5."
            subtitle="We build high-impact applications powered by Claude 3.5 Sonnet, combining state-of-the-art reasoning, deep prompt caching, and 200K context windows for unmatched leverage."
          />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#222222] bg-[#0A0A0A] shrink-0 self-start lg:self-auto">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-xs font-mono text-[#A0A0A0]">
              Optimized for Claude Startup Credits
            </span>
          </div>
        </div>

        {/* 4 Core Claude Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="group p-7 sm:p-8 rounded-xl bg-[#0A0A0A] border border-[#222222] hover:border-[#555555] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#141414] text-white border border-[#262626]">
                    {cap.badge}
                  </span>
                  <span className="font-mono text-sm font-bold text-white">
                    {cap.metrics}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#A0A0A0] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#141414] flex items-center justify-between text-xs font-mono text-[#666666]">
                <span>BENCHMARK: SPEC-VALIDATED</span>
                <span className="group-hover:text-white transition-colors">ANTHROPIC RUNTIME</span>
              </div>
            </div>
          ))}
        </div>

        {/* System Architecture Callout: Prompt Caching Economics */}
        <div className="mt-10 p-6 sm:p-8 rounded-xl bg-[#070707] border border-[#222222] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-white">
              <Zap className="w-4 h-4 text-white" />
              <span>THE CLAUDE CACHING REVOLUTION</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Up to 90% API Cost Reduction via Prompt Caching
            </h4>
            <p className="text-sm text-[#888888]">
              By caching entire API documentation schemas, code repositories, and system instructions in Claude&apos;s memory, your startup burn rate stays exceptionally low while response speeds reach sub-300ms.
            </p>
          </div>

          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black text-xs font-mono font-semibold hover:bg-[#EAEAEA] transition-colors shrink-0"
          >
            <span>Explore Startup Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
