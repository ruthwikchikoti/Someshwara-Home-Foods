"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, Plus, Minus, Trash2, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { waCart } from "@/lib/site";
import { WhatsAppIcon } from "./BrandIcons";

/** Cart trigger button (used in the navbar). */
export function CartButton({ dark = false }: { dark?: boolean }) {
  const { count, open } = useCart();
  return (
    <button
      onClick={open}
      aria-label="Open your order"
      className={`relative grid h-10 w-10 place-items-center rounded-full transition-colors ${
        dark
          ? "bg-white/10 text-cream hover:bg-white/20"
          : "bg-maroon/10 text-maroon hover:bg-maroon/15"
      }`}
    >
      <ShoppingBag size={19} />
      <AnimatePresence>
        {count > 0 && (
          <motion.span
            key={count}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-maroon-deep ring-2 ring-cream"
          >
            {count}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

const weightLabel: Record<string, string> = {
  "250g": "250g",
  "500g": "500g",
  "1kg": "1kg",
  Bulk: "Bulk",
};

export default function CartDrawer() {
  const { t, lang } = useLang();
  const { items, count, isOpen, close, setQty, remove, clear } = useCart();
  const isTe = lang === "te";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-maroon-deep/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-cream shadow-2xl"
            role="dialog"
            aria-label={t("your_order")}
          >
            {/* Header */}
            <header className="flex items-center justify-between border-b border-line bg-surface px-5 py-4">
              <div className="flex items-center gap-2.5">
                <ShoppingBag size={20} className="text-maroon" />
                <h2
                  className={`font-display text-lg font-bold text-maroon ${
                    isTe ? "te" : ""
                  }`}
                >
                  {t("your_order")}
                </h2>
                {count > 0 && (
                  <span className="rounded-full bg-maroon/10 px-2 py-0.5 text-xs font-semibold text-maroon">
                    {count} {t("cart_count_items")}
                  </span>
                )}
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full text-muted hover:bg-maroon/10 hover:text-maroon"
              >
                <X size={20} />
              </button>
            </header>

            {/* Body */}
            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-maroon/5 text-maroon/40">
                  <ShoppingBag size={34} />
                </span>
                <p
                  className={`mt-5 font-display text-xl font-bold text-maroon ${
                    isTe ? "te" : ""
                  }`}
                >
                  {t("cart_empty")}
                </p>
                <p className={`mt-2 text-sm text-muted ${isTe ? "te" : ""}`}>
                  {t("cart_empty_sub")}
                </p>
                <button
                  onClick={close}
                  className={`mt-6 rounded-full border border-gold/50 px-6 py-2.5 text-sm font-semibold text-maroon transition-colors hover:bg-gold/10 ${
                    isTe ? "te" : ""
                  }`}
                >
                  {t("browse_menu")}
                </button>
              </div>
            ) : (
              <ul className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                {items.map((it) => (
                  <motion.li
                    key={it.key}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-ink">
                        {it.nameEn}
                      </p>
                      <p className="te truncate text-sm text-leaf">
                        {it.nameTe}
                      </p>
                      <span className="mt-0.5 inline-block rounded-full bg-cream-deep px-2 py-0.5 text-xs font-semibold text-maroon">
                        {weightLabel[it.weight] ?? it.weight}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 rounded-full border border-line bg-cream p-1">
                      <button
                        onClick={() => setQty(it.key, it.qty - 1)}
                        aria-label="Decrease"
                        className="grid h-7 w-7 place-items-center rounded-full text-maroon hover:bg-maroon/10"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-5 text-center text-sm font-bold text-ink">
                        {it.qty}
                      </span>
                      <button
                        onClick={() => setQty(it.key, it.qty + 1)}
                        aria-label="Increase"
                        className="grid h-7 w-7 place-items-center rounded-full text-maroon hover:bg-maroon/10"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => remove(it.key)}
                      aria-label="Remove"
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted hover:bg-pickle/10 hover:text-pickle"
                    >
                      <Trash2 size={16} />
                    </button>
                  </motion.li>
                ))}
              </ul>
            )}

            {/* Footer */}
            {items.length > 0 && (
              <footer className="border-t border-line bg-surface px-5 py-4">
                <p className={`mb-3 text-xs leading-relaxed text-muted ${isTe ? "te" : ""}`}>
                  {t("cart_note")}
                </p>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={clear}
                    className={`shrink-0 rounded-full border border-line px-4 py-3 text-sm font-semibold text-muted transition-colors hover:border-pickle/40 hover:text-pickle ${
                      isTe ? "te" : ""
                    }`}
                  >
                    {t("clear_order")}
                  </button>
                  <a
                    href={waCart(items)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex min-w-0 flex-1 items-center justify-center gap-2 rounded-full bg-[#25925a] px-4 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95 sm:px-5 sm:text-base ${
                      isTe ? "te" : ""
                    }`}
                  >
                    <WhatsAppIcon size={20} />
                    <span className="truncate">{t("send_order")}</span>
                  </a>
                </div>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
