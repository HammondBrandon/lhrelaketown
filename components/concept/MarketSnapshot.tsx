import { SlotText } from "@/components/ui/Placeholder";
import { market } from "@/content/concept";

/** Lake Wedowee lot market snapshot. Renders on the page and on the print route. */
export function MarketSnapshot({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const muted = dark ? "text-ivory-100/65" : "text-ink-soft";
  const rule = dark ? "border-ivory-100/15" : "border-forest-900/15";

  return (
    <div>
      <p className={`text-xs ${muted}`}>
        As of <SlotText slot={market.asOf} tone={tone} /> · <SlotText slot={market.source} tone={tone} />
      </p>

      <dl className={`mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-sm border ${rule} ${dark ? "bg-ivory-100/15" : "bg-forest-900/15"}`}>
        {market.measures.map((m) => (
          <div key={m.label} className={`flex flex-col-reverse gap-3 p-4 sm:p-5 ${dark ? "bg-forest-900" : "bg-ivory-50"}`}>
            <dt className={`eyebrow !text-[0.65rem] ${dark ? "text-gold-300" : "text-gold-700"}`}>{m.label}</dt>
            <dd className={`font-display text-3xl leading-none sm:text-4xl ${dark ? "text-ivory-50" : "text-forest-900"}`}>
              {m.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <p className={`eyebrow ${dark ? "text-gold-300" : "text-gold-700"}`}>A true local</p>
        <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
          <SlotText slot={market.westGeorgiaDemand} tone={tone} />
        </p>
      </div>
    </div>
  );
}
