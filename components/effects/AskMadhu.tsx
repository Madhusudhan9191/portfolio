"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, Sparkles, X, Search, RefreshCw } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

interface QAPair {
  category: "Projects" | "Experience" | "Research" | "Skills & Edu" | "Contact";
  question: string;
  answer: string;
  keywords: string[];
}

const KNOWLEDGE_BASE: QAPair[] = [
  {
    category: "Projects",
    question: "What is Madhu's engineering focus?",
    answer:
      "Professionally, Madhu is a backend engineer building production systems in Python, Java, and SQL. On his own time, he designs and ships personal AI projects: RAG platforms, guarded Natural Language-to-SQL engines, and secure AI infrastructure.",
    keywords: ["focus", "engineering", "specialty", "about", "who", "overview", "ai"],
  },
  {
    category: "Projects",
    question: "Tell me about AI Database Assistant",
    answer:
      "An enterprise AI analytics platform (28 REST APIs) supporting PostgreSQL, Oracle, and MySQL. It converts natural language to SQL with an AST guard gate, self-healing SQL repair loop, and automated BI insights.",
    keywords: ["database", "sql", "ai database", "natural language", "postgres", "oracle", "mysql", "assistant"],
  },
  {
    category: "Projects",
    question: "How does RepoMind AI work?",
    answer:
      "RepoMind AI ingests codebases using AST-aware chunking, indexes in Qdrant vector store, retrieves via MMR, reranks with cross-encoders, compresses context, and streams token-level answers with file/line citations.",
    keywords: ["repomind", "rag", "code", "repository", "qdrant", "vector", "citation", "retrieval"],
  },
  {
    category: "Projects",
    question: "What is Property Research Agent?",
    answer:
      "An autonomous real estate research agent using Groq Llama 3.3 70B, DuckDuckGo, and async BeautifulSoup scraping to search, extract, compare, and rank property listings by city and budget.",
    keywords: ["property", "research", "agent", "groq", "llama", "streamlit", "scrape", "real estate"],
  },
  {
    category: "Projects",
    question: "What is CHAKRA / Chakravyuh?",
    answer:
      "An offline GST compliance and fraud detection platform built for Google's Build with Gemma Bengaluru AI Sprint (Top 10 National Finalist). Uses Gemma 4 via LM Studio, NetworkX graph analysis, and Pytesseract OCR.",
    keywords: ["chakra", "chakravyuh", "gemma", "gst", "fraud", "offline", "google", "hackathon", "networkx"],
  },
  {
    category: "Experience",
    question: "What is his production backend experience?",
    answer:
      "Software Engineer at Kallque Pvt. Ltd. (Apr 2026–Present; Trainee & Intern Jun 2024–Mar 2026). Architected Python/SQL backend services for 1,000+ active users across PG Owner/Tenant platforms and resolved 100+ production defects.",
    keywords: ["experience", "kallque", "production", "work", "job", "company", "role", "backend"],
  },
  {
    category: "Research",
    question: "What IEEE research has he published?",
    answer:
      "Author of two IEEE peer-reviewed publications: 1) 'Real-Time Estimation of Heart Rate from Facial Video' (rPPG + FFT), and 2) 'AI Methodologies in Upcoming Modern Warfare Systems'.",
    keywords: ["research", "ieee", "paper", "published", "publication", "heart rate", "warfare", "vision"],
  },
  {
    category: "Skills & Edu",
    question: "What is Madhu's technical stack?",
    answer:
      "Languages: Python, Java, SQL. Frameworks: FastAPI, Spring Boot, React. AI & Data: Qdrant, RAG, Sentence Transformers, Groq, Llama, Gemma, PostgreSQL, Oracle, MySQL, DuckDB, Docker, Git.",
    keywords: ["tech", "stack", "skills", "languages", "tools", "python", "fastapi", "sql", "java", "frameworks"],
  },
  {
    category: "Skills & Edu",
    question: "What education & certifications does he have?",
    answer:
      "B.Tech in Artificial Intelligence & Machine Learning from M.S. Ramaiah University (CGPA 8.0/10, 2024). Certifications: Automation Anywhere A360, Data Analytics, and Power BI.",
    keywords: ["education", "degree", "university", "btech", "ramaiah", "certification", "gpa", "cgpa"],
  },
  {
    category: "Contact",
    question: "How can I contact or hire Madhu?",
    answer:
      "Email: madhusuravaram91@gmail.com | Phone: +91-6302722105 | Location: Bengaluru, India | GitHub: github.com/Madhusudhan9191 | LinkedIn: linkedin.com/in/madhusuravaram91",
    keywords: ["contact", "email", "hire", "phone", "linkedin", "github", "reach", "location", "bengaluru"],
  },
];

const CATEGORIES = ["All", "Projects", "Experience", "Research", "Skills & Edu", "Contact"] as const;

