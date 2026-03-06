"use client";

import { Luxurious_Script } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import CommitteeConstellation, { Committee } from "./committee-constellation";
import { COMMITTEES, COMMITTEE_CENTER, CONNECTIONS } from "./committees-data";

const { cx, cy, rx, ry } = COMMITTEE_CENTER;

const luxurious = Luxurious_Script({ subsets: ["latin"], weight: "400" });

export default function MeetCommittees() {
  const [active, setActive] = useState<string | null>(null);
  const [selected, setSelected] = useState<Committee | null>(null);

  const handleStarClick = (c: Committee) => {
    setActive(c.id);
    setSelected(c);
  };

  return (
    <section id="team">
      <div className="relative">
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
            gap: 6px;
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
            font-size: 10px;
            letter-spacing: 0.15em;
            color: rgba(255,255,255,0.55);
            text-transform: uppercase;
            white-space: nowrap;
            transition: color 0.3s;
            text-shadow: 0 0 10px rgba(0,0,0,0.8);
          }
          .star-btn:hover .star-label,
          .star-btn.active .star-label { color: white; }

          /* ── Mobile grid ── */
          .mobile-grid { display: none; }
          .desktop-canvas { display: block; }

          @media (max-width: 640px) {
            .mobile-grid { display: grid; }
            .desktop-canvas { display: none; }
          }

          /* Mobile star card */
          .mobile-star-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            background: none;
            border: none;
            padding: 12px 8px;
            border-radius: 16px;
            transition: background 0.2s;
          }
          .mobile-star-card:active { background: rgba(255,255,255,0.06); }
          .mobile-star-card.active { background: rgba(255,255,255,0.08); }
          .mobile-star-label {
            font-size: 9px;
            letter-spacing: 0.15em;
            color: rgba(255,255,255,0.6);
            text-transform: uppercase;
            text-align: center;
            text-shadow: 0 0 8px rgba(0,0,0,0.9);
            max-width: 80px;
            white-space: normal;
            line-height: 1.3;
          }
          .mobile-star-card.active .mobile-star-label { color: white; }
        `}</style>

          {/* ── Mobile title ── */}
          <div className="relative z-10 mb-6 px-4 text-center sm:hidden">
            <div
              className={`${luxurious.className} script-glow text-6xl leading-none font-normal whitespace-nowrap text-white`}
            >
              Meet The
            </div>
            <div
              className={`${luxurious.className} script-glow -mt-3 text-6xl leading-none font-normal text-white`}
            >
              Committees
            </div>
          </div>

          {/* ── Desktop: absolute-positioned star canvas ── */}
          <div className="desktop-canvas relative z-10 h-[min(90vh,800px)] w-[min(1100px,95vw)] overflow-visible">
            <svg className="pointer-events-none absolute inset-0 h-full w-full">
              <ellipse
                cx={`${cx}%`}
                cy={`${cy}%`}
                rx={`${rx}%`}
                ry={`${ry}%`}
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                strokeDasharray="6 8"
              />
              <ellipse
                cx={`${cx - 5}%`}
                cy={`${cy}%`}
                rx={`${rx}%`}
                ry={`${ry}%`}
                fill="none"
                stroke="rgba(255,255,255,0.3)"
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

            {/* Desktop title */}
            <div
              className="pointer-events-none absolute z-10 text-center"
              style={{
                left: `${cx}%`,
                top: `${cy}%`,
                transform: "translate(-60%, -50%)",
              }}
            >
              <div
                className={`${luxurious.className} script-glow mr-[20%] text-8xl leading-none font-normal whitespace-nowrap text-white md:text-9xl xl:text-[6rem]`}
              >
                Meet The
              </div>
              <div
                className={`${luxurious.className} script-glow -mt-6 ml-[20%] text-8xl leading-none font-normal text-white md:text-9xl xl:text-[9rem]`}
              >
                Committees
              </div>
            </div>

            {COMMITTEES.map((c) => (
              <button
                key={c.id}
                className={`star-btn focus:outline-none ${active === c.id ? "active" : ""}`}
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

          {/* ── Mobile: 3×2 grid of star cards ── */}
          <div
            className="mobile-grid relative z-10 w-full max-w-sm px-4"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}
          >
            {COMMITTEES.map((c) => {
              const mobileSize = Math.round(c.size * 0.42);
              return (
                <button
                  key={c.id}
                  className={`mobile-star-card focus:outline-none ${active === c.id ? "active" : ""}`}
                  style={{ ["--glow" as string]: c.glow }}
                  onClick={() => handleStarClick(c)}
                >
                  <Image
                    src={c.star}
                    alt={c.name}
                    width={mobileSize}
                    height={mobileSize}
                    style={{
                      width: mobileSize,
                      height: mobileSize,
                      animation: `floatStar ${c.fd}s ease-in-out ${c.fdelay}s infinite`,
                      filter:
                        active === c.id
                          ? `drop-shadow(0 0 18px ${c.glow}) drop-shadow(0 0 32px ${c.glow})`
                          : `drop-shadow(0 0 8px ${c.glow})`,
                    }}
                  />
                  <span className="mobile-star-label">{c.name}</span>
                </button>
              );
            })}
          </div>

          <CommitteeConstellation
            committee={selected}
            onClose={() => {
              setSelected(null);
              setActive(null);
            }}
          />
        </main>
      </div>
    </section>
  );
}
