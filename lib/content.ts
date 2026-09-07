export type ProjectCategory = "featured" | "engineering" | "research";

export type ProjectBullet = {
  label: string;
  text: string;
};

export type ProjectSection = {
  heading: string;
  bullets: ProjectBullet[];
};

export type ProjectDetails = {
  overview?: string;
  sections: ProjectSection[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  year: string;
  category: ProjectCategory;
  links?: { label: string; href: string }[];
  details?: ProjectDetails;
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

export type LeadershipHighlight = {
  value: string;
  label: string;
  detail: string;
};

export const profile = {
  name: "Marek Kacprzak",
  tagline:
    "Engineering leader turning ambiguous problems into secure, scalable products — and helping teams ship them.",
  location: "Warsaw, Poland",
  email: "kacprzakmarek92@gmail.com",
  github: "https://github.com/navitelogger",
  linkedin: "https://www.linkedin.com/in/marek-kacprzak-238053218/",
  resumeHref: "/resume.pdf",
};

export const about = [
  "I lead engineering and security for a confidential automation platform, owning the path from an incomplete brief to a reliable production system. That means setting direction, shaping scope, allocating work, reviewing technical decisions, removing blockers, and staying hands-on across APIs, data, cloud infrastructure, security, and operations.",
  "At IBM, I work directly with enterprise customers to uncover the real problem behind a request, turn it into a viable architecture, and prove it through workshops, demos, PoCs, and MVP plans. Earlier delivery and project-management roles taught me to connect roadmap, budget, risk, quality, and stakeholder communication without losing sight of the engineers doing the work.",
  "I am studying Computer Science with a Cybersecurity specialisation at SGGW. I care about teams that ask good questions, make evidence-based trade-offs, document decisions, and improve continuously. My technical range — Python, TypeScript, Go, distributed systems, AI workflows, cloud, and secure delivery — helps me lead with context rather than process for its own sake.",
];

export const leadershipHighlights: LeadershipHighlight[] = [
  {
    value: "End to end",
    label: "Product ownership",
    detail: "Roadmap, architecture, delivery, security, releases, and production operations.",
  },
  {
    value: "100 events/s",
    label: "Proven resilience",
    detail: "6,000-event Kafka verification run completed without failed writes.",
  },
  {
    value: "Cross-functional",
    label: "Team leadership",
    detail: "Backend, frontend, platform, security, operations, product, and customer stakeholders.",
  },
  {
    value: "PoC to MVP",
    label: "Customer translation",
    detail: "Enterprise discovery turned into working proof points and implementation plans.",
  },
];

export const projects: Project[] = [
  {
    "slug": "inside-man",
    "title": "Inside Man — Kubernetes Observability",
    "tagline": "Service health, traces, logs and metrics in one Kubernetes installation.",
    "description": "I created an open-source observability platform that combines a Helm deployment with a Go backend and React interface. It connects service metrics, traces and logs so engineers can investigate failures without assembling the monitoring stack themselves.",
    "tech": [
      "Go",
      "React / TypeScript",
      "Kubernetes / Helm",
      "OpenTelemetry",
      "Prometheus",
      "Grafana / Loki / Tempo",
      "GitHub Actions"
    ],
    "year": "Aug 2026 — Current",
    "category": "featured",
    "details": {
      "overview": "I created an open-source observability platform that combines a Helm deployment with a Go backend and React interface. It connects service metrics, traces and logs so engineers can investigate failures without assembling the monitoring stack themselves.",
      "sections": [
        {
          "heading": "Architecture & Developer Experience",
          "bullets": [
            {
              "label": "One installation",
              "text": "Packaged the monitoring stack in an umbrella Helm chart with pinned dependencies and automated checks for dependency drift."
            },
            {
              "label": "Connected diagnostics",
              "text": "Used a shared service identifier across telemetry and built service lists, detail views, maps and diagnostics around it."
            },
            {
              "label": "API consistency",
              "text": "Defined an OpenAPI contract that generates frontend types, with CI checks for stale types and mismatched Go responses."
            }
          ]
        },
        {
          "heading": "Verification & Operations",
          "bullets": [
            {
              "label": "Real-cluster testing",
              "text": "Built a 45-assertion suite across two Kubernetes versions, extending verification to upgrade, rollback, data survival and authentication flows."
            },
            {
              "label": "Documented operations",
              "text": "Published a runbook and resource requirements; the default installation requests 1050m CPU and 2.37 GiB of memory."
            }
          ]
        }
      ]
    },
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/NaviteLogger/Inside-Man"
      }
    ]
  },
  {
    "slug": "smartura-academy",
    "title": "Smartura Academy",
    "tagline": "A production learning and tutoring platform, from checkout to lesson delivery.",
    "description": "As founder, I own the architecture, delivery, security and release operations of a Polish education platform replacing a WordPress/WooCommerce estate. It brings course sales, protected video, tutor scheduling, payments and administration into one system.",
    "tech": [
      "TypeScript / NestJS",
      "Next.js / React",
      "Angular",
      "PostgreSQL / Supabase",
      "Stripe",
      "Redis / BullMQ",
      "OpenTofu",
      "GitHub Actions"
    ],
    "year": "Jul 2026 — Current",
    "category": "featured",
    "details": {
      "overview": "As founder, I own the architecture, delivery, security and release operations of a Polish education platform replacing a WordPress/WooCommerce estate. It brings course sales, protected video, tutor scheduling, payments and administration into one system.",
      "sections": [
        {
          "heading": "Product & Engineering",
          "bullets": [
            {
              "label": "Connected applications",
              "text": "Built a Next.js store, Angular learning, tutoring and administration applications, and a NestJS API covering 30 domain modules."
            },
            {
              "label": "Reliable commerce",
              "text": "Implemented payment fulfilment through verified Stripe webhooks, with account credits, temporary seat holds, database locking and cancellation refunds."
            },
            {
              "label": "Access to learning",
              "text": "Gated signed video playback on course entitlements and integrated calendar synchronisation and reminders."
            }
          ]
        },
        {
          "heading": "Security & Delivery",
          "bullets": [
            {
              "label": "Consistent contracts",
              "text": "Generated a typed SDK from OpenAPI and shared versioned API contracts across the frontend applications."
            },
            {
              "label": "Controlled releases",
              "text": "Built CI/CD with 36 Testcontainers integration specifications, image scanning, database migrations and post-deployment verification."
            },
            {
              "label": "Infrastructure ownership",
              "text": "Managed infrastructure with OpenTofu, remote state and short-lived GitHub cloud credentials; applied API access controls and PostgreSQL row-level security."
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "free-running-app",
    "title": "Free Running App",
    "tagline": "A self-hosted Android running tracker that keeps location history under your control.",
    "description": "I built a Flutter Android recorder and a small Node.js server for personal activity tracking. The phone stores raw GPS points locally and uploads them to a server you control, where distance, climb, pace and splits are calculated. Keeping the raw data allows activities to be recalculated as processing improves.",
    "tech": [
      "Flutter / Dart",
      "Kotlin / Android",
      "Node.js / TypeScript",
      "SQLite",
      "GitHub Actions"
    ],
    "year": "Aug 2026 — Sep 2026",
    "category": "engineering",
    "details": {
      "overview": "I built a Flutter Android recorder and a small Node.js server for personal activity tracking. The phone stores raw GPS points locally and uploads them to a server you control, where distance, climb, pace and splits are calculated. Keeping the raw data allows activities to be recalculated as processing improves.",
      "sections": [
        {
          "heading": "Recording & Data Integrity",
          "bullets": [
            {
              "label": "Resilient recording",
              "text": "Persisted GPS fixes in SQLite and retained session state so recording can resume after the app is killed."
            },
            {
              "label": "Server-side processing",
              "text": "Kept the recorder focused on raw positions and calculated activity summaries on the server, preserving the original data for later reprocessing."
            },
            {
              "label": "Reliable uploads",
              "text": "Made uploads idempotent using a phone-generated identifier, so retrying after a dropped connection does not create duplicate activities."
            }
          ]
        },
        {
          "heading": "Verification & Privacy",
          "bullets": [
            {
              "label": "Real-device validation",
              "text": "Tested the recorder on a phone and investigated Android background behaviour through documented measurements."
            },
            {
              "label": "Repeatable checks",
              "text": "Automated formatting, type checks and tests for the app and server, including tests against real SQLite."
            },
            {
              "label": "Personal deployment",
              "text": "Designed the project for one person, one phone and a self-hosted server, keeping location history on hardware the user controls."
            }
          ]
        }
      ]
    },
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/NaviteLogger/Free-Running-App"
      }
    ]
  },
  {
    "slug": "secure-edge-proxy-platform",
    "title": "Secure Edge Proxy Platform",
    "tagline": "Repeatable, monitored infrastructure for securely exposing customer-facing services.",
    "description": "I designed and delivered a university-associated infrastructure project combining Cloudflare, a hardened Nginx origin and redundant WireGuard paths. The work covers automated provisioning, traffic controls, service checks and documented recovery.",
    "tech": [
      "Nginx",
      "Cloudflare",
      "WireGuard",
      "OpenTofu / Ansible",
      "Linux / nftables",
      "Zabbix / Grafana",
      "GitHub Actions"
    ],
    "year": "Aug 2026 — Sep 2026",
    "category": "engineering",
    "details": {
      "overview": "I designed and delivered a university-associated infrastructure project combining Cloudflare, a hardened Nginx origin and redundant WireGuard paths. The work covers automated provisioning, traffic controls, service checks and documented recovery.",
      "sections": [
        {
          "heading": "Infrastructure & Reliability",
          "bullets": [
            {
              "label": "Repeatable provisioning",
              "text": "Automated DNS, Cloudflare policies, origin configuration and edge routing with OpenTofu and Ansible."
            },
            {
              "label": "Secure traffic paths",
              "text": "Applied origin authentication, strict TLS verification, network allowlists and redundant private tunnels."
            },
            {
              "label": "Service continuity",
              "text": "Designed traffic draining and rolling maintenance, with checks for HTTPS, WebSockets, rate limits, tunnel health and failure handling."
            }
          ]
        },
        {
          "heading": "Operations & Handover",
          "bullets": [
            {
              "label": "Actionable monitoring",
              "text": "Added service-health dashboards, resource metrics and tunnel-age alerts using Zabbix and Grafana."
            },
            {
              "label": "Controlled changes",
              "text": "Introduced safeguards for destructive infrastructure plans, rollback procedures, secret scanning and approval-gated production changes."
            },
            {
              "label": "Recovery documentation",
              "text": "Audited recovery and operational procedures, prepared technical handover materials and tracked dependencies for controlled domain migration."
            }
          ]
        }
      ]
    }
  },
  {
    slug: "infrastructure-automation-platform",
    title: "Infrastructure Automation Platform",
    tagline: "Production platform spanning secure builds, artifacts, AI analysis, and resilient delivery.",
    description:
      "I lead the roadmap, architecture, delivery standards, security posture, and operational resilience while remaining hands-on across Python/FastAPI services, PostgreSQL workflow state, Kafka distribution, object storage, Kubernetes, GitOps, and private cloud. The platform turns immutable source snapshots into verified artifacts through isolated, observable workflows.",
    tech: [
      "Python / FastAPI",
      "PostgreSQL",
      "Kafka",
      "Kubernetes / k3s",
      "OpenTofu",
      "Ansible",
      "Argo CD",
      "Prometheus",
    ],
    year: "May 2026 — Current",
    category: "featured",
    details: {
      overview:
        "A production build, artifact, and infrastructure automation platform. I own the product and engineering lifecycle, coordinating platform, backend, security, and operations while setting the quality bar for releases and reliability.",
      sections: [
        {
          heading: "Leadership & Architecture",
          bullets: [
            {
              label: "End-to-End Ownership",
              text: "Set roadmap, architecture, delivery standards, security priorities, and operational practices; translate stakeholder needs into scoped work across engineering disciplines.",
            },
            {
              label: "Platform Design",
              text: "Reproducible private cloud using Proxmox, OpenTofu, Ansible, Kubernetes/k3s, and Argo CD, with Python/FastAPI services for ingestion, builds, artifacts, reporting, notifications, retention, and distribution.",
            },
            {
              label: "AI Workflows",
              text: "AI-driven code and infrastructure analysis with structured outputs, validation, traces, evaluation checks, and human correction paths.",
            },
          ],
        },
        {
          heading: "Reliability & Secure Delivery",
          bullets: [
            {
              label: "Event-Driven Distribution",
              text: "Kafka with transactional outbox, independent consumers, retries, dead letters, deduplication, and backpressure; verified 6,000 events at 100 events per second without failed writes.",
            },
            {
              label: "Release Governance",
              text: "Workload identity, private PKI, short-lived secrets, SBOMs, provenance, vulnerability scanning, signing, approval gates, verification, rollback, and adversarial testing.",
            },
            {
              label: "Operations",
              text: "Automated CI/CD and GitOps with monitoring, backup, disaster recovery, failure diagnosis, and controlled recovery.",
            },
          ],
        },
      ],
    },
  },
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
    details: {
      overview:
        "API-first platform establishing a standardised Transit Connectivity Index (TCI) for the Warsaw metropolitan area. I owned the full lifecycle — from architectural specification to deployment of a containerised data processing engine — prioritising long-term stability and high-performance geospatial analysis.",
      sections: [
        {
          heading: "Technical Architecture & Strategic Planning",
          bullets: [
            {
              label: "Master Plan Execution",
              text: "Authored and executed a comprehensive implementation plan, delivering a four-phase roadmap that integrated spatial databases, ML pipelines, and interactive visualisations.",
            },
            {
              label: "System Design",
              text: "Architected a robust stack using Python (FastAPI), PostgreSQL with PostGIS, and Angular, ensuring strict typing and high throughput for both B2C and B2B applications.",
            },
            {
              label: "Infrastructure Orchestration",
              text: "Implemented a fully containerised environment using Docker Compose and Nginx, ensuring strict environment parity and easy portability across cloud providers.",
            },
            {
              label: "Performance Optimisation",
              text: "Configured dedicated Linux infrastructure and Redis caching to achieve P95 response times under 300ms for complex geospatial scoring endpoints.",
            },
          ],
        },
        {
          heading: "Development & Operational Excellence",
          bullets: [
            {
              label: "Data Pipeline Engineering",
              text: "Developed Python ETL scripts for automated GTFS and OSM data ingestion, maintaining high data integrity through scheduled update cycles.",
            },
            {
              label: "Geospatial & ML Logic",
              text: "Deployed and linked Valhalla / OTP routing engines within Docker to generate accurate isochrones, integrating a Scikit-learn pipeline to compute weighted TCI scores.",
            },
            {
              label: "Frontend & Visualisation",
              text: "Built a responsive Angular application featuring interactive MapLibre GL JS maps and D3.js radar charts for advanced connectivity metrics.",
            },
          ],
        },
      ],
    },
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
    category: "engineering",
    details: {
      overview:
        "Real-time social networking platform built for dormitory ecosystems. I focused on a scalable architecture balancing high-performance backend logic with a modern responsive UX, while maintaining a robust and automated infrastructure.",
      sections: [
        {
          heading: "Full-Stack Engineering & Real-Time Systems",
          bullets: [
            {
              label: "Backend Architecture",
              text: "Developed a high-performance backend using Python (FastAPI) and SQLModel, implementing complex PostgreSQL schemas and secure JWT-based authentication.",
            },
            {
              label: "Frontend Development",
              text: "Built a modular SPA using Angular v20 with strict typing, Tailwind CSS, and Angular Material for a polished, responsive interface.",
            },
            {
              label: "Real-Time Communication",
              text: "Implemented live chat and dynamic updates by engineering native WebSocket integrations within both FastAPI and Angular services — no Socket.IO shortcut.",
            },
            {
              label: "Feature Orchestration",
              text: "Designed and delivered core platform modules including dynamic content feeds, event management, and administrative profile controls.",
            },
          ],
        },
        {
          heading: "Infrastructure & DevOps Excellence",
          bullets: [
            {
              label: "Cloud Orchestration",
              text: "Deployed containerised infrastructure on Oracle Cloud (ARM) using Docker Compose and Traefik for automated SSL management and reverse proxying.",
            },
            {
              label: "Automated Workflows",
              text: "Established a modern DevOps pipeline using GitHub Actions for CI/CD, ensuring consistent and reliable feature delivery.",
            },
            {
              label: "Development Standardisation",
              text: "Implemented Devcontainers to give the team a unified, reproducible development environment — eliminating configuration drift.",
            },
            {
              label: "Security & Performance",
              text: "Optimised database queries and container resource allocation to ensure high availability and data integrity across the network.",
            },
          ],
        },
      ],
    },
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
    year: "Jun 2024 — Current",
    category: "engineering",
    details: {
      overview:
        "Self-directed scraping framework built around Playwright and Puppeteer with a Go control plane — the project where I keep my anti-bot and stealth muscle in shape outside client work. Built for sustained success rates over raw throughput.",
      sections: [
        {
          heading: "Stealth & Anti-Bot Engineering",
          bullets: [
            {
              label: "Fingerprint Hardening",
              text: "Browser-profile randomisation covering WebGL, canvas, timezone, locale, and plugin-list signals, tuned against a curated set of known anti-bot fingerprinting probes.",
            },
            {
              label: "Stealth Tooling",
              text: "Integrated and extended stealth plugins for Playwright and Puppeteer, eliminating automation tells that off-the-shelf libraries miss.",
            },
            {
              label: "Networking Layer",
              text: "Residential and datacentre proxy rotation with per-proxy health scoring, per-domain request pacing, and TLS-fingerprint awareness to blend with organic traffic.",
            },
            {
              label: "Hostile Targets",
              text: "CAPTCHA escape hatch and adaptive retry policies for sites that escalate defences mid-session.",
            },
          ],
        },
        {
          heading: "Reliability & Operational Excellence",
          bullets: [
            {
              label: "Worker Orchestration",
              text: "Go control plane scheduling Playwright / Puppeteer workers behind a Redis-backed queue, with retry / backoff (jitter), per-page timeouts, and screenshot-on-failure for forensic debugging.",
            },
            {
              label: "Observability",
              text: "Prometheus metrics scoped per target — success rate, latency, and proxy health are visible per domain rather than aggregated into one useless number.",
            },
            {
              label: "Persistence & Scaling",
              text: "MySQL for run metadata, Redis for in-flight state, stateless workers so capacity scales horizontally with proxy budget.",
            },
            {
              label: "Infrastructure",
              text: "Fully containerised via Docker for environment parity between local debugging and production runs.",
            },
          ],
        },
      ],
    },
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
    year: "May 2025 — Dec 2025",
    category: "engineering",
    details: {
      overview:
        "Self-directed Nest.js + TypeScript backend exposing typed, cost-aware analytics endpoints over a warehouse-scale BigQuery dataset. I owned the full lifecycle from schema and API design through testing and deployment, prioritising strict typing, query economics, and a defensible test pyramid over feature velocity.",
      sections: [
        {
          heading: "API Design & Architecture",
          bullets: [
            {
              label: "Modular Nest.js Layout",
              text: "Controllers, services, and providers with clear boundaries and dependency injection — easy to extend without leaking concerns across layers.",
            },
            {
              label: "Strict Typing",
              text: "TypeScript end-to-end with DTO validation (class-validator) at every request boundary, so malformed inputs are rejected before they touch a query.",
            },
            {
              label: "API Contract",
              text: "OpenAPI specs generated directly from the codebase, keeping the contract in lock-step with the implementation.",
            },
          ],
        },
        {
          heading: "BigQuery Query Layer & Performance",
          bullets: [
            {
              label: "Cost-Aware Queries",
              text: "Partition-pruning by date, column projection, and bounded pagination so each endpoint has a predictable scan cost rather than an open-ended bill.",
            },
            {
              label: "Injection-Resistant",
              text: "Parameterised queries with type-checked bindings — no string interpolation into SQL.",
            },
            {
              label: "Redis Caching",
              text: "Result caching with per-endpoint TTLs and cache keys derived from validated DTOs, so hot dashboards stop re-billing BigQuery for identical reads.",
            },
          ],
        },
        {
          heading: "Testing & Operability",
          bullets: [
            {
              label: "Test Pyramid",
              text: "Jest unit tests for service logic, supertest integration tests against a Dockerised PostgreSQL for metadata, and a Playwright suite covering auth and dashboard end-to-end.",
            },
            {
              label: "Containerised",
              text: "Docker Compose for local parity with deployed environments; structured logging for traceable production debugging.",
            },
          ],
        },
      ],
    },
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
    category: "featured",
    details: {
      overview:
        "Centralised Build Management System and Dashboard orchestrating complex compilation workflows — bridging high-level administrative control with low-level server security to keep a stable environment for automated game builds and real-time infrastructure monitoring.",
      sections: [
        {
          heading: "Full-Stack Dashboard & API Development",
          bullets: [
            {
              label: "Administrative Interface",
              text: "Engineered a modern, responsive dashboard with real-time health metrics.",
            },
            {
              label: "Management API",
              text: "Custom management API handling atomic configuration writes, automated backups, and path validation to prevent path-traversal vulnerabilities.",
            },
            {
              label: "Build Orchestration",
              text: "One-click build triggering with advanced concurrency control and a queueing engine for simultaneous resource-intensive tasks.",
            },
            {
              label: "Real-Time Monitoring",
              text: "Services panel reflecting live status of the Build Server API, Discord bots, and Wine environments — immediate visibility into system health.",
            },
          ],
        },
        {
          heading: "Infrastructure, Security & DevOps",
          bullets: [
            {
              label: "Hardened Server Environment",
              text: "Secured the build infrastructure with UFW rules isolating network traffic to admin-only ranges.",
            },
            {
              label: "Security Protocols",
              text: "HMAC-SHA256 signature system for all requests, with environment sanitisation to protect master secrets from build scripts.",
            },
            {
              label: "Logging & Persistence",
              text: "Resilient logging via .jsonl persistence and automated data scrubbing so sensitive material like PATs and API secrets never surfaces in activity tabs.",
            },
            {
              label: "Automated Failure Recovery",
              text: "Timeout protection and automated build termination logic prevent hung processes from consuming server resources.",
            },
          ],
        },
      ],
    },
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
    category: "engineering",
    details: {
      overview:
        "ERC-4337 v0.7 Passkey Wallet — a smart wallet that accepts an EOA owner (secp256k1) or a WebAuthn passkey (secp256r1), with gas paid by an off-chain-signed sponsor paymaster. The Coinbase Smart Wallet pattern, built end-to-end.",
      sections: [
        {
          heading: "ERC-4337 v0.7 Contracts",
          bullets: [
            {
              label: "PasskeyAccount",
              text: "BaseAccount-derived, dispatches signature validation to either an ECDSA path or a WebAuthn path that calls the RIP-7212 P-256 precompile with a fallback verifier. UUPS-upgradable, gated to address(this) or the EntryPoint.",
            },
            {
              label: "PasskeyAccountFactory",
              text: "CREATE2 + ERC-1967 proxy. Idempotent — a second call with the same salt returns the same proxy without reverting.",
            },
            {
              label: "SponsorPaymaster",
              text: "Verifying paymaster signed under (validUntil, validAfter); digest bound to chainid + paymaster address to block cross-chain / cross-paymaster replay.",
            },
            {
              label: "Test Coverage",
              text: "11 Foundry tests via real entryPoint.handleOps calls, asserting AA24 / AA32 / AA34 EntryPoint reverts for the failure paths.",
            },
          ],
        },
        {
          heading: "Off-Chain Sponsor Service",
          bullets: [
            {
              label: "Hono Server",
              text: "Holds the sponsor key; allowlist policy is fail-closed (empty allowlist → 403). Authoritatively decides what gets sponsored, with no implicit defaults.",
            },
            {
              label: "Signature Layout",
              text: "Signs paymasterAndData in the v0.7 layout (paymaster | gas limits | validity | sig) — sign.ts mirrors SponsorPaymaster.getHash() exactly so any drift surfaces in on-chain verification, not in production.",
            },
            {
              label: "API Documentation",
              text: "Hand-written OpenAPI 3.0 spec, Redocly-linted in CI; 4 vitest tests covering signing, allowlist, fail-closed, and malformed-body paths.",
            },
          ],
        },
        {
          heading: "Next.js Dashboard",
          bullets: [
            {
              label: "Wallet Stack",
              text: "wagmi v2 + RainbowKit + viem v2. Counterfactual address derivation via factory.getAddress (view call, free).",
            },
            {
              label: "WebAuthn Enrolment",
              text: "navigator.credentials.create() with ES256, exporting the P-256 (x, y) the on-chain account stores.",
            },
            {
              label: "E2E Testing",
              text: "10 Playwright tests including passkey enrolment driven through Chromium's virtual WebAuthn authenticator via CDP — proves the full enrolment → public-key-export round-trip, not just stubs.",
            },
          ],
        },
      ],
    },
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
    year: "Jan 2026 — Current",
    category: "engineering",
    details: {
      overview:
        "Self-directed multi-chain DApp applying production-grade web dev and security discipline, with blockchain as the new integration surface.",
      sections: [
        {
          heading: "Frontend & Wallet Connector Layer",
          bullets: [
            {
              label: "Type-Safe Stack",
              text: "Next.js + TypeScript frontend with responsive UX patterns lifted from production Angular / React work.",
            },
            {
              label: "Modular Wallet Connectors",
              text: "Unified connector layer across MetaMask, Phantom, WalletConnect, and Sui Wallet — chain-aware routing without hardcoding wallet-specific quirks at the call site.",
            },
          ],
        },
        {
          heading: "Smart Contracts & On-Chain Logic",
          bullets: [
            {
              label: "EVM",
              text: "Solidity ERC-721 contracts via ethers.js and viem; The Graph for event indexing.",
            },
            {
              label: "Sui",
              text: "Move modules using @mysten/sui.js for object-centric NFT logic.",
            },
            {
              label: "Solana",
              text: "Explored Solana program calls via @solana/web3.js, covering wallet connection, devnet transfers, and account-state reads.",
            },
            {
              label: "Off-Chain Storage",
              text: "IPFS (Pinata) for NFT metadata, with Arweave evaluated as the permanence alternative.",
            },
          ],
        },
        {
          heading: "Security as First-Class",
          bullets: [
            {
              label: "Signature Verification",
              text: "SIWE-style signature verification on authenticated actions with replay-protected nonces.",
            },
            {
              label: "Hardened RPC Proxy",
              text: "Rate-limited RPC proxy with HMAC-signed internal APIs — DevSecOps patterns transferred directly from professional infrastructure work.",
            },
          ],
        },
        {
          heading: "Testing & Scalability",
          bullets: [
            {
              label: "Contract Tests",
              text: "Foundry contract unit tests plus signing-flow integration tests covering authenticated paths.",
            },
            {
              label: "Backend Contract",
              text: "OpenAPI-documented backend routes; layered architecture that scales horizontally behind the RPC proxy.",
            },
          ],
        },
      ],
    },
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
    year: "Jun 2025 — Mar 2026",
    category: "engineering",
    details: {
      overview:
        "A catalog of intentionally-vulnerable Solidity contracts paired with verified fixes, static analysis, and a wallet-authenticated PoC dashboard. Every bug is reproducible and every patch provably effective.",
      sections: [
        {
          heading: "Vulnerability Catalog & Exploit Engineering",
          bullets: [
            {
              label: "Five Classes",
              text: "Paired Vulnerable.sol / Fixed.sol for reentrancy, signature replay, access control (missing modifier + tx.origin), unchecked-math underflow, and single-block oracle manipulation — modelled on real incidents.",
            },
            {
              label: "Differential Foundry Suite",
              text: "16 tests where exploits prove the bug and fixes prove the patch closes it — CEI, EIP-712 digest binding, Ownable2Step, checked math, anchor-bounded oracle.",
            },
            {
              label: "Static Analysis",
              text: "Automated Slither runs with curated remappings; committed JSON findings ship with the repo.",
            },
            {
              label: "Sui Move Contrast",
              text: "A safe_vault module showing how Move's linear-resource type system makes several Solidity bug classes structurally impossible.",
            },
          ],
        },
        {
          heading: "Dashboard & SIWE Attestation",
          bullets: [
            {
              label: "Catalog UI",
              text: "Next.js 14 App Router dashboard hydrating each detail page from contracts/ — live source of both implementations alongside Slither output.",
            },
            {
              label: "SIWE PoC API",
              text: "Two-step EIP-4361 flow — /challenge issues single-use nonces bound to slug + address; /submit verifies via siwe, confirms the signer, records the submission.",
            },
            {
              label: "Wallet Integration",
              text: "wagmi v2 + viem v2 + RainbowKit for MetaMask / WalletConnect.",
            },
            {
              label: "API Contract",
              text: "Hand-written OpenAPI 3.0 spec, Redocly-linted in CI.",
            },
          ],
        },
        {
          heading: "End-to-End Test Automation",
          bullets: [
            {
              label: "Playwright Suite",
              text: "13 tests covering catalog UI, API, and a full SIWE round-trip with a real viem-signed message — including a nonce-replay rejection test.",
            },
            {
              label: "Verification Gate",
              text: "forge test (16/16), sui move test (2/2), Redocly lint, npm run build, and Playwright all wired into the documented quickstart.",
            },
          ],
        },
      ],
    },
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
    details: {
      overview:
        "R&D project replicating a biomedical study for glioma grading using clinical and molecular data. Acted as the bridge between research objectives and technical execution — keeping the ML workflow aligned with rigorous scientific standards and NIH-based methodologies.",
      sections: [
        {
          heading: "Research & Development",
          bullets: [
            {
              label: "Study Replication",
              text: "Directed the end-to-end project lifecycle for glioma grading, replicating the source biomedical study through precise feature selection and model evaluation.",
            },
            {
              label: "Methodology Compliance",
              text: "Reviewed project documentation against the 2022 NIH-based reference methodology and scientific protocols to keep results defensible.",
            },
            {
              label: "Technical Coordination",
              text: "Scheduled and oversaw specialised tasks involving ensemble learning (Soft Voting) and predictive modelling for high-fidelity results.",
            },
            {
              label: "Specialist Collaboration",
              text: "Facilitated continuous communication and technical alignment between machine learning specialists and data researchers throughout the study.",
            },
          ],
        },
        {
          heading: "Project Governance & Stakeholder Alignment",
          bullets: [
            {
              label: "Lifecycle Planning",
              text: "Managed the project roadmap in Jira and Miro, translating research milestones into actionable development tasks and technical sprints.",
            },
            {
              label: "Quality Assurance & Documentation",
              text: "Maintained comprehensive knowledge bases so all research findings and technical implementations were documented for reproducibility.",
            },
            {
              label: "Resource & Risk Monitoring",
              text: "Identified potential blockers in the data processing and modelling phases before they derailed the timeline.",
            },
          ],
        },
      ],
    },
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
    details: {
      overview:
        "Multidisciplinary computer vision project analysing video telemetry from vehicle-mounted cameras. Bridged data-science experiments and structured project delivery so technical breakthroughs translated cleanly into reports for academic and external stakeholders.",
      sections: [
        {
          heading: "Technical Project Control & Agile Leadership",
          bullets: [
            {
              label: "Sprint & Milestone Management",
              text: "Directed the project lifecycle using Agile methodologies, planning sprints and tracking milestones across data preprocessing and cluster analysis phases.",
            },
            {
              label: "Workflow Optimisation",
              text: "Identified and resolved technical bottlenecks so the pipeline for analysing high-volume video frame data stayed seamless.",
            },
            {
              label: "Tooling & Infrastructure",
              text: "Introduced and managed the technical ecosystem — Jira, GitHub, and ProjectLibre — to maintain structured collaboration.",
            },
            {
              label: "Resource Coordination",
              text: "Led a diverse team of specialists, aligning their efforts with strategic goals and ensuring optimal task distribution throughout the research cycle.",
            },
          ],
        },
        {
          heading: "Stakeholder Management & Technical Reporting",
          bullets: [
            {
              label: "Results Visualisation",
              text: "Translated complex clustering experiment results into clear, data-driven visualisations for presentation to external academic stakeholders.",
            },
            {
              label: "Documentation Excellence",
              text: "Established rigorous documentation standards so all research findings and technical configurations were archived and reproducible.",
            },
            {
              label: "Quality Oversight",
              text: "Monitored the integrity of data analysis workflows, ensuring results met the standards expected by academic partners and industry collaborators.",
            },
          ],
        },
      ],
    },
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
    details: {
      overview:
        "Centralised platform comparing academic research outputs across various Polish university databases. Synchronised technical workflows with academic requirements through structured team leadership and transparent stakeholder management.",
      sections: [
        {
          heading: "Project Governance & Team Leadership",
          bullets: [
            {
              label: "Workflow Organisation",
              text: "Directed a multidisciplinary team by establishing clear operational frameworks, running regular sync meetings, and managing the end-to-end project lifecycle.",
            },
            {
              label: "Strategic Task Planning",
              text: "Used Jira to plan and track complex tasks, keeping development aligned with the project roadmap and technical specifications.",
            },
            {
              label: "Specialised Delegation",
              text: "Assessed team members' technical strengths and delegated tasks accordingly, providing mentorship to maintain high standards of execution.",
            },
            {
              label: "Resource Management",
              text: "Used ProjectLibre and Miro to create detailed timelines and visualise project architecture, preventing bottlenecks in the data integration phases.",
            },
          ],
        },
        {
          heading: "Stakeholder Management & Delivery",
          bullets: [
            {
              label: "Academic Alignment",
              text: "Acted as the primary liaison for university stakeholders, making sure the platform met the rigorous data comparison standards required by academic institutions.",
            },
            {
              label: "Documentation & Reporting",
              text: "Authored and maintained comprehensive project documentation as a clear audit trail of technical decisions and platform capabilities.",
            },
            {
              label: "Presentation of Results",
              text: "Delivered final project outcomes and platform demonstrations to academic boards, highlighting the tool's impact on research visibility and data accessibility.",
            },
          ],
        },
      ],
    },
  },
];

export const experience: WorkExperience[] = [
  {
    org: "Confidential Client",
    meta: "Remote · Warsaw",
    roles: [
      {
        title: "Head of Software Engineering",
        period: "Jan 2026 — Current",
        summary:
          "Own the product and engineering lifecycle for an AI-enabled automation platform. Set roadmap and technical direction, allocate work across backend, frontend, platform, security, and operations, review architecture and delivery quality, remove blockers, and remain hands-on in Python/FastAPI, event-driven workflows, cloud infrastructure, observability, and secure releases.",
      },
      {
        title: "Head of Software Development and Security",
        period: "Jan 2026 — Jun 2026",
        summary:
          "Established the platform architecture and security strategy across multi-cloud infrastructure, CI/CD, access control, monitoring, and AI-driven analysis. Built the engineering foundations for reproducible delivery, operational resilience, and protection of source code and proprietary systems.",
      },
    ],
  },
  {
    org: "IBM",
    meta: "Full-time · Warsaw — Hybrid",
    roles: [
      {
        title: "Brand Technical Specialist",
        period: "Jan 2026 — Current",
        summary:
          "Lead technical discovery for enterprise opportunities and turn ambiguous customer needs into viable solution architectures, demos, proofs of technology, PoCs, workshops, proposals, and MVP plans. Coordinate customers, engineering, product, architecture, and sales while communicating constraints, risk, scalability, and business value.",
      },
      {
        title: "Pre-sales Engineer",
        period: "Oct 2025 — Dec 2025",
        summary:
          "Acted as the technical bridge between product capabilities and enterprise requirements, owning solution design, customer workshops, technical proof points, integration guidance, and RFP/RFI workstreams.",
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
          "Managed cross-functional delivery across fintech, SaaS, and public-sector work: requirements, Agile execution, risks, SLAs, quality, testing, deployment support, budgets, and PMO reporting. Coached team members, improved onboarding and feedback loops, and automated internal operational workflows.",
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
          "Led e-commerce projects from scoping and requirements through planning, risk management, design-to-code quality assurance, documentation, and deployment. Served as the primary client contact and translated commercial priorities into actionable technical work.",
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
          "Led delivery of data-driven products for the Allegro seller ecosystem across roadmap, backlog, sprints, risks, documentation, quality reviews, testing, and cloud releases. Coordinated stakeholders, UX, developers, and testers using Jira and Azure DevOps for transparent project reporting.",
      },
      {
        title: "Full Stack Developer",
        period: "Jan 2024 — Apr 2025",
        summary:
          "Built production analytics software across Go and Node.js APIs, PostgreSQL, Angular, Tailwind, and a WXT browser extension. Operated Docker and Kubernetes environments, CI/CD, automated tests, monitoring, and production debugging — technical depth that still shapes how I estimate and lead delivery.",
      },
    ],
  },
  {
    org: "Concepcion Ideale N2",
    meta: "Full-time · Warsaw — Remote",
    roles: [
      {
        title: "Full Stack Developer",
        period: "Jun 2022 — Oct 2023",
        summary:
          "Built and deployed a secure document-purchasing and electronic-signature platform using Node.js, Express, MySQL, JavaScript, DigitalOcean, and CI/CD. Owned database design, backend workflows, responsive UI, secure transaction handling, releases, and performance improvements.",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Leadership & Management",
    items: [
      "Technical direction",
      "Roadmaps & prioritisation",
      "Work allocation",
      "Mentoring & feedback",
      "Risk & budget management",
      "Quality governance",
    ],
  },
  {
    label: "Product & Stakeholders",
    items: [
      "Customer discovery",
      "Problem framing",
      "PoCs & MVPs",
      "Cross-functional facilitation",
      "RFP / RFI",
      "Executive communication",
    ],
  },
  {
    label: "Systems & Backend",
    items: [
      "Python / FastAPI",
      "Node.js / TypeScript",
      "Go",
      "REST / OpenAPI",
      "Event-driven architecture",
      "Distributed systems",
    ],
  },
  {
    label: "Data & AI",
    items: [
      "PostgreSQL / PostGIS",
      "BigQuery",
      "Redis",
      "Kafka",
      "ETL & ingestion",
      "LLM & agent workflows",
    ],
  },
  {
    label: "Cloud & Reliability",
    items: [
      "AWS / GCP / Azure",
      "Kubernetes",
      "Docker",
      "Terraform / OpenTofu",
      "Ansible / Argo CD",
      "Prometheus / Grafana",
    ],
  },
  {
    label: "Delivery & Security",
    items: [
      "Agile / Scrum",
      "CI/CD & GitOps",
      "Automated testing",
      "Threat modelling",
      "Secure SDLC",
      "Incident recovery",
    ],
  },
];
