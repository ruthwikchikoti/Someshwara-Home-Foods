"use client";

import { motion } from "framer-motion";
import { Home, Sprout, ShieldCheck, Truck } from "lucide-react";
import { useLang, type TrKey } from "@/lib/i18n";
import FoodImage from "./FoodImage";
import Reveal, { Stagger, staggerItem } from "./Reveal";
import { OrnamentDivider, Steam } from "./Decor";
import { media } from "@/lib/products";

const features: { icon: typeof Home; key: TrKey }[] = [
  { icon: Home, key: "about_f1" },
  { icon: Sprout, key: "about_f2" },
  { icon: ShieldCheck, key: "about_f3" },
  { icon: Truck, key: "about_f4" },
];

export default function About() {
  const { t, lang } = useLang();
  const isTe = lang === "te";

  return (
    <section id="about" className="relative overflow-hidden py-14 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 sm:gap-14 lg:grid-cols-2 lg:px-8">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-gold/30">
            <FoodImage
              src={media.jaggery}
              alt="Traditional Telangana kitchen preparation"
              emoji="👵🏽"
              sizes="(max-width:1024px) 90vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/40 via-transparent to-transparent" />
            <Steam className="bottom-24 left-1/2" />
          </div>

          {/* Secondary image */}
          <div className="absolute -bottom-6 -left-2 hidden h-40 w-40 overflow-hidden rounded-3xl shadow-xl ring-4 ring-cream sm:block">
            <FoodImage
              src={media.spices}
              alt="Fresh ingredients and spices"
              emoji="🌶️"
              sizes="160px"
            />
          </div>

          {/* Years badge */}
          <div className="absolute right-1 top-6 grid h-20 w-20 place-items-center rounded-full bg-maroon text-center shadow-xl ring-4 ring-cream sm:-right-3 sm:h-24 sm:w-24">
            <span className="font-display text-2xl font-bold text-turmeric-soft">
              100%
            </span>
            <span className="px-1 text-[9px] font-semibold uppercase tracking-wide text-cream/80">
              Homemade
            </span>
          </div>
        </Reveal>

        {/* Story */}
        <div>
          <span
            className={`text-xs font-semibold uppercase tracking-[0.25em] text-gold ${
              isTe ? "te tracking-normal" : ""
            }`}
          >
            {t("about_eyebrow")}
          </span>
          <h2
            className={`mt-3 font-display text-3xl font-bold leading-tight text-maroon sm:text-4xl md:text-5xl ${
              isTe ? "te" : ""
            }`}
          >
            {t("about_title")}
          </h2>
          <OrnamentDivider className="mt-5 justify-start" color="#c8902a" />
          <p
            className={`mt-6 text-base leading-relaxed text-ink/75 sm:text-lg ${
              isTe ? "te" : ""
            }`}
          >
            {t("about_body")}
          </p>

          <Stagger className="mt-9 grid grid-cols-2 gap-4">
            {features.map(({ icon: Icon, key }) => (
              <motion.div
                key={key}
                variants={staggerItem}
                className="group flex items-center gap-3 rounded-2xl border border-gold/20 bg-white/60 p-4 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-leaf to-leaf-deep text-cream transition-transform group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <span
                  className={`text-sm font-semibold text-maroon ${
                    isTe ? "te" : ""
                  }`}
                >
                  {t(key)}
                </span>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
