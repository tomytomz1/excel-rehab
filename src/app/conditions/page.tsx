import type { Metadata } from "next";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { ConditionsHubClient } from "./ConditionsHubClient";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Conditions We Treat | ${SITE_NAME}`,
  description:
    "We treat neck and back pain, herniated discs, radiculopathy, arthritis, sports injuries, whiplash, spasticity, and more. PM&R in Novi, MI.",
};

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
