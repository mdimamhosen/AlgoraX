import { SectionHeading } from "./section-heading";
import { MapPin, ArrowUpRight, Monitor, Smartphone, Cpu, ShieldCheck } from "lucide-react";

const districts = [
  {
    name: "Barishal District",
    role: "Central Technology & AI Hub",
    description: "Enterprise SaaS, modern Next.js web applications, and AI integrations for regional leaders.",
  },
  {
    name: "Patuakhali & Kuakata",
    role: "Tourism, Maritime & Enterprise Portals",
    description: "Real-time booking platforms, coastal commerce systems, and progressive web apps.",
  },
  {
    name: "Bhola District",
    role: "Industrial & Resource Tech",
    description: "Supply chain management portals, inventory dashboards, and high-concurrency systems.",
  },
  {
    name: "Pirojpur District",
    role: "AgriTech & Business Solutions",
    description: "B2B trading portals, automated invoicing, and high-performance digital tools.",
  },
  {
    name: "Barguna District",
    role: "Coastal Logistics & Fintech",
    description: "Secure payment gateways, localized microservices, and mobile client applications.",
  },
  {
    name: "Jhalokati District",
    role: "Commercial & Retail Digitization",
    description: "Omnichannel e-commerce, custom ERP architectures, and cloud workflow automation.",
  },
];

const capabilities = [
  {
    icon: Monitor,
    title: "High-Performance Web Development",
    detail: "Next.js 16, React, and TypeScript with sub-second page loads, mobile responsiveness, and SEO architecture.",
  },
  {
    icon: Smartphone,
    title: "iOS & Android Mobile App Development",
    detail: "Cross-platform and native mobile applications with offline sync, push notifications, and sleek UX.",
  },
  {
    icon: Cpu,
    title: "AI Systems & Intelligent Automation",
    detail: "Autonomous LLM applications, intelligent multi-agent orchestration, and real-time RAG document retrieval engines.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Local & Global Engineering",
    detail: "Direct founder access, zero middlemen, and transparent sprint cycles designed to outcompete standard IT agencies.",
  },
];

export function RegionalPresence() {
  return (
    <section
      id="regional-presence"
      className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414] bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="Regional Hub • Barishal Division"
            title="The #1 Web & App Development Studio in Barishal Division."
            subtitle="Headquartered in Barishal with global engineering standards. We deliver elite digital products, custom mobile apps, and AI systems for ambitious businesses across Barishal Division and worldwide."
          />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-[#222222] bg-[#0A0A0A] shrink-0 self-start lg:self-auto max-w-full">
            <MapPin className="w-4 h-4 text-white shrink-0" />
            <span className="text-xs font-mono text-[#A0A0A0] truncate sm:whitespace-normal">
              Barishal Division &bull; Serving 6 Districts &amp; Global Markets
            </span>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="p-5 sm:p-6 rounded-xl bg-[#0A0A0A] border border-[#222222] hover:border-[#444444] transition-all"
              >
                <div className="w-8 h-8 rounded bg-[#141414] border border-[#262626] flex items-center justify-center text-white mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">{cap.title}</h3>
                <p className="mt-2 text-xs text-[#A0A0A0] leading-relaxed">{cap.detail}</p>
              </div>
            );
          })}
        </div>

        {/* District Coverage Grid */}
        <div className="rounded-xl border border-[#222222] bg-[#0A0A0A] p-5 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#1A1A1A] gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Comprehensive Coverage Across All 6 Districts of Barishal Division
              </h3>
              <p className="text-xs text-[#888888] font-mono mt-1">
                Regional accessibility, on-site collaboration, and 24/7 technical support for Barishal Division businesses.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:underline shrink-0"
            >
              <span>Consult with our Barishal Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {districts.map((district) => (
              <div
                key={district.name}
                className="p-4 rounded-lg bg-[#0F0F0F] border border-[#1A1A1A] hover:border-[#333333] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white">{district.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161616] text-[#A0A0A0] border border-[#262626]">
                    Active
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#888888] block mt-1">
                  {district.role}
                </span>
                <p className="text-xs text-[#AAAAAA] mt-2 leading-relaxed">
                  {district.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
