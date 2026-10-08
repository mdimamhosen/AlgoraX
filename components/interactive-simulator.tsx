"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "./section-heading";
import { Play, RotateCcw, Check, Sparkles, Terminal } from "lucide-react";

export function InteractiveSimulator() {
  const scenarios = siteConfig.simulatorScenarios;
  const [activeId, setActiveId] = useState<string>(scenarios[0].id);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const activeScenario = scenarios.find((s) => s.id === activeId) || scenarios[0];

  const handleSimulate = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 600);
  };

  return (
    <section id="simulator" className="py-24 sm:py-32 relative scroll-mt-20 border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <SectionHeading
            tag="Interactive Telemetry"
            title="Claude Agent Execution Trace."
            subtitle="Explore how AlgoraX orchestrates Anthropic Claude models with deterministic tools, 200K token caching, and structured schema execution."
          />

          {/* Action to re-trigger simulation */}
          <button
            onClick={handleSimulate}
            disabled={isRunning}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#111111] border border-[#222222] hover:border-[#444444] text-xs font-mono text-white transition-all self-start lg:self-auto cursor-pointer"
          >
            {isRunning ? (
              <>
                <RotateCcw className="w-3.5 h-3.5 animate-spin text-white" />
                <span>Executing Prompt Stream...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-white" />
                <span>Run Agent Trace</span>
              </>
            )}
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 pb-4">
          {scenarios.map((scenario) => {
            const isActive = scenario.id === activeScenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => setActiveId(scenario.id)}
                type="button"
                className={`px-4 py-2 rounded-md font-mono text-xs transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-md"
                    : "bg-[#0A0A0A] text-[#888888] border border-[#222222] hover:text-white hover:border-[#333333]"
                }`}
              >
                {scenario.title}
              </button>
            );
          })}
        </div>

        {/* Simulator Console Container */}
        <div className="mt-4 rounded-xl bg-[#070707] border border-[#222222] overflow-hidden shadow-2xl">
          {/* Console Top Header */}
          <div className="px-5 py-3.5 bg-[#0C0C0C] border-b border-[#1A1A1A] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#262626] border border-[#3A3A3A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#262626] border border-[#3A3A3A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#262626] border border-[#3A3A3A]" />
              <span className="text-[#A0A0A0] ml-2">model: {activeScenario.model}</span>
            </div>

            {/* Telemetry Metrics */}
            <div className="flex items-center gap-4 text-[11px] text-[#777777]">
              <span>
                CONTEXT: <strong className="text-white">{activeScenario.tokenContext}</strong>
              </span>
              <span>
                PROMPT CACHE:{" "}
                <strong className="text-white">{activeScenario.cacheHitRatio}</strong>
              </span>
              <span>
                LATENCY: <strong className="text-white">{activeScenario.latency}</strong>
              </span>
            </div>
          </div>

          {/* User Prompt Input Display */}
          <div className="p-5 border-b border-[#1A1A1A] bg-[#090909]">
            <div className="text-[10px] font-mono text-[#666666] uppercase mb-1.5 flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-[#888888]" />
              <span>Prompt Instruction</span>
            </div>
            <p className="font-mono text-xs text-[#E0E0E0] leading-relaxed">
              &gt; {activeScenario.prompt}
            </p>
          </div>

          {/* Reasoning & Structured Output Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]">
            {/* Left: Chain of Thought Reasoning */}
            <div className="lg:col-span-7 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#888888] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Claude Reasoning Chain</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141414] text-[#A0A0A0] border border-[#222222]">
                  STREAM COMPLETE
                </span>
              </div>

              <div className="space-y-2.5 pt-2 font-mono text-xs text-[#CCCCCC]">
                {activeScenario.reasoningSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded bg-[#0A0A0A] border border-[#1C1C1C] flex items-start gap-2.5"
                  >
                    <Check className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Validated JSON Output */}
            <div className="lg:col-span-5 p-6 bg-[#050505] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#888888]">
                    Structured JSON Response
                  </span>
                  <span className="text-[10px] font-mono text-[#666666]">
                    SCHEMA_VALID: TRUE
                  </span>
                </div>

                <pre className="p-4 rounded-lg bg-[#000000] border border-[#1A1A1A] font-mono text-xs text-[#A0A0A0] overflow-x-auto leading-relaxed">
                  <code>{activeScenario.outputJson}</code>
                </pre>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1A1A1A] flex items-center justify-between text-[11px] font-mono text-[#666666]">
                <span>Deterministic Validation</span>
                <span className="text-white font-medium">Zero Hallucination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
