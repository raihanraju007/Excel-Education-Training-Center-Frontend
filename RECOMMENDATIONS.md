# EETC — Product / System Analyst Recommendations

This document analyzes the EETC website as a Japan-focused education & visa agency. It covers what's already built, what's missing, and a prioritized roadmap for future improvements — viewed through the lens of a product manager and system analyst.

*Last updated: 2026-05-22*

---

## 1. What's Already Built (v1)

### Pages (12)
- **index.html** — Japan-first hero, 4-card services bento, JLPT levels banner (N5–N3 + JFT), process timeline, testimonials, FAQ
- **services.html** — Overview of all services (Student Visa, Job Visa (3 tracks), Japanese Language)
- **student-visa.html** — Student visa detail page
- **job-visa.html** — Unified work-visa page covering three pathways in one place:
  - **Engineer / Specialist** (`#engineer`) — Engineer / Humanities / International Services
  - **SSW** (`#ssw`) — Specified Skilled Worker, 14 industries
  - **Business Manager** (`#business`) — 経営・管理ビザ company-setup track
- **japanese.html** — JLPT N5 / N4 / N3 course catalog plus JFT-Basic (for SSW); NAT-TEST section
- **english.html** — Pre-IELTS / IELTS preparation
- **gallery.html** — Category-filterable photo gallery
- **about.html / contact.html / countries.html / faq.html / why-study-abroad.html**

### Course Curriculum (current data)
| Level | Duration | Kanji | Vocabulary | Class hours |
|---|---|---|---|---|
| N5 | 4 months | 120 | 800 | 180 hrs |
| N4 | 4 months | 300 | 1,500 | 180 hrs |
| N3 | 6 months | 650 | 3,000 | 250 hrs |
| JFT-Basic | 3 months | — | A2 (CEFR), computer-based | for SSW candidates |

### Office
- **Address**: 69/J, Panthapath, Dhaka-1205 (Opposite of Pani Bhaban)
- **Phone**: 01409993773-4
- **Email**: excel.education00@gmail.com

### Features
- Floating WhatsApp button (auto-injected on every page)
- Mobile sticky "Apply Now" bar
- Scroll-reveal animations (left, right, zoom, fade)
- Animated counters (years / students / partners / visa success rate)
- FAQ accordion
- Category-filtered gallery
- 14 SSW industries with Japanese names (介護, 建設, 農業 etc.)
- Brand-consistent green/dark-green theme + Japanese red accent
- Sakura background pattern on visa pages
- In-page jump links on Job Visa page (Engineer / SSW / Business tabs)
- Form-ready contact page with Google Maps embed (Panthapath location)

---

## 2. Critical Gaps (Add These First)

### Backend / Functionality
| Priority | Item | Why |
|---|---|---|
| 🔴 P0 | **Working contact form** | Currently shows a JS alert — needs PHP/Node backend or Formspree/Web3Forms integration to actually deliver inquiries to email |
| 🔴 P0 | **Live WhatsApp number verification** | Hardcoded `8801409993773` in `assets/js/main.js` — confirm this is a real WA Business number |
| 🔴 P0 | **Real photographs** | All current images are stock (Unsplash) — replace with photos of: actual office at Panthapath, real staff, real students, real classes, departure ceremonies, partner schools |
| 🔴 P0 | **Replace placeholder testimonials** | Current names (Rakib/Farhana/Sajid) are fictional — collect real student quotes + photos with consent |
| 🔴 P0 | **Real social media URLs** | Footer links go to `#` — wire up Facebook/YouTube/LinkedIn/Instagram |
| 🔴 P0 | **Domain decision** | Old `eetcbd.com` website link has been removed since email moved to gmail. Decide: get a new domain (e.g. `excel-edu.com.bd`) or stay on gmail/social-only |