export default function AskMadhu() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedQA, setSelectedQA] = useState<QAPair>(KNOWLEDGE_BASE[0]);
  const [displayedAnswer, setDisplayedAnswer] = useState(KNOWLEDGE_BASE[0].answer);
  const [isStreaming, setIsStreaming] = useState(false);

  // Filtered QA items by category and search query
  const filteredQAs = useMemo(() => {
    return KNOWLEDGE_BASE.filter((item) => {
      const matchesCat = activeCategory === "All" || item.category === activeCategory;
      if (!searchQuery.trim()) return matchesCat;

      const qLower = searchQuery.toLowerCase();
      const matchesText =
        item.question.toLowerCase().includes(qLower) ||
        item.answer.toLowerCase().includes(qLower) ||
        item.keywords.some((k) => k.toLowerCase().includes(qLower));

      return matchesCat && matchesText;
    });
  }, [activeCategory, searchQuery]);

  // Answer streaming typewriter effect
  useEffect(() => {
    if (!isStreaming) return;
    const fullText = selectedQA.answer;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayedAnswer(fullText.slice(0, i));
      if (i >= fullText.length) {
        clearInterval(timer);
        setIsStreaming(false);
      }
    }, 10);
    return () => clearInterval(timer);
  }, [selectedQA, isStreaming]);

  function handleSelectQuestion(item: QAPair) {
    setSelectedQA(item);
    setDisplayedAnswer("");
    setIsStreaming(true);
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Find best matching Q&A item based on keywords
    const queryWords = searchQuery.toLowerCase().split(/\s+/);
    let bestMatch = KNOWLEDGE_BASE[0];
    let maxScore = -1;

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;
      for (const word of queryWords) {
        if (word.length < 3) continue;
        if (item.question.toLowerCase().includes(word)) score += 3;
        if (item.answer.toLowerCase().includes(word)) score += 1;
        if (item.keywords.some((k) => k.toLowerCase().includes(word))) score += 4;
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = item;
      }
    }

    if (maxScore > 0) {
      handleSelectQuestion(bestMatch);
    } else {
      setSelectedQA({
        category: "Projects",
        question: searchQuery,
        answer:
          "Madhu specializes in AI systems, RAG architecture, and backend engineering. Feel free to contact him directly at madhusuravaram91@gmail.com!",
        keywords: [],
      });
      setDisplayedAnswer("");
      setIsStreaming(true);
    }
  }

  return (
    <div className="fixed right-5 bottom-5 z-[880] sm:right-7 sm:bottom-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className="mb-3 w-[min(420px,calc(100vw-32px))] overflow-hidden rounded-2xl border p-4 shadow-2xl backdrop-blur-xl"
            style={{ borderColor: "var(--border-strong)", background: "var(--bg-elev)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles size={16} style={{ color: "var(--primary)" }} />
                Ask Madhu AI
                <span className="mono rounded-full border px-2 py-0.5 text-[9.5px]" style={{ borderColor: "var(--primary)", color: "var(--primary)" }}>
                  Interactive Guide
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-1 transition-colors hover:bg-[var(--glass-strong)]"
                aria-label="Close Ask Madhu AI"
              >
                <X size={17} />
              </button>
            </div>

            {/* Answer Display */}
            <div className="mt-3">
              <div className="mono text-[11px] font-medium mb-1 flex items-center justify-between" style={{ color: "var(--primary)" }}>
                <span>{selectedQA.question}</span>
                {isStreaming && <RefreshCw size={11} className="animate-spin" />}
              </div>
              <div
                aria-live="polite"
                className="min-h-24 rounded-xl border p-3.5 text-[12.5px] leading-relaxed"
                style={{ borderColor: "var(--border)", color: "var(--text-dim)", background: "var(--glass)" }}
              >
                {displayedAnswer}
                {isStreaming && <span className="ml-1 inline-block h-3 w-1 animate-pulse bg-[var(--primary)]" />}
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`mono shrink-0 rounded-lg px-2.5 py-1 text-[10.5px] transition-colors ${
                    activeCategory === cat
                      ? "bg-[var(--primary)] text-[#101010] font-semibold"
                      : "border text-[var(--text-dim)] hover:border-[var(--primary)]"
                  }`}
                  style={activeCategory !== cat ? { borderColor: "var(--border)" } : {}}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Questions Selection List */}
            <div className="mt-2.5 max-h-36 overflow-y-auto pr-1 grid gap-1.5 no-scrollbar">
              {filteredQAs.length > 0 ? (
                filteredQAs.map((item) => (
                  <button
                    key={item.question}
                    onClick={() => handleSelectQuestion(item)}
                    className={`rounded-xl border px-3 py-2 text-left text-[11.5px] transition-all ${
                      selectedQA.question === item.question
                        ? "border-[var(--primary)] bg-[rgba(213,255,63,0.08)] text-[var(--text)]"
                        : "hover:border-[var(--primary)] text-[var(--text-dim)]"
                    }`}
                    style={{ borderColor: selectedQA.question === item.question ? "var(--primary)" : "var(--border)" }}
                  >
                    {item.question}
                  </button>
                ))
              ) : (
                <div className="py-2 text-center text-xs" style={{ color: "var(--text-dimmer)" }}>
                  No pre-set question matching &quot;{searchQuery}&quot;. Hit Enter to search anyway!
                </div>
              )}
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="mt-3 flex items-center gap-2 rounded-xl border px-3 py-2" style={{ borderColor: "var(--border)" }}>
              <Search size={14} style={{ color: "var(--text-dimmer)" }} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ask anything or search questions..."
                className="w-full bg-transparent text-xs outline-none"
                style={{ color: "var(--text)" }}
              />
              <button type="submit" aria-label="Send query" className="p-1 text-[var(--primary)] hover:opacity-80">
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Open Ask Madhu AI"
        className="flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-xl transition-transform hover:scale-105"
        style={{ background: "var(--primary)", color: "#101010" }}
      >
        <Bot size={17} />
        <span className="hidden sm:inline">Ask Madhu AI</span>
      </button>
    </div>
  );
}
