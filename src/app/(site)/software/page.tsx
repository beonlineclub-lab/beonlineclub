import SoftwareMenu from "@/components/express/SoftwareMenu";
import ModuleLibrary from "@/components/express/ModuleLibrary";
import Configurator from "@/components/express/Configurator";
import FinalCTA from "@/components/express/FinalCTA";
import { PageHero, WhatsAppButton } from "@/components/express/ui";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "/software",
  "Business Software by Industry, Live in 7 Days",
  "Custom software for garment makers, traders, clinics, coaching institutes, restaurants, retail and service businesses. Live in 7 days, from ₹49,999."
);

export default function SoftwarePage() {
  return (
    <>
      <PageHero
        kicker="Software Menu"
        title="Software made for your kind of business."
        sub="Pick your industry to see what's included. Every kit is shaped around how you already work, and goes live in 7 days."
      >
        <WhatsAppButton label="Not listed? Tell us on WhatsApp" message="Hi BeOnline! My business isn't listed on your Software Menu. Here's how we work today:" />
      </PageHero>
      <SoftwareMenu showHeading={false} />
      <ModuleLibrary />
      <Configurator />
      <FinalCTA />
    </>
  );
}
