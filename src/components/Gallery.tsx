"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { byId, media } from "@/lib/products";
import { InstagramIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import FoodImage from "./FoodImage";

const p = (id: string) => byId(id)!;

const shots = [
  { src: p("chicken-pickle").image, emoji: "🍗", label: "Chicken Pickle" },
  { src: p("mango-pickle").image, emoji: "🥭", label: "Mango Avakaya" },
  { src: p("sunnundalu").image, emoji: "🟤", label: "Sunnundalu" },
  { src: p("sakinalu").image, emoji: "🥨", label: "Sakinalu" },
  { src: media.spices, emoji: "🌶️", label: "Fresh Spices" },
  { src: p("ariselu").image, emoji: "🍯", label: "Ariselu" },
  { src: p("gongura-pickle").image, emoji: "🌿", label: "Gongura Pickle" },
  { src: p("mixture").image, emoji: "🥜", label: "Telangana Mixture" },
  { src: media.thali, emoji: "🍛", label: "Festive Spread" },
  { src: p("laddu").image, emoji: "🟡", label: "Boondi Laddu" },
  { src: p("murukulu").image, emoji: "🌀", label: "Murukulu" },
  { src: p("fish-pickle").image, emoji: "🐟", label: "Fish Pickle" },
];

export default function Gallery() {
  const { t, lang } = useLang();
  const isTe = lang === "te";

  return (
    <section id="gallery" className="relative scroll-mt-24 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="gallery_eyebrow"
          title="gallery_title"
          sub="gallery_sub"
        />

        <div className="mx-auto mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {shots.map((s, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-md ring-1 ring-line"
            >
              <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
                <FoodImage
                  src={s.src}
                  alt={s.label}
                  emoji={s.emoji}
                  sizes="(max-width:640px) 50vw, 25vw"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-maroon-deep/80 via-maroon-deep/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <figcaption className="p-4 font-display text-sm font-semibold text-cream">
                  {s.label}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#c13584] via-[#e1306c] to-[#f56040] px-7 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-[1.04] active:scale-95 ${
              isTe ? "te" : ""
            }`}
          >
            <InstagramIcon size={20} />
            {t("follow_insta")}
          </a>
        </div>
      </div>
    </section>
  );
}
