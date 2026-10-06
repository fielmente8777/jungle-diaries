import type { MetadataRoute } from "next";
import { NAV, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  return NAV.map((item) => ({
    url: `${base}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : item.href === "/plan-a-trip" ? 0.6 : 0.8,
  }));
}
