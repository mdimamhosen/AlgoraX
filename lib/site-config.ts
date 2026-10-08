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
  email: "mimam22.cse@bu.ac.bd",
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
    "AI SYSTEMS",
    "SOFTWARE ENGINEERING",
    "AUTOMATION",
    "SAAS PLATFORMS",
    "DIGITAL PRODUCTS",
    "RAG PIPELINES",
    "MULTI-AGENT WORKFLOWS",
    "HIGH-PERFORMANCE WEB",
  ],
  services: [
    {
      number: "01",
      title: "AI & Intelligent Systems",
      description:
        "LLM applications, RAG systems, AI agents, AI automation and intelligent workflows designed for enterprise reliability and speed.",
      iconName: "Cpu",
      tags: ["LLMs", "RAG", "Autonomous Agents", "Vector DBs"],
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
        "An AI-powered customer communication and automation platform combining LLMs, RAG, workflow automation and business integrations for high-volume enterprise teams.",
      tags: ["AI", "SaaS", "RAG", "Automation", "NestJS", "Next.js"],
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
      tags: ["Next.js", "AI", "RAG", "PostgreSQL", "Socket.IO"],
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
      tags: ["LLM", "Agents", "Automation", "APIs"],
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
  securityPillars: [
    {
      title: "Zero Data Retention (ZDR)",
      code: "SEC_ZDR_01",
      description:
        "Engineered so proprietary enterprise inputs and data streams are never stored on external LLM servers or used to train public foundation models.",
    },
    {
      title: "Granular Vault Encryption",
      code: "SEC_AES_256",
      description:
        "API keys and sensitive tenant tokens are protected with AES-256-GCM encryption and rotated on isolated KMS envelopes.",
    },
    {
      title: "Deterministic Guardrails",
      code: "DEF_GUARD_v3",
      description:
        "Pre-flight validation, schema enforcement, and delimiter boundary isolation neutralize adversarial prompt injection vectors.",
    },
    {
      title: "SOC-2 & GDPR Alignment",
      code: "COMP_AUDIT_99",
      description:
        "Architected around zero-trust network boundaries, immutable audit trails, and strict role-based access control (RBAC).",
    },
  ] as SecurityPillar[],

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
  founder: {
    name: "Md. Imam Hosen",
    role: "Founder & Lead AI Engineer",
    institution: "Dept. of Computer Science & Engineering, University of Barishal",
    email: "mimam22.cse@bu.ac.bd",
    portfolio: "https://mdimamhosen.netlify.app/",
    github: "https://github.com/mdimamhosen",
    linkedin: "https://www.linkedin.com/in/mdimamhosen/",
    upwork: "https://www.upwork.com/freelancers/~01639e45e2f6ee7185",
  },
  cta: {
    headingLine1: "Have an idea?",
    headingLine2: "Let's build it.",
    supportingText:
      "Tell us what you're building, what you're trying to solve, or where you're stuck. We'll help turn the idea into a working digital product.",
    primaryCta: "Start a Conversation",
    email: "mimam22.cse@bu.ac.bd",
    sla: "Direct engineering response within 24 hours",
  },
  social: {
    github: "https://github.com/mdimamhosen",
    linkedin: "https://www.linkedin.com/in/mdimamhosen/",
    portfolio: "https://mdimamhosen.netlify.app/",
    twitter: "https://x.com",
  },
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Barishal Hub", href: "#regional-presence" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Expertise", href: "#expertise" },
    { label: "Security", href: "#security" },
    { label: "Impact", href: "#impact" },
    { label: "Contact", href: "#contact" },
  ],
};
