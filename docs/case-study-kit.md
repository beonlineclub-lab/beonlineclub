# Case study kit

How to collect proof from a client and publish it in [src/lib/caseStudies.ts](../src/lib/caseStudies.ts). Fields left as `null` stay hidden on the site, so publish only what the client has confirmed.

## 1. Ask for permission (WhatsApp)

> Namaste ji! Your software has been running for a while now, and we'd like to share your story on our website so other businesses can see what's possible. We'll show only what you approve. We can keep your business name hidden, and we'll blur every name and amount in screenshots. Would that be okay? We'd need about 15 minutes of your time.

Get a clear "yes" in writing. Note what they agreed to: business name or anonymous, city, turnover range, photo, video.

## 2. Interview questions (15 minutes)

Ask for numbers, but write down what they actually say. Don't round up.

| Ask | Goes into |
|---|---|
| Before the software, how long did it take to prepare the daily order or production report? And now? | `metrics` |
| How long did month-end karigar payments take before? And now? | `metrics` |
| How many Excel sheets or registers were you maintaining? How many are still in use? | `sheetsReplaced` |
| How did status move from the floor to you before (calls, WhatsApp, re-typing)? How many of those steps are gone? | `handoffsRemoved` |
| Today, how do you check where an order is? Describe your morning. | `ownerTracking` (their words) |
| Has anything gone wrong less often since (wrong delivery dates, fabric shortages, payment disputes)? | `metrics`, only if they can give a rough number |
| If another owner asked you about BeOnline, what would you tell them? | `quote` |

## 3. Screenshot

- Take it from their live system on a real working day, not the demo data.
- Blur customer names, phone numbers and amounts. Keep the structure, stages and counts readable.
- Save it as `public/case-studies/<name>.png` (around 1200×800) and set `screenshot` with an `alt` that describes what the screen shows.
- Ask the client to approve the blurred version.

## 4. Short video (optional, strongest proof)

A 60–90 second phone video of the owner (or manager) answering two questions: "What was the problem?" and "What changed?". Hindi is fine; add English subtitles. Upload to YouTube (unlisted is fine) and set `videoUrl`.

## 5. Seller case study (separate)

Don't use the manufacturing results as proof for marketplace sellers. When the first founding seller has run on the system for 4–6 weeks, collect:

- Cancellations caused by stock mismatch, per week: before → after
- Late dispatches (SLA breaches), per month: before → after
- Time spent on daily stock updates across panels: before → after
- People working on sheets: before → after
- Short-paid orders found through reconciliation
- Which channels are connected and how (report upload or API). State this plainly.

Then set `sellerCase` in `caseStudies.ts`. It appears automatically on `/ecommerce-sellers`, and the "will be published here" note disappears.
