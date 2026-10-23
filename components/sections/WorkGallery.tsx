"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbox, type LightboxItem } from "@/components/media/Lightbox";
import { TodoBlock } from "@/components/ui/Placeholder";
import { isTodo, valueOf } from "@/lib/placeholders";
import type { GalleryItem } from "@/content/types";

const filters = [
  { id: "all", label: "All work" },
  { id: "film", label: "Listing videos" },
  { id: "photography", label: "Photography" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const span: Record<NonNullable<GalleryItem["size"]>, string> = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  standard: "",
};

/** Turns a gallery item into something the lightbox can open, if its media exists. */
function toLightbox(item: GalleryItem): LightboxItem | null {
  const title = valueOf(item.title) ?? "";
  if (item.media.kind === "video") {
    const id = valueOf(item.media.video.vimeoId);
    return id ? { kind: "video", vimeoId: id, vimeoHash: item.media.video.vimeoHash, title } : null;
  }
  const image = valueOf(item.media.image);
  return image ? { kind: "image", image, title } : null;
}

export function WorkGallery({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<FilterId>("all");
  const [open, setOpen] = useState<number | null>(null);

  const visible = useMemo(
    () => items.filter((i) => filter === "all" || i.category === filter),
    [items, filter],
  );
  // Only items with real media can open in the lightbox.
  const openable = useMemo(
    () => visible.map((i) => ({ item: i, lb: toLightbox(i) })).filter((x) => x.lb !== null),
    [visible],
  );

  return (
    <>
      <div role="group" aria-label="Filter work" className="mt-12 flex gap-2 overflow-x-auto pb-2 sm:mt-16 sm:flex-wrap">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
              filter === f.id
                ? "border-gold-300 bg-gold-300 text-forest-950"
                : "border-ivory-100/20 text-ivory-100/75 hover:border-ivory-100/50 hover:text-ivory-50"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-8 grid auto-rows-[16rem] grid-flow-dense gap-4 sm:grid-cols-2 sm:auto-rows-[18rem] lg:grid-cols-3 lg:auto-rows-[20rem]">
        <AnimatePresence mode="popLayout">
          {visible.map((item) => {
            const openIndex = openable.findIndex((x) => x.item.id === item.id);
            return (
              <motion.li
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`${span[item.size ?? "standard"]} min-h-0`}
              >
                <Tile item={item} onOpen={openIndex >= 0 ? () => setOpen(openIndex) : undefined} />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      <Lightbox
        items={openable.map((x) => x.lb!)}
        index={open}
        onChange={setOpen}
        onClose={() => setOpen(null)}
      />
    </>
  );
}

function Tile({ item, onOpen }: { item: GalleryItem; onOpen?: () => void }) {
  const { media } = item;
  const isVideo = media.kind === "video";
  const still = isVideo ? media.video.poster : media.image;
  const stillValue = valueOf(still);
  const duration = isVideo ? valueOf(media.video.duration) : undefined;
  // Surface the most fundamental missing piece: the video itself, then its still.
  const missing = isVideo && isTodo(media.video.vimeoId) ? media.video.vimeoId : still;
  const categoryLabel = filters.find((f) => f.id === item.category)?.label;

  const body = (
    <>
      {stillValue ? (
        <Image
          src={stillValue.src}
          alt={stillValue.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-[1.2s] ease-[var(--ease-cinematic)] group-hover:scale-[1.04]"
        />
      ) : (
        isTodo(missing) && (
          <TodoBlock tone="dark" note={missing.note} label={`TODO · ${categoryLabel}`} className="absolute inset-0 rounded-none" />
        )
      )}

      {stillValue && (
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
      )}

      {isVideo && stillValue && (
        <span aria-hidden className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ivory-50/60 bg-forest-950/30 text-ivory-50 backdrop-blur-sm transition group-hover:scale-110 group-hover:border-gold-300">
          <svg viewBox="0 0 24 24" className="ml-1 size-5" fill="currentColor">
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
        </span>
      )}

      <span className="absolute inset-x-0 bottom-0 p-5 text-left">
        <span className="eyebrow block text-gold-300">
          {categoryLabel}
          {duration && <span className="text-ivory-100/60"> · {duration}</span>}
        </span>
      </span>
    </>
  );

  const cls = "group relative block h-full w-full overflow-hidden rounded-sm bg-forest-900";
  return onOpen ? (
    <button type="button" onClick={onOpen} className={cls} aria-label={`Open ${valueOf(item.title) ?? "item"}`}>
      {body}
    </button>
  ) : (
    <div className={cls}>{body}</div>
  );
}
