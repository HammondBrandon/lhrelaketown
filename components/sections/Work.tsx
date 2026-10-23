import { SectionHeader } from "@/components/ui/SectionHeader";
import { gallery } from "@/content/work";
import { WorkGallery } from "./WorkGallery";

/** 03 · This is what working with Lindsey looks like. The strongest section. */
export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="grain relative bg-forest-950 py-24 text-ivory-50 sm:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-10">
        <SectionHeader
          id="work-title"
          number="03"
          tone="dark"
          eyebrow="The work"
          title={
            <>
              This is what working with <em className="text-gold-200">Lindsey</em> looks like.
            </>
          }
          lead="Listing videos and photography from real listings, shown with each client's permission. Select any piece to watch or view it full screen."
        />
        <WorkGallery items={gallery} />
      </div>
    </section>
  );
}
