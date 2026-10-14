/**
 * Provider-agnostic analytics (brief §3): video plays, section views and
 * meeting-request clicks only. No fingerprinting, no cross-site tracking.
 *
 * Wiring a provider later is one change in `send()`. Plausible, for example:
 *   window.plausible?.(name, { props })
 */

export type AnalyticsEvent =
  | { name: "section_view"; props: { section: string } }
  | { name: "video_play"; props: { video: string } }
  | { name: "video_unmute"; props: { video: string } }
  | { name: "video_complete"; props: { video: string } }
  | { name: "cta_click"; props: { method: "phone" | "email"; location: string } }
  | { name: "pdf_open"; props: { doc: "market-snapshot" | "launch-plan" } }
  | { name: "concept_interact"; props: { tab: string } };

function send(event: AnalyticsEvent) {
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event.name, event.props);
  }
}

export function track(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  try {
    send(event);
  } catch {
    // Analytics must never break the page.
  }
}
