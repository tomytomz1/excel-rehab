import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/seo";
import {
  SITE_NAME,
  SITE_ADDRESS,
  PHONE,
  FAX,
  BUSINESS_HOURS,
  BUSINESS_SCHEMA_ID,
} from "@/lib/constants";
import { DOCTOR } from "@/lib/data/doctor";
import { ACCEPTED_INSURANCE } from "@/lib/data/insurance";
import {
  CONDITION_CATEGORIES,
  getConditionBySlug,
  type Condition,
} from "@/lib/data/conditions";
import { type Location } from "@/lib/data/locations";

const primaryCta =
  "inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-3.5 text-white font-semibold hover:opacity-90 transition-opacity";
const outlineCta =
  "inline-flex items-center justify-center rounded-lg border-2 border-brand-blue px-8 py-3.5 text-brand-blue font-semibold hover:bg-brand-blue/10 transition-colors";

const APPROACH_CARDS = [
  {
    title: "Assessment",
    body: "The process begins by understanding the patient's functional concerns, limitations, and rehabilitation goals.",
  },
  {
    title: "Treatment",
    body: "An individualized care approach may be developed to reduce pain, support mobility, and improve function when clinically appropriate.",
  },
  {
    title: "Management",
    body: "Ongoing care focuses on function, independence, quality of life, and progress toward appropriate rehabilitation goals.",
  },
] as const;

