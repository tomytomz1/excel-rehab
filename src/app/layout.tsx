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
} from "@/lib/constants";

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
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Physician"],
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
    medicalSpecialty: "PhysicalMedicine",
    currenciesAccepted: "USD",
    paymentAccepted: "Insurance",
    hasMap:
      "https://www.google.com/maps?q=31190+Novi+Road+Novi+MI+48377",
  };
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.excel-rehab.com"),
  title: "Excel Physical Medicine and Rehab | PM&R Clinic in Novi, MI",
  description:
    "Board certified physiatrist in Novi, Michigan. Specializing in non-operative pain management, physical therapy, injections, and rehabilitation. Call 248.624.5176.",
  openGraph: {
    title: "Excel Physical Medicine and Rehab | PM&R Clinic in Novi, MI",
    description:
      "Board certified physiatrist in Novi, Michigan. Specializing in non-operative pain management, physical therapy, injections, and rehabilitation. Call 248.624.5176.",
    type: "website",
    url: "https://www.excel-rehab.com",
    locale: "en_US",
    siteName: "Excel Physical Medicine and Rehab",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Excel Physical Medicine and Rehab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excel Physical Medicine and Rehab | PM&R Clinic in Novi, MI",
    description:
      "Board certified physiatrist in Novi, Michigan. Specializing in non-operative pain management, physical therapy, injections, and rehabilitation. Call 248.624.5176.",
  },
  alternates: {
    canonical: "https://www.excel-rehab.com",
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
        <main id="main-content" className="min-h-screen pt-16 lg:pt-[80px] overflow-x-clip w-full min-w-0">
          {children}
        </main>
        <Footer />
        <FloatingMobileCTA />
      </body>
    </html>
  );
}
