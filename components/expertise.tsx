import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";

export function Expertise() {
  const technologies = siteConfig.technologies;

  return (
    <section id="expertise" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Stack & Tooling"
          title="Built with modern technology."
          subtitle="A battle-tested stack spanning cutting-edge AI frameworks, distributed cloud infrastructure, and modern frontend engines."
        />

        {/* Minimalist Monochrome Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative p-4 sm:p-5 rounded-lg bg-[#0A0A0A] border border-[#1E1E1E] transition-all duration-200 hover:border-[#444444] hover:bg-[#111111] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#555555] uppercase group-hover:text-[#888888] transition-colors">
                  {tech.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#222222] group-hover:bg-white transition-colors" />
              </div>

              <div className="mt-4">
                <span className="font-mono text-sm sm:text-base font-semibold text-white tracking-tight">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Guarantee Note */}
        <div className="mt-10 p-5 sm:p-6 rounded-xl bg-[#080808] border border-[#1A1A1A] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-sm font-medium text-white">Zero Vendor Lock-In Philosophy</span>
          </div>
          <p className="text-xs font-mono text-[#888888] sm:text-right max-w-md">
            Open architectures, modular microservices, clean decoupling, and self-hosted or cloud-native options.
          </p>
        </div>
      </div>
    </section>
  );
}
