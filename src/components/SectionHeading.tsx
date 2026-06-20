"use client";

import { useLang, type TrKey } from "@/lib/i18n";
import { OrnamentDivider } from "./Decor";
import Reveal from "./Reveal";

type Props = {
  eyebrow: TrKey;
  title: TrKey;
  sub?: TrKey;
  /** dark sections invert the colors */
  invert?: boolean;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  invert = false,
  align = "center",
}: Props) {
  const { t, lang } = useLang();
  const isTe = lang === "te";

  return (
    <Reveal
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <span
        className={`inline-block text-xs font-semibold uppercase tracking-[0.25em] ${
          invert ? "text-turmeric-soft" : "text-gold"
        } ${isTe ? "te tracking-normal" : ""}`}
      >
        {t(eyebrow)}
      </span>
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl ${
          invert ? "text-cream" : "text-maroon"
        } ${isTe ? "te" : ""}`}
      >
        {t(title)}
      </h2>
      <OrnamentDivider
        className={`mt-5 ${align === "left" ? "justify-start" : ""}`}
        color={invert ? "#e3c178" : "#c8902a"}
      />
      {sub && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            invert ? "text-cream/75" : "text-ink/70"
          } ${isTe ? "te" : ""}`}
        >
          {t(sub)}
        </p>
      )}
    </Reveal>
  );
}
