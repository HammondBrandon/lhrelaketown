import { MediaImage } from "@/components/media/MediaImage";
import { VideoFacade } from "@/components/media/VideoFacade";
import type { ImageAsset, VideoAsset } from "@/content/types";
import { valueOf, type Slot } from "@/lib/placeholders";

/** Tallest a step image may grow, so portrait sheets still fit in the sticky frame. */
const MAX_HEIGHT_VH = 64;

/**
 * What a walkthrough step produced. Real images keep their own proportions
 * (no cropping, since many are screenshots with text); a missing one holds a
 * 4:3 placeholder. A step can instead carry a video.
 */
export function WalkthroughOutput({
  image,
  video,
  stepId,
}: {
  image?: Slot<ImageAsset>;
  video?: VideoAsset;
  stepId: string;
}) {
  if (video) {
    return (
      <figure className="w-full">
        <VideoFacade video={video} trackingId={`walkthrough-${stepId}`} />
      </figure>
    );
  }
  const asset = image ? valueOf(image) : undefined;
  const ratio = asset ? asset.width / asset.height : 4 / 3;
  return (
    <figure className="mx-auto w-full" style={{ maxWidth: `calc(${MAX_HEIGHT_VH}vh * ${ratio})` }}>
      <MediaImage
        image={image!}
        aspect={asset ? `${asset.width} / ${asset.height}` : "4 / 3"}
        sizes="(min-width: 1024px) 45vw, 100vw"
        quality={90}
        className="rounded-sm"
      />
    </figure>
  );
}
