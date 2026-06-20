import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { CartProvider } from "@/lib/cart";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const telugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://someshwarahomefoods.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Someshwara Home Foods | Authentic Telangana Homemade Foods Delivered Across India",
    template: "%s | Someshwara Home Foods",
  },
  description:
    "Authentic Telangana homemade foods — Pindi Vantalu, traditional snacks, veg & non-veg pickles and homemade sweets. Made with family recipes, no preservatives. Order on WhatsApp. India-wide delivery from Boduppal, Hyderabad.",
  keywords: [
    "Telangana homemade foods",
    "Hyderabad homemade snacks",
    "Pindi vantalu online",
    "non veg pickles Hyderabad",
    "homemade pickles India delivery",
    "Sakinalu online",
    "Ariselu",
    "Gongura pickle",
    "chicken pickle Hyderabad",
    "Telangana sweets",
    "Someshwara Home Foods",
  ],
  authors: [{ name: "Someshwara Home Foods" }],
  creator: "Someshwara Home Foods",
  publisher: "Someshwara Home Foods",
  applicationName: "Someshwara Home Foods",
  category: "food",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["te_IN"],
    url: SITE_URL,
    siteName: "Someshwara Home Foods",
    title: "Someshwara Home Foods | Authentic Telangana Home Foods",
    description:
      "Traditional Telangana recipes made with love — Pindi Vantalu, snacks, veg & non-veg pickles and sweets. No preservatives. India-wide delivery. Order on WhatsApp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Someshwara Home Foods | Authentic Telangana Home Foods",
    description:
      "Traditional Telangana recipes made with love. No preservatives. India-wide delivery.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "te-IN": SITE_URL,
    },
  },
};

const foodEstablishmentLd = {
  "@type": "FoodEstablishment",
  "@id": `${SITE_URL}/#organization`,
  name: "Someshwara Home Foods",
  servesCuisine: ["Telangana", "South Indian", "Homemade"],
  description:
    "Authentic Telangana homemade foods, snacks (Pindi Vantalu), veg & non-veg pickles and sweets made with family recipes and no preservatives.",
  telephone: "+91-8897809289",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/images/brand/shiva.png`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sai Maruthi Nagar, Boduppal",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  sameAs: ["https://www.instagram.com/someshwara_homefoods_5342/"],
  areaServed: { "@type": "Country", name: "India" },
  hasMenu: {
    "@type": "Menu",
    name: "Someshwara Home Foods Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Pindi Vantalu",
        description:
          "Traditional Telangana homemade snacks made from stone-ground flours.",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Sakinalu",
            description:
              "Crispy spiral rice-flour snack flavored with sesame and ajwain — a Telangana festive classic. Sakinalu online, freshly homemade.",
          },
          {
            "@type": "MenuItem",
            name: "Ariselu",
            description:
              "Traditional rice and jaggery sweet snack, deep-fried to a soft, chewy finish.",
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Pickles",
        description:
          "Homemade veg pickles made in small batches with no preservatives. Pan-India delivery.",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Mango Pickle (Avakaya)",
            description:
              "Classic Andhra-Telangana raw mango pickle in mustard and red chilli — homemade pickles delivered across India.",
          },
          {
            "@type": "MenuItem",
            name: "Gongura Pickle",
            description:
              "Tangy sorrel-leaf (gongura) pickle, a signature Telangana flavor made fresh at home.",
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Non-Veg Pickles",
        description:
          "Spicy homemade non-veg pickles from Hyderabad, slow-cooked with traditional spices.",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Chicken Pickle",
            description:
              "Boneless chicken pickle, Hyderabad-style — slow-cooked in spices and oil with no preservatives.",
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Sweets",
        description: "Homemade Telangana sweets prepared with pure ghee.",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Sunnundalu",
            description:
              "Roasted urad dal and ghee laddus — a wholesome traditional Telangana sweet.",
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Catering",
        description:
          "Homemade Telangana catering for events and bulk orders across Hyderabad.",
      },
    ],
  },
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Someshwara Home Foods Catalog",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Pindi Vantalu",
        description: "Traditional Telangana homemade snacks.",
      },
      {
        "@type": "OfferCatalog",
        name: "Pickles",
        description: "Veg homemade pickles, no preservatives.",
      },
      {
        "@type": "OfferCatalog",
        name: "Non-Veg Pickles",
        description: "Spicy homemade non-veg pickles from Hyderabad.",
      },
      {
        "@type": "OfferCatalog",
        name: "Sweets",
        description: "Homemade Telangana sweets.",
      },
      {
        "@type": "OfferCatalog",
        name: "Catering",
        description: "Telangana homemade catering for events.",
      },
    ],
  },
};

const productListLd = {
  "@type": "ItemList",
  "@id": `${SITE_URL}/#products`,
  name: "Someshwara Home Foods — Featured Products",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Sakinalu",
        category: "Pindi Vantalu",
        description:
          "Crispy spiral rice-flour snack with sesame and ajwain — Sakinalu online, freshly homemade in Hyderabad.",
        brand: { "@type": "Brand", name: "Someshwara Home Foods" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Mango Pickle (Avakaya)",
        category: "Pickles",
        description:
          "Homemade raw mango pickle with mustard and red chilli — homemade pickles delivered across India.",
        brand: { "@type": "Brand", name: "Someshwara Home Foods" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Chicken Pickle",
        category: "Non-Veg Pickles",
        description:
          "Hyderabad-style boneless chicken pickle, slow-cooked with traditional spices and no preservatives.",
        brand: { "@type": "Brand", name: "Someshwara Home Foods" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Sunnundalu",
        category: "Sweets",
        description:
          "Roasted urad dal and ghee laddus — a traditional Telangana sweet made at home.",
        brand: { "@type": "Brand", name: "Someshwara Home Foods" },
      },
    },
  ],
};

const websiteLd = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Someshwara Home Foods",
  url: SITE_URL,
  inLanguage: ["en-IN", "te-IN"],
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [foodEstablishmentLd, productListLd, websiteLd],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${telugu.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-spice-grain min-h-screen">
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
