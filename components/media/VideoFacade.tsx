"use client";

import Image from "next/image";
import { useState } from "react";
import { track } from "@/lib/analytics";
import { vimeoEmbedUrl } from "@/lib/vimeo";
import { TodoBlock } from "@/components/ui/Placeholder";
import { isTodo, valueOf } from "@/lib/placeholders";
import type { VideoAsset } from "@/content/types";

/**
 * Poster first; the Vimeo iframe loads only when someone presses play.
 * Keeps third-party weight off the page until it's wanted.
 */
export function VideoFacade({
  video,
  trackingId,
  tone = "light",
  className = "",
}: {
  video: VideoAsset;
  trackingId: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const id = valueOf(video.vimeoId);
  const poster = video.poster ? valueOf(video.poster) : undefined;
  const duration = video.duration ? valueOf(video.duration) : undefined;

  if (!id) {
    const note = isTodo(video.vimeoId) ? video.vimeoId.note : "Video missing";
    return <TodoBlock note={note} tone={tone} aspect="16 / 9" label="TODO · Video" className={className} />;
  }

  return (
    <div className={`relative aspect-video overflow-hidden rounded-sm bg-forest-950 ${className}`}>
      {playing ? (
        <iframe
          src={vimeoEmbedUrl(id, video.vimeoHash, { autoplay: "1" })}
          title={video.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            track({ name: "video_play", props: { video: trackingId } });
          }}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play ${video.title}${duration ? `, ${duration}` : ""}`}
        >
          {poster ? (
            <Image src={poster.src} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          ) : (
            isTodo(video.poster) && (
              <span className="absolute inset-3 grid place-items-start text-left">
                <TodoBlock tone="dark" note={video.poster.note} label="TODO · Poster" />
              </span>
            )
          )}
          <span aria-hidden className="absolute inset-0 bg-forest-950/20 transition group-hover:bg-forest-950/5" />
          <span
            aria-hidden
            className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory-50/90 text-forest-900 shadow-xl transition group-hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="ml-1 size-5" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
          {duration && (
            <span className="eyebrow absolute right-3 bottom-3 rounded-full bg-forest-950/60 px-2.5 py-1 text-ivory-50">
              {duration}
            </span>
          )}
        </button>
      )}
    </div>
  );
}
