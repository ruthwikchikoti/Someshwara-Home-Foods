export const SITE = {
  name: "Someshwara Home Foods",
  nameTe: "సోమేశ్వర హోమ్ ఫుడ్స్",
  phone: "8897809289",
  phoneIntl: "918897809289",
  instagram: "https://www.instagram.com/someshwara_homefoods_5342/",
  instagramHandle: "@someshwara_homefoods_5342",
  address: {
    line1: "Sai Maruthi Nagar",
    line2: "Boduppal",
    city: "Hyderabad",
  },
} as const;

export const telLink = `tel:+${SITE.phoneIntl}`;

/** Build a wa.me link with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(message)}`;
}

/**
 * General enquiry. Always bilingual (English + Telugu) regardless of the
 * site's current language.
 */
export function waGeneral(): string {
  const msg =
    `Hello ${SITE.name} 🙏 / నమస్తే ${SITE.nameTe} 🙏\n\n` +
    `I'd like to know more about your homemade items and place an order.\n` +
    `మీ ఇంటి వంటకాల గురించి తెలుసుకుని ఆర్డర్ చేయాలనుకుంటున్నాను.`;
  return waLink(msg);
}

/** Catering / bulk enquiry. Always bilingual. */
export function waCatering(): string {
  const msg =
    `Hello ${SITE.name} 🙏 / నమస్తే ${SITE.nameTe} 🙏\n\n` +
    `I'd like to enquire about catering / bulk orders for an upcoming occasion.\n` +
    `రాబోయే శుభకార్యం కోసం క్యాటరింగ్ / బల్క్ ఆర్డర్ గురించి తెలుసుకోవాలనుకుంటున్నాను.`;
  return waLink(msg);
}

export type OrderLine = {
  nameEn: string;
  nameTe: string;
  weight: string;
  qty: number;
};

const weightLabel = (w: string) => (w === "Bulk" ? "Bulk / బల్క్" : w);

/**
 * Cart order message — lists every selected item with quantity.
 * Always bilingual (English + Telugu) regardless of the chosen UI language.
 */
export function waCart(items: OrderLine[]): string {
  const lines = items
    .map(
      (it, i) =>
        `${i + 1}. ${it.nameEn} / ${it.nameTe} — ${weightLabel(it.weight)} × ${it.qty}`
    )
    .join("\n");

  const msg =
    `Hello ${SITE.name} 🙏 / నమస్తే ${SITE.nameTe} 🙏\n\n` +
    `I would like to order the following items:\n` +
    `నేను ఈ వస్తువులను ఆర్డర్ చేయాలనుకుంటున్నాను:\n\n` +
    `${lines}\n\n` +
    `My delivery location / నా డెలివరీ ప్రాంతం: \n` +
    `Thank you 🙏 / ధన్యవాదాలు 🙏`;

  return waLink(msg);
}
