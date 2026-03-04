"use client";

import About from "@components/seasons/2026/blocks/about";
import FAQ from "@components/seasons/2026/blocks/faq";
import Footer from "@components/seasons/2026/blocks/footer";
import Hero from "@components/seasons/2026/blocks/hero";
import Judges from "@components/seasons/2026/blocks/judges";
import LandingNavigation from "@components/seasons/2026/blocks/navigation/landing-navigation";
import Sponsors from "@components/seasons/2026/blocks/sponsors";
import Link from "next/link";

export default function Landing2026() {
  return (
    <main className="relative min-h-[360vw] w-full bg-[url('/images/seasons/2026/landing/gradient/gradient.png')] bg-[length:100%_auto] bg-top bg-no-repeat">
      <Link
        href="/2026-preview/apply"
        className="fixed top-6 right-6 z-50 rounded bg-white px-6 py-2 font-medium text-black transition-colors hover:bg-gray-200"
      >
        Apply
      </Link>
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
        <h1 className="text-2xl font-medium text-white">2026 — Coming Soon</h1>
      </div>
      <div className="pt-[80vh]">
        {" "}
        <Judges />{" "}
      </div>

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
