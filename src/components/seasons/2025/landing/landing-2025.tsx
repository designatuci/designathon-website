import About from "@components/seasons/2025/blocks/about";
import FAQ from "@components/seasons/2025/blocks/faq";
import Hero from "@components/seasons/2025/blocks/hero";
import Itinerary from "@components/seasons/2025/blocks/itinerary";
import PastEvents from "@components/seasons/2025/blocks/past-events";
import Stats from "@components/seasons/2025/blocks/stats";
import LandingNavigation from "@components/seasons/2025/navigation/landing-navigation";

export default function Landing2025() {
  return (
    <main className="min-h-[200vh]">
      <LandingNavigation />
      <Hero />
      <Stats />
      <About />
      <PastEvents />
      <Itinerary />
      <FAQ />
    </main>
  );
}
