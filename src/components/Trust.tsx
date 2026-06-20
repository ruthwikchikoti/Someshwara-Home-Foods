"use client";

import { Users, Sprout, Truck, HeartHandshake } from "lucide-react";
import { useLang, type TrKey } from "@/lib/i18n";
import { SpiceParticles, OrnamentDivider } from "./Decor";
import { Stagger, staggerItem } from "./Reveal";
import { motion } from "framer-motion";

const stats: { icon: typeof Users; v: TrKey; l: TrKey }[] = [
  { icon: Users, v: "trust_1_v", l: "trust_1_l" },
  { icon: Sprout, v: "trust_2_v", l: "trust_2_l" },
  { icon: Truck, v: "trust_3_v", l: "trust_3_l" },
  { icon: HeartHandshake, v: "trust_4_v", l: "trust_4_l" },
];

export default function Trust() {
  const { t, lang } = useLang();
  const isTe = lang === "te";

  return (
    <section className="bg-maroon-rich relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <SpiceParticles count={12} />
      <div className="pattern-dots absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`text-xs font-semibold uppercase tracking-[0.25em] text-turmeric-soft ${
              isTe ? "te tracking-normal" : ""
            }`}
          >
            {t("trust_eyebrow")}
          </span>
          <h2
            className={`mt-3 font-display text-3xl font-bold text-cream sm:text-4xl md:text-5xl ${
              isTe ? "te" : ""
            }`}
          >
            {t("trust_title")}
          </h2>
          <OrnamentDivider className="mt-5" color="#e3c178" />
        </div>

        <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {stats.map(({ icon: Icon, v, l }) => (
            <motion.div
              key={l}
              variants={staggerItem}
              className="group flex flex-col items-center rounded-3xl border border-gold/20 bg-white/5 p-5 text-center backdrop-blur transition-all hover:-translate-y-1.5 hover:border-gold/50 hover:bg-white/10 sm:p-6"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-turmeric to-gold text-maroon-deep shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Icon size={26} />
              </span>
              <span
                className={`mt-4 font-display text-3xl font-extrabold text-cream sm:text-4xl ${
                  isTe ? "te" : ""
                }`}
              >
                {t(v)}
              </span>
              <span
                className={`mt-1 text-sm font-medium text-cream/70 ${
                  isTe ? "te" : ""
                }`}
              >
                {t(l)}
              </span>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
