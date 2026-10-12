// ─── BeOnline Express — single source of truth for copy, prices & links ──────
// Edit numbers/text here; every homepage section reads from this file.

export const WA_NUMBER = "919571058866";
export const PHONE_DISPLAY = "+91 957105 8866";
export const EMAIL = "beonlineclub@gmail.com";

export const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const PHONE_LINK = `tel:+${WA_NUMBER}`;

export const WA_EXCEL_MSG =
  "Hi BeOnline! I run my business on Excel. I'd like a free demo of my own software. I'll share my Excel sheets here.";

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

// ─── Pain points ──────────────────────────────────────────────────────────────
export const painPoints = [
  { emoji: "📂", title: "“Kaunsi file latest hai?”", body: "Five copies of the same sheet on five phones. Nobody knows which one is right." },
  { emoji: "📦", title: "Stock never matches", body: "The sheet says 40 metres of fabric. The godown says 12." },
  { emoji: "⏰", title: "Orders slip through", body: "A delivery date lives in one cell that nobody opened this week." },
  { emoji: "🏭", title: "Shop floor can't update", body: "Staff call or WhatsApp you, and you type it into Excel at night." },
  { emoji: "📱", title: "No numbers on your phone", body: "You want today's sales and dues, but the laptop is at the office." },
  { emoji: "💥", title: "One crash, months lost", body: "A corrupted file or a deleted row, and there is no backup." },
];

// ─── 7-day journey ────────────────────────────────────────────────────────────
export const journey = [
  { day: "Day 0", title: "Send your Excel", body: "Forward your sheets on WhatsApp. No brief, no meeting." },
  { day: "Day 2", title: "Free demo", body: "See your own data inside your own software, free." },
  { day: "Day 3", title: "Approve & start", body: "Like it? Pay the one-time fee. We lock the scope together." },
  { day: "Day 4–6", title: "We build", body: "Your workflows, your data imported, daily updates on WhatsApp." },
  { day: "Day 7", title: "You're live", body: "Staff trained on phone and laptop. Excel retired." },
  { day: "Every week", title: "It keeps improving", body: "New features and fixes ship weekly. No new contract needed." },
];

// ─── Module library (configurator) ────────────────────────────────────────────
export type Module = { id: string; name: string; hint: string; setup: number; monthly: number; core?: boolean };

export const modules: Module[] = [
  { id: "login", name: "Login & staff roles", hint: "Owner, manager and staff each see only their part", setup: 0, monthly: 0, core: true },
  { id: "excel", name: "Excel data import", hint: "All your old sheets moved in, cleaned", setup: 0, monthly: 0, core: true },
  { id: "orders", name: "Orders", hint: "Every order, status and due date in one place", setup: 3000, monthly: 300 },
  { id: "inventory", name: "Stock & inventory", hint: "Raw material and finished goods, live", setup: 14000, monthly: 1300 },
  { id: "production", name: "Production / job cards", hint: "Track each piece stage by stage", setup: 15000, monthly: 1400 },
  { id: "billing", name: "Billing & GST invoices", hint: "Invoices in one tap, shared as a PDF", setup: 14000, monthly: 1300 },
  { id: "customers", name: "Customers & dues", hint: "Who owes what, with payment reminders", setup: 13000, monthly: 1200 },
  { id: "staff", name: "Staff, attendance & payroll", hint: "Piece-rate or monthly salary, calculated", setup: 5000, monthly: 1400 },
  { id: "vendors", name: "Vendors & purchases", hint: "Purchase orders and supplier payments", setup: 13000, monthly: 1200 },
  { id: "reports", name: "Owner dashboard", hint: "Today's sales, dues and stock on your phone", setup: 14000, monthly: 1300 },
  { id: "whatsapp", name: "WhatsApp alerts", hint: "Automatic updates to customers and staff", setup: 15000, monthly: 1500 },
];

