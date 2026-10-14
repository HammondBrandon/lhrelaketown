"use client";

import type { AnchorHTMLAttributes } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

/** An anchor that reports one analytics event when clicked. */
export function TrackedLink({
  event,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { event: AnalyticsEvent }) {
  return <a {...props} onClick={() => track(event)} />;
}
