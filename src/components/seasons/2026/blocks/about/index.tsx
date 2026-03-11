"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

const PLANETS: PlanetConfig[] = [
  {
    src: "/images/seasons/2026/landing/about/rose.png",
    alt: "Rose planet",
    orbitIndex: 2,
    startAngle: -Math.PI / 3,
    scrollTravel: Math.PI,
    sizeMobile: "2.5rem",
    sizeDesktop: "3.5rem",
    glowColor: "rgba(255, 120, 140, 0.35)",
  },
  {
    src: "/images/seasons/2026/landing/about/purple.png",
    alt: "Purple planet",
    orbitIndex: 1,
    startAngle: Math.PI + 0.6,
    scrollTravel: -Math.PI * 1.2,
    sizeMobile: "2.5rem",
    sizeDesktop: "4rem",
    glowColor: "rgba(160, 100, 255, 0.35)",
  },
  {
    src: "/images/seasons/2026/landing/about/blue.png",
    alt: "Blue planet",
    orbitIndex: 2,
    startAngle: Math.PI - 0.5,
    scrollTravel: Math.PI,
    sizeMobile: "2.5rem",
    sizeDesktop: "4rem",
    glowColor: "rgba(80, 220, 255, 0.35)",
  },
  {
    src: "/images/seasons/2026/landing/about/magneta.png",
    alt: "Magenta planet",
    orbitIndex: 2,
    startAngle: Math.PI / 4,
    scrollTravel: Math.PI,
    sizeMobile: "4rem",
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
  const isDesktop = radii[0] === ORBIT_RADII.desktop[0];
  const size = isDesktop ? config.sizeDesktop : config.sizeMobile;

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
          width: size,
          height: size,
          transform: "translate(-50%, -50%)",
        }}
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
// Orbital rings
// ─────────────────────────────────────────────
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
// About text — fades in mid-scroll, stays visible
// ─────────────────────────────────────────────
function AboutText({ progress }: { progress: MotionValue<number> }) {
  // Fade in as user scrolls, then stay fully visible
  const opacity = useTransform(progress, [0, 0.4], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute top-1/2 left-1/2 z-10 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 px-[60px] md:px-[104px]"
    >
      <p
        className="text-center text-sm font-bold text-white italic md:text-lg"
        style={{
          letterSpacing: "0.04em",
          textShadow: [
            "0 0 6px rgba(255,255,255,0.6)",
            "0 0 12px rgba(180,120,255,0.7)",
            "0 0 24px rgba(160,90,255,0.6)",
            "0 0 48px rgba(140,70,255,0.45)",
          ].join(", "),
        }}
      >
        We hope that this experience can help you acquire and grow both your
        soft and hard skills in empathizing with your users, defining a set of
        goals and needs, developing your product, and improving your confidence
        and creativity as a human-centric designer.
      </p>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// Main canvas
// ─────────────────────────────────────────────
function AboutCanvas({ progress }: { progress: MotionValue<number> }) {
  const radii = useOrbitRadii();

  // Title fades out as user starts scrolling
  const titleOpacity = useTransform(progress, [0, 0.25], [1, 0]);
  const titleY = useTransform(progress, [0, 0.25], [0, -40]);

  return (
    <section
      id="about"
      className="relative flex h-screen w-full origin-center flex-col items-center overflow-hidden px-6 py-16"
    >
      <motion.h2
        style={{ opacity: titleOpacity, y: titleY }}
        className="z-10 py-25 text-center [font-family:var(--font-luxurious-script)] text-6xl font-bold text-white drop-shadow-lg [text-shadow:0_0_10px_rgba(255,255,255,0.5)] md:py-12 md:text-7xl"
      >
        About
      </motion.h2>

      <OrbitalRings />
      <CentrePlanet />

      {PLANETS.map((planet) => (
        <OrbitingPlanet
          key={planet.src}
          config={planet}
          progress={progress}
          radii={radii}
        />
      ))}

      <AboutText progress={progress} />
    </section>
  );
}

// ─────────────────────────────────────────────
// Exported wrapper
// ─────────────────────────────────────────────
export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <AboutCanvas progress={scrollYProgress} />
      </div>
    </div>
  );
}

export default AboutSection;
