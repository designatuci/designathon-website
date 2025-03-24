import About from "@components/seasons/2025/blocks/about";
import FAQ from "@components/seasons/2025/blocks/faq";
import Footer from "@components/seasons/2025/blocks/footer";
import Hero from "@components/seasons/2025/blocks/hero";
import PastEvents from "@components/seasons/2025/blocks/past-events";
import Sponsors from "@components/seasons/2025/blocks/sponsors";
import Stats from "@components/seasons/2025/blocks/stats";
import LandingNavigation from "@components/seasons/2025/navigation/landing-navigation";

export default function Landing2025() {
  return (
    <main className="font-primary">
      <LandingNavigation />
      <Hero />
      <Stats />
      <About />
      <PastEvents />
      {/* <Itinerary /> */}
      <FAQ />
      <Sponsors />
      <Footer />
    </main>
  );
}
