"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type CommitteeMember = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
};

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
  constellationName: string;
  constellation: {
    members: [number, number][];
    dummies: [number, number][];
    director: [number, number];
    lines: [[number, number], [number, number]][];
  };
  members: CommitteeMember[];
};

type Props = {
  committee: Committee | null;
  onClose: () => void;
};

export default function CommitteeConstellation({ committee, onClose }: Props) {
  const [visible, setVisible] = useState(false);
  const [membersVisible, setMembersVisible] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [cardKey, setCardKey] = useState(0);

  useEffect(() => {
    if (committee) {
      setVisible(false);
      setMembersVisible(false);
      setCurrentIdx(0);
      setCardKey((k) => k + 1);
      const t1 = setTimeout(() => setVisible(true), 50);
      const t2 = setTimeout(() => setMembersVisible(true), 300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      setVisible(false);
      setMembersVisible(false);
    }
  }, [committee]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const navigate = (dir: 1 | -1) => {
    if (!committee) return;
    const next = currentIdx + dir;
    if (next < 0 || next >= committee.members.length) return;
    setCardKey((k) => k + 1);
    setCurrentIdx(next);
  };

  const goTo = (i: number) => {
    if (i === currentIdx) return;
    setCardKey((k) => k + 1);
    setCurrentIdx(i);
  };

  if (!committee) return null;

  const { constellation, members, glow, name, constellationName, star } =
    committee;
  const member = members[currentIdx];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: visible ? "rgba(2,1,14,0.5)" : "rgba(2,1,14,0)",
        transition: "background 0.5s ease, opacity 0.5s ease",
        opacity: visible ? 1 : 0,
        pointerEvents: committee ? "auto" : "none",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <style>{`
        @keyframes dirIn {
          0%   { opacity:0; transform:translate(-50%,-50%) scale(0.4); filter:blur(8px); }
          100% { opacity:1; transform:translate(-50%,-50%) scale(1);   filter:blur(0); }
        }
        @keyframes memPop {
          0%   { opacity:0; transform:translate(-50%,-50%) scale(0); }
          70%  { opacity:1; transform:translate(-50%,-50%) scale(1.2); }
          100% { opacity:1; transform:translate(-50%,-50%) scale(1); }
        }
        @keyframes memberPulse {
          0%,100% { opacity:0.75; }
          50%      { opacity:1; transform:scale(1.25); }
        }
        @keyframes dummyPulse {
          0%,100% { opacity:0.3; }
          50%      { opacity:0.5; }
        }
        @keyframes cardIn {
          from { opacity:0; transform:translateX(16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .const-member-node {
          position: absolute;
          transform: translate(-50%,-50%);
          text-align: center;
          background: none;
          border: none;
          padding: 6px;
          cursor: pointer;
          animation: memPop 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .const-member-node.highlighted polygon {
          fill: white !important;
          filter: drop-shadow(0 0 8px white) !important;
        }
        .const-dummy-node {
          position: absolute;
          transform: translate(-50%,-50%);
          pointer-events: none;
          animation: memPop 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .const-director {
          position: absolute;
          transform: translate(-50%,-50%);
          text-align: center;
          z-index: 2;
          animation: dirIn 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }
      `}</style>

      {/* Close */}
      <button
        className="fixed top-6 right-7 z-10 border-none bg-transparent text-2xl text-white/35 transition-colors hover:text-white"
        style={{ cursor: "pointer" }}
        onClick={onClose}
      >
        ✕
      </button>

      {/* Inner */}
      <div
        className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-[40px]"
        style={{
          padding: "40px 48px",
          width: "min(1000px,92vw)",
          display: "flex",
          alignItems: "center",
          gap: "56px",
          transform: visible
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.97)",
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Left: constellation canvas ── */}
        <div
          className="relative flex-shrink-0"
          style={{ width: 440, height: 440 }}
        >
          {/* Lines */}
          <svg
            className="pointer-events-none absolute inset-0"
            width="440"
            height="440"
            style={{ overflow: "visible" }}
          >
            {membersVisible &&
              constellation.lines.map(([[x1, y1], [x2, y2]], i) => (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1.5"
                  strokeDasharray="500"
                  style={{
                    strokeDashoffset: 0,
                    animation: `lineGrow 0.55s ease forwards`,
                    animationDelay: `${i * 0.07}s`,
                  }}
                />
              ))}
          </svg>

          {/* Dummy stars */}
          {membersVisible &&
            constellation.dummies.map(([x, y], i) => (
              <div
                key={i}
                className="const-dummy-node"
                style={{
                  left: x,
                  top: y,
                  animationDelay: `${0.25 + i * 0.06}s`,
                  opacity: 0,
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 18 18"
                  style={{
                    animation: `dummyPulse ${2.5 + i * 0.4}s ease-in-out infinite`,
                  }}
                >
                  <polygon
                    points="9,0 10.8,6.3 17.5,6.3 12.1,10.2 14,16.5 9,12.8 4,16.5 5.9,10.2 0.5,6.3 7.2,6.3"
                    fill="rgba(255,240,180,0.45)"
                  />
                </svg>
              </div>
            ))}

          {/* Member stars */}
          {membersVisible &&
            constellation.members.map(([x, y], i) => (
              <button
                key={i}
                className={`const-member-node ${i === currentIdx ? "highlighted" : ""}`}
                style={{
                  left: x,
                  top: y,
                  animationDelay: `${0.2 + i * 0.08}s`,
                  opacity: 0,
                }}
                onClick={() => goTo(i)}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 18 18"
                  style={{ display: "block", margin: "0 auto 4px" }}
                >
                  <polygon
                    points="9,0 10.8,6.3 17.5,6.3 12.1,10.2 14,16.5 9,12.8 4,16.5 5.9,10.2 0.5,6.3 7.2,6.3"
                    fill="rgba(255,220,100,0.9)"
                    style={{
                      animation: `memberPulse ${2.2 + i * 0.3}s ease-in-out ${i * 0.15}s infinite`,
                      transition: "fill 0.2s, filter 0.2s",
                    }}
                  />
                </svg>
                <div
                  style={{
                    fontSize: 10,
                    color: "white",
                    whiteSpace: "nowrap",
                    textShadow: "0 0 8px rgba(0,0,0,1)",
                  }}
                >
                  {members[i].name}
                </div>
              </button>
            ))}

          {/* Director star */}
          {visible && (
            <div
              className="const-director"
              style={{
                left: constellation.director[0],
                top: constellation.director[1],
              }}
            >
              <Image
                src={star}
                alt={name}
                width={80}
                height={80}
                style={{
                  display: "block",
                  margin: "0 auto",
                  filter: `drop-shadow(0 0 20px ${glow}) drop-shadow(0 0 40px ${glow})`,
                }}
              />
            </div>
          )}
        </div>

        {/* ── Right: member panel ── */}
        <div className="flex flex-1 flex-col gap-5">
          {/* Header */}
          <div>
            <div
              className="mb-1 text-[9px] tracking-[0.35em] text-white/30"
              style={{ textTransform: "uppercase" }}
            >
              {constellationName}
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 42,
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1,
                color: "white",
                textShadow: `0 0 20px ${glow}`,
              }}
            >
              {name}
            </div>
            <div
              className="mt-1 text-[10px] tracking-[0.3em] text-white/30"
              style={{ textTransform: "uppercase" }}
            >
              {currentIdx + 1} of {members.length} members
            </div>
          </div>

          {/* Member card */}
          <div
            key={cardKey}
            style={{
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(8px)",
              padding: 24,
              display: "flex",
              gap: 18,
              alignItems: "flex-start",
              minHeight: 150,
              animation: "cardIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards",
            }}
          >
            {/* Photo */}
            <div
              style={{
                width: 68,
                height: 68,
                borderRadius: "50%",
                border: `2px solid ${glow}`,
                boxShadow: `0 0 14px ${glow}`,
                background: "rgba(255,255,255,0.05)",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={68}
                  height={68}
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <span style={{ fontSize: 20, color: "rgba(255,255,255,0.2)" }}>
                  ✦
                </span>
              )}
            </div>

            {/* Info */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 24,
                  fontWeight: 400,
                  color: "white",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {member.name}
              </div>
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: glow,
                  marginBottom: 10,
                }}
              >
                {member.role}
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "rgba(200,190,220,0.75)",
                }}
              >
                {member.bio}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => navigate(-1)}
              disabled={currentIdx === 0}
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentIdx === 0 ? "default" : "pointer",
                opacity: currentIdx === 0 ? 0.2 : 1,
                transition: "all 0.2s",
              }}
            >
              ←
            </button>

            <div className="flex gap-1.5">
              {members.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    background:
                      i === currentIdx ? "white" : "rgba(255,255,255,0.2)",
                    transform: i === currentIdx ? "scale(1.3)" : "scale(1)",
                    transition: "all 0.2s",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              disabled={currentIdx === members.length - 1}
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.05)",
                color: "white",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor:
                  currentIdx === members.length - 1 ? "default" : "pointer",
                opacity: currentIdx === members.length - 1 ? 0.2 : 1,
                transition: "all 0.2s",
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
