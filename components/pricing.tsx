import { siteConfig, type PricingTier } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { Check, ArrowRight, Sparkles } from "lucide-react";

export function Pricing() {
  const tiers = siteConfig.pricingTiers;

  return (
    <section id="pricing" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Engagement Models"
          title="Predictable plans for ambitious startups."
          subtitle="Transparent, sprint-based engineering and dedicated capacity. Direct founder-to-engineer collaboration with zero agency bloat."
          align="center"
          className="mx-auto"
        />

        {/* Pricing Tiers Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier: PricingTier) => {
            const isPopular = tier.popular;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between rounded-xl bg-[#0A0A0A] border transition-all duration-300 p-8 ${
                  isPopular
                    ? "border-white shadow-[0_0_40px_rgba(255,255,255,0.06)] bg-[#0C0C0C] lg:-translate-y-2"
                    : "border-[#222222] hover:border-[#444444]"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-black font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 fill-black text-black" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  {/* Tier Title and Badge */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {tier.name}
                    </h3>
                    {!isPopular && tier.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141414] text-[#A0A0A0] border border-[#222222]">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-xs font-mono text-[#777777]">
                      /{tier.billing}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-[#A0A0A0] leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-8 pt-6 border-t border-[#1C1C1C] space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#666666] block">
                      Included Deliverables
                    </span>
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-[#CCCCCC]">
                        <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier CTA Button */}
                <div className="mt-8 pt-6 border-t border-[#1C1C1C]">
                  <a
                    href={`mailto:hello@algorax.com?subject=${encodeURIComponent(
                      `Inquiry regarding ${tier.name}`
                    )}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-xs font-mono font-semibold transition-all ${
                      isPopular
                        ? "bg-white text-black hover:bg-[#E5E5E5] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        : "bg-[#111111] text-white border border-[#262626] hover:bg-white hover:text-black hover:border-white"
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Claude Startup Credits */}
        <div className="mt-12 text-center text-xs font-mono text-[#666666]">
          Have Anthropic Claude startup credits or AWS Activate credits? We integrate directly with your organization&apos;s API accounts so credits apply automatically.
        </div>
      </div>
    </section>
  );
}
