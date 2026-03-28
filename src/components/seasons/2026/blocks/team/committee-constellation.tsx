"use client";

import Image from "next/image";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export type CommitteeMember = {
  photo?: string;
  name: string;
  role: string;
  year?: string;
  major?: string;
  funFact?: string;
};

export type Committee = {
  id: string;
  name: string;
  color: string;
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

  useLayoutEffect(() => {
    if (!committee?.members.length) return;
    setCurrentIdx((idx) =>
      Math.max(0, Math.min(idx, committee.members.length - 1)),
    );
  }, [committee?.id, committee?.members.length]);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (!committee) return;
      const max = committee.members.length - 1;
      if (max < 0) return;
      const from = Math.max(0, Math.min(currentIdx, max));
      const next = from + dir;
      if (next < 0 || next > max) return;
      setCardKey((k) => k + 1);
      setCurrentIdx(next);
    },
    [committee, currentIdx],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, onClose]);

  const goTo = (i: number) => {
    if (!committee) return;
    if (i < 0 || i >= committee.members.length) return;
    setCurrentIdx((idx) => {
      if (i === idx) return idx;
      return i;
    });
    setCardKey((k) => k + 1);
  };

  if (!committee) return null;

  const { constellation, members, glow, name, constellationName, star } =
    committee;
  const safeIdx =
    members.length === 0
      ? 0
      : Math.min(Math.max(0, currentIdx), members.length - 1);
  const member = members[safeIdx];

  const renderCanvas = () => (
    <>
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

      {membersVisible &&
        constellation.members.map(([x, y], i) => {
          const isSelected = i === safeIdx;
          return (
            <button
              key={i}
              className={`const-member-node ${isSelected ? "highlighted" : ""}`}
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
                style={{
                  display: "block",
                  margin: 0,
                  filter: isSelected
                    ? `drop-shadow(0 0 6px white) drop-shadow(0 0 12px white)`
                    : `drop-shadow(0 0 4px ${glow}) drop-shadow(0 0 8px ${glow})`,
                  transition: "filter 0.2s",
                }}
              >
                <polygon
                  points="9,0 10.8,6.3 17.5,6.3 12.1,10.2 14,16.5 9,12.8 4,16.5 5.9,10.2 0.5,6.3 7.2,6.3"
                  fill={isSelected ? "white" : glow}
                  style={{
                    animation: isSelected
                      ? undefined
                      : `memberPulse ${2.2 + i * 0.3}s ease-in-out ${i * 0.15}s infinite`,
                    transition: "fill 0.2s",
                  }}
                />
              </svg>
              <div
                className="const-member-node-label"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "calc(100% + 4px)",
                  transform: "translateX(-50%)",
                  fontSize: 10,
                  color: "white",
                  whiteSpace: "nowrap",
                  textShadow: "0 0 8px rgba(0,0,0,1)",
                  pointerEvents: "none",
                }}
              >
                {members[i]?.name ?? ""}
              </div>
            </button>
          );
        })}

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
            width={62}
            height={62}
            style={{
              display: "block",
              margin: "0 auto",
              filter: `drop-shadow(0 0 14px ${glow}) drop-shadow(0 0 28px ${glow})`,
            }}
          />
        </div>
      )}
    </>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: visible ? "rgba(2,1,14,0.85)" : "rgba(2,1,14,0)",
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
          50% { opacity:1; transform:scale(1.08); }
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
          padding: 8px;
          cursor: pointer;
          animation: memPop 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
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
        .modal-sheet {
          border-radius: 20px;
          max-height: 92dvh;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
        @media (min-width: 640px) {
          .modal-sheet {
            max-height: none;
            overflow-y: visible;
          }
        }
        .canvas-wrap { width: 280px; height: 280px; }
        @media (min-width: 640px) {
          .canvas-wrap { width: 440px; height: 440px; }
        }
        .modal-sheet::-webkit-scrollbar { display: none; }
        .modal-sheet { scrollbar-width: none; }
      `}</style>

      {/* Close — desktop only */}
      <button
        className="fixed top-6 right-7 z-10 hidden border-none bg-transparent text-2xl text-white/35 transition-colors hover:text-white sm:block"
        style={{ cursor: "pointer" }}
        onClick={onClose}
      >
        ✕
      </button>

      {/* Sheet / Modal — glass on mobile, transparent on desktop */}
      <div
        className="modal-sheet w-full border border-white/10 bg-[rgba(6,4,24,0.92)] shadow-2xl backdrop-blur-[40px] sm:w-auto sm:border-0 sm:bg-transparent sm:shadow-none sm:backdrop-blur-none"
        style={{
          padding: 0,
          maxWidth: "min(1000px, 92vw)",
          transform: visible
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.97)",
          transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Mobile header row ── */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 sm:hidden">
          <div>
            <div className="text-[8px] tracking-[0.3em] text-white/30 uppercase">
              {constellationName}
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 300,
                fontStyle: "italic",
                color: "white",
                lineHeight: 1.1,
                textShadow: `0 0 16px ${glow}`,
              }}
            >
              {name}
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "50%",
              width: 36,
              height: 36,
              color: "rgba(255,255,255,0.6)",
              fontSize: 16,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* ── Inner layout ── */}
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-0">
          {/* Constellation canvas — glass container on desktop only */}
          <div className="canvas-wrap relative mx-auto flex-shrink-0 sm:mx-0 sm:rounded-2xl sm:border sm:border-white/10 sm:bg-[rgba(4,2,18,0.85)] sm:shadow-2xl sm:backdrop-blur-[40px]">
            <div
              className="absolute inset-0 sm:hidden"
              style={{ transform: "scale(0.636)", transformOrigin: "top left" }}
            >
              <div style={{ width: 440, height: 440, position: "relative" }}>
                {renderCanvas()}
              </div>
            </div>
            <div
              className="absolute inset-0 hidden sm:block"
              style={{ width: 440, height: 440 }}
            >
              {renderCanvas()}
            </div>
          </div>

          {/* ── Member panel — bare text on desktop ── */}
          <div
            className="flex flex-col gap-4 sm:gap-5 sm:pl-4"
            style={{ width: "100%", flexShrink: 0, maxWidth: 420 }}
          >
            {/* Header — desktop only */}
            <div className="hidden sm:block">
              <div className="mb-1 text-[9px] tracking-[0.35em] text-white/30 uppercase">
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
              <div className="mt-1 text-[9px] tracking-[0.3em] text-white/30 uppercase">
                {safeIdx + 1} of {members.length} members
              </div>
            </div>

            {/* Mobile member counter */}
            <div className="text-[9px] tracking-[0.3em] text-white/30 uppercase sm:hidden">
              {safeIdx + 1} of {members.length} members
            </div>

            {/* Member card — glass on mobile, bare on desktop */}
            <div
              key={cardKey}
              className="sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none"
              style={{
                width: 420,
                boxSizing: "border-box",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
                padding: 18,
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                animation: "cardIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards",
              }}
            >
              {/* Photo */}
              <div
                style={{
                  width: 64,
                  height: 64,
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
                <Image
                  src="/images/seasons/2026/landing/team/nailong.png"
                  alt="nailong pic"
                  width={64}
                  height={64}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Name */}
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 400,
                    color: "white",
                    lineHeight: 1,
                    marginBottom: 3,
                  }}
                >
                  {member?.name ?? ""}
                </div>

                {/* Role */}
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: glow,
                    marginBottom: 10,
                  }}
                >
                  {member?.role ?? ""}
                </div>

                {/* Year & Major */}
                {(member?.year || member?.major) && (
                  <div
                    style={{
                      display: "flex",
                      gap: 6,
                      flexWrap: "wrap",
                      marginBottom: 8,
                    }}
                  >
                    {member?.year && (
                      <span
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          color: "rgba(255,255,255,0.45)",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 20,
                          padding: "2px 10px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {member.year}
                      </span>
                    )}
                    {member?.major && (
                      <span
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          color: "rgba(255,255,255,0.45)",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 20,
                          padding: "2px 10px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {member.major}
                      </span>
                    )}
                  </div>
                )}

                {/* Fun Fact */}
                {member?.funFact && (
                  <div
                    style={{
                      display: "flex",
                      gap: 7,
                      alignItems: "flex-start",
                      marginTop: 4,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        lineHeight: 1.6,
                        fontStyle: "italic",
                        color: "rgba(200,190,220,0.75)",
                      }}
                    >
                      {member.funFact}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 pb-2 sm:pb-0">
              <button
                onClick={() => navigate(-1)}
                disabled={safeIdx === 0}
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
                  cursor: safeIdx === 0 ? "default" : "pointer",
                  opacity: safeIdx === 0 ? 0.2 : 1,
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
                        i === safeIdx ? "white" : "rgba(255,255,255,0.2)",
                      transform: i === safeIdx ? "scale(1.3)" : "scale(1)",
                      transition: "all 0.2s",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => navigate(1)}
                disabled={safeIdx === members.length - 1}
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
                    safeIdx === members.length - 1 ? "default" : "pointer",
                  opacity: safeIdx === members.length - 1 ? 0.2 : 1,
                  transition: "all 0.2s",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
