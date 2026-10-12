import { BUSINESS_SCHEMA_ID } from "@/lib/constants";
import type { ServiceContent } from "@/lib/data/service-content";
import { absoluteUrl } from "@/lib/seo";

/** BreadcrumbList + MedicalWebPage JSON-LD for a top-level topic page. */
export function topicPageJsonLd(path: string, crumb: string, content: ServiceContent) {
  const pageUrl = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: crumb, item: pageUrl },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.title,
        description: content.description,
        publisher: { "@id": BUSINESS_SCHEMA_ID },
      },
    ],
  };
}
