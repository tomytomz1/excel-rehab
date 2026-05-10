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
export const WEBSITE_URL = "https://www.excel-rehab.com";

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
