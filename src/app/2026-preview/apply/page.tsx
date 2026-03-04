"use client";

import ApplicationForm from "@components/seasons/2026/apply/application-form";
import Link from "next/link";
// import DOTImage from "@components/common/dot-image";

export default function ApplyPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Luxurious+Script&display=swap');

        .script-glow {
            font-family: 'Luxurious Script', cursive;
            letter-spacing: 0.04em;

            text-shadow:
            0 0 6px rgba(255,255,255,0.6),
            0 0 12px rgba(180,120,255,0.7),
            0 0 24px rgba(160,90,255,0.6),
            0 0 48px rgba(140,70,255,0.45);

            animation: glowPulse 3s ease-in-out infinite alternate;
        }

        @keyframes glowPulse {
            from {
            text-shadow:
                0 0 4px rgba(255,255,255,0.5),
                0 0 10px rgba(180,120,255,0.6),
                0 0 20px rgba(160,90,255,0.5);
            }
            to {
            text-shadow:
                0 0 10px rgba(255,255,255,0.9),
                0 0 22px rgba(200,140,255,0.9),
                0 0 44px rgba(170,100,255,0.8),
                0 0 70px rgba(150,80,255,0.6);
            }
        }
    `}</style>

      <main className="relative w-full bg-[url('/images/seasons/2026/landing/gradient/gradient.png')] bg-[length:100%_auto] bg-top bg-no-repeat">
        {/* ── Ambient glows ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
        >
          <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-purple-700/20 blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-indigo-600/15 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[80px]" />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 container mx-auto px-6 py-8">
          {/* Back link */}
          <Link
            href="/2026-preview"
            className="inline-flex items-center gap-1.5 text-sm text-purple-300/70 transition hover:text-purple-200"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>

          {/* Hero text */}
          <div className="mt-10 mb-12 text-center">
            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-purple-400/70 uppercase">
              Design-a-thon 2026
            </p>
            <h1 className="script-glow text-8xl font-normal text-white md:text-9xl xl:text-[7rem]">
              Apply
            </h1>
            <p className="mt-3 text-base text-purple-200/50">
              Join us on this interstellar adventure!
            </p>
          </div>

          {/* Form card with floating logos */}
          <div className="relative mx-auto max-w-lg">
            {/* ADD THIS WHEN WE IMPORT ASSETS */}
            {/* <DOTImage
              src="/logos/logo-1.png"
              alt=""
              aria-hidden="true"
              className="animate-float absolute -top-10 -left-10 w-28 opacity-75 drop-shadow-[0_0_22px_rgba(180,120,255,0.35)] md:w-32"
              style={{ animationDelay: "0s" }}
            />
            <DOTImage
              src="/logos/logo-2.png"
              alt=""
              aria-hidden="true"
              className="animate-float absolute -top-12 -right-10 w-28 opacity-70 drop-shadow-[0_0_22px_rgba(180,120,255,0.30)] md:w-32"
              style={{ animationDelay: "1.2s" }}
            />
            <DOTImage
              src="/logos/logo-3.png"
              alt=""
              aria-hidden="true"
              className="animate-float absolute -bottom-14 -left-10 w-32 opacity-65 drop-shadow-[0_0_22px_rgba(180,120,255,0.28)] md:w-36"
              style={{ animationDelay: "2.1s" }}
            />
            */}

            {/* Glass card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-md md:p-8">
              <ApplicationForm />
            </div>
          </div>

          <p className="mt-16 pb-8 text-center text-xs text-white/20">
            © {new Date().getFullYear()} Design-O-Thon. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
