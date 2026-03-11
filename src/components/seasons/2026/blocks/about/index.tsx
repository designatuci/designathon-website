"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// Config
// ─────────────────────────────────────────────

const ORBIT_RADII = {
  mobile: [75, 115, 155],
  desktop: [130, 195, 260],
};

interface PlanetConfig {
  src: string;
  alt: string;
  orbitIndex: number;
  startAngle: number;
  // How many full radians to travel over the full scroll range (positive = CW, negative = CCW)
  scrollTravel: number;
  sizeMobile: string;
  sizeDesktop: string;
  glowColor: string;
}

// All planets end at -PI/4 (top-right diagonal at 45°) so they align on a line through centre.
// scrollTravel = endAngle - startAngle, normalised to shortest path isn't needed here —
// we want deliberate arcs, so we compute the travel to reach -PI/4 going in each planet's direction.

const ALIGN_ANGLE = -Math.PI / 4; // 45° diagonal — all planets land here

// Helper: given start, desired end, and preferred direction (+1 CW / -1 CCW),
// returns the travel (in radians) that lands on ALIGN_ANGLE
function travelTo(start: number, dir: 1 | -1): number {
  // Normalise start into [-PI, PI]
  const norm = (a: number) =>
    (((a % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI)) - Math.PI;
  const s = norm(start);
  const e = norm(ALIGN_ANGLE);
  let delta = e - s;
  if (dir === 1 && delta <= 0) delta += 2 * Math.PI;
  if (dir === -1 && delta >= 0) delta -= 2 * Math.PI;
  return delta;
}

const PLANETS: PlanetConfig[] = [
  {
    src: "/images/seasons/2026/landing/about/rose.png",
    alt: "Rose planet",
    orbitIndex: 0,
    startAngle: -Math.PI / 4,
    scrollTravel: travelTo(-Math.PI / 4, 1) + 2 * Math.PI, // full loop CW then align
    sizeMobile: "2.5rem",
    sizeDesktop: "4rem",
    glowColor: "rgba(255, 120, 140, 0.35)",
  },
  {
    src: "/images/seasons/2026/landing/about/purple.png",
    alt: "Purple planet",
    orbitIndex: 1,
    startAngle: Math.PI,
    scrollTravel: travelTo(Math.PI, -1), // CCW to align
    sizeMobile: "3rem",
    sizeDesktop: "5rem",
    glowColor: "rgba(160, 100, 255, 0.35)",
  },
  {
    src: "/images/seasons/2026/landing/about/blue.png",
    alt: "Blue planet",
    orbitIndex: 2,
    startAngle: (3 * Math.PI) / 4 + 0.5,
    scrollTravel: travelTo((3 * Math.PI) / 4 + 0.5, 1), // CW to align
    sizeMobile: "3rem",
    sizeDesktop: "5rem",
    glowColor: "rgba(80, 220, 255, 0.35)",
  },
  {
    src: "/images/seasons/2026/landing/about/magneta.png",
    alt: "Magenta planet",
    orbitIndex: 2,
    startAngle: -Math.PI / 3,
    scrollTravel: travelTo(-Math.PI / 3, -1) - 2 * Math.PI, // extra loop CCW then align
    sizeMobile: "4.5rem",
    sizeDesktop: "7rem",
    glowColor: "rgba(255, 80, 200, 0.35)",
  },
];

// ─────────────────────────────────────────────
// Hook: live viewport width → radii
// ─────────────────────────────────────────────
function useOrbitRadii() {
  const [radii, setRadii] = useState(ORBIT_RADII.mobile);
  useEffect(() => {
    const update = () =>
      setRadii(
        window.innerWidth >= 768 ? ORBIT_RADII.desktop : ORBIT_RADII.mobile,
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return radii;
}

// ─────────────────────────────────────────────
// Single orbiting planet — position driven by scroll
// ─────────────────────────────────────────────
function OrbitingPlanet({
  config,
  progress,
  radii,
}: {
  config: PlanetConfig;
  progress: MotionValue<number>;
  radii: number[];
}) {
  const radius = radii[config.orbitIndex];

  // Scroll progress [0→1] maps to angle [startAngle → startAngle + scrollTravel]
  const angle = useTransform(
    progress,
    [0, 1],
    [config.startAngle, config.startAngle + config.scrollTravel],
  );

  // Derive x/y from angle MotionValues
  const x = useTransform(angle, (a) => Math.cos(a) * radius);
  const y = useTransform(angle, (a) => Math.sin(a) * radius);

  return (
    <motion.div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        x,
        y,
      }}
    >
      <div
        style={{
          width: config.sizeMobile,
          height: config.sizeMobile,
          transform: "translate(-50%, -50%)",
          ["--planet-size-desktop" as string]: config.sizeDesktop,
        }}
        className="md:[height:var(--planet-size-desktop)] md:[width:var(--planet-size-desktop)]"
      >
        <Image
          src={config.src}
          alt={config.alt}
          fill
          style={{
            filter: `drop-shadow(0 0 4px ${config.glowColor}) drop-shadow(0 0 10px ${config.glowColor})`,
          }}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Alignment line — draws through all planets at progress=1
// Runs at -45° through centre, long enough to cross all orbits
// ─────────────────────────────────────────────
function AlignmentLine({ progress }: { progress: MotionValue<number> }) {
  // Only appears in the last 20% of scroll
  const opacity = useTransform(progress, [0.75, 1], [0, 0.7]);
  // Line draws from centre outward — scaleX goes 0→1
  const scaleX = useTransform(progress, [0.78, 1], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0"
    >
      {/* The line: centred, rotated -45°, drawn via scaleX */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          style={{ scaleX, originX: 0.5 }}
          className="h-px w-[700px] md:w-[900px]"
          // Gradient: fades at both ends, bright in centre
          // Colour echoes the planet palette: pink→white→cyan
        >
          <div
            className="h-full w-full"
            style={{
              transform: "rotate(-45deg)",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,80,200,0.6) 20%, rgba(255,255,255,0.9) 50%, rgba(80,220,255,0.6) 80%, transparent 100%)",
              boxShadow:
                "0 0 6px rgba(255,255,255,0.4), 0 0 16px rgba(180,120,255,0.4)",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function OrbitalRings() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-1/2 left-1/2 h-[9.375rem] w-[9.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 md:h-[16.25rem] md:w-[16.25rem]" />
      <div className="absolute top-1/2 left-1/2 h-[14.375rem] w-[14.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 md:h-[24.375rem] md:w-[24.375rem]" />
      <div className="absolute top-1/2 left-1/2 h-[19.375rem] w-[19.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 md:h-[32.5rem] md:w-[32.5rem]" />
    </div>
  );
}

// ─────────────────────────────────────────────
// Centre planet
// ─────────────────────────────────────────────
function CentrePlanet() {
  return (
    <div className="pointer-events-none absolute top-1/2 left-1/2 h-[9rem] w-[9rem] -translate-x-1/2 -translate-y-1/2 md:h-[16rem] md:w-[16rem]">
      <Image
        src="/images/seasons/2026/landing/about/navy.png"
        alt="Navy planet"
        fill
        style={{
          filter:
            "drop-shadow(0 0 6px rgba(80, 140, 255, 0.4)) drop-shadow(0 0 14px rgba(80, 140, 255, 0.25))",
        }}
        className="object-contain"
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// Glitch-decode word component
// Each word scrambles through random chars then snaps to its real value
// triggered when `revealed` flips true
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

      // Progressively reveal chars left-to-right as frames advance
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

  // Reset if un-revealed (scroll back up)
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
        // Chromatic aberration effect on locked words
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
// About text — words decode one-by-one as scroll progresses
// ─────────────────────────────────────────────
const ABOUT_TEXT =
  "We hope that this experience can help you acquire and grow both your soft and hard skills in empathizing with your users, defining a set of goals and needs, developing your product, and improving your confidence and creativity as a human-centric designer.";

function AboutText() {
  const words = ABOUT_TEXT.split(" ");
  const [mountedAt] = useState(() => Date.now());
  const [now, setNow] = useState(Date.now());

  // Tick every 50ms until all words are revealed (~40ms × 10 frames + stagger)
  useEffect(() => {
    const id = setInterval(() => {
      const elapsed = Date.now() - mountedAt;
      setNow(Date.now());
      if (elapsed > words.length * 50 + 400) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, [mountedAt, words.length]);

  return (
    <div className="absolute top-1/2 left-1/2 z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 px-[60px] md:px-[104px]">
      {/* Scanline overlay for sci-fi texture */}
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
        className="relative text-center text-sm font-bold italic md:text-lg"
        style={{ letterSpacing: "0.05em", lineHeight: 1.75 }}
      >
        {words.map((word, i) => {
          // Each word triggers 80ms after the previous one
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
// Main canvas
// ─────────────────────────────────────────────
function AboutCanvas({ progress }: { progress: MotionValue<number> }) {
  const radii = useOrbitRadii();

  return (
    <section
      id="about"
      className="relative flex h-screen w-full origin-center flex-col items-center overflow-hidden px-6 py-16"
    >
      <h2 className="z-10 py-25 text-center [font-family:var(--font-luxurious-script)] text-6xl font-bold text-white drop-shadow-lg [text-shadow:0_0_10px_rgba(255,255,255,0.5)] md:py-12 md:text-7xl">
        About
      </h2>

      <OrbitalRings />
      <CentrePlanet />
      <AlignmentLine progress={progress} />

      {PLANETS.map((planet) => (
        <OrbitingPlanet
          key={planet.src}
          config={planet}
          progress={progress}
          radii={radii}
        />
      ))}

      <AboutText />
    </section>
  );
}

// ─────────────────────────────────────────────
// Exported wrapper
// ─────────────────────────────────────────────
export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // progress = 0 when section top hits viewport bottom (just scrolled into view)
  // progress = 1 when section top hits viewport top (fully stuck and scrolled through)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Remap: we only care about the first half of that range (0→0.5 = enters view → sticks at top)
  // This means orbiting starts the moment About appears on screen
  const progress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[125vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <AboutCanvas progress={progress} />
      </div>
    </div>
  );
}

export default AboutSection;
