import Image from "next/image";
import { MediaImage } from "@/components/media/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SlotText, TodoBlock } from "@/components/ui/Placeholder";
import { isTodo, valueOf } from "@/lib/placeholders";
import { capacity, caseStudies, googleRating, reach, stats, testimonials } from "@/content/results";
import type { CaseStudy, Testimonial } from "@/content/types";

/** 04 · The work behind the results. Real numbers, case studies, testimonials, capacity. */
export function Results() {
  return (
    <section id="results" aria-labelledby="results-title" className="relative bg-ivory-50 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <SectionHeader
          id="results-title"
          number="04"
          eyebrow="Results"
          title={
            <>
              The work behind <em className="text-gold-700">the results.</em>
            </>
          }
          lead="The transaction record, a few listings in detail, what clients said afterward, and how the work is covered when Lindsey is at another closing."
        />

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-forest-900/10 bg-forest-900/10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.06} className="flex flex-col bg-ivory-50 p-7 sm:p-8">
              <dt className="order-2 mt-3 text-sm text-ink-soft">
                <SlotText slot={s.label} />
              </dt>
              <dd className="order-1">
                {isTodo(s.value) ? (
                  <TodoBlock note={s.value.note} />
                ) : (
                  <span className="font-display text-6xl leading-none text-forest-900">{valueOf(s.value)}</span>
                )}
              </dd>
              {s.footnote && (
                <dd className="order-3 mt-2 text-xs text-ink-soft/80">
                  <SlotText slot={s.footnote} />
                </dd>
              )}
            </Reveal>
          ))}
        </dl>

        {/* Social reach */}
        <div className="mt-24 grid gap-12 rounded-sm bg-forest-900 px-6 py-14 text-ivory-50 sm:mt-32 sm:px-12 sm:py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-gold-300">Reach</p>
            <h3 className="mt-4 text-4xl leading-tight sm:text-5xl">{reach.heading}</h3>
            <p className="mt-5 leading-relaxed text-ivory-100/75">{reach.lead}</p>
            <dl className="mt-10 divide-y divide-ivory-100/12 border-y border-ivory-100/12">
              {reach.highlights.map((h) => (
                <div key={h.label} className="flex items-baseline gap-5 py-5">
                  <dt className="w-32 shrink-0 font-display text-4xl leading-none text-gold-200 sm:text-5xl">{h.value}</dt>
                  <dd className="text-sm leading-relaxed text-ivory-100/80">{h.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="grid items-start gap-8 sm:grid-cols-2">
            {reach.screenshots.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <figure>
                  <div className="overflow-hidden rounded-sm border border-ivory-100/15 shadow-2xl">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      width={s.image.width}
                      height={s.image.height}
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 40vw, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm leading-relaxed text-ivory-100/70">
                    <span className="eyebrow block text-gold-300">{s.label}</span>
                    {s.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Case studies */}
        <div className="mt-24 sm:mt-32">
          <Reveal>
            <h3 className="text-4xl text-forest-900 sm:text-5xl">Listings, in detail</h3>
          </Reveal>
          <div className="mt-10 space-y-6">
            {caseStudies.map((c, i) => (
              <CaseStudyCard key={c.id} study={c} index={i} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24 sm:mt-32">
          <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-4xl text-forest-900 sm:text-5xl">In their words</h3>
            <div className="shrink-0">
              <Image
                src={googleRating.image.src}
                alt={googleRating.image.alt}
                width={googleRating.image.width}
                height={googleRating.image.height}
                className="h-auto w-[17rem]"
              />
              <p className="mt-1 text-xs text-ink-soft">Rating on Lindsey&rsquo;s Google Business Profile</p>
            </div>
          </Reveal>
          <ul className="mt-10 gap-6 md:columns-2 lg:columns-3 [&>li]:mb-6 [&>li]:break-inside-avoid">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </ul>
        </div>

        {/* Capacity */}
        <div className="mt-24 grid gap-12 rounded-sm bg-forest-900 px-6 py-14 text-ivory-50 sm:mt-32 sm:px-12 sm:py-20 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-gold-300">Capacity</p>
            <h3 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Who answers when Lindsey is at another closing?
            </h3>
            <p className="mt-5 leading-relaxed text-ivory-100/75">
              A launch the size of Phase 1 doesn&rsquo;t pause for anyone&rsquo;s calendar. Here is how it&rsquo;s
              covered.
            </p>
          </Reveal>
          <dl className="divide-y divide-ivory-100/12 border-y border-ivory-100/12">
            {capacity.map((c, i) => (
              <Reveal key={c.question} delay={i * 0.06} className="grid gap-3 py-6 sm:grid-cols-[1fr_1.3fr] sm:gap-8">
                <dt className="font-display text-xl text-gold-200">{c.question}</dt>
                <dd className="leading-relaxed text-ivory-100/80">
                  <SlotText slot={c.answer} tone="dark" />
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const steps = study.marketingSteps;
  return (
    <Reveal
      as="article"
      className="grid overflow-hidden rounded-sm border border-forest-900/10 bg-ivory-100/60 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]"
    >
      <div className="relative min-h-64">
        <MediaImage
          image={study.image}
          aspect="4 / 3"
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="h-full rounded-none border-0"
        />
      </div>
      <div className="p-7 sm:p-10">
        <p className="eyebrow text-gold-700">Case study {String(index + 1).padStart(2, "0")}</p>
        <h4 className="mt-3 text-3xl text-forest-900 sm:text-4xl">
          <SlotText slot={study.property} />
        </h4>
        <p className="mt-1 text-ink-soft">
          <SlotText slot={study.location} />
        </p>

        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="eyebrow text-ink-soft/70">Strategy</dt>
            <dd className="mt-2 leading-relaxed">
              <SlotText slot={study.strategy} />
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="eyebrow text-ink-soft/70">Marketing</dt>
            <dd className="mt-2">
              {isTodo(steps) ? (
                <SlotText slot={steps} />
              ) : (
                <ol className="space-y-1.5">
                  {valueOf(steps)!.map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="font-display text-gold-700 italic">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              )}
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-ink-soft/70">Timeline</dt>
            <dd className="mt-2">
              <SlotText slot={study.timeline} />
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-ink-soft/70">Result</dt>
            <dd className="mt-2 font-display text-2xl text-forest-900">
              <SlotText slot={study.result} />
            </dd>
          </div>
        </dl>
        {isTodo(study.permission) && (
          <p className="mt-6 text-xs">
            <SlotText slot={study.permission} />
          </p>
        )}
      </div>
    </Reveal>
  );
}

function TestimonialCard({ testimonial: t, index }: { testimonial: Testimonial; index: number }) {
  return (
    <Reveal as="li" delay={index * 0.08} className="flex flex-col rounded-sm border border-forest-900/10 p-7 sm:p-8">
      <span aria-hidden className="font-display text-6xl leading-none text-blush-500">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 font-display text-xl leading-snug text-forest-900 sm:text-[1.375rem]">
        <SlotText slot={t.quote} />
      </blockquote>
      <div className="mt-8 border-t border-forest-900/10 pt-5 text-sm">
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
