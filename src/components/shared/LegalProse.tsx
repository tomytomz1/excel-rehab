import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function LegalProse({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
        "[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-neutral-900 [&_h2]:mt-8 [&_h2]:mb-3",
        "[&_p]:text-neutral-700 [&_p]:leading-relaxed [&_p]:mb-4",
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-neutral-700 [&_ul]:mb-4",
        "[&_a]:text-brand-blue [&_a]:font-medium [&_a]:hover:underline",
        className
      )}
    >
      {children}
    </div>
  );
}
