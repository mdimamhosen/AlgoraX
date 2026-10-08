import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatementTicker } from "@/components/statement-ticker";
import { Services } from "@/components/services";
import { RegionalPresence } from "@/components/regional-presence";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { Security } from "@/components/security";
import { Faq } from "@/components/faq";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Fixed Sticky Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* 1. Hero with Technical Architectural Canvas */}
        <Hero />

        {/* 2. Core Capabilities Statement Ticker */}
        <StatementTicker />

        {/* 3. What We Build — Core Services */}
        <Services />

        {/* 4. Regional Hub & Local Authority (Barishal Division & Global Delivery) */}
        <RegionalPresence />

        {/* 5. Selected Work — High-Density Interactive Architecture Mockups */}
        <Projects />

        {/* 6. About the Studio & Core Pillars */}
        <About />

        {/* 7. Technology Stack & Modern Tooling */}
        <Expertise />

        {/* 8. Engineering Lifecycle & Timeline */}
        <Process />

        {/* 9. Why AlgoraX — Core Differentiators */}
        <WhyUs />

        {/* 10. Security & Enterprise Data Governance */}
        <Security />

        {/* 11. Frequently Asked Technical Questions */}
        <Faq />

        {/* 12. Direct Inquiry & Contact Action */}
        <ContactCta />
      </main>

      {/* 13. Minimalist Footer */}
      <Footer />
    </div>
  );
}
