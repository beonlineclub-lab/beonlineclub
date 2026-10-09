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
  "Pricing — Custom Software from ₹9,999, Hosting & Support Included",
  "Transparent pricing for custom business software: a one-time setup fee from ₹9,999 plus a small monthly fee that covers hosting, backups, updates and WhatsApp support. Build your estimate in 30 seconds."
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
