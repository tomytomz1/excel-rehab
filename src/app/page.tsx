import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ValueProps } from "@/components/home/ValueProps";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { DoctorPreview } from "@/components/home/DoctorPreview";
import { ConditionsCloud } from "@/components/home/ConditionsCloud";
import { InsuranceStrip } from "@/components/home/InsuranceStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { SITE_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: `${SITE_NAME} | PM&R Clinic in Novi, MI`,
  description:
    "Board certified physiatrist in Novi, Michigan. Non-operative pain management, physical therapy, injections, and rehabilitation. Call 248.624.5176.",
});

export default function Home() {
  return (
    <>
      {/* Hero sits behind transparent Navbar — pull up by main padding (match navbar height: 80px desktop, 64px mobile) */}
      <div className={cn("-mt-16 lg:-mt-[80px] overflow-x-clip min-w-0 w-full")}>
        <Hero />
      </div>
      <TrustBar />
      <ValueProps />
      <ServicesOverview />
      <DoctorPreview />
      <ConditionsCloud />
      <InsuranceStrip />
      <Testimonials />
      <CTABanner />
    </>
  );
}
