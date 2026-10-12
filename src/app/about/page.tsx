import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Building2, ArrowRight } from "lucide-react";
import { DOCTOR } from "@/lib/data/doctor";
import { TAGLINES, GOALS } from "@/lib/constants";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  path: "/about",
  title: "Dr. Augustus (Peter) Evangelista, MD | Physiatrist, Novi MI",
  description:
    "Dr. Augustus (Peter) Evangelista is a physiatrist board certified in PM&R and Pain Medicine, and Medical Director of Excel PM&R in Novi, MI.",
});

const QUOTE =
  "We are committed to providing the highest quality care to help patients achieve their functional goals. At Excel PM&R, we put the needs of the patient first.";

// Factual education history from Corewell's physician directory, checked October 12, 2026.
const EDUCATION_HISTORY = [
  { year: "2016", role: "Pain medicine fellowship", institution: "Beth Israel Deaconess Medical Center" },
  { year: "2015", role: "Physical medicine and rehabilitation residency", institution: "Mayo Clinic School of Graduate Medical Education" },
  { year: "2012", role: "Internal medicine internship", institution: "Saint Elizabeth's Medical Center" },
  { year: "2011", role: "Doctor of Medicine", institution: "Tufts University School of Medicine" },
] as const;

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
        title="About Dr. Evangelista, Physiatrist in Novi, MI"
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

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 leading-tight mb-5">
              Medical Education and Specialty Training
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Dr. Evangelista&apos;s medical training includes a medical degree
              from Tufts, residency training in physical medicine and
              rehabilitation at Mayo Clinic, and a fellowship in pain medicine
              at Beth Israel Deaconess Medical Center.
            </p>
            <dl className="space-y-5">
              {EDUCATION_HISTORY.map(({ year, role, institution }) => (
                <div key={role} className="border-l-2 border-brand-blue pl-5">
                  <dt className="font-semibold text-neutral-900">{role}</dt>
                  <dd className="text-neutral-700 leading-relaxed">{institution} · {year}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 text-sm text-neutral-600 leading-relaxed">
              <p className="font-semibold text-neutral-900 mb-2">
                Independent physician directories
              </p>
              <p className="mb-2">
                Physician training, board certifications and the Novi practice address
                can also be checked with these healthcare systems:
              </p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {DOCTOR.publicDirectoryProfiles.map((profile) => (
                  <li key={profile.url}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue font-semibold hover:underline"
                    >
                      {profile.label} physician profile
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-neutral-700 leading-relaxed">
              Learn about{" "}
              <Link href="/pain-management-novi-mi" className="text-brand-blue font-semibold hover:underline">
                physician-led pain management in Novi
              </Link>
              {" "}and{" "}
              <Link href="/physical-therapy-novi-mi" className="text-brand-blue font-semibold hover:underline">
                on-site physical therapy
              </Link>
              {" "}at Excel Physical Medicine and Rehab.
            </p>
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

    </div>
  );
}
