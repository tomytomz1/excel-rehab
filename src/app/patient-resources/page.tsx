import Link from "next/link";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ACCEPTED_INSURANCE } from "@/lib/data/insurance";
import { PHONE, SITE_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  path: "/patient-resources",
  title: `Accepted Insurances | ${SITE_NAME}`,
  description:
    "Accepted payor sources for Excel Physical Medicine and Rehab in Novi, MI. Call 248.624.5176 to verify coverage.",
});

export default function PatientResourcesPage() {
  return (
    <div>
      <InnerPageHero
        title="Accepted Insurance at Excel PM&R in Novi, MI"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Accepted Insurances" },
        ]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-4 leading-tight">
            Accepted Payor Sources
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {ACCEPTED_INSURANCE.map((payor) => (
              <span
                key={payor}
                className={cn(
                  "inline-flex items-center min-h-[44px] rounded-full bg-neutral-100 px-4 py-2.5",
                  "text-base font-medium text-neutral-800"
                )}
              >
                {payor}
              </span>
            ))}
          </div>
          <p className="text-neutral-600 leading-relaxed">
            Not sure if we accept your insurance? Give us a call at{" "}
            <a
              href={`tel:${PHONE.replace(/\./g, "")}`}
              className="text-brand-blue font-semibold hover:underline"
            >
              {PHONE}
            </a>
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Injured in a car accident or at work? Learn about{" "}
            <Link
              href="/auto-accident-work-injury-novi-mi"
              className="text-brand-blue font-semibold hover:underline"
            >
              auto accident and work injury care in Novi
            </Link>
            .
          </p>
          <div className="mt-10 max-w-3xl border-t border-neutral-200 pt-8">
            <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-4 leading-tight">
              Questions to Ask Before Your Appointment
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Coverage depends on your specific insurance plan and the service
              you need. Before scheduling, call the office to confirm your
              benefits and ask about any referral or authorization requirements.
              An insurer appearing above does not guarantee coverage for every
              plan or procedure.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-neutral-700 leading-relaxed">
              <li>Does the practice accept my specific plan for the service I am requesting?</li>
              <li>Do I need a referral, prior authorization, or a physician assessment?</li>
              <li>Which identification, insurance information, records, or imaging should I bring?</li>
              <li>What should I ask my insurer about deductibles, copayments, and other out-of-pocket costs?</li>
              <li>How do I arrange the appropriate appointment and confirm its time?</li>
            </ul>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Call{" "}
              <a href={`tel:${PHONE.replace(/\./g, "")}`} className="text-brand-blue font-semibold hover:underline">{PHONE}</a>
              {" "}or use the{" "}
              <Link href="/contact" className="text-brand-blue font-semibold hover:underline">scheduling inquiry form</Link>
              . The form is for scheduling questions; please do not include
              symptoms, diagnoses, or other sensitive medical details.
            </p>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Explore{" "}
              <Link href="/physical-therapy-novi-mi" className="text-brand-blue font-semibold hover:underline">on-site physical therapy in Novi</Link>
              {" "}or{" "}
              <Link href="/pain-management-novi-mi" className="text-brand-blue font-semibold hover:underline">pain management</Link>
              {" "}before discussing your appointment with the office.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
