"use client";

import { useState } from "react";
import { siteConfig, type FaqItem } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ChevronDown } from "lucide-react";

export function Faq() {
  const faqs = siteConfig.faqItems;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="FAQ"
          title="Frequently asked questions."
          subtitle="Clear answers about our Claude specialization, startup credits integration, security guarantees, and engineering delivery."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 sm:mt-16 space-y-4">
          {faqs.map((faq: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className="rounded-lg bg-[#0A0A0A] border border-[#222222] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#0D0D0D] transition-colors cursor-pointer"
                >
                  <span className="text-base font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded bg-[#141414] border border-[#262626] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : "text-[#777777]"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#161616] animate-in fade-in duration-150">
                    <p className="text-sm text-[#A0A0A0] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
