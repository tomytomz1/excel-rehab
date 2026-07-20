/**
 * Service-area landing page content for Excel Physical Medicine and Rehab.
 *
 * The practice is physically located in Novi, Michigan ONLY. Every entry below
 * describes serving patients from a nearby community — it must never imply a
 * second clinic, office, or location. Copy is written to be genuinely distinct
 * per city and uses only supported services, conditions, and insurers.
 */

export interface LocationFaq {
  q: string;
  a: string;
}

export interface LocationServeLink {
  /** Route slug of a nearby service-area page (without leading slash). */
  slug: string;
  /** Natural, varied anchor text for internal links. */
  anchor: string;
}

export interface LocationImage {
  /** Public path to the image (served from /public). */
  src: string;
  /** Descriptive alt text (describes the image, not the city). */
  alt: string;
}

export interface Location {
  /** Route segment, also used to build the path: `/${slug}`. */
  slug: string;
  /** Display name of the city/township (full, correct form). */
  city: string;
  /** Short label used in the footer "Areas We Serve" list. */
  footerLabel: string;
  /** Meta title (~50-60 chars) — brand suffix "Excel PM&R". */
  title: string;
  /** Meta description (~145-160 chars), unique per city. */
  description: string;
  /** Primary content photo (intro image and OG/social image). */
  primaryImage: LocationImage;
  /** Secondary content photo shown mid-page in the service-area section. */
  secondaryImage: LocationImage;
  /** The single page <h1>, rendered by InnerPageHero. */
  h1: string;
  /** Visible breadcrumb label for the current page. */
  breadcrumbLabel: string;
  /** schema.org areaServed value, e.g. "Northville, Michigan". */
  areaServed: string;
  /** Varied natural anchor text used by the Novi page's "Areas We Serve" links. */
  noviLinkAnchor: string;
  /** Uppercase eyebrow above the intro heading. */
  introEyebrow: string;
  /** Intro section heading (h2). */
  introHeading: string;
  /** Intro body paragraphs. */
  introParagraphs: readonly string[];
  /** City-tailored paragraph for the physician-led PM&R section. */
  pmrParagraph: string;
  /** Heading for the location / service-area section. */
  serviceAreaHeading: string;
  /** Body paragraphs for the location / service-area section. */
  serviceAreaParagraphs: readonly string[];
  /** Intro sentence above the conditions grid. */
  conditionsIntro: string;
  /**
   * One sentence placed under `conditionsIntro`, framing what care at the Novi
   * office commonly addresses. Uses only condition names from conditions.ts and
   * makes no epidemiological claims about the city's population.
   */
  conditionsEmphasis: string;
  /**
   * Conservative "getting to the Novi office from <City>" sentence(s) using only
   * major, well-known named road corridors. Reinforces that the office is in
   * Novi (no second office).
   */
  accessParagraph: string;
  /**
   * Unique per-city "planning your visit" paragraph: verified directions
   * context plus the on-site parking note. Kept truthful and city-specific to
   * add genuine local value beyond shared logistics.
   */
  visitPlanningParagraph: string;
  /**
   * City-relevant subset of condition slugs (must exist in conditions.ts).
   * Drives a unique conditions grid per page rather than the full 19-item list.
   * Reuses the emphasis chosen per city.
   */
  conditionSlugs: readonly string[];
  /**
   * Optional, locally relevant hospital-affiliation note surfaced as text in
   * the physician section (e.g. Farmington Hills → Beaumont Farmington Hills).
   * Truthful values from doctor.ts only.
   */
  localAffiliationNote?: string;
  /** Intro sentence above the why-choose grid. */
  whyChooseIntro: string;
  /** Body for the city-specific "Serving <City>" why-choose card. */
  whyChooseServingBody: string;
  /** City-specific FAQ entries (visible on the page for humans; no FAQPage schema). */
  faqs: readonly LocationFaq[];
  /** 1-2 contextually adjacent sibling cities for cross-linking. */
  siblings: readonly LocationServeLink[];
}

