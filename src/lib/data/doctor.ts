/**
 * Dr. Augustus (Peter) Evangelista — verified credentials only.
 * From excel-pmr-website-plan.md; no bio or unverified content.
 */

export const DOCTOR = {
  name: "Dr. Augustus (Peter) Evangelista",
  degrees: ["MD", "MBA", "NHA"] as const,
  certifications: [
    "Board Certified in Physical Medicine and Rehabilitation",
    "Board Certified in Pain Medicine",
  ] as const,
  title: "Medical Director of Excel Physical Medicine and Rehab",
  affiliations: [
    "Ascension Providence Hospital",
    "Beaumont Farmington Hills",
    "Beaumont Wayne",
    "Trinity Health Livonia Hospital",
  ] as const,
  /** Training & education institutions (verified from client brochure); logos in public/images/training/ */
  training: [
    { name: "Mayo Clinic", logo: "/images/training/mayo-clinic.png" },
    { name: "Harvard", logo: "/images/training/harvard.png" },
    { name: "Tufts", logo: "/images/training/tufts.png" },
    { name: "Boston College", logo: "/images/training/boston-college.png" },
  ] as const,
} as const;
