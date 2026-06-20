"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";

export type Lang = "en" | "te";

/** A bilingual string. */
export type Bi = { en: string; te: string };

export const tr = {
  // Nav
  nav_home: { en: "Home", te: "హోమ్" },
  nav_about: { en: "Our Story", te: "మా కథ" },
  nav_menu: { en: "Menu", te: "మెనూ" },
  nav_pickles: { en: "Pickles", te: "ఊరగాయలు" },
  nav_catering: { en: "Catering", te: "క్యాటరింగ్" },
  nav_gallery: { en: "Gallery", te: "గ్యాలరీ" },
  nav_contact: { en: "Contact", te: "సంప్రదించండి" },
  order_whatsapp: { en: "Order on WhatsApp", te: "వాట్సాప్‌లో ఆర్డర్" },

  // Hero
  hero_eyebrow: {
    en: "Pure Homemade Happiness",
    te: "ఇంటి రుచితో స్వచ్ఛమైన ఆనందం",
  },
  hero_title: {
    en: "Authentic Telangana Home Foods Delivered Across India",
    te: "తెలంగాణ ఇంటి వంటల రుచి ఇప్పుడు మీ ఇంటికే",
  },
  hero_sub: {
    en: "No Preservatives. Only Traditional Taste.",
    te: "ప్రిజర్వేటివ్స్ లేవు. అసలైన ఇంటి రుచి మాత్రమే.",
  },
  hero_view_menu: { en: "View Menu", te: "మెనూ చూడండి" },
  hero_chip_1: { en: "Family Recipes", te: "ఇంటి వంటకాలు" },
  hero_chip_2: { en: "Freshly Made", te: "తాజాగా తయారీ" },
  hero_chip_3: { en: "India-Wide Shipping", te: "భారతదేశమంతా డెలివరీ" },

  // About
  about_eyebrow: { en: "Our Story", te: "మా కథ" },
  about_title: {
    en: "From Our Kitchen, With Love",
    te: "మా వంటింటి నుండి, ప్రేమతో",
  },
  about_body: {
    en: "Started from our home kitchen, Someshwara Home Foods brings you traditional Telangana recipes made with love. Every item is freshly prepared without preservatives using authentic family methods passed down through generations.",
    te: "మా ఇంటి వంటింటి నుండి మొదలైన సోమేశ్వర హోమ్ ఫుడ్స్, తరతరాలుగా వస్తున్న అసలైన తెలంగాణ వంటకాలను ప్రేమతో మీకు అందిస్తోంది. ప్రతి వంటకం ప్రిజర్వేటివ్స్ లేకుండా, ఇంటి పద్ధతిలో తాజాగా తయారు చేయబడుతుంది.",
  },
  about_f1: { en: "Homemade", te: "ఇంటి వంట" },
  about_f2: { en: "Freshly Prepared", te: "తాజాగా తయారీ" },
  about_f3: { en: "No Preservatives", te: "ప్రిజర్వేటివ్స్ లేవు" },
  about_f4: { en: "India-Wide Delivery", te: "భారతదేశమంతా డెలివరీ" },

  // Menu
  menu_eyebrow: { en: "Our Menu", te: "మా మెనూ" },
  menu_title: {
    en: "Handmade Telangana Delicacies",
    te: "చేతితో తయారు చేసిన తెలంగాణ రుచులు",
  },
  menu_sub: {
    en: "Pick your favourites, choose a quantity and send your order in one tap.",
    te: "మీకు నచ్చినవి ఎంచుకోండి, పరిమాణం ఎంచుకుని ఒక్క ట్యాప్‌లో ఆర్డర్ పంపండి.",
  },
  order_now: { en: "Order Now", te: "ఆర్డర్ చేయండి" },
  bestseller: { en: "Best Seller", te: "బెస్ట్ సెల్లర్" },

  // Categories
  cat_all: { en: "All", te: "అన్నీ" },
  cat_pindi: { en: "Pindi Vantalu", te: "పిండి వంటలు" },
  cat_pickles: { en: "Pickles", te: "ఊరగాయలు" },
  cat_sweets: { en: "Sweets", te: "స్వీట్లు" },
  cat_nonveg: { en: "Non-Veg Pickles", te: "నాన్‌వెజ్ ఊరగాయలు" },
  cat_festival: { en: "Festival Specials", te: "పండుగ స్పెషల్స్" },

  // Pickles section
  pickle_eyebrow: { en: "Telangana Avakaya", te: "తెలంగాణ ఊరగాయ" },
  pickle_title: {
    en: "Telangana Pickles Made With Traditional Recipes",
    te: "సంప్రదాయ పద్ధతిలో తయారైన తెలంగాణ ఊరగాయలు",
  },
  pickle_sub: {
    en: "Sun-matured, hand-pounded spices and pure oils. The fiery taste of a Telangana home.",
    te: "ఎండలో మాగిన, చేతితో దంచిన మసాలాలు, స్వచ్ఛమైన నూనెలు. తెలంగాణ ఇంటి ఘాటైన రుచి.",
  },
  pickle_veg: { en: "Vegetarian Pickles", te: "శాకాహార ఊరగాయలు" },
  pickle_nonveg: { en: "Non-Veg Pickles", te: "మాంసాహార ఊరగాయలు" },

  // Catering
  catering_eyebrow: { en: "Catering & Bulk", te: "క్యాటరింగ్ & బల్క్" },
  catering_title: {
    en: "Traditional Catering For Every Occasion",
    te: "ప్రతి శుభకార్యానికి సంప్రదాయ క్యాటరింగ్",
  },
  catering_sub: {
    en: "From intimate house gatherings to grand functions — authentic Telangana flavours, prepared fresh and served with care.",
    te: "చిన్న ఇంటి కార్యక్రమాల నుండి పెద్ద ఫంక్షన్ల వరకు — తాజాగా తయారు చేసిన అసలైన తెలంగాణ రుచులు.",
  },
  catering_cta: { en: "Call For Catering Booking", te: "క్యాటరింగ్ బుకింగ్ కోసం కాల్ చేయండి" },
  cs1: { en: "Functions", te: "ఫంక్షన్లు" },
  cs2: { en: "Birthdays", te: "పుట్టినరోజులు" },
  cs3: { en: "House Warming", te: "గృహప్రవేశం" },
  cs4: { en: "Festivals", te: "పండుగలు" },
  cs5: { en: "Corporate Events", te: "కార్పొరేట్ ఈవెంట్స్" },
  cs6: { en: "Bulk Snacks Orders", te: "బల్క్ స్నాక్స్ ఆర్డర్లు" },

  // How it works
  how_eyebrow: { en: "How It Works", te: "ఇది ఎలా పని చేస్తుంది" },
  how_title: { en: "Four Simple Steps", te: "నాలుగు సులభమైన దశలు" },
  how_1: {
    en: "Choose your favourite homemade items",
    te: "మీకు నచ్చిన ఇంటి వంటలను ఎంచుకోండి",
  },
  how_2: { en: "Place order on WhatsApp", te: "వాట్సాప్‌లో ఆర్డర్ చేయండి" },
  how_3: { en: "Freshly prepared for you", te: "మీ కోసం తాజాగా తయారీ" },
  how_4: {
    en: "Delivered anywhere in India",
    te: "భారతదేశంలో ఎక్కడికైనా డెలివరీ",
  },
  how_step: { en: "Step", te: "దశ" },

  // Trust
  trust_eyebrow: { en: "Why Families Trust Us", te: "కుటుంబాలు మమ్మల్ని ఎందుకు నమ్ముతాయి" },
  trust_title: { en: "Trusted Homemade Taste", te: "నమ్మకమైన ఇంటి రుచి" },
  trust_1_v: { en: "1000+", te: "1000+" },
  trust_1_l: { en: "Happy Customers", te: "సంతృప్తి చెందిన కస్టమర్లు" },
  trust_2_v: { en: "100%", te: "100%" },
  trust_2_l: { en: "Fresh Preparation", te: "తాజా తయారీ" },
  trust_3_v: { en: "All India", te: "భారతదేశమంతా" },
  trust_3_l: { en: "Wide Shipping", te: "డెలివరీ" },
  trust_4_v: { en: "100%", te: "100%" },
  trust_4_l: { en: "Family Recipes", te: "ఇంటి వంటకాలు" },

  // Gallery
  gallery_eyebrow: { en: "Gallery", te: "గ్యాలరీ" },
  gallery_title: { en: "Straight From Our Kitchen", te: "నేరుగా మా వంటింటి నుండి" },
  gallery_sub: {
    en: "Real food, real preparation, real happiness.",
    te: "నిజమైన ఆహారం, నిజమైన తయారీ, నిజమైన ఆనందం.",
  },
  follow_insta: { en: "Follow on Instagram", te: "ఇన్‌స్టాగ్రామ్‌లో ఫాలో అవ్వండి" },

  // Footer
  footer_tagline: {
    en: "Authentic Telangana home foods, made with love and delivered across India.",
    te: "ప్రేమతో తయారు చేసి భారతదేశమంతా అందించే అసలైన తెలంగాణ ఇంటి వంటలు.",
  },
  footer_quicklinks: { en: "Quick Links", te: "త్వరిత లింకులు" },
  footer_reach: { en: "Reach Us", te: "మమ్మల్ని సంప్రదించండి" },
  footer_call: { en: "Call / WhatsApp", te: "కాల్ / వాట్సాప్" },
  footer_address: { en: "Address", te: "చిరునామా" },
  footer_rights: {
    en: "All rights reserved.",
    te: "అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
  },
  footer_made: {
    en: "Made with love in Telangana",
    te: "తెలంగాణలో ప్రేమతో తయారు చేయబడింది",
  },

  // Cart / order
  add_to_order: { en: "Add to Order", te: "ఆర్డర్‌కు జోడించు" },
  added: { en: "Added ✓", te: "జోడించబడింది ✓" },
  in_cart: { en: "in order", te: "ఆర్డర్‌లో" },
  your_order: { en: "Your Order", te: "మీ ఆర్డర్" },
  cart_count_items: { en: "items", te: "వస్తువులు" },
  cart_empty: { en: "Your order is empty", te: "మీ ఆర్డర్ ఖాళీగా ఉంది" },
  cart_empty_sub: {
    en: "Add some homemade favourites to get started.",
    te: "మొదలుపెట్టడానికి కొన్ని ఇంటి వంటకాలను జోడించండి.",
  },
  send_order: { en: "Send Order on WhatsApp", te: "వాట్సాప్‌లో ఆర్డర్ పంపండి" },
  clear_order: { en: "Clear", te: "క్లియర్" },
  browse_menu: { en: "Browse Menu", te: "మెనూ చూడండి" },
  cart_note: {
    en: "You'll confirm everything on WhatsApp — no payment here. The message is sent in English & Telugu.",
    te: "మీరు అన్నీ వాట్సాప్‌లో నిర్ధారిస్తారు — ఇక్కడ చెల్లింపు లేదు. సందేశం ఇంగ్లీష్ & తెలుగులో పంపబడుతుంది.",
  },

  // Weights
  w_250: { en: "250g", te: "250గ్రా" },
  w_500: { en: "500g", te: "500గ్రా" },
  w_1kg: { en: "1kg", te: "1కేజీ" },
  w_bulk: { en: "Bulk", te: "బల్క్" },
} as const;

export type TrKey = keyof typeof tr;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Translate a known UI key. */
  t: (key: TrKey) => string;
  /** Pick the right side of a bilingual value. */
  pick: (b: Bi) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = useCallback(
    () => setLang((l) => (l === "en" ? "te" : "en")),
    []
  );
  const t = useCallback((key: TrKey) => tr[key][lang], [lang]);
  const pick = useCallback((b: Bi) => b[lang], [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggle, t, pick }),
    [lang, toggle, t, pick]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
