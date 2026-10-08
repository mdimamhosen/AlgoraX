import { siteConfig } from "@/lib/site-config";

export function StatementTicker() {
  const items = siteConfig.tickerItems;

  return (
    <section
      aria-label="Core Capabilities Ticker"
      className="relative w-full border-y border-[#1E1E1E] bg-[#050505] py-4 sm:py-5 overflow-hidden"
    >
      <div className="flex select-none">
        {/* Continuous ticker duplicated for seamless loop */}
        <div className="animate-ticker flex items-center shrink-0">
          {[...items, ...items, ...items].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center">
              <span className="text-xs sm:text-sm font-mono tracking-[0.2em] font-medium text-[#A0A0A0] uppercase px-6 whitespace-nowrap hover:text-white transition-colors duration-150">
                {item}
              </span>
              <span className="text-[#333333] text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
