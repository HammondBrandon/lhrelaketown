import type { Metadata } from "next";
import { LaunchPlan } from "@/components/concept/LaunchPlan";
import { PrintSheet } from "@/components/layout/PrintSheet";

export const metadata: Metadata = { title: "Laketown North Phase 1: first 90 days" };

export default function PlanPage() {
  return (
    <PrintSheet eyebrow="Launch plan" title="The first 90 days of Phase 1">
      <p className="mb-6 max-w-xl text-sm leading-relaxed text-ink-soft">
        Five workstreams, timed to Laketown&rsquo;s Phase 1 schedule, which we would set together.
      </p>
      <LaunchPlan />
    </PrintSheet>
  );
}
