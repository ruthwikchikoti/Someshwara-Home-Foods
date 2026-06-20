"use client";

import Image from "next/image";
import { Phone, MapPin, MessageCircle, Heart } from "lucide-react";
import { useLang, type TrKey } from "@/lib/i18n";
import { SITE, telLink, waGeneral } from "@/lib/site";
import { OrnamentDivider } from "./Decor";
import { InstagramIcon } from "./BrandIcons";

const quickLinks: { id: string; key: TrKey }[] = [
  { id: "about", key: "nav_about" },
  { id: "menu", key: "nav_menu" },
  { id: "pickles", key: "nav_pickles" },
  { id: "catering", key: "nav_catering" },
  { id: "gallery", key: "nav_gallery" },
];

export default function Footer() {
  const { t, lang } = useLang();
  const wa = waGeneral();
  const isTe = lang === "te";

  return (
    <footer
      id="contact"
      className="bg-maroon-rich relative scroll-mt-24 overflow-hidden pt-14 sm:pt-16"
    >
      <div className="pattern-dots absolute inset-0 opacity-[0.05]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 pb-12 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-cream shadow-md ring-1 ring-gold/40">
                <Image
                  src="/images/brand/shiva.png"
                  alt="Someshwara — Lord Shiva emblem"
                  width={48}
                  height={48}
                  className="h-11 w-11 object-contain"
                />
              </span>
              <div>
                <p className="font-display text-xl font-bold text-cream">
                  {SITE.name}
                </p>
                <p className="te text-sm text-turmeric-soft">{SITE.nameTe}</p>
              </div>
            </div>
            <p className={`mt-5 max-w-md text-sm leading-relaxed text-cream/70 ${isTe ? "te" : ""}`}>
              {t("footer_tagline")}
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-leaf to-leaf-deep px-5 py-2.5 text-sm font-semibold text-cream shadow-md transition-transform hover:scale-[1.03] ${isTe ? "te" : ""}`}
            >
              <MessageCircle size={16} />
              {t("order_whatsapp")}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={`font-display text-lg font-bold text-cream ${isTe ? "te" : ""}`}>
              {t("footer_quicklinks")}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={`group inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-turmeric-soft ${isTe ? "te" : ""}`}
                  >
                    <span className="h-1 w-1 rounded-full bg-gold transition-all group-hover:w-3" />
                    {t(l.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach us */}
          <div>
            <h4 className={`font-display text-lg font-bold text-cream ${isTe ? "te" : ""}`}>
              {t("footer_reach")}
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-cream/70">
              <li>
                <a href={telLink} className="group flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-turmeric-soft transition-colors group-hover:bg-turmeric group-hover:text-maroon-deep">
                    <Phone size={16} />
                  </span>
                  <span>
                    <span className={`block text-xs uppercase tracking-wide text-cream/50 ${isTe ? "te" : ""}`}>
                      {t("footer_call")}
                    </span>
                    <span className="font-semibold text-cream">{SITE.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-turmeric-soft transition-colors group-hover:bg-gradient-to-br group-hover:from-[#e1306c] group-hover:to-[#f56040] group-hover:text-white">
                    <InstagramIcon size={16} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-cream/50">
                      Instagram
                    </span>
                    <span className="font-semibold text-cream">Follow us</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-turmeric-soft">
                  <MapPin size={16} />
                </span>
                <span>
                  <span className={`block text-xs uppercase tracking-wide text-cream/50 ${isTe ? "te" : ""}`}>
                    {t("footer_address")}
                  </span>
                  <span className="font-medium text-cream/90">
                    {SITE.address.line1}, {SITE.address.line2},
                    <br />
                    {SITE.address.city}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <OrnamentDivider color="#c8902a" />

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream/50">
            © {SITE.name}. {t("footer_rights")}
          </p>
          <p className={`flex items-center gap-1.5 text-xs text-cream/50 ${isTe ? "te" : ""}`}>
            {t("footer_made")}
            <Heart size={12} className="fill-pickle-bright text-pickle-bright" />
          </p>
        </div>
      </div>
    </footer>
  );
}