export const BASE_SETUP = 79999;
export const BASE_MONTHLY = 4999;
export const STARTER_INCLUDED = 3; // modules included in the base price
export const DELIVERY_DAYS = 7;

// ─── Price estimate ───────────────────────────────────────────────────────────
// The base plan covers the priciest STARTER_INCLUDED modules; the rest are add-ons.
// Shared by the configurator and the kit prices so the two can never disagree.
export function estimate(ids: string[]) {
  const chosen = modules.filter((m) => !m.core && ids.includes(m.id)).sort((a, b) => b.setup - a.setup);
  const addOns = chosen.slice(STARTER_INCLUDED);
  return {
    setup: BASE_SETUP + addOns.reduce((s, m) => s + m.setup, 0),
    monthly: BASE_MONTHLY + addOns.reduce((s, m) => s + m.monthly, 0),
    extras: addOns.length,
  };
}

// ─── Industry kits ("Software Menu") ──────────────────────────────────────────
export type Kit = {
  slug?: string; // kits with a slug get their own SEO page at /software/<slug>
  emoji: string;
  name: string;
  items: string[];
  seoTitle?: string;
  blurb?: string;
  modules?: string[]; // module ids from `modules`, ticked by default on the kit page
  optional?: string[]; // extra module ids offered on the kit page, unticked
  labels?: Record<string, { name: string; hint: string }>; // industry wording for a module id
};

