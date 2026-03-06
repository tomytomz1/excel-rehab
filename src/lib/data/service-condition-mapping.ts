/**
 * Approximate mapping: which conditions each service treats, and which services treat each condition.
 * Used for "Conditions This Treats" on service pages and "How We Treat This" on condition pages.
 * Slugs from services.ts and conditions.ts only.
 */

/** Service slug -> condition slugs that this service commonly treats */
export const SERVICE_TO_CONDITIONS: Record<string, string[]> = {
  "on-site-physical-therapy": [
    "sports-injuries",
    "muscle-strains-tears",
    "joint-arthritis",
    "patellofemoral-dysfunction",
    "plantar-fasciitis",
    "frozen-shoulder",
    "vestibular-rehabilitation-bppv",
  ],
  "peripheral-joint-injections": [
    "joint-arthritis",
    "frozen-shoulder",
    "patellofemoral-dysfunction",
    "tendonitis-bursitis",
  ],
  "trigger-point-injections": [
    "acute-chronic-neck-low-back-pain",
    "muscle-strains-tears",
    "tendonitis-bursitis",
  ],
  "epidural-steroid-injections": [
    "herniated-discs",
    "cervical-lumbar-radiculopathy",
    "acute-chronic-neck-low-back-pain",
  ],
  "facet-joint-injections": [
    "acute-chronic-neck-low-back-pain",
    "neck-lumbar-degenerative-joint-disease",
  ],
  "platelet-rich-plasma-injections": [
    "joint-arthritis",
    "tendonitis-bursitis",
    "plantar-fasciitis",
    "sports-injuries",
  ],
  "sacroiliac-joint-injections": [
    "acute-chronic-neck-low-back-pain",
  ],
  "ultrasound-guided-injections": [
    "joint-arthritis",
    "frozen-shoulder",
    "tendonitis-bursitis",
    "plantar-fasciitis",
  ],
  "therapeutic-botox": [
    "spasticity",
    "cervical-lumbar-radiculopathy",
  ],
  "regenerative-medicine": [
    "joint-arthritis",
    "tendonitis-bursitis",
    "sports-injuries",
    "plantar-fasciitis",
  ],
  "health-wellness-weight-loss": [
    "joint-arthritis",
    "acute-chronic-neck-low-back-pain",
  ],
};

/** Condition slug -> service slugs that commonly treat this condition */
export const CONDITION_TO_SERVICES: Record<string, string[]> = {
  "acute-chronic-neck-low-back-pain": [
    "epidural-steroid-injections",
    "facet-joint-injections",
    "trigger-point-injections",
    "sacroiliac-joint-injections",
  ],
  "herniated-discs": [
    "epidural-steroid-injections",
    "on-site-physical-therapy",
  ],
  "cervical-lumbar-radiculopathy": [
    "epidural-steroid-injections",
    "therapeutic-botox",
    "on-site-physical-therapy",
  ],
  "neck-lumbar-degenerative-joint-disease": [
    "facet-joint-injections",
    "epidural-steroid-injections",
  ],
  "whiplash-injuries-mva": [
    "on-site-physical-therapy",
    "trigger-point-injections",
  ],
  "slip-fall-injuries": [
    "on-site-physical-therapy",
    "peripheral-joint-injections",
  ],
  "sports-injuries": [
    "on-site-physical-therapy",
    "platelet-rich-plasma-injections",
    "regenerative-medicine",
  ],
  "muscle-strains-tears": [
    "on-site-physical-therapy",
    "trigger-point-injections",
  ],
  "multiple-orthopedic-fractures": [
    "on-site-physical-therapy",
  ],
  "traumatic-brain-injuries": [
    "on-site-physical-therapy",
    "therapeutic-botox",
  ],
  "spinal-cord-injuries": [
    "on-site-physical-therapy",
    "therapeutic-botox",
  ],
  "joint-arthritis": [
    "peripheral-joint-injections",
    "on-site-physical-therapy",
    "platelet-rich-plasma-injections",
    "ultrasound-guided-injections",
  ],
  "frozen-shoulder": [
    "peripheral-joint-injections",
    "on-site-physical-therapy",
    "ultrasound-guided-injections",
  ],
  "carpal-tunnel-syndrome": [
    "ultrasound-guided-injections",
    "on-site-physical-therapy",
  ],
  "patellofemoral-dysfunction": [
    "on-site-physical-therapy",
    "peripheral-joint-injections",
  ],
  "plantar-fasciitis": [
    "on-site-physical-therapy",
    "platelet-rich-plasma-injections",
    "ultrasound-guided-injections",
    "regenerative-medicine",
  ],
  "tendonitis-bursitis": [
    "trigger-point-injections",
    "peripheral-joint-injections",
    "platelet-rich-plasma-injections",
    "ultrasound-guided-injections",
  ],
  "spasticity": [
    "therapeutic-botox",
    "on-site-physical-therapy",
  ],
  "vestibular-rehabilitation-bppv": [
    "on-site-physical-therapy",
  ],
};
