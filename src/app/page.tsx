import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ValueProps } from "@/components/home/ValueProps";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { DoctorPreview } from "@/components/home/DoctorPreview";
import { ConditionsCloud } from "@/components/home/ConditionsCloud";
import { InsuranceStrip } from "@/components/home/InsuranceStrip";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";
import { cn } from "@/lib/utils";

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
