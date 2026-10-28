import type { MarketMeasure, PlanItem } from "./types";
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

/** Market snapshot: MLS export, Randolph and Clay counties, sold weighted over asking (brief §4). */
export const market = {
  asOf: "October 23, 2026" as Slot<string>,
  source: "Closed MLS sales of waterfront land classified as lots" as Slot<string>,
  /** The 26 closed MLS records classified as lots (28 waterfront land records in all; the 2 non-lots are left out). */
  measures: [
    { label: "Closed lot sales", value: "26" },
    { label: "Median sold price", value: "$175,000" },
    { label: "Average sold price", value: "$205,962" },
    { label: "Total sold volume", value: "$5,354,999" },
    { label: "Median days on market", value: "85" },
    { label: "Average days on market", value: "159.2" },
    { label: "Highest sold price", value: "$875,000" },
    { label: "Median acreage", value: "0.99 acres" },
  ] satisfies MarketMeasure[],
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
    detail: "An invitation-only introduction for interested buyers and agents, featuring approved community information, lake footage and the purchase process. Lindsey\u2019s local attorney has already committed to providing lunch for all participants to help generate interest. Guest interests are collected and followed up personally.",
    timing: "Two to four weeks before the approved Phase 1 release.",
  },
  {
    id: "lake-day",
    title: "Buyer lake day",
    detail: "Scheduled small-group boat tours departing from an established public access location or marina, introducing the lake and approved views of the community. Lindsey\u2019s lender has committed to hosting a cookout for everyone who shows up. Subject to developer approval and boat operator arrangements.",
    timing: "After the lake fills back up in the spring.",
  },
  {
    id: "media",
    title: "Photo and video schedule",
    detail: "An initial collection of lake lifestyle footage, community photography, aerial views and a launch film, with progress coverage added as development advances.",
    timing: "Initial production before launch, monthly progress coverage, and additional shoots at major milestones.",
  },
  {
    id: "lead-response",
    title: "One-hour lead response",
    detail: "A CRM and automations manage, track and follow up on every lead. Miho handles client-related communication and serves as Lindsey\u2019s backup, so replies stay timely and consistent.",
    timing: "Before public registrations open.",
  },
  {
    id: "showings",
    title: "Showing coverage",
    detail: "Lindsey and a designated licensed backup agent show lots, using access procedures approved by the developer.",
    timing: "A regular Saturday appointment window during launch, with weekday appointments by arrangement.",
  },
];
