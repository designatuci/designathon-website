"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Stats() {
  const starsRef = useRef<HTMLDivElement>(null);
  const starsInView = useInView(starsRef, { once: true, amount: 0.5 });

  return (
    <section id="stats" className="relative w-full py-4 sm:py-20 lg:py-28">
      <div className="relative mx-auto aspect-[1113/500] w-full">
        <div
          ref={starsRef}
          className={cn(
            "pointer-events-none absolute inset-0 z-0 flex w-full items-center justify-end transition-all duration-700 ease-out-quart",
            "not-motion-reduce:opacity-0 sm:not-motion-reduce:translate-x-10",
            {
              "not-motion-reduce:opacity-100 sm:not-motion-reduce:translate-x-0":
                starsInView,
            },
          )}
        >
          <Image
            src="/images/seasons/2026/landing/stats/stars.png"
            alt=""
            width={1113}
            height={671}
            className="mt-30 h-auto w-full max-w-[300px] object-contain md:max-w-[1300px]"
          />
        </div>

        <div className="items-top relative z-10 flex w-full justify-center pt-8 sm:pt-10 lg:pt-16">
          <div className="flex w-full max-w-[1920px] flex-col items-center justify-center gap-8 px-4">
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

  const startValue = stats * 0.5;
  const numberWidthChars = Math.max(
    Math.round(startValue).toLocaleString().length,
    Math.round(stats).toLocaleString().length,
  );
  const extraChars =
    (label === "funding" ? 1 : 0) + (label === "projects" ? 1 : 0);

  return (
    <div className="flex flex-col items-center text-center" ref={ref}>
      <div
        className="flex items-center [font-family:var(--font-inria-sans)] text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
        style={{
          fontVariantNumeric: "tabular-nums",
          minWidth: `${numberWidthChars + extraChars}ch`,
        }}
      >
        {label === "funding" && <span>$</span>}
        <AnimatedNumber
          value={isInView ? stats : startValue}
          widthChars={numberWidthChars}
        />
        {label === "projects" && <span>+</span>}
      </div>
      <p className="max-w-32 text-lg leading-tight font-extrabold text-[#A1D8E6] sm:text-xl lg:max-w-56 lg:text-2xl">
        {label}
      </p>
    </div>
  );
}

function AnimatedNumber({
  value,
  className,
  widthChars,
}: {
  value: number;
  className?: string;
  widthChars?: number;
}) {
  const spring = useSpring(value, { stiffness: 250, damping: 40 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span
      className={className}
      style={{
        display: "inline-block",
        width: widthChars ? `${widthChars}ch` : undefined,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {display}
    </motion.span>
  );
}
