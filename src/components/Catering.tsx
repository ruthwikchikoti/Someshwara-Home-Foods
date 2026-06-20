"use client";

import { motion } from "framer-motion";
import {
  PartyPopper,
  Cake,
  Home,
  Sparkles,
  Building2,
  Boxes,
  Phone,
} from "lucide-react";
import { useLang, type TrKey } from "@/lib/i18n";
import { SITE, telLink } from "@/lib/site";
import { Stagger, staggerItem } from "./Reveal";
import { OrnamentDivider, Paisley } from "./Decor";
import FoodImage from "./FoodImage";
import { media } from "@/lib/products";

const services: { icon: typeof Home; key: TrKey }[] = [
  { icon: PartyPopper, key: "cs1" },
  { icon: Cake, key: "cs2" },
  { icon: Home, key: "cs3" },
  { icon: Sparkles, key: "cs4" },
  { icon: Building2, key: "cs5" },
  { icon: Boxes, key: "cs6" },
];

export default function Catering() {
  const { t, lang } = useLang();
  const isTe = lang === "te";

  return (
    <section
      id="catering"
      className="relative scroll-mt-24 overflow-hidden py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-maroon-rich relative overflow-hidden rounded-[1.75rem] px-5 py-10 shadow-2xl sm:rounded-[2.5rem] sm:px-12 sm:py-16">
          <Paisley
            className="absolute -right-8 -top-8 text-gold/15"
            size={200}
          />
          <div className="pattern-dots absolute inset-0 opacity-[0.07]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            {/* Left: copy + services */}
            <div>
              <span
                className={`text-xs font-semibold uppercase tracking-[0.25em] text-turmeric-soft ${
                  isTe ? "te tracking-normal" : ""
                }`}
              >
                {t("catering_eyebrow")}
              </span>
              <h2
                className={`mt-3 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl ${
                  isTe ? "te" : ""
                }`}
              >
                {t("catering_title")}
              </h2>
              <OrnamentDivider
                className="mt-5 justify-start"
                color="#e3c178"
              />
              <p className={`mt-5 max-w-lg text-cream/75 ${isTe ? "te" : ""}`}>
                {t("catering_sub")}
              </p>

              <Stagger className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {services.map(({ icon: Icon, key }) => (
                  <motion.div
                    key={key}
                    variants={staggerItem}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-gold/20 bg-white/5 p-4 text-center backdrop-blur transition-all hover:-translate-y-1 hover:border-gold/50 hover:bg-white/10"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-turmeric to-gold text-maroon-deep transition-transform group-hover:scale-110">
                      <Icon size={20} />
                    </span>
                    <span
                      className={`text-xs font-semibold text-cream/90 ${
                        isTe ? "te" : ""
                      }`}
                    >
                      {t(key)}
                    </span>
                  </motion.div>
                ))}
              </Stagger>

              <a
                href={telLink}
                className={`group mt-8 inline-flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full bg-gradient-to-r from-turmeric to-gold px-5 py-3.5 text-center font-bold text-maroon-deep shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95 sm:mt-9 sm:w-auto sm:px-7 sm:py-4 ${
                  isTe ? "te" : ""
                }`}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-maroon-deep text-turmeric-soft">
                  <Phone size={16} />
                </span>
                {t("catering_cta")}
                <span className="font-display tracking-wide">
                  {SITE.phone}
                </span>
              </a>
            </div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden aspect-square overflow-hidden rounded-[2rem] shadow-2xl ring-2 ring-gold/30 lg:block"
            >
              <FoodImage
                src={media.thali}
                alt="Traditional Telangana catering spread"
                emoji="🍛"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/50 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-cream/95 px-4 py-2 shadow-lg">
                <p className="font-display text-sm font-bold text-maroon">
                  Bulk · Functions · Festivals
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
