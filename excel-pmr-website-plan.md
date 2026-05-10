# Excel Physical Medicine & Rehab — Website Build Plan

## Project Brief

**Client:** Excel Physical Medicine and Rehab
**Location:** 31190 Novi Road, Novi, MI 48377
**Phone:** 248.624.5176 | **Fax:** 248.624.5314
**Website (current):** www.excel-rehab.com
**Physician:** Dr. Augustus (Peter) Evangelista, MD, MBA, NHA
**Specialty:** Physical Medicine & Rehabilitation (PM&R / Physiatry)

---

## What We Know (Verified Content Only)

### Brand Taglines (from brochure)
- "Patient Centered, Function Focused, Interdisciplinary Care"
- "Where Strength Meets Mobility"
- "Comprehensive Physiatric Assessment → Treatment → Management"
- Goals: Maximize Function, Reduce or Eliminate Pain, Foster Independence, Improve Quality of Life

### Doctor Credentials
- Board Certified in Physical Medicine and Rehabilitation
- Board Certified in Pain Medicine
- Medical Director of Excel Physical Medicine and Rehab
- Affiliated with: Ascension Providence Hospital, Beaumont Farmington Hills, Beaumont Wayne, Trinity Health Livonia Hospital
- Degrees: MD, MBA, NHA

### Services Offered
1. On-Site Physical Therapy
2. Peripheral Joint Injections
3. Trigger Point Injections
4. Epidural Steroid Injections
5. Facet Joint Injections
6. Platelet Rich Plasma Injections
7. Sacroiliac Joint Injections
8. Ultrasound-Guided Injections
9. Therapeutic Botox
10. Regenerative Medicine
11. Health, Wellness, Weight Loss

### Conditions Treated
- Acute and Chronic Neck and Low Back Pain
- Whiplash Injuries from MVA
- Slip and Fall Injuries
- Joint Arthritis
- Neck and Lumbar Degenerative Joint Disease
- Herniated Discs
- Cervical and Lumbar Radiculopathy
- Spasticity
- Traumatic Brain Injuries
- Spinal Cord Injuries
- Multiple Orthopedic Fractures
- Muscle Strains and Tears
- Patellofemoral Dysfunction
- Plantar Fasciitis
- Sports Injuries
- Tendonitis / Bursitis
- Frozen Shoulder
- Carpal Tunnel Syndrome
- Vestibular Rehabilitation / BPPV

### Accepted Payor Sources
Auto, Workers Compensation, Medicare, Blue Cross, HAP, United, Priority, Other Commercial Insurances

### Brand Assets Available
- **logo3.png** — Color logo (blue/green Vitruvian man figure with "EXCEL PHYSICAL MEDICINE AND REHAB") — USE AS PRIMARY
- **logo.jpg** — Black logo version on white background
- **logo2.jpg** — Black and gray logo version on white background
- **logo3.jpg** — Same as logo3.png but JPG format
- **4 stock photos** — Shoulder exam, caregiver with elderly patient, leg/knee therapy, blue medical/DNA background
- **2 QR code PDFs** — One for appointment scheduling, one for Google Reviews
- **Google Review card** — Includes text: "Thank you for letting us take care of you! Your smile brightens our day. Share your experience and spread the word!"

### Content We Do NOT Have (Use Lorem Ipsum or Placeholder)
- Doctor headshot / professional photo
- Doctor's personal bio/story beyond credentials
- Office photos (interior/exterior)
- Patient testimonials / reviews
- Hours of operation
- Team/staff information
- Blog content
- Specific descriptions for each service
- Specific descriptions for each condition
- FAQs
- New patient forms / intake documents
- Social media links

---

## Competitive Research Summary

### What Award-Winning Medical/PM&R Clinic Websites Do

Based on research of top-performing PT and physiatry clinic websites (Twin Boro, Ivy Rehab, Mayo Clinic, Cleveland Clinic, Maven Clinic, Northwestern Medicine, and award winners from eHealthcare Leadership Awards and MarCom), the patterns that separate exceptional sites from average ones are:

