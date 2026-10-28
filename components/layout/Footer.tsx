import { agent, brokerage, nonAffiliation, recipient } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-forest-950 py-14 text-ivory-100/65">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 text-sm leading-relaxed sm:px-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-display text-xl text-ivory-50">
            {brokerage.name}
          </p>
          <p className="mt-1">{brokerage.city}</p>
          <p className="mt-1">
            {agent.name}, {agent.licenses}.
          </p>
          <p className="mt-6 max-w-2xl">{nonAffiliation}</p>
        </div>
        <div className="md:text-right">
          <p className="flex items-center gap-2 md:justify-end">
            <svg viewBox="0 0 24 24" className="size-5 text-ivory-100/80" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
              <path d="M3 11l9-7 9 7M5 9.5V20h14V9.5M9 13h6M9 16h6" />
            </svg>
            Equal Housing Opportunity
          </p>
          <p className="mt-4">
            A private page prepared for {recipient.name}. It isn&rsquo;t indexed or linked from anywhere public.
          </p>
        </div>
      </div>
    </footer>
  );
}
