# BeOnline Express — "Excel se Software, 7 din mein"

## Context
beonline.club currently presents itself as a dark-neon "Full-Stack Engineering for Startups" studio. The real opportunity (seen while building software for a ₹5–6 Cr suit manufacturer) is the huge number of Indian MSMEs that run on Excel and see software companies as expensive and out of reach. The goal: reposition beonline.club as the **most reachable, affordable, fastest** software provider, starting at ₹9,999 with a live v1 in 7 days. The homepage gets replaced; the startup offer becomes a secondary lane.

Decisions made: replace the homepage · bright Blinkit-like look · English with Hinglish hooks · promise = **live v1 in 7 days, then weekly updates, backed by a guarantee**.

---

## Part 1 — Refined idea (the "Blinkit plan")

Blinkit does not deliver *everything* in 10 minutes. It delivers a **curated catalog from dark stores that are already stocked**. The speed is an operations model, not heroics. Mapped to software:

| Blinkit | BeOnline Express |
|---|---|
| Dark stores with pre-stocked goods | **Module library**: pre-built, tested blocks (Orders, Inventory, Job cards/Production, Billing & GST invoice, Customers/CRM, Staff & Payroll, Payments ledger, Reports, WhatsApp alerts, Roles/Login). About 80% of each build is assembled; 20% is custom. |
| Limited SKUs, shown with ETAs | **Software Menu**: industry kits (Garment/Textile manufacturing, Traders & Distributors, Clinics, Coaching institutes, Restaurants/Cloud kitchens, Retail shops, Service businesses), each with "from ₹X · live in 7 days" |
| Cart with a live total and ETA | **"Build your software" configurator**: tick modules, see the one-time price, monthly price and delivery date instantly |
| Live order tracking | **Day 0→7 tracker**: the customer sees progress (and gets it on WhatsApp) |
| Tiny minimum order, delivery fee | **₹9,999 entry**, then a small monthly fee (hosting, backups, support, updates included) |
| "Delivered in X min" guarantee | **7-day go-live guarantee**: miss it and the first 3 months are free (the exact terms are yours to set) |

**Core offer, stated plainly:** *"Send us your Excel on WhatsApp. Get a free demo of your software in 48 hours. Go live in 7 days. From ₹9,999."*

The **"WhatsApp your Excel → 48-hour free demo"** hook is the key conversion idea. It removes every barrier: no brief to write, no meeting, no jargon. The owner forwards the files they already have.

**Why "Software-as-a-Subscription" works:** a small one-time fee plus monthly billing means the customer never deals with hosting, servers or developers. You get recurring revenue. The customer can export their data anytime, which builds trust.

**Honest guardrails I'd build into the messaging:**
- Promise "live v1 in 7 days", not "full product in 7 days". Weekly updates after that show visible momentum.
- The ₹9,999 plan needs a clearly defined scope (e.g. up to 3 modules, 5 users). Otherwise every lead expects ₹1 Cr of software for ₹9,999.
- Remove unverifiable claims from the current site ("Clutch Top Developer", "500+ projects", "10+ countries") unless they're true. MSME owners buy on trust, and the suit-manufacturer story is worth more than any badge.
- Startups/MVP is a crowded market (AI app builders, freelancers). Keep it as a secondary lane that links to the existing [/lp/build](src/app/lp/build/page.tsx) rather than splitting the homepage message.

**Proposed pricing** (placeholders in one config file so you can edit them):
| Plan | One-time | Monthly | Scope | Live in |
|---|---|---|---|---|
| Starter | ₹9,999 | ₹999 | up to 3 modules, 5 users, Excel import | 7 days |
| Business | ₹49,999 | ₹2,999 | up to 8 modules, 25 users, WhatsApp alerts, reports | 7 days (v1) |
| Custom | from ₹2 L | usage-based | anything, integrations, mobile app | v1 in 7 days, weekly after |

---

## Part 2 — Homepage structure (top to bottom)

1. **Sticky nav (light)**: logo · Software Menu · Pricing · How it works · For Startups · green "WhatsApp us" button. On mobile, a sticky bottom bar with WhatsApp + Call.
2. **Hero**: H1 "Your business has outgrown Excel." Sub: "Get your own custom software — **live in 7 days, from ₹9,999**." Hinglish kicker: *"Excel mein business chalana band karo."* Primary CTA: **"WhatsApp your Excel → Free demo in 48 hrs"**. Secondary: "See price in 30 sec". Trust chips: ⚡ 7-day go-live · ₹ No hidden cost · 🛠 We do everything.
   Signature visual: an **animated spreadsheet that turns into an app dashboard** (grid cells rearrange into cards and charts), built in framer-motion.
