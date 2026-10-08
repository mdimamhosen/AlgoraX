"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function ContactCta() {
  const { cta, social } = siteConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(cta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative scroll-mt-20 border-t border-[#141414]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#080808] border border-[#222222] p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#222222] bg-[#0F0F0F] mb-6">
              <span className="w-2 h-2 rounded-full bg-white animate-subtle-pulse" />
              <span className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">
                {cta.sla}
              </span>
            </div>

            {/* High-impact typography */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              {cta.headingLine1}
              <br />
              <span className="text-[#A0A0A0]">{cta.headingLine2}</span>
            </h2>

            {/* Supporting text */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#888888] max-w-2xl leading-relaxed">
              {cta.supportingText}
            </p>

            {/* Main Action Buttons */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${cta.email}?subject=Project%20Inquiry%20via%20AlgoraX`}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-md bg-white text-black font-semibold text-sm transition-all duration-200 hover:bg-[#E5E5E5] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] active:scale-[0.98]"
              >
                <span>{cta.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-md bg-[#111111] text-white font-mono text-xs border border-[#222222] transition-all duration-200 hover:border-[#444444] hover:bg-[#161616] active:scale-[0.98] cursor-pointer"
                aria-label="Copy direct email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Copied {cta.email}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#888888]" />
                    <span>{cta.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Channels & Social Links */}
            <div className="mt-14 pt-8 border-t border-[#1C1C1C] w-full flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#666666]">
                <Mail className="w-3.5 h-3.5" />
                <span>DIRECT REACH:</span>
                <a
                  href={`mailto:${cta.email}`}
                  className="text-white hover:underline transition-colors"
                >
                  {cta.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-[#666666] hover:text-white hover:bg-[#141414] border border-transparent hover:border-[#222222] transition-all"
                  aria-label="AlgoraX GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-[#666666] hover:text-white hover:bg-[#141414] border border-transparent hover:border-[#222222] transition-all"
                  aria-label="AlgoraX LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-[#666666] hover:text-white hover:bg-[#141414] border border-transparent hover:border-[#222222] transition-all"
                  aria-label="AlgoraX X / Twitter"
                >
                  <XIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
