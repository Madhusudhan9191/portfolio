import type {
  NavItem,
  StatItem,
  ExperienceItem,
  SkillNode,
  Project,
  Publication,
  Certification,
  BlogPost,
} from "@/types";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-madhu-9a46.vercel.app";

export const PERSONAL = {
  name: "Sai Madhu Sudhan Reddy",
  firstName: "Sai Madhu Sudhan",
  roles: ["AI / GenAI Engineer", "RAG & LLM Systems Builder", "Backend Systems Engineer", "Applied ML Engineer"],
  tagline:
    "AI engineer building production-grade RAG pipelines, LLM applications, and secure AI infrastructure — backed by 2+ years shipping backend systems for 1,000+ production users.",
  email: "madhusuravaram91@gmail.com",
  linkedin: "https://linkedin.com/in/madhusudhansuravaram",
  linkedinHandle: "/in/madhusudhansuravaram",
  github: "https://github.com/Madhusudhan9191",
  githubHandle: "/Madhusudhan9191",
  location: "Bengaluru, Karnataka, India",
  availability: "Open to AI/GenAI engineering & backend-heavy roles",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Hackathon", href: "/hackathon" },
  { label: "Research", href: "/research" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const STATS: StatItem[] = [
  { value: 2, suffix: "+", label: "Years professional backend experience" },
  { value: 1000, suffix: "+", label: "Users served in production" },
  { value: 4, suffix: "", label: "Personal AI projects shipped" },
  { value: 2, suffix: "", label: "IEEE research publications" },
  { value: 20, suffix: "+", label: "Technologies" },
];

export const ABOUT_JOURNEY = [
  { label: "Computer Science", detail: "B.Tech, MSRUAS — CGPA 8.0" },
  { label: "Artificial Intelligence", detail: "Specialization in AI & ML" },
  { label: "IEEE Research", detail: "2 published papers" },
  { label: "Software Engineer (day job)", detail: "Kallque Pvt Ltd — backend systems at scale" },
  { label: "Personal AI Projects (nights & weekends)", detail: "LLMs, RAG, secure AI infrastructure" },
  { label: "Google Build with Gemma", detail: "Top 10 nationally, hackathon build" },
];

export const ABOUT_PARAGRAPHS = [
  "I design and ship AI systems end to end — LLM applications, retrieval-augmented generation pipelines, agentic workflows, and secure AI infrastructure — with the guardrails, evaluation, and observability that make them safe to run against real data.",
  "That rigor comes from my day job: I'm a Software Engineer at Kallque Pvt Ltd, where I build and operate enterprise backend systems in Python and Java — PostgreSQL and Oracle-backed services, REST APIs, and production applications used by 1,000+ people. Reliability, database performance, and disciplined engineering are the foundation everything else is built on.",
  "I hold a B.Tech in Computer Science, specialized in Artificial Intelligence & Machine Learning, from M.S. Ramaiah University of Applied Sciences, and I've published two IEEE papers. RepoMind AI, the Enterprise AI Database Assistant, and CHAKRA are self-initiated builds on my own time — not employer work — but they're engineered to the same production standard as my day job.",
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Kallque Pvt Ltd",
    period: "April 2026 — Present",
    current: true,
    summary:
      "Own production backend services supporting 1,000+ users across the PG Owner and PG Tenant platforms.",
    responsibilities: [
      "Architected and maintained production Python/SQL backend services supporting 1,000+ users",
      "Owned root-cause analysis and resolution of 8–15 production incidents per month",
      "Led database performance analysis across 13+ production tables, resolving query bottlenecks", // TODO: add before/after latency numbers if available
      "Shipped production features end-to-end — from design through deployment — across the PG Owner and PG Tenant platforms, coordinating with product and QA at each stage", // TODO: name 1-2 specific shipped features
    ],
    tech: ["Python", "SQL", "PostgreSQL", "Oracle", "FastAPI"],
  },
  {
    role: "Trainee Software Engineer",
    company: "Kallque Pvt Ltd",
    period: "December 2024 — March 2026",
    summary:
      "Built validation logic and raised code quality across a Java/Spring Boot enterprise platform.",
    responsibilities: [
      "Resolved 100+ application and database defects across production and testing environments",
      "Built validation logic and DTO enhancements in a Java/Spring Boot platform for tenant, payment, and occupancy workflows",
      "Raised team code quality through 200+ code reviews and SonarQube-driven static analysis",
      "Optimized SQL queries and supported database debugging",
    ],
    tech: ["Java", "Spring Boot", "SQL", "SonarQube"],
  },
  {
    role: "Software Engineering Intern",
    company: "Kallque Pvt Ltd",
    period: "June 2024 — November 2024",
    summary:
      "Built foundational experience in enterprise backend development and defect investigation.",
    responsibilities: [
      "Built foundational experience in enterprise backend development, PostgreSQL, and defect investigation",
      "Learned the operational discipline of shipping and debugging real software",
      "Paired with senior engineers on database schema design",
    ],
    tech: ["Python", "SQL", "PostgreSQL", "Git"],
  },
];

export const SKILLS: SkillNode[] = [
  { name: "Python", group: "language", description: "Primary language for AI, backend, and tooling." },
  { name: "Java", group: "language", description: "Object-oriented systems and coursework." },
  { name: "JavaScript", group: "language", description: "Web interactivity and tooling." },
  { name: "TypeScript", group: "language", description: "Type-safe frontend and API contracts." },
  { name: "SQL", group: "language", description: "Query design across relational engines." },
  { name: "LLMs", group: "ai", description: "Applied large language models for reasoning tasks." },
  { name: "Prompt Engineering", group: "ai", description: "Structured prompting for reliable outputs." },
  { name: "RAG", group: "ai", description: "Retrieval-augmented generation pipelines." },
  { name: "LangChain", group: "ai", description: "Orchestration for LLM-powered applications." },
  { name: "LangGraph", group: "ai", description: "Stateful agent workflows." },
  { name: "FAISS", group: "ai", description: "Vector similarity search at scale." },
  { name: "Sentence Transformers", group: "ai", description: "Dense embeddings for semantic search." },
  { name: "TensorFlow", group: "ai", description: "Deep learning model training." },
  { name: "PyTorch", group: "ai", description: "Research-grade model development." },
  { name: "Scikit-learn", group: "ai", description: "Classical ML pipelines." },
  { name: "OpenCV", group: "ai", description: "Computer vision preprocessing." },
  { name: "Keras", group: "ai", description: "Rapid neural network prototyping." },
  { name: "NLP", group: "ai", description: "Text understanding and generation." },
  { name: "Computer Vision", group: "ai", description: "Image and video understanding." },
  { name: "AI Agents", group: "ai", description: "Autonomous, tool-using pipelines (Property Research Agent)." },
  { name: "Vector Databases", group: "ai", description: "FAISS and Qdrant for semantic retrieval at scale." },
  { name: "LLM Guardrails", group: "ai", description: "AST-based SQL validation, policy checks, and destructive-action blocking." },
  { name: "AI Observability", group: "ai", description: "Latency, retrieval, and error-rate telemetry across the request path." },
  { name: "Evaluation & Testing", group: "ai", description: "Accuracy, recovery, and attack-pattern test suites for LLM-generated output." },
  { name: "FastAPI", group: "backend", description: "High-performance async APIs." },
  { name: "Flask", group: "backend", description: "Lightweight service endpoints." },
  { name: "REST APIs", group: "backend", description: "Contract-first service design." },
  { name: "JWT", group: "backend", description: "Stateless authentication." },
  { name: "Docker", group: "backend", description: "Containerized, reproducible deployments." },
  { name: "React", group: "frontend", description: "Component-driven interfaces." },
  { name: "Next.js", group: "frontend", description: "Full-stack React framework." },
  { name: "Tailwind CSS", group: "frontend", description: "Utility-first styling system." },
  { name: "HTML", group: "frontend", description: "Semantic document structure." },
  { name: "CSS", group: "frontend", description: "Layout, motion, and visual design." },
  { name: "PostgreSQL", group: "database", description: "Primary relational database." },
  { name: "Oracle", group: "database", description: "Enterprise database systems." },
  { name: "MySQL", group: "database", description: "Relational data storage." },
  { name: "SQLite", group: "database", description: "Embedded, file-based storage." },
  { name: "Pandas", group: "data", description: "Tabular data manipulation." },
  { name: "NumPy", group: "data", description: "Numerical computing foundation." },
  { name: "PySpark", group: "data", description: "Distributed data processing." },
  { name: "Power BI", group: "data", description: "Business intelligence dashboards." },
  { name: "Excel", group: "data", description: "Rapid analysis and reporting." },
  { name: "Matplotlib", group: "data", description: "Data visualization." },
];

export const SKILL_GROUPS: Record<SkillNode["group"], { label: string; color: string }> = {
  language: { label: "Programming", color: "var(--primary)" },
  ai: { label: "AI & Machine Learning", color: "var(--secondary)" },
  backend: { label: "Backend", color: "var(--accent)" },
  frontend: { label: "Frontend", color: "var(--primary)" },
  database: { label: "Databases", color: "var(--secondary)" },
  data: { label: "Data & Analytics", color: "var(--accent)" },
};

export const PROJECTS: Project[] = [
  {
    slug: "repomind-ai",
    index: "01",
    name: "RepoMind AI",
    tagline:
      "An enterprise-grade hybrid RAG platform that enables intelligent, cited question answering over multi-language software repositories and technical documentation.",
    problem:
      "Engineers lose hours navigating large, unfamiliar codebases and scattered documentation just to answer questions a teammate could answer in seconds — if they were available.",
    solution:
      "A retrieval-augmented generation platform that ingests multi-language repositories, indexes them with hybrid dense + lexical search, and delivers cited, streamed answers with sub-35ms retrieval latency.",
    challenges: [
      "Chunking multi-language source code in a way that preserves AST logical boundaries instead of splitting mid-function",
      "Merging dense vector recall with exact symbol/keyword lexical matching across repository-scale codebases",
      "Ingesting large repositories incrementally without spending compute re-embedding unchanged files",
    ],
    decisions: [
      "Built a Hybrid Chunking Engine combining Python AST parsers with language-aware sliding line windows for JS, TS, React, MD, JSON, and YAML",
      "Implemented Candidate Union combining Qdrant dense vector search with in-memory Okapi BM25 lexical search",
      "Applied explicit hybrid reranking (dense + BM25 + code symbol overlap) and line-level context compression lowering prompt token cost by ~28%",
      "Created an SHA-256 incremental hash manifest skipping unchanged files with automatic vector deletion sync",
    ],
    lessons:
      "Precision at the top of the candidate set matters more than raw embedding model scale — combining lexical symbol matching with dense vectors drastically improves code RAG quality.",
    tech: ["FastAPI", "React", "Qdrant", "Okapi BM25", "Sentence Transformers", "Docker", "Nginx", "JWT"],
    pipeline: [{ label: "Repository" }, { label: "SHA-256 Hashing" }, { label: "Hybrid Chunking" }, { label: "Qdrant Vector DB" }, { label: "BM25 Search" }, { label: "Hybrid Reranker" }, { label: "Context Compression" }, { label: "Streaming LLM" }, { label: "Cited Answer" }],
    features: [
      "Hybrid Multi-Language Code Chunking Engine (Python AST + line-sliding window for JS/TS/MD/YAML/JSON/Dockerfiles)",
      "Candidate Union combining Qdrant dense vector search with Okapi BM25 lexical keyword matching",
      "Explicit hybrid reranking scoring formula combining dense similarity, BM25 scores, and code symbol overlap",
      "SHA-256 incremental hash manifest skipping unchanged files with automatic Qdrant vector deletion sync",
      "Quantitative evaluation framework measuring Precision@5, Recall@5, MRR, and context compression",
    ],
    metrics: [
      { value: "<35ms", label: "Hybrid retrieval latency" },
      { value: "9-stage", label: "Retrieval & evaluation pipeline" },
    ],
    github: "https://github.com/Madhusudhan9191/RepoMindAI",
    accent: "secondary",
  },
  {
    slug: "ai-database-assistant",
    index: "02",
    name: "Enterprise AI Database Assistant",
    tagline:
      "An AI-powered analytics platform that converts natural language into SQL queries and generates business insights across 3 database engines.",
    problem:
      "Business teams needed answers from PostgreSQL and Oracle databases but depended entirely on engineers to write every query — a bottleneck that slowed decisions down to a crawl.",
    solution:
      "A natural-language interface backed by an LLM that generates SQL, validates it before execution, and turns the results into charts and narrative insights automatically.",
    challenges: [
      "Preventing destructive or unsafe SQL from an LLM that occasionally hallucinates schema details",
      "Supporting three SQL dialects — PostgreSQL, MySQL, and Oracle — from one generation layer",
      "Keeping response latency low while adding a self-healing repair pass after generation",
    ],
    decisions: [
      "Added a dedicated AST/keyword validator before execution, blocking destructive statements entirely",
      "Built a self-healing repair loop: on SQL error, the exception is fed back to the LLM to regenerate",
      "Kept schema context tightly scoped per request using a Schema RAG retriever to reduce hallucination",
    ],
    lessons:
      "The hard part was never getting the LLM to write SQL — it was building the guardrails around it that make that SQL safe to run against production data.",
    tech: ["FastAPI", "React", "PostgreSQL", "Oracle", "MySQL", "Groq LLM", "Docker", "JWT"],
    pipeline: [{ label: "User" }, { label: "Intent Extractor" }, { label: "Schema RAG" }, { label: "SQL Generator" }, { label: "AST Validator" }, { label: "Database" }, { label: "Analytics" }, { label: "Visualization" }],
    features: [
      "Schema-aware NL-to-SQL pipeline (28 REST APIs, 18 UI routes) reaching 91% first-attempt accuracy",
      "Self-healing SQL repair loop recovering 80% of failed queries via live exception feedback",
      "LLM-driven BI: KPI generation, insights, and chart recommendations at 95% recommendation accuracy",
      "JWT/RBAC with AST-based SQL-injection defense, blocking 100% of 12 tested attack patterns across 34 automated tests",
    ],
    metrics: [
      { value: "91%", label: "NL-to-SQL first-attempt accuracy" },
      { value: "80%", label: "Failed queries auto-recovered" },
      { value: "100%", label: "Tested attack patterns blocked" },
    ],
    github: "https://github.com/Madhusudhan9191/ai-database-assistant",
    accent: "primary",
  },
  {
    slug: "ab-test-workbench",
    index: "03",
    name: "A/B Test Analysis Workbench",
    tagline:
      "A reproducible statistical experimentation engine and dual-presentation dashboard (Power BI + Streamlit) implementing CUPED, Welch t-tests, and Monte Carlo peeking simulations.",
    problem:
      "Product teams often misinterpret A/B test results due to underpowered tests, false-positive inflation from daily peeking, or uncaptured secondary metric regressions.",
    solution:
      "A statistical experimentation workbench built on simulated e-commerce data with known ground truth, featuring CUPED variance reduction, power calculations, pre-registered subgroup analysis, and Difference-in-Differences causal inference.",
    challenges: [
      "Validating CUPED variance reduction without biasing treatment effect estimates",
      "Demonstrating false-positive rate inflation under daily peeking Monte Carlo trials",
      "Structuring clean star-schema relational exports for interactive Power BI dashboards",
    ],
    decisions: [
      "Used pre-period average daily revenue as the CUPED covariate before random assignment",
      "Built DuckDB SQL aggregations to convert daily customer panels into analysis-ready tables",
      "Created a 6-page interactive Power BI star schema model with DAX measures alongside a Streamlit developer viewer",
    ],
    lessons:
      "CUPED delivers tighter confidence intervals rather than forcing identical point estimates — theta estimation noise is natural in finite samples. Repeated peeking inflates false-positive rates by over 4x under a true null effect.",
    tech: ["Python", "Pandas", "NumPy", "DuckDB", "Statsmodels", "SciPy", "Power BI", "Streamlit", "Pytest"],
    pipeline: [{ label: "Daily Panel" }, { label: "DuckDB SQL" }, { label: "Power Analysis" }, { label: "CUPED Adj" }, { label: "Welch t-test" }, { label: "Monte Carlo Peeking" }, { label: "Star Schema CSVs" }, { label: "Power BI" }],
    features: [
      "CUPED variance reduction achieving ~7.8% outcome variance reduction without extra sample cost",
      "Monte Carlo peeking simulation demonstrating 4.2x false-positive rate inflation (from 5.3% to 21.1%)",
      "Guardrail testing and pre-registered subgroup analysis over pre-period revenue terciles",
      "Difference-in-Differences and Synthetic Control causal inference module for non-randomized rollouts",
    ],
    metrics: [
      { value: "~7.8%", label: "Variance reduction via CUPED" },
      { value: "4.2x", label: "False-positive inflation from peeking" },
    ],
    github: "https://github.com/Madhusudhan9191/AB-Test-Analysis-Workbench",
    accent: "primary",
  },
  {
    slug: "property-research-agent",
    index: "04",
    name: "Property Research Agent",
    tagline:
      "An autonomous AI agent that researches, analyzes, and ranks property listings using web search and LLM reasoning.",
    problem:
      "Finding and comparing properties across multiple real estate portals requires hours of manual searching, reading, and cross-referencing — a tedious process with no structured output.",
    solution:
      "An agentic pipeline that takes a city and budget, autonomously generates search queries, scrapes listings, extracts structured data with an LLM, and produces a ranked comparison dashboard.",
    challenges: [
      "Generating broad, diverse search queries to avoid missing listings on niche portals",
      "Reliably extracting structured fields (price, size, amenities) from inconsistently formatted pages",
      "Ranking properties fairly across very different listing formats and data completeness",
    ],
    decisions: [
      "Used the LLM to generate search queries rather than hardcoding them, improving portal coverage",
      "Ran scraping asynchronously with httpx for speed across multiple URLs simultaneously",
      "Delegated comparison and ranking to the LLM with a structured Pydantic output schema",
    ],
    lessons:
      "Letting the LLM generate its own search queries rather than templating them dramatically improved coverage and relevance of results.",
    tech: ["Python", "Groq", "Llama 3.3 70B", "Streamlit", "DuckDuckGo", "BeautifulSoup", "Pydantic"],
    pipeline: [{ label: "City + Budget" }, { label: "LLM Query Gen" }, { label: "DuckDuckGo" }, { label: "Async Scraper" }, { label: "LLM Extractor" }, { label: "Ranker" }, { label: "Dashboard" }],
    features: [
      "Autonomous research from a single city + budget input — no manual search needed",
      "LLM-generated search queries for broader real estate portal coverage",
      "Async web scraping with BeautifulSoup for parallel property extraction",
      "AI-powered comparison, ranking, and top-pick recommendation with pros/cons",
    ],
    metrics: [
      { value: "Autonomous", label: "End-to-end research pipeline" },
      { value: "Free tier", label: "Groq + DuckDuckGo — zero API cost" },
    ],
    github: "https://github.com/Madhusudhan9191/Property-Research-Agent",
    accent: "accent",
  },
  {
    slug: "heart-rate-estimation",
    index: "05",
    name: "Real-Time Heart Rate Estimation from Facial Video",
    tagline:
      "A research project estimating heart rate from facial video using remote photoplethysmography — published in IEEE.",
    problem:
      "Contact-based heart rate monitoring requires dedicated hardware, which isn't always available or comfortable, especially for continuous or remote monitoring.",
    solution:
      "A computer vision pipeline that detects the face, isolates a stable region of interest, and extracts a heart rate signal purely from subtle color changes in facial video.",
    challenges: [
      "Keeping the region of interest stable under natural head movement",
      "Filtering out lighting noise that swamps the true physiological signal",
      "Validating accuracy against ground-truth heart rate measurements",
    ],
    decisions: [
      "Used face tracking to continuously re-anchor the region of interest per frame",
      "Applied bandpass filtering before FFT to isolate the physiological frequency range",
      "Benchmarked results against a reference pulse oximeter for validation",
    ],
    lessons:
      "Signal processing discipline mattered as much as the computer vision — the FFT stage is where accuracy is won or lost.",
    tech: ["OpenCV", "Face Detection", "Signal Processing", "FFT", "Python"],
    pipeline: [{ label: "Facial Video" }, { label: "Face Detection" }, { label: "ROI Extraction" }, { label: "Signal Processing" }, { label: "FFT" }, { label: "Heart Rate" }],
    features: [
      "Contact-free heart rate estimation from standard webcam video",
      "Region-of-interest extraction with face-tracking stability",
      "Frequency-domain signal analysis via FFT",
      "Findings published as an IEEE research paper",
    ],
    metrics: [
      { value: "IEEE", label: "Published research paper" },
      { value: "68–80%", label: "Accuracy across 200+ samples" },
    ],
    demo: "https://ieeexplore.ieee.org/abstract/document/10080014/",
    accent: "primary",
  },
];


export const CHAKRA = {
  name: "CHAKRA",
  tagline: "A personal hackathon project — AI-native GST compliance and fraud detection for Indian SMEs, running fully offline.",
  problem:
    "Indian SMEs file GST returns manually or through disconnected tools, leaving fraud patterns like circular trading and duplicate invoices to surface only during costly audits — long after the damage is done.",
  opportunity:
    "Millions of GST-registered SMEs need continuous compliance monitoring, not annual reviews. Most existing tools require sending sensitive financial data to the cloud — a non-starter for many finance teams.",
  solution:
    "CHAKRA runs entirely offline, combining a deterministic rule engine, graph-based fraud detection, and a locally-hosted Gemma model to flag risk and generate compliance reports without financial data ever leaving the device.",
  pipeline: [{ label: "Invoice Upload" }, { label: "Gemma OCR" }, { label: "Field Extraction" }, { label: "Rule Engine" }, { label: "Graph Analysis" }, { label: "Risk Scoring" }, { label: "Compliance Report" }],
  features: [
    { title: "Offline AI", detail: "Runs entirely on-device via LM Studio + Gemma 4 — no financial data ever leaves the machine." },
    { title: "Fraud Detection", detail: "NetworkX graph analysis surfaces circular trading and duplicate invoice patterns." },
    { title: "Compliance Engine", detail: "Deterministic rule engine + Gemma-drafted audit-ready compliance documents." },
    { title: "Evidence Playback", detail: "Step-by-step replay of exactly how CHAKRA reached each conclusion — no black box." },
  ],
  github: "https://github.com/Madhusudhan9191/Chakravyuh",
  techStack: ["Gemma 4 (LM Studio)", "FastAPI", "NetworkX", "Pytesseract", "Pillow", "Rule Engine"],
  businessValue: [
    "Continuous compliance instead of reactive, once-a-year audits",
    "Zero data egress — a requirement for finance teams handling sensitive records",
    "Fraud patterns surfaced before they compound into filing penalties",
  ],
  customers: ["GST-registered SMEs", "Accounting & CA firms", "Finance teams at growing startups"],
  roadmap: [
    "Multi-entity consolidated risk dashboards",
    "Automated notice-response drafting",
    "Plug-in connectors for common accounting software",
  ],
};

export const PUBLICATIONS: Publication[] = [
  {
    title: "AI Methodologies in Upcoming Modern Warfare Systems",
    venue: "IEEE",
    blurb: "An examination of applied AI methodologies relevant to modern defense and warfare systems.",
    url: "https://ieeexplore.ieee.org/abstract/document/10467974/",
  },
  {
    title: "Real-Time Estimation of Heart Rate from Facial Video",
    venue: "IEEE",
    blurb: "A contact-free approach to heart rate estimation using facial video and signal processing.",
    url: "https://ieeexplore.ieee.org/abstract/document/10080014/",
  },
];

export const CERTIFICATIONS: Certification[] = [
  { name: "A360 Certification", issuer: "Automation Anywhere", status: "Completed" },
  { name: "Data Analytics", issuer: "Certification", status: "Completed" },
  { name: "Power BI", issuer: "Certification", status: "In Progress" },
];

export const BLOG_POSTS: BlogPost[] = [
  { slug: "rag-is-a-product-problem", title: "RAG is a product problem before it is a retrieval problem", excerpt: "Why useful AI answers depend on evaluation, context design, and graceful failure modes—not just a vector database.", category: "Applied AI", readTime: "6 min read", date: "Coming soon" },
  { slug: "safe-text-to-sql", title: "Designing a safer text-to-SQL interface", excerpt: "The guardrails, validation layers, and human controls that make natural-language analytics practical around real data.", category: "Systems", readTime: "8 min read", date: "Coming soon" },
  { slug: "shipping-ai-systems", title: "Shipping AI systems with an engineer's discipline", excerpt: "A field guide to observability, latency budgets, evaluation loops, and building trust into AI-enabled products.", category: "Engineering", readTime: "5 min read", date: "Coming soon" },
];
