import type { Slot } from "@/lib/placeholders";
import type { ImageAsset } from "./types";

export const recipient = {
  name: "Daniel Communities",
  salutation: "Hello,",
};

export const agent = {
  name: "Lindsey Hammond",
  firstName: "Lindsey",
  // Phone and email are from lindseyhammondrealestate.com.
  phone: "770-855-5574",
  email: "lindsey@lindseyhammondrealestate.com",
  licenses: "Licensed in Alabama and Georgia",
  headshot: {
    src: "/media/lindsey/Lindsey-Lifestyle-19.jpg",
    width: 1365,
    height: 2048,
    alt: "Lindsey Hammond smiling, seated on the island of a newly finished kitchen",
  } as Slot<ImageAsset>,
  bio: "Lindsey Hammond is a real estate agent with Triple R Real Estate LLC, licensed in Alabama and Georgia and serving buyers and sellers across West Georgia and East Alabama. Her work includes homes and acreage, supported by in-house photography, videography, and digital marketing. For lake property, her approach is to help buyers understand both the land and the lifestyle surrounding it.",
};

export const brokerage = {
  name: "Triple R Real Estate LLC",
  city: "Carrollton, GA",
};

export const nonAffiliation =
  "This is an independent concept prepared by Lindsey Hammond of Triple R Real Estate LLC. It is not affiliated with, endorsed by, or approved by Laketown or Daniel Communities.";
