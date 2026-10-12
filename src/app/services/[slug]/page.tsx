import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServiceBySlug, SERVICES } from "@/lib/data/services";
import { getServiceContent, SERVICE_CONTENT } from "@/lib/data/service-content";
import { getConditionBySlug, type Condition } from "@/lib/data/conditions";
import { SERVICE_TO_CONDITIONS } from "@/lib/data/service-condition-mapping";
import { PHONE, BUSINESS_SCHEMA_ID, SITE_NAME } from "@/lib/constants";
import { DOCTOR } from "@/lib/data/doctor";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

/** Only services with reviewed page content get their own URL. */
export const dynamicParams = false;

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

const primaryCta =
  "inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-3.5 text-neutral-900 font-semibold hover:opacity-90 transition-opacity";
const outlineCta =
  "inline-flex items-center justify-center rounded-lg border-2 border-brand-blue px-8 py-3.5 text-brand-blue font-semibold hover:bg-brand-blue/10 transition-colors";

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const content = getServiceContent(slug);
  if (!service || !content) notFound();

  const pageUrl = absoluteUrl(`/services/${slug}`);
  const phoneTel = PHONE.replace(/\./g, "");

  const conditions = (SERVICE_TO_CONDITIONS[slug] ?? [])
    .map((s) => getConditionBySlug(s))
    .filter((c): c is Condition => c !== undefined);

  const related = SERVICES.filter(
    (s) => s.slug !== slug && SERVICE_CONTENT[s.slug]
  ).slice(0, 4);

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
    <div>
      <JsonLd data={jsonLd} />
      <InnerPageHero
        title={content.h1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <section>
            <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-4">
              About {service.name}
            </h2>
            {content.overview.map((p, i) => (
              <p key={i} className="text-lg text-neutral-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 leading-tight mb-4">
              Who may benefit
            </h2>
            {content.whoMayBenefit.map((p, i) => (
              <p key={i} className="text-lg text-neutral-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {conditions.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-2" aria-label="Related conditions">
                {conditions.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href="/conditions"
                      className={cn(
                        "inline-flex items-center min-h-[44px] rounded-full bg-neutral-100 px-4 py-2.5 text-base font-medium text-neutral-800",
                        "hover:bg-brand-blue hover:text-white transition-colors"
                      )}
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 leading-tight mb-4">
              What to expect
            </h2>
            <ol className="space-y-3">
              {content.whatToExpect.map((step, i) => (
                <li key={i} className="flex gap-4 text-lg text-neutral-700 leading-relaxed">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-base font-semibold text-white"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl bg-neutral-100 p-6 lg:p-8">
            <h2 className="text-2xl font-semibold text-neutral-900 leading-tight mb-3">
              Physician-led care in Novi
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Treatment at {SITE_NAME} is provided under the direction of{" "}
              <Link href="/about" className="text-brand-blue font-semibold hover:underline">
                {DOCTOR.name}
              </Link>
              , who is board certified in Physical Medicine and Rehabilitation and in
              Pain Medicine. Procedures are one part of a comprehensive plan that can
              include{" "}
              <Link
                href="/physical-therapy-novi-mi"
                className="text-brand-blue font-semibold hover:underline"
              >
                on-site physical therapy in Novi
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 leading-tight mb-4">
              Common questions
            </h2>
            <dl className="space-y-6">
              {content.faqs.map((f) => (
                <div key={f.q}>
                  <dt className="text-xl font-semibold text-neutral-900 mb-2">{f.q}</dt>
                  <dd className="text-lg text-neutral-700 leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="text-sm text-neutral-600 leading-relaxed border-t border-neutral-200 pt-6">
            This page is general patient education, not medical advice. Whether a
            treatment is appropriate for you is decided after an in-person evaluation.
            For emergencies, call 911.
          </p>
        </div>
      </SectionWrapper>

      {related.length > 0 && (
        <SectionWrapper amount={0} className="py-12 bg-neutral-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-neutral-900 leading-tight mb-4">
              Related services
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block rounded-xl bg-white p-4 font-semibold text-brand-blue shadow-sm hover:shadow-md transition-shadow"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href="/services" className="text-brand-blue font-semibold hover:underline">
                View all services →
              </Link>
            </p>
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-4">
            Schedule a consultation
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Start with a comprehensive physiatric assessment at our Novi office.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className={cn(primaryCta, "w-full sm:w-auto")}>
              Schedule Appointment
            </Link>
            <a href={`tel:${phoneTel}`} className={cn(outlineCta, "w-full sm:w-auto")}>
              Call {PHONE}
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
