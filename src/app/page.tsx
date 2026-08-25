import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import Clients from "@/components/Clients";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Clients />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
