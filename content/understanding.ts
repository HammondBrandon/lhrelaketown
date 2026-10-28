import type { Source } from "./types";

/**
 * Section 01. Only the verified public facts from the brief (§2).
 * Laketown North's lot sizes, pricing, amenities, covenants and timeline are
 * not public. Do not add them here.
 */

export const sources: Record<"leader" | "encyclopedia", Source> = {
  leader: {
    label: "County clears the way for start of major development on Lake Wedowee",
    publisher: "The Randolph Leader",
    date: "Oct 13, 2026",
    url: "https://www.therandolphleader.com/2026/10/13/county-clears-the-way-for-start-of-major-development-on-lake-wedowee/",
  },
  encyclopedia: {
    label: "Lake Wedowee",
    publisher: "Encyclopedia of Alabama",
    date: "",
    url: "https://encyclopediaofalabama.org/",
  },
};

export const facts = [
  {
    figure: "1,819",
    unit: "acres",
    text: "across four sites on Lake Wedowee, bought by Daniel Communities in August 2026 for nearly $50 million. The land was previously owned by Alabama Power.",
  },
  {
    figure: "40+",
    unit: "lots",
    text: "in Laketown North, Phase 1, which is among the largest subdivisions on the lake. The county has cleared the way for it.",
  },
  {
    figure: "Jan",
    unit: "2027",
    text: "is the earliest construction could start. Troy Lucas has said plans for Phase 1 are nearly complete.",
  },
] as const;

export const site = {
  heading: "A peninsula people can already see",
  body: "Laketown North sits on a peninsula visible from the Highway 48 bridge, across from Wedowee Marine South. People will notice it long before there is anything to sell, so the first impression is already part of the marketing.",
};

export const laketown = {
  heading: "Laketown on Lake Wedowee",
  body: "Laketown is the Daniel Communities arm that builds lakefront communities across Alabama. Fox Creek, near Flat Rock Park, is already on Lake Wedowee. Laketown North is next.",
};

export const whyItMatters = [
  {
    title: "For the lake",
    body: "Phase 1 alone is among the largest subdivisions on Lake Wedowee. How it launches will shape how buyers see the whole lake.",
  },
  {
    title: "For Wedowee and Randolph County",
    body: "New lakefront homes mean work for local builders, marinas and businesses, and new neighbors who spend their weekends here.",
  },
  {
    title: "For buyers",
    body: "Lake Wedowee covers roughly 10,660 acres within about 100 miles of both Birmingham and Atlanta, and it already draws visitors from Atlanta and Newnan. That West Georgia corridor is where Lindsey works every day.",
  },
];
