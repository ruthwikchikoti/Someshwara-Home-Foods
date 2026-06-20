"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Sparkles } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { waGeneral } from "@/lib/site";
import { byId, media } from "@/lib/products";
import { OrnamentDivider } from "./Decor";
import { WhatsAppIcon } from "./BrandIcons";
import FoodImage from "./FoodImage";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const { t, lang } = useLang();
  const wa = waGeneral();
  const isTe = lang === "te";

  return (
    <section
      id="home"
      className="glow-top relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16"
    >
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-surface px-4 py-1.5 shadow-sm"
          >
            <Sparkles size={15} className="text-gold" />
            <span
              className={`text-xs font-semibold uppercase tracking-[0.2em] text-gold ${
                isTe ? "te tracking-normal" : ""
              }`}
            >
              {t("hero_eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className={`mt-6 font-display text-[2rem] font-bold leading-[1.12] text-maroon sm:text-5xl lg:text-[3.4rem] ${
              isTe ? "te leading-snug" : ""
            }`}
          >
            {isTe ? (
              t("hero_title")
            ) : (
              <>
                Authentic <span className="text-gold">Telangana</span> Home
                Foods, Delivered Across India
              </>
            )}
          </motion.h1>

          <OrnamentDivider
            className="mt-6 justify-center lg:justify-start"
            color="#a9823f"
          />

          <motion.p
            {...fade(0.25)}
            className={`mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg lg:mx-0 ${
              isTe ? "te" : ""
            }`}
          >
            {t("hero_sub")}
          </motion.p>

          <motion.div
            {...fade(0.4)}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex w-full items-center justify-center gap-2 rounded-full bg-[#25925a] px-7 py-3.5 font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95 sm:w-auto ${
                isTe ? "te" : ""
              }`}
            >
              <WhatsAppIcon size={19} />
              {t("order_whatsapp")}
            </a>
            <a
              href="#menu"
              className={`flex w-full items-center justify-center gap-2 rounded-full border border-maroon/30 bg-surface px-7 py-3.5 font-semibold text-maroon shadow-sm transition-all hover:border-maroon/50 hover:bg-cream-deep active:scale-95 sm:w-auto ${
                isTe ? "te" : ""
              }`}
            >
              <UtensilsCrossed size={18} />
              {t("hero_view_menu")}
            </a>
          </motion.div>

          {/* Mobile / tablet hero image — keeps the hero from feeling empty below lg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid grid-cols-5 gap-3 sm:gap-4 lg:hidden"
          >
            <div className="relative col-span-3 aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-lg ring-1 ring-line">
              <FoodImage
                src={byId("mango-pickle")!.image}
                alt="Homemade mango avakaya pickle"
                emoji="🥭"
                sizes="(max-width:640px) 60vw, 40vw"
                priority
              />
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-cream/95 px-2.5 py-1 shadow ring-1 ring-gold/30">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                <span className="text-[10px] font-bold uppercase tracking-wide text-maroon">
                  No Preservatives
                </span>
              </div>
            </div>
            <div className="relative col-span-2 aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-lg ring-1 ring-line">
              <FoodImage
                src={media.sweetsPlate}
                alt="Traditional Telangana sweets"
                emoji="🟤"
                sizes="(max-width:640px) 40vw, 26vw"
              />
            </div>
          </motion.div>

          {/* Trust chips */}
          <motion.ul
            {...fade(0.55)}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start"
          >
            {(["hero_chip_1", "hero_chip_2", "hero_chip_3"] as const).map(
              (k) => (
                <li
                  key={k}
                  className={`flex items-center gap-2 text-sm font-medium text-muted ${
                    isTe ? "te" : ""
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {t(k)}
                </li>
              )
            )}
          </motion.ul>
        </div>

        {/* Right: calm framed collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden h-[480px] w-full max-w-lg lg:block"
        >
          <div className="absolute left-0 top-4 h-[300px] w-[68%] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-line">
            <FoodImage
              src={byId("mango-pickle")!.image}
              alt="Homemade mango avakaya pickle"
              emoji="🥭"
              sizes="360px"
              priority
            />
          </div>
          <div className="absolute right-0 top-0 h-44 w-44 overflow-hidden rounded-[1.75rem] shadow-lg ring-4 ring-cream">
            <FoodImage
              src={byId("sakinalu")!.image}
              alt="Sakinalu Telangana snack"
              emoji="🥨"
              sizes="190px"
            />
          </div>
          <div className="absolute bottom-2 right-6 h-56 w-[60%] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-line">
            <FoodImage
              src={media.sweetsPlate}
              alt="Traditional Telangana sweets"
              emoji="🟤"
              sizes="320px"
            />
            {/* Integrated "no preservatives" ribbon on the collage */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-cream/95 px-3 py-1.5 shadow-md ring-1 ring-gold/30">
              <span className="h-2 w-2 rounded-full bg-leaf" />
              <span className="text-[11px] font-bold uppercase tracking-wide text-maroon">
                No Preservatives
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
