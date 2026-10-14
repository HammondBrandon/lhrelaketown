"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type Player from "@vimeo/player";
import { track } from "@/lib/analytics";
import { vimeoPageUrl } from "@/lib/vimeo";
import type { ImageAsset } from "@/content/types";

/**
 * Section 01 player. Starts muted with captions, so it works with
 * autoplay policies. "Hear Lindsey's message" restarts it with sound.
 * Users with reduced motion get the poster and a play button.
 *
 * Note: `controls: false` requires a paid Vimeo plan (Plus or higher).
 */
export function HeroVideo({
  vimeoId,
  vimeoHash,
  poster,
  duration,
  label,
}: {
  vimeoId: string;
  vimeoHash?: string;
  poster?: ImageAsset;
  duration?: string;
  label: string;
}) {
  const mount = useRef<HTMLDivElement>(null);
  const player = useRef<Player | null>(null);
  const reportedPlay = useRef(false);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = mount.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;

    import("@vimeo/player").then(({ default: VimeoPlayer }) => {
      if (cancelled) return;
      const p = new VimeoPlayer(el, {
        url: vimeoPageUrl(vimeoId, vimeoHash),
        autoplay: !reduce,
        muted: true,
        controls: false,
        dnt: true,
        playsinline: true,
        texttrack: "en",
        title: false,
        byline: false,
        portrait: false,
        responsive: false,
      });
      player.current = p;
      p.on("timeupdate", () => setVisible(true));
      p.on("play", () => {
        setPlaying(true);
        if (!reportedPlay.current) {
          reportedPlay.current = true;
          track({ name: "video_play", props: { video: "hero-message" } });
        }
      });
      p.on("pause", () => setPlaying(false));
      p.on("ended", () => {
        setPlaying(false);
        track({ name: "video_complete", props: { video: "hero-message" } });
      });
    });

    return () => {
      cancelled = true;
      player.current?.destroy();
      player.current = null;
    };
  }, [vimeoId, vimeoHash]);

  async function playWithSound() {
    const p = player.current;
    if (!p) return;
    await p.setCurrentTime(0);
    await p.setMuted(false);
    await p.setVolume(1);
    setMuted(false);
    await p.play();
    track({ name: "video_unmute", props: { video: "hero-message" } });
  }

  async function toggleMute() {
    const p = player.current;
    if (!p) return;
    await p.setMuted(!muted);
    setMuted(!muted);
  }

  async function togglePlay() {
    const p = player.current;
    if (!p) return;
    if (playing) await p.pause();
    else await p.play();
  }

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div ref={mount} className="video-cover absolute inset-0" aria-hidden />
        {poster && (
          <Image
            src={poster.src}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
            className={`object-cover transition-opacity duration-1000 ${visible ? "opacity-0" : "opacity-100"}`}
          />
        )}
      </div>

      <div className="relative z-10 mt-10 flex flex-wrap items-center gap-3">
        {muted ? (
          <button
            type="button"
            onClick={playWithSound}
            className="group inline-flex items-center gap-3 rounded-full bg-ivory-50 py-2 pr-6 pl-2 text-sm font-semibold text-forest-900 shadow-lg shadow-black/20 transition hover:bg-gold-200"
          >
            <span className="grid size-10 place-items-center rounded-full bg-forest-900 text-ivory-50 transition group-hover:bg-blush-500">
              <svg viewBox="0 0 24 24" className="ml-0.5 size-4" fill="currentColor" aria-hidden>
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            {label}
            {duration && <span className="font-normal text-ink-soft">· {duration}</span>}
          </button>
        ) : (
          <>
            <ControlButton onClick={togglePlay} label={playing ? "Pause video" : "Play video"}>
              {playing ? (
                <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
              ) : (
                <path d="M8 5.5v13l11-6.5z" />
              )}
            </ControlButton>
            <ControlButton onClick={toggleMute} label={muted ? "Unmute" : "Mute"}>
              <path d="M4 9v6h4l5 4V5L8 9z" />
              {muted ? (
                <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.8" fill="none" />
              ) : (
                <path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" stroke="currentColor" strokeWidth="1.6" fill="none" />
              )}
            </ControlButton>
          </>
        )}
        <span className="eyebrow text-ivory-100/70">Captions on</span>
      </div>
    </>
  );
}

function ControlButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-ivory-100/40 text-ivory-50 backdrop-blur-sm transition hover:border-gold-300 hover:text-gold-200"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
        {children}
      </svg>
    </button>
  );
}
