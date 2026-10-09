// ─── BeOnline for Startups — copy & packages for /startups ───────────────────
// Prices are proposals; edit freely.

export const WA_STARTUP_MSG =
  "Hi BeOnline! I'm a founder and I'd like to get my MVP built in 7 days. Can we do a quick call?";

export const startupFor = [
  { emoji: "💡", title: "Non-tech founders", body: "You have the idea and the market. You don't have a CTO yet." },
  { emoji: "📈", title: "Investor meeting coming up", body: "Show a product investors can click through, not a pitch deck of screenshots." },
  { emoji: "🧪", title: "Validating with real users", body: "Get a real v1 in users' hands this month, and learn before you spend lakhs." },
  { emoji: "🧯", title: "Burnt by a freelancer", body: "Half-finished code and a developer who vanished. We pick it up or rebuild it cleanly." },
];

export const startupUsps = [
  { title: "Working MVP in 7 days", body: "A deployed product with real login, a real database and your core flow. Not a Figma file." },
  { title: "A preview link every day", body: "Watch it being built. Give feedback daily instead of waiting for a big reveal." },
  { title: "You own 100% of the code", body: "Full source code and IP go to you, in your GitHub, from day one. No lock-in." },
  { title: "Built to scale, not to throw away", body: "Production-grade stack (Next.js, React Native, Node, Postgres, cloud). v2 builds on v1, with no rewrite." },
  { title: "AI-ready from the start", body: "LLM features, automations and chat built in when your product needs them." },
  { title: "Fixed price by product", body: "Every product has a written scope and a fixed price. No hourly billing surprises." },
  { title: "Founder Flexibility", body: "You can pivot and iterate on the product as you build it, with full control over the direction." },
];

export const startupSteps = [
  { day: "Day 0", title: "Idea call", body: "A free 30-minute call. We understand the problem, the users and the one flow that matters most." },
  { day: "Day 1", title: "Scope & screens", body: "A written MVP scope and clickable screens. You approve before we write code." },
  { day: "Day 2–6", title: "Build, with daily previews", body: "Real code, deployed to a preview link you can open every evening." },
  { day: "Day 7", title: "Demo-ready MVP", body: "Live on your domain, with a walkthrough so you can pitch it confidently." },
  { day: "After", title: "Weekly sprints or handover", body: "Keep shipping with us every week toward launch, or take the code to your own team." },
];

export const startupPackages = [
  {
    name: "Prototype Sprint",
    price: "₹89,999",
    time: "3 days",
    tag: "Test the idea",
    points: [
      "Product discovery & core user flows",
      "Clickable high-fidelity prototype",
      "Key screens designed for your product",
      "Landing page with lead / waitlist capture",
      "Mobile-responsive design",
      "Pitch-ready product screens",
      "3-day founder review & iteration",
    ],
    highlight: false,
  },

  {
    name: "MVP Sprint",
    price: "From ₹4.2 L",
    time: "7 days",
    tag: "Demo it to investors",
    points: [
      "Product architecture & technical planning",
      "Working web application, deployed",
      "User authentication & onboarding",
      "Database & core business workflows",
      "Admin dashboard",
      "API & third-party integrations",
      "Basic analytics & event tracking",
      "Production-ready deployment",
      "Source code transferred to your GitHub",
      "Documentation & handover",
    ],
    highlight: true,
  },

  {
    name: "Launch Track",
    price: "From ₹9 L",
    time: "Weekly sprints",
    tag: "Go to market",
    points: [
      "Complete product development roadmap",
      "Web + Android/iOS applications",
      "Scalable backend & cloud infrastructure",
      "Payments, notifications & third-party integrations",
      "Analytics, monitoring & error tracking",
      "Admin & operations dashboard",
      "Security, backups & production setup",
      "App Store & Play Store launch support",
      "Post-launch fixes & optimization",
      "Ongoing product & technology partnership",
    ],
    highlight: false,
  },
];

export const startupFaqs = [
  {
    q: "Can a real MVP actually be built in 7 days?",
    a: "Yes, when the scope is focused on the one flow that proves your idea. On Day 1 we agree in writing what fits into 7 days. Everything else goes into weekly sprints after that.",
  },
  {
    q: "Do I own the code?",
    a: "Completely. The code lives in your GitHub from day one, and all IP is yours. We're happy to sign an NDA before you share your idea.",
  },
  {
    q: "Will it scale, or will I need to rebuild later?",
    a: "It will scale to next levels. We use the same production stack that funded startups use. v1 is the foundation for v2, not a throwaway prototype.",
  },
  {
    q: "What happens after the MVP?",
    a: "You choose. Continue with weekly sprints with us, or hand over to your own team with documentation and a walkthrough.",
  },
  {
    q: "I already have half-built code from someone else. Can you help?",
    a: "Yes. We review it within 48 hours and tell you honestly whether to fix it or rebuild. Either way, you get a clear plan and price.",
  },
];
