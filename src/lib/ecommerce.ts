// ─── BeOnline for Marketplace Sellers — copy & pricing for /ecommerce-sellers ──
// Prices, spot counts and calculator assumptions are proposals; edit freely.
// Marketplace names are used as plain text only (no logos, no implied partnership).

export const WA_SELLER_MSG =
  "Hi BeOnline! I sell on Amazon / Flipkart / Myntra / Meesho, around __ orders a day. I'd like a free demo. I'll share my stock sheet here.";

export const WA_CHECKLIST_MSG =
  "Hi BeOnline! Please send me the free Festive Sale Readiness Checklist for marketplace sellers.";

export const channels = ["Amazon", "Flipkart", "Myntra", "Meesho", "Ajio", "Your own website"];

// Founding Seller Program: discounted builds in exchange for a testimonial.
export const FOUNDING_SPOTS_TOTAL = 5;
export const FOUNDING_SPOTS_LEFT = 3;

export const sellerPains = [
  { emoji: "📉", title: "Sold 12, had only 4", body: "Overselling means cancellations, and cancellations hurt your account health and ranking." },
  { emoji: "⏰", title: "Dispatch deadline missed", body: "One missed SLA brings a penalty and lower visibility, and nobody saw it coming." },
  { emoji: "📦", title: "Sheet says 200, godown says 140", body: "Stock numbers drift every day, and nobody knows which one to trust." },
  { emoji: "↩️", title: "Returns pile up, unrecorded", body: "RTO and customer returns come back, but stock never gets updated." },
  { emoji: "💸", title: "The payout looks short", body: "Fees, commissions and deductions eat into settlements, and finding which order caused it takes days." },
  { emoji: "👥", title: "“Who changed this cell?”", body: "Ten people editing the same sheet, with no history and no accountability." },
  { emoji: "🪔", title: "Sale week = 2 AM nights", body: "Big Billion Days or Great Indian Festival, and the whole team still misses orders." },
  { emoji: "🔁", title: "Same stock, five panels", body: "Updating quantity on every seller panel by hand, one SKU at a time." },
];

export const sellerModules = [
  { title: "One stock, every channel", body: "A single live stock count. Sell on one marketplace and the rest know about it." },
  { title: "SKU mapping, combos & variants", body: "Map each channel's SKU to your master SKU, including sizes, colours and bundles." },
  { title: "Dispatch SLA board", body: "Due today, at risk and breached, at a glance. Your team works the riskiest orders first." },
  { title: "Picklists & packing", body: "Printed picklists by bin or rack, with packing and handover tracked on the phone." },
  { title: "Returns & RTO tracker", body: "Every return logged against the order. Good stock goes back to inventory automatically." },
  { title: "Payment reconciliation", body: "Settlement vs order, with fees and commissions checked. See exactly which orders were short-paid." },
  { title: "Low-stock alerts on WhatsApp", body: "Reorder alerts before you run out, especially on your best sellers." },
  { title: "Purchase & vendor inward", body: "Purchase orders, goods received and vendor dues in the same system." },
  { title: "Owner dashboard on phone", body: "Today's orders, dispatches, returns and payouts, without opening a laptop." },
  { title: "Staff roles & audit log", body: "Everyone sees only what they need, and every change shows who made it." },
];

export const nineAm = {
  before: [
    "Download order reports from every seller panel",
    "Merge them into the master sheet by hand",
    "Call the godown to check what's actually in stock",
    "Guess which orders are closest to their dispatch deadline",
    "Fix yesterday's sheet mistakes before starting today",
  ],
  after: [
    "Open the phone: 142 orders due today, 6 at risk",
    "Picklists already printed for the packing team",
    "Stock already updated from yesterday's sales and returns",
    "WhatsApp alert: 11 SKUs need reordering",
    "Last week's payouts matched, 3 short-paid orders flagged",
  ],
};

export const sellerSteps = [
  { day: "Day 0", title: "Send your stock sheet", body: "Forward your stock sheet and one order report from each marketplace on WhatsApp. Messy is fine." },
  { day: "Day 2", title: "Free demo with your SKUs", body: "See your own products, orders and stock inside your own software, free." },
  { day: "Day 3", title: "Approve & start", body: "We agree the v1 scope, price and go-live date in writing. Then you pay the setup fee." },
  { day: "Day 4–6", title: "We build & import", body: "Your channels, SKU mapping and old data imported and checked, with daily updates on WhatsApp." },
  { day: "Day 7", title: "Live, team trained", body: "Logins for owner, managers, packers and accounts. Training on-site or on video." },
  { day: "Every week", title: "Channel by channel automation", body: "We start with report uploads, then add direct API sync where the marketplace allows it." },
];

