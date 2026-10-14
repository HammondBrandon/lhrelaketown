import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SlotText } from "@/components/ui/Placeholder";
import { facts, honesty, laketown, site, sources, whyItMatters } from "@/content/understanding";

/** 02 · We understand what you're building. Verified public facts only. */
export function Understanding() {
  return (
    <section id="understanding" aria-labelledby="understanding-title" className="relative bg-ivory-50 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <SectionHeader
          id="understanding-title"
          number="02"
          eyebrow="What you're building"
          title={
            <>
              We understand what <em className="text-gold-700">you&rsquo;re building.</em>
            </>
          }
          lead="Here is what we know about Laketown North, all of it from public reporting."
        />

        {/* Facts */}
        <dl className="mt-16 grid gap-px overflow-hidden rounded-sm border border-forest-900/10 bg-forest-900/10 sm:mt-24 md:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.figure} delay={i * 0.08} className="bg-ivory-50 p-7 sm:p-10">
              <dt className="flex items-baseline gap-2 text-forest-900">
                <span className="font-display text-6xl leading-none sm:text-7xl">{f.figure}</span>
                <span className="eyebrow text-gold-700">{f.unit}</span>
              </dt>
              <dd className="mt-5 leading-relaxed text-ink-soft">{f.text}</dd>
            </Reveal>
          ))}
        </dl>

        {/* Site and developer */}
        <div className="mt-20 grid gap-14 md:grid-cols-2 md:gap-20 lg:mt-28">
          {[site, laketown].map((block, i) => (
            <Reveal key={block.heading} delay={i * 0.1}>
              <h3 className="text-3xl text-forest-900 sm:text-4xl">{block.heading}</h3>
              <div className="hairline mt-5 text-forest-900" />
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">{block.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Why it matters */}
        <div className="mt-24 rounded-sm bg-forest-900 px-6 py-14 text-ivory-50 sm:px-12 sm:py-20 lg:mt-32">
          <Reveal>
            <p className="eyebrow text-gold-300">Why it matters</p>
            <h3 className="mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl">
              A launch this size sets the tone for the whole lake.
            </h3>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-12">
            {whyItMatters.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <p className="font-display text-2xl text-gold-200">{w.title}</p>
                <p className="mt-3 leading-relaxed text-ivory-100/80">
                  <SlotText slot={w.body} tone="dark" />
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 grid gap-8 border-t border-forest-900/15 pt-8 md:grid-cols-[1.2fr_1fr]">
          <p className="max-w-xl text-sm leading-relaxed text-ink-soft">{honesty}</p>
          <div className="text-sm text-ink-soft">
            <p className="eyebrow text-gold-700">Sources</p>
            <ul className="mt-3 space-y-2">
              {Object.values(sources).map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-forest-900/25 underline-offset-4 transition hover:decoration-gold-700"
                  >
                    {s.publisher}
                    {s.label !== s.publisher && <>, &ldquo;{s.label}&rdquo;</>}
                  </a>
                  {s.date && <span className="text-ink-soft/70"> · {s.date}</span>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
