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
  roles: ["Data Scientist", "AI / GenAI Engineer", "Software Engineer", "Machine Learning Specialist"],
  tagline:
    "3 years of engineering impact bridging statistical Data Science, production AI/RAG architectures, and scalable Software Engineering — building calibrated ML pipelines, autonomous agents, and enterprise backends serving 1,000+ users.",
  email: "madhusuravaram91@gmail.com",
  linkedin: "https://linkedin.com/in/madhusudhansuravaram",
  linkedinHandle: "/in/madhusudhansuravaram",
  github: "https://github.com/Madhusudhan9191",
  githubHandle: "/Madhusudhan9191",
  location: "Bengaluru, Karnataka, India",
  availability: "Open to Data Scientist, AI/GenAI Engineer & Senior Backend roles",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" },
];

export const STATS: StatItem[] = [
  { value: 3, suffix: "+", label: "Years Experience (Data Science, AI & Backend)" },
  { value: 1000, suffix: "+", label: "Users served in production" },
  { value: 9, suffix: "", label: "Production & ML systems shipped" },
  { value: 2, suffix: "", label: "IEEE research publications" },
  { value: 25, suffix: "+", label: "Technologies mastered" },
];

export const ABOUT_JOURNEY = [
  { label: "Computer Science & AI", detail: "B.Tech, MSRUAS — CGPA 8.0, Specialization in AI & ML" },
  { label: "Software Engineering (3 Years)", detail: "Kallque Pvt Ltd — enterprise backend microservices & database systems at scale" },
  { label: "Data Science & Applied ML", detail: "Conformal uncertainty, LightGBM delay risk, causal inference, and time-series forecasting" },
  { label: "AI & GenAI Systems", detail: "Production RAG platforms, AST code parsing, autonomous agents, and LLM guardrails" },
  { label: "IEEE Publications", detail: "2 peer-reviewed research papers on remote physiological sensing and modern AI methodologies" },
  { label: "Google Build with Gemma", detail: "Top 10 nationally, national AI hackathon finalist" },
];

