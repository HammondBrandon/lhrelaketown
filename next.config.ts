import type { NextConfig } from "next";

/**
 * Every response carries noindex headers, and the
 * referrer policy strips the path so it never leaks
 * to Vimeo, fonts, or any outbound link.
 */
const privateHeaders = [
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet, noimageindex" },
  { key: "Referrer-Policy", value: "strict-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 90],
    remotePatterns: [{ protocol: "https", hostname: "i.vimeocdn.com" }],
  },
  async headers() {
    return [{ source: "/:path*", headers: privateHeaders }];
  },
};

export default nextConfig;
