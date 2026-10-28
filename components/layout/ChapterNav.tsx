"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics";

const chapters = [
  { id: "message", n: "", label: "A message for you" },
  { id: "understanding", n: "01", label: "What you're building" },
  { id: "work", n: "02", label: "The work" },
  { id: "walkthrough", n: "03", label: "One listing, start to finish" },
  { id: "results", n: "04", label: "Results" },
  { id: "concept", n: "05", label: "For Laketown North" },
  { id: "talk", n: "06", label: "Let's talk" },
] as const;

/**
 * Quiet wayfinding: a slim bar that appears after the hero, showing the
 * current chapter and the one call to action. Also reports section views.
 */
export function ChapterNav({ recipient }: { recipient: string }) {
  const [current, setCurrent] = useState<string>("message");
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const seen = new Set<string>();
    const els = chapters.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          setCurrent(e.target.id);
          if (!seen.has(e.target.id)) {
            seen.add(e.target.id);
            track({ name: "section_view", props: { section: e.target.id } });
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));

    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const index = chapters.findIndex((c) => c.id === current);
  const chapter = chapters[index] ?? chapters[0];
  const onDark = current === "work" || current === "concept";

  return (
    <AnimatePresence>
      {pastHero && current !== "talk" && (
        <motion.nav
          aria-label="Page progress"
          initial={{ y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -64, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`no-print fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md transition-colors duration-500 ${
            onDark ? "border-ivory-100/10 bg-forest-950/70 text-ivory-100" : "border-forest-900/10 bg-ivory-50/80 text-forest-900"
          }`}
        >
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-5 sm:px-10">
            <p className="flex min-w-0 items-center gap-3 text-sm">
              <span className="hidden shrink-0 opacity-60 sm:inline">For {recipient}</span>
              <span aria-hidden className="hidden h-4 w-px bg-current opacity-25 sm:inline" />
              {chapter.n && <span className="font-display text-base italic opacity-60">{chapter.n}</span>}
              <span className="truncate">{chapter.label}</span>
            </p>
            <a
              href="#talk"
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                onDark ? "bg-ivory-50 text-forest-950 hover:bg-gold-200" : "bg-forest-900 text-ivory-50 hover:bg-forest-700"
              }`}
            >
              20 minutes with Lindsey
            </a>
          </div>
          <div aria-hidden className="h-px bg-current/10">
            <div
              className="h-px bg-blush-500 transition-[width] duration-700"
              style={{ width: `${((index + 1) / chapters.length) * 100}%` }}
            />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
