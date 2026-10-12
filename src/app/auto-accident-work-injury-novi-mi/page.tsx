import { PatientEducationPage } from "@/components/shared/PatientEducationPage";
import { ACCIDENT_INJURY } from "@/lib/data/topic-content";
import { conditionLinks } from "@/lib/data/condition-content";
import { pageMetadata } from "@/lib/seo";
import { topicPageJsonLd } from "@/lib/topic-page";

const PATH = "/auto-accident-work-injury-novi-mi";

export const metadata = pageMetadata({
  path: PATH,
  title: ACCIDENT_INJURY.title,
  description: ACCIDENT_INJURY.description,
});

const CONDITIONS = [
  "whiplash-injuries-mva",
  "slip-fall-injuries",
  "acute-chronic-neck-low-back-pain",
  "herniated-discs",
  "muscle-strains-tears",
  "multiple-orthopedic-fractures",
  "traumatic-brain-injuries",
] as const;

export default function AccidentInjuryPage() {
  return (
    <PatientEducationPage
      content={ACCIDENT_INJURY}
      jsonLd={topicPageJsonLd(PATH, "Auto Accident & Work Injuries", ACCIDENT_INJURY)}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Auto Accident & Work Injuries" }]}
      aboutHeading="Care after a car accident or work injury"
      showEarlyConsultationCta
      benefitHeading="Injuries commonly evaluated"
      expectHeading="Getting started"
      chips={{ label: "Conditions", items: conditionLinks(CONDITIONS) }}
      related={{
        heading: "Related care",
        items: [
          { label: "On-Site Physical Therapy", href: "/physical-therapy-novi-mi" },
          { label: "Pain Management", href: "/pain-management-novi-mi" },
          { label: "Sciatica and Radiating Nerve Pain", href: "/conditions/cervical-lumbar-radiculopathy" },
          { label: "Trigger Point Injections", href: "/services/trigger-point-injections" },
          { label: "Accepted Insurance & Patient Resources", href: "/patient-resources" },
        ],
        allHref: "/services",
        allLabel: "View all services",
      }}
    />
  );
}
