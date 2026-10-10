import Pricing from "@/components/express/Pricing";
import Configurator from "@/components/express/Configurator";
import Guarantee from "@/components/express/Guarantee";
import Comparison from "@/components/express/Comparison";
import FAQ from "@/components/express/FAQ";
import FinalCTA from "@/components/express/FinalCTA";
import { PageHero } from "@/components/express/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/pricing",
  "Pricing: Custom Business Software from ₹49,999",
  "Custom business software from ₹49,999 one-time, plus a small monthly fee for hosting, backups, updates and WhatsApp support. Estimate your price in 30 seconds."
);

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="Honest pricing. No ₹1 crore surprises."
        sub="A small one-time setup fee, then a monthly fee that covers everything technical. You see the exact price before you pay, and you only pay after the free demo."
      />
      <Configurator title="Build your estimate in 30 seconds" />
      <Pricing />
      <Guarantee />
      <Comparison />
      <FAQ title="Pricing questions" />
      <FinalCTA />
    </>
  );
}
