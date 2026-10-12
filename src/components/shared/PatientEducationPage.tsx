import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { JsonLd } from "@/components/seo/JsonLd";
import { PHONE, SITE_NAME } from "@/lib/constants";
import { DOCTOR } from "@/lib/data/doctor";
import type { ServiceContent } from "@/lib/data/service-content";
import { cn } from "@/lib/utils";

type LinkItem = { label: string; href: string };

type Props = {
  content: ServiceContent;
  breadcrumbs: { label: string; href?: string }[];
  jsonLd: Record<string, unknown>;
  /** Section headings; defaults suit a procedure page. */
  aboutHeading: string;
  benefitHeading?: string;
  expectHeading?: string;
  /** Show an early consultation option on high-intent treatment pages. */
  showEarlyConsultationCta?: boolean;
  /** Pill links shown under the "who may benefit" section. */
  chips?: { label: string; items: LinkItem[] };
  related?: { heading: string; items: LinkItem[]; allHref: string; allLabel: string };
};

const primaryCta =
  "inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-3.5 text-neutral-900 font-semibold hover:opacity-90 transition-opacity";
const outlineCta =
  "inline-flex items-center justify-center rounded-lg border-2 border-brand-blue px-8 py-3.5 text-brand-blue font-semibold hover:bg-brand-blue/10 transition-colors";

/** Shared layout for service, condition and topic pages (general patient education). */
export function PatientEducationPage({
  content,
  breadcrumbs,
  jsonLd,
  aboutHeading,
  benefitHeading = "Who may benefit",
  expectHeading = "What to expect",
  showEarlyConsultationCta = false,
  chips,
  related,
}: Props) {
  const phoneTel = PHONE.replace(/\./g, "");

  return (
    <div>
      <JsonLd data={jsonLd} />
      <InnerPageHero title={content.h1} breadcrumbs={breadcrumbs} variant="brand-blue" />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <section>
            <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-4">
              {aboutHeading}
            </h2>
            {content.overview.map((p, i) => (
              <p key={i} className="text-lg text-neutral-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </section>

          {showEarlyConsultationCta && (
            <aside className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 sm:p-6" aria-label="Request a consultation">
              <p className="text-lg font-semibold text-neutral-900 mb-3">
                Questions about evaluation or treatment at our Novi office?
              </p>
              <p className="text-base text-neutral-700 leading-relaxed mb-4">
                A consultation helps determine which options, if any, are appropriate for your individual needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className={cn(primaryCta, "w-full sm:w-auto")}>
                  Request a consultation
                </Link>
                <a href={`tel:${phoneTel}`} className={cn(outlineCta, "w-full sm:w-auto")}>
                  Call {PHONE}
                </a>
              </div>
            </aside>
          )}

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 leading-tight mb-4">
              {benefitHeading}
            </h2>
            {content.whoMayBenefit.map((p, i) => (
              <p key={i} className="text-lg text-neutral-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {chips && chips.items.length > 0 && (
              <ul className="flex flex-wrap gap-2 mt-2" aria-label={chips.label}>
                {chips.items.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className={cn(
                        "inline-flex items-center min-h-[44px] rounded-full bg-neutral-100 px-4 py-2.5 text-base font-medium text-neutral-800",
                        "hover:bg-brand-blue hover:text-white transition-colors"
                      )}
                    >
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 leading-tight mb-4">
              {expectHeading}
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
              Pain Medicine. Treatment plans can include{" "}
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

      {related && related.items.length > 0 && (
        <SectionWrapper amount={0} className="py-12 bg-neutral-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-neutral-900 leading-tight mb-4">
              {related.heading}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.items.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="block rounded-xl bg-white p-4 font-semibold text-brand-blue shadow-sm hover:shadow-md transition-shadow"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6">
              <Link href={related.allHref} className="text-brand-blue font-semibold hover:underline">
                {related.allLabel} →
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