### Trust Signals
| Priority | Item | Why |
|---|---|---|
| 🟡 P1 | **License / accreditation badges** | Show BAIRA, embassy registration, partner-school logos to build trust |
| 🟡 P1 | **Counselor team page** | Photo + bio + Japanese-language credentials of each counselor |
| 🟡 P1 | **Real visa statistics** | 98% success rate, 100+ students — back with actual numbers |
| 🟡 P1 | **Google Reviews / Facebook reviews integration** | Show ★ ratings live on homepage |

### Lead Generation
| Priority | Item | Why |
|---|---|---|
| 🟡 P1 | **Free assessment form** | "Find your Japan track in 2 minutes" — multi-step quiz that suggests Student / Job Visa (Engineer / SSW / Business) |
| 🟡 P1 | **Cost calculator** | Tuition + living + visa fees by sector — capture lead emails to send full breakdown |
| 🟡 P1 | **Newsletter signup** | Capture future students for monthly updates |
| 🟡 P1 | **Apply Online form per track** | Pre-filled inquiry forms with file upload (passport, transcripts) |

---

## 3. Phase 2 Features

### Multi-language Support
- Add **Bangla (বাংলা)** version — most students read Bangla more comfortably than English
- Add **Japanese (日本語)** version — for partner schools and employers reviewing the site
- Use a top-bar language switcher

### Interactive Tools
- **JLPT Practice Quiz** — free vocab/kanji quiz for N5–N3 (lead magnet)
- **Visa Eligibility Checker** — interactive form that returns "You qualify for SSW Construction" type results
- **Document Checklist Generator** — pick visa type → get downloadable PDF checklist
- **Course Schedule / Batch Calendar** — shows next intake dates with 1-click registration

### Content / SEO
- **Blog section** — 1 post/week on topics like "How to apply for SSW caregiving 2026", "JLPT N3 study tips", "Cost of living in Tokyo for Bangladeshi students" — drives organic traffic
- **Success story pages** — full long-form articles with photos
- **Country / city guides** — Tokyo, Osaka, Kyoto, Fukuoka — what life is like there
- **Comparison tables** — Engineer Visa vs SSW vs Business Manager (since these now live on one page, deep-link from comparison tables to anchors `#engineer`, `#ssw`, `#business`)

### Operations
- **Admin panel / CMS** — let staff add new gallery images, blog posts, success stories without dev help
- **Inquiry management** — incoming WhatsApp/form inquiries logged with status (new / contacted / enrolled)
- **CRM lite** — tag students by stage (counseling / language / COE / visa / departed)
- **Receipt / invoice download** — students log in to download payment receipts

### Mobile Experience
- **Progressive Web App (PWA)** — installable on Android with offline support
- **App-style notifications** — batch start dates, JLPT registration deadlines

---

## 4. Phase 3 (Scale)

- **Online Japanese learning portal** — paid premium content with video lessons
- **Live virtual classes via Zoom** — for students outside Dhaka
- **Partner-school portal** — schools log in to view your forwarded applications
- **Employer portal (Job Visa / SSW)** — employers post jobs, see candidate CVs
- **Mobile app** — class schedule, homework, mock test, payments
- **Referral program** — current students refer new ones, get discount
- **Analytics dashboard** — Google Analytics 4 + Hotjar to see drop-off points

---

## 5. Performance & Technical Improvements

| Now | Improvement | Benefit |
|---|---|---|
| Tailwind CDN | Switch to compiled Tailwind CSS | 90% smaller CSS, faster load |
| Stock images via Unsplash | Self-host optimized WebP/AVIF in `/assets/img/` | No external dependency, faster |
| Per-page duplicated header/footer | Use a static-site generator (Eleventy / Astro) or PHP includes | One source of truth for nav |
| No analytics | Add Google Analytics 4 + Microsoft Clarity heatmap | Understand user behavior |
| No SEO sitemap | Add `sitemap.xml` and `robots.txt` | Better Google indexing |
| Limited Open Graph | Expand OG tags + Twitter cards | Pretty links when shared on FB/WhatsApp |
| No structured data | Add JSON-LD schema (Organization, Course, FAQ) | Rich snippets in Google results |
| Single domain (TBD) | Acquire `.com.bd` domain + HTTPS via Let's Encrypt + Cloudflare CDN | Security, branding, global speed |
| Forms in JS only | Add reCAPTCHA / honeypot | Prevent spam |
| English-only | i18n routing `/bn/`, `/jp/` | Reach more users |

