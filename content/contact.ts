import { verify } from "@/lib/placeholders";
import type { Slot } from "@/lib/placeholders";

/** Section 06: a short personal invitation from Lindsey. One ask: 20 minutes. */
export const invitation = {
  heading: "Let's talk about your vision.",
  note: verify(
    "I put this together because I see an opportunity to introduce Laketown North in a way that helps people picture their life on Lake Wedowee. My team combines real estate experience with photography, video, and website development, allowing us to carry a consistent story from someone\u2019s first impression through their next step. I would welcome the opportunity to hear your vision and learn what matters most to your team as you prepare for Phase 1.",
    "Draft note: Lindsey to approve it as her own words",
  ) as Slot<string>,
  ask: "Twenty minutes, whenever it suits you.",
};
