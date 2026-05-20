import type { MetadataRoute } from "next";
import { SITEMAP_URL, WEBSITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    host: WEBSITE_URL,
    sitemap: SITEMAP_URL,
  };
}
