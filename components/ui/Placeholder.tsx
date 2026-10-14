import type { ReactNode } from "react";
import { isTodo, isVerify, type Slot } from "@/lib/placeholders";

/**
 * Visible stand-ins for missing content. They are meant to be noticed in
 * review, and the gated production build refuses to ship while any exist.
 */

type Tone = "light" | "dark";

const tag = "eyebrow !text-[0.6rem] !tracking-[0.18em]";

export function TodoBlock({
  note,
  tone = "light",
  aspect,
  className = "",
  label = "TODO",
}: {
  note: string;
  tone?: Tone;
  aspect?: string;
  className?: string;
  label?: string;
}) {
  const colors =
    tone === "dark"
      ? "border-gold-300/40 bg-forest-900/60 text-ivory-100/80"
      : "border-gold-700/35 bg-ivory-100 text-ink-soft";
  return (
    <div
      role="note"
      aria-label={`${label}: ${note}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
      className={`relative flex flex-col justify-center gap-2 overflow-hidden rounded-sm border border-dashed p-5 ${colors} ${className}`}
    >
      <span className={`${tag} ${tone === "dark" ? "text-gold-300" : "text-gold-700"}`}>{label}</span>
      <span className="text-sm leading-snug">{note}</span>
    </div>
  );
}

/** Inline text slot: renders the value, or a compact TODO chip. */
export function SlotText({
  slot,
  tone = "light",
  children,
}: {
  slot: Slot<string>;
  tone?: Tone;
  children?: (value: string) => ReactNode;
}) {
  if (isTodo(slot)) {
    return (
      <span
        role="note"
        className={`inline rounded-sm border border-dashed px-1.5 py-0.5 text-[0.8em] leading-relaxed [box-decoration-break:clone] ${
          tone === "dark" ? "border-gold-300/40 text-gold-200" : "border-gold-700/40 bg-ivory-100 text-gold-700"
        }`}
      >
        <span className={`${tag} mr-1.5`}>TODO</span>
        {slot.note}
      </span>
    );
  }
  const value = isVerify(slot) ? (slot.value as string) : (slot as string);
  const rendered = children ? children(value) : value;
  if (isVerify(slot)) {
    return (
      <span
        title={`VERIFY: ${slot.note}`}
        className={`underline decoration-dotted decoration-2 underline-offset-4 ${
          tone === "dark" ? "decoration-gold-300/70" : "decoration-gold-700/60"
        }`}
      >
        {rendered}
        <span className={`${tag} ml-1.5 align-middle ${tone === "dark" ? "text-gold-300" : "text-gold-700"}`}>
          verify
        </span>
      </span>
    );
  }
  return <>{rendered}</>;
}
