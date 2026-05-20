import Image from "next/image";
import { InnerPageHero } from "@/components/shared/InnerPageHero";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { ContactFormClient } from "./ContactFormClient";
import { SITE_ADDRESS, PHONE, FAX, SITE_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: `Contact Us | ${SITE_NAME}`,
  description: `${SITE_ADDRESS.full}. Phone ${PHONE}, Fax ${FAX}. Schedule an appointment or send a message.`,
});

export default function ContactPage() {
  const phoneTel = PHONE.replace(/\./g, "");

  return (
    <div>
      <InnerPageHero
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        variant="brand-blue"
      />

      <SectionWrapper amount={0} className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Form */}
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                Send us a message
              </h2>
              <p className="mb-4 text-base text-neutral-700 leading-relaxed rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
                <strong>Not for emergencies.</strong> If you have a medical
                emergency, call 911. This form is for scheduling inquiries only.
                Please do not include symptoms, diagnoses, or other sensitive
                medical information.
              </p>
              <ContactFormClient />
              <p className="mt-4 text-base text-neutral-600 leading-relaxed">
                See our{" "}
                <a href="/hipaa-notice" className="text-brand-blue font-medium hover:underline">
                  HIPAA Notice
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-brand-blue font-medium hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
              <div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">
                  Clinic Manager
                </h2>
                <p className="text-neutral-700 leading-relaxed">
                  If you would like to contact our Clinic Manager, please email:
                </p>
                <p className="mt-3 font-semibold text-neutral-900">
                  Chris Negapatan, PTA
                </p>
                <a
                  href="mailto:ChrisN@maplemanorrehab.com"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  ChrisN@maplemanorrehab.com
                </a>
              </div>
            </div>

            {/* Right: Info + Map */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-3">
                  Location &amp; Hours
                </h2>
                <address className="not-italic text-neutral-700 space-y-1">
                  <p>{SITE_ADDRESS.street}</p>
                  <p>
                    {SITE_ADDRESS.city}, {SITE_ADDRESS.state} {SITE_ADDRESS.zip}
                  </p>
                </address>
                <p className="mt-3">
                  <a
                    href={`tel:${phoneTel}`}
                    className="text-brand-blue font-semibold hover:underline"
                  >
                    {PHONE}
                  </a>
                </p>
                <p className="text-neutral-600">Fax: {FAX}</p>
                <p className="text-neutral-600 mt-2">
                  Business Hours: 9am to 5pm (or by appointment)
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-200 aspect-[4/3] min-h-[280px]">
                <iframe
                  title="Excel Physical Medicine and Rehab location"
                  src="https://maps.google.com/maps?q=31190+Novi+Road,+Novi,+MI+48377&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full h-full min-h-[280px]"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Full-width QR section */}
      <SectionWrapper amount={0} className="py-12 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold text-neutral-900 mb-4">
            Scan to Schedule Your Appointment
          </p>
          <div className="inline-block rounded-xl overflow-hidden bg-white p-4 shadow-sm">
            <Image
              src="/qr/Calendly%20QR%20Code%20to%20Schedule%20Visit.png"
              alt="QR code to schedule an appointment"
              width={180}
              height={180}
              className="object-contain"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
