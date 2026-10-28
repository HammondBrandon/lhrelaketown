import Image from "next/image";
import { nonAffiliation, recipient } from "@/content/site";

/** Lake first, "made for you" second. The photo is cropped to the water; the house below it is left out. */
export function Hero() {
  return (
    <section
      id="message"
      aria-labelledby="hero-title"
      className="grain relative isolate flex min-h-svh flex-col overflow-hidden bg-forest-950 text-ivory-50"
    >
      <Image
        src="/media/hero/lake-aerial.jpg"
        alt="Aerial view of Lake Wedowee: a wooded peninsula, boat docks and open water"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="-z-10 object-cover object-[55%_30%]"
      />

      {/* Legibility scrims */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-forest-950 via-forest-950/35 to-forest-950/50" />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-forest-950/70 via-transparent to-transparent" />

      <div className="relative z-10 flex items-center justify-between px-5 pt-6 sm:px-10 sm:pt-8">
        <p className="eyebrow text-ivory-100/80">Laketown North · Lake Wedowee, Alabama</p>
        <p className="eyebrow hidden rounded-full border border-ivory-100/25 px-3 py-1.5 text-ivory-100/70 sm:block">
          Private · Concept
        </p>
      </div>

      <div className="relative z-10 mt-auto px-5 pb-10 sm:px-10 sm:pb-14 lg:pb-16">
        <div className="max-w-4xl">
          <p className="eyebrow flex items-center gap-3 text-gold-300">
            <span aria-hidden className="h-px w-8 bg-gold-300/70" />
            Prepared for {recipient.name}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[3.1rem] leading-[0.98] text-ivory-50 sm:text-7xl lg:text-[6.25rem]"
          >
            Laketown North,
            <br />
            <em className="font-normal text-gold-200">from the water.</em>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory-100/85 sm:text-xl">
            This page was made for the team behind Laketown North. It starts with the lake and what you&rsquo;re building,
            then shows the work we&rsquo;d bring to it.
          </p>

        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t border-ivory-100/15 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-ivory-100/55">{nonAffiliation}</p>
          <a
            href="#understanding"
            className="eyebrow group flex shrink-0 items-center gap-3 text-ivory-100/75 transition hover:text-gold-200"
          >
            Begin
            <span aria-hidden className="relative block h-9 w-px overflow-hidden bg-ivory-100/25">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-gold-300 motion-safe:animate-[scrollcue_2.2s_ease-in-out_infinite]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
