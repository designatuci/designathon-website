"use client";

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
    id: "logistics",
    name: "Logistics",
    star: "/images/seasons/2026/committees/blue.png",
    glow: "rgba(100,200,255,0.8)",
    pos: { x: 18, y: 20 },
    size: 110,
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
    id: "web",
    name: "Web",
    star: "/images/seasons/2026/committees/green.png",
    glow: "rgba(100,255,140,0.8)",
    pos: { x: 62, y: 14 },
    size: 85,
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
    id: "corporate",
    name: "Corporate",
    star: "/images/seasons/2026/committees/yellow.png",
    glow: "rgba(255,230,80,0.8)",
    pos: { x: 85, y: 38 },
    size: 95,
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
  {
    id: "finance",
    name: "Finance",
    star: "/images/seasons/2026/committees/orange.png",
    glow: "rgba(255,170,60,0.8)",
    pos: { x: 15, y: 72 },
    size: 78,
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
    id: "creative",
    name: "Creative",
    star: "/images/seasons/2026/committees/pink.png",
    glow: "rgba(255,140,200,0.8)",
    pos: { x: 48, y: 80 },
    size: 105,
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
    id: "marketing",
    name: "Marketing",
    star: "/images/seasons/2026/committees/purple.png",
    glow: "rgba(180,80,255,0.8)",
    pos: { x: 78, y: 75 },
    size: 88,
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
];

// Compute ellipse from bounding box of star positions
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

export default function MeetCommittees({ onSelectCommittee }: Props) {
  const [active, setActive] = useState<string | null>(null);

  const handleStarClick = (c: Committee) => {
    setActive(c.id);
    onSelectCommittee?.(c);
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#04020d]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;500&display=swap');

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
          gap: 8px;
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
          33%      { transform: translateY(-8px) rotate(1deg); }
          66%      { transform: translateY(-4px) rotate(-1deg); }
        }

        .star-label {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          white-space: nowrap;
          transition: color 0.3s;
          text-shadow: 0 0 10px rgba(0,0,0,0.8);
        }
        .star-btn:hover .star-label,
        .star-btn.active .star-label { color: white; }

        .twinkle {
          position: absolute;
          border-radius: 50%;
          background: white;
          animation: twinkle var(--d, 3s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }
        @keyframes twinkle {
          0%,100% { opacity: 0.1; transform: scale(1); }
          50%      { opacity: 0.9; transform: scale(1.4); }
        }
      `}</style>

      {/* Galaxy background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85"
        style={{
          backgroundImage: "url('/images/seasons/2026/committees/galaxy.png')",
        }}
      />

      {/* Constellation area */}
      <div className="relative z-10 h-[500px] w-[min(860px,92vw)]">
        {/* SVG lines + ellipse */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full">
          {/* Orbit ellipse */}
          <ellipse
            cx={`${cx}%`}
            cy={`${cy}%`}
            rx={`${rx}%`}
            ry={`${ry}%`}
            fill="none"
            stroke="rgba(255,255,255,0.13)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          {/* Constellation lines */}
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
          className="pointer-events-none absolute z-10"
          style={{
            left: `${cx}%`,
            top: `${cy}%`,
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.45)",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            Design-a-thon 2026
          </div>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(12px,1.6vw,15px)",
              fontWeight: 400,
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.65)",
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: 2,
            }}
          >
            Meet The
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(38px,5.5vw,64px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 0.9,
              background:
                "linear-gradient(135deg,#fff 0%,#c8b0ff 50%,#ff9de2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Committees
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 12,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.3)",
              marginTop: 8,
              fontStyle: "italic",
            }}
          >
            click on a star
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

      {/* overlay component */}
      {/* <CommitteeOverlay committee={selected} onClose={() => setActive(null)} /> */}
    </main>
  );
}
