import { SlotText, TodoBlock } from "@/components/ui/Placeholder";
import { isTodo, valueOf } from "@/lib/placeholders";
import { market } from "@/content/concept";

/** Lake Wedowee lot market snapshot. Renders on the page and on the print route. */
export function MarketSnapshot({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const muted = dark ? "text-ivory-100/65" : "text-ink-soft";
  const rule = dark ? "border-ivory-100/15" : "border-forest-900/15";
  const rows = valueOf(market.rows);

  return (
    <div>
      <p className={`text-xs ${muted}`}>
        As of <SlotText slot={market.asOf} tone={tone} /> · <SlotText slot={market.source} tone={tone} /> · Sold
        prices are weighted over asking prices.
      </p>

      <div className="mt-5 overflow-x-auto">
        {isTodo(market.rows) ? (
          <TodoBlock tone={tone} note={market.rows.note} label="TODO · MLS data" />
        ) : (
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="sr-only">Lake Wedowee lake-lot market by area</caption>
            <thead>
              <tr className={`border-b ${rule}`}>
                {["Cove / area", "Active", "Sold, 12 mo", "Median sold $/waterfront ft", "Median DOM"].map((h) => (
                  <th key={h} scope="col" className={`eyebrow py-3 pr-4 font-semibold ${dark ? "text-gold-300" : "text-gold-700"}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="tabular-nums">
              {rows!.map((r) => (
                <tr key={r.area} className={`border-b ${rule}`}>
                  <th scope="row" className="py-3 pr-4 font-medium">
                    {r.area}
                    {r.note && <span className={`block text-xs font-normal ${muted}`}>{r.note}</span>}
                  </th>
                  <td className="py-3 pr-4">{r.active}</td>
                  <td className="py-3 pr-4">{r.sold12mo}</td>
                  <td className="py-3 pr-4">{r.medianSoldPerWaterfrontFt}</td>
                  <td className="py-3 pr-4">{r.medianDom}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <p className={`eyebrow ${dark ? "text-gold-300" : "text-gold-700"}`}>Where inventory is thin</p>
          <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
            <SlotText slot={market.thinInventory} tone={tone} />
          </p>
        </div>
        <div>
          <p className={`eyebrow ${dark ? "text-gold-300" : "text-gold-700"}`}>A true local</p>
          <p className={`mt-2 text-sm leading-relaxed ${muted}`}>
            <SlotText slot={market.westGeorgiaDemand} tone={tone} />
          </p>
        </div>
      </div>
    </div>
  );
}
