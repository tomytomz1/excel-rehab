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
    "Licensed Nursing Home Administrator",
  ] as const,
  title: "Medical Director of Excel Physical Medicine and Rehab",
  // Independent healthcare system directories that identify this physician at 31190 Novi Rd.
  // Not a substitute for clinic verification of current hospital affiliations.
  publicDirectoryProfiles: [
    {
      label: "Corewell Health",
      url: "https://providers.corewellhealth.org/provider/augustus-p-evangelista/3191872",
    },
    {
      label: "Trinity Health Michigan",
      url: "https://www.trinityhealthmichigan.com/provider/augustus-evangelista-md-physical-medicine-and-rehabilitation",
    },
  ] as const,
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
