"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

// ─── data ─────────────────────────────────────────────────────────────────────

const generalPrizes = [
  {
    id: "gold",
    rank: "1st place",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/first.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/first-place.png",
    items: [
      "4× Sony Headphones",
      "4× Annual Notability Pro",
      "4× $100 Visa Gift Cards",
    ],
    featured: false,
    // sponsor logos — replace src with actual paths
    sponsors: [
      {
        name: "Gemini",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/gemini.png",
      },
      {
        name: "Notability",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/notability_logo.png",
      },
    ],
  },
  {
    id: "silver",
    rank: "2nd place",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/second.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/2.png",
    items: [
      "4× Anker Power Banks",
      "4× Annual Notability Pro",
      "4× $50 Visa Gift Cards",
      "2× Bluety Goodie Bags",
    ],
    featured: false,
    sponsors: [
      {
        name: "Gemini",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/gemini.png",
      },
      {
        name: "Notability",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/notability_logo.png",
      },
    ],
  },
  {
    id: "bronze",
    rank: "3rd place",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/third.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/third.png",
    items: [
      "4× Echo Dots",
      "4× Annual Notability Pro",
      "4× Bluety Goodie Bags",
    ],
    featured: false,
    sponsors: [
      {
        name: "Gemini",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/gemini.png",
      },
      {
        name: "Notability",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/notability_logo.png",
      },
    ],
  },
];

const professionalPrizes = [
  {
    id: "pro",
    rank: "Professional prize",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/prof.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/professional.png",
    items: [
      "Guaranteed Cup Design Collaboration",
      "Resume + Portfolio Review with EAT Studio",
      "$400 at Menya Hanabi + Exclusive T-Shirts",
      "4× $100 Visa Gift Cards",
    ],
    featured: false,
    sponsors: [
      {
        name: "Menya Hanabi",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/menya.png",
      },
      {
        name: "Auntea Jenny",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/auntea.png",
      },
      {
        name: "EAT Studio",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/eat.png",
      },
    ],
  },
];

const specialPrizes = [
  {
    id: "begin",
    rank: "Beginner's prize",
    planetSrc:
      "/images/seasons/2026/landing/prizes/planets/beginners_planet.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/beginners.png",
    items: ["4× Chaism Matcha Powder", "4× Joiish Matcha Kit"],
    featured: false,
    sponsors: [] as { name: string; logoSrc: string }[],
  },
  {
    id: "novel",
    rank: "Most novel",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/novel_planet.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/novel.png",
    items: ["4× LEGO 3-in-1 Building Sets", "4× LEGO Large Sets"],
    featured: false,
    sponsors: [] as { name: string; logoSrc: string }[],
  },
  {
    id: "people",
    rank: "People's choice",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/peoples.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/peoples.png",
    items: [
      "4× Apple AirTags + Case",
      "4× Chipotle Gift Cards",
      "5× Cane's Box Combo Gift Cards",
      "2× Bluety Gift Bag",
    ],
    featured: false,
    sponsors: [] as { name: string; logoSrc: string }[],
  },
];

// ─── types ────────────────────────────────────────────────────────────────────

type Sponsor = { name: string; logoSrc: string };

type Prize = {
  id: string;
  rank: string;
  planetSrc: string;
  imageSrc: string;
  items: string[];
  featured: boolean;
  sponsors: Sponsor[];
};

// ─── prize card ───────────────────────────────────────────────────────────────

