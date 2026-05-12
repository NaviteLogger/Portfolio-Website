export type ProjectCategory = "featured" | "engineering" | "research";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  year: string;
  category: ProjectCategory;
  links?: { label: string; href: string }[];
};

export type Role = {
  title: string;
  period: string;
  summary: string;
};

export type WorkExperience = {
  org: string;
  meta: string;
  roles: Role[];
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
  "Alongside the engineering, I've led delivery for cross-functional teams shipping across fintech, SaaS, e-commerce, and academic research — the PM lens sharpens how I scope a roadmap and talk to stakeholders, not just how I write code.",
];

export const projects: Project[] = [
  {
    slug: "connexio-pl",
    title: "Connexio.pl",
    tagline:
      "API-first platform standardising a Transit Connectivity Index for the Warsaw metropolitan area.",
    description:
      "Full-stack platform from architecture through deployment — FastAPI over PostgreSQL/PostGIS, Valhalla and OTP routing engines generating isochrones, a Scikit-learn pipeline computing weighted TCI scores, and an Angular frontend with MapLibre GL JS maps and D3.js radar charts. Containerised end-to-end with Redis caching keeping P95 under 300ms on geospatial scoring endpoints.",
    tech: [
      "Python (FastAPI)",
      "PostgreSQL / PostGIS",
      "Angular",
      "Valhalla / OTP",
      "Scikit-learn",
      "MapLibre GL JS",
      "Redis",
      "Docker",
    ],
    year: "Jan 2026 — Apr 2026",
    category: "featured",
    links: [{ label: "Live", href: "https://connexio.pl" }],
  },
  {
    slug: "academic-neighbour",
    title: "Academic Neighbour",
    tagline:
      "Real-time social networking platform for dormitory ecosystems.",
    description:
      "Full-stack platform with a FastAPI + SQLModel backend over PostgreSQL, JWT auth, and native WebSocket integrations in both FastAPI and Angular driving live chat and dynamic feeds. Angular v20 SPA with strict typing, Tailwind, and Angular Material. Deployed on Oracle Cloud ARM with Docker Compose and Traefik handling automated SSL and reverse proxying; Devcontainers and GitHub Actions for a reproducible team workflow.",
    tech: [
      "Python (FastAPI)",
      "SQLModel",
      "PostgreSQL",
      "Angular",
      "WebSockets",
      "Docker",
      "Traefik",
      "Oracle Cloud",
    ],
    year: "Oct 2025 — Nov 2025",
    category: "featured",
  },
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
    category: "engineering",
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
    category: "featured",
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
    category: "engineering",
  },
  {
    slug: "passkey-wallet",
    title: "Passkey Wallet",
    tagline:
      "ERC-4337 v0.7 smart wallet with WebAuthn passkey signatures and a sponsor paymaster.",
    description:
      "Smart wallet that dispatches signature validation across an ECDSA path (EOA owner) and a WebAuthn passkey path (secp256r1 via the RIP-7212 precompile with a fallback verifier). A fail-closed Hono sponsor service signs paymasterAndData bound to chainid + paymaster address to block cross-chain replay. Tested end-to-end with Foundry against real entryPoint.handleOps, plus Playwright driving Chromium's virtual WebAuthn authenticator via CDP.",
    tech: [
      "Solidity",
      "ERC-4337",
      "Foundry",
      "WebAuthn",
      "Next.js",
      "viem",
      "Hono",
      "Playwright",
    ],
    year: "Aug 2025 — Feb 2026",
    category: "featured",
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
    category: "engineering",
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
    category: "engineering",
  },
  {
    slug: "glioma-classification",
    title: "Glioma Classification",
    tagline:
      "Biomedical ML pipeline replicating a 2022 NIH glioma grading methodology from clinical and molecular data.",
    description:
      "End-to-end replication of an NIH-published 2022 glioma grading study. Built the data preprocessing and feature selection pipeline, then evaluated a Soft Voting ensemble combining scikit-learn classifiers with a PyTorch deep learning model — benchmarking each path against the source methodology's metrics. Led the multidisciplinary team alongside the engineering and authored the reproducibility documentation.",
    tech: [
      "Python",
      "scikit-learn",
      "PyTorch",
      "Ensemble Learning",
      "Feature Selection",
      "pandas",
      "Biomedical ML",
    ],
    year: "Mar 2025 — Jun 2025",
    category: "research",
  },
  {
    slug: "sky-clustering",
    title: "Sky Clustering",
    tagline:
      "Computer vision pipeline clustering high-volume frame data from vehicle-mounted cameras.",
    description:
      "End-to-end CV study analysing video telemetry from vehicle-mounted cameras. Built the OpenCV preprocessing pipeline (frame extraction, feature engineering) and the clustering analysis on top, then surfaced results through Matplotlib / Plotly visualisations for academic and external stakeholders. Led the Agile process alongside the hands-on engineering and kept the findings reproducible across collaborators.",
    tech: [
      "Python",
      "OpenCV",
      "NumPy",
      "Clustering",
      "Matplotlib",
      "Plotly",
      "Computer Vision",
    ],
    year: "Mar 2025 — Jun 2025",
    category: "research",
  },
  {
    slug: "academic-research-database-comparator",
    title: "Academic Research Database Comparator",
    tagline:
      "Centralised platform comparing research outputs across Polish university databases.",
    description:
      "Full-stack platform unifying research output data from multiple Polish university databases into a normalised PostgreSQL schema. Built the FastAPI backend with the ingestion / scraping layer pulling from heterogeneous institutional sources, plus the Angular frontend for academic stakeholders comparing outputs across institutions. Led the team end-to-end and ran the final demonstrations to academic boards.",
    tech: [
      "Python (FastAPI)",
      "PostgreSQL",
      "Angular",
      "Web Scraping",
      "Data Integration",
      "Docker",
      "GitHub Actions",
    ],
    year: "Oct 2024 — Feb 2025",
    category: "research",
  },
];

