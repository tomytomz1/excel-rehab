/**
 * Excel Physical Medicine & Rehab — site constants.
 * All content from excel-pmr-website-plan.md (verified only).
 */

export const SITE_NAME = "Excel Physical Medicine and Rehab";

export const SITE_ADDRESS = {
  street: "31190 Novi Road",
  city: "Novi",
  state: "MI",
  zip: "48377",
  full: "31190 Novi Road, Novi, MI 48377",
} as const;

export const PHONE = "248.624.5176";
export const FAX = "248.624.5314";
/** Canonical production origin (www). Used in sitemap, robots, and metadata. */
export const WEBSITE_URL = "https://www.excel-rehab.com";

export const SITEMAP_URL = `${WEBSITE_URL}/sitemap.xml`;

/** Stable schema.org node id for the business (LocalBusiness/MedicalBusiness). */
export const BUSINESS_SCHEMA_ID = `${WEBSITE_URL}/#business`;

/** Google Business Profile review link (from clinic QR code) */
export const GOOGLE_REVIEW_URL = "https://g.page/r/CfS47j8ganVaEBM/review";

/** Office hours (verified). Used for display and openingHoursSpecification schema. */
export const BUSINESS_HOURS = {
  daysLabel: "Monday–Friday",
  timeLabel: "9:00 a.m.–5:00 p.m.",
  fullLabel: "Monday–Friday, 9:00 a.m.–5:00 p.m. or by appointment",
  opens: "09:00",
  closes: "17:00",
  daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
} as const;

/** Brand taglines from brochure (verbatim) */
export const TAGLINES = {
  primary: "Patient Centered, Function Focused, Interdisciplinary Care",
  hero: "Where Strength Meets Mobility",
  approach: "Comprehensive Physiatric Assessment → Treatment → Management",
} as const;

/** Goals from brochure */
export const GOALS = [
  "Maximize Function",
  "Reduce or Eliminate Pain",
  "Foster Independence",
  "Improve Quality of Life",
] as const;