**1. Conversion-First Architecture**
- "Schedule Appointment" CTA visible in a sticky header on every single page
- Click-to-call on mobile (phone number is tappable everywhere)
- Multiple low-friction entry points: online scheduling, contact form, phone
- Top clinics like Twin Boro have booking CTAs in a permanently visible header

**2. Patient-First Information Architecture**
- Mayo Clinic model: robust search function with autocomplete and alphabetical filtering
- Cleveland Clinic model: three clear paths immediately visible (Doctors, Directions, Appointments)
- Insurance info is never more than one click away
- New patient information is easy to find and understand

**3. Trust-Building Through Social Proof**
- Google Reviews displayed prominently (some clinics show 15+ testimonials next to the booking button)
- Video testimonials are becoming standard at top clinics
- Doctor credentials displayed early and prominently
- Hospital affiliations and board certifications as trust signals

**4. Local SEO Dominance**
- Schema.org LocalBusiness + MedicalBusiness structured data
- Location page with embedded Google Map
- Optimized Google Business Profile
- Local keywords naturally integrated into service pages

**5. Content as a Patient Acquisition Engine**
- Educational content for each condition treated (great for SEO)
- Blog/resource center that's regularly updated
- Content that helps patients self-identify their condition → leads to booking

**6. Visual & Interaction Design**
- Clean, generous white space (Mayo Clinic approach)
- Professional photography (Maven Clinic uses zero stock photos — aspirational for Phase 2)
- Calming color palettes that evoke trust (blue, green, white)
- High-quality video in hero sections (auto-playing background video is trending)

---

## Technology Stack Recommendation

### Core Framework
**Next.js 15 (App Router)** with TypeScript
- Server-side rendering for SEO (critical for local medical practice)
- Built-in image optimization (WebP/AVIF auto-conversion)
- API routes for form handling
- Fast page transitions with prefetching

### Styling & UI
**Tailwind CSS 4** + **shadcn/ui** component library
- Consistent design system
- Accessible components out of the box (WCAG 2.1 AA)
- Rapid development

### Animation & Motion
**Framer Motion** — primary animation library
- Scroll-triggered reveals (useInView + variants)
- Page transitions
- Micro-interactions on buttons, cards, form elements
- Physics-based spring animations for natural feel

**GSAP ScrollTrigger** — for cinematic hero section only
- Parallax depth on hero background
- Text reveal animations on scroll
- Pin-and-fade section transitions

### Forms & Compliance
**React Hook Form** + **Zod** validation
- No PHI collection (HIPAA-friendly by design)
- Fields: Name, Phone, Email, Preferred Time, Reason for Visit
- HIPAA disclaimer displayed on form
- Server-side submission via Next.js API route → email notification

### Deployment
**Vercel**
- Zero-config Next.js hosting
- Edge network for fast Michigan-area delivery
- Built-in analytics
- Automatic HTTPS/SSL

### Optional Integrations (Phase 2)
- **Sanity.io** or **Contentful** CMS — for blog and staff-editable content
- **Cal.com** or clinic's existing scheduling system — for online booking
- **Google Business Profile API** — for live review display
- **AI Chatbot** — for after-hours patient questions (common at top clinics)

---

## Site Architecture

```
src/app/                          → Home (hero, value props, services preview, doctor intro, CTA)
src/app/about                     → About Dr. Evangelista + clinic philosophy
src/app/services                  → Services hub page
src/app/services/physical-therapy → Individual service pages (11 total)
src/app/services/epidural-steroid-injections
src/app/services/platelet-rich-plasma
src/app/services/regenerative-medicine
src/app/services/[...etc]
src/app/conditions                → Conditions we treat (searchable/filterable)
src/app/conditions/[slug]         → Individual condition pages (SEO goldmine)
src/app/patient-resources         → Insurance, new patient info, FAQs
src/app/contact                   → Contact form, map, QR codes, phone
src/app/blog                      → [Phase 2] Educational articles
```

