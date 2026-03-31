"use client";

import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";
import { useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

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
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  return (
    <section
      id="rules"
      ref={ref}
      className="relative flex justify-center overflow-x-clip bg-(--blue) py-12"
    >
      {/* ── LEFT: back cloud ── */}
      <div
        className="pointer-events-none absolute bottom-20"
        style={{
          bottom: "15%",
          right: "75%",
          width: "clamp(400px, 30vw, 500px)",
          zIndex: 2,
        }}
      >
        <DOTImage
          src="/images/seasons/2026/landing/rules/clouds-right.png"
          alt=""
          width={800}
          height={400}
          sizes="40vw"
          className="h-auto w-full scale-x-[-1] object-contain"
        />
      </div>

      {/* ── LEFT: front cloud (animated, above back cloud) ── */}
      <div
        className={cn(
          "absolute transition-all duration-[1.5s] ease-out-quart",
          "not-motion-reduce:scale-95 not-motion-reduce:opacity-0",
          {
            "not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
              isInView,
          },
        )}
        style={{
          bottom: "5%",
          right: "70%",
          width: "clamp(200px, 28vw, 400px)",
          zIndex: 20,
          animation: "card-float 5s ease-in-out infinite",
        }}
      >
        <DOTImage
          src="/images/seasons/2026/landing/rules/clouds-right.png"
          alt=""
          width={800}
          height={400}
          sizes="30vw"
          className="h-auto w-full scale-x-[-1] object-contain"
        />
      </div>
      <div
        className={cn(
          "pointer-events-none absolute transition-all duration-[1.5s] ease-out-quart",
          "not-motion-reduce:scale-95 not-motion-reduce:opacity-0",
          {
            "not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
              isInView,
          },
        )}
        style={{
          bottom: "15%",
          right: "75%",
          width: "clamp(80px, 15vw, 180px)",
          zIndex: 30, // above card (z-10) and all clouds
          animation: "mascot-float 4s ease-in-out infinite",
        }}
      >
        <DOTImage
          src="/images/seasons/2026/landing/rules/flame_point.png"
          alt="Mascot"
          width={300}
          height={400}
          sizes="180px"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* ── RIGHT: back cloud (static, dimmed) ── */}
      <div
        className="pointer-events-none absolute right-0 bottom-0"
        style={{
          width: "clamp(240px, 38vw, 540px)",
          zIndex: 2,
          transform: "translateX(14%) translateY(10%)",
        }}
      >
        <DOTImage
          src="/images/seasons/2026/landing/rules/clouds-right.png"
          alt=""
          width={800}
          height={400}
          sizes="40vw"
          className="h-auto w-full scale-x-[-1] object-contain"
        />
      </div>

      {/* ── RIGHT: front cloud (animated) ── */}
      <div
        className={cn(
          "absolute transition-all duration-[1.5s] ease-out-quart",
          "not-motion-reduce:scale-95 not-motion-reduce:opacity-0",
          {
            "not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
              isInView,
          },
        )}
        style={{
          bottom: "-10%",
          right: "8%",
          width: "clamp(200px, 28vw, 400px)",
          zIndex: 20,
          animation: "card-float 5s ease-in-out infinite",
        }}
      >
        <DOTImage
          src="/images/seasons/2026/landing/rules/clouds-right.png"
          alt=""
          width={800}
          height={400}
          sizes="30vw"
          className="h-auto w-full scale-x-[-1] object-contain"
        />
      </div>

      {/* ── MASCOT */}
      <div
        className={cn(
          "pointer-events-none absolute transition-all duration-[1.5s] ease-out-quart",
          "not-motion-reduce:scale-95 not-motion-reduce:opacity-0",
          {
            "not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
              isInView,
          },
        )}
        style={{
          bottom: "4%",
          right: "16%",
          width: "clamp(80px, 10vw, 180px)",
          zIndex: 30, // above card (z-10) and all clouds
          animation: "mascot-float 4s ease-in-out infinite",
        }}
      >
        <DOTImage
          src="/images/seasons/2026/landing/rules/alien_point.png"
          alt="Mascot"
          width={300}
          height={400}
          sizes="180px"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* ── Main content ── */}
      <div className="container text-white">
        <h1 className="w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Rules
        </h1>

        <div className="relative flex flex-col items-center gap-0 pb-8">
          {/* Floating rule card — z-10 */}
          <div
            className={cn(
              "relative z-10 w-full max-w-2xl transition-all duration-[1.5s] ease-out-quart",
              "not-motion-reduce:translate-y-6 not-motion-reduce:opacity-0",
              {
                "not-motion-reduce:translate-y-0 not-motion-reduce:opacity-100":
                  isInView,
              },
            )}
          >
            {/* Glass card */}
            <div
              className="relative rounded-2xl p-6 lg:p-10"
              style={{
                background: "rgba(195, 195, 195, 0.01)",
                border: "1px solid rgba(88, 63, 247, 0.7)",
                backdropFilter: "blur(12px)",
                borderLeft: "3px solid rgba(26, 64, 231, 0.32)",
              }}
            >
              {/* Top glare streak */}
              <div
                className="absolute top-0 right-8 left-8 h-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(111, 252, 226, 0.82), rgba(167,139,250,0.5), transparent)",
                }}
              />

              {/* Carousel */}
              <div className="relative z-10">
                <Carousel
                  opts={{ align: "start" }}
                  className="w-full"
                  setApi={setApi}
                >
                  <CarouselContent className="m-0">
                    {rules.map((rule, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-full py-2 select-none"
                      >
                        <div className="flex flex-col gap-4">
                          <span className="[font-family:var(--font-lekton)] text-xs font-medium tracking-widest text-sky-400/70">
                            RULE {String(index + 1).padStart(2, "0")} /{" "}
                            {String(rules.length).padStart(2, "0")}
                          </span>
                          <div className="space-y-2 [font-family:var(--font-lekton)] text-base leading-relaxed text-white lg:text-xl">
                            {rule}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>

                {/* Dots + arrows — centered, sky blue */}
                <div className="mt-6 flex items-center justify-center gap-4">
                  <button
                    onClick={() => api?.scrollPrev()}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/15 text-white transition-colors hover:border-sky-400/70 hover:bg-sky-500/30"
                  >
                    ←
                  </button>
                  <div className="hidden items-center gap-2 sm:flex">
                    {dots.map((_, index) => (
                      <button
                        key={index}
                        title={`Rule ${index + 1}`}
                        onClick={() => api?.scrollTo(index)}
                        className={cn(
                          "rounded-full transition-all duration-200",
                          current === index + 1
                            ? "h-2 w-5 bg-sky-400"
                            : "h-2 w-2 bg-sky-400/30",
                        )}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => api?.scrollNext()}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/15 text-white transition-colors hover:border-sky-400/70 hover:bg-sky-500/30"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes card-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes mascot-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
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
      <RuleItem>
        a current <strong>undergraduate or graduate</strong> student
      </RuleItem>
      <RuleItem>with an associated institutional (.edu) email</RuleItem>
    </RuleList>
  </>,
  <>
    <p>
      Teams must not exceed <strong>4 people total.</strong>
    </p>
  </>,
  <>
    <p>
      Each team may only submit one (1) submission which will be submitted on
      behalf of all other contributors.
    </p>
  </>,
  <>
    <p>
      All work submitted must be <strong>original work</strong>. Any submissions
      with plagiarized work will be disqualified.
    </p>
  </>,
  <>
    <p>
      You may not submit work previously designed before the event. All designs
      must be made during the event dates.
    </p>
  </>,
  <>
    <p>Late submissions will not be accepted.</p>
  </>,
  <>
    <p>
      If any adjustments are made after the submission deadline, your
      team&apos;s submission will not count towards judging.
    </p>
  </>,
  <>
    <p>
      Teams must be comprised of entirely online or entirely in-person
      participants.
    </p>
  </>,
];
