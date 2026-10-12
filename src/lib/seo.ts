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
  image?: string;
  imageAlt?: string;
};

/** 1200×630 social share image used when a page doesn't set its own. */
export const DEFAULT_OG_IMAGE = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Exterior of the Excel PM&R building in Novi, Michigan",
} as const;

/** Per-page metadata with a unique canonical URL (required for correct Google indexing). */
export function pageMetadata({
  path,
  title,
  description,
  image,
  imageAlt,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  // A page-level openGraph replaces the layout's, so always set an image here.
  const ogImage = image
    ? { url: absoluteUrl(image), alt: imageAlt }
    : { ...DEFAULT_OG_IMAGE, url: absoluteUrl(DEFAULT_OG_IMAGE.url) };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
    robots: { index: true, follow: true },
  };
}
