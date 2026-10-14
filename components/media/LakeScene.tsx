import { useId } from "react";

/**
 * An illustrated dusk lake scene, rendered as SVG. It stands in for footage
 * until Lindsey's original Lake Wedowee video is supplied. It's an
 * illustration, not a depiction of the actual site.
 */

const W = 1600;
const SHORE = 566;

// Deterministic pseudo-random so server and client render identically.
function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const r1 = (n: number) => Math.round(n * 10) / 10;

/** A tree-line silhouette whose base follows `base(x)`. Rounded so SSR and hydration match. */
function treeLine(base: (x: number) => number, minH: number, maxH: number, step: number, seed: number) {
  let d = `M0 ${SHORE + 40} L0 ${r1(base(0))}`;
  for (let x = 0, i = 0; x <= W; x += step, i++) {
    const h = minH + rand(seed + i) * (maxH - minH);
    const w = step * (0.45 + rand(seed + i * 3) * 0.3);
    const b = base(x);
    d += ` L${r1(x - w)} ${r1(b - h * 0.35)} L${x} ${r1(b - h)} L${r1(x + w)} ${r1(b - h * 0.35)}`;
  }
  return `${d} L${W} ${r1(base(W))} L${W} ${SHORE + 40} Z`;
}

// Far ridge, gentle and hazy.
const ridge = `M0 ${SHORE} C 220 486, 420 520, 620 500 S 980 470, 1180 492 S 1480 500, ${W} 480 L ${W} ${SHORE} Z`;

// Near shore with a peninsula reaching in from the right.
const peninsulaBase = (x: number) => {
  const t = Math.max(0, (x - 780) / 820);
  return SHORE - 10 - 26 * Math.sin(Math.min(1, t * 1.4) * Math.PI * 0.5);
};
const leftBase = (x: number) => SHORE - 4 - Math.max(0, 260 - x) * 0.09;

const nearTrees = treeLine(peninsulaBase, 18, 54, 13, 7);
const leftTrees = treeLine(leftBase, 12, 40, 12, 91);

export function LakeScene({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `${uid}-${name}`;
  return (
    <svg
      viewBox={`0 0 ${W} 900`}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Illustration of a lake at dusk with a wooded peninsula"
      className={className}
    >
      <defs>
        <linearGradient id={id("ls-sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c1913" />
          <stop offset="0.38" stopColor="#1f3a2c" />
          <stop offset="0.56" stopColor="#7d7a52" />
          <stop offset="0.63" stopColor="#d9bf88" />
        </linearGradient>
        <radialGradient id={id("ls-sun")} cx="1080" cy="540" r="520" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f3e2b8" stopOpacity="0.9" />
          <stop offset="0.25" stopColor="#d6bd8a" stopOpacity="0.45" />
          <stop offset="1" stopColor="#d6bd8a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id("ls-water")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9ac72" />
          <stop offset="0.12" stopColor="#6e6a45" />
          <stop offset="0.45" stopColor="#1a3427" />
          <stop offset="1" stopColor="#0a150f" />
        </linearGradient>
        <linearGradient id={id("ls-reflect")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0c1913" stopOpacity="0.85" />
          <stop offset="1" stopColor="#0c1913" stopOpacity="0" />
        </linearGradient>
        <filter id={id("ls-soft")} x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <mask id={id("ls-reflect-mask")}>
          <rect x="0" y={SHORE} width={W} height="260" fill={`url(#${id("ls-reflect")})`} />
        </mask>
      </defs>

      <rect width={W} height={SHORE + 2} fill={`url(#${id("ls-sky")})`} />
      <rect width={W} height={SHORE + 2} fill={`url(#${id("ls-sun")})`} />
      <path d={ridge} fill="#2c4a39" opacity="0.55" />

      <rect y={SHORE} width={W} height={900 - SHORE} fill={`url(#${id("ls-water")})`} />

      {/* Sun path on the water */}
      <g className="motion-safe:animate-shimmer" style={{ transformOrigin: "1080px 600px" }}>
        {Array.from({ length: 22 }, (_, i) => {
          const y = r1(SHORE + 10 + i * i * 0.62 + i * 4);
          const w = r1(60 + i * 15 + rand(i + 300) * 40);
          return (
            <rect
              key={i}
              x={r1(1080 - w / 2 + (rand(i + 50) - 0.5) * 30)}
              y={y}
              width={w}
              height={r1(1.4 + i * 0.12)}
              rx="1"
              fill="#f0dcae"
              opacity={r1((0.55 - i * 0.022) * 100) / 100}
            />
          );
        })}
      </g>

      {/* Reflections */}
      <g mask={`url(#${id("ls-reflect-mask")})`} filter={`url(#${id("ls-soft")})`} opacity="0.7">
        <g transform={`translate(0 ${SHORE * 2}) scale(1 -1)`}>
          <path d={nearTrees} fill="#0c1913" />
          <path d={leftTrees} fill="#0c1913" />
        </g>
      </g>

      <path d={nearTrees} fill="#0e1d16" />
      <path d={leftTrees} fill="#12241b" />

      {/* Faint ripples */}
      {Array.from({ length: 9 }, (_, i) => (
        <rect
          key={`r${i}`}
          x={r1(rand(i + 700) * 1300)}
          y={660 + i * 26}
          width={r1(120 + rand(i + 800) * 260)}
          height="1"
          fill="#d6bd8a"
          opacity={0.12}
        />
      ))}
    </svg>
  );
}
