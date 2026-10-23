import { todo, verify } from "@/lib/placeholders";
import type { Slot } from "@/lib/placeholders";
import type { CapacityItem, CaseStudy, ImageAsset, ReachScreenshot, Stat, Testimonial } from "./types";

/** Section 04: real transaction performance only (brief §4, §9.3). */
export const stats: Stat[] = [
  { value: "55", label: "Closed transactions in 2026" },
  { value: "53,959", label: "Average views per property listed" },
  { value: "7", label: "Sellers who were unhappy with their previous realtor and hired Lindsey to market their home" },
  { value: "15", label: "Properties sold in 2026 where Lindsey\u2019s marketing directly brought the buyer to the seller" },
];

/**
 * Social reach: Lindsey's own Content Library views, ranked by views.
 * Figures are read straight off the screenshots (July to early October posts).
 */
export const reach = {
  heading: "Where her listings get seen",
  lead: "Lindsey promotes listings on her business and personal Facebook pages, TikTok, YouTube, Instagram and LinkedIn, along with dedicated property webpages, digital advertising and agent outreach. These are her most-viewed recent Facebook posts, straight from the Content Library.",
  highlights: [
    { value: "13", label: "posts with over 31,000 views each on the business page" },
    { value: "56,381", label: "views on her personal page alone for one of her most recent land listings" },
    { value: "2.2M", label: "views across her two pages in the last 90 days (July 16 to October 13)" },
    { value: "2", label: "pages she uses to market your property, which means double the exposure, with the average property listing seeing 53,959 views" },
  ],
  /** Facebook Insights, "Last 90 days: Jul 16 – Oct 13". Which page is which is deliberately not stated. */
  ninetyDay: {
    heading: "The last 90 days",
    statement:
      "Across July 16 to October 13, her two pages recorded 1,248,417 and 960,608 views, up 49% and 30% on the 90 days before.",
    screenshots: [
      {
        src: "/media/work/social/90-day-views-a.png",
        width: 1086,
        height: 392,
        alt: "Facebook Insights for the last 90 days, July 16 to October 13: 1,248,417 views, up 49%",
      },
      {
        src: "/media/work/social/90-day-views-b.png",
        width: 1076,
        height: 392,
        alt: "Facebook Insights for the last 90 days, July 16 to October 13: 960,608 views, up 30%",
      },
    ] satisfies ImageAsset[],
  },
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

const caseStudy = (id: string, property: string, location: Slot<string>): CaseStudy => ({
  id: `case-${id}`,
  property,
  location,
  image: todo(`${property}: lead photo`),
  problem: todo(`${property}: what made it difficult to market or sell`),
  strategy: todo(`${property}: the strategy, in one or two sentences`),
  marketingSteps: todo(`${property}: three to five marketing steps actually taken`),
  timeline: todo(`${property}: listing to close timeline`),
  result: todo(`${property}: the result, e.g. sale price vs. list and days on market`),
  permission: todo(`${property}: client permission`),
});

const stateCheck = "Confirm the state for this address";

/** "Listings, in detail": five real listings. Colton's review is for Barnes Rd. */
export const caseStudies: CaseStudy[] = [
  caseStudy("barnes-rd", "Barnes Rd", todo("Barnes Rd: town and state")),
  caseStudy("cr-475", "0 County Road 475", verify("Woodland, AL", stateCheck) as Slot<string>),
  caseStudy("main-st", "791 Main St", "Wedowee, AL"),
  caseStudy("gun-club-rd", "0 Gun Club Rd", verify("Tallapoosa, GA", stateCheck) as Slot<string>),
  caseStudy("bethlehem-church-rd", "275 Bethlehem Church Rd", verify("Carrollton, GA", stateCheck) as Slot<string>),
];

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
 * Full, verbatim text of public Google reviews, never reworded. Paragraph
 * breaks are "\n\n". Names are shown as first name and last initial.
 */
const googleReview = (
  id: string,
  name: string,
  context: string,
  quote: string,
  related?: Testimonial["related"],
): Testimonial => ({
  id,
  quote,
  name,
  context,
  source: "Google",
  related,
  permission: verify(true, `Confirm ${name} is comfortable being quoted on this page (public Google review)`),
});

export const testimonials: Testimonial[] = [
  googleReview(
    "t-colton",
    "Colton",
    "Sold Barnes Rd",
    "We chose Lindsey based on a referral, and we’re so glad we did. She was fantastic to work with from start to finish.\n\nHer communication throughout the entire process was excellent. She always kept us informed, was easy to reach, and made sure we knew what to expect every step of the way. Anytime a small hiccup came up, she had a way of keeping us calm and was always ready with a solution or another idea for how to move forward.\n\nSelling a house is stressful but Lindsey made the whole process a lot easier. We always felt like she was looking out for us and giving us good advice. We had a great experience and would definitely recommend her to anyone looking to buy or sell!",
    { label: "See the Barnes Rd listing", href: "#case-barnes-rd" },
  ),
  googleReview(
    "t-kirsten",
    "Kirsten P.",
    "Bought a home",
    "We truly cannot say enough wonderful things about Lindsey! What started as a home-buying journey became such a beautiful reminder of God’s timing, faithfulness, and the way He works through people to bring things together. We believe it was through faith and His hands that He brought us to this home, and we are so grateful Lindsey was part of that journey.\n\nLindsey was available every single time we needed her, and that’s how you know you’re truly being taken care of. She was there to answer questions, walk us through the process, and help us navigate every step. What we thought would be a closing process of over a month turned into signing papers in just 15 days! We had a few hiccups along the way, but looking back, even those turned out to be little gifts from God that helped everything fall into place.\n\nBecause we share a personal relationship and attend the same church, this experience was especially meaningful to us. Lindsey wasn’t just helping us buy a house; she was helping us step into a new chapter for our family.\n\nWe cannot wait to breathe new life into this beautiful 1890 home, fill it with love and memories, and make it a place where God remains at the center of it all. We are beyond thankful for Lindsey and would wholeheartedly recommend her to anyone looking for a realtor who genuinely cares, shows up when you need her, and makes you feel taken care of throughout the entire process!\n\nThank you, Lindsey, for being part of such a special blessing for our family! 💗 🏡",
  ),
  googleReview(
    "t-lecette",
    "Lecette P.",
    "Sold a home",
    "Thank you Lindsey for your Amazing hand in selling our home! I could not have asked for a better realtor. You came in and got our home sold just under 2 months after being on the market for months. The work that you put into each home you sell shows this is what you LOVE to do! Selling the home is great but to have someone in your corner that cares and is on top of things is a blessing! We appreciate all that you have done the showings, the pictures, the drone footage, the videos of our home, the images you captured to show buyers what the home has potential to be in every room. You have exceeded our expectations of a realtor and can’t thank you enough! If you are looking for someone who is motivated, driven, and loves what they do…. Don’t waste any time and call Lindsey!",
  ),
  googleReview(
    "t-sandee",
    "Sandee M.",
    "Sold a home",
    "Let me take a moment to talk about MY AGENT Lindsey Hammond!! She was amazing!! I chose her because her marketing stood out like no other agent. She not only took pictures but made drone footage and made a very cute video of her running through my front yard before going inside my house. She was very knowledgeable on pricing my house and getting a full offer. She was always quick to respond and help with any questions or issues that came up. Not only did she become MY AGENT but became My Friend as well. Thank you Lindsey! YOU ARE THE BEST!!💗",
  ),
  googleReview(
    "t-savannah",
    "Savannah M.",
    "Sold their first home",
    "Selling our first home was NOT an easy decision or task... after using another realtor we were unsure if we even wanted to sell, then came along lindsey you can’t miss her advertisement.. BIG, BRIGHT, BOLD, and did i mention PINK! She is the kind of realtor you see constant success stories from & hard work on EVERY listing big or small. So common sense led us to her. Little did we know she was ALOT better then we even knew. she immediately was straight forward answering every question we had,as well as giving us clear instructions on how to best prep our home, following with a very quick listing shoot with multiple forms of advertisement all filmed same day. To say the least we were impressed from the start before we even got our first showing! i can not even begin to express our gratitude for her she fought for us at every turn even when we thought something was not going to work she made sure it did! My favorite thing was the communication she would answer my calls or texts anytime a day no matter what it was! If you’re looking for a realtor i cannot recommend her enough! We have definitely found our realtor for the rest of our moving needs!",
  ),
];

/** The capacity answer (brief §4): who covers what when Lindsey is at another closing. */
export const capacity: CapacityItem[] = [
  {
    question: "Who covers showings when Lindsey is at another closing?",
    answer: verify(
      "A designated licensed backup agent covers showings, using access procedures approved by the developer.",
      "Name the backup agent: the notes say both Brandon and Miho. Confirm who it is and how handoffs work",
    ) as Slot<string>,
  },
  {
    question: "Who keeps contracts moving?",
    answer:
      "John, Lindsey's transaction coordinator, coordinates paperwork, tracks deadlines, communicates with the parties involved, and follows up on outstanding documents.",
  },
  {
    question: "How fast are leads answered?",
    answer: verify(
      "Lindsey's CRM and automations manage, track and follow up on every lead. Miho handles client-related communication and serves as Lindsey's backup, so replies stay timely and follow-up stays consistent.",
      "Confirm the one-hour personal reply commitment and who covers evenings and weekends before publishing it",
    ) as Slot<string>,
  },
  {
    question: "When is Lindsey at the lake?",
    answer: verify(
      "A regular Saturday appointment window during launch, with weekday appointments by arrangement.",
      "Lindsey needs to confirm this on-site commitment",
    ) as Slot<string>,
  },
];
