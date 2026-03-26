"use client";

import { cn } from "@/lib/utils";
import AnimatedNumber from "@components/seasons/2025/animations/animated-number";
import { useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Stats() {
  const starsRef = useRef<HTMLDivElement>(null);
  const starsInView = useInView(starsRef, { once: true, amount: 0.5 });

  return (
    <section id="stats" className="relative w-full py-12 md:py-16">
      <div className="relative mx-auto aspect-[1113/500] w-full px-4">
        <div
          ref={starsRef}
          className={cn(
            "pointer-events-none absolute inset-0 z-0 flex w-full items-center justify-end transition-all duration-700 ease-out-quart",
            "not-motion-reduce:translate-x-10 not-motion-reduce:opacity-0",
            {
              "not-motion-reduce:translate-x-0 not-motion-reduce:opacity-100":
                starsInView,
            },
          )}
        >
          <Image
            src="/images/seasons/2026/landing/stats/stars.png"
            alt=""
            width={1113}
            height={671}
            className="h-auto w-full max-w-[300px] object-contain md:max-w-[1200px]"
          />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-full max-w-[1920px]">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <StatsCard stats={250} label="projects" />
              <StatsCard stats={1350} label="attendees" />
              <StatsCard stats={85} label="universities" />
              <StatsCard stats={60000} label="funding" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StatsCardProps = {
  stats: number;
  label: string;
};

function StatsCard({ stats, label }: StatsCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div className="flex flex-col items-center text-center" ref={ref}>
      <div className="flex items-center text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        {label === "prizes" && <span>$</span>}
        <AnimatedNumber value={isInView ? stats : stats / 2} />
        {label === "attendees" && <span>+</span>}
      </div>
      <p className="max-w-32 text-lg leading-tight font-extrabold text-white sm:text-xl lg:max-w-56 lg:text-2xl">
        {label}
      </p>
    </div>
  );
}
