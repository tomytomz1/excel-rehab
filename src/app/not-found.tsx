import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PHONE, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Page Not Found | ${SITE_NAME}`,
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  const phoneTel = PHONE.replace(/\./g, "");

  return (
    <section className="py-16 lg:py-24 bg-neutral-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative w-20 h-20 mx-auto mb-8">
          <Image
            src="/icon.png"
            alt=""
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-blue mb-3">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
          Page not found
        </h1>
        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
          The page you requested doesn&apos;t exist or may have moved. You can
          return home or contact our office for help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className={cn(
              "inline-flex items-center justify-center rounded-lg bg-brand-green px-8 py-3.5",
              "text-white font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto",
              "outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            )}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center rounded-lg border-2 border-brand-blue px-8 py-3.5",
              "text-brand-blue font-semibold hover:bg-brand-blue/5 transition-colors w-full sm:w-auto",
              "outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
            )}
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-8 text-neutral-600">
          Need assistance now? Call{" "}
          <a
            href={`tel:${phoneTel}`}
            className="font-semibold text-brand-blue hover:underline"
          >
            {PHONE}
          </a>
        </p>
      </div>
    </section>
  );
}
