import { siteConfig } from "@/lib/site-config";
import { HeroVisual } from "./hero-visual";
import { Hero3DScene } from "./hero-3d-scene";
import { ArrowRight, ArrowDown, ExternalLink, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";

export function Hero() {
  const { hero, founder, social } = siteConfig;

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

        {/* Hero Split Layout: Left Headline & Founder Info / Right 3D Interactive Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
              <span>{hero.headingLine1.split("intelligent")[0]}</span>
              <span className="font-serif italic font-normal tracking-normal text-white underline decoration-[#333333] underline-offset-8">
                intelligent
              </span>
              <br />
              <span className="text-white">{hero.headingLine2}</span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#A0A0A0] max-w-xl leading-relaxed font-normal">
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

            {/* Founder Spotlight Card */}
            {founder && (
              <div className="mt-10 pt-6 border-t border-[#1C1C1C] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">
                      FOUNDER &amp; LEAD AI ENGINEER
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-white mt-0.5">
                    {founder.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#666666]">
                    {founder.institution}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={founder.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111111] border border-[#222222] hover:border-[#444444] text-xs font-mono text-white transition-all hover:bg-[#161616]"
                    title="Founder Portfolio"
                  >
                    <span>Portfolio</span>
                    <ExternalLink className="w-3 h-3 text-[#888888]" />
                  </a>

                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#111111] border border-[#222222] hover:border-[#444444] text-[#A0A0A0] hover:text-white transition-all"
                    aria-label="Founder GitHub Profile"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#111111] border border-[#222222] hover:border-[#444444] text-[#A0A0A0] hover:text-white transition-all"
                    aria-label="Founder LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`mailto:${founder.email}`}
                    className="p-2 rounded bg-[#111111] border border-[#222222] hover:border-[#444444] text-[#A0A0A0] hover:text-white transition-all"
                    aria-label="Email Founder Directly"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Interactive Three.js 3D Quantum Core */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Hero3DScene />
          </div>
        </div>

        {/* Full 3D Streaming Architecture Flow for system://algorax.core.engine */}
        <div className="mt-16 sm:mt-24">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
