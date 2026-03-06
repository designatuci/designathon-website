"use client";

import { Luxurious_Script } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import CommitteeConstellation, { Committee } from "./committee-constellation";

const COMMITTEES: Committee[] = [
  {
    id: "web",
    name: "Web Team",
    star: "/images/seasons/2026/landing/committees/blue.png",
    glow: "rgba(100,200,255,0.8)",
    pos: { x: 18, y: 20 },
    size: 150, fd: 4.2, fdelay: 0,
    description: "Building and maintaining the Design-a-thon digital experience.",
    constellationName: "Orion",
    constellation: {
      members: [[120,310],[320,310],[120,150],[320,150]],
      dummies: [[190,210],[220,210],[250,210]],
      director: [220,80],
      lines: [[[120,150],[190,210]],[[320,150],[250,210]],[[190,210],[220,210]],[[220,210],[250,210]],[[120,310],[190,210]],[[320,310],[250,210]],[[120,150],[220,80]],[[320,150],[220,80]]],
    },
    members: [
      { name: "Alex Chen", role: "Director", bio: "Alex leads the web team with 3 years of full-stack experience, specializing in Next.js and design systems." },
      { name: "Jamie Park", role: "Co-Lead", bio: "Jamie architects the frontend, obsessed with performance and pixel-perfect implementation." },
      { name: "Casey Wu", role: "Engineer", bio: "Casey builds backend integrations and keeps the registration system running smoothly." },
      { name: "Jordan Patel", role: "Designer", bio: "Jordan bridges design and engineering, turning Figma files into living interfaces." },
    ],
  },
  {
    id: "logistics",
    name: "Logistics & Operations",
    star: "/images/seasons/2026/landing/committees/green.png",
    glow: "rgba(100,255,140,0.8)",
    pos: { x: 62, y: 12 },
    size: 120, fd: 3.8, fdelay: 0.5,
    description: "Coordinating venues, schedules, and supplies to keep the event running smoothly.",
    constellationName: "Little Dipper",
    constellation: {
      members: [[130,280],[250,290],[260,190],[150,170]],
      dummies: [[200,100]],
      director: [280,50],
      lines: [[[130,280],[250,290]],[[250,290],[260,190]],[[260,190],[150,170]],[[150,170],[130,280]],[[150,170],[200,100]],[[200,100],[280,50]]],
    },
    members: [
      { name: "Morgan Lee", role: "Director", bio: "Morgan orchestrates every moving part of the event, from venue setup to day-of schedules." },
      { name: "Sam Torres", role: "Coordinator", bio: "Sam manages vendor relationships and ensures all supplies arrive on time." },
      { name: "Riley Kim", role: "Coordinator", bio: "Riley handles participant communications and keeps the event timeline on track." },
      { name: "Drew Park", role: "Assistant", bio: "Drew supports logistics operations across all fronts of the event." },
    ],
  },
  {
    id: "finance",
    name: "Finance & Budgeting",
    star: "/images/seasons/2026/landing/committees/orange.png",
    glow: "rgba(255,170,60,0.8)",
    pos: { x: 13, y: 74 },
    size: 110, fd: 4.5, fdelay: 0.8,
    description: "Managing budgets and financial planning to keep the event on track.",
    constellationName: "Libra",
    constellation: {
      members: [[110,250],[330,250],[110,300],[330,300]],
      dummies: [[160,190],[280,190]],
      director: [220,110],
      lines: [[[220,110],[160,190]],[[220,110],[280,190]],[[160,190],[110,250]],[[160,190],[110,300]],[[280,190],[330,250]],[[280,190],[330,300]],[[110,250],[110,300]],[[330,250],[330,300]],[[160,190],[280,190]]],
    },
    members: [
      { name: "Sage Miller", role: "Director", bio: "Sage keeps the event financially healthy, managing a budget across 6 committees." },
      { name: "Blake Foster", role: "Treasurer", bio: "Blake processes all reimbursements and tracks expenses in real time." },
      { name: "Rowan Clark", role: "Analyst", bio: "Rowan builds financial projections and helps the team make data-driven decisions." },
      { name: "Avery Lane", role: "Assistant", bio: "Avery supports financial reporting and budget tracking across all committees." },
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Outreach",
    star: "/images/seasons/2026/landing/committees/pink.png",
    glow: "rgba(255,140,200,0.8)",
    pos: { x: 48, y: 82 },
    size: 145, fd: 3.6, fdelay: 0.3,
    description: "Spreading the word and building excitement around Design-a-thon.",
    constellationName: "Leo",
    constellation: {
      members: [[220,330],[360,210],[280,170],[180,140]],
      dummies: [[120,260],[140,200]],
      director: [190,70],
      lines: [[[220,330],[120,260]],[[120,260],[140,200]],[[140,200],[180,140]],[[180,140],[280,170]],[[280,170],[360,210]],[[190,70],[180,140]],[[190,70],[140,200]],[[220,330],[280,170]]],
    },
    members: [
      { name: "Indigo Ray", role: "Director", bio: "Indigo drives the marketing strategy that brought in 400+ applicants last season." },
      { name: "Skye Lam", role: "Brand Lead", bio: "Skye maintains the visual identity across all marketing touchpoints." },
      { name: "Phoenix Yu", role: "Illustrator", bio: "Phoenix creates custom illustrations that make the brand unforgettable." },
      { name: "Nova Bell", role: "Motion", bio: "Nova produces motion graphics and animations for all social content." },
    ],
  },
  {
    id: "creative",
    name: "Creative & Branding",
    star: "/images/seasons/2026/landing/committees/purple.png",
    glow: "rgba(180,80,255,0.8)",
    pos: { x: 87, y: 38 },
    size: 125, fd: 4.8, fdelay: 1.2,
    description: "Crafting the visual identity that brings the cosmic theme to life.",
    constellationName: "Cassiopeia",
    constellation: {
      members: [[60,280],[140,150],[300,150],[380,280]],
      dummies: [],
      director: [220,280],
      lines: [[[60,280],[140,150]],[[140,150],[220,280]],[[220,280],[300,150]],[[300,150],[380,280]],[[380,280],[220,280]],[[220,280],[60,280]]],
    },
    members: [
      { name: "Zara Moon", role: "Director", bio: "Zara defines the creative direction and ensures every detail is intentional." },
      { name: "Cruz Vega", role: "Social Lead", bio: "Cruz manages the social presence and has grown Instagram to 5k+ followers." },
      { name: "Ember Walsh", role: "Copywriter", bio: "Ember writes the words that make people feel the magic of Design-a-thon." },
      { name: "Atlas Grey", role: "Outreach", bio: "Atlas connects with student orgs and clubs to spread the word across campuses." },
    ],
  },
  {
    id: "corporate",
    name: "Corporate Relations",
    star: "/images/seasons/2026/landing/committees/yellow.png",
    glow: "rgba(255,230,80,0.8)",
    pos: { x: 78, y: 76 },
    size: 130, fd: 5, fdelay: 1,
    description: "Securing sponsorships and building industry partnerships.",
    constellationName: "Gemini",
    constellation: {
      members: [[140,350],[180,350],[260,350],[300,350]],
      dummies: [[160,230],[280,230]],
      director: [220,100],
      lines: [[[140,350],[160,230]],[[160,230],[220,100]],[[180,350],[160,230]],[[260,350],[280,230]],[[280,230],[220,100]],[[300,350],[280,230]],[[160,230],[280,230]]],
    },
    members: [
      { name: "Drew Nguyen", role: "Director", bio: "Drew leads sponsor outreach and has secured partnerships with 12+ industry leaders." },
      { name: "Taylor Moss", role: "Outreach", bio: "Taylor crafts compelling pitch decks and manages initial sponsor conversations." },
      { name: "Avery Singh", role: "Partnerships", bio: "Avery nurtures long-term sponsor relationships and coordinates participant perks." },
      { name: "Quinn Adams", role: "Relations", bio: "Quinn handles contracts and ensures all partnership agreements are fulfilled." },
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
  [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 5], [1, 4],
];

const luxurious = Luxurious_Script({ subsets: ["latin"], weight: "400" });

export default function MeetCommittees() {
  const [active, setActive] = useState<string | null>(null);
  const [selected, setSelected] = useState<Committee | null>(null);

  const handleStarClick = (c: Committee) => {
    setActive(c.id);
    setSelected(c);
  };

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute w-full"
        style={{
          top: "-200px",
          height: "calc(100% + 200px)",
          backgroundImage: "url('/images/seasons/2026/landing/committees/galaxy.png')",
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
          .star-img { display: block; object-fit: contain; transition: filter 0.3s ease; }
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

        <div className="relative z-10 h-[min(90vh,800px)] w-[min(1100px,95vw)] overflow-visible">
          <svg className="pointer-events-none absolute inset-0 h-full w-full">
            <ellipse cx={`${cx}%`} cy={`${cy}%`} rx={`${rx}%`} ry={`${ry}%`} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="6 8" />
            <ellipse cx={`${cx - 5}%`} cy={`${cy}%`} rx={`${rx}%`} ry={`${ry}%`} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="6 8" />
            {CONNECTIONS.map(([a, b]) => (
              <line key={`${a}-${b}`}
                x1={`${COMMITTEES[a].pos.x}%`} y1={`${COMMITTEES[a].pos.y}%`}
                x2={`${COMMITTEES[b].pos.x}%`} y2={`${COMMITTEES[b].pos.y}%`}
                stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4 6"
              />
            ))}
          </svg>

          <div
            className="pointer-events-none absolute z-10 text-center"
            style={{ left: `${cx}%`, top: `${cy}%`, transform: "translate(-60%, -50%)" }}
          >
            <div className={`${luxurious.className} script-glow mr-[20%] text-8xl font-normal leading-none text-white md:text-9xl xl:text-[6rem]`}>
              Meet The
            </div>
            <div className={`${luxurious.className} script-glow -mt-6 ml-[20%] text-8xl font-normal leading-none text-white md:text-9xl xl:text-[9rem]`}>
              Committees
            </div>
          </div>

          {COMMITTEES.map((c) => (
            <button
              key={c.id}
              className={`focus:outline-none star-btn ${active === c.id ? "active" : ""}`}
              style={{ left: `${c.pos.x}%`, top: `${c.pos.y}%`, ["--glow" as string]: c.glow }}
              onClick={() => handleStarClick(c)}
            >
              <Image
                src={c.star} alt={c.name}
                width={c.size} height={c.size}
                className="star-img"
                style={{
                  width: c.size, height: c.size,
                  animation: `floatStar ${c.fd}s ease-in-out ${c.fdelay}s infinite`,
                  filter: `drop-shadow(0 0 12px ${c.glow})`,
                }}
              />
              <span className="star-label">{c.name}</span>
            </button>
          ))}
        </div>

        <CommitteeConstellation
          committee={selected}
          onClose={() => { setSelected(null); setActive(null); }}
        />
      </main>
    </div>
  );
}