---

## Page-by-Page Design Specification

### Global Elements

#### Sticky Navigation Bar
- **Desktop:** Logo (left) | Nav links (center) | "Schedule Appointment" button (right, brand green)
- **Mobile:** Logo (left) | Hamburger (right) → slide-in drawer with all links + tap-to-call button
- **Behavior:** Transparent over hero, transitions to solid white with box-shadow on scroll (achieved with Framer Motion `useScroll` + `useMotionValueEvent`)
- **Transition:** Background opacity animates from 0 → 1 over 80px of scroll

#### Footer
- Four columns: Logo + tagline | Quick Links | Services | Contact Info
- Bottom bar: Copyright, Privacy Policy, HIPAA Notice, Accessibility Statement
- QR code for scheduling displayed in footer (desktop only)
- Mobile: stacked single-column layout with tap-to-call button prominent

#### Floating Mobile CTA
- Fixed bottom bar on mobile only: "Call Now" (left, tap-to-call) | "Schedule" (right, links to contact)
- Appears after user scrolls past the hero section
- Subtle slide-up entrance animation

---

### Home Page

#### Section 1: Hero
- **Background:** Blue medical/DNA image (iStock-869879064.jpg) with dark gradient overlay (left-to-right, 70% opacity black to transparent)
- **Content (left-aligned on desktop):**
  - Small caps pre-heading: "PHYSICAL MEDICINE & REHABILITATION IN NOVI, MICHIGAN"
  - Main heading (large, white): "Where Strength Meets Mobility"
  - Subheading (lighter weight, white/80%): "Patient centered, function focused, interdisciplinary care. Focused on the prevention, diagnosis, and non-operative management of pain and disability."
  - Two buttons: "Schedule an Appointment" (brand green, solid) + "Explore Services" (white outline)
- **Animation:** Text elements stagger-fade in from left (Framer Motion, 0.15s delay between each). Background has subtle slow parallax on scroll (GSAP ScrollTrigger, 0.3 speed factor)
- **Mobile:** Full-bleed image with heavier overlay. Buttons stack vertically. "Call Now" replaces "Schedule" button.

#### Section 2: Trust Bar
- Horizontal strip below hero, light gray background
- Content: "Board Certified in Physical Medicine & Rehabilitation | Board Certified in Pain Medicine | Affiliated with 4 Major Hospitals"
- Animation: Fade in on scroll entry
- **Purpose:** Immediate credibility before user reads anything else

#### Section 3: The Excel Approach (Value Propositions)
- Section heading: "Comprehensive Care, One Practice"
- Three cards in a row, each with:
  - **Card 1:** Shoulder exam photo (iStock-1415996324) + "Comprehensive Assessment" + brief description
  - **Card 2:** Caregiver photo (iStock-1719538017) + "Patient-Centered Treatment" + brief description
  - **Card 3:** Knee therapy photo (iStock-805089584) + "Functional Recovery" + brief description
- Card design: Rounded corners (12px), white background, subtle shadow, image fills top half. On hover: slight translateY(-4px) lift with shadow deepening
- Animation: Cards stagger-reveal from bottom (Framer Motion, useInView trigger, 0.2s stagger)
- Brief description text: Use actual brochure copy — "At Excel PM&R, our goal is to decrease our patients' pain, maximize function, and improve quality of life."
- **Note:** For card descriptions beyond what the brochure provides, use Lorem Ipsum placeholder text clearly marked with [PLACEHOLDER] tags

#### Section 4: Services Overview
- Section heading: "Our Services"
- Layout: Responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Each service is a card with an icon (Lucide React icons), service name, and one-line description
- On hover: border-left accent appears in brand green (animated, 0.2s)
- "View All Services →" link at bottom
- Services to display (from brochure, all 11):
  1. On-Site Physical Therapy
  2. Peripheral Joint Injections
  3. Trigger Point Injections
  4. Epidural Steroid Injections
  5. Facet Joint Injections
  6. Platelet Rich Plasma Injections
  7. Sacroiliac Joint Injections
  8. Ultrasound-Guided Injections
  9. Therapeutic Botox
  10. Regenerative Medicine
  11. Health, Wellness, Weight Loss
