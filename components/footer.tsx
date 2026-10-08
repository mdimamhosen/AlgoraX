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
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white" />
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
          <div className="flex items-center gap-6">
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
