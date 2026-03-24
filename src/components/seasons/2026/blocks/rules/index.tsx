"use client";

import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { CarouselApi } from "@components/ui/carousel";
import { useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import RuleCard from "./rules-card";

function Rules() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const dots = useMemo(
    () => Array.from({ length: rules.length }).fill(null) as null[],
    [],
  );

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -300px 0px" });

  return (
    <section
      id="rules"
      ref={ref}
      className="flex justify-center bg-(--blue) py-12 overflow-hidden"
    >
      <div className="container text-white">
        <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Rules
        </h1>

        <div className="relative flex items-center gap-8 min-h-[500px] lg:min-h-[600px]">

          {/* Left: rule card */}
          <div className="relative z-10 flex flex-col flex-1 max-w-lg">
            <RuleCard
              rules={rules}
              api={api}
              setApi={setApi}
              current={current}
              dots={dots}
            />
          </div>

          {/* Right: planet + mascot */}
          <div className="relative flex-1 flex items-end justify-center self-stretch">
            {/* Background planet */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="scale-150 opacity-40 w-full">
                <DOTImage
                  src="/images/seasons/2026/landing/judges/sponsor_planet_bg.png"
                  alt=""
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 45vw, 280px"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Foreground planet */}
            <div
              className={cn(
                "relative transition-all duration-[2s] ease-out-quart",
                "not-motion-reduce:opacity-0 not-motion-reduce:scale-95",
                { "not-motion-reduce:opacity-100 not-motion-reduce:scale-100": isInView },
              )}
              style={{ width: "clamp(280px, 45vw, 560px)", aspectRatio: "1" }}
            >
              <DOTImage
                src="/images/seasons/2026/landing/rules/rings_planet.png"
                alt="Planet"
                width={800}
                height={800}
                sizes="(min-width: 1024px) 45vw, 280px"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Mascot */}
            <div
              className={cn(
                "absolute bottom-0 left-0 w-24 lg:w-32 xl:w-40 transition-all duration-[2s] ease-out-quart",
                "not-motion-reduce:opacity-0 not-motion-reduce:translate-y-4",
                { "not-motion-reduce:opacity-100 not-motion-reduce:translate-y-0": isInView },
              )}
            >
              <DOTImage
                src="/images/seasons/2026/landing/rules/default-back.png"
                alt="Mascot"
                width={300}
                height={400}
                sizes="160px"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rules;

function RuleItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative ml-6 bg-no-repeat before:absolute before:top-2 before:-left-4 before:block before:size-3 before:bg-[url(/images/seasons/2025/landing/star.svg)] before:bg-contain before:content-[''] lg:ml-8 lg:before:-left-8 lg:before:size-6">
      {children}
    </li>
  );
}

function RuleList({ children }: { children: React.ReactNode }) {
  return <ul className="list-outside space-y-1 lg:space-y-2">{children}</ul>;
}

const rules: React.ReactNode[] = [
  <>
    <p>All members of your team must be</p>
    <RuleList>
      <RuleItem>a current <strong>undergraduate</strong> or graduate student</RuleItem>
      <RuleItem>with an associated institutional (.edu) email</RuleItem>
    </RuleList>
  </>,
  <>
    <p>Teams must not exceed 4 people total.</p>
  </>,
  <>
    <p>Each team may only submit one (1) submission which will be submitted on behalf of all other contributors.</p>
  </>,
  <>
    <p>All work submitted must be original work. Any submissions with plagiarized work will be disqualified.</p>
  </>,
  <>
    <p>You may not submit work previously designed before the event. All designs must be made during the event dates.</p>
  </>,
  <>
    <p>Late submissions will not be accepted.</p>
  </>,
  <>
    <p>If any adjustments are made after the submission deadline, your team&apos;s submission will not count towards judging.</p>
  </>,
  <>
    <p>Teams must be comprised of entirely online or entirely in-person participants.</p>
  </>,
];