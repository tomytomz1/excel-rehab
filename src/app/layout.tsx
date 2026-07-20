import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingMobileCTA } from "@/components/layout/FloatingMobileCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_NAME,
  SITE_ADDRESS,
  PHONE,
  FAX,
  WEBSITE_URL,
  BUSINESS_SCHEMA_ID,
  BUSINESS_HOURS,
} from "@/lib/constants";
import { DOCTOR } from "@/lib/data/doctor";
import { absoluteUrl } from "@/lib/seo";

/** Stable schema.org node id for the lead physician. */
const PHYSICIAN_SCHEMA_ID = `${WEBSITE_URL}/#physician`;

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SCHEMA_DESCRIPTION =
  "Focused on the prevention, diagnosis, and non-operative management for patients with disorders associated with disability.";

function buildJsonLdSchema() {
  const telephone = `+1-${PHONE.replace(/\./g, "-")}`;
  const faxNumber = `+1-${FAX.replace(/\./g, "-")}`;

  const business = {
    "@type": "MedicalBusiness",
    "@id": BUSINESS_SCHEMA_ID,
    name: SITE_NAME,
    description: SCHEMA_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS.street,
      addressLocality: SITE_ADDRESS.city,
      addressRegion: SITE_ADDRESS.state,
      postalCode: SITE_ADDRESS.zip,
      addressCountry: "US",
    },
    telephone,
    faxNumber,
    url: WEBSITE_URL,
    image: absoluteUrl("/icon.png"),
    medicalSpecialty: "PhysicalMedicine",
    currenciesAccepted: "USD",
    paymentAccepted: "Insurance",
    hasMap: "https://www.google.com/maps?q=31190+Novi+Road+Novi+MI+48377",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...BUSINESS_HOURS.daysOfWeek],
        opens: BUSINESS_HOURS.opens,
        closes: BUSINESS_HOURS.closes,
      },
    ],
    employee: { "@id": PHYSICIAN_SCHEMA_ID },
  };

  const physician = {
    "@type": "Physician",
    "@id": PHYSICIAN_SCHEMA_ID,
    name: DOCTOR.name,
    url: absoluteUrl("/about"),
    medicalSpecialty: "PhysicalMedicine",
    worksFor: { "@id": BUSINESS_SCHEMA_ID },
    memberOf: { "@id": BUSINESS_SCHEMA_ID },
    hasCredential: DOCTOR.certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: cert,
    })),
    alumniOf: DOCTOR.training.map((school) => ({
      "@type": "EducationalOrganization",
      name: school.name,
    })),
    affiliation: DOCTOR.affiliations.map((hospital) => ({
      "@type": "Hospital",
      name: hospital,
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [business, physician],
  };
}

const defaultTitle =
  "Excel Physical Medicine and Rehab | PM&R Clinic in Novi, MI";
const defaultDescription =
  "Board certified physiatrist in Novi, Michigan. Specializing in non-operative pain management, physical therapy, injections, and rehabilitation. Call 248.624.5176.";

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultDescription,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    url: absoluteUrl("/"),
    locale: "en_US",
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/logo-color.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = buildJsonLdSchema();

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased m-0 p-0 min-h-screen w-full min-w-0`}>
        <JsonLd data={schema} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-neutral-900 focus:rounded-lg focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pt-16 lg:pt-[80px] overflow-x-clip w-full min-w-0">
          {children}
        </main>
        <Footer />
        <FloatingMobileCTA />
      </body>
    </html>
  );
}
