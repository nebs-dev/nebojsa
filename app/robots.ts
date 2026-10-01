import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteUrl && { sitemap: `${siteUrl}/sitemap.xml` }),
  };
}
