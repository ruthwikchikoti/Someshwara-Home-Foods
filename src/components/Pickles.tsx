"use client";

import { motion } from "framer-motion";
import { Flame, Plus, Leaf, Drumstick } from "lucide-react";
import { useLang, type TrKey } from "@/lib/i18n";
import {
  vegPickles,
  nonVegPickles,
  type Product,
  type Weight,
} from "@/lib/products";
import { useCart } from "@/lib/cart";
import SectionHeading from "./SectionHeading";
import { Stagger, staggerItem } from "./Reveal";
import FoodImage from "./FoodImage";

function PickleCard({ product }: { product: Product }) {
  const { pick } = useLang();
  const { items, add } = useCart();
  const defaultWeight: Weight =
    product.weights.find((w) => w === "500g") ?? product.weights[0];
  const qty =
    items.find((i) => i.key === `${product.id}__${defaultWeight}`)?.qty ?? 0;

  const handleAdd = () => add(product, defaultWeight);

  return (
    <motion.article
      variants={staggerItem}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
          <FoodImage
            src={product.image}
            alt={pick(product.name)}
            emoji={product.emoji}
            sizes="80px"
          />
        </div>
        {product.bestseller && (
          <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-maroon text-gold-light shadow">
            <Flame size={12} />
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate font-display text-lg font-bold leading-tight text-maroon">
          {product.name.en}
        </h4>
        <p className="te truncate text-sm font-semibold text-leaf">
          {product.name.te}
        </p>
      </div>

      <button
        onClick={handleAdd}
        aria-label={`Add ${product.name.en} to order`}
        className={`relative grid h-10 w-10 shrink-0 place-items-center rounded-full text-cream shadow-sm transition-all hover:scale-105 active:scale-95 ${
          qty > 0 ? "bg-leaf" : "bg-maroon"
        }`}
      >
        <Plus size={18} />
        {qty > 0 && (
          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[10px] font-bold text-maroon-deep ring-2 ring-surface">
            {qty}
          </span>
        )}
      </button>
    </motion.article>
  );
}

function Column({
  icon: Icon,
  titleKey,
  items,
}: {
  icon: typeof Leaf;
  titleKey: TrKey;
  items: Product[];
}) {
  const { t, lang } = useLang();
  return (
    <div>
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-maroon/10 text-maroon">
          <Icon size={20} />
        </span>
        <h3
          className={`font-display text-2xl font-bold text-maroon ${
            lang === "te" ? "te" : ""
          }`}
        >
          {t(titleKey)}
        </h3>
      </div>
      <Stagger className="space-y-3">
        {items.map((p) => (
          <PickleCard key={p.id} product={p} />
        ))}
      </Stagger>
    </div>
  );
}

export default function Pickles() {
  return (
    <section
      id="pickles"
      className="section-alt relative scroll-mt-24 py-14 sm:py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="pickle_eyebrow"
          title="pickle_title"
          sub="pickle_sub"
        />

        <div className="mt-10 grid gap-10 sm:mt-14 md:grid-cols-2">
          <Column icon={Leaf} titleKey="pickle_veg" items={vegPickles} />
          <Column
            icon={Drumstick}
            titleKey="pickle_nonveg"
            items={nonVegPickles}
          />
        </div>
      </div>
    </section>
  );
}
