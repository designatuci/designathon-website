"use client";

import { cn } from "@/lib/utils";
import About from "@components/seasons/2025/blocks/about";
import FAQ from "@components/seasons/2025/blocks/faq";
import Footer from "@components/seasons/2025/blocks/footer";
import Hero from "@components/seasons/2025/blocks/hero";
import Itinerary from "@components/seasons/2025/blocks/itinerary";
import Judges from "@components/seasons/2025/blocks/judges";
import PastEvents from "@components/seasons/2025/blocks/past-events";
import Prizes from "@components/seasons/2025/blocks/prizes";
import Prompt from "@components/seasons/2025/blocks/prompt";
import Rules from "@components/seasons/2025/blocks/rules";
import Sponsors from "@components/seasons/2025/blocks/sponsors";
import Stats from "@components/seasons/2025/blocks/stats";
import Team from "@components/seasons/2025/blocks/team";
import LandingNavigation from "@components/seasons/2025/navigation/landing-navigation";

export default function Landing2025() {
  return (
    <main className={cn("bg-(--blue) font-primary")}>
      <LandingNavigation />
      <Hero />
      <Stats />
      <About />
      <Prompt />
      <Itinerary />
      <FAQ />
      <Prizes />
      <Judges />
      <Sponsors />
      <Team />
      <Rules />
      <PastEvents />
      <Footer />
    </main>
  );
}
