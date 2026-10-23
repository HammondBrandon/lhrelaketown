import { todo, verify } from "@/lib/placeholders";
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
  // Local roots and service area only. Add a demand claim once Lindsey has records to back it.
  westGeorgiaDemand:
    "Lindsey grew up on the lake and is a true local, with connections all over Georgia and Alabama. She serves West Georgia and East Alabama, including the communities within driving distance of Lake Wedowee." as Slot<string>,
};

/**
 * First 90 days (brief §4). The five workstreams come from the brief.
 * Details and timing are Lindsey's commitments, so she writes them.
 */
export const launchPlan: PlanItem[] = [
  {
    id: "preview-event",
    title: "Carrollton-area preview event",
    detail: verify("An invitation-only introduction for interested buyers and agents, featuring approved community information, lake footage and the purchase process. Guest interests are collected and followed up personally.", "Proposed plan: Lindsey to confirm") as Slot<string>,
    timing: verify("Two to four weeks before the approved Phase 1 release.", "Proposed timing: Lindsey to confirm") as Slot<string>,
  },
  {
    id: "lake-day",
    title: "Buyer lake day",
    detail: verify("Scheduled small-group boat tours departing from an established public access location or marina, introducing the lake and approved views of the community. Subject to developer approval and boat operator arrangements.", "Proposed plan: Lindsey to confirm") as Slot<string>,
    timing: verify("During the first month of the release, with additional dates based on demand and weather.", "Proposed timing: Lindsey to confirm") as Slot<string>,
  },
  {
    id: "media",
    title: "Photo and video schedule",
    detail: verify("An initial collection of lake lifestyle footage, community photography, aerial views and a launch film, with progress coverage added as development advances.", "Proposed plan: Lindsey to confirm") as Slot<string>,
    timing: verify("Initial production before launch, monthly progress coverage, and additional shoots at major milestones.", "Proposed schedule: Lindsey to confirm") as Slot<string>,
  },
  {
    id: "lead-response",
    title: "One-hour lead response",
    detail: verify("A CRM and automations manage, track and follow up on every lead. Miho handles client-related communication and serves as Lindsey\u2019s backup, so replies stay timely and consistent.", "The one-hour personal reply needs confirmed evening and weekend coverage before publishing") as Slot<string>,
    timing: verify("Before public registrations open.", "Proposed timing: Lindsey to confirm") as Slot<string>,
  },
  {
    id: "showings",
    title: "Showing coverage",
    detail: verify("Lindsey and a designated licensed backup agent show lots, using access procedures approved by the developer.", "Name the backup agent (notes say both Brandon and Miho) and confirm") as Slot<string>,
    timing: verify("A regular Saturday appointment window during launch, with weekday appointments by arrangement.", "Lindsey needs to confirm this commitment") as Slot<string>,
  },
];