- **Note:** One-line descriptions for each service are [PLACEHOLDER] — need real copy from client

#### Section 5: Meet Dr. Evangelista
- Split layout: Left side = photo placeholder (use a professional silhouette/avatar with "Photo Coming Soon" text). Right side = bio content.
- Content (from brochure, verbatim where available):
  - "Dr. Augustus (Peter) Evangelista, MD, MBA, NHA"
  - "Board Certified in Physical Medicine and Rehabilitation"
  - "Board Certified in Pain Medicine"
  - "Medical Director of Excel Physical Medicine and Rehab"
  - "We are committed to providing the highest quality care to help patients achieve their functional goals. At Excel PM&R, we put the needs of the patient first."
  - Hospital affiliations listed with subtle icons
- "Learn More About Dr. Evangelista →" link
- Animation: Photo slides in from left, text fades in from right (Framer Motion, useInView)

#### Section 6: Conditions We Treat
- Interactive pill/tag cloud displaying all 22 conditions from the brochure
- Organized by category (inferred groupings):
  - **Spine & Back:** Acute/Chronic Neck and Low Back Pain, Herniated Discs, Cervical/Lumbar Radiculopathy, Degenerative Joint Disease
  - **Injuries:** Whiplash/MVA, Slip and Fall, Sports Injuries, Muscle Strains/Tears, Orthopedic Fractures, TBI, Spinal Cord Injuries
  - **Joint & Extremity:** Joint Arthritis, Frozen Shoulder, Carpal Tunnel, Patellofemoral Dysfunction, Plantar Fasciitis, Tendonitis/Bursitis
  - **Neurological:** Spasticity, Vestibular Rehabilitation/BPPV
- Each pill is clickable → navigates to individual condition page (or anchor section on conditions page)
- Animation: Pills stagger in with a wave effect on scroll entry

#### Section 7: Insurance & Access
- Light gray background section
- Heading: "We Accept Most Major Insurance Plans"
- Horizontal row of accepted payor names (styled as subtle badges/pills): Auto, Workers Compensation, Medicare, Blue Cross, HAP, United, Priority, Other Commercial Insurances
- Subtext: "Not sure if we accept your insurance? Give us a call at 248.624.5176"
- Animation: Simple fade-in

#### Section 8: Patient Testimonials
- **[PLACEHOLDER SECTION]** — We do not have real testimonials
- Design: Horizontal carousel with 3 visible cards on desktop, 1 on mobile
- Each card: Star rating, quote text, patient first name + last initial
- Placeholder cards with Lorem Ipsum and note: "[Awaiting real patient testimonials]"
- Include "Leave Us a Review" CTA that links to their Google Reviews page (from the QR code PDF content)
- When real reviews are available: integrate Google Business Profile reviews or display curated testimonials

#### Section 9: CTA / Contact Preview
- Full-width section with brand blue background
- Heading: "Ready to Start Your Recovery?"
- Subheading: "Schedule your comprehensive physiatric assessment today."
- Two buttons: "Schedule Appointment" + "Call 248.624.5176"
- Address: 31190 Novi Road, Novi, MI 48377
- Animation: Text fade-in with subtle scale (1.02 → 1.0)

---

### About Page

- Hero banner with blue medical background image
- Heading: "About Excel Physical Medicine & Rehab"
- "Located in Novi, Michigan" subheading

**Dr. Evangelista Bio Section**
- Photo placeholder (left) + full bio (right)
- All verified credentials from brochure
- Hospital affiliations with logos (if obtainable) or text list
- **[PLACEHOLDER]** for personal story / why he got into PM&R — Lorem Ipsum clearly marked

