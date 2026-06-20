"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang, type TrKey } from "@/lib/i18n";
import { products, type Category } from "@/lib/products";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { Stagger } from "./Reveal";

type Filter = "all" | Category;

const filters: { id: Filter; key: TrKey }[] = [
  { id: "all", key: "cat_all" },
  { id: "pindi", key: "cat_pindi" },
  { id: "pickles", key: "cat_pickles" },
  { id: "sweets", key: "cat_sweets" },
  { id: "nonveg", key: "cat_nonveg" },
  { id: "festival", key: "cat_festival" },
];

export default function Menu() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<Filter>("all");
  const isTe = lang === "te";

  const visible = useMemo(
    () =>
      active === "all"
        ? products
        : products.filter((p) => p.categories.includes(active)),
    [active]
  );

  return (
    <section
      id="menu"
      className="relative scroll-mt-24 py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="menu_eyebrow"
          title="menu_title"
          sub="menu_sub"
        />

        {/* Filter chips */}
        <div className="no-scrollbar mt-10 flex gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          {filters.map((f) => {
            const on = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`relative isolate shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  on ? "text-cream" : "text-maroon/70 hover:text-maroon"
                } ${isTe ? "te" : ""}`}
              >
                {on && (
                  <motion.span
                    layoutId="menu-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-maroon to-maroon-soft shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                {!on && (
                  <span className="absolute inset-0 -z-10 rounded-full border border-gold/30 bg-white/60" />
                )}
                {t(f.key)}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <Stagger
          key={active}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </AnimatePresence>
        </Stagger>
      </div>
    </section>
  );
}
