import type { GalleryItem, WalkthroughStep } from "./types";

/**
 * Section 02 — the strongest section (brief §4). Real listing videos,
 * photography, each with client
 * permission. Drop raw files in /content-inbox; processed stills go to
 * /public/media/work and videos to Vimeo.
 */
// Videos and photos are deliberately interleaved (and outdoors/indoors alternated) so the grid reads as one blend.
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
        title: "Barnes Rd listing video",
        vimeoId: "1235888164",
        poster: { src: "/media/work/barnes-rd.jpg", width: 1280, height: 720, alt: "Barnes Rd listing video, opening frame" },
        duration: "1:16",
      },
    },
    permission: true,
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
    permission: true,
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
    permission: true,
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
    permission: true,
  },
  {
    id: "film-cr-203",
    category: "film",
    title: "CR 203",
    context: "Listing film · Triple R Real Estate",
    media: {
      kind: "video",
      video: {
        title: "CR 203 listing video",
        vimeoId: "1235890195",
        poster: { src: "/media/work/cr-203.jpg", width: 1280, height: 720, alt: "CR 203 listing video, opening frame" },
        duration: "1:19",
      },
    },
    permission: true,
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
    permission: true,
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
    permission: true,
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
    permission: true,
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
    permission: true,
  },
  {
    id: "film-coldwater",
    category: "film",
    title: "Coldwater Land",
    context: "Listing film · Triple R Real Estate",
    media: {
      kind: "video",
      video: {
        title: "Coldwater Land listing video",
        vimeoId: "1235891167",
        poster: { src: "/media/work/coldwater.jpg", width: 1280, height: 720, alt: "Coldwater Land listing video, opening frame" },
        duration: "0:58",
      },
    },
    permission: true,
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
    permission: true,
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
    permission: true,
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
    permission: true,
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
    permission: true,
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
        title: "Kris St listing video",
        vimeoId: "1235892074",
        poster: { src: "/media/work/kris-st.jpg", width: 1280, height: 720, alt: "Kris St listing video, opening frame" },
        duration: "1:16",
      },
    },
    permission: true,
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
    permission: true,
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
    permission: true,
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
    permission: true,
  },
];

/** Signature feature (brief §5): the steps Lindsey takes on every listing. */

export const walkthrough: WalkthroughStep[] = [
  {
    id: "pricing",
    title: "Pricing strategy",
    summary: "Lindsey approaches pricing based on the market, with honest answers and realistic expectations. She works closely with her team, one of which is a former appraiser's assistant, to bring real numbers backed by data, not guesswork. She then discusses the numbers with the client to settle on prices that they are comfortable with.",
    image: { src: "/media/work/steps/pricing.png", width: 480, height: 622, alt: "Recent comparable sales sheet comparing three nearby homes by size, age, lot, features and sold price" },
  },
  {
    id: "prep",
    title: "Prep",
    summary: "Bringing in buyers requires being adequately prepared. Lindsey takes note of the state of the property and works with the client to present it the best way possible to potential buyers. From bringing in her own furniture to vacuuming the floor before a showing, there's nothing she won't do to get the property ready.",
    image: { src: "/media/work/steps/prep.jpg", width: 1200, height: 1600, alt: "Lindsey vacuuming the carpet of a home\u2019s hallway in a black evening gown to get it ready for showings" },
  },
  {
    id: "shoot",
    title: "Photo and video shoot",
    summary: "Rarely will you find a realtor with an in-house photographer and videographer. They work hand-in-hand on-site to decide on the best angles and shots to take for each shoot. Her photos and videos truly stand out in the mix.",
    video: {
      title: "Photo and video shoot",
      vimeoId: "1240345015",
      poster: { src: "/media/work/steps/shoot-poster.jpg", width: 1280, height: 720, alt: "Opening frame: an aerial photo of a rural home set into a vintage photo album page captioned \u201cOur Old Home \u2013 Spring 1987\u201d" },
      duration: "1:18",
    },
  },
  {
    id: "launch",
    title: "Listing launch",
    summary: "Launch day is more than clicking submit in the MLS. Lindsey has paid advertisements ready to roll out for the launch. Her expertise in marketing and social media reach helps to ensure that her client's property gets as much visibility as possible.",
    image: { src: "/media/work/steps/launch.jpg", width: 1600, height: 1370, alt: "Facebook reel for three land options in Delta, Alabama, with the on-screen text \u201cNo restrictions!\u201d" },
  },
  {
    id: "leads",
    title: "Lead handling",
    summary: "When the calls come in, someone has to field them. Lindsey and her team respond promptly to every inquiry. If she's unavailable at the time, her team is always in position to handle incoming leads so that no potential buyer falls through the cracks.",
    image: { src: "/media/work/steps/leads.jpg", width: 1600, height: 895, alt: "Video call with Lindsey and her team: John Reiv Ellamil, Gerald Samia and Miho Grace" },
  },
  {
    id: "showings",
    title: "Showings",
    summary: "Lindsey or a representative is always available to show a property. She also ensures that feedback is received and that leads are followed up with post-showing.",
    image: { src: "/media/work/steps/showings.jpg", width: 1200, height: 1600, alt: "A ride through the woods in a side-by-side utility vehicle, seen from behind two riders, during a land showing" },
  },
  {
    id: "offers",
    title: "Offers",
    summary: "One of Lindsey's biggest strengths is negotiating. She prides herself in getting her clients the most value out of every transaction. She informs her sellers of every aspect of the buyer's offer, and is prepared to give guidance with every step.",
    image: { src: "/media/work/steps/offers.jpg", width: 1600, height: 1037, alt: "Lindsey going over an offer with a client at a kitchen table, over coffee and a sheet of paper" },
  },
  {
    id: "closing",
    title: "Closing",
    summary: "Lindsey is in constant contact with the attorneys and seller's agent to ensure a smooth closing every time. She's experienced enough road blocks to not only be prepared when they happen, but to see many of them before they even come.",
    image: { src: "/media/work/steps/closing.jpg", width: 1600, height: 1517, alt: "Facebook post of a closing-day photo: Lindsey with a family holding a pink \u201cExperience the Pink Difference\u201d frame in front of their new home" },
  },
];
