import type { Metadata } from "next";
import { WEBSITE_URL } from "@/lib/constants";

/** Absolute URL for a site path (e.g. `/about` → https://www.excel-rehab.com/about). */
export function absoluteUrl(path: string): string {
  if (path === "/" || path === "") return WEBSITE_URL;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${WEBSITE_URL}${normalized}`;
}

type PageMetaInput = {
  path: string;
  title: string;
  description: string;
};

/** Per-page metadata with a unique canonical URL (required for correct Google indexing). */
export function pageMetadata({
  path,
  title,
  description,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}