---

## 6. Marketing & Acquisition (PM lens)

The website is just step 1. To actually fill batches, EETC needs:

1. **Facebook page + paid ads** (your audience is in Bangladesh on FB)
2. **YouTube channel** — student vlogs from Japan, JLPT tips, "day in the life" content
3. **TikTok / Reels** — short Japan-life clips from current students
4. **Google Business Profile** — show up when people search "Japan agency Panthapath Dhaka"
5. **Partnership with universities in BD** — career fairs at private universities (NSU/BRAC/AIUB)
6. **Free public seminars** — "Study in Japan 2026" webinars (capture emails)
7. **Direct outreach to Bangladesh Japanese-language clubs** at universities

---

## 7. Compliance / Legal

- Add **Privacy Policy** page (required for forms collecting data)
- Add **Terms of Service** page
- Add **Refund Policy** for course fees
- **GDPR-style cookie consent** banner (if targeting EU/UK at all)
- Disclose **agent/recruiter status** clearly per Japanese embassy guidelines
- Display **BAIRA / overseas employment license** number visibly

---

## 8. Suggested Sprint Plan

**Sprint 1 (1 week)** — make it real
- Replace stock images with real EETC photos (especially the new Panthapath office)
- Wire contact form to a backend (Formspree / Web3Forms is free + 5-min setup)
- Add real social links + correct WhatsApp number
- Collect 3-5 real student quotes & photos for testimonials
- Decide on a domain (gmail address is okay short-term, but a `.com.bd` domain looks more professional)

**Sprint 2 (1–2 weeks)** — capture leads
- Free assessment quiz (HTML form → email)
- Newsletter signup
- Add Bangla version of homepage
- Google Analytics + sitemap

**Sprint 3 (2–3 weeks)** — content engine
- Set up blog (use a headless CMS like Strapi or just Markdown files)
- Publish first 6 blog posts
- Success story long-form pages
- Add video gallery with real YouTube embeds

**Sprint 4 (ongoing)** — admin tools
- Inquiry log / simple CRM
- Bangla + Japanese translations across all pages
- PWA support

---

## 9. Quick Wins Right Now (No Code)

1. **Update WhatsApp number** in `assets/js/main.js` — change `8801409993773` to your real WhatsApp Business number
2. **Update social links** in footer of each page (currently `#`)
3. **Replace stock photos** in `assets/img/` with real photos (priority: new Panthapath office photo)
4. **Verify office hours** in `contact.html` and `faq.html` (currently Sat–Thu 9:30 AM – 6:30 PM)
5. **Confirm course pricing** — durations are now confirmed (N5: 4mo / N4: 4mo / N3: 6mo / JFT: 3mo); add fee schedule
6. **Decide on website domain** — currently no website URL is shown (eetcbd.com removed); if you get a new domain, add it back to the footer and contact card

---

## 10. Recent Changes Log

- **2026-05-22**: Removed `www.eetcbd.com` website link from footer and contact card (domain no longer in use); updated copyright year to 2026
- **2026-05-21**: Office address updated to **69/J, Panthapath, Dhaka-1205 (Opposite of Pani Bhaban)**; email migrated to **excel.education00@gmail.com**; Google Maps embed updated to new location
- **2026-05-21**: Japanese course catalog scoped to **N5–N3 + JFT-Basic** (removed N2/N1 cards); course data corrected: N5 (4mo/120 kanji/800 vocab/180 hrs), N4 (4mo/300/1,500/180), N3 (6mo/650/3,000/250)
- **2026-05-21**: Consolidated `ssw-visa.html` and `business-visa.html` into `job-visa.html` as anchored sections (`#ssw`, `#business`); reduced site from 14 pages to 12; updated all navigation dropdowns, mobile menus, footers and the services bento grid
