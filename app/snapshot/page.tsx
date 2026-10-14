import type { Metadata } from "next";
import { MarketSnapshot } from "@/components/concept/MarketSnapshot";
import { PrintSheet } from "@/components/layout/PrintSheet";

export const metadata: Metadata = { title: "Lake Wedowee lot market snapshot" };

export default function SnapshotPage() {
  return (
    <PrintSheet eyebrow="Market snapshot" title="Lake Wedowee lot market">
      <MarketSnapshot />
    </PrintSheet>
  );
}
