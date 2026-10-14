import type { ReactNode } from "react";
import { agent, brokerage, nonAffiliation, recipient } from "@/content/site";
import { SlotText } from "@/components/ui/Placeholder";
import { PrintButton } from "./PrintButton";

/** A letter-size, print-first page. "Save as PDF" uses the browser's print dialog. */
export function PrintSheet({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <div className="min-h-svh bg-ivory-200 py-8 print:bg-white print:py-0">
      <div className="no-print mx-auto mb-6 flex max-w-[8.5in] items-center justify-between px-5">
        <p className="text-sm text-ink-soft">Use &ldquo;Save as PDF&rdquo; in the print dialog.</p>
        <PrintButton />
      </div>
      <article className="mx-auto max-w-[8.5in] bg-white px-[0.7in] py-[0.6in] shadow-xl print:max-w-none print:p-0 print:shadow-none">
        <header className="flex items-end justify-between gap-6 border-b border-forest-900/20 pb-5">
          <div>
            <p className="eyebrow text-gold-700">{eyebrow}</p>
            <h1 className="mt-2 text-4xl text-forest-900">{title}</h1>
          </div>
          <p className="text-right text-xs text-ink-soft">
            Prepared for {recipient.name}
            <br />
            by {agent.name}, {brokerage.name}
          </p>
        </header>
        <div className="mt-8">{children}</div>
        <footer className="mt-10 border-t border-forest-900/15 pt-4 text-[0.7rem] leading-relaxed text-ink-soft">
          <p>
            {agent.name} · <SlotText slot={agent.phone} /> · <SlotText slot={agent.email} />
          </p>
          <p className="mt-2">{nonAffiliation}</p>
        </footer>
      </article>
    </div>
  );
}
