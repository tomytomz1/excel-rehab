import type { Metadata } from "next";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ACCEPTED_INSURANCE } from "@/lib/data/insurance";
import { PHONE, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Patient Resources | ${SITE_NAME}`,
  description:
    "Accepted insurance, new patient information, and FAQs. Excel Physical Medicine and Rehab in Novi, MI. Call 248.624.5176.",
};

const PMR_VERIFIED_1 =
  "Physical Medicine and Rehabilitation (PM&R), also known as physiatry, focuses on the prevention, diagnosis, and non-operative management for patients with disorders associated with disability.";

const PMR_VERIFIED_2 =
  "Excel PM&R diagnoses and treats a range of conditions including musculoskeletal, neurological, and chronic illnesses, employing a variety of treatments and therapies.";

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "[PLACEHOLDER] What should I bring to my first appointment?",
    a: "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    q: "[PLACEHOLDER] How do I request a referral?",
    a: "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "[PLACEHOLDER] What insurance do you accept?",
    a: "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. We accept many major plans; please call to verify.",
  },
  {
    q: "[PLACEHOLDER] How long does a typical visit take?",
    a: "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "[PLACEHOLDER] Can I get my imaging results before my visit?",
    a: "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    q: "[PLACEHOLDER] Do you offer telehealth appointments?",
    a: "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function PatientResourcesPage() {
  return (
    <div>
      <InnerPageHero
        title="Patient Resources"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Patient Resources" },
        ]}
        variant="brand-blue"
      />

      {/* Accepted Insurance */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-4 leading-tight">
            Accepted Insurance
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

      {/* New Patient Information */}
      <SectionWrapper amount={0} className="py-12 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-4 leading-tight">
            New Patient Information
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-900 text-base font-medium">
              [PLACEHOLDER]
            </span>{" "}
            New patient forms and information coming soon. Please call us at{" "}
            <a
              href={`tel:${PHONE.replace(/\./g, "")}`}
              className="text-brand-blue font-semibold hover:underline"
            >
              {PHONE}
            </a>{" "}
            to prepare for your first visit.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQs */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-8 leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="max-w-[75ch]">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          </div>
        </div>
      </SectionWrapper>

      {/* What is PM&R? */}
      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[1.65rem] sm:text-[2.35rem] font-semibold text-neutral-900 mb-6 leading-tight">
            What is PM&R?
          </h2>
          <div className="max-w-[75ch]">
          <p className="text-neutral-700 mb-4 leading-relaxed">{PMR_VERIFIED_1}</p>
          <p className="text-neutral-700 mb-4 leading-relaxed">{PMR_VERIFIED_2}</p>
          <p className="text-neutral-700 leading-relaxed">
            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-900 text-base font-medium">
              [PLACEHOLDER]
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Additional educational content to
            be provided by client.
          </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
