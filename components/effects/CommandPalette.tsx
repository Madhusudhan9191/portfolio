"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CornerDownLeft } from "lucide-react";
import { NAV_ITEMS, PROJECTS } from "@/constants/content";

const ITEMS = [{ label: "Home", href: "/" }, ...NAV_ITEMS, { label: "Metrics dashboard", href: "/metrics" }, { label: "Career timeline", href: "/timeline" }, { label: "Certifications", href: "/certifications" }, { label: "Achievements", href: "/achievements" }, ...PROJECTS.map(project => ({ label: `Project: ${project.name}`, href: `/projects/${project.slug}` })), { label: "Architecture: RepoMind AI", href: "/architecture/repomind-ai" }, { label: "Architecture: AI Database Assistant", href: "/architecture/ai-database-assistant" }, { label: "Architecture: CHAKRA", href: "/architecture/chakra" }, { label: "Architecture: IT Ticket Automation", href: "/architecture/it-ticket-automation" }];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();

  const filtered = useMemo(
    () => ITEMS.filter((i) => i.label.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  useEffect(() => {
    function openPalette() {
      setQuery("");
      setActive(0);
      setOpen(true);
    }
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => {
          if (o) return false;
          openPalette();
          return true;
        });
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onOpenEvent() {
      setOpen((o) => {
        if (o) return false;
        openPalette();
        return true;
      });
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpenEvent);
    };
  }, []);

  function go(href: string) {
    router.push(href);
    setOpen(false);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    }
    if (e.key === "Enter" && filtered[active]) {
      go(filtered[active].href);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-start justify-center pt-[12vh] px-4"
          style={{ background: "rgba(5,8,22,0.7)", backdropFilter: "blur(6px)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border shadow-2xl"
            style={{ background: "var(--bg-elev-2)", borderColor: "var(--border-strong)" }}
          >
            <div className="flex items-center gap-3 border-b px-4 py-4" style={{ borderColor: "var(--border)" }}>
              <Search size={16} style={{ color: "var(--text-dimmer)" }} />
              <input
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Search pages, projects, or architectures..."
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: "var(--text)" }}
              />
              <kbd className="mono rounded border px-1.5 py-0.5 text-[10px]" style={{ borderColor: "var(--border)", color: "var(--text-dimmer)" }}>
                ESC
              </kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <div className="px-4 py-6 text-center text-sm" style={{ color: "var(--text-dimmer)" }}>
                  No results
                </div>
              )}
              {filtered.map((item, idx) => (
                <button
                  key={item.href}
                  onClick={() => go(item.href)}
                  onMouseEnter={() => setActive(idx)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm transition-colors"
                  style={{
                    background: idx === active ? "var(--glass-strong)" : "transparent",
                    color: idx === active ? "var(--text)" : "var(--text-dim)",
                  }}
                >
                  <span>{item.label}</span>
                  {idx === active && <CornerDownLeft size={13} style={{ color: "var(--text-dimmer)" }} />}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
