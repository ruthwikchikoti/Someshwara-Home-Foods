import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are now local (public/images/**). Serve modern formats so
    // the browser downloads AVIF/WebP instead of the PNG sources — far fewer
    // delivered bytes while keeping the originals crisp.
    formats: ["image/avif", "image/webp"],
    // The site renders images at modest sizes (full-width hero down to ~1/3
    // width product tiles). These breakpoints avoid generating/serving giant
    // variants while still covering retina displays.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    // Cache optimized variants on the edge for 31 days (sources are static).
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
};

export default nextConfig;
