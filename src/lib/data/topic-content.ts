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
    "Non-operative pain management in Novi, MI from a physician board certified in Pain Medicine and PM&R. Injections, physical therapy and more. Call 248.624.5176.",
  h1: "Pain Management in Novi, MI",
  summary:
    "Non-operative care that looks for the source of pain and focuses on how you function day to day.",
  overview: [
    "Pain management in physical medicine and rehabilitation focuses on finding the source of pain and improving how you function day to day, without surgery. Dr. Evangelista is board certified in both Pain Medicine and Physical Medicine and Rehabilitation.",
    "Treatment plans are built around your goals and may combine several approaches, such as physical therapy, targeted injections and guidance on activity.",
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
    EVAL_FAQ,
  ],
};

export const ACCIDENT_INJURY: ServiceContent = {
  title: "Auto Accident & Work Injury Doctor in Novi, MI | Excel PM&R",
  description:
    "Physician-led care for car accident and work injuries in Novi, MI. Auto insurance and workers' compensation accepted. Call 248.624.5176.",
  h1: "Auto Accident & Work Injury Care in Novi, MI",
  summary:
    "Evaluation and rehabilitation for injuries from car accidents and work incidents.",
  overview: [
    "Injuries from car accidents and work incidents, such as whiplash, back injuries and muscle strains, can affect sleep, work and everyday activities. A physiatrist focuses on diagnosing these injuries and helping you recover function without surgery.",
    "Excel Physical Medicine and Rehab accepts auto insurance and workers' compensation. Coverage and authorization requirements vary, so please call the office to verify before your visit.",
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
      a: `Excel PM&R accepts auto insurance and workers' compensation. Because coverage and authorization rules vary by policy and claim, call ${PHONE} to verify before your visit.`,
    },
    EVAL_FAQ,
  ],
};
