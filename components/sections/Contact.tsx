import { MediaImage } from "@/components/media/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { SlotText } from "@/components/ui/Placeholder";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { valueOf } from "@/lib/placeholders";
import { invitation } from "@/content/contact";
import { agent, brokerage, recipient } from "@/content/site";

/** 06 · Let's talk about your vision. One ask: a 20-minute call. */
export function Contact() {
  const phone = valueOf(agent.phone);
  const email = valueOf(agent.email);

  return (
    <section id="talk" aria-labelledby="talk-title" className="relative bg-ivory-100 py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-24">
        <Reveal className="lg:order-2">
          <p className="eyebrow flex items-center gap-4 text-gold-700">
            <span aria-hidden className="font-display text-base tracking-normal italic">
              06
            </span>
            <span aria-hidden className="h-px w-10 bg-current opacity-50" />
            Next step
          </p>
          <h2 id="talk-title" className="mt-6 text-[2.6rem] leading-[1.02] text-forest-900 sm:text-6xl lg:text-[4.25rem]">
            {invitation.heading}
          </h2>

          <div className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            <p className="font-display text-2xl text-forest-900">{recipient.salutation}</p>
            <p className="mt-3">
              <SlotText slot={invitation.note} />
            </p>
          </div>

          <p
            className="mt-8 font-signature text-5xl leading-none text-blush-500"
            aria-label={`Signed, ${agent.firstName}`}
          >
            {agent.firstName}
          </p>

          <div className="mt-12 rounded-sm border border-forest-900/12 bg-ivory-50 p-6 sm:p-8">
            <p className="font-display text-3xl text-forest-900">{invitation.ask}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {phone && (
                <TrackedLink
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  event={{ name: "cta_click", props: { method: "phone", location: "invitation" } }}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-forest-900 px-6 py-3.5 font-semibold text-ivory-50 transition hover:bg-forest-700"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" />
                  </svg>
                  Call <SlotText slot={agent.phone} />
                </TrackedLink>
              )}
              {email && (
                <TrackedLink
                  href={`mailto:${email}?subject=${encodeURIComponent("Laketown North: 20 minutes")}`}
                  event={{ name: "cta_click", props: { method: "email", location: "invitation" } }}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-forest-900/25 px-6 py-3.5 font-semibold text-forest-900 transition hover:border-forest-900"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3.5 6l8.5 7 8.5-7" />
                  </svg>
                  Email Lindsey
                </TrackedLink>
              )}
            </div>
            {email && (
              <p className="mt-4 text-sm text-ink-soft">
                <SlotText slot={agent.email} />
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:order-1">
          <MediaImage image={agent.headshot} aspect="4 / 5" sizes="(min-width: 1024px) 38vw, 100vw" className="rounded-sm" />
          <div className="mt-6">
            <p className="font-display text-3xl text-forest-900">{agent.name}</p>
            <p className="mt-1 text-sm text-ink-soft">
              {agent.licenses} · {brokerage.name}, {brokerage.city}
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              <SlotText slot={agent.bio} />
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
