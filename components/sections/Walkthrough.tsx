"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SlotText } from "@/components/ui/Placeholder";
import { walkthrough } from "@/content/work";
import { WalkthroughOutput } from "./WalkthroughOutput";

/**
 * Signature feature: "What happens when Lindsey takes on a property?"
 * Desktop: the steps scroll on the left while the output for the active
 * step holds in a sticky frame on the right. Mobile: each output sits inline.
 */
export function Walkthrough() {
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      // A thin band across the middle of the viewport decides the active step.
      { rootMargin: "-48% 0px -48% 0px" },
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const step = walkthrough[active];

  return (
    <section
      id="walkthrough"
      aria-labelledby="walkthrough-title"
      className="relative bg-ivory-100 py-24 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <SectionHeader
          id="walkthrough-title"
          number="03"
          eyebrow="One listing, start to finish"
          title={
            <>
              What happens when Lindsey <em className="text-gold-700">takes on a property?</em>
            </>
          }
          lead="Eight steps that Lindsey goes through for every single listing."
        />

        <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <ol className="relative">
            {walkthrough.map((s, i) => (
              <li
                key={s.id}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-index={i}
                className="border-t border-forest-900/12 py-10 lg:flex lg:min-h-[68vh] lg:flex-col lg:justify-center lg:py-0"
              >
                <div className={`transition-opacity duration-500 ${i === active ? "lg:opacity-100" : "lg:opacity-35"}`}>
                  <p className="eyebrow text-gold-700">
                    Step {String(i + 1).padStart(2, "0")} <span className="text-ink-soft/50">/ 08</span>
                  </p>
                  <h3 className="mt-3 text-4xl text-forest-900 sm:text-5xl">{s.title}</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
                    <SlotText slot={s.summary} />
                  </p>
                </div>
                {/* Mobile and tablet: output inline */}
                <div className="mt-8 lg:hidden">
                  <WalkthroughOutput output={s.output} stepId={s.id} />
                </div>
              </li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-[12vh] flex h-[76vh] flex-col justify-center">
              <div className="mb-6 flex items-center gap-1.5" aria-hidden>
                {walkthrough.map((s, i) => (
                  <span
                    key={s.id}
                    className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${
                      i <= active ? "bg-gold-700" : "bg-forest-900/12"
                    }`}
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <WalkthroughOutput output={step.output} stepId={step.id} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
