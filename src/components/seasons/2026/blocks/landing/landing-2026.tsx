"use client";

import Link from "next/link";
import Footer from "@components/seasons/2026/blocks/footer";
import Judges from "@components/seasons/2026/blocks/judges";
import Sponsors from "@components/seasons/2026/blocks/sponsors";

export default function Landing2026() {
  return (
    <main className="relative min-h-[360vw] w-full bg-[url('/images/seasons/2026/landing/gradient/gradient.png')] bg-[length:100%_auto] bg-top bg-no-repeat">
      <Link
        href="/2026-preview/apply"
        className="fixed top-6 right-6 z-50 px-6 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors"
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
      <Sponsors />
      <Footer />
    </main>
  );
}
