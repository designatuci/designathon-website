"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ABOUT_TEXT =
  "Design-a-thon is the largest student-run design hackathon in Southern California. Over a 3-day weekend, students design and prototype UI/UX solutions to real-world problems by creating working Figma prototypes and presenting their case study to industry judges.";

// ─────────────────────────────────────────────
// Glitch-decode word component
// ─────────────────────────────────────────────
const GLITCH_CHARS = "!@#$%^&*ΨΦΔλξπ∑∞";
const GLITCH_CHAR_COLOR = "rgba(120,120,120,0.7)";

function GlitchWord({ word, revealed }: { word: string; revealed: boolean }) {
  const [display, setDisplay] = useState("");
  const [locked, setLocked] = useState(false);
  const [glitchFrame, setGlitchFrame] = useState("");
  const [isHoverGlitching, setIsHoverGlitching] = useState(false);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iterRef = useRef(0);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      setGlitchFrame("");
      setIsHoverGlitching(false);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      iterRef.current = 0;
    }
  }, [revealed, word]);

  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHoverGlitching(true);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHoverGlitching(false);
      hoverTimeoutRef.current = null;
    }, 1000);
  }, []);

  useEffect(
    () => () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    },
    [],
  );

  // Hover glitch: scramble chars while isHoverGlitching
  useEffect(() => {
    if (!isHoverGlitching || !locked || word.length === 0) {
      setGlitchFrame("");
      return;
    }
    const tick = () => {
      const next = word
        .split("")
        .map((char) => {
          if (char === " ") return " ";
          return Math.random() < 0.3
            ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
            : char;
        })
        .join("");
      setGlitchFrame(next);
    };
    tick();
    const id = setInterval(tick, 50);
    return () => clearInterval(id);
  }, [isHoverGlitching, locked, word]);

  const displayToShow =
    isHoverGlitching && locked && glitchFrame ? glitchFrame : display;

  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        overflow: "hidden",
        verticalAlign: "bottom",
      }}
      onMouseEnter={handleMouseEnter}
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
        {isHoverGlitching && glitchFrame
          ? displayToShow.split("").map((char, i) =>
              GLITCH_CHARS.includes(char) ? (
                <span key={i} style={{ color: GLITCH_CHAR_COLOR }}>
                  {char}
                </span>
              ) : (
                <span key={i}>{char}</span>
              ),
            )
          : displayToShow}
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
        {/* Main heading */}
        <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          About
        </h1>
        {/* Body copy */}
        <div className="mb-10 max-w-sm">
          <AboutText text={ABOUT_TEXT} />
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
