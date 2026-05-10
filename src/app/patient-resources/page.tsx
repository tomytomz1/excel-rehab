import type { Metadata } from "next";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ACCEPTED_INSURANCE } from "@/lib/data/insurance";
import { PHONE, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Accepted Insurances | ${SITE_NAME}`,
  description:
    "Accepted payor sources for Excel Physical Medicine and Rehab in Novi, MI. Call 248.624.5176 to verify coverage.",
};

export default function PatientResourcesPage() {
  return (
    <div>
      <InnerPageHero
        title="Accepted Insurances"
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
        </div>
      </SectionWrapper>
    </div>
  );
}
