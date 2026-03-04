"use client";

import Footer from "@components/seasons/2026/blocks/footer";
import Judges from "@components/seasons/2026/blocks/judges";
import Sponsors from "@components/seasons/2026/blocks/sponsors";
import FAQ from "@components/seasons/2026/blocks/faq";

export default function Landing2026() {
  return (
    <main className="relative min-h-[360vw] w-full bg-[url('/images/seasons/2026/landing/gradient/gradient.png')] bg-[length:100%_auto] bg-top bg-no-repeat">
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
        <h1 className="text-2xl font-medium text-white">2026 — Coming Soon</h1>
      </div>
      <div className="pt-[80vh]">
        {" "}
        <Judges />{" "}
      </div>
      <FAQ />
      <Sponsors />
      <Footer />
    </main>
  );
}
