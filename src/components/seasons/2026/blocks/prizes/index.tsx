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
      "4x Sony Headphones",
      "4x Annual Notability Pro",
      "4x $100 Visa Gift Cards",
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
        logoSrc:
          "/images/seasons/2026/landing/prizes/sponsors/notability_logo.png",
      },
    ],
  },
  {
    id: "silver",
    rank: "2nd place",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/second.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/2.png",
    items: [
      "4x Anker Power Banks",
      "4x Bluety Gift Bags",
      "4x Annual Notability Pro",
      "4x $50 Visa Gift Cards",
    ],
    featured: false,
    sponsors: [
      {
        name: "Gemini",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/gemini.png",
      },
      {
        name: "Notability",
        logoSrc:
          "/images/seasons/2026/landing/prizes/sponsors/notability_logo.png",
      },
    ],
  },
  {
    id: "bronze",
    rank: "3rd place",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/third.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/third.png",
    items: ["4x Echo Dots", "4x Bluety Gift Bags", "4x Annual Notability Pro"],
    featured: false,
    sponsors: [
      {
        name: "Gemini",
        logoSrc: "/images/seasons/2026/landing/prizes/sponsors/gemini.png",
      },
      {
        name: "Notability",
        logoSrc:
          "/images/seasons/2026/landing/prizes/sponsors/notability_logo.png",
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
      "Design a Auntea Jenny Cup Opportunity + $50 Auntea Jenny",
      "1:1 Resume/Portfolio Review with EAT Studio",
      "4x $100 Menya Hanabi Gift Cards + 4x Exclusive T-Shirts",
      "4x $100 Visa Gift Cards",
      "4x $50 Figma Gift Cards",
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
    items: [
      "4x Joiish Matcha Kit",
      "4x Chaism Ceremonial Grade Matcha Powder",
      "4x Figma Gift Cards",
    ],
    featured: false,
    sponsors: [] as { name: string; logoSrc: string }[],
  },
  {
    id: "novel",
    rank: "Most novel",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/novel_planet.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/novel.png",
    items: [
      "4x LEGO 3in1 Building Toy Lego Sets",
      "1x LEGO Bricklink Pursuit of Flight Set",
      "1x LEGO Bricklink Popcorn Wagon Set",
      "1x LEGO Love Birds Set",
      "1x LEGO Bonsai Tree Set",
    ],
    featured: false,
    sponsors: [] as { name: string; logoSrc: string }[],
  },
  {
    id: "people",
    rank: "People's choice",
    planetSrc: "/images/seasons/2026/landing/prizes/planets/peoples.png",
    imageSrc: "/images/seasons/2026/landing/prizes/prizes/peoples.png",
    items: [
      "4x Apple AirTags",
      "4x Apple AirTag Cases",
      "4x Chipotle Entree Gift Cards",
      "5x Cane's Box Combo Gift Cards",
      "2x Bluety Gift Bag",
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

  /** Same height front/back (~1.5× prior 168 / 176). */
  const cardHeightClass =
    "min-h-[252px] max-h-[252px] sm:min-h-[264px] sm:max-h-[264px]";

  return (
    <button
      onClick={toggle}
      aria-expanded={open}
      className={[
        "relative w-full cursor-pointer overflow-hidden rounded-2xl text-left",
        cardHeightClass,
        "border backdrop-blur-md",
        "transition-[transform,border-color,box-shadow] duration-200",
        "focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:outline-none",
        open || prize.featured
          ? "border-[rgba(111,252,226,0.75)] shadow-[0_0_24px_rgba(111,252,226,0.15)] [border-left:3px_solid_rgba(111,252,226,0.45)]"
          : "border-[rgba(88,63,247,0.55)] [border-left:3px_solid_rgba(26,64,231,0.32)] hover:border-[rgba(88,63,247,0.85)] hover:shadow-[0_8px_32px_rgba(88,63,247,0.18)]",
        "hover:-translate-y-0.5",
      ].join(" ")}
      style={{ background: "rgba(12, 8, 32, 0.88)" }}
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
          "flex h-full min-h-0 flex-col items-center text-center",
          "px-4 transition-[opacity,transform] duration-[180ms] sm:px-5",
          open
            ? "justify-center overflow-hidden py-1 sm:py-1.5"
            : "justify-center gap-1.5 py-4 sm:gap-2 sm:py-5",
          flipping ? "scale-[0.93] opacity-0" : "scale-100 opacity-100",
        ].join(" ")}
      >
        {!open && (
          <>
            {/* planet — floats + glows */}
            <div
              className={[
                "relative shrink-0 transition-[opacity,transform,width,height] duration-500",
                "motion-safe:animate-[floatY_3s_ease-in-out_infinite]",
              ].join(" ")}
              style={{
                width: 78,
                height: 78,
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.65))",
              }}
            >
              <Image
                src={prize.planetSrc}
                alt=""
                fill
                className={[
                  "pointer-events-none object-contain select-none",
                  prize.id === "pro" ? "scale-[1.5]" : "",
                ].join(" ")}
                sizes="78px"
                draggable={false}
              />
            </div>

            <p className="shrink-0 text-sm leading-tight font-bold tracking-[0.12em] text-[#9eb4e8] uppercase sm:text-base">
              {prize.rank}
            </p>

            {prize.sponsors.length > 0 && (
              <div className="mt-1 flex shrink-0 items-center justify-center gap-2">
                {prize.sponsors.map((s) => (
                  <div
                    key={s.name}
                    className={[
                      "relative h-4 w-11 opacity-60 grayscale transition-[opacity,filter] hover:opacity-90 hover:grayscale-0 sm:h-5 sm:w-12",
                      s.name === "Notability" ? "translate-y-[2px]" : "",
                    ].join(" ")}
                  >
                    <Image
                      src={s.logoSrc}
                      alt={s.name}
                      fill
                      className="pointer-events-none object-contain select-none"
                      sizes="70px"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {open && (
          <div className="flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-1.5 overflow-hidden py-0.5 text-center sm:gap-2 sm:py-1">
            <p className="shrink-0 text-[11px] leading-tight font-bold tracking-[0.12em] text-[#9eb4e8] uppercase sm:text-xs">
              {prize.rank}
            </p>

            <div
              className="relative w-full max-w-[120px] shrink-0 motion-safe:animate-[floatY_3.5s_ease-in-out_infinite] sm:max-w-[140px]"
              style={{ height: "clamp(52px, 11vw, 72px)" }}
            >
              <Image
                src={prize.imageSrc}
                alt={`${prize.rank} prize`}
                fill
                className="pointer-events-none object-contain select-none"
                sizes="(max-width: 640px) 120px, 140px"
                draggable={false}
              />
            </div>

            <ul className="w-full max-w-[min(100%,20rem)] list-none space-y-px text-center text-[10px] leading-snug text-white/80 sm:text-[11px] sm:leading-snug">
              {prize.items.map((item) => (
                <li
                  key={item}
                  className="before:mr-0.5 before:text-[rgba(255,255,255,0.4)] before:content-['·']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
        <h1 className="mb-6 w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:mb-6 md:text-9xl xl:text-[7rem]">
          Prizes
        </h1>

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