export const ABOUT_PARAGRAPHS = [
  "I operate at the convergence of three disciplines that rarely meet in a single engineer: Data Science, AI Engineering, and Software Engineering. Over 3 years of hands-on impact, I have designed and scaled production backend services for 1,000+ users, engineered enterprise-grade RAG and autonomous agent architectures, and built rigorously calibrated machine learning and time-series forecasting pipelines with statistical guarantees.",
  "As a Data Scientist, I prioritize empirical discipline over hype: rolling conformal prediction to maintain coverage under non-stationary climate drift, causal A/B testing with CUPED variance reduction, isotonic probability calibration for cost-sensitive logistics dispatch, and dimensional data warehousing.",
  "As an AI Engineer, I ground large language models in enterprise context: building hybrid multi-language AST code chunkers (<35ms retrieval latency), Qdrant + BM25 reciprocal rank fusion, self-healing SQL generation with AST guardrails, and autonomous tool-using agents.",
  "As a Software Engineer, I bring production rigor to every model and service: writing clean, tested, containerized services in Python, FastAPI, Java/Spring Boot, PostgreSQL, and Docker, backed by automated unit tests, query optimization, and resilient CI/CD pipelines.",
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Engineer — Backend & Data Solutions",
    company: "Kallque Pvt Ltd",
    period: "April 2026 — Present",
    current: true,
    summary:
      "Lead production backend microservices and database optimization supporting 1,000+ users across the PG Owner and PG Tenant platforms.",
    responsibilities: [
      "Architected and scaled production Python/FastAPI and SQL backend services serving 1,000+ active production users with 99.9% availability",
      "Led database performance tuning across 13+ core production tables in PostgreSQL & Oracle, indexing high-traffic access paths and cutting query response latency",
      "Owned automated telemetry, logging, and root-cause resolution for 8–15 complex production incidents per month, driving MTTR reductions",
      "Shipped end-to-end features spanning tenant workflows, automated billing pipelines, and real-time occupancy reporting, coordinating closely with product and QA",
    ],
    tech: ["Python", "FastAPI", "SQL", "PostgreSQL", "Oracle", "Docker", "REST APIs"],
  },
  {
    role: "Trainee Software & ML Systems Engineer",
    company: "Kallque Pvt Ltd",
    period: "December 2024 — March 2026",
    summary:
      "Engineered business validation workflows, automated defect triage logic, and optimized queries across an enterprise Java/Spring Boot stack.",
    responsibilities: [
      "Resolved 100+ application and database defects across staging and production environments, hardening payment and occupancy pipelines",
      "Implemented robust server-side validation logic and data transfer enhancements in Java/Spring Boot, preventing edge-case transaction failures",
      "Raised repository code quality and test coverage through 200+ technical code reviews and SonarQube automated static analysis",
      "Analyzed relational execution plans, rewritten slow joins, and authored stored procedures for recurring operational reporting",
    ],
    tech: ["Java", "Spring Boot", "SQL", "PostgreSQL", "SonarQube", "Git"],
  },
  {
    role: "Data Science & Software Engineering Intern",
    company: "Kallque Pvt Ltd",
    period: "June 2024 — November 2024",
    summary:
      "Developed foundational expertise in enterprise backend development, relational schema design, and automated data extraction.",
    responsibilities: [
      "Built foundational expertise in enterprise backend development, PostgreSQL schema design, and defect investigation workflows",
      "Authored automated Python scripts for database migrations, operational data profiling, and regression testing",
      "Collaborated with senior engineers on query indexing strategies and learned the operational discipline of shipping zero-regression code",
    ],
    tech: ["Python", "SQL", "PostgreSQL", "Pandas", "Git"],
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
  { name: "Tableau", group: "data", description: "Interactive executive BI analytics and LOD scenario simulation." },
  { name: "DuckDB", group: "database", description: "High-performance analytical in-process SQL engine." },
  { name: "LightGBM", group: "ai", description: "High-performance gradient boosting for tabular ML and risk ranking." },
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

export interface DisciplinePillar {
  id: string;
  title: string;
  role: string;
  tagline: string;
  iconName: string;
  accent: "primary" | "secondary" | "accent";
  competencies: string[];
  flagshipProjects: { name: string; slug: string; metric: string }[];
}

export const DISCIPLINE_PILLARS: DisciplinePillar[] = [
  {
    id: "data-scientist",
    title: "Data Science & Predictive ML",
    role: "Data Scientist",
    tagline: "Statistical causal inference, conformal uncertainty calibration, time-series forecasting, and cost-sensitive risk scoring.",
    iconName: "TrendingUp",
    accent: "primary",
    competencies: [
      "Rolling Conformal Prediction (Adaptive Interval Coverage)",
      "Time-Series Load Forecasting (TEX / PJM / NYISO)",
      "Isotonic Probability Calibration & Brier Optimization",
      "Causal Inference & Variance Reduction (CUPED, DiD)",
      "TreeSHAP Interpretability & Feature Drift Telemetry",
    ],
    flagshipProjects: [
      { name: "Electricity Demand Forecasting", slug: "electricity-demand-forecasting", metric: "2,784 MW MAE · 76.7%–79.3% Coverage" },
      { name: "Olist Delivery Delay Risk ML", slug: "olist-delay-risk-ml", metric: "0.892 ROC-AUC · 0.042 Brier Score" },
      { name: "A/B Testing & Causal Inference", slug: "ab-test-workbench", metric: "~7.8% CUPED Variance Reduction" },
    ],
  },
  {
    id: "ai-engineer",
    title: "AI & GenAI Systems Engineering",
    role: "AI / GenAI Engineer",
    tagline: "Enterprise RAG pipelines, AST-aware code chunking, hybrid vector + lexical search, self-healing SQL, and autonomous agents.",
    iconName: "Brain",
    accent: "secondary",
    competencies: [
      "Hybrid Multi-Language AST Chunking Engines",
      "Reciprocal Rank Fusion (Qdrant Vector DB + BM25)",
      "Self-Healing SQL Generation with AST Guardrails",
      "Autonomous Tool-Using Agent Architectures",
      "Quantitative RAG Evaluation Suites (Precision@K, MRR)",
    ],
    flagshipProjects: [
      { name: "RepoMind AI (Hybrid Code RAG)", slug: "repomind-ai", metric: "<35ms Retrieval · 9-Stage Pipeline" },
      { name: "Enterprise AI Database Assistant", slug: "ai-database-assistant", metric: "3 Dialects · Self-Healing SQL" },
      { name: "Autonomous Property Research Agent", slug: "property-research-agent", metric: "Multi-Step Web Tool Agent" },
    ],
  },
  {
    id: "software-engineer",
    title: "Production Software & Systems",
    role: "Software Engineer",
    tagline: "3 years shipping reliable production microservices, database performance tuning, and dimensional analytics warehouses.",
    iconName: "Code2",
    accent: "accent",
    competencies: [
      "Python / FastAPI Microservices & Async Endpoints",
      "Java / Spring Boot Enterprise Workflows",
      "PostgreSQL / Oracle Query Optimization (13+ Tables)",
      "Dimensional Warehousing (Kimball Star Schema, 63 DAX)",
      "Docker Containerization & Automated CI/CD Testing",
    ],
    flagshipProjects: [
      { name: "Enterprise AI Database Assistant", slug: "ai-database-assistant", metric: "Production Database Backend" },
      { name: "Olist Delivery Analytics Suite", slug: "olist-delivery-analytics", metric: "63 / 63 DAX Reconciled · 99.4K Orders" },
      { name: "Retail Commercial What-If Simulator", slug: "retail-sales-profitability-analytics", metric: "34 / 34 SQL Checks PASS · +$42K Margin" },
    ],
  },
];

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
  {
    slug: "electricity-demand-forecasting",
    index: "06",
    name: "Day-Ahead Electricity Demand Forecasting with Conformal Uncertainty",
    tagline:
      "An offline machine learning forecasting and rolling conformal calibration system across TEX (ERCOT), MIDA (PJM), and NY (NYISO) grid footprints with a 3-way Tableau reconciliation engine.",
    problem:
      "System operators require day-ahead 24-hour load forecasts committed at 10:00 AM on Day D-1 (forcing all demand lags to be >= 48h to prevent look-ahead leakage) and calibrated prediction intervals that maintain empirical coverage under extreme weather events and multi-year load growth.",
    solution:
      "Engineered an offline gradient-boosted forecasting pipeline refit on 26,280 hours across 2021–2023 and evaluated on a single-touch Calendar 2024 holdout (8,784 hrs/region), paired with rolling conformal prediction ribbons and a programmatic 3-way reconciliation audit between Python, SQLite, and Tableau Desktop.",
    challenges: [
      "Strict operational lead-time: forcing all autoregressive demand lags to >= 48 hours to prevent future information leakage at the 10:00 AM D-1 forecast origin",
      "Structural tree extrapolation failure in high-growth grids like Texas (+18% 4-year growth) causing persistent negative model bias",
      "Conformal interval coverage degradation under seasonal weather volatility and extreme winter freeze events (Winter Storm Uri & Elliott)",
    ],
    decisions: [
      "Formulated and reported both HistGradientBoosting_Point_Conformal and a level-anchored Residual model side-by-side on the 2024 holdout with full protocol disclosure",
      "Implemented 21-day rolling conformal prediction to adapt interval width to current volatility, achieving 76.7%–79.3% holdout coverage in nominal 80% band",
      "Engineered population-weighted multi-city ERA5 weather features and Fourier harmonic diurnal/weekly seasonality terms",
      "Built an automated 3-layer reconciliation engine independently querying Python, SQLite, and Tableau Desktop exports to verify 9/9 operational metrics with zero manual entry",
    ],
    lessons:
      "Evaluating models against weak 168-hour seasonal naive baselines masks structural limitations — recent-origin 48h naive baselines prove much harder to beat in rapidly expanding grids (+20% skill margin in Texas vs +60% in Mid-Atlantic and New York).",
    tech: ["Python", "scikit-learn", "LightGBM", "Conformal Prediction", "Tableau", "SQLite", "DuckDB", "Open-Meteo ERA5"],
    pipeline: [
      { label: "EIA-930 + ERA5" },
      { label: "Point-in-Time Lags (>=48h)" },
      { label: "Fourier Seasonality" },
      { label: "Rolling Backtest (2023)" },
      { label: "Refit (26,280h)" },
      { label: "Holdout (2024)" },
      { label: "Conformal Ribbon" },
      { label: "3-Way Reconciliation" },
    ],
    features: [
      "Multi-region day-ahead hourly forecasting across TEX (ERCOT), MIDA (PJM), and NY (NYISO) footprints",
      "Point-in-time safe feature pipeline enforcing >=48h minimum lag to eliminate forecast origin leakage",
      "Rolling conformal prediction intervals providing dynamic volatility-adaptive ribbons (80% & 95% nominal)",
      "Counterfactual weather sensitivity stress testing (+2°C & +5°C) evaluated against model baseline (ΔT=0)",
      "Programmatic 3-way reconciliation pipeline verifying Python, SQL, and Tableau UI metrics with zero manual entry",
    ],
    metrics: [
      { value: "2,784 MW", label: "TEX Holdout MAE" },
      { value: "76.7%–79.3%", label: "Calibrated 80% Coverage" },
      { value: "9 / 9 PASS", label: "3-Way Reconciliation" },
    ],
    github: "https://github.com/Madhusudhan9191/electricity-demand-forecasting",
    accent: "primary",
  },
  {
    slug: "olist-delay-risk-ml",
    index: "07",
    name: "E-Commerce Delivery Delay Risk Model & Operational Early-Warning System",
    tagline:
      "Point-in-time carrier-handover machine learning classifier and Power BI operational dispatch queue predicting late delivery probabilities on 99K orders.",
    problem:
      "In an e-commerce marketplace, late deliveries erode customer satisfaction and drive churn. Operations and logistics support teams have finite bandwidth: they cannot manually track or escalate all outbound shipments and need early scoring at the exact moment of carrier handover.",
    solution:
      "An end-to-end classification system using LightGBM and isotonic calibration with point-in-time features strictly observable at carrier handover, deployed to an interactive Power BI operational dashboard with priority dispatch queues, SHAP explainability, and rolling drift monitoring.",
    challenges: [
      "Preventing future look-ahead leakage by strictly isolating signals available at the carrier handover timestamp",
      "Extreme class imbalance (~6.7% late delivery base rate) requiring precision-recall optimization over standard accuracy",
      "Model probability calibration drift across expanding regional logistics corridors and seasonal holiday volume surges",
    ],
    decisions: [
      "Trained and tuned LightGBM with cost-sensitive threshold tuning optimizing F2-score to prioritize recall of at-risk orders",
      "Applied Isotonic Probability Calibration achieving a Brier score of 0.042 and near-perfect alignment across risk deciles",
      "Computed TreeSHAP values for global and local explainability, surfacing freight distance, promised buffer, and seller transit history as top drivers",
      "Exported calibrated scores and risk tiers to Power BI with priority queueing and automated monthly feature drift monitoring",
    ],
    lessons:
      "Uncalibrated raw model probabilities lead to false operational alerts — calibrating probabilities to empirical risk deciles transforms ML scores into trusted, actionable priority queues for logistics dispatchers.",
    tech: ["Python", "LightGBM", "SHAP", "scikit-learn", "Power BI", "DAX", "DuckDB", "Pandas"],
    pipeline: [
      { label: "Kaggle Olist 99K" },
      { label: "Handover Cutoff" },
      { label: "Feature Engineering" },
      { label: "LightGBM Classifier" },
      { label: "Isotonic Calibration" },
      { label: "SHAP Explainer" },
      { label: "Risk Tiers" },
      { label: "Power BI Queue" },
    ],
    features: [
      "Point-in-time safe feature pipeline isolating handling time, handover slack, route distance, and historical seller reliability",
      "Isotonically calibrated risk scoring with threshold optimization for operations team capacity constraints",
      "Interactive Power BI 6-page operational suite featuring dispatch triage queue, regional risk maps, and model card",
      "SHAP attribution waterfall explaining top risk factors for individual at-risk customer shipments",
      "Automated data drift and performance monitoring tracking monthly prevalence, PSI, and Brier score stability",
    ],
    metrics: [
      { value: "0.892", label: "ROC-AUC Score" },
      { value: "0.042", label: "Calibrated Brier Score" },
      { value: "6.7% → 78%", label: "High-Risk Tier Precision" },
    ],
    github: "https://github.com/Madhusudhan9191/03_PowerBI_Olist_Delay_Risk_ML",
    accent: "secondary",
  },
  {
    slug: "olist-delivery-analytics",
    index: "08",
    name: "Olist E-Commerce Delivery Performance & Customer Satisfaction Analytics",
    tagline:
      "Comprehensive analytical data product and Power BI executive intelligence suite investigating SLA penalties, regional bottlenecks, and review score impacts across 99K orders.",
    problem:
      "Marketplace leadership lacked empirical clarity on how logistics bottlenecks, seller fulfillment delays, and inflated delivery promises impact customer satisfaction and repeat purchase retention across Brazilian states.",
    solution:
      "Architected a dimensional data warehouse (Star Schema) in SQL/DuckDB, authored 63 auditable DAX measures, tested four formal business hypotheses with statistical rigor, and delivered an executive Power BI reporting suite with 3-way reconciliation.",
    challenges: [
      "Complex multi-table order, item, payment, and review lifecycle data with asynchronous review submission timing",
      "Separating carrier transit delays from seller handling delays across vast interstate shipping corridors",
      "Ensuring 100% calculation integrity between raw SQL aggregations, Python data profiling, and Power BI DAX measures",
    ],
    decisions: [
      "Constructed a certified Kimball star schema with 5 dimensions and 3 fact tables (delivery, items, payments)",
      "Tested H1–H4 hypotheses proving late delivery incurs a -1.82 star review penalty, with reviews submitted pre-delivery biasing unadjusted metrics",
      "Authored 63 fully documented DAX measures validated through an automated test harness against DuckDB control totals",
      "Designed a 4-page responsive Power BI report covering executive KPIs, delivery performance, regional corridors, and satisfaction drivers",
    ],
    lessons:
      "Timing of review collection creates massive survivorship bias: customers reviewing orders before arrival award 4.3 stars, but post-arrival delayed orders drop to 2.2 stars — controlling for review timing is critical for honest customer sentiment analytics.",
    tech: ["Power BI", "DAX", "SQL", "PostgreSQL", "DuckDB", "Python", "Power Query M"],
    pipeline: [
      { label: "Olist Raw CSVs" },
      { label: "Data Profiling" },
      { label: "Star Schema DWH" },
      { label: "SQL Hypothesis Engine" },
      { label: "DAX Measures (63)" },
      { label: "3-Way Reconciliation" },
      { label: "Power BI Suite" },
    ],
    features: [
      "Certified Kimball star schema modeling 99,441 orders with audited referential integrity and zero orphan records",
      "Hypothesis testing engine evaluating SLA penalties, state mix adjustments, seller cohorts, and freight burden",
      "Interactive 4-page Power BI executive suite with dynamic decomposition trees, corridor heatmaps, and cohort analysis",
      "63 production DAX measures verified with an automated evaluation script against database ground truth",
      "Comprehensive analytical documentation including KPI dictionary, data lineage, and interview defense guide",
    ],
    metrics: [
      { value: "-1.82★", label: "Late delivery review penalty" },
      { value: "63 / 63", label: "DAX measures reconciled" },
      { value: "99,441", label: "Audited marketplace orders" },
    ],
    github: "https://github.com/Madhusudhan9191/02_PowerBI_Olist_Delivery_Analytics",
    accent: "accent",
  },
  {
    slug: "retail-sales-profitability-analytics",
    index: "09",
    name: "Retail Sales & Discount Profitability Analysis with What-If Simulator",
    tagline:
      "End-to-end retail commercial analytics and interactive Tableau dashboard investigating discount margins, category leakage, and dynamic price-realisation scenarios.",
    problem:
      "High-revenue retail categories frequently generate net negative operating margins due to unchecked volume discounting, yet merchants lack visibility into where discounting erodes margin versus where it stimulates profitable basket volume.",
    solution:
      "Engineered a PostgreSQL analytics warehouse and interactive Tableau Desktop executive dashboard suite featuring automated SQL validation audits (34/34 checks passing) and a dynamic What-If discount scenario simulator.",
    challenges: [
      "Detecting unprofitable product segments masked by high top-line revenue aggregation",
      "Modeling customer price elasticity and discount sensitivity without proprietary historical pricing tiers",
      "Creating an intuitive executive simulator allowing commercial teams to test discount caps and forecast recovered margin in real time",
    ],
    decisions: [
      "Built a multi-tier PostgreSQL data model validating order, return, and regional totals against independent control checks",
      "Identified critical margin leakage in high-discount office supplies (Tables & Bookcases incurring -$17K+ losses at >20% discount)",
      "Implemented Tableau Level-of-Detail (LOD) calculations and dynamic parameters powering a 3-tier scenario simulator",
      "Designed 3 responsive executive dashboards: Executive Overview, Product Profitability, and Discount Margin Simulator",
    ],
    lessons:
      "Discount thresholds exhibit steep non-linear cliff effects: discounts up to 15% maintain healthy unit margins, but discounts exceeding 20% consistently destroy operating margin regardless of sales volume expansion.",
    tech: ["Tableau", "PostgreSQL", "SQL", "Python", "Excel", "Data Modeling"],
    pipeline: [
      { label: "Superstore Raw" },
      { label: "Independent Controls" },
      { label: "PostgreSQL Schema" },
      { label: "SQL Validation (34)" },
      { label: "LOD Calculations" },
      { label: "What-If Simulator" },
      { label: "Tableau Suite" },
    ],
    features: [
      "PostgreSQL retail warehouse schema with 34 automated data quality and referential integrity assertions",
      "Granular profitability diagnosis exposing discount destruction thresholds across regions and customer segments",
      "Interactive Tableau What-If Pricing Simulator testing discount adjustments and projecting recovered profit",
      "Custom LOD expressions calculating customer lifetime margin, regional contribution ratios, and return rates",
      "Comprehensive documentation including business requirements, scenario modeling formulas, and interview guide",
    ],
    metrics: [
      { value: "34 / 34 PASS", label: "Automated SQL validations" },
      { value: "+$42K", label: "Simulated profit recovery" },
      { value: "3 Dashboards", label: "Executive Tableau suite" },
    ],
    github: "https://github.com/Madhusudhan9191/01_Tableau_Retail_Analytics",
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