export const LOCATIONS: readonly Location[] = [
  {
    slug: "physical-therapy-northville-mi",
    city: "Northville",
    footerLabel: "Northville",
    title: "Physical Therapy Near Northville, MI | Excel PM&R",
    description:
      "Physical therapy near Northville, Michigan at Excel Physical Medicine and Rehab in nearby Novi. Individualized outpatient rehabilitation. Call 248.624.5176.",
    primaryImage: {
      src: "/images/therapy-session.png",
      alt: "Physician guiding a patient through a supervised leg-raise exercise during a therapy session",
    },
    secondaryImage: {
      src: "/images/clinic-entrance.png",
      alt: "Entrance and storefront signage at Excel PM&R Physical Therapy, suite 31190",
    },
    h1: "Physical Therapy Near Northville, Michigan",
    breadcrumbLabel: "Physical Therapy Near Northville, MI",
    areaServed: "Northville, Michigan",
    noviLinkAnchor: "care for patients traveling from Northville",
    introEyebrow: "Serving Northville & Nearby Communities",
    introHeading: "Individualized Outpatient Rehabilitation for Northville Patients",
    introParagraphs: [
      "Excel Physical Medicine and Rehab offers physical therapy near Northville, Michigan from its office in neighboring Novi. Patients from Northville and surrounding communities can access individualized outpatient rehabilitation focused on mobility, function, and quality of life.",
      "A comprehensive physiatric assessment may help determine an appropriate plan of care. Physical therapy can be included when clinically appropriate, based on each person's condition, functional needs, and rehabilitation goals.",
    ],
    pmrParagraph:
      "Excel is a physical medicine and rehabilitation (PM&R) practice, based in Novi, that also offers on-site physical therapy for patients traveling a short distance from Northville. Physiatry focuses on the non-operative evaluation and management of conditions that affect movement and function.",
    serviceAreaHeading: "Serving Patients from Northville and the Surrounding Area",
    serviceAreaParagraphs: [
      "The practice is located in Novi, a short drive from Northville along the shared border of Wayne and Oakland counties. This makes individualized outpatient rehabilitation a convenient option for Northville residents without requiring a long commute.",
      "There is no separate Northville office — care is provided at the Novi location, with on-site parking. Patients from Northville and nearby communities are welcome to call to ask about scheduling and directions.",
    ],
    conditionsIntro:
      "Northville-area patients are evaluated for a range of spine, joint, musculoskeletal, neurological, and injury-related conditions. Physical therapy may be part of an individualized plan when clinically appropriate.",
    conditionsEmphasis:
      "Physical therapy at the Novi office commonly supports patients working to address spine and back conditions such as Acute and Chronic Neck and Low Back Pain, Herniated Discs, and Cervical and Lumbar Radiculopathy, when clinically appropriate.",
    accessParagraph:
      "The Novi office sits just north of Northville, a short drive of roughly four miles. It is reachable via Novi Road, with I-96 access at the Novi Road interchange (Exit 162) and nearby Beck Road (Exit 160). Care is provided at the Novi location — there is no separate Northville office.",
    visitPlanningParagraph:
      "Coming from Northville, most patients drive north on Novi Road or take I-96 to the Novi Road exit (Exit 162) a few miles away. The Novi office has on-site parking, so plan to park at the building; call 248.624.5176 if you would like directions before your visit.",
    conditionSlugs: [
      "acute-chronic-neck-low-back-pain",
      "neck-lumbar-degenerative-joint-disease",
      "herniated-discs",
      "cervical-lumbar-radiculopathy",
      "joint-arthritis",
      "muscle-strains-tears",
      "sports-injuries",
      "tendonitis-bursitis",
    ],
    whyChooseIntro:
      "Reasons patients from Northville consider Excel Physical Medicine and Rehab for outpatient rehabilitation.",
    whyChooseServingBody:
      "Individualized outpatient rehabilitation is available to Northville residents at the Novi office, a short drive from surrounding communities.",
    faqs: [
      {
        q: "Does Excel PM&R have an office in Northville?",
        a: "No. Excel Physical Medicine and Rehab is located in Novi, a short drive from Northville. The practice does not operate a separate Northville office, but it welcomes patients traveling from Northville and surrounding communities.",
      },
      {
        q: "How far is the Novi office from Northville?",
        a: "The office is located at 31190 Novi Road in Novi, Michigan, a short drive from Northville. On-site parking is available. Call 248.624.5176 for directions.",
      },
      {
        q: "What conditions does Excel PM&R evaluate for Northville patients?",
        a: "Excel PM&R evaluates a range of spine, joint, musculoskeletal, neurological, and injury-related conditions. Physical therapy may be included in an individualized plan when clinically appropriate.",
      },
    ],
    siblings: [
      { slug: "physical-therapy-farmington-hills-mi", anchor: "physical therapy near Farmington Hills" },
      { slug: "physical-therapy-wixom-mi", anchor: "serving patients from Wixom" },
    ],
  },
  {
    slug: "physical-therapy-farmington-hills-mi",
    city: "Farmington Hills",
    footerLabel: "Farmington Hills",
    title: "Physical Therapy Near Farmington Hills, MI | Excel PM&R",
    description:
      "Physical therapy near Farmington Hills, Michigan at Excel Physical Medicine and Rehab in nearby Novi. Coordinated rehabilitation care. Call 248.624.5176.",
    primaryImage: {
      src: "/images/physician-spine-consult.png",
      alt: "Physician reviewing a lumbar spine model with a patient during a consultation",
    },
    secondaryImage: {
      src: "/images/care-team.png",
      alt: "The Excel PM&R physician and physical therapy care team in the clinic gym",
    },
    h1: "Physical Therapy Near Farmington Hills, Michigan",
    breadcrumbLabel: "Physical Therapy Near Farmington Hills, MI",
    areaServed: "Farmington Hills, Michigan",
    noviLinkAnchor: "serving patients from Farmington Hills",
    introEyebrow: "Serving Farmington Hills Patients",
    introHeading: "Coordinated Rehabilitation Within Reach of Farmington Hills",
    introParagraphs: [
      "Excel Physical Medicine and Rehab provides physical therapy near Farmington Hills, Michigan from its office in nearby Novi. Care is coordinated within a physical medicine and rehabilitation practice, so assessment, physiatric management, and on-site physical therapy are organized around each patient's functional goals.",
      "A comprehensive physiatric assessment may guide an appropriate plan of care. Physical therapy can be part of that plan when clinically appropriate, based on the individual's condition and rehabilitation goals.",
    ],
    pmrParagraph:
      "Excel is a physical medicine and rehabilitation (PM&R) practice in Novi that also offers on-site physical therapy for patients coming from Farmington Hills. Having physiatric evaluation and physical therapy under one practice supports coordinated, function-focused care.",
    serviceAreaHeading: "Convenient Access from Farmington Hills",
    serviceAreaParagraphs: [
      "Farmington Hills sits just east of Novi in Oakland County, so the office is easily accessible for residents traveling a short distance west. Coordinated rehabilitation is available without a lengthy commute.",
      "The practice does not maintain a Farmington Hills location; all care is delivered at the Novi office, which offers on-site parking. Residents of Farmington Hills are welcome to call to ask about scheduling and directions.",
    ],
    conditionsIntro:
      "Patients from Farmington Hills are evaluated for a range of spine, joint, musculoskeletal, neurological, and injury-related conditions. Physical therapy may be part of an individualized plan when clinically appropriate.",
    conditionsEmphasis:
      "At the Novi office, physical therapy commonly helps patients working to address injury-related concerns such as Whiplash Injuries from motor vehicle accidents, Slip and Fall Injuries, Sports Injuries, and Muscle Strains and Tears, when clinically appropriate.",
    accessParagraph:
      "Farmington Hills lies east of Novi, and the Novi office is typically reached via I-696, M-5, and Grand River Avenue, which connect the two communities near the large I-96/I-275/I-696/M-5 interchange along the Novi–Farmington Hills line. All care is delivered at the Novi location; the practice does not maintain a Farmington Hills office.",
    visitPlanningParagraph:
      "From Farmington Hills, patients typically travel west on Grand River Avenue or take I-696/M-5 to I-96 westbound, then reach the office from the Novi Road area. On-site parking is available at the Novi office; call 248.624.5176 for directions before your visit.",
    conditionSlugs: [
      "whiplash-injuries-mva",
      "slip-fall-injuries",
      "sports-injuries",
      "muscle-strains-tears",
      "multiple-orthopedic-fractures",
      "acute-chronic-neck-low-back-pain",
      "joint-arthritis",
      "patellofemoral-dysfunction",
    ],
    localAffiliationNote:
      "Dr. Evangelista's hospital affiliations include Beaumont Farmington Hills, a hospital serving the Farmington Hills community.",
    whyChooseIntro:
      "Reasons Farmington Hills patients consider Excel Physical Medicine and Rehab for coordinated rehabilitation.",
    whyChooseServingBody:
      "Coordinated physiatric care and on-site physical therapy are available to Farmington Hills patients at the Novi office, a short drive west.",
    faqs: [
      {
        q: "Does Excel PM&R have an office in Farmington Hills?",
        a: "No. Excel Physical Medicine and Rehab is located in Novi, a short drive from Farmington Hills. The practice does not operate a separate Farmington Hills office, but it welcomes patients traveling from Farmington Hills.",
      },
      {
        q: "How do Farmington Hills patients reach the Novi office?",
        a: "The office is at 31190 Novi Road in Novi, Michigan, a short drive west from Farmington Hills. On-site parking is available. Call 248.624.5176 for directions.",
      },
      {
        q: "What does coordinated rehabilitation mean at Excel PM&R?",
        a: "Physiatric evaluation and on-site physical therapy are organized within one practice. This allows assessment, management, and therapy to be coordinated around a patient's functional goals when clinically appropriate.",
      },
    ],
    siblings: [
      { slug: "physical-therapy-northville-mi", anchor: "physical therapy near Northville" },
      { slug: "physical-therapy-commerce-township-mi", anchor: "serving Commerce Township" },
    ],
  },
  {
    slug: "physical-therapy-wixom-mi",
    city: "Wixom",
    footerLabel: "Wixom",
    title: "Physical Therapy Near Wixom, MI | Excel PM&R",
    description:
      "Physical therapy near Wixom, Michigan at Excel Physical Medicine and Rehab in nearby Novi. Focused on mobility, pain reduction, and daily activity. Call 248.624.5176.",
    primaryImage: {
      src: "/images/therapy-gym-cardio.png",
      alt: "Cardio and conditioning equipment in the Excel PM&R therapy gym",
    },
    secondaryImage: {
      src: "/images/clinic-exterior.png",
      alt: "Exterior of the Excel PM&R Physical Therapy building in Novi at dusk",
    },
    h1: "Physical Therapy Near Wixom, Michigan",
    breadcrumbLabel: "Physical Therapy Near Wixom, MI",
    areaServed: "Wixom, Michigan",
    noviLinkAnchor: "rehabilitation care for Wixom residents",
    introEyebrow: "A Nearby Option for Wixom Residents",
    introHeading: "Support for Mobility, Pain Reduction, and Daily Activity",
    introParagraphs: [
      "Excel Physical Medicine and Rehab is located in Novi and offers physical therapy that is a convenient nearby option for Wixom, Michigan residents. Care focuses on supporting mobility, working to reduce pain, and helping patients return to daily activity when clinically appropriate.",
      "A comprehensive physiatric assessment may help determine an appropriate plan of care. Physical therapy can be included when it fits the individual's condition, functional needs, and rehabilitation goals.",
    ],
    pmrParagraph:
      "To be clear about location: the practice is in Novi, not Wixom. Excel is a physical medicine and rehabilitation (PM&R) practice that also offers on-site physical therapy, and it is a short, direct drive for most Wixom residents.",
    serviceAreaHeading: "A Convenient Nearby Option for Wixom Residents",
    serviceAreaParagraphs: [
      "Wixom neighbors Novi to the northwest in Oakland County, so the office is a convenient nearby option for residents seeking outpatient rehabilitation. The focus is on mobility, pain reduction, and return to daily activity.",
      "The practice is located in Novi and does not have a Wixom office. All care is delivered at the Novi location, which has on-site parking. Wixom residents are welcome to call to ask about scheduling and directions.",
    ],
    conditionsIntro:
      "Wixom-area patients are evaluated for a range of spine, joint, musculoskeletal, neurological, and injury-related conditions. Physical therapy may be part of an individualized plan when clinically appropriate.",
    conditionsEmphasis:
      "Care at the Novi office frequently includes physical therapy for patients working to address joint and extremity concerns such as Joint Arthritis, Plantar Fasciitis, Tendonitis and Bursitis, and Frozen Shoulder, when clinically appropriate.",
    accessParagraph:
      "Wixom sits along the I-96 corridor just northwest of Novi, a short drive from the Novi office via I-96 eastbound toward the Novi Road area. To be clear on location, the practice is in Novi, not Wixom, and all care is provided at the Novi office.",
    visitPlanningParagraph:
      "Most Wixom patients reach the office by taking I-96 east a short distance from the Wixom Road area, then continuing to the Novi Road exit (Exit 162). The Novi office has on-site parking; call 248.624.5176 for directions if it helps to plan your route.",
    conditionSlugs: [
      "joint-arthritis",
      "plantar-fasciitis",
      "tendonitis-bursitis",
      "frozen-shoulder",
      "patellofemoral-dysfunction",
      "carpal-tunnel-syndrome",
      "muscle-strains-tears",
      "acute-chronic-neck-low-back-pain",
    ],
    whyChooseIntro:
      "Reasons Wixom residents consider Excel Physical Medicine and Rehab as a convenient nearby option.",
    whyChooseServingBody:
      "For Wixom residents, the Novi office is a convenient nearby option for outpatient rehabilitation focused on mobility, pain reduction, and daily activity.",
    faqs: [
      {
        q: "Is Excel PM&R located in Wixom?",
        a: "No. To be clear, the practice is located in Novi, not Wixom. Excel Physical Medicine and Rehab is a short, direct drive for most Wixom residents and welcomes patients traveling from Wixom.",
      },
      {
        q: "How convenient is the Novi office for Wixom residents?",
        a: "Wixom neighbors Novi to the northwest, so the office at 31190 Novi Road is a convenient nearby option. On-site parking is available. Call 248.624.5176 for directions.",
      },
      {
        q: "What does physical therapy focus on for Wixom patients?",
        a: "When clinically appropriate, care focuses on supporting mobility, working to reduce pain, and helping patients return to daily activity as part of an individualized plan.",
      },
    ],
    siblings: [
      { slug: "physical-therapy-walled-lake-mi", anchor: "physical therapy near Walled Lake" },
      { slug: "physical-therapy-commerce-township-mi", anchor: "serving Commerce Township" },
    ],
  },
  {
    slug: "physical-therapy-walled-lake-mi",
    city: "Walled Lake",
    footerLabel: "Walled Lake",
    title: "Physical Therapy Near Walled Lake, MI | Excel PM&R",
    description:
      "Physical therapy near Walled Lake, Michigan at Excel Physical Medicine and Rehab in nearby Novi. Personalized therapy for balance, joint, and spine care. Call 248.624.5176.",
    primaryImage: {
      src: "/images/therapy-traction-table.png",
      alt: "Mechanical traction therapy table and treatment equipment at Excel PM&R",
    },
    secondaryImage: {
      src: "/images/therapy-gym-strength.png",
      alt: "Strength-training machines and free weights in the Excel PM&R therapy gym",
    },
    h1: "Physical Therapy Near Walled Lake, Michigan",
    breadcrumbLabel: "Physical Therapy Near Walled Lake, MI",
    areaServed: "Walled Lake, Michigan",
    noviLinkAnchor: "rehabilitation options for Walled Lake residents",
    introEyebrow: "Serving Walled Lake Residents",
    introHeading: "Personalized Therapy for Walled Lake Patients",
    introParagraphs: [
      "Excel Physical Medicine and Rehab offers personalized physical therapy near Walled Lake, Michigan from its office in nearby Novi. Care is individualized around each patient's functional needs and rehabilitation goals, with attention to balance, joint, spine, and mobility concerns where clinically appropriate.",
      "A comprehensive physiatric assessment may help determine an appropriate plan of care. Physical therapy can be part of that plan when it suits the individual's condition and goals.",
    ],
    pmrParagraph:
      "Excel is a physical medicine and rehabilitation (PM&R) practice in Novi that also offers on-site physical therapy for patients traveling from Walled Lake. Physiatry focuses on the non-operative evaluation and management of conditions affecting movement and function.",
    serviceAreaHeading: "Serving Walled Lake and Neighboring Communities",
    serviceAreaParagraphs: [
      "Walled Lake lies just north of Novi in Oakland County. The Novi office is a short drive away, making personalized outpatient therapy an accessible option for Walled Lake residents.",
      "There is no Walled Lake office; care is provided at the Novi location, which offers on-site parking. Residents of Walled Lake are welcome to call to ask about scheduling and directions.",
    ],
    conditionsIntro:
      "Walled Lake-area patients are evaluated for a range of spine, joint, musculoskeletal, neurological, and injury-related conditions. Physical therapy may be part of an individualized plan when clinically appropriate.",
    conditionsEmphasis:
      "Physical therapy at the Novi office often supports patients working to address balance and mobility concerns such as Vestibular Rehabilitation and BPPV, Spasticity, and Joint Arthritis, when clinically appropriate.",
    accessParagraph:
      "Walled Lake lies just north of Novi, and the office is reachable heading south via Novi Road or Pontiac Trail. There is no Walled Lake office; care is provided at the Novi location.",
    visitPlanningParagraph:
      "From Walled Lake, the Novi office is a short drive south, typically via Novi Road or Pontiac Trail. On-site parking is available at the office; call 248.624.5176 for directions if you would like help planning your route.",
    conditionSlugs: [
      "vestibular-rehabilitation-bppv",
      "spasticity",
      "joint-arthritis",
      "acute-chronic-neck-low-back-pain",
      "herniated-discs",
      "cervical-lumbar-radiculopathy",
      "tendonitis-bursitis",
      "muscle-strains-tears",
    ],
    whyChooseIntro:
      "Reasons Walled Lake residents consider Excel Physical Medicine and Rehab for personalized therapy.",
    whyChooseServingBody:
      "Personalized therapy addressing balance, joint, spine, and mobility concerns is available to Walled Lake residents at the Novi office, a short drive away.",
    faqs: [
      {
        q: "Does Excel PM&R have an office in Walled Lake?",
        a: "No. Excel Physical Medicine and Rehab is located in Novi, a short drive from Walled Lake. The practice does not operate a separate Walled Lake office, but it welcomes patients traveling from Walled Lake.",
      },
      {
        q: "How far is the Novi office from Walled Lake?",
        a: "Walled Lake lies just north of Novi, so the office at 31190 Novi Road is a short drive away. On-site parking is available. Call 248.624.5176 for directions.",
      },
      {
        q: "What does personalized therapy involve for Walled Lake patients?",
        a: "Care is individualized around each patient's functional needs and goals, with attention to balance, joint, spine, and mobility concerns where clinically appropriate, as part of an individualized plan.",
      },
    ],
    siblings: [
      { slug: "physical-therapy-wixom-mi", anchor: "serving patients from Wixom" },
      { slug: "physical-therapy-commerce-township-mi", anchor: "physical therapy near Commerce Township" },
    ],
  },
  {
    slug: "physical-therapy-commerce-township-mi",
    city: "Commerce Township",
    footerLabel: "Commerce Township",
    title: "Physical Therapy Near Commerce Township, MI | Excel PM&R",
    description:
      "Physical therapy near Commerce Township, Michigan at Excel Physical Medicine and Rehab in nearby Novi. Serving the township and western Oakland County. Call 248.624.5176.",
    primaryImage: {
      src: "/images/therapy-gym-strength.png",
      alt: "Strength-training machines and free weights in the Excel PM&R therapy gym",
    },
    secondaryImage: {
      src: "/images/clinic-sign.png",
      alt: "Excel PM&R Physical Therapy sign on the building's brick exterior",
    },
    h1: "Physical Therapy Near Commerce Township, Michigan",
    breadcrumbLabel: "Physical Therapy Near Commerce Township, MI",
    areaServed: "Commerce Township, Michigan",
    noviLinkAnchor: "serving Commerce Township",
    introEyebrow: "Serving Commerce Township & Western Oakland County",
    introHeading: "Outpatient Rehabilitation for Commerce Township Patients",
    introParagraphs: [
      "Excel Physical Medicine and Rehab offers physical therapy near Commerce Township, Michigan from its office in nearby Novi. The practice serves Commerce Township and nearby western Oakland County communities with individualized, function-focused outpatient rehabilitation.",
      "A comprehensive physiatric assessment may help determine an appropriate plan of care. Physical therapy can be included when clinically appropriate, based on each person's condition, functional needs, and rehabilitation goals.",
    ],
    pmrParagraph:
      "Excel is a physical medicine and rehabilitation (PM&R) practice in Novi that also offers on-site physical therapy for patients coming from Commerce Township. Physiatry focuses on the non-operative evaluation and management of conditions affecting movement and function.",
    serviceAreaHeading: "Serving Commerce Township and Western Oakland County",
    serviceAreaParagraphs: [
      "Commerce Township is located in western Oakland County, a short drive from the Novi office. This makes function-focused outpatient rehabilitation accessible to residents of the township and nearby communities.",
      "The practice is located in Novi and does not maintain a Commerce Township office. All care is provided at the Novi location, which offers on-site parking. Residents of Commerce Township are welcome to call to ask about scheduling and directions.",
    ],
    conditionsIntro:
      "Patients from Commerce Township are evaluated for a range of spine, joint, musculoskeletal, neurological, and injury-related conditions. Physical therapy may be part of an individualized plan when clinically appropriate.",
    conditionsEmphasis:
      "Physical therapy at the Novi office commonly supports patients working to address a broad range of musculoskeletal concerns spanning the spine, joints, and injuries, such as Herniated Discs, Joint Arthritis, and Muscle Strains and Tears, when clinically appropriate.",
    accessParagraph:
      "Commerce Township is in western Oakland County, north of Novi, and the Novi office is reachable heading south via M-5 or Pontiac Trail. Care is provided at the Novi location; there is no office in Commerce Township.",
    visitPlanningParagraph:
      "From Commerce Township, patients commonly travel south toward Novi on M-5 or Pontiac Trail to reach the office. On-site parking is available at the Novi office; call 248.624.5176 for directions if you would like to plan your route in advance.",
    conditionSlugs: [
      "herniated-discs",
      "joint-arthritis",
      "muscle-strains-tears",
      "acute-chronic-neck-low-back-pain",
      "cervical-lumbar-radiculopathy",
      "sports-injuries",
      "plantar-fasciitis",
      "slip-fall-injuries",
    ],
    whyChooseIntro:
      "Reasons patients from Commerce Township consider Excel Physical Medicine and Rehab for outpatient rehabilitation.",
    whyChooseServingBody:
      "Function-focused outpatient rehabilitation is available to Commerce Township residents at the Novi office, a short drive from western Oakland County communities.",
    faqs: [
      {
        q: "Does Excel PM&R have an office in Commerce Township?",
        a: "No. Excel Physical Medicine and Rehab is located in Novi, a short drive from Commerce Township. The practice does not operate a separate Commerce Township office, but it welcomes patients traveling from the township and nearby communities.",
      },
      {
        q: "How far is the Novi office from Commerce Township?",
        a: "Commerce Township is in western Oakland County, a short drive from the office at 31190 Novi Road in Novi. On-site parking is available. Call 248.624.5176 for directions.",
      },
      {
        q: "Which communities near Commerce Township does the practice serve?",
        a: "The practice serves Commerce Township and nearby western Oakland County communities from its Novi office, offering individualized, function-focused outpatient rehabilitation when clinically appropriate.",
      },
    ],
    siblings: [
      { slug: "physical-therapy-walled-lake-mi", anchor: "physical therapy near Walled Lake" },
      { slug: "physical-therapy-wixom-mi", anchor: "serving patients from Wixom" },
    ],
  },
];

/** All service-area entries the site links to, in display order (Novi + nearby cities). */
export const AREAS_WE_SERVE: readonly { label: string; href: string }[] = [
  { label: "Novi", href: "/physical-therapy-novi-mi" },
  ...LOCATIONS.map((l) => ({ label: l.footerLabel, href: `/${l.slug}` })),
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
