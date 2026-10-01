import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;

// Single-page site.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, changeFrequency: "yearly", priority: 1 }];
}
