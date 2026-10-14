import { todo } from "@/lib/placeholders";
import type { Slot } from "@/lib/placeholders";

/** Section 06: a short personal invitation from Lindsey. One ask: 20 minutes. */
export const invitation = {
  heading: "Let's talk about your vision.",
  note: todo(
    "Lindsey's personal note to the Daniel Communities team, 3–4 sentences in her own words. No pressure language and no ask for the listing.",
  ) as Slot<string>,
  ask: "Twenty minutes, whenever it suits you.",
};
