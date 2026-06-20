"use client";

import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang } = useLang();

  const base = dark
    ? "border-white/25 text-cream/80"
    : "border-maroon/15 text-maroon/70";

  return (
    <div
      className={`relative flex items-center rounded-full border ${base} bg-black/5 p-0.5 text-sm font-semibold backdrop-blur`}
      role="group"
      aria-label="Language switcher"
    >
      {(["en", "te"] as const).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`relative z-10 rounded-full px-3 py-1 transition-colors ${
              active
                ? "text-maroon"
                : dark
                  ? "text-cream/70 hover:text-cream"
                  : "text-maroon/60 hover:text-maroon"
            } ${l === "te" ? "te" : ""}`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-turmeric-soft to-gold-light shadow"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            {l === "en" ? "EN" : "తెలుగు"}
          </button>
        );
      })}
    </div>
  );
}
