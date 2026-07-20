import Image from "next/image";
import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
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
  getConditionsByCategory,
} from "@/lib/data/conditions";
import { LOCATIONS } from "@/lib/data/locations";

export const metadata = pageMetadata({
  path: "/physical-therapy-novi-mi",
  title: "Physical Therapy in Novi, MI | Excel PM&R",
  description:
    "On-site physical therapy in Novi, Michigan at Excel Physical Medicine and Rehab. Call 248.624.5176 to ask about scheduling and insurance.",
  image: "/images/knee-therapy.jpg",
  imageAlt: "Physical therapist assisting a patient with knee mobility",
});

const FAQS = [
  {
    q: "Does Excel PM&R offer physical therapy at its Novi office?",
    a: "Yes. Excel Physical Medicine and Rehab lists on-site physical therapy among the services available at its Novi location.",
  },
  {
    q: "What conditions does Excel PM&R evaluate?",
    a: "Excel PM&R evaluates a range of spine, joint, musculoskeletal, neurological, and injury-related conditions. Physical therapy may be included in an individualized plan when clinically appropriate.",
  },
  {
    q: "Does Excel PM&R accept insurance?",
    a: "Excel PM&R lists auto, workers compensation, Medicare, Blue Cross, HAP, United, Priority, and other commercial insurance payor sources. Patients should contact the office to verify current coverage and authorization requirements.",
  },
  {
    q: "Where is Excel Physical Medicine and Rehab located?",
    a: "The office is located at 31190 Novi Road, Novi, Michigan 48377.",
  },
  {
    q: "How can I request an appointment?",
    a: "Call 248.624.5176 or use the website's scheduling inquiry form. Do not submit symptoms, diagnoses, or other sensitive medical information through the form.",
  },
] as const;

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

const WHY_CHOOSE = [
  {
    title: "On-Site Physical Therapy",
    body: "Physical therapy is available on-site at the Novi office as one of the services offered by the practice.",
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
    title: "PM&R Practice",
    body: "Excel is a physical medicine and rehabilitation practice that also offers on-site physical therapy.",
  },
  {
    title: "Convenient Novi Location",
    body: "The office is located on Novi Road in Novi, Michigan, with parking on-site.",
  },
] as const;

export default function PhysicalTherapyNoviPage() {
  const phoneTel = PHONE.replace(/\./g, "");
  const pageUrl = absoluteUrl("/physical-therapy-novi-mi");

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
            name: "Physical Therapy in Novi, MI",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "On-Site Physical Therapy",
        serviceType: "Physical Therapy",
        url: pageUrl,
        provider: { "@id": BUSINESS_SCHEMA_ID },
        areaServed: "Novi, Michigan",
      },
    ],
  };

  const primaryCta =
    "inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-3.5 text-white font-semibold hover:opacity-90 transition-opacity";
  const outlineCta =
    "inline-flex items-center justify-center rounded-lg border-2 border-brand-blue px-8 py-3.5 text-brand-blue font-semibold hover:bg-brand-blue/10 transition-colors";

  return (
    <div>
      <JsonLd data={jsonLd} />

      <InnerPageHero
        title="Physical Therapy in Novi, Michigan"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Physical Therapy in Novi, MI" },
        ]}
        variant="brand-blue"
      />

      {/* A. Intro */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue mb-3">
                On-Site Physical Therapy
              </p>
              <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-5">
                Physical Therapy Within a PM&amp;R Practice
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Excel Physical Medicine and Rehab provides on-site physical
                therapy in Novi, Michigan as part of a patient-centered,
                function-focused approach to rehabilitation. Care is
                individualized to support mobility, function, independence, and
                quality of life.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                A comprehensive physiatric assessment may help determine an
                appropriate course of action. Physical therapy may be included
                when clinically appropriate based on the individual&apos;s
                condition, functional needs, and treatment goals.
              </p>
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
              {/* TODO: Replace this representative image with an approved original photo of the Excel PM&R physical therapy facility when available. */}
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-neutral-200/80 shadow-sm">
                <Image
                  src="/images/knee-therapy.jpg"
                  alt="Physical therapist assisting a patient with knee mobility"
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
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Excel is a physical medicine and rehabilitation (PM&amp;R) practice
              that also offers on-site physical therapy in Novi, Michigan.
              Physiatry focuses on the non-operative evaluation and management of
              a wide range of conditions that can affect movement and function.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              The practice is led by{" "}
              <span className="font-semibold text-neutral-900">
                {DOCTOR.name}, {DOCTOR.degrees.join(", ")}
              </span>
              .
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
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mb-10">
            Excel PM&amp;R evaluates and manages a range of spine, joint,
            musculoskeletal, neurological, and injury-related conditions.
            Physical therapy may be included in an individualized treatment plan
            when clinically appropriate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CONDITION_CATEGORIES.map((category) => {
              const conditions = getConditionsByCategory(category);
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
            Explore the full list of{" "}
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
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-10">
            Why Choose Excel Physical Medicine and Rehab?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WHY_CHOOSE.map((item) => (
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

      {/* F. Insurance */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
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

      {/* G. Visit */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
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

      {/* H. FAQ */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl space-y-4">
            {FAQS.map(({ q, a }) => (
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

      {/* H2. Areas We Serve */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-5">
            Areas We Serve
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl mb-8">
            The office is located in Novi, Michigan and welcomes patients
            traveling a short drive from nearby western Oakland County
            communities. Learn more about {" "}
            {LOCATIONS.map((location, i) => (
              <span key={location.slug}>
                <Link
                  href={`/${location.slug}`}
                  className="text-brand-blue font-semibold hover:underline"
                >
                  {location.noviLinkAnchor}
                </Link>
                {i < LOCATIONS.length - 2
                  ? ", "
                  : i === LOCATIONS.length - 2
                    ? ", and "
                    : "."}
              </span>
            ))}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/${location.slug}`}
                className="flex items-center justify-between gap-3 rounded-xl bg-white border border-neutral-200/80 shadow-sm px-5 py-4 text-base font-semibold text-neutral-900 hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <span>{location.city}</span>
                <span className="text-brand-blue" aria-hidden>
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* I. Final CTA */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-bold leading-tight mb-4">
            Ready to Discuss Your Rehabilitation Needs?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact Excel Physical Medicine and Rehab to ask about on-site
            physical therapy, scheduling, and insurance verification at the Novi
            office.
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
