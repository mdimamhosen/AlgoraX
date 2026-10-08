import { SectionHeading } from "./section-heading";
import { ArrowUpRight, CheckCircle2, TrendingUp, Zap, Clock, ShieldCheck } from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  primaryMetric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "clientserve-ai",
    number: "01",
    title: "ClientServe AI Platform",
    category: "AI SaaS & Semantic Intelligence",
    primaryMetric: "99.98%",
    metricLabel: "Production SLA Uptime",
    challenge:
      "Enterprise support teams were inundated by high ticket volume and slow semantic retrieval across 1M+ internal product manuals and database entries.",
    solution:
      "Engineered an autonomous multi-agent triage architecture with hybrid vector embeddings, sub-150ms semantic search, and human-in-the-loop validation.",
    results: [
      "Sub-150ms semantic search over 1M+ indexed documents",
      "Autonomous triage resolution for 68% of standard incoming queries",
      "Zero-latency multi-channel synchronization across web and mobile clients",
    ],
    techStack: ["Next.js", "NestJS", "PostgreSQL", "pgvector", "TypeScript"],
  },
  {
    id: "cohost-workspace",
    number: "02",
    title: "CoHost Real-Time Collaboration",
    category: "Distributed Concurrency & WebSockets",
    primaryMetric: "12,480",
    metricLabel: "Concurrent Live Peers",
    challenge:
      "Distributed global teams suffered from high state latency, desynchronized editing conflicts, and unreliable websocket reconnection drops.",
    solution:
      "Architected a multi-region distributed cluster using Socket.IO, Redis Pub/Sub backplanes, and optimistic client-side state reconciliation.",
    results: [
      "Instant multi-region data replication across US, EU, and AP nodes",
      "Sub-40ms regional packet transmission and automatic failover",
      "Zero data loss during unexpected client network disconnects",
    ],
    techStack: ["Next.js 16", "Socket.IO", "Redis", "Docker", "Node.js"],
  },
  {
    id: "workflow-dag",
    number: "03",
    title: "Enterprise Workflow DAG Orchestrator",
    category: "Automation & Event Mesh",
    primaryMetric: "80%",
    metricLabel: "Operational Time Saved",
    challenge:
      "Manual multi-system data reconciliation caused severe operational delays, frequent clerical errors, and engineering maintenance overhead.",
    solution:
      "Built a deterministic directed acyclic graph (DAG) pipeline orchestrator with strict JSON schema validation and automated exponential backoff retries.",
    results: [
      "Completely eliminated repetitive manual data entry bottlenecks",
      "Self-healing error recovery with deterministic schema enforcement",
      "Comprehensive telemetry tracking with audit-logged trace history",
    ],
    techStack: ["TypeScript", "Next.js", "Event Queues", "REST APIs", "AWS"],
  },
];

const engineeringGuarantees = [
  {
    icon: Zap,
    title: "<100ms TTFB",
    desc: "Optimized serverless Edge delivery & sub-second page loads.",
  },
  {
    icon: TrendingUp,
    title: "100% Type-Safe",
    desc: "Strict TypeScript end-to-end with zero any workarounds.",
  },
  {
    icon: Clock,
    title: "99.9%+ Availability",
    desc: "Architected for high concurrency and zero-downtime blue/green releases.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Vendor Lock-In",
    desc: "Clean modular architectures with complete source code ownership.",
  },
];

export function ClientImpact() {
  return (
    <section
      id="impact"
      className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414] bg-[#030303]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Engineering Impact"
          title="Measurable impact. Real production results."
          subtitle="A detailed look at how AlgoraX software engineering, autonomous workflows, and modern architectures solve complex challenges and compound business leverage."
        />

        {/* 3 Detailed Case Studies */}
        <div className="mt-14 sm:mt-16 space-y-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group rounded-xl bg-[#090909] border border-[#222222] p-6 sm:p-10 transition-all duration-300 hover:border-[#444444] hover:bg-[#0C0C0C]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Metric Callout */}
                <div className="lg:col-span-4 p-6 rounded-lg bg-[#050505] border border-[#1A1A1A] flex flex-col justify-between h-full">
                  <div>
                    <span className="font-mono text-xs text-[#666666]">/{study.number}</span>
                    <div className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tight mt-2">
                      {study.primaryMetric}
                    </div>
                    <span className="text-xs font-mono text-[#A0A0A0] mt-1 block">
                      {study.metricLabel}
                    </span>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#141414]">
                    <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider block mb-2">
                      Architecture Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#111111] text-[10px] font-mono text-[#CCCCCC] border border-[#222222]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Challenge, Solution, Key Results */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#1A1A1A]">
                      <span className="text-xs font-mono text-[#A0A0A0] uppercase tracking-wider">
                        {study.category}
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 text-xs font-mono text-white hover:underline"
                      >
                        <span>Discuss Case</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight mt-4">
                      {study.title}
                    </h3>

                    {/* Challenge & Solution Grid */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3.5 rounded bg-[#060606] border border-[#161616]">
                        <span className="text-[10px] font-mono text-[#888888] uppercase block">
                          The Challenge
                        </span>
                        <p className="text-xs text-[#A0A0A0] mt-1 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="p-3.5 rounded bg-[#060606] border border-[#161616]">
                        <span className="text-[10px] font-mono text-white uppercase block">
                          Engineering Solution
                        </span>
                        <p className="text-xs text-[#CCCCCC] mt-1 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Verified Results */}
                    <div className="mt-6 space-y-2">
                      <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider block">
                        Verified Outcomes
                      </span>
                      {study.results.map((res) => (
                        <div key={res} className="flex items-start gap-2.5 text-xs text-[#CCCCCC]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Standards & SLA Guarantees Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-[#080808] border border-[#222222] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringGuarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-white" />
                  <span className="text-sm font-bold text-white font-mono">{g.title}</span>
                </div>
                <p className="text-xs text-[#888888] leading-relaxed">{g.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
