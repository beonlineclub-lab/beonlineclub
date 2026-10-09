import SevenDayTracker from "@/components/express/SevenDayTracker";
import HowDetails from "@/components/express/HowDetails";
import Guarantee from "@/components/express/Guarantee";
import FAQ from "@/components/express/FAQ";
import FinalCTA from "@/components/express/FinalCTA";
import { PageHero, WhatsAppButton } from "@/components/express/ui";
import { faqs } from "@/lib/express";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/how-it-works",
  "How It Works — From Excel to Your Own Software in 7 Days",
  "Send your Excel on WhatsApp, get a free demo in 48 hours, and go live in 7 days. See exactly what happens each day when BeOnline builds your business software."
);

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="How it works"
        title="From Excel to your own software in 7 days."
        sub="You send your sheets. We do everything else: understanding your work, building, importing your data, training your staff, and improving it every week."
      >
        <WhatsAppButton label="Start with a free demo" />
      </PageHero>
      <SevenDayTracker />
      <HowDetails />
      <Guarantee />
      <FAQ items={faqs.slice(1, 6)} title="Questions about the process" />
      <FinalCTA />
    </>
  );
}
