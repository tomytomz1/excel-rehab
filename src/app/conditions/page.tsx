import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { ConditionsHubClient } from "./ConditionsHubClient";
import { SITE_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/conditions",
  title: `Conditions We Treat | ${SITE_NAME}`,
  description:
    "We treat neck and back pain, herniated discs, radiculopathy, arthritis, sports injuries, whiplash, spasticity, and more. PM&R in Novi, MI.",
});

export default function ConditionsPage() {
  return (
    <div>
      <InnerPageHero
        title="Conditions We Treat"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Conditions" }]}
        variant="brand-blue"
      />
      <ConditionsHubClient />
    </div>
  );
}
