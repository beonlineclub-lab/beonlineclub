// ─── Case studies ─────────────────────────────────────────────────────────────
// Only publish facts the client has confirmed and agreed to share.
// Every optional field stays hidden on the site until it is filled in, so leave
// a field as `null` rather than guessing. See docs/case-study-kit.md for how to
// collect these details.

export type Metric = {
  label: string; // e.g. "Time to prepare the daily production report"
  before: string; // e.g. "2 hours"
  after: string; // e.g. "Instant, on the phone"
};

export type CaseStudyData = {
  kicker: string;
  title: string;
  context: string; // one line on who the client is (scale, industry, city)
  clientLabel: string; // "A suit manufacturer, Jaipur" or the real name, with permission
  stages?: string[]; // workflow pipeline shown above the results
  changes: { before: string; after: string }[]; // qualitative before → after
  metrics: Metric[]; // verified numbers only; the block is hidden while empty
  sheetsReplaced: number | null; // spreadsheets retired
  handoffsRemoved: number | null; // manual handoffs (calls, re-typing, WhatsApp forwards) removed
  ownerTracking: string | null; // how the owner checks status now, in their words
  screenshot: { src: string; alt: string } | null; // put the image in /public; blur names and amounts
  quote: { text: string; name: string; role: string } | null;
  videoUrl: string | null; // YouTube or similar link to a short customer interview
};

export const manufacturerCase: CaseStudyData = {
  kicker: "Case study · Garment manufacturing",
  title: "From scattered Excel sheets to one production app.",
  context: "A suit manufacturer with an annual turnover of ₹5–6 crore, which used to run on Excel.",
  clientLabel: "Suit manufacturer, India",
  stages: ["Order & measurements", "Fabric issued", "Cutting", "Stitching", "Finishing", "Delivered"],
  changes: [
    { before: "Separate sheets for orders, fabric, karigars and dues", after: "One app, one source of truth" },
    { before: "Owner calls the floor to ask for status", after: "Every piece's stage visible on the phone" },
    { before: "Karigar payments worked out by hand each month", after: "Piece-rate payroll calculated automatically" },
  ],
  // TODO: fill in from the client interview (docs/case-study-kit.md), with their permission.
  metrics: [],
  sheetsReplaced: null,
  handoffsRemoved: null,
  ownerTracking: null,
  screenshot: null,
  quote: null,
  videoUrl: null,
};

// Published on /ecommerce-sellers once the first founding seller has real results.
// Keep it null until then: manufacturing results are not proof of marketplace work.
export const sellerCase: CaseStudyData | null = null;