export const kits: Kit[] = [
  {
    slug: "garment-manufacturing-software",
    emoji: "🧵",
    name: "Garment & suit manufacturers",
    items: ["Orders & measurements", "Fabric stock", "Cutting → stitching → finishing", "Karigar piece-rate payroll"],
    seoTitle: "Garment & Suit Manufacturing Software",
    blurb: "Track every order from measurement to delivery, know your fabric stock, and pay karigars by piece rate automatically. Built around how your factory already works.",
    modules: ["orders", "inventory", "production", "staff", "customers", "reports"],
    optional: ["billing", "vendors", "whatsapp"],
    labels: {
      orders: { name: "Orders & measurements", hint: "Every order with sizes, design and due date" },
      inventory: { name: "Fabric & material stock", hint: "Fabric, lace and finished pieces, live" },
      production: { name: "Cutting → stitching → finishing", hint: "Track each piece stage by stage" },
      staff: { name: "Karigar piece-rate payroll", hint: "Piece-rate or monthly salary, calculated" },
    },
  },
  {
    slug: "distributor-trader-software",
    emoji: "🚚",
    name: "Traders & distributors",
    items: ["Party ledger & dues", "Stock across godowns", "GST billing", "Salesman orders on phone"],
    seoTitle: "Software for Traders & Distributors",
    blurb: "Party-wise dues, stock across every godown, GST bills in one tap, and salesmen booking orders from their phones.",
    modules: ["orders", "inventory", "billing", "customers", "vendors", "whatsapp"],
    optional: ["reports", "staff"],
    labels: {
      orders: { name: "Salesman orders", hint: "Salesmen book orders from their phones" },
      inventory: { name: "Stock across godowns", hint: "Every item, every godown, live" },
      customers: { name: "Party ledger & dues", hint: "Party-wise outstanding, with payment reminders" },
      staff: { name: "Salesmen & staff", hint: "Attendance, targets and salaries" },
    },
  },
  {
    slug: "clinic-management-software",
    emoji: "🏥",
    name: "Clinics & diagnostic labs",
    items: ["Appointments", "Patient records", "Bills & reports", "WhatsApp reminders"],
    seoTitle: "Clinic & Diagnostic Lab Management Software",
    blurb: "Appointments, patient history, bills and reports in one place, with automatic WhatsApp reminders so patients don't miss visits.",
    modules: ["customers", "billing", "reports", "whatsapp", "staff"],
    optional: ["inventory", "vendors"],
    labels: {
      customers: { name: "Appointments & patient records", hint: "Bookings, visit history and patient details" },
      billing: { name: "Bills & lab reports", hint: "Consultation and test bills, reports shared as PDF" },
      reports: { name: "Owner dashboard", hint: "Today's patients, collections and dues on your phone" },
      whatsapp: { name: "WhatsApp reminders", hint: "Appointment reminders and reports sent to patients" },
      staff: { name: "Doctors & staff", hint: "Duty schedule, attendance and salaries" },
      inventory: { name: "Medicines & consumables", hint: "Stock of kits, reagents and medicines, live" },
      vendors: { name: "Suppliers & purchases", hint: "Purchase orders and supplier payments" },
    },
  },
  {
    slug: "coaching-institute-software",
    emoji: "🎓",
    name: "Coaching & training institutes",
    items: ["Admissions & batches", "Fee tracking", "Attendance", "Parent updates"],
    seoTitle: "Coaching Institute Management Software",
    blurb: "Admissions, batches, fee dues and attendance, with automatic updates to parents on WhatsApp.",
    modules: ["customers", "billing", "staff", "reports", "whatsapp"],
    labels: {
      customers: { name: "Admissions & batches", hint: "Student records, courses and batches" },
      billing: { name: "Fees & receipts", hint: "Instalments, dues and receipts in one tap" },
      staff: { name: "Attendance & faculty", hint: "Student and teacher attendance, faculty pay" },
      reports: { name: "Owner dashboard", hint: "Admissions, collections and dues on your phone" },
      whatsapp: { name: "Parent updates", hint: "Fee reminders and attendance sent to parents" },
    },
  },
  {
    slug: "restaurant-cloud-kitchen-software",
    emoji: "🍛",
    name: "Restaurants & cloud kitchens",
    items: ["Orders & KOT", "Recipe-wise stock", "Daily sales", "Vendor purchases"],
    seoTitle: "Restaurant & Cloud Kitchen Software",
    blurb: "Orders and KOTs, recipe-wise stock that reduces itself as you cook, daily sales and vendor purchases, all on your phone.",
    modules: ["orders", "inventory", "vendors", "reports"],
    optional: ["staff", "billing", "customers", "whatsapp"],
    labels: {
      orders: { name: "Orders & KOT", hint: "Dine-in, takeaway and online orders with kitchen tickets" },
      inventory: { name: "Recipe-wise stock", hint: "Ingredients reduce as dishes are sold" },
      vendors: { name: "Vendor purchases", hint: "Purchase orders and supplier payments" },
      reports: { name: "Daily sales dashboard", hint: "Today's sales, top dishes and stock on your phone" },
      billing: { name: "GST bills", hint: "Bills in one tap, shared as a PDF" },
      customers: { name: "Regular customers & credit", hint: "Who owes what, with payment reminders" },
    },
  },
  {
    slug: "retail-shop-billing-software",
    emoji: "🛍️",
    name: "Retail & wholesale shops",
    items: ["Billing counter", "Barcode stock", "Customer credit (udhaar)", "Daily closing"],
    seoTitle: "Retail & Wholesale Shop Billing Software",
    blurb: "Fast counter billing, barcode stock, customer udhaar with reminders, and a daily closing report you can trust.",
    modules: ["billing", "inventory", "customers", "reports", "whatsapp"],
    optional: ["vendors", "staff"],
    labels: {
      billing: { name: "Counter billing & GST invoices", hint: "Fast bills at the counter, shared as a PDF" },
      inventory: { name: "Barcode stock", hint: "Scan in, scan out, stock always right" },
      customers: { name: "Customer credit (udhaar)", hint: "Who owes what, with payment reminders" },
      reports: { name: "Daily closing", hint: "Today's sales, cash and stock on your phone" },
    },
  },
  {
    slug: "service-business-software",
    emoji: "🔧",
    name: "Service businesses",
    items: ["Job / ticket tracking", "Technician schedule", "Quotes & invoices", "AMC renewals"],
    seoTitle: "Job & Service Management Software",
    blurb: "Every job or ticket tracked, technicians scheduled, quotes turned into invoices, and AMC renewals never missed.",
    modules: ["orders", "staff", "billing", "customers", "whatsapp"],
    optional: ["inventory", "reports"],
    labels: {
      orders: { name: "Jobs & tickets", hint: "Every job tracked from first call to closure" },
      staff: { name: "Technician schedule", hint: "Who goes where, attendance and pay" },
      billing: { name: "Quotes & invoices", hint: "Quotes turned into GST invoices in one tap" },
      customers: { name: "Customers & AMC renewals", hint: "Contracts, renewals and dues with reminders" },
      inventory: { name: "Spare parts stock", hint: "Parts in the store and with each technician" },
    },
  },
  { emoji: "✨", name: "Something else?", items: ["Tell us how you work today", "We'll map it to software", "Same 7-day promise"] },
];

