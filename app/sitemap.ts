import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// Single-page site. Sitemap URLs must be absolute, so it stays empty until a domain is set.
export default function sitemap(): MetadataRoute.Sitemap {
  return siteUrl ? [{ url: siteUrl, changeFrequency: "yearly", priority: 1 }] : [];
}
