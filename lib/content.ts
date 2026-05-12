export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  year: string;
  links?: { label: string; href: string }[];
};

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  summary: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "Marek Kacprzak",
  tagline:
    "Backend-leaning full-stack engineer building secure, observable systems.",
  location: "Warsaw, Poland",
  email: "kacprzakmarek92@gmail.com",
  github: "https://github.com/navitelogger",
  linkedin: "https://www.linkedin.com/in/marek-kacprzak-238053218/",
  resumeHref: "/resume.pdf",
};

export const about = [
  "Backend-leaning engineer with production experience across Node.js, TypeScript, Go, and Python — comfortable owning the full cycle from architecture and code through the test pyramid to Kubernetes deployment and on-call.",
  "Currently Head of Software Development and Security for a confidential automation platform and Brand Technical Specialist at IBM. A cybersecurity specialisation at Warsaw University of Life Sciences keeps security as the lens I review my own code through.",
];

export const projects: Project[] = [
  {
    slug: "headless-browser-toolkit",
    title: "Headless Browser Scraping Toolkit",
    tagline:
      "Go-orchestrated scraping framework hardened against modern anti-bot defences.",
    description:
      "A Go control plane scheduling Playwright and Puppeteer workers behind a Redis-backed queue. Stealth and fingerprint randomisation, residential proxy rotation, TLS-fingerprint awareness, and per-target Prometheus metrics — built for sustained success rates over raw throughput.",
    tech: [
      "Go",
      "Playwright",
      "Puppeteer",
      "Redis",
      "MySQL",
      "Docker",
      "Prometheus",
    ],
    year: "2024 — Current",
  },
  {
    slug: "nestjs-analytics-api",
    title: "Nest.js Analytics API with BigQuery",
    tagline:
      "Typed, cost-aware analytics endpoints over a warehouse-scale dataset.",
    description:
      "Modular Nest.js + TypeScript backend with DTO validation, OpenAPI-from-code, and a BigQuery query layer that prunes partitions and caches in Redis to keep scan costs predictable. Tested with Jest, supertest, and Playwright across the pyramid.",
    tech: [
      "Nest.js",
      "TypeScript",
      "BigQuery",
      "PostgreSQL",
      "Redis",
      "Jest",
      "Playwright",
      "OpenAPI",
    ],
    year: "2024 — Current",
  },
  {
    slug: "build-management-system",
    title: "Build Management System",
    tagline: "Security-first build orchestration with secrets handling baked in.",
    description:
      "Centralised dashboard, queueing engine, and hardened build server. HMAC-SHA256 request signing, atomic configuration writes, path-traversal validation, automatic secret scrubbing in activity logs, and UFW-isolated traffic for admin-only ranges.",
    tech: [
      "Node.js",
      "TypeScript",
      "Python",
      "Nginx",
      "Docker",
      "HMAC-SHA256",
      "Linux",
    ],
    year: "2026 — Current",
  },
  {
    slug: "multi-chain-dapp",
    title: "Multi-Chain DApp",
    tagline:
      "Web3 onboarding and NFT marketplace across EVM, Sui, and Solana.",
    description:
      "Type-safe Next.js + TypeScript frontend with a modular wallet connector layer (MetaMask, Phantom, WalletConnect, Sui Wallet). Solidity ERC-721 contracts, Move modules on Sui, Solana program calls via @solana/web3.js; SIWE auth, HMAC-signed internal APIs, rate-limited RPC proxy.",
    tech: [
      "Next.js",
      "TypeScript",
      "Solidity",
      "Move",
      "ethers.js",
      "viem",
      "Foundry",
      "The Graph",
      "IPFS",
    ],
    year: "2026 — Current",
  },
  {
    slug: "smart-contract-security-lab",
    title: "Smart Contract Security Lab",
    tagline: "Reproducible exploit PoCs across canonical Solidity vulnerability classes.",
    description:
      "Next.js + TypeScript dashboard surfacing Slither and Foundry fuzzing findings against intentionally vulnerable Solidity contracts, with reproducible PoC transactions for each vulnerability class — reentrancy, signature replay, integer overflow, oracle manipulation, access control.",
    tech: [
      "Solidity",
      "Move",
      "Slither",
      "Foundry",
      "Hardhat",
      "TypeScript",
      "Next.js",
    ],
    year: "2025 — 2026",
  },
];

export const experience: Experience[] = [
  {
    role: "Head of Software Development and Security",
    org: "Confidential Client",
    location: "Warsaw — Remote",
    period: "January 2026 — Current",
    summary:
      "Hybrid engineering and security ownership for an automation platform. Ship Node.js / TypeScript backend code (Nest.js, Express) while owning Kubernetes deployments across AWS / GCP / Azure, AWS Lambda for event-driven work, and the observability stack (Prometheus, Grafana, Sentry, ELK).",
  },
  {
    role: "Brand Technical Specialist (promoted from Pre-sales Engineer)",
    org: "IBM Polska",
    location: "Warsaw",
    period: "October 2025 — Current",
    summary:
      "Pre-sales architect across IBM's automation and platform portfolio. Translate client requirements into deployable architectures, deliver PoCs / workshops / RFP responses, and co-lead the technical workstream on a Business Partner engagement (AirTrade).",
  },
  {
    role: "Full Stack Developer",
    org: "OSEC sp. z o.o.",
    location: "Warsaw",
    period: "March 2024 — April 2025",
    summary:
      "Owned backend services for an Allegro-seller analytics product — Node.js / TypeScript and Go APIs talking to PostgreSQL and Redis under high concurrency. Operated headless-browser scraping (Playwright, Puppeteer) with stealth and proxy rotation, deployed on Kubernetes via GitHub Actions CI/CD.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend & Languages",
    items: [
      "Node.js (Nest.js, Express)",
      "TypeScript",
      "Go (Huma, Gin)",
      "Python (FastAPI)",
      "Rust",
    ],
  },
  {
    label: "Data & Streaming",
    items: [
      "PostgreSQL",
      "MySQL",
      "BigQuery",
      "Redis",
      "Kafka",
      "pgvector",
    ],
  },
  {
    label: "Cloud & Deployment",
    items: [
      "AWS (Lambda, ECS, S3)",
      "GCP",
      "Azure",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    label: "Observability & Testing",
    items: [
      "Prometheus",
      "Grafana",
      "Sentry",
      "ELK",
      "Jest",
      "supertest",
      "Playwright",
    ],
  },
  {
    label: "Security",
    items: [
      "Threat modelling",
      "Secure API design",
      "HMAC request signing",
      "Container hardening",
      "OWASP",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "Browser extensions (WXT)",
    ],
  },
];