export const kitBySlug = (slug: string) => kits.find((k) => k.slug === slug);

// One-time setup estimate for a kit's default modules (the base price for kits without modules).
export const kitPrice = (kit: Kit) => estimate(kit.modules ?? []).setup;

// The modules a kit page offers, in the kit's own wording: defaults first, then optional extras.
export const kitModules = (kit: Kit): Module[] =>
  [...(kit.modules ?? []), ...(kit.optional ?? [])]
    .map((id) => modules.find((m) => m.id === id))
    .filter((m): m is Module => !!m)
    .map((m) => ({ ...m, ...kit.labels?.[m.id] }));

// ─── Plans ────────────────────────────────────────────────────────────────────
export const plans = [
  {
    name: "Start",
    tag: "For businesses leaving Excel",
    setup: inr(BASE_SETUP),
    monthly: `${inr(BASE_MONTHLY)}/mo`,
    live: "First workflow in 7 days",
    points: [
      "1–3 business workflows",
      "Up to 5 users",
      "Excel data migration",
      "Mobile + laptop",
      "Basic dashboard",
      "WhatsApp notifications",
    ],
    highlight: false,
  },
  {
    name: "Grow",
    tag: "Most popular for growing businesses",
    setup: "From ₹1.5L",
    monthly: "₹8,999/mo",
    live: "First version in 7 days",
    points: [
      "5–8 business workflows",
      "Up to 25 users",
      "Inventory + sales + purchase",
      "Production tracking",
      "Owner dashboard & reports",
      "WhatsApp alerts",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    tag: "Factories, multi-branch & complex operations",
    setup: "From ₹2L",
    monthly: "Custom",
    live: "Phased implementation",
    points: [
      "Custom business workflows",
      "Unlimited users*",
      "Multi-location operations",
      "Tally, payment & API integrations",
      "Advanced reports & dashboards",
      "Dedicated project manager",
    ],
    highlight: false,
  },
];

export const included = [
  "Hosting & servers",
  "Daily backups",
  "Security & SSL",
  "Weekly updates",
  "WhatsApp support",
  "Export your data anytime",
];

// ─── Trust: "we stay till the end" ─────────────────────────────────────────────
// Every line here is a commitment; keep only what the team can honour.
export const trustPillars = [
  { icon: "eye", title: "See it before you pay", body: "You get a free working demo with your own data. You judge the product, not a sales pitch." },
  { icon: "shield", title: "Built on tested blocks", body: "Every module has already been used in live businesses. You get proven parts, not an experiment." },
  { icon: "server", title: "Reliable, every day", body: "Daily backups, secure logins, SSL and 24×7 uptime monitoring. If something breaks, fixing it is our job, not a new invoice." },
  { icon: "user", title: "One person who knows you", body: "One named contact on WhatsApp, from the first call to years later. No ticket queues and no call centres." },
  { icon: "handshake", title: "With you till the end", body: "Your monthly plan pays us to keep your software running and improving. We only grow when your business keeps using it." },
  { icon: "file", title: "Everything in writing", body: "Scope, price and timeline are written down before you pay. No hidden costs, and no surprise bills." },
];

export const commitments = [
  { k: "Same day", v: "reply on WhatsApp" },
  { k: "Every week", v: "updates shipped" },
  { k: "Daily", v: "data backups" },
  { k: "Anytime", v: "full data export" },
];

export const comparison = {
  cols: ["BeOnline", "Typical software company", "Freelancer"],
  rows: [
    { k: "Starting price", v: [inr(BASE_SETUP), "₹5 lakh+", "Low, but unpredictable"] },
    { k: "First working version", v: ["7 days", "3–6 months", "Depends on the person"] },
    { k: "Free demo before paying", v: ["Yes", "Rarely", "Rarely"] },
    { k: "Hosting, backups & security", v: ["Included", "Separate contract", "Usually your problem"] },
    { k: "Support after launch", v: ["Included, every month", "Paid AMC", "Often disappears"] },
    { k: "Speaks your language", v: ["Hindi, English, Hinglish", "Mostly English and tech terms", "Varies"] },
  ],
};

// ─── How it works: detail per step ─────────────────────────────────────────────
export const howDetails = [
  { day: "Day 0", title: "You send your Excel", points: ["Forward your sheets on WhatsApp, even messy ones", "Add a voice note about how your day runs, if you like", "No forms, no brief, no meeting"] },
  { day: "Day 1–2", title: "We study and build a demo", points: ["We map your sheets to screens and workflows", "One short call to clear doubts", "Free demo with your own data within 48 hours"] },
  { day: "Day 3", title: "You approve", points: ["See the demo on your phone", "We agree the v1 scope, price and go-live date in writing", "Pay the one-time setup fee"] },
  { day: "Day 4–6", title: "We build and import", points: ["Your workflows set up and tested", "All your old Excel data cleaned and imported", "A progress update on WhatsApp every day"] },
  { day: "Day 7", title: "You go live", points: ["Logins for owner, managers and staff", "A hands-on training session (on-site or video)", "Excel retired from that day"] },
  { day: "Every week after", title: "It keeps getting better", points: ["Ask for changes on WhatsApp", "Updates ship weekly", "Bigger features are quoted first, never surprise-billed"] },
];

export const needFromYou = [
  "Your current Excel sheets (as they are)",
  "Two short calls: one to understand, one to approve",
  "30 minutes of your staff's time for training",
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export const faqs = [
  {
    q: `Is ${inr(BASE_SETUP)} really the price?`,
    a: `Yes, if you go with exactly the same specifications: ${inr(BASE_SETUP)} one-time plus ${inr(BASE_MONTHLY)} a month for up to ${STARTER_INCLUDED} modules and 5 users. If your needs differ, there may be a small addition, but nothing out of the box. Your final price is agreed in writing before you pay anything.`,
  },
  {
    q: "How can you deliver in 7 days?",
    a: "We don't start from zero. Common business blocks like orders, stock, billing and staff are already built and tested. We fit them to how you work and add what's unique to you. That's how v1 goes live in 7 days.",
  },
  {
    q: "What if I need changes later?",
    a: "Just WhatsApp us. Small changes are covered by your monthly plan, and we ship updates every week. Bigger new features get a clear quote first.",
  },
  {
    q: "Who handles servers, hosting and security?",
    a: "We do, all of it. You never deal with anything technical. Backups run daily.",
  },
  {
    q: "What if I stop paying?",
    a: "You can cancel anytime. We give you a full export of your data in Excel, because your data is always yours.",
  },
  {
    q: "Do I or my staff need a computer?",
    a: "No. Everything works on a normal smartphone browser, and on a laptop if you have one. We train your staff on Day 7.",
  },
  {
    q: "Can someone visit our office or factory?",
    a: "Yes, for Grow and Scale plans we can visit to understand your workflow. Most customers are happy doing it over WhatsApp and video call.",
  },
];
