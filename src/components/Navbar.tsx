"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang, type TrKey } from "@/lib/i18n";
import { SITE, waGeneral } from "@/lib/site";
import LanguageToggle from "./LanguageToggle";
import { CartButton } from "./CartDrawer";
import { WhatsAppIcon } from "./BrandIcons";

const links: { id: string; key: TrKey }[] = [
  { id: "about", key: "nav_about" },
  { id: "menu", key: "nav_menu" },
  { id: "pickles", key: "nav_pickles" },
  { id: "catering", key: "nav_catering" },
  { id: "gallery", key: "nav_gallery" },
  { id: "contact", key: "nav_contact" },
];

export default function Navbar() {
  const { t, lang } = useLang();
  const wa = waGeneral();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTe = lang === "te";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_8px_30px_rgba(61,8,16,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#home" className="group flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-maroon to-maroon-deep shadow-md ring-1 ring-gold/40 sm:h-11 sm:w-11">
            <Image
              src="/images/brand/shiva.png"
              alt="Someshwara — Lord Shiva emblem"
              width={44}
              height={44}
              className="h-[34px] w-[34px] object-contain sm:h-[38px] sm:w-[38px]"
              priority
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-bold text-maroon sm:text-lg">
              Someshwara
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-[10px] sm:tracking-[0.2em]">
              Home Foods
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`group relative text-sm font-semibold text-ink/75 transition-colors hover:text-maroon ${
                  isTe ? "te" : ""
                }`}
              >
                {t(l.key)}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-turmeric transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <CartButton />
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-full bg-[#25925a] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-95 lg:flex ${
              isTe ? "te" : ""
            }`}
          >
            <WhatsAppIcon size={16} />
            {t("order_whatsapp")}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full bg-maroon/10 text-maroon lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gold/20 bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <ul className="space-y-1 px-4 py-4">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 font-semibold text-ink/80 transition-colors hover:bg-maroon/5 hover:text-maroon ${
                      isTe ? "te" : ""
                    }`}
                  >
                    {t(l.key)}
                  </a>
                </li>
              ))}
              <li className="flex items-center justify-between gap-3 pt-2">
                <LanguageToggle />
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25925a] px-4 py-3 text-sm font-semibold text-white ${
                    isTe ? "te" : ""
                  }`}
                >
                  <WhatsAppIcon size={16} />
                  {t("order_whatsapp")}
                </a>
              </li>
            </ul>
            <p className="px-5 pb-4 text-xs text-ink/50">
              {SITE.phone} · {SITE.address.line2}, {SITE.address.city}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
