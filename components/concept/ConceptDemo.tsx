"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useId, useState, type FormEvent } from "react";
import { LakeScene } from "@/components/media/LakeScene";
import { track } from "@/lib/analytics";
import { conceptLabel, conceptStory, conceptTabs, type ConceptTabId } from "@/content/concept";

/**
 * An example of the marketing experience, not a promise in prose.
 * Labeled as a concept throughout. Uses no Laketown branding and no inventory.
 */
export function ConceptDemo() {
  const [tab, setTab] = useState<ConceptTabId>("lake");
  const baseId = useId();

  function select(id: ConceptTabId) {
    setTab(id);
    track({ name: "concept_interact", props: { tab: id } });
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
      {/* Browser frame */}
      <div className="overflow-hidden rounded-md border border-ivory-100/15 bg-forest-950 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-3 border-b border-ivory-100/10 px-4 py-3">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-ivory-100/20" />
            <span className="size-2.5 rounded-full bg-ivory-100/20" />
            <span className="size-2.5 rounded-full bg-ivory-100/20" />
          </span>
          <span className="flex-1 truncate rounded-full bg-ivory-100/8 px-4 py-1.5 text-center text-xs text-ivory-100/55">
            {conceptLabel}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ivory-100/10 px-5 py-4 sm:px-7">
          <p className="text-sm text-ivory-100/85">
            Laketown North <span className="text-ivory-100/45">· concept</span>
          </p>
          <div role="tablist" aria-label="Concept sections" className="-mx-1 flex gap-1 overflow-x-auto">
            {conceptTabs.map((t) => (
              <button
                key={t.id}
                id={`${baseId}-tab-${t.id}`}
                role="tab"
                type="button"
                aria-selected={tab === t.id}
                aria-controls={`${baseId}-panel`}
                onClick={() => select(t.id)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs transition ${
                  tab === t.id ? "bg-ivory-50 text-forest-950" : "text-ivory-100/65 hover:text-ivory-50"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${tab}`}
          className="relative min-h-[30rem] sm:min-h-[34rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              {tab === "lake" && <LakePanel />}
              {tab === "story" && <StoryPanel />}
              {tab === "register" && <RegisterPanel />}
              {tab === "lots" && <LotsPanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Why each piece is here */}
      <ol className="space-y-2 self-center">
        {conceptTabs.map((t, i) => (
          <li key={t.id}>
            <button
              type="button"
              onClick={() => select(t.id)}
              className={`w-full rounded-sm border-l-2 py-3 pl-5 text-left transition ${
                tab === t.id ? "border-gold-300" : "border-ivory-100/10 opacity-55 hover:opacity-90"
              }`}
            >
              <span className="eyebrow text-gold-300">
                {String(i + 1).padStart(2, "0")} · {t.label}
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-ivory-100/80">{t.purpose}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function LakePanel() {
  return (
    <div className="relative h-full overflow-hidden">
      <LakeScene className="absolute inset-0 h-full w-full" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
        <p className="eyebrow text-gold-300">Lake Wedowee, Alabama</p>
        <p className="mt-3 max-w-md font-display text-4xl leading-tight text-ivory-50 sm:text-5xl">
          Mornings on the water. Evenings on the dock.
        </p>
      </div>
    </div>
  );
}

function StoryPanel() {
  return (
    <div className="flex h-full flex-col justify-center bg-ivory-50 p-6 text-ink sm:p-10">
      <p className="eyebrow text-gold-700">Illustrative copy · to be written with Laketown</p>
      <ol className="mt-6 grid gap-6 md:grid-cols-3">
        {conceptStory.map((c) => (
          <li key={c.title} className="border-t border-forest-900/15 pt-5">
            <p className="eyebrow text-ink-soft/70">{c.kicker}</p>
            <p className="mt-2 font-display text-2xl leading-tight text-forest-900">{c.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function RegisterPanel() {
  const [sent, setSent] = useState(false);
  const fid = useId();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only: values are discarded, never sent or stored.
    e.currentTarget.reset();
    setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-sm border border-forest-900/20 bg-white px-3 py-2.5 text-sm text-ink outline-none transition focus:border-forest-700 focus:ring-2 focus:ring-blush-300/50";

  return (
    <div className="grid h-full overflow-y-auto bg-ivory-50 text-ink md:grid-cols-[1fr_1fr]">
      <div className="p-6 sm:p-10">
        <p className="eyebrow text-gold-700">Early interest</p>
        <p className="mt-2 font-display text-3xl leading-tight text-forest-900">Be first to hear about Phase 1.</p>
        {sent ? (
          <p className="mt-6 text-sm text-ink-soft">
            Demo submitted. Nothing was sent or stored. The lead timeline shows what would happen next.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 grid gap-4 text-sm">
            <label htmlFor={`${fid}-name`}>
              Name
              <input id={`${fid}-name`} className={field} autoComplete="off" required />
            </label>
            <label htmlFor={`${fid}-email`}>
              Email or phone
              <input id={`${fid}-email`} className={field} autoComplete="off" required />
            </label>
            <label htmlFor={`${fid}-use`}>
              Intended use
              <select id={`${fid}-use`} className={field} defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option>Second home</option>
                <option>Retirement</option>
                <option>Investment</option>
                <option>Other</option>
              </select>
            </label>
            <label className="flex gap-3 text-xs leading-relaxed text-ink-soft">
              <input type="checkbox" required className="mt-0.5 size-4 shrink-0 accent-forest-700" />
              I agree to be contacted about new Lake Wedowee lots. (Example consent language. The real wording would
              be approved by the managing broker.)
            </label>
            <button
              type="submit"
              className="mt-1 rounded-full bg-forest-900 px-5 py-3 font-semibold text-ivory-50 transition hover:bg-forest-700"
            >
              Try the demo
            </button>
            <p className="text-xs text-ink-soft/80">Demo only. Nothing you type here is sent or stored.</p>
          </form>
        )}
      </div>
      <div className="flex flex-col justify-center bg-forest-900 p-6 text-ivory-50 sm:p-10">
        <p className="eyebrow text-gold-300">What happens to a lead</p>
        <ol className="relative mt-6 space-y-6 border-l border-gold-300/30 pl-6">
          {[
            { t: "Now", l: "Inquiry received, with consent recorded" },
            { t: "Minutes", l: "Routed to Lindsey with the buyer's timeline and intended use" },
            { t: "≤ 1 hour", l: "A personal reply from a person, not an autoresponder" },
          ].map((s, i) => (
            <motion.li
              key={s.t}
              initial={false}
              animate={{ opacity: sent ? 1 : 0.4 }}
              transition={{ delay: sent ? i * 0.35 : 0, duration: 0.5 }}
              className="relative"
            >
              <span
                aria-hidden
                className={`absolute top-2 -left-[1.72rem] size-2 rounded-full ${sent ? "bg-gold-300" : "bg-ivory-100/30"}`}
              />
              <p className="font-display text-2xl">{s.t}</p>
              <p className="text-sm text-ivory-100/70">{s.l}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function LotsPanel() {
  return (
    <div className="grid h-full place-items-center bg-forest-900 p-8 text-center">
      <div className="max-w-sm">
        <svg viewBox="0 0 24 24" className="mx-auto size-9 text-gold-300" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
          <rect x="5" y="10.5" width="14" height="10" rx="1.5" />
          <path d="M8 10.5V7.5a4 4 0 018 0v3" />
        </svg>
        <p className="mt-5 font-display text-3xl text-ivory-50">Reserved for Laketown</p>
        <p className="mt-3 text-sm leading-relaxed text-ivory-100/70">
          Lots, pricing and plats appear here only once Laketown approves them. This concept doesn&rsquo;t show any.
        </p>
      </div>
    </div>
  );
}
