import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ExternalLink, Mail, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";

export function About() {
  const { about, founder, social } = siteConfig;

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

        {/* Founder & Engineering Leadership Showcase */}
        {founder && (
          <div className="mt-16 rounded-xl bg-[#080808] border border-[#222222] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-xs font-mono text-[#888888] uppercase tracking-wider">
                  FOUNDER &amp; CHIEF ARCHITECT
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {founder.name}
              </h3>
              <p className="text-xs font-mono text-[#A0A0A0] flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#666666]" />
                <span>{founder.institution}</span>
              </p>
              <p className="text-xs text-[#888888] max-w-xl leading-relaxed">
                Specialized in multi-agent autonomous systems, full-stack Next.js platforms, mobile apps, and enterprise software engineering.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={founder.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-white text-black font-semibold text-xs font-mono hover:bg-[#EAEAEA] transition-all"
              >
                <span>View Founder Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-[#111111] border border-[#222222] hover:border-white text-[#A0A0A0] hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md bg-[#111111] border border-[#222222] hover:border-white text-[#A0A0A0] hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${founder.email}`}
                className="p-2.5 rounded-md bg-[#111111] border border-[#222222] hover:border-white text-[#A0A0A0] hover:text-white transition-all"
                aria-label="Email Founder"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
