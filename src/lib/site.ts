export const SITE_NAME = "Jungle Diaries";
export const TAGLINE = "Your Journey. Your Story. Our Wild Connection.";

export const WHATSAPP_NUMBER = "919258214866";
export const PHONES = ["+91 92582 14866", "+91 96758 14866"] as const;
export const AMALTAS_EMAIL = "amaltasbythejunglediaries@gmail.com";

export const LINKS = {
  amaltasSite: "https://amaltasvilla.com/",
  destinnSite: "https://destindhellaretreat.com/",
  amaltasInstagram: "https://www.instagram.com/amaltasbyjunglediaries11/",
  destinnInstagram: "https://www.instagram.com/destinndhelaretreat/",
  permitPortal: "https://corbettonline.uk.gov.in/",
} as const;

export type NavItem = { href: string; label: string; hint: string };

export const NAV: NavItem[] = [
  { href: "/", label: "Home", hint: "Jungle Diaries in Corbett" },
  { href: "/amaltas-villa", label: "Amaltas Villa", hint: "Boutique villa · 6 rooms" },
  { href: "/destinn-dhela-retreat", label: "Destinn Dhela", hint: "Nature retreat · 14 rooms" },
  { href: "/safaris", label: "Safaris", hint: "Zones, seasons, naturalists" },
  { href: "/journeys", label: "Journeys", hint: "Tours across Uttarakhand" },
  { href: "/about", label: "About us", hint: "Our belief and our team" },
  { href: "/plan-a-trip", label: "Plan a trip", hint: "Enquire on WhatsApp" },
];

export function whatsappLink(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const GENERAL_ENQUIRY = "Hello Jungle Diaries, I'd like help planning a trip to Jim Corbett.";

export function siteUrl() {
  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return prod ? `https://${prod}` : "http://localhost:3000";
}
