import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import {
  Cpu,
  Layers,
  Globe,
  Server,
  Workflow,
  Code2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Layers,
  Globe,
  Server,
  Workflow,
  Code2,
};

export function Services() {
  const services = siteConfig.services;

  return (
    <section id="services" className="py-24 sm:py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Core Services"
          title="What we build."
          subtitle="From intelligent automation to scalable SaaS, we turn complex ideas into reliable digital products."
        />

        {/* Services Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;

            return (
              <div
                key={service.number}
                className="group relative flex flex-col justify-between p-5 sm:p-8 rounded-lg bg-[#0A0A0A] border border-[#222222] transition-all duration-300 hover:border-[#555555] hover:bg-[#0E0E0E] hover:-translate-y-1"
              >
                {/* Top bar with number and icon */}
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#1A1A1A]">
                    <span className="font-mono text-xs font-semibold text-[#666666] tracking-wider group-hover:text-white transition-colors duration-200">
                      /{service.number}
                    </span>
                    <div className="w-9 h-9 rounded-md bg-[#111111] border border-[#222222] flex items-center justify-center text-[#A0A0A0] group-hover:text-white group-hover:border-[#444444] transition-all duration-200">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#A0A0A0]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Footer with tags and action arrow */}
                <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex items-end justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#141414] text-[#888888] border border-[#1E1E1E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="p-1.5 rounded text-[#666666] group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
