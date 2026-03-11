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
    <div ref={containerRef} className="relative h-screen md:h-[125vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <section
          id="about"
          className="relative flex h-full w-full overflow-hidden"
        >
          <AboutBox />
          <Planets progress={progress} />
        </section>
      </div>
    </div>
  );
}

export default AboutSection;
