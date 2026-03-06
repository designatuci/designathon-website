"use client";

import About from "@components/seasons/2026/blocks/about";
import FAQ from "@components/seasons/2026/blocks/faq";
import Footer from "@components/seasons/2026/blocks/footer";
import Hero from "@components/seasons/2026/blocks/hero";
import Judges from "@components/seasons/2026/blocks/judges";
import MeetCommittees from "@components/seasons/2026/blocks/mtb/meet-committees";
import LandingNavigation from "@components/seasons/2026/blocks/navigation/landing-navigation";
import Prompt from "@components/seasons/2026/blocks/prompt";
import Rules from "@components/seasons/2026/blocks/rules";
import Star from "@components/seasons/2026/blocks/star";
import Sponsors from "@components/seasons/2026/blocks/sponsors";
import Link from "next/link";

export default function Landing2026() {
  return (
    <main className="relative min-h-screen w-full overflow-visible bg-[url('/images/seasons/2026/landing/gradient/background.webp')] bg-[length:100%_auto] bg-top bg-repeat">
      <Link
        href="/2026-preview/apply"
        className="fixed top-6 right-6 z-50 rounded bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-gray-200"
      >
        Apply
      </Link>
      <LandingNavigation />
      <Hero />
      <About />
      <Star />
      <Prompt />
      <Rules />
      <FAQ />
      <Judges />
      <Sponsors />
      <MeetCommittees />
      <Footer />
    </main>
  );
}
