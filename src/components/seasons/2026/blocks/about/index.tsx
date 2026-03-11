"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Planets } from "./planets";
import { AboutBox } from "./text";

// ─────────────────────────────────────────────
// Exported: AboutSection
// Composes the left content panel and right orbital panel
// inside a sticky scroll container.
// ─────────────────────────────────────────────
export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // progress = 0 when section scrolls into view, 1 when fully traversed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[125vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <section
          id="about"
          className="relative flex h-full w-full overflow-hidden"
        >
          {/* Grain overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-20 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
              backgroundSize: "256px",
            }}
          />

          <AboutBox />
          <Planets progress={progress} />
        </section>
      </div>
    </div>
  );
}

export default AboutSection;
