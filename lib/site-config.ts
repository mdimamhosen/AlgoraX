export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  features: string[];
  metric?: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface ClaudeCapability {
  title: string;
  badge: string;
  description: string;
  metrics: string;
}

export interface SimulatorScenario {
  id: string;
  title: string;
  model: string;
  tokenContext: string;
  cacheHitRatio: string;
  latency: string;
  prompt: string;
  reasoningSteps: string[];
  outputJson: string;
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SecurityPillar {
  title: string;
  code: string;
  description: string;
}

export const siteConfig = {
  name: "AlgoraX",
  positioning: "AI-Powered Software & Digital Solutions",
  title: "AlgoraX — AI, Software & Digital Products",
  description:
    "AlgoraX builds AI-powered software, SaaS platforms, automation systems and modern digital products for ambitious businesses.",
  url: "https://algorax.com",
  email: "hello@algorax.com",
  status: "Available for selected projects",
  hero: {
    badge: "Available for selected projects",
    headingLine1: "We build intelligent",
    headingLine2: "digital products.",
    supportingText:
      "AlgoraX designs and develops AI-powered software, SaaS platforms, automation systems, and high-performance digital experiences for ambitious businesses.",
    primaryCta: "Start a Project",
    secondaryCta: "View Our Work",
  },
  tickerItems: [
    "ANTHROPIC CLAUDE 3.5",
    "PROMPT CACHING",
    "AI AGENTS",
    "SOFTWARE ENGINEERING",
    "AUTOMATION",
    "SAAS PLATFORMS",
    "200K CONTEXT REASONING",
    "ENTERPRISE RAG",
  ],
  services: [
    {
      number: "01",
      title: "AI & Intelligent Systems",
      description:
        "LLM applications, RAG systems, AI agents, AI automation and intelligent workflows designed for enterprise reliability and speed.",
      iconName: "Cpu",
      tags: ["Claude 3.5", "RAG", "Autonomous Agents", "Vector DBs"],
    },
    {
      number: "02",
      title: "SaaS Products",
      description:
        "Scalable SaaS platforms, dashboards, customer portals and subscription products engineered to support rapid growth and high concurrency.",
      iconName: "Layers",
      tags: ["Multi-Tenant", "Billing & Subscriptions", "Analytics", "Dashboards"],
    },
    {
      number: "03",
      title: "Web Applications",
      description:
        "High-performance modern web applications built with Next.js, React and TypeScript with sub-second page loads and fluid interaction.",
      iconName: "Globe",
      tags: ["Next.js", "React 19", "TypeScript", "Micro-frontends"],
    },
    {
      number: "04",
      title: "Backend & APIs",
      description:
        "Scalable backend systems, REST and GraphQL APIs, distributed databases, event queues and real-time streaming infrastructure.",
      iconName: "Server",
      tags: ["Distributed Systems", "WebSockets", "Event Queues", "Caching"],
    },
    {
      number: "05",
      title: "Automation",
      description:
        "Business process automation, seamless integrations, workflow orchestration systems and robust API pipelines.",
      iconName: "Workflow",
      tags: ["Orchestration", "ETL Pipelines", "Webhook Meshes", "Zero-Latency"],
    },
    {
      number: "06",
      title: "Product Engineering",
      description:
        "From initial architecture and prototype to enterprise production — full-cycle engineering, deployment and continuous optimization.",
      iconName: "Code2",
      tags: ["MVP to Scale", "CI/CD Pipelines", "System Hardening", "Observability"],
    },
  ] as ServiceItem[],
  projects: [
    {
      id: "clientserve-ai",
      number: "01",
      title: "ClientServe AI",
      category: "AI SaaS Platform",
      description:
        "An AI-powered customer communication and automation platform combining Claude 3.5 Sonnet, RAG, prompt caching, workflow automation and business integrations.",
      tags: ["Claude 3.5", "SaaS", "RAG", "Prompt Cache", "NestJS", "Next.js"],
      features: [
        "Sub-150ms semantic search over 1M+ docs",
        "Autonomous triage agent with human-in-the-loop",
        "Zero-latency multi-channel sync",
      ],
      metric: "99.98% SLA",
    },
    {
      id: "cohost",
      number: "02",
      title: "CoHost",
      category: "AI-Powered SaaS",
      description:
        "A modern SaaS platform combining intelligent search, knowledge retrieval, booking workflows and real-time communication for distributed teams.",
      tags: ["Next.js", "Claude Haiku", "RAG", "PostgreSQL", "Socket.IO"],
      features: [
        "Real-time collaborative workspaces",
        "Context-aware AI synthesis assistant",
        "Instant multi-region data replication",
      ],
      metric: "4.2x Faster Triage",
    },
    {
      id: "ai-automation-platform",
      number: "03",
      title: "AI Automation Platform",
      category: "Intelligent Workflows",
      description:
        "Automated AI workflows designed to eliminate repetitive operational bottlenecks, linking heterogeneous enterprise systems with deterministic reliability.",
      tags: ["LLM", "Claude Agents", "Automation", "APIs"],
      features: [
        "DAG-based visual pipeline orchestrator",
        "Self-correcting JSON schemas & fallback logic",
        "Audit-logged agent actions & token accounting",
      ],
      metric: "80% Time Saved",
    },
    {
      id: "custom-software-systems",
      number: "04",
      title: "Custom Software Systems",
      category: "Enterprise Applications",
      description:
        "Scalable web applications, high-throughput internal tooling and resilient business systems engineered around demanding operational requirements.",
      tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
      features: [
        "High-density data visualization grids",
        "Role-based granular access control (RBAC)",
        "Zero-downtime blue/green deployment setup",
      ],
      metric: "<100ms TTFB",
    },
  ] as ProjectItem[],
  about: {
    heading: "Engineering ideas into real products.",
    paragraphs: [
      "AlgoraX is a software and AI-focused technology studio building modern digital products for startups, businesses, and ambitious teams.",
      "We combine product thinking, modern software engineering, and artificial intelligence to create systems that are fast, scalable, and built for real-world use.",
    ],
    stats: [
      { value: "50+", label: "Projects", sublabel: "Shipped to production" },
      { value: "10+", label: "Technologies", sublabel: "Deep core mastery" },
      { value: "AI", label: "Focused", sublabel: "Native architectural design" },
      { value: "Global", label: "Mindset", sublabel: "Distributed worldwide" },
    ] as StatItem[],
  },
  claudeCapabilities: [
    {
      title: "Claude 3.5 Sonnet Integration",
      badge: "State-of-the-Art Reasoning",
      description:
        "Harnessing industry-leading code generation, architectural synthesis, and multi-step agent reasoning with high steerability.",
      metrics: "93.7% HumanEval",
    },
    {
      title: "Prompt Caching Architecture",
      badge: "Cost & Latency Optimization",
      description:
        "Slashing API costs by up to 90% and time-to-first-token by 85% by caching extensive codebases and system instructions.",
      metrics: "-90% Token Cost",
    },
    {
      title: "200,000 Token Context Window",
      badge: "Full-Codebase Synthesis",
      description:
        "Ingesting full documentation suites, database schemas, and multi-file codebases in a single deterministic prompt context.",
      metrics: "200K Tokens",
    },
    {
      title: "Deterministic Tool & Computer Use",
      badge: "Autonomous Execution",
      description:
        "Bridging Claude with real-world APIs, sandboxed runtimes, and external services via structured schema tool calls.",
      metrics: "<0.01% Hallucination",
    },
  ] as ClaudeCapability[],
  simulatorScenarios: [
    {
      id: "agent-triage",
      title: "Autonomous Triage Agent",
      model: "claude-3-5-sonnet-latest",
      tokenContext: "128,450 tokens",
      cacheHitRatio: "91.4% Cached",
      latency: "284ms TTFT",
      prompt: "Analyze enterprise customer ticket #8491, cross-reference SLA database and dispatch refund webhook if conditions match.",
      reasoningSteps: [
        "1. Verified user subscription state via tool:query_account_ledger()",
        "2. Retrieved SLA policy doc [clause 4.2] via cached context lookup",
        "3. Evaluated eligibility: Downtime exceeded 45 mins. Eligible for $120 credit",
        "4. Executed tool:issue_credit_memo({ amount: 120, ticket_id: '8491' })",
        "5. Emitted human-auditable confirmation receipt to Slack webhook",
      ],
      outputJson: JSON.stringify(
        {
          status: "RESOLVED",
          action: "credit_issued",
          amount: 120,
          currency: "USD",
          policy_clause: "4.2_outage_sla",
          audit_hash: "0x8fa3...b912",
        },
        null,
        2
      ),
    },
    {
      id: "code-architect",
      title: "Multi-Repo Code Architect",
      model: "claude-3-5-sonnet-latest",
      tokenContext: "192,200 tokens",
      cacheHitRatio: "96.8% Cached",
      latency: "310ms TTFT",
      prompt: "Audit Next.js App Router API route handlers for SSR hydration mismatches and SQL query N+1 anti-patterns.",
      reasoningSteps: [
        "1. Ingested repository AST tree across 42 modules using prompt cache",
        "2. Scanned Prisma query chains in /api/v1/workspaces/[id]/members",
        "3. Detected N+1 in resolveMemberProfiles() batching loop",
        "4. Refactored query to use DataLoader batch strategy with zero regressions",
        "5. Generated unit test suite validating <2ms p99 query latency",
      ],
      outputJson: JSON.stringify(
        {
          optimizations_applied: 4,
          p99_latency_reduction: "84%",
          vulnerabilities_found: 0,
          lint_status: "PASSED",
          bundle_impact: "-14.2kb",
        },
        null,
        2
      ),
    },
    {
      id: "financial-etl",
      title: "High-Throughput Financial ETL",
      model: "claude-3-5-haiku-latest",
      tokenContext: "48,900 tokens",
      cacheHitRatio: "88.2% Cached",
      latency: "110ms TTFT",
      prompt: "Parse unstructured multi-currency vendor invoice PDFs into strictly validated ISO 20022 JSON format.",
      reasoningSteps: [
        "1. Extracted OCR raw token streams from vendor PDF artifact",
        "2. Normalized EUR to USD conversion using real-time ECB exchange rate feed",
        "3. Validated tax compliance against EU VAT cross-border rules",
        "4. Asserted schema against strict Pydantic / Zod ISO-20022 contract",
        "5. Streamed validated records directly into ledger replication queue",
      ],
      outputJson: JSON.stringify(
        {
          invoice_id: "INV-2026-9041",
          vendor_vat: "DE391829301",
          total_converted_usd: 14250.0,
          schema_compliance: "100%",
          processing_time_ms: 124,
        },
        null,
        2
      ),
    },
  ] as SimulatorScenario[],
  pricingTiers: [
    {
      id: "startup-pilot",
      name: "Startup MVP Sprint",
      badge: "Built for Early Startups",
      price: "$3,500",
      billing: "fixed scope / 2-week sprint",
      description:
        "Fast-track your AI product from concept to working production MVP ready for users, demo days, and angel/seed investors.",
      features: [
        "Production Next.js 16 + TypeScript web app",
        "Anthropic Claude 3.5 Sonnet / Haiku integration",
        "Prompt caching configured for 80%+ API savings",
        "Vercel serverless deployment setup",
        "Direct founder-to-engineer Slack/Discord channel",
        "Full IP & source code ownership transferred",
      ],
      cta: "Book MVP Sprint",
      popular: false,
    },
    {
      id: "scale-up",
      name: "Startup Dedicated Partner",
      badge: "Recommended for Startups",
      price: "$7,500",
      billing: "per month / cancel anytime",
      description:
        "Dedicated engineering capacity for funded startups scaling their product, multi-agent pipelines, and core infrastructure.",
      features: [
        "Continuous feature delivery (weekly sprints)",
        "Advanced Claude multi-agent workflows & DAG pipelines",
        "Custom vector search & hybrid RAG infrastructure",
        "Observability, token tracing & cost optimization",
        "Automated CI/CD, unit & end-to-end testing",
        "Priority 24/7 incident response SLA",
        "Claude for Startups credits consultation",
      ],
      cta: "Apply for Dedicated Capacity",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise AI Transformation",
      badge: "Custom Architecture",
      price: "Custom",
      billing: "tailored contract",
      description:
        "Enterprise-grade software engineering, private VPC deployment, Zero Data Retention compliance, and bespoke AI systems.",
      features: [
        "Private VPC & air-gapped deployment options",
        "Zero Data Retention (ZDR) guarantee",
        "SOC-2 Type II & ISO 27001 readiness review",
        "Custom LLM fine-tuning & evaluation benchmarks",
        "High-availability multi-region fault tolerance",
        "Dedicated technical lead & executive engineering review",
      ],
      cta: "Contact Enterprise Sales",
      popular: false,
    },
  ] as PricingTier[],
  securityPillars: [
    {
      title: "Zero Data Retention (ZDR)",
      code: "SEC_ZDR_01",
      description:
        "Configured so prompt inputs and completions are never stored on external LLM servers or used to train public foundation models.",
    },
    {
      title: "Granular Vault Encryption",
      code: "SEC_AES_256",
      description:
        "API keys and sensitive tenant tokens are protected with AES-256-GCM encryption and rotated on isolated KMS envelopes.",
    },
    {
      title: "Prompt Injection Defense",
      code: "DEF_GUARD_v3",
      description:
        "Deterministic pre-flight guardrails, schema enforcement, and delimiter boundary isolation neutralize adversarial jailbreak vectors.",
    },
    {
      title: "SOC-2 & GDPR Alignment",
      code: "COMP_AUDIT_99",
      description:
        "Architected around zero-trust network boundaries, immutable audit trails, and strict role-based access control (RBAC).",
    },
  ] as SecurityPillar[],
  faqItems: [
    {
      question: "Why does AlgoraX specialize in Anthropic Claude?",
      answer:
        "Anthropic Claude 3.5 Sonnet represents the premier model for sophisticated software engineering, complex reasoning, and deterministic tool use. Combined with features like Prompt Caching (saving up to 90% in token costs) and 200,000 token context windows, Claude allows us to build AI systems that are dramatically faster, more cost-effective, and more reliable than older architectures.",
    },
    {
      question: "Can we use our Anthropic Claude startup credits with AlgoraX?",
      answer:
        "Yes, absolutely! If you are part of the Anthropic Claude for Startups program or have received Anthropic API credits, we architect your solution using your organization's API credentials directly. Your credits offset 100% of the ongoing model inference costs, and you retain total administrative sovereignty over your keys and usage dashboards.",
    },
    {
      question: "Who owns the code, intellectual property, and models?",
      answer:
        "You own 100% of all intellectual property, source code, data schemas, prompt workflows, and architectural assets upon project delivery. There are no proprietary lock-ins, licenses, or hidden royalties.",
    },
    {
      question: "How do you keep ongoing AI API costs low?",
      answer:
        "We implement advanced prompt engineering and Anthropic Prompt Caching from day one. Frequently referenced documents, system instructions, and schema definitions are cached, resulting in an immediate 90% cost reduction for cached input tokens and up to an 85% drop in time-to-first-token latency.",
    },
    {
      question: "Is client data kept private and secure?",
      answer:
        "Yes. We configure Zero Data Retention (ZDR) endpoints so customer data is never cached or used to train third-party models. We also implement sandboxed API keys, client-side encryption, and strict RBAC across every system we deploy.",
    },
    {
      question: "How quickly can we launch a production-ready MVP?",
      answer:
        "Our standard Startup MVP Sprint delivers a production-ready, fully deployed Next.js application integrated with Claude 3.5 in just 2 weeks. Because we operate with a lean, senior engineering team, we eliminate bureaucratic overhead and ship real code immediately.",
    },
  ] as FaqItem[],
  technologies: [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "NestJS", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Redis", category: "Cache / Queue" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Claude 3.5", category: "Anthropic AI" },
    { name: "OpenAI", category: "AI / LLM" },
    { name: "LangChain", category: "AI Orchestration" },
    { name: "LangGraph", category: "AI Multi-Agent" },
    { name: "RAG", category: "Architecture" },
    { name: "AI Agents", category: "Autonomous Systems" },
    { name: "Stripe", category: "FinTech" },
    { name: "Socket.IO", category: "Real-time" },
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "Understand the problem, users, constraints, and business goals through rigorous technical scoping.",
      deliverables: ["Product Specification", "Architecture Blueprint", "Feasibility Audit"],
    },
    {
      step: "02",
      title: "Design",
      description:
        "Define the system architecture, product experience, data schemas, and precise technical direction.",
      deliverables: ["Interactive Prototypes", "API Contracts", "System Schemas"],
    },
    {
      step: "03",
      title: "Build",
      description:
        "Develop the product using modern, scalable technologies with strict typing, tests, and CI/CD.",
      deliverables: ["Production Codebase", "Automated Test Suite", "Infrastructure as Code"],
    },
    {
      step: "04",
      title: "Launch",
      description:
        "Deploy to high-availability infrastructure, optimize performance metrics, and monitor real-world telemetry.",
      deliverables: ["Global Deployment", "Telemetry Dashboards", "Continuous Evolution"],
    },
  ] as ProcessItem[],
  whyUs: [
    {
      title: "Engineering-first mindset",
      description:
        "We approach every project as engineers, designing scalable architectures that avoid technical debt and scale cleanly.",
    },
    {
      title: "AI-native development",
      description:
        "AI is woven directly into our architecture patterns—leveraging autonomous agents, vector embeddings, and deterministic fallbacks.",
    },
    {
      title: "Scalable architecture",
      description:
        "Engineered for high throughput, sub-second latency, and resilience from day one under real production workloads.",
    },
    {
      title: "Fast product iteration",
      description:
        "Rapid sprint cadences that move from zero to verified working software quickly without sacrificing code quality.",
    },
    {
      title: "Clean, maintainable code",
      description:
        "Strict TypeScript, modular components, rigorous typing, and self-documenting codebases built to stand the test of time.",
    },
    {
      title: "Business-focused solutions",
      description:
        "We build software that directly solves commercial challenges, drives efficiency, and compounds business leverage.",
    },
  ],
  cta: {
    headingLine1: "Have an idea?",
    headingLine2: "Let's build it.",
    supportingText:
      "Tell us what you're building, what you're trying to solve, or where you're stuck. We'll help turn the idea into a working digital product.",
    primaryCta: "Start a Conversation",
    email: "hello@algorax.com",
    sla: "Direct engineering response within 24 hours",
  },
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Claude Stack", href: "#claude-architecture" },
    { label: "Simulator", href: "#simulator" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};
