import type { Slot } from "@/lib/placeholders";

/** A Vimeo-hosted video. `poster` is a local still in /public/media. */
export type VideoAsset = {
  vimeoId: Slot<string>;
  /** Optional unlisted-video hash (the part after the ID in a private link). */
  vimeoHash?: string;
  poster: Slot<ImageAsset>;
  title: string;
  /** Human-readable runtime, e.g. "0:48". */
  duration: Slot<string>;
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
  category: "film" | "photography" | "campaign" | "behind-the-scenes";
  title: Slot<string>;
  /** Property or context, e.g. "Lakefront listing, Heflin AL". */
  context: Slot<string>;
  media: { kind: "video"; video: VideoAsset } | { kind: "image"; image: Slot<ImageAsset> };
  /** Layout hint for the editorial grid. */
  size?: "wide" | "tall" | "standard";
  /** Client permission to use this asset (brief §9.2). */
  permission: Slot<true>;
};

export type WalkthroughOutput =
  | { kind: "image"; image: Slot<ImageAsset>; caption: Slot<string> }
  | { kind: "video"; video: VideoAsset; caption: Slot<string> }
  | { kind: "metric"; value: Slot<string>; label: string; detail: Slot<string> }
  | { kind: "timestamps"; events: Slot<{ time: string; label: string }[]>; caption: Slot<string> };

export type WalkthroughStep = {
  id: string;
  title: string;
  summary: Slot<string>;
  output: WalkthroughOutput;
};

export type Stat = { value: Slot<string>; label: Slot<string>; footnote?: Slot<string> };

export type CaseStudy = {
  id: string;
  property: Slot<string>;
  location: Slot<string>;
  image: Slot<ImageAsset>;
  strategy: Slot<string>;
  marketingSteps: Slot<string[]>;
  timeline: Slot<string>;
  result: Slot<string>;
  permission: Slot<true>;
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
};

export type ReachScreenshot = {
  image: ImageAsset;
  /** Short label above the screenshot, e.g. "Business page". */
  label: string;
  /** What the screenshot shows, in one sentence. */
  caption: string;
};

export type CapacityItem = { question: string; answer: Slot<string> };

export type MarketRow = {
  area: string;
  active: number;
  sold12mo: number;
  medianSoldPerWaterfrontFt: string;
  medianDom: number;
  note?: string;
};

export type PlanItem = { id: string; title: string; detail: Slot<string>; timing: Slot<string> };
