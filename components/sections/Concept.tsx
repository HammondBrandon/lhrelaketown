import type { ReactNode } from "react";
import { ConceptDemo } from "@/components/concept/ConceptDemo";
import { LaunchPlan } from "@/components/concept/LaunchPlan";
import { MarketSnapshot } from "@/components/concept/MarketSnapshot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TrackedLink } from "@/components/ui/TrackedLink";
import type { AnalyticsEvent } from "@/lib/analytics";
import { conceptLabel } from "@/content/concept";

/** 05 · Here's what we could build for Laketown North. */
export function Concept() {
  return (
    <section
      id="concept"
      aria-labelledby="concept-title"
      className="grain relative bg-forest-900 py-24 text-ivory-50 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <SectionHeader
          id="concept-title"
          number="05"
          tone="dark"
          eyebrow="For Laketown North"
          title={
            <>
              Here&rsquo;s what we could build <em className="text-gold-200">for Laketown North.</em>
            </>
          }
          lead="Every piece has a job: selling the lake, telling the story, capturing leads, and staying quiet about inventory until you decide otherwise."
        />

        <Reveal className="mt-6">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-gold-300/40 px-3 py-1.5 text-gold-200">
            <span aria-hidden className="size-1.5 rounded-full bg-blush-500" />
            {conceptLabel}
          </p>
        </Reveal>

        <Reveal className="mt-12 sm:mt-16">
          <ConceptDemo />
        </Reveal>

        <div className="mt-24 grid gap-6 sm:mt-32 xl:grid-cols-2">
          <Panel
            eyebrow="Market snapshot"
            title="Lake Wedowee lot market"
            href={"/snapshot"}
            event={{ name: "pdf_open", props: { doc: "market-snapshot" } }}
          >
            <MarketSnapshot tone="dark" />
          </Panel>
          <Panel
            eyebrow="Launch plan"
            title="The first 90 days of Phase 1"
            href={"/plan"}
            event={{ name: "pdf_open", props: { doc: "launch-plan" } }}
          >
            <LaunchPlan tone="dark" />
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Panel({
  eyebrow,
  title,
  href,
  event,
  children,
}: {
  eyebrow: string;
  title: string;
  href: string;
  event: AnalyticsEvent;
  children: ReactNode;
}) {
  return (
    <Reveal as="article" className="flex flex-col rounded-sm border border-ivory-100/12 bg-forest-950/40 p-6 sm:p-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-gold-300">{eyebrow}</p>
          <h3 className="mt-3 text-3xl sm:text-4xl">{title}</h3>
        </div>
        <TrackedLink
          href={href}
          target="_blank"
          event={event}
          className="inline-flex items-center gap-2 rounded-full border border-ivory-100/30 px-4 py-2 text-sm text-ivory-50 transition hover:border-gold-300 hover:text-gold-200"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19.5h14" />
          </svg>
          PDF
          <span className="sr-only">(opens a printable page in a new tab)</span>
        </TrackedLink>
      </div>
      <div className="mt-8 flex-1">{children}</div>
    </Reveal>
  );
}
