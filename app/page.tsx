import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatementTicker } from "@/components/statement-ticker";
import { ClaudeArchitecture } from "@/components/claude-architecture";
import { InteractiveSimulator } from "@/components/interactive-simulator";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Expertise } from "@/components/expertise";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { Pricing } from "@/components/pricing";
import { Security } from "@/components/security";
import { Faq } from "@/components/faq";
import { ContactCta } from "@/components/contact-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Page Content Flow */}
      <main id="main-content">
        {/* 1. Hero with Architectural System Visual */}
        <Hero />

        {/* 2. Statement / Trust Ticker */}
        <StatementTicker />

        {/* 3. Anthropic Claude Architecture & Startup Credit Alignment */}
        <ClaudeArchitecture />

        {/* 4. Interactive Claude Agent Execution Trace */}
        <InteractiveSimulator />

        {/* 5. Core Services */}
        <Services />

        {/* 6. Selected Work / Projects */}
        <Projects />

        {/* 7. About the Studio */}
        <About />

        {/* 8. Modern Technology Stack */}
        <Expertise />

        {/* 9. Working Process Methodology */}
        <Process />

        {/* 10. Why AlgoraX */}
        <WhyUs />

        {/* 11. Startup & Enterprise Pricing Models */}
        <Pricing />

        {/* 12. Enterprise Security & Sovereignty */}
        <Security />

        {/* 13. Frequently Asked Questions */}
        <Faq />

        {/* 14. Contact / Direct Inquiry CTA */}
        <ContactCta />
      </main>

      {/* 15. Minimal Footer */}
      <Footer />
    </div>
  );
}
