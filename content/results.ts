import { todo, verify } from "@/lib/placeholders";
import type { CapacityItem, CaseStudy, ImageAsset, ReachScreenshot, Stat, Testimonial } from "./types";

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

/** Where the testimonials come from: Lindsey's Google Business Profile. */
export const googleRating = {
  score: "5.0",
  count: 103,
  image: {
    src: "/media/work/reviews/google-rating.png",
    width: 340,
    height: 52,
    alt: "Google rating: 5.0 out of 5 stars from 103 reviews",
  } satisfies ImageAsset,
};

/**
 * Verbatim excerpts from public Google reviews (never reworded; ellipses mark
 * where text was cut). Names are shown as first name and last initial.
 */
const googleReview = (
  id: string,
  name: string,
  context: string,
  quote: string,
): Testimonial => ({
  id,
  quote,
  name,
  context,
  source: "Google",
  permission: verify(true, `Confirm ${name} is comfortable being quoted on this page (public Google review)`),
});

export const testimonials: Testimonial[] = [
  googleReview(
    "t-colton",
    "Colton",
    "Sold a home",
    "We chose Lindsey based on a referral, and we\u2019re so glad we did. She was fantastic to work with from start to finish. Her communication throughout the entire process was excellent. She always kept us informed, was easy to reach, and made sure we knew what to expect every step of the way.",
  ),
  googleReview(
    "t-kirsten",
    "Kirsten P.",
    "Bought a home",
    "Lindsey was available every single time we needed her, and that\u2019s how you know you\u2019re truly being taken care of. She was there to answer questions, walk us through the process, and help us navigate every step. What we thought would be a closing process of over a month turned into signing papers in just 15 days!",
  ),
  googleReview(
    "t-lecette",
    "Lecette P.",
    "Sold a home",
    "You came in and got our home sold just under 2 months after being on the market for months. The work that you put into each home you sell shows this is what you LOVE to do!",
  ),
  googleReview(
    "t-sandee",
    "Sandee M.",
    "Sold a home",
    "I chose her because her marketing stood out like no other agent. She not only took pictures but made drone footage and made a very cute video of her running through my front yard before going inside my house. She was very knowledgeable on pricing my house and getting a full offer.",
  ),
  googleReview(
    "t-savannah",
    "Savannah M.",
    "Sold their first home",
    "My favorite thing was the communication she would answer my calls or texts anytime a day no matter what it was! If you\u2019re looking for a realtor i cannot recommend her enough!",
  ),
];

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
