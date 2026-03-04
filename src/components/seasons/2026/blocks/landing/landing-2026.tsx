"use client";

import FAQ from "@components/seasons/2026/blocks/faq";
import Footer from "@components/seasons/2026/blocks/footer";
import Hero from "@components/seasons/2026/blocks/hero";
import Judges from "@components/seasons/2026/blocks/judges";
import Sponsors from "@components/seasons/2026/blocks/sponsors";
import LandingNavigation from "@components/seasons/2026/blocks/navigation/landing-navigation";

export default function Landing2026() {
  return (
    <main className="relative min-h-[360vw] w-full bg-[url('/images/seasons/2026/landing/gradient/gradient.png')] bg-[length:100%_auto] bg-top bg-no-repeat">
      <LandingNavigation />
      <Hero />
      <Judges />
      <FAQ />
      <Sponsors />
      <Footer />
    </main>
  );
}
