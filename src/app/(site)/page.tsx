import Hero from "@/components/express/Hero";
import PainPoints from "@/components/express/PainPoints";
import SevenDayTracker from "@/components/express/SevenDayTracker";
import SoftwareMenu from "@/components/express/SoftwareMenu";
import Configurator from "@/components/express/Configurator";
import CaseStudy from "@/components/express/CaseStudy";
import Trust from "@/components/express/Trust";
import Pricing from "@/components/express/Pricing";
import Guarantee from "@/components/express/Guarantee";
import StartupLane from "@/components/express/StartupLane";
import FAQ from "@/components/express/FAQ";
import FinalCTA from "@/components/express/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <SevenDayTracker moreHref="/how-it-works" />
      <SoftwareMenu moreHref="/software" />
      <Configurator />
      <CaseStudy />
      <Trust />
      <Pricing moreHref="/pricing" />
      <Guarantee />
      <StartupLane />
      <FAQ schema />
      <FinalCTA />
    </>
  );
}
