import type { Metadata } from "next";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { LegalProse } from "@/components/shared/LegalProse";
import { PHONE, SITE_ADDRESS, SITE_NAME, WEBSITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Privacy policy for ${SITE_NAME}. How we collect and use information submitted through our website.`,
};

const phoneTel = PHONE.replace(/\./g, "");

export default function PrivacyPage() {
  return (
    <div>
      <InnerPageHero
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <LegalProse>
          <p className="text-sm text-neutral-500 italic">
            Last updated: May 2026. This policy describes how {SITE_NAME} handles
            information collected through {WEBSITE_URL}. Your attorney may
            review and customize this text before production use.
          </p>

          <h2>Overview</h2>
          <p>
            {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates
            a public informational website. We do not sell personal information.
            This policy explains what we collect, how we use it, and your choices.
          </p>

          <h2>Information we collect</h2>
          <p>When you use our contact form, we may collect:</p>
          <ul>
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Preferred contact time and reason for visit</li>
            <li>Optional message text you choose to submit</li>
          </ul>
          <p>
            We do not ask you to submit protected health information (PHI) through
            this website. Please do not include symptoms, diagnoses, or other
            medical details in the contact form.
          </p>

          <h2>How we use information</h2>
          <p>We use contact form submissions to:</p>
          <ul>
            <li>Respond to scheduling and general practice inquiries</li>
            <li>Route your message to appropriate clinic staff</li>
          </ul>

          <h2>How information is transmitted</h2>
          <p>
            Form submissions are sent by email through our email delivery
            provider (Resend) to authorized clinic staff. Messages are transmitted
            over encrypted connections (HTTPS). Email is not a secure method for
            transmitting sensitive medical information.
          </p>

          <h2>Retention</h2>
          <p>
            We retain contact inquiries only as long as needed to respond and
            maintain ordinary business records, unless a longer period is required
            by law.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This website does not currently use advertising cookies or third-party
            analytics. If that changes, this policy will be updated.
          </p>

          <h2>Your choices</h2>
          <p>
            You may contact us by phone instead of using the web form. You may
            request correction of contact information you have provided to us.
          </p>

          <h2>Children</h2>
          <p>
            This website is not directed to children under 13. We do not knowingly
            collect personal information from children through this site.
          </p>

          <h2>Contact us</h2>
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
