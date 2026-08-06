"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(hover: none)").matches;
    if (reduced || coarse) return;

    function onMove(e: MouseEvent) {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    }

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-[9999] h-2.5 w-2.5 rounded-full pointer-events-none hidden md:block transition-transform duration-75 ease-out shadow-[0_0_10px_var(--primary)]"
      style={{ background: "var(--primary)" }}
    />
  );
}
