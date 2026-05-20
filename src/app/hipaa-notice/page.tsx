import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { LegalProse } from "@/components/shared/LegalProse";
import { PHONE, SITE_ADDRESS, SITE_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/hipaa-notice",
  title: `HIPAA Notice | ${SITE_NAME}`,
  description: `Notice regarding use of this website and protected health information for ${SITE_NAME}.`,
});

const phoneTel = PHONE.replace(/\./g, "");

export default function HipaaNoticePage() {
  return (
    <div>
      <InnerPageHero
        title="HIPAA Notice"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "HIPAA Notice" }]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <LegalProse>
          <p className="text-sm text-neutral-500 italic">
            Last updated: May 2026. This notice describes how this website relates
            to protected health information (PHI). Your attorney may review and
            customize this text before production use.
          </p>

          <h2>This website is not for medical records or PHI</h2>
          <p>
            The {SITE_NAME} website is intended for general information and
            scheduling inquiries. It is{" "}
            <strong>not</strong> a patient portal and is{" "}
            <strong>not</strong> designed for you to send protected health
            information electronically.
          </p>

          <h2>Contact form</h2>
          <p>
            Our contact form is for scheduling and general questions only. Please
            do not include symptoms, test results, diagnoses, insurance member
            IDs, or other clinical details in your message.
          </p>
          <p>
            If you need to share medical information with our office, please call{" "}
            <a href={`tel:${phoneTel}`}>{PHONE}</a> or use established in-person
            or clinic-approved channels.
          </p>

          <h2>Medical records and privacy practices</h2>
          <p>
            Notice of Privacy Practices for treatment, payment, and health care
            operations is provided by our practice at the time of care. For
            questions about your medical records or HIPAA rights, contact our
            office:
          </p>
          <p>
            {SITE_NAME}
            <br />
            {SITE_ADDRESS.full}
            <br />
            Phone:{" "}
            <a href={`tel:${phoneTel}`}>{PHONE}</a>
          </p>

          <h2>Emergencies</h2>
          <p>
            If you are experiencing a medical emergency, call{" "}
            <strong>911</strong> or go to the nearest emergency department. Do not
            use this website or contact form for urgent medical situations.
          </p>
        </LegalProse>
      </SectionWrapper>
    </div>
  );
}
