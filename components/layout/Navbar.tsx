"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/constants/content";
import Magnetic from "@/components/effects/Magnetic";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/effects/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[900] transition-all duration-300 border-b border-transparent",
          scrolled && "backdrop-blur-xl"
        )}
        style={scrolled ? { background: "rgba(5,8,22,0.75)", borderColor: "var(--border)" } : undefined}
      >
        <div className="mx-auto flex max-w-[1220px] items-center justify-between px-6 py-4 md:py-5">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight" data-cursor-hover>
            <span
              className="h-[7px] w-[7px] rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 12px var(--accent)" }}
            />
            madhu<span style={{ color: "var(--text-dimmer)" }}>.dev</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-cursor-hover
                    className={cn(
                      "rounded-full px-3.5 py-2 text-[13px] transition-colors",
                      isActive ? "text-[var(--bg)]" : "text-[var(--text-dim)] hover:text-[var(--text)]"
                    )}
                    style={isActive ? { background: "var(--text)" } : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3.5 lg:flex">
            <ThemeToggle />
            <button
              data-cursor-hover
              onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
              className="flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs"
              style={{ borderColor: "var(--border)", background: "var(--glass)", color: "var(--text-dimmer)" }}
            >
              <Search size={13} />
              Search
              <kbd className="mono rounded px-1.5 py-0.5 text-[10px]" style={{ background: "var(--glass-strong)", border: "1px solid var(--border-strong)" }}>
                ⌘K
              </kbd>
            </button>
            <Magnetic
              as="a"
              href="/contact"
              className="rounded-full text-[13px] font-semibold"
              style={{ background: "var(--text)", color: "var(--bg)", padding: "9px 18px" }}
            >
              Let&apos;s talk
            </Magnetic>
          </div>

          <button
            className="p-2 lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            data-cursor-hover
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[950] flex flex-col items-center justify-center gap-7"
            style={{ background: "rgba(5,8,22,0.98)", backdropFilter: "blur(20px)" }}
          >
            <button
              className="absolute top-6 right-6 p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-medium"
                style={{ color: pathname === item.href ? "var(--text)" : "var(--text-dim)" }}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
