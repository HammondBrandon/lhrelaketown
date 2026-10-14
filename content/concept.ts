import { todo } from "@/lib/placeholders";
import type { MarketRow, PlanItem, VideoAsset } from "./types";
import type { Slot } from "@/lib/placeholders";

/**
 * Section 05: concept demo, market snapshot, 90-day plan.
 * The demo is a labeled concept. No inventory, lot numbers, prices or plats.
 */

export const conceptLabel = "Concept preview, not an official Laketown North page";

export const conceptTabs = [
  {
    id: "lake",
    label: "The lake",
    purpose: "Sell the life before the lot. Buyers decide on a lake before they choose a parcel.",
  },
  {
    id: "story",
    label: "The community",
    purpose: "Tell the community's story in chapters that Laketown writes and approves. This example uses placeholder copy.",
  },
  {
    id: "register",
    label: "Register interest",
    purpose: "Capture leads with consent and route them to a person in under an hour.",
  },
  {
    id: "lots",
    label: "Lots",
    purpose: "Inventory appears only when Laketown approves it. Until then this space stays empty on purpose.",
  },
] as const;

export type ConceptTabId = (typeof conceptTabs)[number]["id"];

/** Clearly illustrative storytelling chapters for the demo. */
export const conceptStory = [
  {
    kicker: "Chapter one",
    title: "Where the bridge meets the water",
    body: "Illustrative copy. The opening chapter would introduce the peninsula as people first see it: from the Highway 48 bridge.",
  },
  {
    kicker: "Chapter two",
    title: "A day on Wedowee",
    body: "Illustrative copy. A morning-to-evening story told in footage from the water, with the community's own details added once approved.",
  },
  {
    kicker: "Chapter three",
    title: "The neighbors you'll have",
    body: "Illustrative copy. Real buyer stories would go here, with their permission, as Phase 1 sells.",
  },
];

export const conceptLifestyleVideo: VideoAsset = {
  title: "Lake Wedowee",
  vimeoId: todo("Vimeo ID: generic Lake Wedowee lifestyle footage for the concept demo (water or public access only)"),
  poster: todo("Poster still for the concept lifestyle film"),
  duration: todo("Runtime, concept lifestyle film"),
};

/** Market snapshot: MLS export, Randolph and Clay counties, sold weighted over asking (brief §4). */
export const market = {
  asOf: todo("MLS export date") as Slot<string>,
  source: todo("Data source line, e.g. 'GAMLS / ValleyMLS export, Randolph and Clay counties'") as Slot<string>,
  rows: todo(
    "Lake lot rows by cove or area: active, sold (12 mo), median sold price per waterfront foot, median days on market",
  ) as Slot<MarketRow[]>,
  thinInventory: todo("Where lake-lot inventory is thin, in one or two sentences from the MLS data") as Slot<string>,
  westGeorgiaDemand: todo(
    "Short note on West Georgia buyer demand, backed by Lindsey's own buyer activity or data",
  ) as Slot<string>,
};

/**
 * First 90 days (brief §4). The five workstreams come from the brief.
 * Details and timing are Lindsey's commitments, so she writes them.
 */
export const launchPlan: PlanItem[] = [
  {
    id: "preview-event",
    title: "Carrollton-area preview event",
    detail: todo("What the preview event is, who's invited, and how guests are followed up"),
    timing: todo("When it happens relative to the Phase 1 release"),
  },
  {
    id: "lake-day",
    title: "Buyer lake day",
    detail: todo("How the buyer lake day works: boat tour from public access, what buyers see"),
    timing: todo("Timing for the buyer lake day"),
  },
  {
    id: "media",
    title: "Photo and video schedule",
    detail: todo("Shoot plan: progress footage from the water, seasons, launch film"),
    timing: todo("Cadence, e.g. monthly from the water"),
  },
  {
    id: "lead-response",
    title: "One-hour lead response",
    detail: todo("How every inquiry gets a personal reply within one hour, including evenings and weekends"),
    timing: todo("When this standard starts"),
  },
  {
    id: "showings",
    title: "Showing coverage",
    detail: todo("Who shows lots, how on-site days are scheduled, and the backup when Lindsey is at a closing"),
    timing: todo("Showing schedule during launch"),
  },
];
