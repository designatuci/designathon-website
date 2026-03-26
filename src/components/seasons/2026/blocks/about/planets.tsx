"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// ─────────────────────────────────────────────
// Orbit config
// ─────────────────────────────────────────────
const ORBIT_RADII = {
  mobile: [75, 115, 155],
  desktop: [130, 195, 260],
};

export interface PlanetConfig {
  src: string;
  alt: string;
  orbitIndex: number;
  startAngle: number;
  scrollTravel: number;
  sizeMobile: string;
  sizeDesktop: string;
  glowColor: string;
}

const ALIGN_ANGLE = -Math.PI / 4;
const OPPOSITE_ANGLE = ALIGN_ANGLE + Math.PI; // opposite side of orbit

function travelTo(
  start: number,
  dir: 1 | -1,
  target: number = ALIGN_ANGLE,
): number {
  const norm = (a: number) =>
    (((a % (2 * Math.PI)) + 3 * Math.PI) % (2 * Math.PI)) - Math.PI;
  const s = norm(start);
  const e = norm(target);
  let delta = e - s;
  if (dir === 1 && delta <= 0) delta += 2 * Math.PI;
  if (dir === -1 && delta >= 0) delta -= 2 * Math.PI;
  return delta;
}

export const PLANETS: PlanetConfig[] = [
  {
    src: "/images/seasons/2026/landing/about/rose.png",
    alt: "Rose planet",
    orbitIndex: 0,
    startAngle: -Math.PI / 4,
    scrollTravel: travelTo(-Math.PI / 4, 1, OPPOSITE_ANGLE),
    sizeMobile: "2.5rem",
    sizeDesktop: "4rem",
    glowColor: "rgba(255, 120, 140, 0.35)",
  },
  {
    src: "/images/seasons/2026/landing/about/purple.png",
    alt: "Purple planet",
    orbitIndex: 1,
    startAngle: Math.PI,
    scrollTravel: travelTo(Math.PI, -1),
    sizeMobile: "3rem",
    sizeDesktop: "4rem",
    glowColor: "rgba(160, 100, 255, 0.5)",
  },
  {
    src: "/images/seasons/2026/landing/about/blue.png",
    alt: "Blue planet",
    orbitIndex: 2,
    startAngle: (3 * Math.PI) / 4 + 0.5,
    scrollTravel: travelTo((3 * Math.PI) / 4 + 0.5, 1, OPPOSITE_ANGLE),
    sizeMobile: "3rem",
    sizeDesktop: "5rem",
    glowColor: "rgba(80, 220, 255, 0.35)",
  },
  {
    src: "/images/seasons/2026/landing/about/magneta.png",
    alt: "Magenta planet",
    orbitIndex: 2,
    startAngle: -Math.PI / 3,
    scrollTravel: travelTo(-Math.PI / 3, -1),
    sizeMobile: "4.5rem",
    sizeDesktop: "7rem",
    glowColor: "rgba(255, 80, 200, 0.15)",
  },
];

// ─────────────────────────────────────────────
// Hook: responsive orbit radii
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
// Single orbiting planet
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
  const angle = useTransform(
    progress,
    [0, 1],
    [config.startAngle, config.startAngle + config.scrollTravel],
  );
  const x = useTransform(angle, (a) => Math.cos(a) * radius);
  const y = useTransform(angle, (a) => Math.sin(a) * radius);

  return (
    <motion.div style={{ position: "absolute", top: "50%", left: "50%", x, y }}>
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
// Alignment line — appears at progress > 0.75
// ─────────────────────────────────────────────
function AlignmentLine({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.75, 1], [0, 0.7]);
  const scaleX = useTransform(progress, [0.78, 1], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="pointer-events-none absolute inset-0"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          style={{ scaleX, originX: 0.5 }}
          className="h-px w-[700px] md:w-[900px]"
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

// ─────────────────────────────────────────────
// Orbital rings
// ─────────────────────────────────────────────
function OrbitalRings() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-1/2 left-1/2 h-[9.375rem] w-[9.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 md:h-[16.25rem] md:w-[16.25rem]" />
      <div className="absolute top-1/2 left-1/2 h-[14.375rem] w-[14.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 md:h-[24.375rem] md:w-[24.375rem]" />
      <div className="absolute top-1/2 left-1/2 h-[19.375rem] w-[19.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/7 md:h-[32.5rem] md:w-[32.5rem]" />
    </div>
  );
}

// ─────────────────────────────────────────────
// Centre planet
// ─────────────────────────────────────────────
const NAVY_GLOW = "rgba(96, 144, 239, 0.45)";

function CentrePlanet() {
  return (
    <div className="pointer-events-none absolute top-1/2 left-1/2 z-100 h-[5rem] w-[5rem] -translate-x-1/2 -translate-y-1/2 md:h-[9rem] md:w-[9rem]">
      <Image
        src="/images/seasons/2026/landing/about/navy.png"
        alt="Navy planet"
        fill
        className="object-contain"
        style={{
          filter: `drop-shadow(0 0 20px ${NAVY_GLOW}) drop-shadow(0 0 26px ${NAVY_GLOW})`,
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// Exported: Planets
// ─────────────────────────────────────────────
export function Planets({ progress }: { progress: MotionValue<number> }) {
  const radii = useOrbitRadii();

  return (
    <div className="relative hidden h-full md:block md:w-[55%] lg:w-[58%]">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(80,100,255,0.04) 0%, rgba(80,100,255,0.01) 30%, transparent 65%)",
        }}
      />

      {/* Orbital system */}
      <div className="absolute inset-0">
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
      </div>
    </div>
  );
}

export default Planets;
