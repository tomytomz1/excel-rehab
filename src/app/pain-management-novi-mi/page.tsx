import { PatientEducationPage } from "@/components/shared/PatientEducationPage";
import { PAIN_MANAGEMENT } from "@/lib/data/topic-content";
import { conditionLinks } from "@/lib/data/condition-content";
import { SERVICES } from "@/lib/data/services";
import { pageMetadata } from "@/lib/seo";
import { topicPageJsonLd } from "@/lib/topic-page";

const PATH = "/pain-management-novi-mi";

export const metadata = pageMetadata({
  path: PATH,
  title: PAIN_MANAGEMENT.title,
  description: PAIN_MANAGEMENT.description,
});

const CONDITIONS = [
  "acute-chronic-neck-low-back-pain",
  "herniated-discs",
  "cervical-lumbar-radiculopathy",
  "neck-lumbar-degenerative-joint-disease",
  "joint-arthritis",
  "whiplash-injuries-mva",
  "sports-injuries",
] as const;

/** Keep the most relevant paths visible; the full catalog remains linked below. */
const FOCUS_SERVICE_SLUGS = new Set([
  "on-site-physical-therapy",
  "epidural-steroid-injections",
  "trigger-point-injections",
  "facet-joint-injections",
  "sacroiliac-joint-injections",
]);
const TREATMENTS = SERVICES.filter((s) => FOCUS_SERVICE_SLUGS.has(s.slug)).flatMap(
  (s) => (s.href ? [{ label: s.name, href: s.href }] : [])
);

export default function PainManagementPage() {
  return (
    <PatientEducationPage
      content={PAIN_MANAGEMENT}
      jsonLd={topicPageJsonLd(PATH, "Pain Management", PAIN_MANAGEMENT)}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pain Management" }]}
      aboutHeading="Physician-led, non-operative pain care"
      showEarlyConsultationCta
      benefitHeading="Conditions commonly evaluated"
      expectHeading="How it works"
      chips={{ label: "Conditions", items: conditionLinks(CONDITIONS) }}
      related={{
        heading: "Treatment options",
        items: TREATMENTS,
        allHref: "/services",
        allLabel: "View all services",
      }}
    />
  );
}
