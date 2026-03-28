"use client";

import { useInView } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const ABOUT_TEXT =
  "Design-a-thon is the largest student-run design hackathon in Southern California. Over a 3-day weekend, students design and prototype UI/UX solutions to real-world problems by creating working Figma prototypes and presenting their case study to industry judges.";

// ─────────────────────────────────────────────
// Glitch-decode word component
// ─────────────────────────────────────────────
const GLITCH_CHARS = "!@#$%^&*ΨΦΔλξπ∑∞";

function GlitchWord({ word, revealed }: { word: string; revealed: boolean }) {
  const [display, setDisplay] = useState("");
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
      setDisplay("");
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
      className="cursor-default"
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
function AboutText({ text, animate }: { text: string; animate: boolean }) {
  const words = text.split(" ");
  const [mountedAt, setMountedAt] = useState(() => Date.now());
  const [now, setNow] = useState(Date.now());

  // Reset timer whenever the text changes (new page)
  useEffect(() => {
    if (!animate) return;
    setMountedAt(Date.now());
    setNow(Date.now());
  }, [text, animate]);

  useEffect(() => {
    if (!animate) return;
    const start = Date.now();
    const id = setInterval(() => {
      setNow(Date.now());
      if (Date.now() - start > words.length * 20 + 400) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, [text, words.length, animate]);

  return (
    <div className="relative">
      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-md" />
      <p
        className="relative text-sm md:text-base"
        style={{ letterSpacing: "0.05em", lineHeight: 1.85 }}
      >
        {words.map((word, i) => {
          const revealed = animate && now - mountedAt >= i * 20;
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.15,
    once: true,
  });

  return (
    <div
      ref={ref}
      className="relative z-10 flex h-full w-full flex-col justify-center md:w-[45%] lg:w-[42%]"
    >
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
        {/* Main heading */}
        <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          About
        </h1>
        {/* Body copy */}
        <div className="mb-10 max-w-sm">
          <AboutText text={ABOUT_TEXT} animate={isInView} />
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
