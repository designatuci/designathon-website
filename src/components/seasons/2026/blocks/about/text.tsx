"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// Page content — swap these out for real copy
// ─────────────────────────────────────────────
const PAGES = [
  "Design-a-thon is the largest student-run design hackathon in Southern California. Over a 3-day weekend, students design and prototype UI/UX solutions to real-world problems by creating working Figma prototypes and presenting their case study to industry judges.",
  "This 3-day event brings together over 300 passionate students, both in-person and online. In 2025, 43% of participants competed in their first Design-a-thon, highlighting the event’s beginner-friendly environment and representing over 30 schools and 40+ majors nationwide.",
  "We hope that this experience can help you acquire and grow both your soft and hard skills in empathizing with your users, defining a set of goals and needs, developing your product, and improving your confidence and creativity as a human-centric designer.",
];

// ─────────────────────────────────────────────
// Glitch-decode word component
// ─────────────────────────────────────────────
const GLITCH_CHARS = "!@#$%^&*ΨΦΔλξπ∑∞";

function GlitchWord({ word, revealed }: { word: string; revealed: boolean }) {
  const [display, setDisplay] = useState(word.replace(/\S/g, "·"));
  const [locked, setLocked] = useState(false);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iterRef = useRef(0);

  const scramble = useCallback(() => {
    if (locked) return;
    const TOTAL_FRAMES = 7;
    const LOCK_FRAME = 5;

    const tick = () => {
      iterRef.current += 1;
      const t = iterRef.current / TOTAL_FRAMES;

      if (iterRef.current >= TOTAL_FRAMES) {
        setDisplay(word);
        setLocked(true);
        return;
      }

      const revealUpTo = Math.floor(t * word.length);
      const next = word
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealUpTo || iterRef.current >= LOCK_FRAME) return char;
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");

      setDisplay(next);
      frameRef.current = setTimeout(tick, 12);
    };

    frameRef.current = setTimeout(tick, 0);
  }, [word, locked]);

  useEffect(() => {
    if (revealed && !locked) scramble();
    return () => {
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [revealed, locked, scramble]);

  useEffect(() => {
    if (!revealed) {
      setLocked(false);
      setDisplay(word.replace(/\S/g, "·"));
      iterRef.current = 0;
    }
  }, [revealed, word]);

  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        verticalAlign: "bottom",
      }}
    >
      {/* Invisible real word reserves space to prevent layout shift */}
      <span aria-hidden style={{ visibility: "hidden" }}>
        {word}
      </span>
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          color: locked ? "#fff" : "rgba(180,180,255,0.5)",
          transition: "color 0.1s",
        }}
      >
        {display}
      </span>
    </span>
  );
}

// ─────────────────────────────────────────────
// About body text — re-animates when `text` changes
// ─────────────────────────────────────────────
function AboutText({ text }: { text: string }) {
  const words = text.split(" ");
  const [mountedAt, setMountedAt] = useState(() => Date.now());
  const [now, setNow] = useState(Date.now());

  // Reset timer whenever the text changes (new page)
  useEffect(() => {
    setMountedAt(Date.now());
    setNow(Date.now());
  }, [text]);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      setNow(Date.now());
      if (Date.now() - start > words.length * 20 + 400) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, [text, words.length]);

  return (
    <div className="relative">
      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-md" />
      <p
        className="relative text-sm md:text-base"
        style={{ letterSpacing: "0.05em", lineHeight: 1.85 }}
      >
        {words.map((word, i) => {
          const revealed = now - mountedAt >= i * 20;
          return (
            <span key={`${text}-${i}`}>
              <GlitchWord word={word} revealed={revealed} />
              {i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// Exported: AboutBox
// ─────────────────────────────────────────────
export function AboutBox() {
  const [page, setPage] = useState(0);
  const total = PAGES.length;

  const handleNext = () => setPage((p) => (p + 1) % total);

  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-center md:w-[45%] lg:w-[42%]">
      {/* Vertical separator on the right edge */}
      <div
        className="pointer-events-none absolute top-0 right-0 hidden h-full w-px md:block"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(180,120,255,0.2) 30%, rgba(80,220,255,0.15) 70%, transparent 100%)",
        }}
      />

      {/* Inner content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20">

        {/* Eyebrow label */}
        <p
          className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase"
          style={{ color: "rgba(160,100,255,0.9)" }}
        >
          Design-a-thon 2026
        </p>

        {/* Main heading */}
        <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          About
        </h1>

        {/* Divider */}
        <div
          className="mb-6 h-px w-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,80,200,0.8), rgba(80,220,255,0.4))",
          }}
        />

        {/* Body copy — re-animates per page */}
        <div className="mb-10 min-h-[8rem] max-w-sm">
          <AboutText text={PAGES[page]} />
        </div>

        {/* CTA button */}
        <div>
          <button
            onClick={handleNext}
            className="group relative overflow-hidden rounded-full border px-8 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-all duration-300"
            style={{
              borderColor: "rgba(180,120,255,0.4)",
              background: "rgba(180,120,255,0.05)",
            }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-600/30 to-pink-500/20 transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">
              {page < total - 1 ? "Next" : "Back"}
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Step indicators — active page highlighted */}
        <div className="mt-10 flex items-center gap-4">
          {PAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="font-mono tracking-widest transition-all"
              style={{
                color:
                  i === page
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.25)",
                fontSize: i === page ? "1.1rem" : "0.7rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