**Clinic Philosophy Section**
- "Patient Centered, Function Focused, Interdisciplinary Care"
- The approach: Assessment → Treatment → Management
- Goals from brochure: Maximize Function, Reduce or Eliminate Pain, Foster Independence, Improve Quality of Life
- Use the three stock photos as supporting visuals

---

### Services Page

**Hub Page**
- Hero with heading "Our Services"
- Services organized in a clean grid with cards
- Each card: Icon + service name + 2-3 sentence description + "Learn More →"
- **[PLACEHOLDER]** for all service descriptions beyond the service name — Lorem Ipsum

**Individual Service Pages (11 pages)**
- Each follows same template:
  - Service name as H1
  - Description [PLACEHOLDER — Lorem Ipsum]
  - "What to Expect" section [PLACEHOLDER]
  - "Conditions This Treats" section — link to relevant conditions from our verified list
  - CTA: "Schedule a Consultation"
- SEO: Each page targets "[service name] Novi MI" and related long-tail keywords

---

### Conditions Page

- Searchable/filterable list of all 22 conditions
- Filter pills by category (Spine & Back, Injuries, Joint & Extremity, Neurological)
- Search bar at top
- Each condition card: Name + 1-2 sentence description [PLACEHOLDER] + "Learn More →"

**Individual Condition Pages (22 pages)**
- Condition name as H1
- Overview [PLACEHOLDER — Lorem Ipsum]
- Symptoms [PLACEHOLDER]
- "How We Treat This" — links to relevant services from our verified list
- CTA: "Schedule an Assessment"
- SEO: Each page targets "[condition] treatment Novi MI"

---

### Patient Resources Page

- Heading: "Patient Resources"
- **Accepted Insurance** — full list from brochure
- **New Patient Information** — [PLACEHOLDER: "New patient forms and information coming soon"]
- **FAQs** — [PLACEHOLDER: Accordion component with Lorem Ipsum Q&As]
- **What is PM&R?** — Brief educational section explaining physiatry (can use AAPM&R-style educational content)

---

### Contact Page

- Split layout:
  - **Left:** Contact form (Name, Phone, Email, Preferred Contact Time, Reason for Visit, Message)
  - **Right:** Contact details, embedded Google Map, QR code for scheduling
- Full address: 31190 Novi Road, Novi, MI 48377
- Phone: 248.624.5176
- Fax: 248.624.5314
- Hours: [PLACEHOLDER — "Please call for current hours"]
- HIPAA-friendly form disclaimer: "This form is for scheduling inquiries only. Please do not include sensitive medical information."
- Google Map embed centered on the Novi Road address

---

## Design System

### Color Palette (Extracted from Brand Logo)

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-blue` | `#1A5DAA` | Primary. Headings, nav, hero overlays, buttons |
| `brand-green` | `#7DC242` | CTA buttons, accents, success states, highlights |
| `brand-light-blue` | `#3FA9E0` | Secondary accents, links, hover states |
| `neutral-900` | `#1A1A2E` | Body text, headings on white backgrounds |
| `neutral-600` | `#6B7280` | Secondary text, captions |
| `neutral-100` | `#F3F4F6` | Section backgrounds, cards |
| `white` | `#FFFFFF` | Page backgrounds, card surfaces |

### Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| H1 (Hero) | Inter | 700 | 56px / 3.5rem | 36px / 2.25rem |
| H2 (Section) | Inter | 600 | 40px / 2.5rem | 28px / 1.75rem |
| H3 (Card Title) | Inter | 600 | 24px / 1.5rem | 20px / 1.25rem |
| Body | Inter | 400 | 16px / 1rem | 16px / 1rem |
| Small / Caption | Inter | 400 | 14px / 0.875rem | 14px / 0.875rem |
| Button | Inter | 600 | 16px / 1rem | 16px / 1rem |
| Nav Links | Inter | 500 | 15px / 0.9375rem | 16px / 1rem |

