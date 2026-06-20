"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  emoji: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Premium food image with a graceful, on-brand fallback.
 * If the remote photo fails, we render a warm gradient tile with the
 * dish emoji and a subtle rangoli dot pattern — never a broken image.
 */
export default function FoodImage({
  src,
  alt,
  emoji,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority,
  className = "",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
        style={{
          background:
            "radial-gradient(circle at 30% 20%, #f3c23d 0%, #e6a008 35%, #a01b1b 100%)",
        }}
        aria-label={alt}
        role="img"
      >
        <div className="pattern-dots absolute inset-0 opacity-30" />
        <span className="relative select-none text-7xl drop-shadow-lg sm:text-8xl">
          {emoji}
        </span>
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      // Above-the-fold (hero) images are fetched eagerly; everything else
      // stays lazy via next/image's default loading behavior.
      loading={priority ? undefined : "lazy"}
      // Warm on-brand blur placeholder to soften pop-in and reduce perceived
      // layout shift while the optimized image streams in. `fill` already
      // reserves the box (parent is sized), so this is purely a polish win and
      // does not affect the onError fallback above.
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

// 8x8 warm-amber gradient encoded as a tiny base64 PNG. Shared across all
// tiles so we don't need per-image blur hashes.
const BLUR_DATA_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQUlEQVR4nGNgYGD4z8DAwMDAwMDw//9/Bn19fQYGBgYGBgaGf//+MTAwMDD8//+f4f///wwMDAwMDAwAAFh6CQUq3pT3AAAAAElFTkSuQmCC";
