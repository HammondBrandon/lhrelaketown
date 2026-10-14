# Laketown North pitch site

A private, personalized presentation for **Daniel Communities** (the Laketown developer) from **Lindsey Hammond, Triple R Real Estate LLC**. The full brief is in `lake-wedowee-pitch-brief.md` (kept outside the repo).

Stack: Next.js 16 (App Router, fully static), Tailwind 4, Framer Motion, Vimeo.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## How privacy works

| Layer | Where |
| --- | --- |
| `X-Robots-Tag: noindex…` on every response | `next.config.ts` |
| `<meta name="robots" content="noindex, nofollow">` | `app/layout.tsx` |
| `robots.txt` disallows everything | `app/robots.ts` |
| `Referrer-Policy: strict-origin`, so the path never leaks to Vimeo or outbound links | `next.config.ts` |

## Content and the build gate

All real-world content lives in `/content`. Components never contain facts.

- `todo("…")` marks a missing input. It renders as a dashed TODO box in dev.
- `verify(value, "…")` marks a value that exists but must be confirmed. It renders with a dotted underline and a "verify" tag.

`npm run build`, which is what Vercel runs, **fails while any marker remains** (brief §3: no fabricated proof).

```bash
npm run check          # list everything still outstanding
npm run build:preview  # build a review draft anyway (TODOs visible)
```

To resolve an item, replace `todo("…")` with the real value. To confirm a `verify(x, "…")`, unwrap it to plain `x`.

| File | Section |
| --- | --- |
| `content/site.ts` | Hero message video, Lindsey, Triple R, non-affiliation statement |
| `content/understanding.ts` | 02: verified public facts and sources |
| `content/work.ts` | 03 gallery and the "What happens when Lindsey takes on a property?" walkthrough |
| `content/results.ts` | 04: stats, case studies, testimonials, capacity answer |
| `content/concept.ts` | 05: concept demo, market snapshot, 90-day plan |
| `content/contact.ts` | 06: Lindsey's note to Daniel Communities |

## Media

- **Video:** upload to Vimeo and paste the ID (plus `vimeoHash` for unlisted videos). Add English captions in Vimeo. The hero uses `controls: false`, which needs Vimeo Plus or higher.
- **Stills:** export at 2400px on the long edge (JPG or PNG is fine, since Next serves AVIF/WebP), put them in `public/media/…`, and reference them as `{ src, width, height, alt }`.
- Raw files from Lindsey go in `/content-inbox` (gitignored).

## PDFs

`/snapshot` and `/plan` are letter-size print layouts. The "Save as PDF" button opens the browser's print dialog.

## Analytics

`lib/analytics.ts` records section views, video plays, unmutes and completions, CTA clicks, PDF opens and concept-demo tabs. No provider is wired yet. Add one in `send()`, e.g. Plausible: `window.plausible?.(event.name, { props: event.props })`.

## Component reuse

These components don't depend on the pitch page and can carry over to a real Laketown North marketing site:

- `HeroVideo`, `VideoFacade`, `Lightbox` and `MediaImage` in `components/media`
- `WorkGallery`
- `CaseStudyCard`, in `Results`
- `ConceptDemo` panels
- `MarketSnapshot` and `LaunchPlan`