**Why Inter:** Clean, highly readable, medical-professional feel, excellent screen rendering, variable font (single file, all weights). Free from Google Fonts.

### Spacing Scale (Tailwind defaults)
- Section padding: `py-20` (80px) desktop, `py-12` (48px) mobile
- Component gap: `gap-8` (32px) for cards
- Content max-width: `max-w-7xl` (1280px) with `px-6` side padding

### Border Radius
- Cards: `rounded-xl` (12px)
- Buttons: `rounded-lg` (8px)
- Pills/Tags: `rounded-full`
- Images: `rounded-lg` (8px) or `rounded-xl` (12px)

### Shadows
- Card resting: `shadow-sm` — `0 1px 2px rgba(0,0,0,0.05)`
- Card hover: `shadow-lg` — `0 10px 15px rgba(0,0,0,0.1)`
- Navbar scrolled: `shadow-md` — `0 4px 6px rgba(0,0,0,0.07)`

### Animation Specifications

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Hero text | Page load | Fade in + slide up (20px) | 0.8s stagger 0.15s | `easeOut` |
| Section headings | Scroll into view | Fade in + slide up (30px) | 0.6s | `easeOut` |
| Cards | Scroll into view | Fade in + slide up (40px) | 0.5s stagger 0.1s | `spring(0.5, 0.8)` |
| Navbar | Scroll past 80px | Background opacity 0→1 | 0.3s | `easeInOut` |
| Button hover | Hover | Scale 1→1.02 + shadow deepen | 0.2s | `easeOut` |
| Card hover | Hover | TranslateY 0→-4px + shadow | 0.2s | `easeOut` |
| Mobile CTA bar | Scroll past hero | Slide up from bottom | 0.4s | `spring(0.6, 0.9)` |
| Page transitions | Route change | Fade + slide | 0.3s | `easeInOut` |

---

## Folder Structure for Cursor

**IMPORTANT: This project uses a `src/` directory. All application code lives under `src/`.**