function PrizeCard({ prize }: { prize: Prize }) {
  const [open, setOpen] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const toggle = useCallback(() => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => {
      setOpen((v) => !v);
      setFlipping(false);
    }, 200);
  }, [flipping]);

  return (
    <button
      onClick={toggle}
      aria-expanded={open}
      className={[
        "relative w-full cursor-pointer overflow-hidden rounded-2xl text-left",
        "border backdrop-blur-md",
        "transition-[transform,border-color,box-shadow] duration-200",
        "focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none",
        open || prize.featured
          ? "border-[rgba(111,252,226,0.75)] shadow-[0_0_24px_rgba(111,252,226,0.15)] [border-left:3px_solid_rgba(111,252,226,0.45)]"
          : "border-[rgba(88,63,247,0.55)] [border-left:3px_solid_rgba(26,64,231,0.32)] hover:border-[rgba(88,63,247,0.85)] hover:shadow-[0_8px_32px_rgba(88,63,247,0.18)]",
        "hover:-translate-y-0.5",
      ].join(" ")}
      style={{ background: "rgba(195,195,195,0.01)" }}
    >
      {/* glare streak */}
      <div
        className={[
          "pointer-events-none absolute inset-x-8 top-0 z-10 h-[2px] rounded-full transition-opacity duration-300",
          open ? "opacity-100" : "opacity-40",
        ].join(" ")}
        style={{
          background:
            open || prize.featured
              ? "linear-gradient(90deg,transparent,rgba(111,252,226,0.95),rgba(255,217,122,0.5),transparent)"
              : "linear-gradient(90deg,transparent,rgba(111,252,226,0.82),rgba(167,139,250,0.5),transparent)",
        }}
      />

      <div
        className={[
          "flex flex-col items-center justify-center gap-3 px-5 text-center",
          "transition-[opacity,transform] duration-[180ms]",
          // min-height expands when open to give room to prize image
          open ? "min-h-[340px] py-5" : "min-h-[220px] py-6",
          flipping ? "scale-[0.93] opacity-0" : "scale-100 opacity-100",
        ].join(" ")}
      >
        {/* planet — floats + glows, fades up and away when opened */}
        <div
          className={[
            "relative shrink-0 transition-[opacity,transform,width,height] duration-500",
            open
              ? "pointer-events-none -translate-y-4 opacity-0"
              : "motion-safe:animate-[floatY_3s_ease-in-out_infinite]",
          ].join(" ")}
          style={{
            width: open ? 0 : 80,
            height: open ? 0 : 80,
            filter: open
              ? "none"
              : "drop-shadow(0 0 12px rgba(255,255,255,0.72))",
          }}
        >
          {!open && (
            <Image
              src={prize.planetSrc}
              alt=""
              fill
              className="object-contain"
              sizes="80px"
            />
          )}
        </div>

        <p className="text-l font-bold tracking-[0.14em] text-[rgba(111,252,226,0.7)] uppercase">
          {prize.rank}
        </p>

        {open ? (
          <>
            {/* prize image — larger, floats gently */}
            <div
              className="relative w-full max-w-[220px] motion-safe:animate-[floatY_3.5s_ease-in-out_infinite] sm:max-w-[260px]"
              style={{ height: "clamp(140px, 22vw, 200px)" }}
            >
              <Image
                src={prize.imageSrc}
                alt={`${prize.rank} prize`}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 220px, 260px"
              />
            </div>

            <ul className="text-m list-none text-center leading-[1.9] text-white/80">
              {prize.items.map((item) => (
                <li
                  key={item}
                  className="before:mr-1 before:text-[rgba(255,255,255,0.45)] before:content-['·']"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* sponsor logos */}
            {prize.sponsors.length > 0 && (
              <div className="mt-1 flex items-center justify-center gap-3">
                {prize.sponsors.map((s) => (
                  <div
                    key={s.name}
                    className="relative h-6 w-16 opacity-60 grayscale transition-[opacity,filter] hover:opacity-90 hover:grayscale-0"
                  >
                    {/* replace with actual logo — src is the path */}
                    <Image
                      src={s.logoSrc}
                      alt={s.name}
                      fill
                      className="object-contain"
                      sizes="70px"
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <p className="text-s text-white/40">tap to reveal</p>
        )}
      </div>
    </button>
  );
}

// ─── track section ────────────────────────────────────────────────────────────

// uniform pill color across all tracks
const PILL =
  "bg-[rgba(184,164,255,0.15)] text-[#b8a4ff] border-[rgba(184,164,255,0.35)]";

function TrackSection({
  pill,
  name,
  desc,
  sponsor,
  prizes,
  single,
}: {
  pill: string;
  name: string;
  desc: string;
  sponsor?: string;
  prizes: Prize[];
  single?: boolean;
}) {
  return (
    <section className="mb-10">
      {/* header */}
      <div className="mb-5 flex min-w-0 flex-col">
        <span
          className={[
            "mb-2 inline-block self-start rounded-full border px-3 py-0.5 text-[14px] font-bold tracking-[0.14em] uppercase",
            PILL,
          ].join(" ")}
        >
          {pill}
        </span>
        <p className="[font-family:var(--font-luxurious-script)] text-5xl font-normal text-white md:text-6xl">
          {name}
        </p>
        <p className="mt-1 w-full [font-family:var(--font-inria-sans)] text-sm leading-relaxed text-white/80 md:text-base">
          {desc}
        </p>
        {sponsor && <p className="text-m mt-1 text-white/60">{sponsor}</p>}
      </div>

      {/* cards side by side */}
      <div className="flex items-start gap-4">
        {/* card grid or single card */}
        <div className="min-w-0 flex-1">
          {single ? (
            <PrizeCard prize={prizes[0]} />
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {prizes.map((p) => (
                <PrizeCard key={p.id} prize={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── main export ──────────────────────────────────────────────────────────────

export default function Prizes() {
  return (
    <section
      id="prizes"
      className="flex justify-center bg-(--blue) px-4 py-12 text-white"
    >
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      <div className="container w-full">
        <h1 className="w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Prizes
        </h1>

        <p className="mt-2 mb-10 w-full text-sm tracking-wide text-white/40 md:text-base">
          Tap a card to reveal what&apos;s waiting for you.
        </p>

        <TrackSection
          pill="General track"
          name="For all explorers"
          desc="This track invites participants of all backgrounds to explore how design can help transform chaos into clarity."
          sponsor="Sponsored by Gemini & Notability"
          prizes={generalPrizes}
        />

        <hr className="my-2 border-t border-none border-[rgba(88,63,247,0.2)]" />

        <div className="my-8">
          <TrackSection
            pill="Professional track"
            name="For seasoned designers"
            desc="This track explores how design can bring bold visions to life, turning creative sparks into constellations of possibility."
            sponsor="Sponsored by Menya Hanabi & Auntea Jenny & EAT Studio"
            prizes={professionalPrizes}
            single
          />
        </div>

        <hr className="my-2 border-t border-none border-[rgba(88,63,247,0.2)]" />

        <div className="mt-8">
          <TrackSection
            pill="Special awards"
            name="Beyond the podium"
            desc="Celebrating creativity, boldness, and the community's favorites."
            prizes={specialPrizes}
          />
        </div>
      </div>
    </section>
  );
}
