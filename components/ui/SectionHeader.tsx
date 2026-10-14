import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  number,
  eyebrow,
  title,
  lead,
  tone = "light",
  id,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  id: string;
}) {
  const dark = tone === "dark";
  return (
    <header className="max-w-3xl">
      <Reveal>
        <p className={`eyebrow flex items-center gap-4 ${dark ? "text-gold-300" : "text-gold-700"}`}>
          <span aria-hidden className="font-display text-base tracking-normal italic">
            {number}
          </span>
          <span aria-hidden className="h-px w-10 bg-current opacity-50" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          id={id}
          className={`mt-6 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] ${
            dark ? "text-ivory-50" : "text-forest-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.16}>
          <div className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? "text-ivory-100/75" : "text-ink-soft"}`}>
            {lead}
          </div>
        </Reveal>
      )}
    </header>
  );
}
