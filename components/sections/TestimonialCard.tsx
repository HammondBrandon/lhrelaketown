"use client";

import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SlotText } from "@/components/ui/Placeholder";
import { isTodo } from "@/lib/placeholders";
import type { Testimonial } from "@/content/types";

/** Collapsed quote height in px; every card starts at this height. */
const COLLAPSED = 232;

/**
 * Cards share one collapsed height. Quotes that run longer get a fade and a
 * "Read more" toggle that opens the card to the full review.
 */
export function TestimonialCard({ testimonial: t, index }: { testimonial: Testimonial; index: number }) {
  const [expanded, setExpanded] = useState(false);
  // null until measured, so the server render (and no-JS) shows the whole review.
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const inner = useRef<HTMLDivElement>(null);
  const bodyId = useId();

  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    const measure = () => setFullHeight(el.scrollHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const overflows = fullHeight !== null && fullHeight > COLLAPSED + 8;

  return (
    <Reveal as="li" delay={index * 0.08} className="flex flex-col rounded-sm border border-forest-900/10 p-7 sm:p-8">
      <span aria-hidden className="font-display text-6xl leading-none text-blush-500">
        &ldquo;
      </span>

      <div className="relative mt-2">
        <motion.div
          id={bodyId}
          initial={false}
          animate={{ height: overflows && !expanded ? COLLAPSED : (fullHeight ?? "auto") }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div ref={inner}>
            <blockquote className="space-y-4 font-display text-lg leading-relaxed text-forest-900 sm:text-xl">
              {typeof t.quote === "string" ? (
                t.quote.split("\n\n").map((para) => <p key={para}>{para}</p>)
              ) : (
                <SlotText slot={t.quote} />
              )}
            </blockquote>
          </div>
        </motion.div>
        {overflows && (
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ivory-50 to-transparent transition-opacity duration-300 ${
              expanded ? "opacity-0" : "opacity-100"
            }`}
          />
        )}
      </div>

      {overflows && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={bodyId}
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 self-start text-sm font-semibold text-forest-900 underline decoration-gold-700/60 underline-offset-4 transition hover:decoration-gold-700"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}

      <div className="mt-6 border-t border-forest-900/10 pt-5 text-sm">
        <p className="font-semibold text-forest-900">
          <SlotText slot={t.name} />
        </p>
        <p className="mt-0.5 text-ink-soft">
          <SlotText slot={t.context} />
          {t.source && <span className="text-ink-soft/70"> · {t.source} review</span>}
        </p>
        {isTodo(t.permission) && (
          <p className="mt-3 text-xs">
            <SlotText slot={t.permission} />
          </p>
        )}
      </div>
    </Reveal>
  );
}
