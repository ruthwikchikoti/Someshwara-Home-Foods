"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { telLink, waGeneral } from "@/lib/site";

/** WhatsApp glyph (Lucide has no brand icon). */
function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z M12.03 2C6.55 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.77 1.22h.01c5.48 0 9.93-4.45 9.93-9.93C21.96 6.45 17.51 2 12.03 2Zm0 18.17h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.25 8.25Z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  const { t, lang } = useLang();
  const wa = waGeneral();
  const [show, setShow] = useState(false);
  const isTe = lang === "te";

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 380, damping: 24 }}
          className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3"
        >
          {/* Call */}
          <a
            href={telLink}
            aria-label="Call for bulk & catering"
            className="grid h-12 w-12 place-items-center rounded-full bg-maroon text-cream shadow-lg ring-1 ring-cream/40 transition-transform hover:scale-105 active:scale-95"
          >
            <Phone size={20} />
          </a>

          {/* WhatsApp */}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("order_whatsapp")}
            className={`flex h-14 items-center gap-2 rounded-full bg-[#25925a] pl-4 pr-5 text-white shadow-lg ring-1 ring-white/30 transition-transform hover:scale-105 active:scale-95 ${
              isTe ? "te" : ""
            }`}
          >
            <WhatsAppIcon />
            <span className="hidden text-sm font-bold sm:inline">
              {t("order_whatsapp")}
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