// Comparison: plain words, no competitor names.
export const sellerComparison = {
  cols: ["Excel", "Big multichannel tools", "BeOnline"],
  rows: [
    { label: "Fits how your team works", values: ["Somewhat", "You adapt to the tool", "Built around your workflow"] },
    { label: "Cost for a 5–50 person team", values: ["Hidden in staff hours", "High, per user / per order", "Fixed, from ₹79,999 + monthly"] },
    { label: "Time to go live", values: ["—", "Weeks of onboarding", "7 days"] },
    { label: "Changes when you need them", values: ["Whoever knows the formulas", "Feature request queue", "Weekly updates, on WhatsApp"] },
    { label: "A real person to talk to", values: ["—", "Ticket support", "One named contact"] },
    { label: "Your data", values: ["On someone's laptop", "In their system", "Yours, export anytime"] },
  ],
};

export const sellerTrust = [
  { title: "Your seller logins stay with you", body: "We start with reports you download and share. We never ask for your marketplace password." },
  { title: "Read-only first", body: "When we add API sync, it starts read-only. Nothing is pushed to your seller panel without your approval." },
  { title: "Daily backups", body: "Your data is backed up every day, with secure logins and SSL." },
  { title: "Export anytime", body: "All your data in Excel, whenever you want it, including if you stop using us." },
];

export const sellerPlans = [
  {
    name: "Growing Seller",
    tag: "Up to 100 orders a day",
    price: "₹79,999",
    monthly: "+ ₹4,999 / month",
    points: [
      "Up to 3 marketplaces",
      "Single stock master & SKU mapping",
      "Dispatch SLA board",
      "Returns & RTO tracker",
      "Low-stock alerts on WhatsApp",
      "Up to 10 users",
    ],
    highlight: false,
  },
  {
    name: "Scaling Brand",
    tag: "Up to 1,000 orders a day",
    price: "₹1,89,999",
    monthly: "+ ₹19,999 / month",
    points: [
      "All marketplaces + your website",
      "Combos, bundles & variants",
      "Picklists & packing workflow",
      "Payment reconciliation",
      "Purchase & vendor inward",
      "Up to 50 users with roles & audit log",
    ],
    highlight: true,
  },
  {
    name: "Custom",
    tag: "Warehouses & large teams",
    price: "Let's talk",
    monthly: "Usage-based",
    points: [
      "Multiple warehouses & GSTINs",
      "Direct API sync where available",
      "Custom reports & automations",
      "Barcode scanning on the floor",
      "Priority support during sale events",
    ],
    highlight: false,
  },
];

export const sellerFaqs = [
  {
    q: "Do you integrate directly with Amazon and Flipkart?",
    a: "We start with the reports you already download (orders, returns, settlements), so you can go live in 7 days. After that we add direct API sync channel by channel, where the marketplace offers one and you approve it.",
  },
  {
    q: "What about Meesho and Myntra?",
    a: "Both work through their downloadable reports from day one. Where an official integration is available for your account, we add it in the weekly updates.",
  },
  {
    q: "Is my seller account safe?",
    a: "Yes. We never ask for your marketplace password. We start with reports you share, and any API access starts read-only and needs your approval.",
  },
  {
    q: "Can it handle sizes, colours and combos?",
    a: "Yes. Every channel SKU is mapped to your master SKU, including variants and bundles, so selling a combo reduces stock of each item inside it.",
  },
  {
    q: "We have more than one warehouse. Does that work?",
    a: "Yes. Stock is tracked per location, and you can choose which warehouse fulfils which channel.",
  },
  {
    q: "What happens during a big sale when orders spike?",
    a: "The system is built for it, and we monitor closely during sale events. Plan to go live at least 2–3 weeks before a big sale so your team is comfortable with it.",
  },
  {
    q: "Can my packers use it on a phone?",
    a: "Yes. Picklists, packing and handover all work on a basic Android phone. No training manual needed.",
  },
  {
    q: "What if I stop paying?",
    a: "You get a full export of your data in Excel. Your stock, orders and history are always yours.",
  },
];

// ─── "What Excel is costing you" calculator ──────────────────────────────────
// Rough, openly stated assumptions. They are shown on the page next to the result.
export const calcDefaults = {
  ordersPerDay: 150,
  aov: 800,
  cancellationsPerWeek: 10,
  slaBreachesPerMonth: 15,
  peopleOnSheets: 6,
};

export const calcAssumptions = {
  marginOnLostOrder: 0.3, // share of order value you'd have kept as profit
  penaltyPerSlaBreach: 150, // ₹, average penalty / lost visibility per late dispatch
  hoursPerPersonPerDay: 2, // time each person spends on sheets that software would remove
  costPerHour: 150, // ₹, loaded staff cost per hour
  workDaysPerMonth: 26,
};
