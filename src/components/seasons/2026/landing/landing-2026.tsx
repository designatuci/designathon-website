"use client";

import { cn } from "@/lib/utils";
import About from "@components/seasons/2026/blocks/about";
import FAQ from "@components/seasons/2026/blocks/faq";
import Footer from "@components/seasons/2026/blocks/footer";
import Hero from "@components/seasons/2026/blocks/hero";
import Itinerary from "@components/seasons/2026/blocks/itinerary";
import Judges from "@components/seasons/2026/blocks/judges";
import PastEvents from "@components/seasons/2026/blocks/past-events";
import Prizes from "@components/seasons/2026/blocks/prizes";
import Prompt from "@components/seasons/2026/blocks/prompt";
import Rules from "@components/seasons/2026/blocks/rules";
import Sponsors from "@components/seasons/2026/blocks/sponsors";
import Stats from "@components/seasons/2026/blocks/stats";
import Team from "@components/seasons/2026/blocks/team";
import LandingNavigation from "@components/seasons/2026/navigation/landing-navigation";

export default function Landing2026() {
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
