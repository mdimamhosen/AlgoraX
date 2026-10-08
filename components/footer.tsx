import { siteConfig } from "@/lib/site-config";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const { social, email } = siteConfig;

  return (
    <footer className="border-t border-[#1A1A1A] bg-black py-12 sm:py-16 text-xs font-mono text-[#666666]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#141414]">
          {/* Left Brand & Copyright */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded bg-[#0A0A0A] border border-[#222222] p-0.5 flex items-center justify-center">
                <svg viewBox="0 0 64 64" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M32 13L50 31L42.5 38.5L32 28L21.5 38.5L14 31L32 13Z" fill="#FFFFFF"/>
                  <path d="M32 51L14 33L21.5 25.5L32 36L42.5 25.5L50 33L32 51Z" fill="#E5E5E5"/>
                  <circle cx="32" cy="32" r="1.5" fill="#FFFFFF"/>
                </svg>
              </div>
              <span className="font-bold text-sm text-white tracking-tight">AlgoraX</span>
            </div>
            <p className="text-[#555555]">
              &copy; 2026 AlgoraX Studio. All rights reserved.
            </p>
          </div>

          {/* Center Pillars */}
          <div className="flex items-center gap-3 text-[#888888]">
            <span className="hover:text-white transition-colors">AI</span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors">Software</span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors">Automation</span>
          </div>

          {/* Right Links & Back to top */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-6">
            <a
              href={social.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Founder Portfolio
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href="#hero"
              className="p-2 rounded bg-[#0A0A0A] border border-[#222222] text-[#888888] hover:text-white hover:border-[#444444] transition-all ml-2"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#555555]">
          <span>Production-grade engineering &bull; Zero external trackers</span>
          <span className="text-[#888888]">Built with Next.js &amp; TypeScript</span>
        </div>
      </div>
    </footer>
  );
}
