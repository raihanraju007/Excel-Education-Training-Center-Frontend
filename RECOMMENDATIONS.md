# EETC — Product / System Analyst Recommendations

This document analyzes the EETC website as a Japan-focused education & visa agency. It covers what's already built, what's missing, and a prioritized roadmap for future improvements — viewed through the lens of a product manager and system analyst.

---

## 1. What's Already Built (v1)

### Pages (13)
- **index.html** — Japan-first hero, services grid, JLPT levels, process timeline, testimonials, FAQ
- **services.html** — Overview of all 5 services
- **student-visa.html / job-visa.html / ssw-visa.html / business-visa.html** — Per-service detail pages
- **japanese.html** — JLPT N5–N1 course catalog with duration, kanji count, vocabulary, hours; JFT-Basic course for SSW
- **english.html** — Pre-IELTS / IELTS preparation
- **gallery.html** — Category-filterable photo gallery (Student Visa / Job Visa / SSW / Business / Language Classes / Events / Office)
- **about.html / contact.html / countries.html / why-study-abroad.html**

### Features
- Floating WhatsApp button (auto-injected on every page)
- Mobile sticky "Apply Now" bar
- Scroll-reveal animations (left, right, zoom, fade)
- Animated counters (years / students / partners / visa success rate)
- FAQ accordion
- Category-filtered gallery
- Full JLPT N5–N1 catalog with Japanese kanji labels
- 14 SSW industries with Japanese names (介護, 建設, 農業 etc.)
- Brand-consistent green/dark-green theme + Japanese red accent
- Sakura background pattern on visa pages
- Form-ready contact page with Google Maps embed

---

## 2. Critical Gaps (Add These First)

### Backend / Functionality
| Priority | Item | Why |
|---|---|---|
| 🔴 P0 | **Working contact form** | Currently shows a JS alert — needs PHP/Node backend or Formspree/Web3Forms integration to actually deliver inquiries to email |
| 🔴 P0 | **Live WhatsApp number verification** | Hardcoded `8801409993773` — confirm this is a real WA Business number |
| 🔴 P0 | **Real photographs** | All current images are stock — replace with photos of: actual office, real staff, real students, real classes, departure ceremonies, partner schools |
| 🔴 P0 | **Replace placeholder testimonials** | Current names (Rakib/Farhana/Sajid) are fictional — collect real student quotes + photos with consent |
| 🔴 P0 | **Real social media URLs** | Footer links go to `#` — wire up Facebook/YouTube/LinkedIn/Instagram |

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
| 🟡 P1 | **Free assessment form** | "Find your Japan track in 2 minutes" — multi-step quiz that suggests Student / Job / SSW / Business |
| 🟡 P1 | **Cost calculator** | Tuition + living + visa fees by sector — capture lead emails to send full breakdown |
| 🟡 P1 | **Newsletter signup** | Capture future students for monthly updates |
| 🟡 P1 | **Apply Online form per service** | Pre-filled inquiry forms for each visa type with file upload (passport, transcripts) |

---

## 3. Phase 2 Features

### Multi-language Support
- Add **Bangla (বাংলা)** version — most students read Bangla more comfortably than English
- Add **Japanese (日本語)** version — for partner schools and employers reviewing the site
- Use a top-bar language switcher

### Interactive Tools
- **JLPT Practice Quiz** — free vocab/kanji quiz on the site (lead magnet)
- **Visa Eligibility Checker** — interactive form that returns "You qualify for SSW Construction" type results
- **Document Checklist Generator** — pick visa type → get downloadable PDF checklist
- **Course Schedule / Batch Calendar** — shows next intake dates with 1-click registration

### Content / SEO
- **Blog section** — 1 post/week on topics like "How to apply for SSW caregiving 2026", "JLPT N3 study tips", "Cost of living in Tokyo for Bangladeshi students" — drives organic traffic
- **Success story pages** — full long-form articles with photos
- **Country / city guides** — Tokyo, Osaka, Kyoto, Fukuoka — what life is like there
- **Comparison tables** — SSW vs Student Visa vs Job Visa for non-experts

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
| No Open Graph tags | Add OG tags + meta cards | Pretty links when shared on FB/WhatsApp |
| No structured data | Add JSON-LD schema (Organization, Course, FAQ) | Rich snippets in Google results |
| Single domain | Add HTTPS via Let's Encrypt + CDN (Cloudflare) | Security + global speed |
| Forms in JS only | Add reCAPTCHA / honeypot | Prevent spam |
| English-only | i18n routing `/bn/`, `/jp/` | Reach more users |

---

## 6. Marketing & Acquisition (PM lens)

The website is just step 1. To actually fill batches, EETC needs:

1. **Facebook page + paid ads** (your audience is in Bangladesh on FB)
2. **YouTube channel** — student vlogs from Japan, JLPT tips, "day in the life" content
3. **TikTok / Reels** — short Japan-life clips from current students
4. **Google Business Profile** — show up when people search "Japan agency Dhaka"
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
- Replace stock images with real EETC photos
- Wire contact form to a backend (Formspree / Web3Forms is free + 5-min setup)
- Add real social links + correct WhatsApp number
- Collect 3-5 real student quotes & photos for testimonials

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

1. **Update WhatsApp number** in `assets/js/main.js` line 75 — change `8801409993773` to your real WhatsApp Business number
2. **Update social links** in footer of each page (currently `#`)
3. **Replace stock photos** in `assets/img/` with real photos
4. **Verify office hours** in `contact.html`
5. **Confirm pricing** on `japanese.html` (durations are estimates)

---

*Generated: 2025. For questions, just ask Claude.*