export function LocalPtPage({ location }: { location: Location }) {
  const {
    slug,
    city,
    h1,
    breadcrumbLabel,
    areaServed,
    introEyebrow,
    introHeading,
    introParagraphs,
    imageAlt,
    pmrParagraph,
    serviceAreaHeading,
    serviceAreaParagraphs,
    conditionsIntro,
    conditionsEmphasis,
    accessParagraph,
    visitPlanningParagraph,
    conditionSlugs,
    localAffiliationNote,
    whyChooseIntro,
    whyChooseServingBody,
    faqs,
    siblings,
  } = location;

  const phoneTel = PHONE.replace(/\./g, "");
  const pageUrl = absoluteUrl(`/${slug}`);

  const selectedConditions = conditionSlugs
    .map((conditionSlug) => getConditionBySlug(conditionSlug))
    .filter((condition): condition is Condition => condition !== undefined);

  const whyChoose = [
    {
      title: "Physical Therapy Within a PM&R Practice",
      body: "Physical therapy is offered on-site as one of the services of a physical medicine and rehabilitation practice.",
    },
    {
      title: "Comprehensive Physiatric Assessment",
      body: "A physiatric assessment may help determine an appropriate, individualized course of action.",
    },
    {
      title: "Patient-Centered Care",
      body: "Care is individualized around each patient's functional needs, goals, and circumstances.",
    },
    {
      title: "Function-Focused Rehabilitation",
      body: "The approach emphasizes mobility, function, independence, and quality of life.",
    },
    {
      title: `Serving ${city} Patients`,
      body: whyChooseServingBody,
    },
    {
      title: "Conveniently Located in Novi",
      body: `A short drive from ${city}, the office is located on Novi Road in Novi, Michigan, with parking on-site.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: breadcrumbLabel,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Physical Therapy Near ${city}`,
        serviceType: "Physical Therapy",
        url: pageUrl,
        provider: { "@id": BUSINESS_SCHEMA_ID },
        areaServed,
      },
    ],
  };

  return (
    <div>
      <JsonLd data={jsonLd} />

      <InnerPageHero
        title={h1}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: breadcrumbLabel },
        ]}
        variant="brand-blue"
      />

      {/* A. Intro */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue mb-3">
                {introEyebrow}
              </p>
              <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-5">
                {introHeading}
              </h2>
              {introParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-lg text-neutral-700 leading-relaxed ${
                    i === introParagraphs.length - 1 ? "mb-8" : "mb-4"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className={primaryCta}>
                  Schedule an Appointment
                </Link>
                <a href={`tel:${phoneTel}`} className={outlineCta}>
                  Call {PHONE}
                </a>
              </div>
            </div>
            <div>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-neutral-200/80 shadow-sm">
                <Image
                  src="/images/knee-therapy.jpg"
                  alt={imageAlt}
                  width={900}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* B. Physician-Led PM&R */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-5">
              Physician-Led Physical Medicine and Rehabilitation
            </h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {pmrParagraph}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              The practice is led by{" "}
              <Link
                href="/about"
                className="font-semibold text-neutral-900 hover:text-brand-blue hover:underline"
              >
                {DOCTOR.name}, {DOCTOR.degrees.join(", ")}
              </Link>
              , {DOCTOR.title.charAt(0).toLowerCase() + DOCTOR.title.slice(1)}.
            </p>
            <p className="text-base font-semibold text-neutral-900 mb-3">
              Board certifications
            </p>
            <ul className="space-y-3 mb-6">
              {DOCTOR.certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 text-base text-neutral-800 leading-relaxed"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                    aria-hidden
                  />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-neutral-700 leading-relaxed mb-3">
              <span className="font-semibold text-neutral-900">
                Training and education:
              </span>{" "}
              {DOCTOR.training.map((t) => t.name).join(", ")}.
            </p>
            <p className="text-base text-neutral-700 leading-relaxed mb-3">
              <span className="font-semibold text-neutral-900">
                Hospital affiliations:
              </span>{" "}
              {DOCTOR.affiliations.join(", ")}.
            </p>
            {localAffiliationNote ? (
              <p className="text-base text-neutral-700 leading-relaxed mb-6">
                {localAffiliationNote}
              </p>
            ) : (
              <div className="mb-6" />
            )}
            <Link
              href="/about"
              className="text-brand-blue font-semibold hover:underline"
            >
              Learn more about our practice
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* C. Function-Focused Approach */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-10">
            A Function-Focused Approach to Rehabilitation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {APPROACH_CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-xl bg-white border border-neutral-200/80 shadow-sm p-6 lg:p-8 h-full"
              >
                <h3 className="text-xl font-semibold text-neutral-900 leading-tight mb-3">
                  {card.title}
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* D. Conditions */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-5">
            Conditions Evaluated and Managed at Excel PM&amp;R
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mb-4">
            {conditionsIntro}
          </p>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mb-10">
            {conditionsEmphasis}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CONDITION_CATEGORIES.map((category) => {
              const conditions = selectedConditions.filter(
                (condition) => condition.category === category
              );
              if (conditions.length === 0) return null;
              return (
                <article
                  key={category}
                  className="rounded-xl bg-white border border-neutral-200/80 shadow-sm p-6 lg:p-8 h-full"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 leading-tight mb-5">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {conditions.map((condition) => (
                      <li
                        key={condition.slug}
                        className="flex items-start gap-3 text-base text-neutral-800 leading-relaxed"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                          aria-hidden
                        />
                        <span>{condition.name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
          <p className="mt-10 text-lg text-neutral-700 leading-relaxed">
            These are among the conditions commonly seen for {city}-area
            patients. See the full list of{" "}
            <Link
              href="/conditions"
              className="text-brand-blue font-semibold hover:underline"
            >
              conditions we evaluate
            </Link>{" "}
            or review our{" "}
            <Link
              href="/services"
              className="text-brand-blue font-semibold hover:underline"
            >
              range of services
            </Link>
            .
          </p>
        </div>
      </SectionWrapper>

      {/* E. Why Choose */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-5">
            Why Choose Excel Physical Medicine and Rehab?
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mb-10">
            {whyChooseIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChoose.map((item) => (
              <article
                key={item.title}
                className="rounded-xl bg-white border border-neutral-200/80 shadow-sm p-6 lg:p-8 h-full"
              >
                <h3 className="text-lg font-semibold text-neutral-900 leading-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* F. Service Area */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-5">
              {serviceAreaHeading}
            </h2>
            {serviceAreaParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg text-neutral-700 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              <span className="font-semibold text-neutral-900">
                Getting here:
              </span>{" "}
              {accessParagraph}
            </p>
            <div className="mt-6 rounded-xl bg-white border border-neutral-200/80 shadow-sm p-6 lg:p-8">
              <h3 className="text-xl font-semibold text-neutral-900 leading-tight mb-3">
                Planning Your Visit from {city}
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                {visitPlanningParagraph}
              </p>
              <ul className="space-y-3">
                {[
                  "A first physiatric visit generally involves a review of your history and a physical assessment to help determine an appropriate plan of care.",
                  "A referral or prior authorization may be required depending on your plan — verify with your insurer before scheduling.",
                  `On-site parking is available at the Novi office; call ${PHONE} for directions or scheduling questions.`,
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-neutral-800 leading-relaxed"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg text-neutral-700 leading-relaxed mt-6">
              Patients also visit our{" "}
              <Link
                href="/physical-therapy-novi-mi"
                className="text-brand-blue font-semibold hover:underline"
              >
                physical therapy in Novi
              </Link>{" "}
              page. Nearby, we also offer{" "}
              {siblings.map((sibling, i) => (
                <span key={sibling.slug}>
                  <Link
                    href={`/${sibling.slug}`}
                    className="text-brand-blue font-semibold hover:underline"
                  >
                    {sibling.anchor}
                  </Link>
                  {i < siblings.length - 1 ? " and " : "."}
                </span>
              ))}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* G. Insurance */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-5">
            Insurance and Payor Sources
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mb-8">
            Excel Physical Medicine and Rehab accepts a range of insurance and
            payor sources. Coverage, referrals, authorizations, deductibles, and
            service eligibility may vary. Contact the office to verify current
            benefits before treatment.
          </p>
          <ul className="flex flex-wrap gap-3 mb-8">
            {ACCEPTED_INSURANCE.map((payor) => (
              <li
                key={payor}
                className="rounded-full bg-white border border-neutral-200/80 shadow-sm px-4 py-2 text-base font-medium text-neutral-800"
              >
                {payor}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/patient-resources" className={primaryCta}>
              View Accepted Insurances
            </Link>
            <a href={`tel:${phoneTel}`} className={outlineCta}>
              Call to Verify Coverage
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* H. Visit */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-8">
            Visit Excel PM&amp;R in Novi
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="rounded-xl bg-white border border-neutral-200/80 shadow-sm p-6 lg:p-8">
              <p className="text-lg font-semibold text-neutral-900 mb-3">
                {SITE_NAME}
              </p>
              <address className="not-italic text-neutral-700 space-y-1 mb-4">
                <p>{SITE_ADDRESS.street}</p>
                <p>Novi, MI 48377</p>
              </address>
              <p className="mb-1">
                <a
                  href={`tel:${phoneTel}`}
                  className="text-brand-blue font-semibold hover:underline"
                >
                  {PHONE}
                </a>
              </p>
              <p className="text-neutral-600 mb-1">Fax: {FAX}</p>
              <p className="text-neutral-600 mb-6">
                Hours: {BUSINESS_HOURS.fullLabel}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className={primaryCta}>
                  Schedule an Appointment
                </Link>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=31190+Novi+Road+Novi+MI+48377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={outlineCta}
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-neutral-200/80 shadow-sm aspect-[4/3] min-h-[280px]">
              <iframe
                title="Excel Physical Medicine and Rehab location"
                src="https://maps.google.com/maps?q=31190+Novi+Road,+Novi,+MI+48377&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full h-full min-h-[280px]"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* I. FAQ */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="group rounded-xl bg-white border border-neutral-200/80 shadow-sm"
              >
                <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 px-6 py-4 outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-xl [&::-webkit-details-marker]:hidden">
                  <span className="text-lg font-semibold text-neutral-900 leading-snug">
                    {q}
                  </span>
                  <span
                    className="shrink-0 text-brand-blue transition-transform group-open:rotate-45 text-2xl leading-none"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 -mt-1">
                  <p className="text-base text-neutral-700 leading-relaxed">
                    {a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* J. Final CTA */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-bold leading-tight mb-4">
            Ready to Discuss Your Rehabilitation Needs?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Excel Physical Medicine and Rehab to ask about physical
            therapy, scheduling, and insurance verification. Care is provided at
            the Novi office, a short drive from {city}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className={primaryCta}>
              Schedule an Appointment
            </Link>
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3.5 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
