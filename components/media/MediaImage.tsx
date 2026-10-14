import Image from "next/image";
import { isTodo, valueOf, type Slot } from "@/lib/placeholders";
import type { ImageAsset } from "@/content/types";
import { TodoBlock } from "@/components/ui/Placeholder";

/** An optimized still, or a sized TODO frame while the asset is missing. */
export function MediaImage({
  image,
  sizes,
  aspect = "4 / 3",
  tone = "light",
  className = "",
  priority = false,
}: {
  image: Slot<ImageAsset>;
  sizes: string;
  aspect?: string;
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  if (isTodo(image)) {
    return <TodoBlock note={image.note} aspect={aspect} tone={tone} className={`h-full w-full ${className}`} />;
  }
  const img = valueOf(image)!;
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: aspect }}>
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        quality={75}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
