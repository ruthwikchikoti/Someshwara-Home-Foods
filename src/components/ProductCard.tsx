"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Flame, ShoppingBag } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import type { Product, Weight } from "@/lib/products";
import FoodImage from "./FoodImage";
import { staggerItem } from "./Reveal";

export default function ProductCard({ product }: { product: Product }) {
  const { pick, t, lang } = useLang();
  const { items, add, setQty } = useCart();
  const [weight, setWeight] = useState<Weight>(product.weights[0]);
  const isTe = lang === "te";

  const key = `${product.id}__${weight}`;
  const inCart = items.find((i) => i.key === key);
  const qty = inCart?.qty ?? 0;

  return (
    <motion.article
      variants={staggerItem}
      layout
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
          <FoodImage
            src={product.image}
            alt={pick(product.name)}
            emoji={product.emoji}
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
          />
        </div>
        {product.bestseller && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-maroon px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-cream shadow">
            <Flame size={12} className="text-gold-light" />
            {t("bestseller")}
          </span>
        )}
        {qty > 0 && (
          <span className="absolute right-3 top-3 grid h-7 min-w-7 place-items-center rounded-full bg-leaf px-2 text-xs font-bold text-cream shadow">
            {qty} {t("in_cart")}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold leading-tight text-maroon">
          {product.name.en}
        </h3>
        <p className="te text-sm font-semibold text-leaf">{product.name.te}</p>

        <p
          className={`mt-2 flex-1 text-sm leading-relaxed text-muted ${
            isTe ? "te" : ""
          }`}
        >
          {pick(product.desc)}
        </p>

        {/* Weight selector */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.weights.map((w) => {
            const active = w === weight;
            const wKey = `${product.id}__${w}`;
            const wQty = items.find((i) => i.key === wKey)?.qty ?? 0;
            return (
              <button
                key={w}
                onClick={() => setWeight(w)}
                className={`relative rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  active
                    ? "bg-maroon text-cream"
                    : "bg-cream-deep text-maroon/70 hover:bg-gold/15"
                }`}
                aria-pressed={active}
              >
                {w}
                {wQty > 0 && (
                  <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-leaf text-[9px] font-bold text-cream">
                    {wQty}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Add / stepper */}
        {qty === 0 ? (
          <button
            onClick={() => add(product, weight)}
            className={`mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-maroon to-maroon-soft px-4 py-2.5 text-sm font-semibold text-cream shadow-sm transition-all hover:shadow-md active:scale-95 ${
              isTe ? "te" : ""
            }`}
          >
            <Plus size={16} /> {t("add_to_order")}
          </button>
        ) : (
          <div className="mt-4 flex items-center justify-between rounded-full bg-leaf px-1.5 py-1.5 text-cream">
            <button
              onClick={() => setQty(key, qty - 1)}
              aria-label="Decrease quantity"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
            >
              <Minus size={16} />
            </button>
            <span
              className={`flex items-center gap-1.5 text-sm font-bold ${
                isTe ? "te" : ""
              }`}
            >
              <ShoppingBag size={15} /> {qty} {t("in_cart")}
            </span>
            <button
              onClick={() => setQty(key, qty + 1)}
              aria-label="Increase quantity"
              className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </motion.article>
  );
}
