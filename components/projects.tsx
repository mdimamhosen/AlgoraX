import { siteConfig, type ProjectItem } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

function ProjectVisual({ id }: { id: string }) {
  if (id === "clientserve-ai") {
    return (
      <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] bg-[#000000] rounded-t-lg border-b border-[#222222] p-4 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        {/* Mock App Window Header */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1A1A1A]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#333333]" />
            <span className="w-2 h-2 rounded-full bg-[#333333]" />
            <span className="text-[10px] font-mono text-[#777777]">app.clientserve.internal</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111111] text-[#A0A0A0] border border-[#222222]">
            STREAMING LLM
          </span>
        </div>

        {/* Mock Chat / Vector Retrieval Stream */}
        <div className="relative z-10 space-y-2.5 my-auto py-2">
          <div className="p-2.5 rounded bg-[#0A0A0A] border border-[#222222] max-w-[85%]">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#666666] mb-1">
              <span>QUERY_EMBEDDING</span>
              <span>cos_sim: 0.942</span>
            </div>
            <p className="text-xs text-[#CCCCCC] font-mono">
              &gt; Context retrieved from 14 documents in 42ms. Generating synthesized action plan...
            </p>
          </div>

          <div className="ml-auto p-2.5 rounded bg-[#141414] border border-[#2E2E2E] max-w-[80%]">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-white mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-subtle-pulse" />
              <span>AGENT_RESPONSE</span>
            </div>
            <p className="text-xs text-white">
              Scheduled auto-dispatch webhook and synced CRM state.
            </p>
          </div>
        </div>

        {/* Status footer bar */}
        <div className="relative z-10 pt-2 border-t border-[#1A1A1A] flex items-center justify-between text-[10px] font-mono text-[#666666]">
          <span>TOKENS: 4,120</span>
          <span className="text-[#A0A0A0]">CONFIDENCE: 99.8%</span>
        </div>
      </div>
    );
  }

  if (id === "cohost") {
    return (
      <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] bg-[#000000] rounded-t-lg border-b border-[#222222] p-4 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 tech-dots opacity-25" />

        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1A1A1A]">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-[#777777]">cohost.sync // v1.8</span>
          </div>
          <span className="text-[10px] font-mono text-white flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            LIVE WEBSOCKET
          </span>
        </div>

        {/* Collaborative Node Matrix Mockup */}
        <div className="relative z-10 grid grid-cols-3 gap-1.5 sm:gap-2 my-auto py-2">
          <div className="p-2 rounded bg-[#0A0A0A] border border-[#222222]">
            <span className="text-[9px] font-mono text-[#666666]">US-EAST</span>
            <div className="text-xs sm:text-sm font-mono font-bold text-white mt-1">14ms</div>
            <div className="w-full h-1 bg-[#1A1A1A] rounded-full mt-2 overflow-hidden">
              <div className="w-4/5 h-full bg-white" />
            </div>
          </div>
          <div className="p-2 rounded bg-[#0A0A0A] border border-[#222222]">
            <span className="text-[9px] font-mono text-[#666666]">EU-CENTRAL</span>
            <div className="text-xs sm:text-sm font-mono font-bold text-white mt-1">28ms</div>
            <div className="w-full h-1 bg-[#1A1A1A] rounded-full mt-2 overflow-hidden">
              <div className="w-3/5 h-full bg-white" />
            </div>
          </div>
          <div className="p-2 rounded bg-[#0A0A0A] border border-[#222222]">
            <span className="text-[9px] font-mono text-[#666666]">AP-NORTHEAST</span>
            <div className="text-xs sm:text-sm font-mono font-bold text-white mt-1">45ms</div>
            <div className="w-full h-1 bg-[#1A1A1A] rounded-full mt-2 overflow-hidden">
              <div className="w-2/3 h-full bg-white" />
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-2 border-t border-[#1A1A1A] flex items-center justify-between text-[10px] font-mono text-[#666666]">
          <span>CONCURRENT_PEERS: 12,480</span>
          <span className="text-white">REPLICATION: 0 LAG</span>
        </div>
      </div>
    );
  }

  if (id === "ai-automation-platform") {
    return (
      <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] bg-[#000000] rounded-t-lg border-b border-[#222222] p-4 flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 tech-grid-dense opacity-20" />

        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1A1A1A]">
          <span className="text-[10px] font-mono text-[#777777]">DAG_PIPELINE // RUN #8904</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141414] text-white border border-[#2A2A2A]">
            STATE: EVALUATING
          </span>
        </div>

        {/* Workflow Diagram */}
        <div className="relative z-10 flex items-center justify-between gap-1 my-auto py-2">
          <div className="p-2 rounded bg-[#0A0A0A] border border-[#262626] text-center flex-1">
            <span className="text-[9px] font-mono text-[#666666] block">STEP 01</span>
            <span className="text-[11px] font-mono font-medium text-white">Trigger</span>
          </div>
          <span className="text-[#444444] font-mono text-xs">→</span>
          <div className="p-2 rounded bg-[#0E0E0E] border border-white text-center flex-1">
            <span className="text-[9px] font-mono text-[#888888] block">STEP 02</span>
            <span className="text-[11px] font-mono font-bold text-white">AI Reason</span>
          </div>
          <span className="text-[#444444] font-mono text-xs">→</span>
          <div className="p-2 rounded bg-[#0A0A0A] border border-[#262626] text-center flex-1">
            <span className="text-[9px] font-mono text-[#666666] block">STEP 03</span>
            <span className="text-[11px] font-mono font-medium text-[#A0A0A0]">Dispatch</span>
          </div>
        </div>

        <div className="relative z-10 pt-2 border-t border-[#1A1A1A] flex items-center justify-between text-[10px] font-mono text-[#666666]">
          <span>EXECUTION_TIME: 142ms</span>
          <span className="text-[#A0A0A0]">FALLBACK: AUTO-RETRY</span>
        </div>
      </div>
    );
  }

  // Custom Software Systems
  return (
    <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] bg-[#000000] rounded-t-lg border-b border-[#222222] p-4 flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1A1A1A]">
        <span className="text-[10px] font-mono text-[#777777]">ENTERPRISE_SYSTEMS // SECURE_GATE</span>
        <span className="text-[10px] font-mono text-[#A0A0A0]">RBAC: TIER_1</span>
      </div>

      {/* High-density grid mockup */}
      <div className="relative z-10 my-auto py-2 space-y-1.5 font-mono text-[10px]">
        <div className="flex items-center justify-between p-1.5 rounded bg-[#0A0A0A] border border-[#1E1E1E]">
          <span className="text-[#888888]">DATA_PIPELINE_ORCHESTRATOR</span>
          <span className="text-white">ACTIVE</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#0A0A0A] border border-[#1E1E1E]">
          <span className="text-[#888888]">POSTGRES_REPLICA_POOL</span>
          <span className="text-white">HEALTHY</span>
        </div>
        <div className="flex items-center justify-between p-1.5 rounded bg-[#0A0A0A] border border-[#1E1E1E]">
          <span className="text-[#888888]">ZERO_TRUST_GATEWAY</span>
          <span className="text-white">ENFORCED</span>
        </div>
      </div>

      <div className="relative z-10 pt-2 border-t border-[#1A1A1A] flex items-center justify-between text-[10px] font-mono text-[#666666]">
        <span>ENCRYPTION: AES-256</span>
        <span className="text-white">AVAILABILITY: 99.99%</span>
      </div>
    </div>
  );
}

export function Projects() {
  const projects = siteConfig.projects;

  return (
    <section id="work" className="py-24 sm:py-32 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Portfolio"
          title="Selected work."
          subtitle="A selection of products, platforms and systems we've designed and engineered."
        />

        {/* 2x2 Grid of Detailed Project Cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-xl bg-[#0A0A0A] border border-[#222222] overflow-hidden transition-all duration-300 hover:border-[#555555] hover:bg-[#0C0C0C] hover:-translate-y-1"
            >
              {/* Visual Area */}
              <ProjectVisual id={project.id} />

              {/* Content Area */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category and Index */}
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="text-[#A0A0A0] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[#666666]">
                      /{project.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-[#A0A0A0]">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-[#888888]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CCCCCC] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer tags and View Project Link */}
                <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
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
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white group-hover:text-white transition-colors group-hover:translate-x-1"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
