import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { PatientEducationPage } from "@/components/shared/PatientEducationPage";
import { getConditionBySlug } from "@/lib/data/conditions";
import {
  CONDITION_CONTENT,
  getConditionContent,
} from "@/lib/data/condition-content";
import { CONDITION_TO_SERVICES } from "@/lib/data/service-condition-mapping";
import { getServiceBySlug, type Service } from "@/lib/data/services";
import { BUSINESS_SCHEMA_ID } from "@/lib/constants";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(CONDITION_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = getConditionContent(slug);
  if (!content) return {};
  return pageMetadata({
    path: `/conditions/${slug}`,
    title: content.title,
    description: content.description,
  });
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = getConditionBySlug(slug);
  const content = getConditionContent(slug);
  // Conditions without their own page (and legacy URLs) go to the hub.
  if (!condition || !content) permanentRedirect("/conditions");

  const pageUrl = absoluteUrl(`/conditions/${slug}`);

  const treatments = (CONDITION_TO_SERVICES[slug] ?? [])
    .map((s) => getServiceBySlug(s))
    .filter((s): s is Service => s?.href !== undefined)
    .map((s) => ({ label: s.name, href: s.href as string }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Conditions", item: absoluteUrl("/conditions") },
          { "@type": "ListItem", position: 3, name: condition.name, item: pageUrl },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.title,
        description: content.description,
        about: { "@type": "MedicalCondition", name: condition.name },
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
        { label: "Conditions", href: "/conditions" },
        { label: condition.name },
      ]}
      aboutHeading={`About ${condition.name.toLowerCase()}`}
      benefitHeading="Common symptoms"
      expectHeading="How it's evaluated and treated"
      related={{
        heading: "Treatments that may help",
        items: [...treatments, { label: "Pain Management in Novi", href: "/pain-management-novi-mi" }],
        allHref: "/conditions",
        allLabel: "View all conditions we treat",
      }}
    />
  );
}
