import { todo, verify } from "@/lib/placeholders";
import type { Slot } from "@/lib/placeholders";
import type { ImageAsset, VideoAsset } from "./types";

export const recipient = {
  name: "Daniel Communities",
  salutation: "Hello,",
};

export const agent = {
  name: "Lindsey Hammond",
  firstName: "Lindsey",
  // Phone and email are from lindseyhammondrealestate.com.
  phone: verify("770-855-5574", "Confirm Lindsey's preferred phone for this page") as Slot<string>,
  email: verify("lindsey@lindseyhammondrealestate.com", "Confirm Lindsey's preferred email for this page") as Slot<string>,
  licenses: "Licensed in Alabama and Georgia",
  licenseNumbers: todo("Lindsey's AL and GA license numbers (for the footer disclosure)") as Slot<string>,
  headshot: {
    src: "/media/lindsey/Lindsey-Lifestyle-19.jpg",
    width: 1365,
    height: 2048,
    alt: "Lindsey Hammond smiling, seated on the island of a newly finished kitchen",
  } as Slot<ImageAsset>,
  bio: verify(
    "Lindsey Hammond is a real estate agent with Triple R Real Estate LLC, licensed in Alabama and Georgia and serving buyers and sellers across West Georgia and East Alabama. Her work includes homes and acreage, supported by in-house photography, videography, and digital marketing. For lake property, her approach is to help buyers understand both the land and the lifestyle surrounding it.",
    "Draft bio: Lindsey to approve it",
  ) as Slot<string>,
};

export const brokerage = {
  name: "Triple R Real Estate LLC",
  city: "Carrollton, GA",
  officePhone: todo("Triple R office phone (AREC/GREC advertising rules: confirm with managing broker)") as Slot<string>,
  brokerApproval: todo("Managing broker sign-off on this page before it is sent (brief §9.1)"),
};

export const nonAffiliation =
  "This is an independent concept prepared by Lindsey Hammond of Triple R Real Estate LLC. It is not affiliated with, endorsed by, or approved by Laketown or Daniel Communities.";

/** Section 01: Lindsey's personal message to Daniel Communities over lake footage. */
export const heroMessage: VideoAsset = {
  title: "A message for Daniel Communities from Lindsey",
  vimeoId: todo("Vimeo ID of Lindsey's 30–60s message to Daniel Communities, filmed over original Lake Wedowee footage, with English captions"),
  poster: todo("Poster still from the message video (1920×1080, water-level lake shot)"),
  duration: todo("Runtime of the message, e.g. 0:48"),
};

export const footageNote = todo(
  "Confirm all lake footage was shot from the water or public access, with no drone flights over developer land (brief §3)",
);
