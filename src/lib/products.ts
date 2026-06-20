import type { Bi } from "./i18n";

export type Category = "pindi" | "pickles" | "sweets" | "nonveg" | "festival";

export type Weight = "250g" | "500g" | "1kg" | "Bulk";

export type Product = {
  id: string;
  name: Bi;
  desc: Bi;
  categories: Category[];
  weights: Weight[];
  image: string;
  /** Emoji shown only on the rare image-load failure. */
  emoji: string;
  bestseller?: boolean;
};

/** Each product's photo lives at /public/images/products/<id>.png */
type Raw = Omit<Product, "image">;

const raw: Raw[] = [
  // ---------------- Pindi Vantalu / Snacks ----------------
  {
    id: "sakinalu",
    name: { en: "Sakinalu", te: "సకినాలు" },
    desc: {
      en: "Crispy rice-flour spirals with sesame — the soul of every Telangana festival.",
      te: "నువ్వులతో తయారు చేసిన గుండ్రటి కరకరలాడే బియ్యప్పిండి వంటకం — ప్రతి పండుగకు ప్రత్యేకం.",
    },
    categories: ["pindi", "festival"],
    weights: ["250g", "500g", "1kg", "Bulk"],
    emoji: "🥨",
    bestseller: true,
  },
  {
    id: "ariselu",
    name: { en: "Ariselu", te: "అరిసెలు" },
    desc: {
      en: "Soft jaggery & rice delicacy, deep-fried to golden perfection. A festive classic.",
      te: "బెల్లం, బియ్యప్పిండితో చేసిన మెత్తని తీపి వంటకం. పండుగలకు తప్పనిసరి.",
    },
    categories: ["sweets", "festival"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🍯",
    bestseller: true,
  },
  {
    id: "chekkalu",
    name: { en: "Chekkalu", te: "చెక్కలు" },
    desc: {
      en: "Thin, crunchy savoury discs with chana dal and chilli. Perfect tea-time crunch.",
      te: "శనగపప్పు, మిర్చితో చేసిన సన్నని కరకరలాడే వంటకం. టీతో అద్భుతం.",
    },
    categories: ["pindi"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🫓",
  },
  {
    id: "murukulu",
    name: { en: "Murukulu", te: "మురుకులు" },
    desc: {
      en: "Spiral hand-pressed crunchies, mildly spiced. Light, addictive and homemade.",
      te: "చేతితో నొక్కి చేసిన చుట్టల ఆకారపు కరకరలాడే వంటకం. తేలికగా, రుచిగా.",
    },
    categories: ["pindi"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🌀",
  },
  {
    id: "gavvalu",
    name: { en: "Gavvalu", te: "గవ్వలు" },
    desc: {
      en: "Shell-shaped crispies, available sweet (jaggery) or spicy. A handmade treat.",
      te: "గవ్వ ఆకారపు వంటకం — తీపి (బెల్లం) లేదా కారం రుచిలో. చేతితో తయారు.",
    },
    categories: ["pindi", "sweets"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🐚",
  },
  {
    id: "mixture",
    name: { en: "Telangana Mixture", te: "మిక్చర్" },
    desc: {
      en: "A bold blend of sev, boondi, peanuts and curry leaves. Spicy, crunchy, irresistible.",
      te: "సేవ్, బూందీ, వేరుశనగ, కరివేపాకుల ఘాటైన మిశ్రమం. కారంగా, కరకరలాడుతూ.",
    },
    categories: ["pindi"],
    weights: ["250g", "500g", "1kg", "Bulk"],
    emoji: "🥜",
  },
  {
    id: "palli-patti",
    name: { en: "Palli Patti", te: "పల్లీ పట్టీ" },
    desc: {
      en: "Roasted peanuts bound in molten jaggery — a wholesome, crunchy energy bite.",
      te: "వేయించిన వేరుశనగలు బెల్లంలో కలిపి చేసిన శక్తినిచ్చే చిరుతిండి.",
    },
    categories: ["sweets", "pindi"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🥜",
  },

  // ---------------- Sweets ----------------
  {
    id: "sunnundalu",
    name: { en: "Sunnundalu", te: "సున్నుండలు" },
    desc: {
      en: "Roasted urad dal laddus with ghee & jaggery. Nutritious, melt-in-mouth tradition.",
      te: "నెయ్యి, బెల్లంతో చేసిన మినప్పప్పు లడ్డూలు. పౌష్టికమైన, నోటిలో కరిగే రుచి.",
    },
    categories: ["sweets", "festival"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🟤",
    bestseller: true,
  },
  {
    id: "laddu",
    name: { en: "Boondi Laddu", te: "లడ్డు" },
    desc: {
      en: "Classic golden boondi laddus, fragrant with cardamom and pure ghee.",
      te: "యాలకులు, స్వచ్ఛమైన నెయ్యితో చేసిన బంగారు వర్ణపు బూంది లడ్డూలు.",
    },
    categories: ["sweets", "festival"],
    weights: ["250g", "500g", "1kg", "Bulk"],
    emoji: "🟡",
  },
  {
    id: "boondi",
    name: { en: "Sweet Boondi", te: "బూంది" },
    desc: {
      en: "Tiny pearls of fried gram flour soaked in fragrant sugar syrup.",
      te: "చక్కెర పాకంలో నానబెట్టిన చిన్న చిన్న శనగపిండి బూందీ ముత్యాలు.",
    },
    categories: ["sweets"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🟠",
  },

  // ---------------- Veg Pickles ----------------
  {
    id: "mango-pickle",
    name: { en: "Mango Pickle", te: "మామిడి ఊరగాయ" },
    desc: {
      en: "Raw mango chunks in fiery red chilli, mustard and cold-pressed sesame oil.",
      te: "ఎర్ర మిర్చి, ఆవాలు, నువ్వుల నూనెతో తయారు చేసిన మామిడి ముక్కల ఊరగాయ.",
    },
    categories: ["pickles"],
    weights: ["250g", "500g", "1kg", "Bulk"],
    emoji: "🥭",
    bestseller: true,
  },
  {
    id: "gongura-pickle",
    name: { en: "Gongura Pickle", te: "గోంగూర ఊరగాయ" },
    desc: {
      en: "The tangy pride of Telangana — sorrel leaves slow-cooked with garlic & chilli.",
      te: "తెలంగాణ గర్వం — వెల్లుల్లి, మిర్చితో ఉడికించిన పుల్లని గోంగూర ఊరగాయ.",
    },
    categories: ["pickles"],
    weights: ["250g", "500g", "1kg", "Bulk"],
    emoji: "🌿",
    bestseller: true,
  },
  {
    id: "tomato-pickle",
    name: { en: "Tomato Pickle", te: "టమాటా ఊరగాయ" },
    desc: {
      en: "Sun-ripe tomatoes simmered with spices into a luscious, tangy pickle.",
      te: "మసాలాలతో ఉడికించిన పండిన టమాటాలతో చేసిన పుల్లని రుచికరమైన ఊరగాయ.",
    },
    categories: ["pickles"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🍅",
  },
  {
    id: "lemon-pickle",
    name: { en: "Lemon Pickle", te: "నిమ్మకాయ ఊరగాయ" },
    desc: {
      en: "Tender lemons matured in salt, chilli and spices — zesty and timeless.",
      te: "ఉప్పు, మిర్చి, మసాలాలలో మాగిన నిమ్మకాయలతో చేసిన ఘాటైన ఊరగాయ.",
    },
    categories: ["pickles"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🍋",
  },

  // ---------------- Non-Veg Pickles ----------------
  {
    id: "chicken-pickle",
    name: { en: "Chicken Pickle", te: "చికెన్ ఊరగాయ" },
    desc: {
      en: "Boneless chicken cooked in roasted spices & oil. Bold, fiery, unforgettable.",
      te: "వేయించిన మసాలాలు, నూనెతో వండిన బోన్‌లెస్ చికెన్ ఊరగాయ. ఘాటైన రుచి.",
    },
    categories: ["nonveg"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🍗",
    bestseller: true,
  },
  {
    id: "mutton-pickle",
    name: { en: "Mutton Pickle", te: "మటన్ ఊరగాయ" },
    desc: {
      en: "Tender mutton slow-cooked in a deep, aromatic Telangana spice blend.",
      te: "ఘుమఘుమలాడే తెలంగాణ మసాలాలో మెల్లగా వండిన మటన్ ఊరగాయ.",
    },
    categories: ["nonveg"],
    weights: ["250g", "500g", "1kg"],
    emoji: "🍖",
  },
  {
    id: "prawn-pickle",
    name: { en: "Prawn Pickle", te: "రొయ్యల ఊరగాయ" },
    desc: {
      en: "Coastal-style prawns roasted with tangy spices into a rich, fiery pickle.",
      te: "పుల్లని మసాలాలతో వేయించిన రొయ్యలతో చేసిన రిచ్, ఘాటైన ఊరగాయ.",
    },
    categories: ["nonveg"],
    weights: ["250g", "500g"],
    emoji: "🦐",
  },
  {
    id: "fish-pickle",
    name: { en: "Fish Pickle", te: "చేపల ఊరగాయ" },
    desc: {
      en: "Boneless fish in a robust mustard-chilli masala. A coastal-Telangana favourite.",
      te: "ఆవాలు, మిర్చి మసాలాలో తయారు చేసిన బోన్‌లెస్ చేపల ఊరగాయ.",
    },
    categories: ["nonveg"],
    weights: ["250g", "500g"],
    emoji: "🐟",
  },
];

/** Each product's AI-generated photo, derived from its id. */
export const products: Product[] = raw.map((p) => ({
  ...p,
  image: `/images/products/${p.id}.png`,
}));

/** Ambient / lifestyle photos used across the site. */
export const media = {
  thali: "/images/ambient/thali.png",
  sweetsPlate: "/images/ambient/sweetsPlate.png",
  spices: "/images/ambient/spices.png",
  jaggery: "/images/ambient/jaggery.png",
  spiceBowls: "/images/ambient/spiceBowls.png",
};

export const vegPickles = products.filter((p) =>
  p.categories.includes("pickles")
);
export const nonVegPickles = products.filter((p) =>
  p.categories.includes("nonveg")
);

export const byId = (id: string) => products.find((p) => p.id === id);
