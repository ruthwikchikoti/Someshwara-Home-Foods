/** Ornamental Telugu-style divider: a diamond flanked by tapering lines + dots. */
export function OrnamentDivider({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      style={{ color }}
      aria-hidden
    >
      <span className="h-px w-10 bg-current opacity-40 sm:w-20" />
      <svg width="64" height="16" viewBox="0 0 64 16" fill="none">
        <circle cx="6" cy="8" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="16" cy="8" r="2.5" fill="currentColor" opacity="0.8" />
        <path
          d="M32 1.5 L40 8 L32 14.5 L24 8 Z"
          fill="currentColor"
        />
        <path
          d="M32 5 L36 8 L32 11 L28 8 Z"
          fill="#fbf3e2"
          opacity="0.85"
        />
        <circle cx="48" cy="8" r="2.5" fill="currentColor" opacity="0.8" />
        <circle cx="58" cy="8" r="2" fill="currentColor" opacity="0.6" />
      </svg>
      <span className="h-px w-10 bg-current opacity-40 sm:w-20" />
    </div>
  );
}

/** Decorative paisley/mango corner motif (used as section flourish). */
export function Paisley({
  className = "",
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
    >
      <path
        d="M50 8c20 0 34 16 34 36 0 24-20 40-44 48 8-18 4-30-6-36-12-7-18-18-12-32C26 14 36 8 50 8Z"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M50 22c10 0 18 9 18 22 0 14-11 24-24 30"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.4"
      />
      <circle cx="50" cy="30" r="4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

/** Deprecated busy animations — kept as no-ops for a calm, clean look. */
export function SpiceParticles(_props: { count?: number }) {
  return null;
}

export function Steam(_props: { className?: string }) {
  return null;
}
