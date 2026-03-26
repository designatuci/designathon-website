"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Planets } from "./planets";
import { AboutBox } from "./text";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  // progress = 0 when section scrolls into view, 1 when fully traversed
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Spend more scroll distance to move the planets, so they "slide" in
  // instead of feeling like they teleport due to a fast progress ramp.
  const progress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[50vh] md:h-[125vh]">
      <div className="sticky top-0 h-full overflow-hidden">
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
