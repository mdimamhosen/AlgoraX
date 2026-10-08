import { siteConfig } from "@/lib/site-config";
import { HeroVisual } from "./hero-visual";
import { ArrowRight, ArrowDown } from "lucide-react";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background Architectural Subtle Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability Badge */}
        <div className="flex items-center justify-start mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#222222] bg-[#0A0A0A]/90 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A0A0A0]">
              {hero.badge}
            </span>
          </div>
        </div>

        {/* Large Typographic Headline */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.08] sm:leading-[1.06]">
            <span>{hero.headingLine1.split("intelligent")[0]}</span>
            <span className="font-serif italic font-normal tracking-normal text-white underline decoration-[#333333] underline-offset-8">
              intelligent
            </span>
            <br />
            <span className="text-white">{hero.headingLine2}</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed font-normal">
            {hero.supportingText}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-white text-black font-semibold text-sm transition-all duration-200 hover:bg-[#EAEAEA] hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] active:scale-[0.98]"
            >
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#0A0A0A] text-white font-medium text-sm border border-[#222222] transition-all duration-200 hover:border-[#444444] hover:bg-[#111111] active:scale-[0.98]"
            >
              <span>{hero.secondaryCta}</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#666666] group-hover:text-white transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Abstract Technical Visual */}
        <div className="mt-14 sm:mt-20">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
