"use client";

import { useState, useCallback } from "react";

// ─── data ────────────────────────────────────────────────────────────────────

const generalPrizes = [
  {
    id: "gold",
    rank: "1st place",
    planet: "gold" as const,
    items: ["4× Sony Headphones", "4× Annual Notability Pro", "4× $100 Visa Gift Cards"],
    sponsor: "Gemini & Notability",
  },
  {
    id: "silver",
    rank: "2nd place",
    planet: "silver" as const,
    items: ["4× Anker Power Banks", "4× Annual Notability Pro", "4× $50 Visa Gift Cards", "2× Bluety Goodie Bags"],
    sponsor: "Gemini & Notability",
  },
  {
    id: "bronze",
    rank: "3rd place",
    planet: "bronze" as const,
    items: ["4× Echo Dots", "4× Annual Notability Pro", "4× Bluety Goodie Bags"],
    sponsor: "Gemini & Notability",
  },
];

const professionalPrizes = [
  {
    id: "pro",
    rank: "Professional prize",
    planet: "pro" as const,
    items: [
      "Guaranteed Cup Design Collaboration",
      "Resume + Portfolio Review with EAT Studio",
      "$400 at Menya Hanabi + Exclusive T-Shirts",
      "4× $100 Visa Gift Cards",
    ],
    sponsor: "Menya Hanabi & Auntea Jenny",
  },
];

const specialPrizes = [
  {
    id: "begin",
    rank: "Beginner's prize",
    planet: "begin" as const,
    items: ["4× Chaism Matcha Powder", "4× Joiish Matcha Kit"],
  },
  {
    id: "novel",
    rank: "Most novel",
    planet: "novel" as const,
    items: ["4× LEGO 3-in-1 Building Sets", "4× LEGO Large Sets"],
  },
  {
    id: "people",
    rank: "People's choice",
    planet: "people" as const,
    featured: false,
    items: ["4× Apple AirTags + Case", "4× Chipotle Gift Cards", "5× Cane's Box Combo Gift Cards", "2× Bluety Gift Bag"],
  },
];

// ─── prize card ───────────────────────────────────────────────────────────────

type Prize = {
  id: string;
  rank: string;
  items: string[];
  sponsor?: string;
};

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
      className={[
        "prize-card relative w-full cursor-pointer overflow-hidden rounded-2xl text-left",
        "border backdrop-blur-md transition-[transform,border-color,box-shadow] duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        "border-[rgba(88,63,247,0.55)] [border-left:3px_solid_rgba(26,64,231,0.32)]",
        "hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(88,63,247,0.18)]",
      ].join(" ")}
      style={{ background: "rgba(195,195,195,0.01)" }}
      aria-expanded={open}
    >
      {/* glare streak */}
      <div
        className="pointer-events-none absolute inset-x-8 top-0 z-10 h-[2px] rounded-full"
        style={{
          background: "linear-gradient(90deg,transparent,rgba(111,252,226,0.82),rgba(167,139,250,0.5),transparent)",
        }}
      />

      {/* face */}
      <div
        className={[
          "flex min-h-[170px] flex-col items-center justify-center gap-2 p-5 text-center",
          "transition-[opacity,transform] duration-[180ms]",
          flipping ? "scale-[0.93] opacity-0" : "scale-100 opacity-100",
        ].join(" ")}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[rgba(111,252,226,0.65)]">
          {prize.rank}
        </p>

        {open ? (
          <>
            <ul className="list-none text-center text-[11.5px] leading-[1.9] text-white/75">
              {prize.items.map((item) => (
                <li key={item} className="before:mr-1 before:text-[rgba(111,252,226,0.4)] before:content-['·']">
                  {item}
                </li>
              ))}
            </ul>
            {prize.sponsor && (
              <span className="mt-1 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-white/30">
                {prize.sponsor}
              </span>
            )}
          </>
        ) : (
          <p className="text-[10.5px] text-white/30">tap to reveal</p>
        )}
      </div>
    </button>
  );
}

// ─── track section ────────────────────────────────────────────────────────────

function TrackSection({
  pill,
  pillColor,
  mascot,
  mascotDelay,
  name,
  desc,
  sponsor,
  prizes,
  single,
}: {
  pill: string;
  pillColor: "general" | "pro" | "special";
  mascot: string;
  mascotDelay: string;
  name: string;
  desc: string;
  sponsor?: string;
  prizes: Prize[];
  single?: boolean;
}) {
  const pillStyles: Record<string, string> = {
    general: "bg-[rgba(184,164,255,0.15)] text-[#b8a4ff] border-[rgba(184,164,255,0.35)]",
    pro:     "bg-[rgba(200,214,229,0.1)]  text-[#c8d6e5] border-[rgba(200,214,229,0.25)]",
    special: "bg-[rgba(111,236,226,0.1)]  text-[#6fece2] border-[rgba(111,236,226,0.25)]",
  };

  return (
    <section className="mb-10">
      {/* header */}
      <div className="mb-4 flex items-start gap-3.5">
        <span
          className="mt-1 shrink-0 text-[36px] motion-safe:animate-[floatY_5s_ease-in-out_infinite]"
          style={{ animationDelay: mascotDelay }}
        >
          {mascot}
        </span>
        <div>
          <span
            className={[
              "mb-1.5 inline-block rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em]",
              pillStyles[pillColor],
            ].join(" ")}
          >
            {pill}
          </span>
          <p className="[font-family:var(--font-luxurious-script)] text-3xl font-normal text-white md:text-4xl">
            {name}
          </p>
          <p className="mt-0.5 max-w-lg text-[12px] leading-relaxed text-white/50">{desc}</p>
          {sponsor && <p className="mt-0.5 text-[10.5px] text-white/30">{sponsor}</p>}
        </div>
      </div>

      {/* cards */}
      {single ? (
        <div className="max-w-sm">
          <PrizeCard prize={prizes[0]} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {prizes.map((p) => (
            <PrizeCard key={p.id} prize={p} />
          ))}
        </div>
      )}
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
        @keyframes prize-bob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-7px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[floatY_5s_ease-in-out_infinite\\] { animation: none; }
        }
      `}</style>

      <div className="container w-full">
        <h1 className="w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Prizes
        </h1>

        <p className="mb-10 mt-2 text-[12px] tracking-wide text-white/40">
          Tap a card to reveal what&apos;s waiting for you.
        </p>

        <TrackSection
          pill="General track"
          pillColor="general"
          mascot="🪐"
          mascotDelay="0.6s"
          name="Open to all explorers"
          desc="This track invites participants of all backgrounds to explore how design can help transform chaos into clarity."
          sponsor="Sponsored by Gemini & Notability"
          prizes={generalPrizes}
        />

        <hr className="my-2 border-none border-t border-[rgba(88,63,247,0.2)]" />

        <div className="my-8">
          <TrackSection
            pill="Professional track"
            pillColor="pro"
            mascot="🌌"
            mascotDelay="2s"
            name="For the seasoned designers"
            desc="This track explores how design can bring bold visions to life, turning creative sparks into constellations of possibility."
            sponsor="Sponsored by Menya Hanabi & Auntea Jenny"
            prizes={professionalPrizes}
            single
          />
        </div>

        <hr className="my-2 border-none border-t border-[rgba(88,63,247,0.2)]" />

        <div className="mt-8">
          <TrackSection
            pill="Special awards"
            pillColor="special"
            mascot="🛸"
            mascotDelay="1.2s"
            name="Beyond the podium"
            desc="Celebrating creativity, boldness, and the community's favorites."
            prizes={specialPrizes}
          />
        </div>
      </div>
    </section>
  );
}