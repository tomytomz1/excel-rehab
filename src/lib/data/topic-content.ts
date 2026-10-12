/**
 * Patient-education copy for the pain management and accident/work injury
 * landing pages.
 *
 * STATUS: PUBLISHED without physician sign-off (site owner's decision);
 * Dr. Evangelista should still review it. Facts about the practice
 * (certifications, accepted payors, services) come from doctor.ts,
 * insurance.ts and services.ts; nothing else about the clinic is claimed.
 */

import { PHONE } from "@/lib/constants";
import { EVAL_FAQ, type ServiceContent } from "@/lib/data/service-content";

export const PAIN_MANAGEMENT: ServiceContent = {
  title: "Pain Management Doctor in Novi, MI | Excel PM&R",
  description:
    "Pain management in Novi, MI with a physician board certified in Pain Medicine and PM&R. Non-operative evaluation, injections and physical therapy. Call 248.624.5176.",
  h1: "Pain Management Doctor in Novi, MI",
  summary:
    "Non-operative care that looks for the source of pain and focuses on how you function day to day.",
  overview: [
    "Pain management in physical medicine and rehabilitation focuses on finding the source of pain and improving how you function day to day, without surgery. Dr. Evangelista is board certified in both Pain Medicine and Physical Medicine and Rehabilitation.",
    "Treatment plans are built around your goals and may combine several approaches, such as physical therapy, targeted injections and guidance on activity. Options are considered after an evaluation; no single procedure is right for every type of pain.",
  ],
  whoMayBenefit: [
    "People with neck and back pain, herniated discs, sciatica and other radiating nerve pain, arthritis, sports and work injuries, and pain after an auto accident are among those commonly evaluated.",
  ],
  whatToExpect: [
    "A comprehensive physiatric assessment of your history, exam findings, imaging and how pain affects your daily activities.",
    "An explanation of the likely source of your pain and the options for treating it.",
    "A plan that may include on-site physical therapy and, when appropriate, injection procedures.",
    "Regular follow-up to measure progress in function and adjust the plan.",
  ],
  faqs: [
    {
      q: "Is pain management only about injections?",
      a: "No. Injections can help with some conditions, but the goal of physiatry is better function. Plans commonly include exercise or physical therapy and changes to daily activities, with procedures used when they fit.",
    },
    {
      q: "Do I need a referral?",
      a: `Requirements depend on your insurance plan. Call ${PHONE} to check before your visit.`,
    },
    {
      q: "What does a pain management physiatrist do?",
      a: "A physiatrist is a medical doctor specializing in physical medicine and rehabilitation. The evaluation looks at the source of pain, movement, function and how symptoms affect everyday activities. Care may include rehabilitation and, when appropriate, non-operative procedures.",
    },
    {
      q: "Does Excel PM&R evaluate sciatica and radiating nerve pain?",
      a: "Sciatica, herniated discs and neck or back pain that radiates into a limb are among the conditions discussed on this site. A physician evaluation helps determine whether physical therapy, a procedure or another approach may be suitable.",
    },
    EVAL_FAQ,
  ],
};

export const ACCIDENT_INJURY: ServiceContent = {
  title: "Work Injury & Auto Accident Doctor in Novi, MI | Excel PM&R",
  description:
    "Work injury and car accident rehabilitation in Novi, MI. Physician-led evaluation and on-site physical therapy. Call to verify claim coverage: 248.624.5176.",
  h1: "Work Injury & Auto Accident Care in Novi, MI",
  summary:
    "Evaluation and rehabilitation for injuries from car accidents and work incidents.",
  overview: [
    "Injuries from car accidents and work incidents, such as whiplash, back injuries and muscle strains, can affect sleep, work and everyday activities. A physiatrist focuses on diagnosing these injuries and helping you recover function without surgery.",
    "Excel Physical Medicine and Rehab lists auto insurance and workers' compensation among its accepted payor sources. Coverage, referrals and authorization requirements can vary by claim and treatment; call the Novi office to confirm before your visit.",
  ],
  whoMayBenefit: [
    "Common examples include whiplash and other neck injuries, low back pain, herniated discs, muscle strains and tears, slip-and-fall injuries, fractures, and rehabilitation after a head injury.",
    "If you were just in an accident and have severe pain, numbness, weakness or a head injury, go to the emergency room or call 911 first.",
  ],
  whatToExpect: [
    `Call ${PHONE} and have your auto insurance or workers' compensation claim information ready.`,
    "A comprehensive physiatric assessment of your injuries and how they affect work and daily activities.",
    "A plan that may include on-site physical therapy and, when appropriate, injection procedures.",
    "Regular follow-up to track your recovery and update your plan.",
  ],
  faqs: [
    {
      q: "Should I see a doctor if I feel fine after a car accident?",
      a: "Some injuries, such as whiplash, can cause symptoms that appear hours or days later. If symptoms develop, an evaluation can help identify the problem and guide treatment.",
    },
    {
      q: "What insurance do you accept for accident and work injuries?",
      a: `Excel PM&R lists auto insurance and workers' compensation among its accepted payor sources. Coverage and authorization rules vary by policy and claim, so call ${PHONE} to verify before your visit.`,
    },
    {
      q: "Can I contact the office about a work injury or workers' compensation visit?",
      a: `Yes. Call ${PHONE} to ask about a work-injury evaluation and to verify whether your claim and any required authorizations can be handled by the practice. Do not put claim numbers, diagnoses or other sensitive medical details into the website's general contact form.`,
    },
    {
      q: "Is a rehabilitation appointment the same as emergency treatment after an injury?",
      a: "No. A physiatric evaluation focuses on diagnosing injuries, rehabilitation and function. For a serious or urgent injury, obtain emergency medical care first rather than waiting for an outpatient appointment.",
    },
    EVAL_FAQ,
  ],
};
