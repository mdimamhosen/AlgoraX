export function HeroVisual() {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-w-5xl mx-auto rounded-xl border border-[#222222] bg-[#0A0A0A]/90 p-4 sm:p-6 overflow-hidden shadow-2xl backdrop-blur-sm">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 tech-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 pointer-events-none" />

      {/* Terminal / System Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#1E1E1E] text-xs font-mono text-[#666666]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#222222] border border-[#333333]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#222222] border border-[#333333]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#222222] border border-[#333333]" />
          </div>
          <span className="text-[#A0A0A0] hidden sm:inline-block">system://algorax.core.engine</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-subtle-pulse" />
            <span className="text-[#A0A0A0]">CLUSTER: ACTIVE</span>
          </span>
          <span className="text-[#666666]">NODE_LATENCY: 1.4ms</span>
          <span className="text-[#A0A0A0] font-bold">v2.4.0</span>
        </div>
      </div>

      {/* Main Abstract Technical Canvas Area */}
      <div className="relative z-10 w-full h-[calc(100%-40px)] flex items-center justify-center py-4">
        <svg
          viewBox="0 0 800 400"
          className="w-full h-full max-h-[360px] overflow-visible select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Abstract AI and distributed software architecture network graph"
          role="img"
        >
          <defs>
            {/* Linear monochrome gradients */}
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#444444" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <pattern id="microGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Micro Grid Overlay inside SVG */}
          <rect width="800" height="400" fill="url(#microGrid)" />

          {/* Structural Axes and Crosshairs */}
          <line x1="60" y1="200" x2="740" y2="200" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="40" x2="400" y2="360" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="4 4" />

          {/* Coordinate Crosshairs */}
          <g stroke="#333333" strokeWidth="1">
            <path d="M 120 70 L 120 90 M 110 80 L 130 80" />
            <path d="M 680 70 L 680 90 M 670 80 L 690 80" />
            <path d="M 120 310 L 120 330 M 110 320 L 130 320" />
            <path d="M 680 310 L 680 330 M 670 320 L 690 320" />
          </g>

          {/* Primary Architecture Curves / Data Busses */}
          <path
            d="M 100 200 C 220 90, 280 310, 400 200 C 520 90, 580 310, 700 200"
            stroke="url(#lineGrad1)"
            strokeWidth="1.5"
            strokeDasharray="6 3"
          />

          <path
            d="M 120 280 C 240 280, 280 120, 400 120 C 520 120, 560 280, 680 280"
            stroke="#262626"
            strokeWidth="1"
          />

          <path
            d="M 120 120 C 240 120, 280 280, 400 280 C 520 280, 560 120, 680 120"
            stroke="#262626"
            strokeWidth="1"
          />

          {/* Secondary Interconnection Lines */}
          <g stroke="#1F1F1F" strokeWidth="1">
            <line x1="220" y1="130" x2="310" y2="250" />
            <line x1="310" y1="250" x2="400" y2="200" />
            <line x1="400" y1="200" x2="490" y2="150" />
            <line x1="490" y1="150" x2="580" y2="270" />
            <line x1="220" y1="270" x2="310" y2="150" />
            <line x1="490" y1="250" x2="580" y2="130" />
          </g>

          {/* Neural / Agent Cluster Layer 1 - Left Gateway */}
          <g transform="translate(180, 180)">
            <rect x="-35" y="-20" width="70" height="40" rx="3" fill="#0D0D0D" stroke="#2B2B2B" strokeWidth="1" />
            <text x="0" y="-3" fill="#A0A0A0" fontSize="9" fontFamily="monospace" textAnchor="middle">INGEST</text>
            <text x="0" y="10" fill="#666666" fontSize="7.5" fontFamily="monospace" textAnchor="middle">10.8K req/s</text>
            <circle cx="-35" cy="0" r="2.5" fill="#FFFFFF" />
            <circle cx="35" cy="0" r="2.5" fill="#FFFFFF" />
          </g>

          {/* Neural / Agent Cluster Layer 2 - Central Reasoning Core */}
          <g transform="translate(400, 200)">
            {/* Concentric rings */}
            <circle cx="0" cy="0" r="54" stroke="#222222" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="42" stroke="#2A2A2A" strokeWidth="1" />
            <circle cx="0" cy="0" r="30" fill="#0E0E0E" stroke="#3E3E3E" strokeWidth="1.5" />
            
            {/* Core Center Node */}
            <circle cx="0" cy="0" r="10" fill="#1A1A1A" stroke="#FFFFFF" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" className="animate-subtle-pulse" />

            {/* Orbiting metrics labels */}
            <text x="0" y="-18" fill="#FFFFFF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              AI ENGINE
            </text>
            <text x="0" y="24" fill="#666666" fontSize="7" fontFamily="monospace" textAnchor="middle">
              RAG • EMBED
            </text>
          </g>

          {/* Neural / Agent Cluster Layer 3 - Multi-Agent Synthesis */}
          <g transform="translate(620, 180)">
            <rect x="-35" y="-20" width="70" height="40" rx="3" fill="#0D0D0D" stroke="#2B2B2B" strokeWidth="1" />
            <text x="0" y="-3" fill="#A0A0A0" fontSize="9" fontFamily="monospace" textAnchor="middle">SYNTHESIS</text>
            <text x="0" y="10" fill="#666666" fontSize="7.5" fontFamily="monospace" textAnchor="middle">0.12s latency</text>
            <circle cx="-35" cy="0" r="2.5" fill="#FFFFFF" />
            <circle cx="35" cy="0" r="2.5" fill="#FFFFFF" />
          </g>

          {/* Auxiliary Node Pods */}
          {/* Top Left: Vector Store */}
          <g transform="translate(280, 100)">
            <circle cx="0" cy="0" r="18" fill="#0B0B0B" stroke="#262626" strokeWidth="1" />
            <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
            <text x="0" y="30" fill="#666666" fontSize="8" fontFamily="monospace" textAnchor="middle">VECTOR_DB</text>
          </g>

          {/* Bottom Left: State Graph */}
          <g transform="translate(280, 300)">
            <circle cx="0" cy="0" r="18" fill="#0B0B0B" stroke="#262626" strokeWidth="1" />
            <circle cx="0" cy="0" r="3" fill="#A0A0A0" />
            <text x="0" y="30" fill="#666666" fontSize="8" fontFamily="monospace" textAnchor="middle">STATE_GRAPH</text>
          </g>

          {/* Top Right: Agent Orchestrator */}
          <g transform="translate(520, 100)">
            <circle cx="0" cy="0" r="18" fill="#0B0B0B" stroke="#262626" strokeWidth="1" />
            <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
            <text x="0" y="30" fill="#666666" fontSize="8" fontFamily="monospace" textAnchor="middle">AUTONOMOUS</text>
          </g>

          {/* Bottom Right: Event Stream */}
          <g transform="translate(520, 300)">
            <circle cx="0" cy="0" r="18" fill="#0B0B0B" stroke="#262626" strokeWidth="1" />
            <circle cx="0" cy="0" r="3" fill="#A0A0A0" />
            <text x="0" y="30" fill="#666666" fontSize="8" fontFamily="monospace" textAnchor="middle">DISPATCHER</text>
          </g>

          {/* Dynamic Traveling Pulses across lines */}
          <circle cx="280" cy="100" r="2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="400" cy="120" r="2" fill="#FFFFFF" opacity="0.9" />
          <circle cx="520" cy="100" r="2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="280" cy="300" r="2" fill="#FFFFFF" opacity="0.8" />
          <circle cx="520" cy="300" r="2" fill="#FFFFFF" opacity="0.8" />
        </svg>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="relative z-10 pt-3 border-t border-[#1E1E1E] flex flex-wrap items-center justify-between text-[11px] font-mono text-[#666666] gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-[#A0A0A0]">
            <span className="inline-block w-1.5 h-1.5 bg-white" />
            <span>ARCHITECTURE: DISTRIBUTED</span>
          </span>
          <span className="hidden md:inline-block">PROTOCOL: GRPC / WEBSOCKET</span>
        </div>
        <div className="flex items-center gap-4 text-[#A0A0A0]">
          <span>TOKEN_STREAM: 84 tok/s</span>
          <span className="text-white font-medium">99.99% DETERMINISTIC</span>
        </div>
      </div>
    </div>
  );
}
