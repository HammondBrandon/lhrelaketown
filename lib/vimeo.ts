export function vimeoPageUrl(id: string, hash?: string): `https://vimeo.com/${string}` {
  return `https://vimeo.com/${id}${hash ? `/${hash}` : ""}`;
}

/** Embed URL for a standard (controls on) player, e.g. in the lightbox. */
export function vimeoEmbedUrl(id: string, hash?: string, opts: Record<string, string> = {}) {
  const params = new URLSearchParams({
    ...(hash ? { h: hash } : {}),
    dnt: "1",
    title: "0",
    byline: "0",
    portrait: "0",
    texttrack: "en",
    ...opts,
  });
  return `https://player.vimeo.com/video/${id}?${params}`;
}
