/**
 * Excel PM&R — conditions treated from brochure.
 */

export const CONDITION_CATEGORIES = [
  "Spine & Back",
  "Injuries",
  "Joint & Extremity",
  "Neurological",
] as const;

export type ConditionCategory = (typeof CONDITION_CATEGORIES)[number];

export interface Condition {
  name: string;
  slug: string;
  category: ConditionCategory;
}

export const CONDITIONS: Condition[] = [
  {
    name: "Acute and Chronic Neck and Low Back Pain",
    slug: "acute-chronic-neck-low-back-pain",
    category: "Spine & Back",
  },
  {
    name: "Whiplash Injuries from MVA",
    slug: "whiplash-injuries-mva",
    category: "Injuries",
  },
  {
    name: "Slip and Fall Injuries",
    slug: "slip-fall-injuries",
    category: "Injuries",
  },
  {
    name: "Joint Arthritis",
    slug: "joint-arthritis",
    category: "Joint & Extremity",
  },
  {
    name: "Neck and Lumbar Degenerative Joint Disease",
    slug: "neck-lumbar-degenerative-joint-disease",
    category: "Spine & Back",
  },
  {
    name: "Herniated Discs",
    slug: "herniated-discs",
    category: "Spine & Back",
  },
  {
    name: "Cervical and Lumbar Radiculopathy",
    slug: "cervical-lumbar-radiculopathy",
    category: "Spine & Back",
  },
  {
    name: "Spasticity",
    slug: "spasticity",
    category: "Neurological",
  },
  {
    name: "Traumatic Brain Injuries",
    slug: "traumatic-brain-injuries",
    category: "Injuries",
  },
  {
    name: "Spinal Cord Injuries",
    slug: "spinal-cord-injuries",
    category: "Injuries",
  },
  {
    name: "Multiple Orthopedic Fractures",
    slug: "multiple-orthopedic-fractures",
    category: "Injuries",
  },
  {
    name: "Muscle Strains and Tears",
    slug: "muscle-strains-tears",
    category: "Injuries",
  },
  {
    name: "Patellofemoral Dysfunction",
    slug: "patellofemoral-dysfunction",
    category: "Joint & Extremity",
  },
  {
    name: "Plantar Fasciitis",
    slug: "plantar-fasciitis",
    category: "Joint & Extremity",
  },
  {
    name: "Sports Injuries",
    slug: "sports-injuries",
    category: "Injuries",
  },
  {
    name: "Tendonitis / Bursitis",
    slug: "tendonitis-bursitis",
    category: "Joint & Extremity",
  },
  {
    name: "Frozen Shoulder",
    slug: "frozen-shoulder",
    category: "Joint & Extremity",
  },
  {
    name: "Carpal Tunnel Syndrome",
    slug: "carpal-tunnel-syndrome",
    category: "Joint & Extremity",
  },
  {
    name: "Vestibular Rehabilitation / BPPV",
    slug: "vestibular-rehabilitation-bppv",
    category: "Neurological",
  },
];

export function getConditionBySlug(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

export function getConditionsByCategory(
  category: ConditionCategory
): Condition[] {
  return CONDITIONS.filter((c) => c.category === category);
}
