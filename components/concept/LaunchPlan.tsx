import { SlotText } from "@/components/ui/Placeholder";
import { launchPlan } from "@/content/concept";

/** First 90 days for Phase 1. Renders on the page and on the print route. */
export function LaunchPlan({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ol className={`divide-y border-y ${dark ? "divide-ivory-100/12 border-ivory-100/12" : "divide-forest-900/12 border-forest-900/12"}`}>
      {launchPlan.map((item, i) => (
        <li key={item.id} className="grid gap-3 py-6 break-inside-avoid sm:grid-cols-[3rem_1fr_11rem] sm:gap-6">
          <span className={`font-display text-2xl italic ${dark ? "text-gold-300" : "text-gold-700"}`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <p className={`font-display text-2xl leading-tight ${dark ? "text-ivory-50" : "text-forest-900"}`}>{item.title}</p>
            <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-ivory-100/75" : "text-ink-soft"}`}>
              <SlotText slot={item.detail} tone={tone} />
            </p>
          </div>
          <p className={`text-sm sm:text-right ${dark ? "text-ivory-100/65" : "text-ink-soft"}`}>
            <span className={`eyebrow block ${dark ? "text-gold-300" : "text-gold-700"}`}>Timing</span>
            <span className="mt-1 block">
              <SlotText slot={item.timing} tone={tone} />
            </span>
          </p>
        </li>
      ))}
    </ol>
  );
}
