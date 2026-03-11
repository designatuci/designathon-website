"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// Glitch-decode word component
// ─────────────────────────────────────────────
const GLITCH_CHARS = "!@#$%^&*<>?/\\|~[]{}ΩΨΦΔλξπ∑∞≈≠±×÷";

function GlitchWord({
  word,
  revealed,
  delay = 0,
}: {
  word: string;
  revealed: boolean;
  delay?: number;
}) {
  const [display, setDisplay] = useState(word.replace(/\S/g, "·"));
  const [locked, setLocked] = useState(false);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iterRef = useRef(0);

  const scramble = useCallback(() => {
    if (locked) return;
    const TOTAL_FRAMES = 10;
    const LOCK_FRAME = 7;

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
      frameRef.current = setTimeout(tick, 20);
    };

    frameRef.current = setTimeout(tick, delay);
  }, [word, delay, locked]);

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
        fontVariantNumeric: "tabular-nums",
        textShadow: locked
          ? [
              "-1px 0 rgba(255,80,200,0.6)",
              "1px 0 rgba(80,220,255,0.6)",
              "0 0 8px rgba(255,255,255,0.5)",
              "0 0 20px rgba(180,120,255,0.6)",
            ].join(", ")
          : "0 0 6px rgba(255,255,255,0.3)",
        color: locked ? "#fff" : "rgba(180,180,255,0.5)",
        transition: "color 0.1s",
      }}
    >
      {display}
    </span>
  );
}

// ─────────────────────────────────────────────
// About body text — words decode one-by-one on mount
// ─────────────────────────────────────────────
const ABOUT_TEXT =
  "We hope that this experience can help you acquire and grow both your soft and hard skills in empathizing with your users, defining a set of goals and needs, developing your product, and improving your confidence and creativity as a human-centric designer.";

function AboutText() {
  const words = ABOUT_TEXT.split(" ");
  const [mountedAt] = useState(() => Date.now());
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      const elapsed = Date.now() - mountedAt;
      setNow(Date.now());
      if (elapsed > words.length * 50 + 400) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, [mountedAt, words.length]);

  return (
    <div className="relative">
      {/* Scanline overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-md"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
          mixBlendMode: "overlay",
        }}
      />
      {/* Faint border frame */}
      <div
        className="pointer-events-none absolute inset-0 rounded-sm"
        style={{
          border: "1px solid rgba(180,120,255,0.15)",
          boxShadow: "inset 0 0 20px rgba(80,100,255,0.05)",
        }}
      />
      <p
        className="relative text-sm font-bold italic md:text-base"
        style={{ letterSpacing: "0.05em", lineHeight: 1.85 }}
      >
        {words.map((word, i) => {
          const revealed = now - mountedAt >= i * 50;
          return (
            <span key={i}>
              <GlitchWord word={word} revealed={revealed} delay={0} />
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

      {/* Decorative vertical text strip on far left */}
      <div
        className="absolute top-0 left-0 hidden h-full w-8 items-center justify-center lg:flex"
        style={{ color: "rgba(255,255,255,0.12)" }}
      >
        <span
          className="font-mono text-[10px] uppercase"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.5em" }}
        >
          B E S F O R E
        </span>
      </div>

      {/* Inner content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20">
        {/* Thin vertical accent line */}
        <div
          className="mb-6 h-12 w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(180,120,255,0.8), transparent)",
          }}
        />

        {/* Eyebrow label */}
        <p
          className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase"
          style={{ color: "rgba(160,100,255,0.9)" }}
        >
          Besfore Infinity
        </p>

        {/* Main heading */}
        <h2
          className="mb-6 [font-family:var(--font-luxurious-script)] text-6xl leading-none font-bold md:text-7xl lg:text-8xl"
          style={{
            color: "#fff",
            textShadow:
              "0 0 30px rgba(255,255,255,0.2), 0 0 60px rgba(160,100,255,0.2)",
          }}
        >
          About
          <br />
          <span
            style={{
              fontSize: "0.55em",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.5)",
              fontFamily: "inherit",
            }}
          >
            Us
          </span>
        </h2>

        {/* Divider */}
        <div
          className="mb-6 h-px w-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,80,200,0.8), rgba(80,220,255,0.4))",
          }}
        />

        {/* Body copy with glitch decode */}
        <div className="mb-10 max-w-sm">
          <AboutText />
        </div>

        {/* CTA button */}
        <div>
          <button
            className="group relative overflow-hidden rounded-none border px-8 py-3 text-sm font-semibold tracking-[0.2em] text-white uppercase transition-all duration-300"
            style={{
              borderColor: "rgba(180,120,255,0.4)",
              background: "rgba(180,120,255,0.05)",
            }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-600/30 to-pink-500/20 transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative flex items-center gap-3">
              Next
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

        {/* Step indicators */}
        <div className="mt-10 flex items-center gap-4">
          {["01", "02", "03"].map((n, i) => (
            <span
              key={n}
              className="font-mono tracking-widest transition-all"
              style={{
                color:
                  i === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
                fontSize: i === 0 ? "1.1rem" : "0.7rem",
              }}
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