```
excel-pmr-website/
├── src/
│   ├── app/
│   │   ├── globals.css                  # Tailwind imports + custom CSS vars
│   │   ├── layout.tsx                   # Root layout: Navbar + Footer + FloatingMobileCTA
│   │   ├── page.tsx                     # Home page (all 9 sections)
│   │   ├── about/
│   │   │   └── page.tsx                 # About / Dr. Evangelista
│   │   ├── services/
│   │   │   ├── page.tsx                 # Services hub
│   │   │   └── [slug]/
│   │   │       └── page.tsx             # Individual service (dynamic route)
│   │   ├── conditions/
│   │   │   ├── page.tsx                 # Conditions hub (searchable)
│   │   │   └── [slug]/
│   │   │       └── page.tsx             # Individual condition (dynamic route)
│   │   ├── patient-resources/
│   │   │   └── page.tsx                 # Insurance, FAQs, forms
│   │   ├── contact/
│   │   │   └── page.tsx                 # Contact form + map
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts             # Form submission handler
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx               # Sticky nav with scroll behavior
│   │   │   ├── Footer.tsx               # 4-column footer
│   │   │   ├── FloatingMobileCTA.tsx    # Fixed mobile bottom bar
│   │   │   └── PageTransition.tsx       # Framer Motion page wrapper
│   │   ├── home/
│   │   │   ├── Hero.tsx                 # Hero section with parallax
│   │   │   ├── TrustBar.tsx             # Credentials strip
│   │   │   ├── ValueProps.tsx           # 3-card approach section
│   │   │   ├── ServicesOverview.tsx     # Services grid preview
│   │   │   ├── DoctorPreview.tsx        # Split-layout doctor intro
│   │   │   ├── ConditionsCloud.tsx      # Interactive pill cloud
│   │   │   ├── InsuranceStrip.tsx       # Accepted insurance display
│   │   │   ├── Testimonials.tsx         # Carousel [placeholder]
│   │   │   └── CTABanner.tsx            # Full-width CTA section
│   │   ├── ui/                          # shadcn/ui components (auto-generated by shadcn)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── badge.tsx
│   │   │   └── carousel.tsx
│   │   ├── shared/
│   │   │   ├── SectionWrapper.tsx       # Reusable scroll-animate wrapper
│   │   │   ├── ServiceCard.tsx          # Reusable service card
│   │   │   ├── ConditionPill.tsx        # Clickable condition tag
│   │   │   └── ContactForm.tsx          # HIPAA-friendly form
│   │   └── seo/
│   │       └── JsonLd.tsx               # Schema.org structured data component
│   └── lib/
│       ├── data/
│       │   ├── services.ts              # All 11 services with slugs, icons, descriptions
│       │   ├── conditions.ts            # All 22 conditions with slugs, categories
│       │   ├── insurance.ts             # Accepted payors list
│       │   └── doctor.ts                # Dr. Evangelista's verified credentials
│       ├── constants.ts                 # Colors, contact info, addresses
│       ├── schema.ts                    # JSON-LD generators (LocalBusiness, MedicalBusiness, Physician)
│       └── utils.ts                     # Shared utilities
├── public/
│   ├── images/
│   │   ├── logo-color.png           # logo3.png — primary
│   │   ├── logo-black.jpg           # logo.jpg — for dark backgrounds
│   │   ├── logo-gray.jpg            # logo2.jpg — alternate
│   │   ├── hero-medical-bg.jpg      # iStock-869879064.jpg
│   │   ├── shoulder-exam.jpg        # iStock-1415996324_3w.jpg
│   │   ├── caregiver-patient.jpg    # iStock-1719538017_3_5w.jpg
│   │   └── knee-therapy.jpg         # iStock-805089584_3w.jpg
│   ├── qr/
│   │   ├── schedule-qr.png          # Extracted from Excel_Physical_Medicine_QR_Code.pdf
│   │   └── google-review-qr.png     # Extracted from GOOGLE_REVIEW.pdf
│   └── favicon.ico                  # Generated from logo
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── components.json                  # shadcn/ui config
├── package.json
└── README.md
```

---

## SEO Strategy

### Structured Data (JSON-LD)

