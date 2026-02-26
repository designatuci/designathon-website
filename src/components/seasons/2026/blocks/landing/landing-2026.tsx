"use client";

import Footer from "@components/seasons/2026/blocks/footer";

export default function Landing2026() {
  return (
    <main className="relative min-h-[360vw] w-full bg-top bg-no-repeat bg-[length:100%_auto] bg-[url('/images/seasons/2026/landing/gradient/gradient.png')]">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-2xl font-medium text-white">2026 — Coming Soon</h1>
      </div>
      <Footer />
    </main>
  );
}