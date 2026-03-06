"use client";

import { Luxurious_Script } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

export type Committee = {
  id: string;
  name: string;
  star: string;
  glow: string;
  pos: { x: number; y: number };
  size: number;
  fd: number;
  fdelay: number;
  description: string;
  members: { name: string; role: string; emoji: string }[];
};

const COMMITTEES: Committee[] = [
  {
    id: "web",
    name: "Web Team",
    star: "/images/seasons/2026/landing/committees/blue.png",
    glow: "rgba(100,200,255,0.8)",
    pos: { x: 18, y: 20 },
    size: 150,
    fd: 4.2,
    fdelay: 0,
    description:
      "The backbone of the event — coordinating venues, schedules, supplies, and making sure everything runs like clockwork on the day of.",
    members: [
      { name: "Alex Chen", role: "Director", emoji: "🌟" },
      { name: "Jamie Park", role: "Co-Lead", emoji: "✨" },
      { name: "Sam Torres", role: "Coordinator", emoji: "💫" },
      { name: "Riley Kim", role: "Coordinator", emoji: "🌠" },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Operations",
    star: "/images/seasons/2026/landing/committees/green.png",
    glow: "rgba(100,255,140,0.8)",
    pos: { x: 62, y: 12 },
    size: 120,
    fd: 3.8,
    fdelay: 0.5,
    description:
      "Building and maintaining the Design-a-thon website, registration systems, and all digital touchpoints for participants.",
    members: [
      { name: "Morgan Lee", role: "Director", emoji: "🌿" },
      { name: "Casey Wu", role: "Dev Lead", emoji: "💻" },
      { name: "Jordan Patel", role: "Designer", emoji: "🎨" },
    ],
  },
  {
    id: "Finance",
    name: "Finance & Budgeting",
    star: "/images/seasons/2026/landing/committees/orange.png",
    glow: "rgba(255,170,60,0.8)",
    pos: { x: 13, y: 74 },
    size: 110,
    fd: 4.5,
    fdelay: 0.8,
    description:
      "Managing budgets, reimbursements, and financial planning to ensure the event stays on track and resources are allocated wisely.",
    members: [
      { name: "Sage Miller", role: "Director", emoji: "🔶" },
      { name: "Blake Foster", role: "Treasurer", emoji: "💰" },
      { name: "Rowan Clark", role: "Analyst", emoji: "📊" },
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Outreach",
    star: "/images/seasons/2026/landing/committees/pink.png",
    glow: "rgba(255,140,200,0.8)",
    pos: { x: 48, y: 82 },
    size: 145,
    fd: 3.6,
    fdelay: 0.3,
    description:
      "Crafting the visual identity, branding, illustrations, and all design assets that bring the cosmic theme of Design-a-thon to life.",
    members: [
      { name: "Indigo Ray", role: "Director", emoji: "🌸" },
      { name: "Skye Lam", role: "Brand Lead", emoji: "🎀" },
      { name: "Phoenix Yu", role: "Illustrator", emoji: "🖌️" },
      { name: "Nova Bell", role: "Motion", emoji: "✨" },
      { name: "Lyric Tan", role: "Designer", emoji: "🌺" },
    ],
  },
  {
    id: "creative",
    name: "Creative & Branding",
    star: "/images/seasons/2026/landing/committees/purple.png",
    glow: "rgba(180,80,255,0.8)",
    pos: { x: 87, y: 38 },
    size: 125,
    fd: 4.8,
    fdelay: 1.2,
    description:
      "Spreading the word across social media, email campaigns, and outreach to bring the best designers from across the country.",
    members: [
      { name: "Zara Moon", role: "Director", emoji: "💜" },
      { name: "Cruz Vega", role: "Social Lead", emoji: "📱" },
      { name: "Ember Walsh", role: "Copywriter", emoji: "✍️" },
      { name: "Atlas Grey", role: "Outreach", emoji: "📣" },
    ],
  },
  {
    id: "corporate",
    name: "Corporate Relations",
    star: "/images/seasons/2026/landing/committees/yellow.png",
    glow: "rgba(255,230,80,0.8)",
    pos: { x: 78, y: 76 },
    size: 130,
    fd: 5,
    fdelay: 1,
    description:
      "Securing sponsorships and building relationships with industry partners to make the event possible and rewarding for all participants.",
    members: [
      { name: "Drew Nguyen", role: "Director", emoji: "⭐" },
      { name: "Taylor Moss", role: "Outreach", emoji: "🤝" },
      { name: "Avery Singh", role: "Partnerships", emoji: "💼" },
      { name: "Quinn Adams", role: "Relations", emoji: "📋" },
    ],
  },
];

const xs = COMMITTEES.map((c) => c.pos.x);
const ys = COMMITTEES.map((c) => c.pos.y);
const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
const rx = (Math.max(...xs) - Math.min(...xs)) / 2 + 8;
const ry = (Math.max(...ys) - Math.min(...ys)) / 2 + 8;

const CONNECTIONS: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [4, 5],
  [2, 5],
  [1, 4],
];

type Props = {
  onSelectCommittee?: (committee: Committee) => void;
};

const luxurious = Luxurious_Script({ subsets: ["latin"], weight: "400" });

export default function MeetCommittees({ onSelectCommittee }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const handleStarClick = (c: Committee) => {
    setActive(c.id);
    onSelectCommittee?.(c);
  };

  return (
    <div className="relative">
      {/* Galaxy bleeds upward with negative margin */}
      <div
        className="pointer-events-none absolute w-full"
        style={{
          top: "-200px",
          height: "calc(100% + 200px)",
          backgroundImage:
            "url('/images/seasons/2026/landing/committees/galaxy.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-transparent pt-[5%] pb-[15%]">
        <style>{`

        .script-glow {
            letter-spacing: 0.04em;
            text-shadow:
            0 0 6px rgba(255,255,255,0.6),
            0 0 12px rgba(180,120,255,0.7),
            0 0 24px rgba(160,90,255,0.6),
            0 0 48px rgba(140,70,255,0.45);

            animation: glowPulse 3s ease-in-out infinite alternate;
        }

        .star-btn {
          position: absolute;
          transform: translate(-50%, -50%);
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          transition: transform 0.3s ease;
        }
        .star-btn:hover { transform: translate(-50%, -50%) scale(1.15); }
        .star-btn.active { transform: translate(-50%, -50%) scale(1.2); }

        .star-img {
          display: block;
          object-fit: contain;
          transition: filter 0.3s ease;
        }
        .star-btn:hover .star-img,
        .star-btn.active .star-img {
          filter: drop-shadow(0 0 22px var(--glow)) drop-shadow(0 0 40px var(--glow)) !important;
        }

        @keyframes floatStar {
          0%,100% { transform: translateY(0) rotate(0deg); }
          33%      { transform: translateY(-10px) rotate(1deg); }
          66%      { transform: translateY(-5px) rotate(-1deg); }
        }

        .star-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          white-space: nowrap;
          transition: color 0.3s;
          text-shadow: 0 0 10px rgba(0,0,0,0.8);
        }
        .star-btn:hover .star-label,
        .star-btn.active .star-label { color: white; }
      `}</style>

        {/* Constellation area */}
        <div className="relative z-10 h-[min(90vh,800px)] w-[min(1100px,95vw)] overflow-visible">
          {/* SVG lines + ellipse */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full">
            <ellipse
              cx={`${cx}%`}
              cy={`${cy}%`}
              rx={`${rx}%`}
              ry={`${ry}%`}
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
              strokeDasharray="6 8"
            />
            <ellipse
              cx={`${cx - 5}%`}
              cy={`${cy}%`}
              rx={`${rx}%`}
              ry={`${ry}%`}
              fill="none"
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="1"
              strokeDasharray="6 8"
            />
            {CONNECTIONS.map(([a, b]) => (
              <line
                key={`${a}-${b}`}
                x1={`${COMMITTEES[a].pos.x}%`}
                y1={`${COMMITTEES[a].pos.y}%`}
                x2={`${COMMITTEES[b].pos.x}%`}
                y2={`${COMMITTEES[b].pos.y}%`}
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
            ))}
          </svg>

          {/* Center title */}
          <div
            className="pointer-events-none absolute z-10 text-center"
            style={{
              left: `${cx}%`,
              top: `${cy}%`,
              transform: "translate(-60%, -50%)",
            }}
          >
            <div
              className={`${luxurious.className} script-glow mr-[20%] text-8xl leading-none font-normal text-white md:text-9xl xl:text-[6rem]`}
            >
              Meet The
            </div>
            <div
              className={`${luxurious.className} script-glow -mt-6 ml-[20%] text-8xl leading-none font-normal text-white md:text-9xl xl:text-[9rem]`}
            >
              Committees
            </div>
          </div>

          {/* Stars */}
          {COMMITTEES.map((c) => (
            <button
              key={c.id}
              className={`star-btn ${active === c.id ? "active" : ""}`}
              style={{
                left: `${c.pos.x}%`,
                top: `${c.pos.y}%`,
                ["--glow" as string]: c.glow,
              }}
              onClick={() => handleStarClick(c)}
            >
              <Image
                src={c.star}
                alt={c.name}
                width={c.size}
                height={c.size}
                className="star-img"
                style={{
                  width: c.size,
                  height: c.size,
                  animation: `floatStar ${c.fd}s ease-in-out ${c.fdelay}s infinite`,
                  filter: `drop-shadow(0 0 12px ${c.glow})`,
                }}
              />
              <span className="star-label">{c.name}</span>
            </button>
          ))}
        </div>

        {/* <CommitteeOverlay committee={selected} onClose={() => setActive(null)} /> */}
      </main>
    </div>
  );
}
