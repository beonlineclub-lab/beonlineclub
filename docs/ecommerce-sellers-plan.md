# BeOnline for Marketplace Sellers: plan

## Context
A digital marketer told you that brands selling on Amazon, Flipkart, Myntra and Meesho run inventory on Excel. One brand had about 50 people maintaining sheets. When the sheets go wrong, the brand loses money: overselling, missed dispatch deadlines (TAT/SLA) that bring penalties, unclear stock, and chaos during festive sales. You want a new BeOnline page that makes these sellers think "these people understand my problem and can fix it" within a few seconds.

This fits BeOnline Express well. The current promise ("Send your Excel on WhatsApp → free demo in 48h → live in 7 days") is already what an Excel-heavy seller needs. The new page is a **vertical landing page** that reuses that engine and speaks only the seller's language.

---

## Part 1 — Product/market view (read this before building)

**1. "No one is doing it" is not accurate, and the page has to account for that.** Multichannel tools already exist in India: Unicommerce, EasyEcom, Browntape, Vinculum, Increff and others. Sellers who still use Excel have usually tried one of them and found it too expensive, too rigid for their workflow, or too complex for their staff. That is your gap. **Do not position as "inventory software". Position as "your own system, built around how your team already works, priced for growing sellers."** The page should say this openly. A comparison against "big multichannel tools" (no brand names) builds more trust than pretending there is no competition.

**2. Promise only what you can deliver in 7 days.**
- **v1 (7 days):** a single stock master, SKU mapping across channels, import of the marketplaces' order, return and settlement reports (CSV/Excel), a dispatch SLA board, low-stock and SLA alerts on WhatsApp, and team roles.
- **Phase 2 (weekly updates):** API sync where it is available (Amazon SP-API, Flipkart Seller API). Meesho and Myntra are mostly report or portal based, so start with uploads.
- Saying "we start with your reports, and automate channel by channel" is honest and still a huge step up from 50 people editing sheets.

**3. You don't have an e-commerce case study yet.** That is the biggest trust gap. Fix it before spending on ads:
- Use the marketer's network to interview 5–10 sellers this month. Ask about channels, orders per day, SKU count, team size, current tool, and their last expensive mistake.
- Run a **"Founding Seller Program"**: 3–5 sellers get a heavily discounted build in exchange for a testimonial and metrics. The page openly says "3 of 5 spots left". Scarcity is real here, and so is the honesty.
- Offer the marketer a referral commission (e.g. 10% of the first-year value). She is your best channel.

**4. Timing.** Festive sales (Great Indian Festival / Big Billion Days, Diwali, end-of-season sales) are the moment of peak pain. The pitch "be ready before the next big sale" creates urgency without fake countdowns.

---

## Part 2 — Page content (top to bottom)

Route: **`/ecommerce-sellers`** (indexable, in the nav as "For Sellers"). Use the same light Express design and the `/startups` page structure.

1. **Hero**
   - H1: *"Selling on Amazon, Flipkart, Myntra & Meesho? Stop running it on 20 Excel sheets."*
   - Sub: *"One live stock count across every marketplace, dispatch deadlines you never miss, and returns and payments that finally reconcile. Built around your team, live in 7 days."*
   - Hinglish kicker: *"Sale ke time pe stock ka tension khatam."*
   - Primary CTA: **"WhatsApp your stock sheet → free demo in 48 hrs"**. Secondary: "See what you're losing →" (scrolls to the calculator).
   - Chips: ⚡ Live in 7 days · 🔄 All channels, one stock · ⏱ Zero SLA misses · 🔒 Your data stays yours
   - Visual: a mock dashboard showing "Orders due today: 142 · At risk: 6 · Low stock: 11 SKUs", with marketplace names as text tags. **Don't use marketplace logos** (trademark, and it would imply a partnership).

