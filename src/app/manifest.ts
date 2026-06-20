import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Someshwara Home Foods — Authentic Telangana Home Foods",
    short_name: "Someshwara Foods",
    description:
      "Authentic Telangana homemade foods — Pindi Vantalu, snacks, veg & non-veg pickles and sweets. No preservatives. India-wide delivery from Boduppal, Hyderabad.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#6e1423",
    background_color: "#faf5ec",
    lang: "en-IN",
    categories: ["food", "shopping", "lifestyle"],
    icons: [
      {
        src: "/images/brand/shiva.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/brand/shiva.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/brand/shiva.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