export const experience: WorkExperience[] = [
  {
    org: "IBM",
    meta: "Full-time · Warsaw — Hybrid",
    roles: [
      {
        title: "Brand Technical Specialist",
        period: "Jan 2026 — Current",
        summary:
          "Hands-on technical specialist designing viable client solutions across IBM's automation portfolio. Articulate value proposition and ROI, navigate the competitive landscape, and deliver technical proof points — demos, POTs, POCs, workshops, solution designs, and MVPs — to remove technical inhibitors from enterprise sales cycles.",
      },
      {
        title: "Pre-sales Engineer",
        period: "Oct 2025 — Dec 2025",
        summary:
          "Technical bridge between IBM's product capabilities and enterprise customer requirements. Designed PoCs, led workshops and demos, owned the technical workstream on RFP / RFI responses, and supported the sales cycle from discovery through close.",
      },
    ],
  },
  {
    org: "Confidential Client",
    meta: "Self-employed · Warsaw — Remote",
    roles: [
      {
        title: "Head of Software Development and Security",
        period: "Jan 2026 — Current",
        summary:
          "End-to-end engineering and security ownership for an infrastructure automation platform. Lead architectural governance, ship backend API and integration work, and run multi-cloud deployments (AWS / GCP / Azure) via CI/CD. Spearhead AI-driven code and infrastructure analysis pipelines for proactive vulnerability detection; own the monitoring, logging, and 24/7 observability story.",
      },
    ],
  },
  {
    org: "Software Mind",
    meta: "Full-time · Warsaw — Hybrid",
    roles: [
      {
        title: "Junior Delivery Manager",
        period: "Jun 2025 — Sep 2025",
        summary:
          "Cross-functional delivery and project management for complex web applications across fintech, SaaS, and public sector clients. Owned end-to-end delivery cycles, SLA monitoring, agile sprint planning, and client relationships. Drove internal automation (leave management, wikis, schedules), managed budgets and PMO-ready financial reports, and ran onboarding across Netherlands–Poland teams.",
      },
    ],
  },
  {
    org: "Weblo",
    meta: "Full-time · Warsaw — On-site",
    roles: [
      {
        title: "Project Manager",
        period: "Apr 2025 — Jun 2025",
        summary:
          "Delivery and project management for WordPress / WooCommerce eCommerce builds. Drove the full lifecycle from scoping through deployment, owned risk planning and design-to-code QA, and served as the primary client contact translating business needs into technical requirements.",
      },
    ],
  },
  {
    org: "OSEC — Open Source Education Center",
    meta: "Part-time · Warsaw — Hybrid",
    roles: [
      {
        title: "IT Project Manager",
        period: "Apr 2024 — Jun 2025",
        summary:
          "Project management for the Allegro-seller analytics platform. Ran an Agile / Waterfall hybrid, prioritised the backlog, coordinated code reviews and architectural audits, and owned releases across cloud environments — Jira and Azure DevOps for transparent client reporting.",
      },
      {
        title: "Full Stack Developer",
        period: "Mar 2024 — Apr 2025",
        summary:
          "Full-stack engineering for the Allegro-seller analytics platform — Go APIs (Huma, Gin) over PostgreSQL, an Angular + Tailwind frontend, and a fully-featured browser extension via WXT extending platform functionality directly into seller workflows. Operated Docker / Kubernetes environments with CI/CD for reliable deployment.",
      },
    ],
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
