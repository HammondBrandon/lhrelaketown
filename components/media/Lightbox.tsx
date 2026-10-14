"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { vimeoEmbedUrl } from "@/lib/vimeo";
import type { ImageAsset } from "@/content/types";

export type LightboxItem =
  | { kind: "video"; vimeoId: string; vimeoHash?: string; title: string; caption?: string }
  | { kind: "image"; image: ImageAsset; title: string; caption?: string };

/**
 * Native <dialog>: focus trapping, Esc to close and inert background come
 * from the platform. Arrow keys step through items.
 */
export function Lightbox({
  items,
  index,
  onChange,
  onClose,
}: {
  items: LightboxItem[];
  index: number | null;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;
  const item = open ? items[index] : null;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (index === null || items.length < 2) return;
      onChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-label={item?.title ?? "Media viewer"}
      className="m-auto h-dvh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-forest-950/92 backdrop:backdrop-blur-sm"
    >
      {item && (
        <div className="flex h-full flex-col items-center justify-center gap-5 px-4 py-16 sm:px-16">
          <div className="relative w-full max-w-6xl">
            {item.kind === "video" ? (
              <div className="relative aspect-video w-full overflow-hidden bg-black shadow-2xl">
                <iframe
                  key={item.vimeoId}
                  src={vimeoEmbedUrl(item.vimeoId, item.vimeoHash, { autoplay: "1" })}
                  title={item.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            ) : (
              <div className="relative h-[72dvh] w-full">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1280px) 1152px, 100vw"
                  quality={90}
                  className="object-contain"
                />
              </div>
            )}
          </div>
          <div className="flex w-full max-w-6xl items-start justify-between gap-6 text-ivory-100">
            <div>
              <p className="font-display text-2xl">{item.title}</p>
              {item.caption && <p className="mt-1 text-sm text-ivory-100/65">{item.caption}</p>}
            </div>
            {items.length > 1 && (
              <p className="eyebrow shrink-0 pt-2 text-ivory-100/50">
                {index! + 1} / {items.length}
              </p>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 grid size-11 place-items-center rounded-full text-ivory-100 transition hover:bg-ivory-50/10"
      >
        <svg viewBox="0 0 24 24" className="size-6" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      {items.length > 1 && (
        <>
          <NavButton side="left" onClick={() => step(-1)} />
          <NavButton side="right" onClick={() => step(1)} />
        </>
      )}
    </dialog>
  );
}

function NavButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "left" ? "Previous" : "Next"}
      className={`absolute top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full text-ivory-100 transition hover:bg-ivory-50/10 sm:grid ${
        side === "left" ? "left-3" : "right-3"
      }`}
    >
      <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d={side === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
      </svg>
    </button>
  );
}
