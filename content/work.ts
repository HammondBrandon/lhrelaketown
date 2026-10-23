import { todo, verify } from "@/lib/placeholders";
import type { GalleryItem, WalkthroughStep } from "./types";

/**
 * Section 03 — the strongest section (brief §4). Real listing films,
 * photography, campaigns and behind-the-scenes footage, each with client
 * permission. Drop raw files in /content-inbox; processed stills go to
 * /public/media/work and videos to Vimeo.
 */
export const gallery: GalleryItem[] = [
  {
    id: "film-barnes-rd",
    category: "film",
    size: "wide",
    title: "Barnes Rd",
    context: "Listing film · Triple R Real Estate",
    media: {
      kind: "video",
      video: {
        title: "Barnes Rd listing film",
        vimeoId: "1235888164",
        poster: { src: "/media/work/barnes-rd.jpg", width: 1280, height: 720, alt: "Barnes Rd listing film, opening frame" },
        duration: "1:16",
      },
    },
    permission: verify(true, "Confirm the seller of Barnes Rd has OK'd showing this film in a pitch (brief §9.2)"),
  },
  {
    id: "film-cr-203",
    category: "film",
    title: "CR 203",
    context: "Listing film · Triple R Real Estate",
    media: {
      kind: "video",
      video: {
        title: "CR 203 listing film",
        vimeoId: "1235890195",
        poster: { src: "/media/work/cr-203.jpg", width: 1280, height: 720, alt: "CR 203 listing film, opening frame" },
        duration: "1:19",
      },
    },
    permission: verify(true, "Confirm the seller of CR 203 has OK'd showing this film in a pitch (brief §9.2)"),
  },
  {
    id: "film-coldwater",
    category: "film",
    title: "Coldwater Land",
    context: "Listing film · Triple R Real Estate",
    media: {
      kind: "video",
      video: {
        title: "Coldwater Land listing film",
        vimeoId: "1235891167",
        poster: { src: "/media/work/coldwater.jpg", width: 1280, height: 720, alt: "Coldwater Land listing film, opening frame" },
        duration: "0:58",
      },
    },
    permission: verify(true, "Confirm the seller of Coldwater Land has OK'd showing this film in a pitch (brief §9.2)"),
  },
  {
    id: "film-kris-st",
    category: "film",
    size: "wide",
    title: "Kris St",
    context: "Listing film · Triple R Real Estate",
    media: {
      kind: "video",
      video: {
        title: "Kris St listing film",
        vimeoId: "1235892074",
        poster: { src: "/media/work/kris-st.jpg", width: 1280, height: 720, alt: "Kris St listing film, opening frame" },
        duration: "1:16",
      },
    },
    permission: verify(true, "Confirm the seller of Kris St has OK'd showing this film in a pitch (brief §9.2)"),
  },
  {
    id: "photo-creek-meadow",
    category: "photography",
    size: "wide",
    title: "Creek and meadow",
    context: "Aerial of a creek winding through open pasture",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/creek-meadow.jpg", width: 2048, height: 1536, alt: "Aerial view of a creek winding through green pasture and woods" },
    },
    permission: verify(true, "Confirm the seller of the creek and meadow photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-aerial-pond",
    category: "photography",
    title: "Pond in the pines",
    context: "Aerial of a pond set in timberland",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/aerial-pond.jpg", width: 2400, height: 1350, alt: "Aerial view of a small pond surrounded by dense pine forest" },
    },
    permission: verify(true, "Confirm the seller of the pond in the pines photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-pond-reflection",
    category: "photography",
    title: "Pond at the tree line",
    context: "Waterfront acreage",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/pond-reflection.jpg", width: 2400, height: 1350, alt: "A pond reflecting the surrounding trees and sky" },
    },
    permission: verify(true, "Confirm the seller of the pond at the tree line photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-aerial-roadway",
    category: "photography",
    size: "wide",
    title: "Road frontage",
    context: "Aerial of acreage along the highway",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/aerial-roadway.jpg", width: 2400, height: 1350, alt: "Aerial view of wooded land along a highway beside a lake inlet" },
    },
    permission: verify(true, "Confirm the seller of the road frontage photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-aerial-timber",
    category: "photography",
    title: "Timberland",
    context: "Aerial of a rural tract",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/aerial-timber.jpg", width: 1672, height: 941, alt: "Aerial view of a wooded rural tract with a dirt road" },
    },
    permission: verify(true, "Confirm the seller of the timberland photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-wooded-trail",
    category: "photography",
    title: "Wooded trail",
    context: "Acreage walk-through",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/wooded-trail.jpg", width: 1536, height: 1024, alt: "A leaf-covered trail running through mature hardwoods and pines" },
    },
    permission: verify(true, "Confirm the seller of the wooded trail photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-kitchen-island",
    category: "photography",
    size: "wide",
    title: "Kitchen",
    context: "Interior, home listing",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/kitchen-island.jpg", width: 2400, height: 1600, alt: "Kitchen with cherry cabinets, a tile island and bar stools, opening to a sunroom" },
    },
    permission: verify(true, "Confirm the seller of the kitchen photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-open-kitchen",
    category: "photography",
    title: "Open kitchen",
    context: "Interior, home listing",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/open-kitchen.jpg", width: 2400, height: 1600, alt: "Updated kitchen with quartz counters and navy cabinets, open to the living room" },
    },
    permission: verify(true, "Confirm the seller of the open kitchen photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-primary-bedroom",
    category: "photography",
    title: "Primary bedroom",
    context: "Interior, home listing",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/primary-bedroom.jpg", width: 2400, height: 1600, alt: "Bedroom with pine floors, tufted bed and French doors" },
    },
    permission: verify(true, "Confirm the seller of the primary bedroom photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-primary-suite",
    category: "photography",
    title: "Primary suite",
    context: "Interior, home listing",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/primary-suite.jpg", width: 1536, height: 1024, alt: "Primary suite with a tray ceiling, canopy bed and hardwood floors" },
    },
    permission: verify(true, "Confirm the seller of the primary suite photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-screened-porch",
    category: "photography",
    title: "Screened porch",
    context: "Outdoor living, home listing",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/screened-porch.jpg", width: 1536, height: 1024, alt: "Screened porch with a living wall, seating and a deck beyond" },
    },
    permission: verify(true, "Confirm the seller of the screened porch photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-sunroom",
    category: "photography",
    title: "Sunroom",
    context: "Interior, home listing",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/sunroom.jpg", width: 1536, height: 1024, alt: "Bright sunroom with a wall of windows and a view of the yard" },
    },
    permission: verify(true, "Confirm the seller of the sunroom photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-porch-swing",
    category: "photography",
    title: "Front porch",
    context: "Exterior, home listing",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/porch-swing.jpg", width: 1448, height: 1086, alt: "Covered front porch with a hanging swing" },
    },
    permission: verify(true, "Confirm the seller of the front porch photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "photo-porch-steps",
    category: "photography",
    title: "Porch steps",
    context: "Exterior, home listing",
    media: {
      kind: "image",
      image: { src: "/media/work/photos/porch-steps.jpg", width: 1536, height: 1024, alt: "View from a white-columned porch down steps to a wooded yard" },
    },
    permission: verify(true, "Confirm the seller of the porch steps photos has OK'd showing them in a pitch (brief §9.2)"),
  },
  {
    id: "campaign-1",
    category: "campaign",
    title: todo("Marketing campaign #1 (ad, mailer, social series)"),
    context: todo("What it promoted and where it ran"),
    media: { kind: "image", image: todo("Campaign creative #1") },
    permission: todo("Client permission for campaign #1"),
  },
  {
    id: "bts-1",
    category: "behind-the-scenes",
    title: todo("Behind-the-scenes clip (shoot day, staging, open house)"),
    context: todo("Context for the behind-the-scenes clip"),
    media: {
      kind: "video",
      video: {
        title: "Behind the scenes",
        vimeoId: todo("Vimeo ID: behind-the-scenes clip"),
        poster: todo("Poster still for behind-the-scenes clip"),
        duration: todo("Runtime, behind-the-scenes clip"),
      },
    },
    permission: todo("Permission for behind-the-scenes clip"),
  },
];

