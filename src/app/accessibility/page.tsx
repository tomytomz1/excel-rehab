import type { Metadata } from "next";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { LegalProse } from "@/components/shared/LegalProse";
import { PHONE, SITE_ADDRESS, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Accessibility Statement | ${SITE_NAME}`,
  description: `Accessibility commitment and contact information for ${SITE_NAME}.`,
};

const phoneTel = PHONE.replace(/\./g, "");

export default function AccessibilityPage() {
  return (
    <div>
      <InnerPageHero
        title="Accessibility Statement"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Accessibility" },
        ]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <LegalProse>
          <p className="text-sm text-neutral-500 italic">
            Last updated: May 2026.
          </p>

          <h2>Our commitment</h2>
          <p>
            {SITE_NAME} is committed to making our website reasonably accessible
            to people with disabilities. We aim to conform to the Web Content
            Accessibility Guidelines (WCAG) 2.1 Level AA where practicable.
          </p>

          <h2>Measures we take</h2>
          <ul>
            <li>Semantic HTML and keyboard-navigable navigation</li>
            <li>Visible focus indicators on interactive elements</li>
            <li>Text alternatives for meaningful images</li>
            <li>Form labels and error messaging on the contact form</li>
            <li>Support for reduced-motion preferences in animations</li>
            <li>A skip-to-content link on every page</li>
          </ul>

          <h2>Known limitations</h2>
          <p>
            Some third-party content (such as embedded maps) may not fully meet
            accessibility standards. We continue to review and improve the site.
          </p>

          <h2>Feedback and accommodations</h2>
          <p>
            If you have difficulty using this website or need information in an
            alternative format, please contact us. We will work with you to
            provide the information or service through another channel.
          </p>
          <p>
            {SITE_NAME}
            <br />
            {SITE_ADDRESS.full}
            <br />
            Phone:{" "}
            <a href={`tel:${phoneTel}`}>{PHONE}</a>
          </p>
        </LegalProse>
      </SectionWrapper>
    </div>
  );
}
