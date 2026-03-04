"use client";

import About from "@components/seasons/2026/blocks/about";
import FAQ from "@components/seasons/2026/blocks/faq";
import Footer from "@components/seasons/2026/blocks/footer";
import Hero from "@components/seasons/2026/blocks/hero";
import Judges from "@components/seasons/2026/blocks/judges";
import LandingNavigation from "@components/seasons/2026/blocks/navigation/landing-navigation";
import Sponsors from "@components/seasons/2026/blocks/sponsors";

export default function Landing2026() {
  return (
    <main className="relative min-h-[360vw] w-full bg-[url('/images/seasons/2026/landing/gradient/gradient.png')] bg-[length:100%_auto] bg-top bg-no-repeat">
      <LandingNavigation />
      <Hero />
      <About />
      <Judges />
      <FAQ />
      <Sponsors />
      <Footer />
    </main>
  );
}