2. **"Sound familiar?" pain grid**, in seller language:
   - Sold 12, only had 4: overselling leads to cancellations and hits your account health.
   - The dispatch deadline passed: the SLA breach brings a penalty and lower visibility.
   - The sheet says 200, the warehouse says 140.
   - Returns and RTO come back and nobody updates stock.
   - The payout looks short, and nobody knows which order or fee caused it.
   - Ten people editing one sheet: "Who changed this?"
   - Festive sale week: the whole team works till 2 am and still misses orders.

3. **"What Excel is really costing you" calculator** (client component, the main hook). Inputs: orders/day, cancellations per week, SLA breaches per month, people working on sheets, average order value. Output: an estimated monthly loss in ₹ (lost orders + penalty estimate + staff hours), with the assumptions shown openly. CTA: "Get a demo that fixes this."

4. **What you get** (module cards in seller words): Unified stock (one number, every channel) · SKU mapping and combos/bundles · Dispatch SLA board (due today / at risk / breached) · Picklists and packing · Returns and RTO tracker that restocks automatically · Payment reconciliation (settlement vs order, fee and commission check) · Low-stock and reorder alerts on WhatsApp · Purchase and vendor inward · Owner dashboard on phone · Staff roles and audit log ("who changed what").

5. **Before → After: "Your 9 AM, with and without BeOnline"**. Left: Excel chaos (merge sheets, call the warehouse, guess the stock). Right: open the phone, see 142 orders due, 6 at risk, pick lists already printed.

6. **Festive Sale Readiness band**: "Big sale coming? Go live before it." Show the 7-day timeline counted back from a sale date. Offer a free **"Festive Sale Readiness Checklist"** as a lead magnet (collected on WhatsApp).

7. **How it works in 7 days**: the Express journey reworded. Day 0: send your stock sheet plus one order report from each channel. Day 2: free demo with your own SKUs. Day 7: live, team trained. Then weekly updates: channel APIs, automations.

8. **Comparison table**: Excel vs big multichannel tools vs BeOnline. Rows: fits your workflow, cost for a 5–50 person team, setup time, changes when you need them, a person on WhatsApp, data ownership.

9. **Trust**: reuse the Trust pillars, plus the seller-specific ones: your marketplace logins are never shared, read-only report access first, daily backups, export anytime. **Founding Seller Program** card ("3 of 5 spots left"). The existing manufacturer case study as proof that you deliver.

10. **Pricing**, tiered by order volume (placeholders you can edit): Growing seller (up to 100 orders/day) · Scaling brand (up to 1,000/day) · Custom (warehouses, multiple GSTINs, APIs). Show "from ₹X + ₹Y/month".

11. **Seller FAQ**: Do you integrate with Amazon/Flipkart APIs? Is my seller account safe? What about Meesho and Myntra? Can it handle combos and variants (size/colour)? Multiple warehouses? What happens in a sale spike? Can my packers use it on a phone? What if I stop paying (data export)?

12. **Final CTA**: "Next sale, no Excel." WhatsApp button with a prefilled message: *"Hi BeOnline, I sell on __. ~__ orders/day. Want a free demo."*

---

## Part 3 — Go-to-market (after the page)
- **Week 1–2:** seller interviews through the marketer and sign 1–2 founding sellers. The page goes live with the founding-seller offer.
- **Channels:** marketer referrals · seller WhatsApp/Telegram/Facebook groups · LinkedIn posts by you (build-in-public from the pilot) · Google Search ads for "inventory software for amazon flipkart sellers", "multichannel inventory management india", "meesho seller inventory excel" · Hindi Reels/Shorts on the "sold 12, had 4" pain · outreach in seller clusters (Surat, Jaipur, Delhi/Gandhi Nagar, Tiruppur, Ludhiana).
- **Measure:** WhatsApp leads per week, demo → paid conversion, cost per lead. Swap in the real case study as soon as a pilot shows numbers.

---

Page: [src/app/(site)/ecommerce-sellers/page.tsx](../src/app/(site)/ecommerce-sellers/page.tsx) · copy, prices and calculator assumptions: [src/lib/ecommerce.ts](../src/lib/ecommerce.ts)
