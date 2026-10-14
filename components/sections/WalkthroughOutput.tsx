import { MediaImage } from "@/components/media/MediaImage";
import { VideoFacade } from "@/components/media/VideoFacade";
import { SlotText, TodoBlock } from "@/components/ui/Placeholder";
import { isTodo, valueOf } from "@/lib/placeholders";
import type { WalkthroughOutput as Output } from "@/content/types";

/** What a walkthrough step produced: an asset, a number, or a log. */
export function WalkthroughOutput({ output, stepId }: { output: Output; stepId: string }) {
  return (
    <figure className="w-full">
      {output.kind === "image" && (
        <MediaImage image={output.image} aspect="4 / 3" sizes="(min-width: 1024px) 45vw, 100vw" className="rounded-sm" />
      )}

      {output.kind === "video" && <VideoFacade video={output.video} trackingId={`walkthrough-${stepId}`} />}

      {output.kind === "metric" && (
        <div className="flex aspect-[4/3] flex-col justify-end rounded-sm bg-forest-900 p-8 text-ivory-50 sm:p-10">
          <p className="eyebrow text-gold-300">{output.label}</p>
          <p className="mt-3 font-display text-7xl leading-none sm:text-8xl">
            {isTodo(output.value) ? <span className="text-ivory-100/30">—</span> : valueOf(output.value)}
          </p>
          {isTodo(output.value) && (
            <div className="mt-5">
              <TodoBlock tone="dark" note={output.value.note} />
            </div>
          )}
          <p className="mt-5 max-w-md text-ivory-100/75">
            <SlotText slot={output.detail} tone="dark" />
          </p>
        </div>
      )}

      {output.kind === "timestamps" && (
        <div className="flex aspect-[4/3] flex-col justify-center rounded-sm bg-forest-900 p-8 text-ivory-50 sm:p-10">
          <p className="eyebrow text-gold-300">Lead response log</p>
          {isTodo(output.events) ? (
            <div className="mt-6">
              <TodoBlock tone="dark" note={output.events.note} />
            </div>
          ) : (
            <ol className="relative mt-6 space-y-5 border-l border-gold-300/40 pl-6">
              {valueOf(output.events)!.map((e) => (
                <li key={e.time + e.label} className="relative">
                  <span aria-hidden className="absolute top-2 -left-[1.72rem] size-2 rounded-full bg-gold-300" />
                  <p className="font-display text-3xl tabular-nums">{e.time}</p>
                  <p className="text-sm text-ivory-100/70">{e.label}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      {"caption" in output && (
        <figcaption className="mt-3 text-sm text-ink-soft">
          <SlotText slot={output.caption} />
        </figcaption>
      )}
    </figure>
  );
}
