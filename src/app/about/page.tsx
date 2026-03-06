import type { Metadata } from "next";
import Image from "next/image";
import { Fragment } from "react";
import { Building2, ArrowRight } from "lucide-react";
import { DOCTOR } from "@/lib/data/doctor";
import { SITE_NAME, TAGLINES, GOALS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `About Dr. Evangelista | ${SITE_NAME}`,
  description: `Meet Dr. Augustus (Peter) Evangelista, board certified in Physical Medicine and Rehabilitation and Pain Medicine. Medical Director of Excel PM&R in Novi, MI. ${TAGLINES.primary}`,
};

const QUOTE =
  "We are committed to providing the highest quality care to help patients achieve their functional goals. At Excel PM&R, we put the needs of the patient first.";

const APPROACH_STEPS = [
  {
    title: "Assessment",
    goals: [GOALS[0]], // Maximize Function
  },
  {
    title: "Treatment",
    goals: [GOALS[1], GOALS[2]], // Reduce or Eliminate Pain, Foster Independence
  },
  {
    title: "Management",
    goals: [GOALS[3]], // Improve Quality of Life
  },
] as const;

export default function AboutPage() {
  return (
    <div>
      <InnerPageHero
        title={`About ${SITE_NAME}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="pt-8 lg:pt-10 pb-12 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <div className="relative aspect-square max-w-xl sm:max-w-2xl mx-auto lg:mx-0 w-full min-h-[280px] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/images/Dr%20Augustus%20P%20Evangelista.jpg"
                alt={`${DOCTOR.name}, ${DOCTOR.degrees.join(", ")}`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 672px, 576px"
                priority
              />
            </div>
            <div className="space-y-4 max-w-[75ch]">
              <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight">
                {DOCTOR.name}, {DOCTOR.degrees.join(", ")}
              </h2>
              <p className="text-neutral-700 leading-relaxed">{DOCTOR.title}</p>
              <ul className="space-y-1 text-neutral-700 leading-relaxed">
                {DOCTOR.certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
              <div className="pt-2">
                <p className="text-base font-medium text-neutral-600 mb-2">
                  Training &amp; Education
                </p>
                <div
                  className="grid grid-cols-2 gap-4 max-w-md"
                  aria-label="Training and education"
                >
                  {DOCTOR.training.map((institution) => (
                    <div
                      key={institution.name}
                      className={cn(
                        "flex flex-col items-center gap-2 rounded-xl bg-neutral-100 px-4 py-3",
                        "text-sm font-medium text-neutral-700"
                      )}
                    >
                      <div className="relative w-14 h-14 shrink-0">
                        <Image
                          src={institution.logo}
                          alt=""
                          fill
                          className="object-contain"
                          sizes="56px"
                        />
                      </div>
                      <span className="text-center">{institution.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-neutral-700 pt-2 leading-relaxed">{QUOTE}</p>
              <div className="pt-4">
                <p className="text-base font-medium text-neutral-600 mb-2">
                  Hospital affiliations
                </p>
                <ul
                  className="flex flex-wrap gap-x-4 gap-y-1 text-base text-neutral-700"
                  aria-label="Hospital affiliations"
                >
                  {DOCTOR.affiliations.map((aff) => (
                    <li
                      key={aff}
                      className="inline-flex items-center gap-1.5"
                    >
                      <Building2
                        className="h-4 w-4 text-brand-blue shrink-0"
                        aria-hidden
                      />
                      <span>{aff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Approach: Assessment → Treatment → Management */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 text-center mb-4 leading-tight">
            Our Approach
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            {TAGLINES.approach}
          </p>
          <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-0">
            {APPROACH_STEPS.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && (
                  <div
                    className="hidden md:flex shrink-0 w-8 items-center justify-center text-neutral-300"
                    aria-hidden
                  >
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
                <div className="flex-1 rounded-xl bg-white p-6 shadow-sm border border-neutral-200/80 md:min-w-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white",
                        "bg-brand-blue"
                      )}
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-2xl font-semibold text-neutral-900 leading-tight">
                      {step.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5 text-neutral-700 text-base leading-relaxed">
                    {step.goals.map((goal) => (
                      <li key={goal} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Supporting visuals: 3 stock photos */}
      <SectionWrapper amount={0} className="py-10 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/images/shoulder-exam.jpg"
                alt="Comprehensive shoulder examination"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/images/caregiver-patient.jpg"
                alt="Patient-centered care"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/images/knee-therapy.jpg"
                alt="Knee therapy and rehabilitation"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Story — [PLACEHOLDER] */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-6 leading-tight">
            Our Story
          </h2>
          <div className="max-w-[75ch]">
          <p className="text-neutral-700 mb-4 leading-relaxed">
            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-900 text-base font-medium">
              [PLACEHOLDER — Awaiting clinic history from client]
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
