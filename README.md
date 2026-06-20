# Someshwara Home Foods · సోమేశ్వర హోమ్ ఫుడ్స్

A premium, bilingual website for **Someshwara Home Foods** — an authentic Telangana homemade-food brand from Boduppal, Hyderabad. Traditional family recipes, no preservatives, shipped across India.

> _"Pure Homemade Happiness" · "ఇంటి రుచితో స్వచ్ఛమైన ఆనందం"_

The experience is designed to feel like **a grandmother's traditional Telangana kitchen meeting premium modern ecommerce** — a calm heritage palette of cream, deep maroon and muted gold, refined typography, and authentic food photography.

---

## ✨ Features

- **Bilingual everywhere** — full English / తెలుగు toggle for all content, with proper Telugu typography (Noto Sans Telugu).
- **WhatsApp cart ordering** — browse items, pick a weight (250g / 500g / 1kg / Bulk), add multiple products to a cart, and send the whole order in **one WhatsApp message**. The order message is always sent in **both English + Telugu**, regardless of the selected UI language.
- **Filterable menu** — Pindi Vantalu, Pickles, Sweets, Non-Veg Pickles and Festival Specials, with best-seller badges and per-card quantity steppers.
- **Dedicated sections** — Hero, Our Story, Menu, Pickles (veg & non-veg), Catering & Bulk orders (direct-call CTA), How It Works, Trust stats, and an Instagram-style Gallery.
- **Direct contact** — sticky navbar, an always-available floating WhatsApp + Call button, and tap-to-call for catering/bulk enquiries.
- **Lord Shiva (Someshwara) emblem** as the brand logo and favicon.

## 🎨 Design

- Heritage palette: cream `#faf5ec`, deep maroon `#6e1423`, muted gold `#a9823f`, leaf green accents.
- Playfair Display headings + Inter body + Noto Sans Telugu, with subtle, tasteful motion (no clutter).
- Authentic, appetizing food imagery for every dish.

## 🔍 SEO & Performance

- Metadata, canonical + hreflang (`en-IN` / `te-IN`), `sitemap.xml`, `robots.txt`, PWA `manifest`, branded favicon/apple-icon, and dynamic OpenGraph / Twitter share cards.
- Rich **schema.org** structured data (`FoodEstablishment` + `Menu` + `OfferCatalog` + `Product` list) targeting Telangana homemade-food keywords.
- `next/image` with AVIF/WebP, lazy loading and blur placeholders; mobile-first responsive layout.

## 🛠️ Tech Stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | lucide-react |

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## 📁 Project Structure

```
src/
  app/            # App Router pages, layout, metadata, sitemap/robots/manifest,
                  # favicon/icons and OG images
  components/     # UI sections (Hero, Menu, Pickles, Catering, Cart, Footer, …)
  lib/
    products.ts   # menu catalogue (bilingual names, categories, weights, images)
    i18n.tsx      # English/Telugu strings + language context
    cart.tsx      # cart state
    site.ts       # contact details + WhatsApp message builders
public/images/    # product, ambient and brand imagery
```

## 📞 Contact

- **Phone / WhatsApp:** 8897809289
- **Instagram:** [@someshwara_homefoods_5342](https://www.instagram.com/someshwara_homefoods_5342/)
- **Location:** Sai Maruthi Nagar, Boduppal, Hyderabad, Telangana

---

<sub>No Preservatives. Only Traditional Taste. · ప్రిజర్వేటివ్స్ లేవు. అసలైన ఇంటి రుచి మాత్రమే.</sub>
