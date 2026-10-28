import type { Slot } from "@/lib/placeholders";

/** A Vimeo-hosted video. `poster` is a local still in /public/media; without one the player shows a plain frame. */
export type VideoAsset = {
  vimeoId: Slot<string>;
  /** Optional unlisted-video hash (the part after the ID in a private link). */
  vimeoHash?: string;
  poster?: Slot<ImageAsset>;
  title: string;
  /** Human-readable runtime, e.g. "0:48". */
  duration?: Slot<string>;
};

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Source = { label: string; publisher: string; date: string; url: string };

export type GalleryItem = {
  id: string;
  category: "film" | "photography";
  title: Slot<string>;
  /** Property or context, e.g. "Lakefront listing, Heflin AL". */
  context: Slot<string>;
  media: { kind: "video"; video: VideoAsset } | { kind: "image"; image: Slot<ImageAsset> };
  /** Layout hint for the editorial grid. */
  size?: "wide" | "tall" | "standard";
  /** Client permission to use this asset (brief §9.2). */
  permission: Slot<true>;
};

export type WalkthroughStep = {
  id: string;
  title: string;
  summary: string;
  /** What this step produced, shown beside the step: a still, or a video. */
  image?: Slot<ImageAsset>;
  video?: VideoAsset;
};

export type Stat = { value: Slot<string>; label: Slot<string>; footnote?: Slot<string> };

export type CaseStudy = {
  id: string;
  property: string;
  location: string;
  image: Slot<ImageAsset>;
  /** What made the property difficult to market or sell. */
  problem: string;
  strategy?: string;
  marketingSteps?: string[];
  /** When it listed, when it went under contract (binding), and the days between. */
  timeline: { listed: string; underContract: string; daysToContract: number };
  result?: string;
};

export type Testimonial = {
  id: string;
  quote: Slot<string>;
  name: Slot<string>;
  context: Slot<string>;
  /** Written permission from the client to publish (brief §3). */
  permission: Slot<true>;
  /** Where the words were published, e.g. "Google". */
  source?: string;
  /** A link to the listing this review is about. */
  related?: { label: string; href: string };
};

export type ReachScreenshot = {
  image: ImageAsset;
  /** Short label above the screenshot, e.g. "Business page". */
  label: string;
  /** What the screenshot shows, in one sentence. */
  caption: string;
};

export type CapacityItem = { question: string; answer: Slot<string> };

export type MarketMeasure = {
  label: string;
  value: string;
};

export type PlanItem = { id: string; title: string; detail: Slot<string>; timing: Slot<string> };