/**
 * Signature feature (brief §5): one real past campaign, step by step.
 * Each step shows an output, not a paragraph describing it.
 */
export const walkthroughProperty = {
  name: verify("Vineyard Road, Fruithurst, AL", "Confirm Vineyard Road is the campaign to feature in the walkthrough"),
  permission: todo("Client permission to feature this campaign, numbers included"),
};

export const walkthrough: WalkthroughStep[] = [
  {
    id: "pricing",
    title: "Pricing strategy",
    summary: "Lindsey approaches pricing based on the market, with honest answers and realistic expectations. She works closely with her team, one of which is a former appraiser's assistant, to bring real numbers backed by data, not guesswork. She then discusses the numbers with the client to settle on prices that they are comfortable with.",
    output: {
      kind: "image",
      image: todo("Pricing output: CMA page or pricing memo excerpt, client details redacted"),
      caption: todo("Caption for the pricing output"),
    },
  },
  {
    id: "prep",
    title: "Prep",
    summary: "Bringing in buyers requires being adequately prepared. Lindsey takes note of the state of the property and works with the client to present it the best way possible to potential buyers. From bringing in her own furniture to vacuuming the floor before a showing, there's nothing she won't do to get the property ready.",
    output: {
      kind: "image",
      image: todo("Prep output: before and after pair, or a prep checklist"),
      caption: todo("Caption for the prep output"),
    },
  },
  {
    id: "shoot",
    title: "Photo and video shoot",
    summary: "Rarely will you find a realtor with an in-house photographer and videographer. They work hand-in-hand on-site to decide on the best angles and shots to take for each shoot. Her photos and videos truly stand out in the mix.",
    output: {
      kind: "video",
      video: {
        title: "Shoot clip",
        vimeoId: todo("Vimeo ID: short clip from the shoot"),
        poster: todo("Poster still for the shoot clip"),
        duration: todo("Runtime, shoot clip"),
      },
      caption: "Photography, aerial footage, and video introduce the property\u2019s scale, water features, and setting.",
    },
  },
  {
    id: "launch",
    title: "Listing launch",
    summary: "Launch day is more than clicking submit in the MLS. Lindsey has paid advertisements ready to roll out for the launch. Her expertise in marketing and social media reach helps to ensure that her client's property gets as much visibility as possible.",
    output: {
      kind: "image",
      image: todo("Launch output: the actual ad or social post"),
      caption: verify(
        "This property post generated 56,381 views on Lindsey\u2019s personal Facebook page.",
        "Confirm the 56,381-view post is the Vineyard Road listing before attaching this result",
      ),
    },
  },
  {
    id: "leads",
    title: "Lead handling",
    summary: "When the calls come in, someone has to field them. Lindsey and her team respond promptly to every inquiry. If she's unavailable at the time, her team is always in position to handle incoming leads so that no potential buyer falls through the cracks.",
    output: {
      kind: "timestamps",
      events: todo("Real inquiry and response timestamps from this listing, e.g. 7:42 PM inquiry → 7:51 PM reply"),
      caption: todo("Caption for the lead-response log"),
    },
  },
  {
    id: "showings",
    title: "Showings",
    summary: "If needed, Lindsey or a representative is always available to show a property. She also ensures that feedback is received and that leads are followed up with post-showing.",
    output: {
      kind: "metric",
      value: todo("Number of showings"),
      label: "Showings",
      detail: todo("Over what period, and how feedback was handled"),
    },
  },
  {
    id: "offers",
    title: "Offers",
    summary: "One of Lindsey's biggest strengths is negotiating. She prides herself in getting her clients the most value out of every transaction. She informs her sellers of every aspect of the buyer's offer, and is prepared to give guidance with every step.",
    output: {
      kind: "metric",
      value: todo("Number of offers received"),
      label: "Offers",
      detail: todo("Outcome, e.g. accepted at X% of list, terms"),
    },
  },
  {
    id: "closing",
    title: "Closing",
    summary: "Lindsey is in constant contact with the attorneys and seller's agent to ensure a smooth closing every time. She's experienced enough road blocks to not only be prepared when they happen, but to see many of them before they even come.",
    output: {
      kind: "metric",
      value: todo("Days on market for this listing"),
      label: "Days on market",
      detail: todo("Sale price relative to list, and closing date"),
    },
  },
];
