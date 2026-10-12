/**
 * Patient-education copy for individual condition pages (/conditions/[slug]).
 *
 * STATUS: PUBLISHED without physician sign-off (site owner's decision);
 * Dr. Evangelista should still review it. Same rules as service-content.ts:
 * general education only, no clinic-specific outcome claims, candidacy is
 * decided at evaluation.
 */

import { getConditionBySlug, type Condition } from "@/lib/data/conditions";
import { EVAL_FAQ, type ServiceContent } from "@/lib/data/service-content";

const RED_FLAGS =
  "Get emergency care right away for new loss of bladder or bowel control, numbness in the groin or inner thighs, or leg or arm weakness that is quickly getting worse.";

export const CONDITION_CONTENT: Record<string, ServiceContent> = {
  "herniated-discs": {
    title: "Herniated Disc Treatment in Novi, MI | Excel PM&R",
    description:
      "Non-surgical care for herniated discs in the neck and low back from a board certified physiatrist in Novi, MI. Learn about your options. Call 248.624.5176.",
    h1: "Herniated Disc Treatment in Novi, MI",
    summary:
      "Non-surgical evaluation and treatment of herniated discs in the neck and low back.",
    overview: [
      "The discs between the bones of the spine act as cushions. A herniated disc happens when some of the soft inner material pushes through a weak spot in the tougher outer layer. Herniations are most common in the low back (lumbar spine) and the neck (cervical spine).",
      "A herniated disc may cause no symptoms, or it may irritate a nearby nerve root. Many people improve with time and non-surgical care, which is the focus of physical medicine and rehabilitation.",
    ],
    whoMayBenefit: [
      "Symptoms depend on where the herniation is and whether a nerve is irritated. They can include neck or low back pain, pain that travels into an arm or leg, numbness or tingling, and muscle weakness.",
      RED_FLAGS,
    ],
    whatToExpect: [
      "A comprehensive physiatric assessment: your history, a physical and neurological exam, and a review of any imaging.",
      "A plan focused on function, which commonly starts with activity guidance and physical therapy.",
      "If pain is limiting your progress, injection options such as an epidural steroid injection may be discussed.",
      "Follow-up to track your progress and adjust the plan. If your symptoms suggest surgery should be considered, a surgical opinion may be recommended.",
    ],
    faqs: [
      {
        q: "Do herniated discs need surgery?",
        a: "Most do not. Many herniated discs improve with time and non-surgical treatment. Surgery is usually considered when there is significant or worsening nerve weakness, or when pain continues despite appropriate conservative care.",
      },
      EVAL_FAQ,
    ],
  },

  "cervical-lumbar-radiculopathy": {
    title: "Sciatica & Radiculopathy Treatment in Novi, MI | Excel PM&R",
    description:
      "Non-surgical treatment for sciatica and pinched nerves in the neck and low back from a board certified physiatrist in Novi, MI. Call 248.624.5176.",
    h1: "Sciatica & Radiculopathy Treatment in Novi, MI",
    summary:
      "Care for pinched nerves in the neck and low back, including sciatica that travels down the leg.",
    overview: [
      "Radiculopathy means a spinal nerve root is irritated or compressed, often called a pinched nerve. In the low back (lumbar radiculopathy), it commonly causes sciatica: pain that travels from the buttock down the leg. In the neck (cervical radiculopathy), pain can travel into the shoulder, arm or hand.",
      "Common causes include herniated discs and age-related changes in the spine, such as bone spurs or narrowing of the openings the nerves pass through.",
    ],
    whoMayBenefit: [
      "Typical symptoms are pain, numbness, tingling or weakness that travels into an arm or leg, sometimes along with neck or back pain. The symptoms often follow the path of the affected nerve.",
      RED_FLAGS,
    ],
    whatToExpect: [
      "A comprehensive physiatric assessment, including a nerve-focused exam and a review of any imaging.",
      "A plan that commonly includes physical therapy, exercise and changes to activities that aggravate the nerve.",
      "For radiating pain that persists, an epidural steroid injection may be considered to calm inflammation around the nerve.",
      "Follow-up to track your progress and adjust the plan.",
    ],
    faqs: [
      {
        q: "What is the difference between sciatica and radiculopathy?",
        a: "Sciatica describes pain along the path of the sciatic nerve, down the back of the leg. It is usually caused by lumbar radiculopathy: irritation of a nerve root in the low back.",
      },
      EVAL_FAQ,
    ],
  },
};

export function getConditionContent(slug: string): ServiceContent | undefined {
  return CONDITION_CONTENT[slug];
}

/** Condition page URL when one exists, otherwise the conditions hub. */
export function conditionHref(slug: string): string {
  return CONDITION_CONTENT[slug] ? `/conditions/${slug}` : "/conditions";
}

/** Pill links for a list of condition slugs (unknown slugs are dropped). */
export function conditionLinks(slugs: readonly string[]): { label: string; href: string }[] {
  return slugs
    .map((s) => getConditionBySlug(s))
    .filter((c): c is Condition => c !== undefined)
    .map((c) => ({ label: c.name, href: conditionHref(c.slug) }));
}
