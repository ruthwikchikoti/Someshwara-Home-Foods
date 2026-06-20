"use client";

import { motion } from "framer-motion";
import { ShoppingBasket, MessageCircle, ChefHat, Truck } from "lucide-react";
import { useLang, type TrKey } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

const steps: { icon: typeof ChefHat; key: TrKey }[] = [
  { icon: ShoppingBasket, key: "how_1" },
  { icon: MessageCircle, key: "how_2" },
  { icon: ChefHat, key: "how_3" },
  { icon: Truck, key: "how_4" },
];

export default function HowItWorks() {
  const { t, lang } = useLang();
  const isTe = lang === "te";

  return (
    <section className="relative py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="how_eyebrow" title="how_title" />

        <div className="relative mt-12 sm:mt-16">
          {/* connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 lg:block">
            <div className="mx-auto h-full max-w-5xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ originX: 0 }}
              className="mx-auto -mt-0.5 h-0.5 max-w-5xl bg-gradient-to-r from-turmeric to-leaf"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, key }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-maroon to-maroon-deep text-turmeric-soft shadow-lg ring-4 ring-cream">
                    <Icon size={26} />
                  </span>
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-turmeric text-sm font-bold text-maroon-deep shadow ring-2 ring-cream">
                    {i + 1}
                  </span>
                </div>
                <p
                  className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold ${
                    isTe ? "te tracking-normal" : ""
                  }`}
                >
                  {t("how_step")} {i + 1}
                </p>
                <p
                  className={`mt-1 max-w-[14rem] text-base font-semibold text-maroon ${
                    isTe ? "te" : ""
                  }`}
                >
                  {t(key)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
