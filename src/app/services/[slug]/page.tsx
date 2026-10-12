import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { PatientEducationPage } from "@/components/shared/PatientEducationPage";
import { getServiceBySlug, SERVICES } from "@/lib/data/services";
import { getServiceContent, SERVICE_CONTENT } from "@/lib/data/service-content";
import { SERVICE_TO_CONDITIONS } from "@/lib/data/service-condition-mapping";
import { conditionLinks } from "@/lib/data/condition-content";
import { BUSINESS_SCHEMA_ID } from "@/lib/constants";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

/** Relevant next-step links for the two priority procedures.
 * Other service pages retain their existing related-services list.
 */
const PRIORITY_RELATED: Record<string, string[]> = {
  "trigger-point-injections": [
    "on-site-physical-therapy",
    "epidural-steroid-injections",
    "facet-joint-injections",
  ],
  "epidural-steroid-injections": [
    "on-site-physical-therapy",
    "trigger-point-injections",
    "facet-joint-injections",
  ],
};

export function generateStaticParams() {
  return Object.keys(SERVICE_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getServiceContent(slug);
  if (!content) return {};
  return pageMetadata({
    path: `/services/${slug}`,
    title: content.title,
    description: content.description,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const content = getServiceContent(slug);
  // Legacy or content-less service URLs go to the service's own page or the hub.
  if (!service || !content) permanentRedirect(service?.href ?? "/services");

  const pageUrl = absoluteUrl(`/services/${slug}`);

  const relatedSlugs = PRIORITY_RELATED[slug];
  const related = relatedSlugs
    ? relatedSlugs.flatMap((relatedSlug) => {
        const item = getServiceBySlug(relatedSlug);
        return item?.href ? [{ label: item.name, href: item.href }] : [];
      })
    : SERVICES.filter((s) => s.slug !== slug && SERVICE_CONTENT[s.slug])
        .slice(0, 4)
        .map((s) => ({ label: s.name, href: `/services/${s.slug}` }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
          { "@type": "ListItem", position: 3, name: service.name, item: pageUrl },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.title,
        description: content.description,
        about: { "@type": "MedicalProcedure", name: service.name },
        publisher: { "@id": BUSINESS_SCHEMA_ID },
      },
    ],
  };

  return (
    <PatientEducationPage
      content={content}
      jsonLd={jsonLd}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.name },
      ]}
      aboutHeading={`About ${service.name}`}
      showEarlyConsultationCta={slug === "trigger-point-injections" || slug === "epidural-steroid-injections"}
      chips={{
        label: "Related conditions",
        items: conditionLinks(SERVICE_TO_CONDITIONS[slug] ?? []),
      }}
      related={{
        heading: "Related services",
        items: related,
        allHref: "/services",
        allLabel: "View all services",
      }}
    />
  );
}
