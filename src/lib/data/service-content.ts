/**
 * Patient-education copy for individual service pages (/services/[slug]).
 *
 * STATUS: DRAFT — PENDING PHYSICIAN REVIEW.
 * This copy is general patient education about each procedure. It must be
 * reviewed and approved by Dr. Evangelista before this branch is merged.
 * Rules followed while drafting:
 *   - Describe the procedure in general terms only; no claims about the
 *     clinic's specific equipment, techniques, volumes, or outcomes.
 *   - No promises of results; candidacy is always decided at evaluation.
 *   - Only conditions already listed on the site (conditions.ts) are linked.
 */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceContent {
  /** Meta title (~50-60 chars). */
  title: string;
  /** Meta description (~140-160 chars). */
  description: string;
  /** Visible H1. */
  h1: string;
  /** One-sentence summary shown on the services hub card. */
  summary: string;
  /** "What is it?" paragraphs. */
  overview: readonly string[];
  /** "Who may benefit" paragraphs. */
  whoMayBenefit: readonly string[];
  /** "What to expect" steps (general, not clinic-specific). */
  whatToExpect: readonly string[];
  faqs: readonly ServiceFaq[];
}

const EVAL_FAQ: ServiceFaq = {
  q: "How do I know if this treatment is right for me?",
  a: "Every treatment plan at Excel Physical Medicine and Rehab starts with a comprehensive physiatric assessment. Dr. Evangelista reviews your history, examines how the problem affects your function, and discusses whether this option makes sense alongside alternatives such as physical therapy.",
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "peripheral-joint-injections": {
    title: "Joint Injections in Novi, MI | Excel PM&R",
    description:
      "Knee, shoulder, hip and other joint injections in Novi, MI from a board certified physiatrist. Learn what to expect and call 248.624.5176.",
    h1: "Peripheral Joint Injections in Novi, MI",
    summary:
      "Injections into joints such as the knee, shoulder or hip to help calm pain and inflammation so you can stay active and progress in rehab.",
    overview: [
      "A peripheral joint injection places medication directly into a joint outside the spine, such as the knee, shoulder, hip, elbow, wrist or ankle. The medication is commonly a corticosteroid, which reduces inflammation, often combined with a local anesthetic for short-term relief.",
      "In physical medicine and rehabilitation, an injection is rarely the whole plan. The goal is usually to reduce pain enough that you can move more comfortably and get more out of exercise and physical therapy.",
    ],
    whoMayBenefit: [
      "Joint injections are commonly considered for painful arthritis, frozen shoulder, bursitis and other inflammatory joint problems, particularly when pain is limiting daily activities or progress in therapy.",
    ],
    whatToExpect: [
      "Evaluation of your symptoms, imaging and function to confirm the joint is the likely source of pain.",
      "The skin is cleaned and the medication is injected into the joint; the visit is typically brief.",
      "Some people notice early relief from the anesthetic; any steroid effect usually develops over the following days.",
      "Follow-up to review your response and adjust your rehabilitation plan.",
    ],
    faqs: [
      {
        q: "How often can joint injections be repeated?",
        a: "Physicians generally limit how often steroid injections are given into the same joint. Dr. Evangelista will discuss a safe interval based on your situation.",
      },
      EVAL_FAQ,
    ],
  },

  "trigger-point-injections": {
    title: "Trigger Point Injections in Novi, MI | Excel PM&R",
    description:
      "Trigger point injections for painful muscle knots in the neck, back and shoulders. Physician-led care in Novi, MI. Call 248.624.5176.",
    h1: "Trigger Point Injections in Novi, MI",
    summary:
      "Targeted injections into tight, tender muscle knots that can cause local or referred pain in the neck, shoulders and back.",
    overview: [
      "Trigger points are tight, irritable bands within a muscle that can be tender to the touch and may refer pain to nearby areas, for example from the upper back into the neck or head.",
      "A trigger point injection places a small amount of medication, most often a local anesthetic, directly into the trigger point to help the muscle relax and reduce pain.",
    ],
    whoMayBenefit: [
      "Trigger point injections are often considered for muscular neck and low back pain, muscle strains, and myofascial pain that has not settled with stretching, activity changes or therapy alone.",
    ],
    whatToExpect: [
      "Examination to locate the trigger points that reproduce your pain.",
      "A fine needle is used to inject the trigger point; several points may be treated in one visit.",
      "Temporary soreness at the injection site is common for a day or two.",
      "Stretching, exercise and posture work help keep trigger points from returning.",
    ],
    faqs: [
      {
        q: "Are trigger point injections the same as dry needling?",
        a: "No. Both use a needle at the trigger point, but a trigger point injection delivers medication, while dry needling does not.",
      },
      EVAL_FAQ,
    ],
  },

  "epidural-steroid-injections": {
    title: "Epidural Steroid Injections in Novi, MI | Excel PM&R",
    description:
      "Epidural steroid injections for sciatica, herniated discs and radiating neck or back pain. Board certified pain physician in Novi, MI.",
    h1: "Epidural Steroid Injections in Novi, MI",
    summary:
      "Steroid medication delivered near irritated spinal nerves to ease radiating pain from herniated discs and radiculopathy.",
    overview: [
      "An epidural steroid injection (ESI) delivers anti-inflammatory steroid medication into the epidural space, the area surrounding the spinal nerves. When a nerve root is irritated, for example by a herniated disc, the inflammation can cause pain, numbness or tingling that travels into an arm or leg.",
      "By reducing that inflammation, an ESI aims to relieve radiating pain and make it easier to participate in physical therapy and daily activities. Epidural injections are generally performed with image guidance to help direct the needle.",
    ],
    whoMayBenefit: [
      "ESIs are commonly considered for cervical or lumbar radiculopathy (pain radiating into the arm or leg, such as sciatica), herniated discs, and some forms of neck and low back pain when conservative care has not provided enough relief.",
    ],
    whatToExpect: [
      "A physiatric assessment and review of any imaging to identify the level and side of the irritated nerve.",
      "The procedure itself is usually short; you will be positioned comfortably and the skin numbed before the injection.",
      "You will be monitored briefly afterward and are usually advised to take it easy for the rest of the day.",
      "Relief, if it occurs, typically develops over several days; follow-up guides next steps in your rehab plan.",
    ],
    faqs: [
      {
        q: "Will an epidural steroid injection fix a herniated disc?",
        a: "An ESI does not repair the disc. It targets inflammation around the nerve so pain can settle while the body heals and you rebuild strength and mobility.",
      },
      EVAL_FAQ,
    ],
  },

  "facet-joint-injections": {
    title: "Facet Joint Injections in Novi, MI | Excel PM&R",
    description:
      "Facet joint injections for neck and low back pain from arthritic spinal joints. Non-operative spine care in Novi, MI. Call 248.624.5176.",
    h1: "Facet Joint Injections in Novi, MI",
    summary:
      "Injections into the small joints at the back of the spine that can help confirm and treat arthritic neck or back pain.",
    overview: [
      "Facet joints are the small paired joints at the back of each spinal segment that guide movement. Like other joints, they can become arthritic or inflamed, causing neck or low back pain that may worsen with twisting or leaning back.",
      "A facet joint injection places a local anesthetic, often with a steroid, into or next to the affected joint. It can serve two purposes: helping confirm whether the facet joint is the pain source, and reducing pain and inflammation.",
    ],
    whoMayBenefit: [
      "Facet injections are commonly considered for neck and low back pain associated with degenerative joint disease of the spine, especially when pain is mostly in the spine rather than radiating down a limb.",
    ],
    whatToExpect: [
      "Examination and imaging review to identify which spinal levels are likely involved.",
      "The skin is numbed and the medication is placed at the targeted joints, generally with image guidance.",
      "You may be asked to track your pain in the hours after the injection, since early relief can help confirm the diagnosis.",
      "Follow-up to decide on next steps, which commonly include a targeted exercise program.",
    ],
    faqs: [
      {
        q: "How is this different from an epidural steroid injection?",
        a: "An epidural injection targets inflammation around spinal nerves, usually for pain radiating into a limb. A facet injection targets the spinal joints themselves, usually for pain centered in the neck or back.",
      },
      EVAL_FAQ,
    ],
  },

  "platelet-rich-plasma-injections": {
    title: "PRP Injections in Novi, MI | Excel PM&R",
    description:
      "Platelet rich plasma (PRP) injections for tendon, joint and sports injuries in Novi, MI. Learn how PRP works and call 248.624.5176.",
    h1: "Platelet Rich Plasma (PRP) Injections in Novi, MI",
    summary:
      "A regenerative treatment that uses a concentrate of your own platelets for certain tendon, joint and soft-tissue problems.",
    overview: [
      "Platelet rich plasma (PRP) is made from a small sample of your own blood. The sample is processed to concentrate the platelets, which contain growth factors involved in the body's natural healing response, and the concentrate is then injected into the injured or degenerated area.",
      "PRP is considered a regenerative medicine treatment. Research continues to evolve, and results vary by condition and by person, which is why a careful evaluation comes first.",
    ],
    whoMayBenefit: [
      "PRP is commonly considered for chronic tendon problems (tendonitis), some forms of joint arthritis, plantar fasciitis and certain sports injuries, often when other conservative treatments have not provided enough improvement.",
    ],
    whatToExpect: [
      "A physiatric assessment to decide whether PRP is a reasonable option for your condition.",
      "A blood draw, processing of the sample, then injection into the target area in the same visit.",
      "Soreness for several days is common, and certain anti-inflammatory medications may be avoided around treatment as directed.",
      "Improvement, when it occurs, tends to be gradual over weeks and is paired with a progressive rehab program.",
    ],
    faqs: [
      {
        q: "Does insurance cover PRP?",
        a: "Coverage for PRP varies by plan and is often limited. Call our office at 248.624.5176 and we can help you understand your options before treatment.",
      },
      EVAL_FAQ,
    ],
  },

  "sacroiliac-joint-injections": {
    title: "SI Joint Injections in Novi, MI | Excel PM&R",
    description:
      "Sacroiliac (SI) joint injections for low back, buttock and pelvic pain. Physician-led, non-operative care in Novi, MI. Call 248.624.5176.",
    h1: "Sacroiliac (SI) Joint Injections in Novi, MI",
    summary:
      "Injections into the joint connecting the spine and pelvis to help diagnose and relieve low back and buttock pain.",
    overview: [
      "The sacroiliac (SI) joints connect the base of the spine (the sacrum) to the pelvis on each side. When an SI joint is irritated or moving abnormally, it can cause pain in the low back, buttock, or sometimes the upper thigh.",
      "An SI joint injection places a local anesthetic, often with a steroid, into the joint. It can help confirm whether the SI joint is the source of pain and can reduce inflammation.",
    ],
    whoMayBenefit: [
      "SI joint injections are commonly considered for low back or buttock pain that examination suggests is coming from the sacroiliac joint rather than the lumbar spine.",
    ],
    whatToExpect: [
      "Physical examination maneuvers that help point to the SI joint as the pain source.",
      "The skin is numbed and the medication is placed in the joint, generally with image guidance.",
      "You may be asked to note how your usual painful activities feel afterward.",
      "Follow-up and a strengthening and stabilization program as part of your rehab plan.",
    ],
    faqs: [
      {
        q: "How can SI joint pain be told apart from a disc problem?",
        a: "The patterns overlap, which is why a thorough physiatric exam matters. The response to a diagnostic SI joint injection can also help clarify the source.",
      },
      EVAL_FAQ,
    ],
  },

  "ultrasound-guided-injections": {
    title: "Ultrasound-Guided Injections in Novi, MI | Excel PM&R",
    description:
      "Ultrasound-guided injections let the physician see the target in real time. Joint, tendon and soft-tissue injections in Novi, MI.",
    h1: "Ultrasound-Guided Injections in Novi, MI",
    summary:
      "Injections performed while watching the needle and target on ultrasound in real time, without radiation.",
    overview: [
      "With ultrasound guidance, the physician uses a handheld ultrasound probe to see muscles, tendons, joints, nerves and blood vessels in real time while performing an injection. This allows the medication to be placed precisely where it is intended.",
      "Ultrasound does not use radiation, and it can be used for many joint, tendon and soft-tissue injections, including some regenerative treatments.",
    ],
    whoMayBenefit: [
      "Ultrasound guidance is commonly used for injections around the shoulder, hip, knee, foot and other areas, for conditions such as arthritis, frozen shoulder, tendonitis, bursitis and plantar fasciitis.",
    ],
    whatToExpect: [
      "A brief ultrasound look at the area to identify the target and plan the approach.",
      "Gel is applied, the skin is cleaned, and the injection is performed while the target is visualized.",
      "Most people return to light activity the same day, following any specific instructions given.",
      "Follow-up to review your progress and adjust your rehab plan.",
    ],
    faqs: [
      {
        q: "Is an ultrasound-guided injection more painful?",
        a: "Ultrasound guidance does not add discomfort; it simply lets the physician see the target while performing the injection.",
      },
      EVAL_FAQ,
    ],
  },

  "therapeutic-botox": {
    title: "Botox for Spasticity in Novi, MI | Excel PM&R",
    description:
      "Therapeutic Botox (botulinum toxin) injections for spasticity and overactive muscles, managed by a board certified physiatrist in Novi, MI.",
    h1: "Therapeutic Botox Injections in Novi, MI",
    summary:
      "Medical botulinum toxin injections to relax overactive, stiff muscles and support function, such as for spasticity.",
    overview: [
      "Therapeutic Botox uses botulinum toxin, a medication that temporarily reduces the signal from a nerve to a muscle. Injected into specific overactive muscles, it can reduce stiffness and involuntary tightness.",
      "In physical medicine and rehabilitation, Botox is most often used to manage spasticity, the muscle tightness that can follow a stroke, traumatic brain injury, spinal cord injury or other neurological conditions. The goal is better comfort, easier care, and improved function, combined with stretching, bracing or therapy as appropriate.",
    ],
    whoMayBenefit: [
      "People with spasticity that interferes with movement, positioning, hygiene, sleep or comfort may be candidates, particularly when the tightness is concentrated in specific muscles.",
    ],
    whatToExpect: [
      "Assessment of which muscles are overactive and what functional goals matter most to you.",
      "Injections into the selected muscles; the visit is typically brief.",
      "Effects usually begin within days to a couple of weeks and are temporary, so treatment may be repeated at intervals.",
      "Stretching, splinting or therapy afterward helps make the most of the muscle relaxation.",
    ],
    faqs: [
      {
        q: "Is this the same as cosmetic Botox?",
        a: "The medication is related, but therapeutic Botox is used for medical purposes, such as reducing spasticity, with different doses and target muscles.",
      },
      EVAL_FAQ,
    ],
  },

  "regenerative-medicine": {
    title: "Regenerative Medicine in Novi, MI | Excel PM&R",
    description:
      "Regenerative medicine options, including PRP, for tendon, joint and sports injuries. Physician-led evaluation in Novi, MI. Call 248.624.5176.",
    h1: "Regenerative Medicine in Novi, MI",
    summary:
      "Treatments, such as platelet rich plasma, that aim to support the body's own healing in injured tendons, joints and soft tissues.",
    overview: [
      "Regenerative medicine refers to treatments that aim to support the body's natural repair processes rather than only masking symptoms. In musculoskeletal care, a well-known example is platelet rich plasma (PRP), which uses a concentrate of your own platelets.",
      "This is an evolving field. Evidence differs by treatment and condition, so an honest discussion of realistic expectations, alternatives and costs is part of every evaluation.",
    ],
    whoMayBenefit: [
      "Regenerative options are commonly discussed for chronic tendon problems, some forms of joint arthritis and sports injuries that have not improved enough with standard conservative care.",
    ],
    whatToExpect: [
      "A comprehensive physiatric assessment and review of your previous treatments.",
      "A discussion of which options, if any, fit your condition and goals.",
      "If you proceed, treatment is paired with a structured rehabilitation plan.",
      "Follow-up visits to track function and progress over the following weeks.",
    ],
    faqs: [
      {
        q: "Which regenerative treatments do you offer?",
        a: "Please call our office at 248.624.5176 to discuss current regenerative options and whether they may be appropriate for you.",
      },
      EVAL_FAQ,
    ],
  },
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT[slug];
}