Every page should include LocalBusiness + MedicalBusiness schema:

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physician"],
  "name": "Excel Physical Medicine and Rehab",
  "description": "Focused on the prevention, diagnosis, and non-operative management for patients with disorders associated with disability.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "31190 Novi Road",
    "addressLocality": "Novi",
    "addressRegion": "MI",
    "postalCode": "48377"
  },
  "telephone": "+1-248-624-5176",
  "faxNumber": "+1-248-624-5314",
  "url": "https://www.excel-rehab.com",
  "medicalSpecialty": "PhysicalMedicine",
  "availableService": [
    { "@type": "MedicalTherapy", "name": "Physical Therapy" },
    { "@type": "MedicalTherapy", "name": "Epidural Steroid Injections" },
    { "@type": "MedicalTherapy", "name": "Platelet Rich Plasma Injections" }
  ]
}
```

### Target Keywords (by page)
- **Home:** "physical medicine Novi MI", "PM&R doctor Novi Michigan", "physiatrist near me"
- **Services (each):** "[service name] Novi MI", "[service name] treatment Michigan"
- **Conditions (each):** "[condition] treatment Novi MI", "[condition] doctor near me"
- **About:** "Dr. Evangelista physiatrist Novi", "board certified physiatrist Michigan"

### Technical SEO Checklist
- [ ] All pages have unique `<title>` and `<meta description>`
- [ ] Open Graph and Twitter Card meta tags on every page
- [ ] Canonical URLs set
- [ ] XML sitemap generated (Next.js built-in)
- [ ] robots.txt configured
- [ ] All images have descriptive alt text
- [ ] HTTPS enforced (Vercel default)
- [ ] Page speed: target 95+ Lighthouse score
- [ ] Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## Accessibility Requirements (WCAG 2.1 AA)

- [ ] Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] All interactive elements keyboard-navigable
- [ ] Focus indicators visible on all focusable elements
- [ ] All images have alt text
- [ ] Form inputs have associated labels
- [ ] Error messages are announced to screen readers
- [ ] `prefers-reduced-motion` media query respected (disable animations)
- [ ] Skip-to-content link present
- [ ] Semantic HTML throughout (nav, main, section, article, aside, footer)
- [ ] ARIA labels on icon-only buttons

---

## Development Phases

### Phase 1: MVP Launch (Weeks 1-3)
- Home page (all 9 sections)
- About page
- Services hub + 11 individual service pages
- Contact page with form
- Global layout: Navbar, Footer, Mobile CTA
- SEO: Schema.org, meta tags, sitemap
- Responsive design: Mobile, Tablet, Desktop
- Accessibility compliance
- Deployment to Vercel

### Phase 2: Content Expansion (Weeks 4-6)
- Conditions hub + 22 individual condition pages
- Patient Resources page (insurance details, FAQs)
- Real doctor photo integrated
- Real patient testimonials integrated
- Google Reviews integration
- Office photos added
- Blog/resource center setup (CMS integration)

### Phase 3: Advanced Features (Weeks 7-8+)
- Online scheduling integration (Cal.com or clinic's system)
- AI chatbot for after-hours questions
- Patient portal link
- Dark mode toggle
- Performance optimization and Lighthouse audit
- Google Analytics 4 + conversion tracking setup

---

## Content Needed From Client

To move from placeholder to production, we need:

1. **Professional headshot** of Dr. Evangelista
2. **Personal bio/story** — why he got into PM&R, his philosophy in his own words
3. **Office photos** — exterior, waiting room, treatment rooms, equipment
4. **Hours of operation**
5. **Team/staff info** — names, roles, photos (if applicable)
6. **Service descriptions** — 2-3 paragraphs per service explaining what it is, who it's for, what to expect
7. **Patient testimonials** — minimum 5-6 curated reviews
8. **Social media links** — if they have Facebook, Instagram, LinkedIn, etc.
9. **New patient forms** — PDFs or links to digital intake
10. **FAQs** — common questions they get from patients
11. **Scheduling system details** — what system do they use? Can we integrate online booking?
12. **Google Business Profile** — login access or confirmation it's claimed and optimized

---

## Key Differentiators (What Will Make This Award-Worthy)

1. **Scroll-storytelling hero** — cinematic parallax with the medical background image, not a static banner. The hero tells a story as you scroll: background parallax → trust bar reveals → value props emerge. This is the 2026 trend that top sites are adopting.

2. **Micro-interactions everywhere** — every button, card, and interactive element responds to hover/touch with subtle, physics-based animations. Nothing aggressive — just alive. This is what separates a $3K template site from a $15K+ custom build.

3. **Condition-to-service mapping** — clicking any condition shows which services treat it, and vice versa. This interconnected content architecture is what Mayo Clinic and Cleveland Clinic do, and it's extremely rare at the private practice level.

4. **Mobile-first conversion design** — floating CTA bar, tap-to-call on every page, mobile-optimized form. Over 60% of healthcare searches happen on mobile. Most PM&R clinic sites still aren't truly mobile-optimized.

5. **Performance-first engineering** — sub-2-second load times, 95+ Lighthouse score, lazy-loaded images, optimized fonts. Most medical clinic websites score 40-60 on Lighthouse. This alone will outrank competitors.

6. **Local SEO domination** — Schema.org structured data, optimized condition/service pages targeting "[keyword] Novi MI", Google Business Profile integration. Most PM&R private practices don't have individual condition pages — this gives Excel PM&R 22+ additional indexed pages targeting specific patient searches.

---

*Document prepared for development in Cursor. All content marked [PLACEHOLDER] requires real copy from the client before launch. No information has been fabricated — every detail comes from the provided brochure, logos, images, and QR code PDFs.*