3. **"Sound familiar?" pain grid** (Hinglish-flavoured): "Kaunsi Excel file latest hai?", orders missed, stock mismatch, staff can't update from the shop floor, owner can't see today's numbers on the phone, file got corrupted.
4. **Before → After strip**: Excel row vs. the same data as an app screen (the suit manufacturer example: order → fabric → cutting → stitching → delivery).
5. **How 7 days works (Blinkit tracker style)**: a horizontal progress line. Day 0 you send Excel on WhatsApp → Day 2 free demo → Day 3 you approve and pay → Day 4–6 we build and import your data → Day 7 live and staff trained → every week: new updates.
6. **Software Menu**: industry kit cards with an emoji/icon, "What you get" bullets, "from ₹X · 7 days", and an "I want this" link that opens WhatsApp with a prefilled message naming that kit.
7. **Build-your-software configurator**: module checkboxes → live one-time price, monthly price and "Live by <date = today+7>". CTA sends the selection to WhatsApp.
8. **Pricing**: 3 plan cards plus "Everything included" (hosting, backups, SSL, updates, WhatsApp support, data export anytime). The ₹10k–₹10 Cr range stated as "From a 5-person shop to a 500-person factory".
9. **Case study**: the suit manufacturer (anonymised unless you get permission): "₹5–6 Cr business, 14 Excel sheets → 1 app", with 2–3 concrete before/after metrics you provide.
10. **Guarantee band**: live in 7 days or 3 months free · your data is always yours · cancel anytime with a full export.
11. **For Startups lane**: "Need an investor-demo MVP? Also 7 days." → `/lp/build`.
12. **FAQ**: Is ₹9,999 real? What's the catch? What if I need changes later? Who hosts it? What if I stop paying? Do I need a computer? (No, it works on the phone.) Can you visit our office?
13. **Final CTA + footer**: repeat the WhatsApp Excel CTA, phone, email, address.

---

## Part 3 — Implementation

**Step 0 (first, before any code):** copy this plan as-is to `docs/beonline-express-plan.md` in the project (create the `docs/` folder).

**Design system (bright):** off-white `#FFFDF6` background, ink `#111`, primary Blinkit-ish yellow `#F8CB46` for highlights and CTAs, WhatsApp green `#25D366` for chat CTAs, and one deep-green `#0C831F` accent for "live/delivered" states. Keep the Space Grotesk (headings) and Inter (body) fonts already loaded in [layout.tsx](src/app/layout.tsx). Big type, rounded-2xl cards, soft shadows, no particles and no custom cursor.

**Files:**
- `src/lib/express.ts` (new): the single config for WA number (reuse `918000511720` from [lp/build/page.tsx](src/app/lp/build/page.tsx#L8)), the `waLink(msg)` helper, plans, modules with prices, industry kits, FAQs, pain points. All copy and prices are editable in one place.
- `src/components/express/` (new): `ExpressNav`, `Hero` (+ `ExcelToApp` animation), `PainPoints`, `BeforeAfter`, `SevenDayTracker`, `SoftwareMenu`, `Configurator` (client component, `useState`), `Pricing`, `CaseStudy`, `Guarantee`, `StartupLane`, `FAQ`, `FinalCTA`, `ExpressFooter`, `MobileStickyBar`.
- [src/app/page.tsx](src/app/page.tsx): compose the new sections.
- [src/app/layout.tsx](src/app/layout.tsx): move `Navbar` + `CustomCursor` out of the root layout into [lp/build/layout.tsx](src/app/lp/build/layout.tsx) and [lp/fintech/layout.tsx](src/app/lp/fintech/layout.tsx) so the landing pages keep their dark look. Update metadata, keywords (e.g. "custom software for small business India", "Excel to software", "billing inventory software for manufacturers") and the JSON-LD description. Fix the JSON-LD logo URL, which currently points at theweddingmanual.com.
- Old components (`Hero.tsx`, `Services.tsx`, `Stats.tsx`, etc.) stay in the repo, unused by the homepage. Delete them later if you want.
- [globals.css](src/app/globals.css): make sure the body background and colors don't force the dark theme on the homepage (scope dark styles if needed).
- The contact API ([api/contact/route.ts](src/app/api/contact/route.ts)) is kept as-is. The primary conversion path is WhatsApp.

**Images via the cf-flux skill:** generate (1) a hero-side illustration of an Indian garment workshop owner holding a phone with a clean dashboard, bright flat style, and (2) an OG image, saved to `public/`. Use a CSS/SVG fallback if generation fails or doesn't fit the style.

---

## Verification
- `npm run build` and `npm run lint` pass.
- `npm run dev`: check `/` at 375px and 1440px with Playwright screenshots. No horizontal scroll, the sticky mobile WhatsApp bar shows, the configurator totals update and the "Live by" date is correct, and every WhatsApp CTA opens `wa.me/918000511720` with the right prefilled text.
- Check that `/lp/build` and `/lp/fintech` still render with their dark nav and cursor.
- Lighthouse check on mobile: performance and accessibility (contrast of yellow CTAs with dark text).
