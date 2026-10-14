import { todo } from "@/lib/placeholders";
import type { CapacityItem, CaseStudy, ReachScreenshot, Stat, Testimonial } from "./types";

/** Section 04: real transaction performance only (brief §4, §9.3). */
export const stats: Stat[] = [
  {
    value: todo("Closed transactions (state the period)"),
    label: todo("Label for the closed-transactions stat"),
  },
  {
    value: todo("Lindsey's average days on market"),
    label: todo("Label, e.g. 'Average days on market'"),
    footnote: todo("Comparison baseline, e.g. MLS area average and period"),
  },
  {
    value: todo("Sale-to-list price ratio"),
    label: todo("Label for the sale-to-list stat"),
  },
  {
    value: todo("Lake, land or new-construction sales, if any"),
    label: todo("Label for the lake/land/new-construction stat"),
  },
];

/**
 * Social reach: Lindsey's own Content Library views, ranked by views.
 * Figures are read straight off the screenshots (July to early October posts).
 */
export const reach = {
  heading: "Where her listings get seen",
  lead: "Lindsey markets every listing on two Facebook pages, her business page and her personal one. These are her most-viewed recent posts, straight from the Content Library.",
  highlights: [
    { value: "13", label: "posts over 31,000 views each on the business page" },
    { value: "56,381", label: "views on her top personal-page post, a land listing with a private lake" },
    { value: "2", label: "pages she markets on, with listings cross-posted to both" },
  ],
  screenshots: [
    {
      label: "Business page",
      caption: "Top posts by views, July to September. Home tours, price drops and land listings.",
      image: {
        src: "/media/work/social/business-page.png",
        width: 464,
        height: 1180,
        alt: "Facebook Content Library for Lindsey's business page, listing her top posts ranked by views from 31,537 to 42,016",
      },
    },
    {
      label: "Personal page",
      caption: "Top posts by views, July to October. The 80-acre lake listing reached 56,381.",
      image: {
        src: "/media/work/social/personal-page.png",
        width: 463,
        height: 583,
        alt: "Facebook Content Library for Lindsey's personal page, with her top post at 56,381 views and four more between 14,569 and 25,639",
      },
    },
  ] satisfies ReachScreenshot[],
};

const caseStudy = (n: number): CaseStudy => ({
  id: `case-${n}`,
  property: todo(`Case study ${n}: property type`),
  location: todo(`Case study ${n}: town and state`),
  image: todo(`Case study ${n}: lead photo`),
  strategy: todo(`Case study ${n}: the strategy, in one or two sentences`),
  marketingSteps: todo(`Case study ${n}: three to five marketing steps actually taken`),
  timeline: todo(`Case study ${n}: listing to close timeline`),
  result: todo(`Case study ${n}: the result, e.g. sale price vs. list and days on market`),
  permission: todo(`Case study ${n}: client permission`),
});

/** 2–4 case studies. Add or remove entries to match what Lindsey supplies. */
export const caseStudies: CaseStudy[] = [caseStudy(1), caseStudy(2), caseStudy(3)];

const testimonial = (n: number): Testimonial => ({
  id: `t-${n}`,
  quote: todo(`Testimonial ${n}: exact words from a real client`),
  name: todo(`Testimonial ${n}: client name as they approve it, e.g. 'Sarah M.'`),
  context: todo(`Testimonial ${n}: context, e.g. 'Sold a lake home in Wedowee'`),
  permission: todo(`Testimonial ${n}: written permission to publish`),
});

export const testimonials: Testimonial[] = [testimonial(1), testimonial(2), testimonial(3)];

/** The capacity answer (brief §4): who covers what when Lindsey is at another closing. */
export const capacity: CapacityItem[] = [
  {
    question: "Who covers showings when Lindsey is at another closing?",
    answer: todo("Name and role of the backup agent, and how handoffs work"),
  },
  {
    question: "Who keeps contracts moving?",
    answer: todo("Transaction coordinator: name or arrangement, and what they own"),
  },
  {
    question: "How fast are leads answered?",
    answer: todo("Lindsey's real lead-response standard and how it's covered after hours"),
  },
  {
    question: "When is Lindsey at the lake?",
    answer: todo("Planned on-site days at Laketown North, e.g. 'every Saturday during launch'"),
  },
];
