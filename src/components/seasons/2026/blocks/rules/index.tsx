"use client";

import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { CarouselApi } from "@components/ui/carousel";
import { useInView } from "motion/react";
import { startTransition, useEffect, useMemo, useRef, useState } from "react";
import RuleCard from "./rules-card";

function Rules() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    const onSelect = () => {
      startTransition(() => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    };
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const id = requestAnimationFrame(() => {
      api.reInit();
    });
    return () => cancelAnimationFrame(id);
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
      <div className="relative mx-auto w-full max-w-[1920px]">
        {/* ── LEFT: flame + ufo pair (bobs together) ── */}
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
            bottom: "15%",
            right: "75%",
            width: "clamp(80px, 15vw, 180px)",
            height: "clamp(120px, 18vw, 220px)",
            zIndex: 40,
            animation: "card-float 5s ease-in-out infinite",
          }}
        >
          <div
            className="pointer-events-none absolute"
            style={{
              bottom: "0%",
              right: "0%",
              width: "clamp(80px, 15vw, 180px)",
              zIndex: 30, // above card (z-10)
            }}
          >
            <DOTImage
              src="/images/seasons/2026/landing/rules/flame_sit.webp"
              alt="Mascot"
              width={300}
              height={400}
              sizes="180px"
              className="h-auto w-full object-contain"
            />
          </div>
          <div
            className="absolute"
            style={{
              top: "55%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(200px, 28vw, 400px)",
              zIndex: 20,
            }}
          >
            <DOTImage
              src="/images/seasons/2026/landing/rules/ufo.webp"
              alt=""
              width={800}
              height={400}
              sizes="30vw"
              className="h-auto w-full scale-x-[-1] object-contain"
            />
          </div>
        </div>

        {/* ── RIGHT: alien + rocket pair (bobs together) ── */}
        <div
          className={cn(
            "rules-right-pair absolute transition-all duration-[1.5s] ease-out-quart",
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
            height: "clamp(120px, 16vw, 220px)",
            zIndex: 40,
            animation: "card-float 5s ease-in-out infinite",
          }}
        >
          <div
            className="pointer-events-none absolute"
            style={{
              bottom: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(140px, 18vw, 300px)",
              zIndex: 30, // above card (z-10)
            }}
          >
            <DOTImage
              src="/images/seasons/2026/landing/rules/alien_sit.webp"
              alt="Mascot"
              width={300}
              height={400}
              sizes="300px"
              className="h-auto w-full object-contain"
            />
          </div>
          <div
            className="absolute"
            style={{
              top: "36%",
              left: "50%",
              transform: "translateX(-50%) rotate(25deg)",
              width: "clamp(200px, 28vw, 400px)",
              zIndex: 20,
            }}
          >
            <DOTImage
              src="/images/seasons/2026/landing/rules/rocket.webp"
              alt=""
              width={800}
              height={400}
              sizes="30vw"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Static stars (do not bob with pairs) */}
        <div
          className="rules-top-two-star pointer-events-none absolute"
          style={{
            top: "30%",
            left: "12%",
            width: "clamp(28px, 3.4vw, 56px)",
            transform: "rotate(90deg)",
            zIndex: 45,
          }}
        >
          <DOTImage
            src="/images/seasons/2026/landing/rules/two_star.webp"
            alt=""
            width={120}
            height={120}
            sizes="56px"
            className="h-auto w-full object-contain"
          />
        </div>
        <div
          className="pointer-events-none absolute"
          style={{
            top: "88%",
            left: "28%",
            width: "clamp(40px, 4.6vw, 72px)",
            zIndex: 45,
          }}
        >
          <DOTImage
            src="/images/seasons/2026/landing/rules/three_star.webp"
            alt=""
            width={160}
            height={160}
            sizes="72px"
            className="h-auto w-full object-contain"
          />
        </div>
        <div
          className="rules-top-three-star pointer-events-none absolute"
          style={{
            top: "28%",
            left: "68%",
            width: "clamp(40px, 4.6vw, 74px)",
            zIndex: 45,
          }}
        >
          <DOTImage
            src="/images/seasons/2026/landing/rules/three_star.webp"
            alt=""
            width={160}
            height={160}
            sizes="74px"
            className="h-auto w-full object-contain"
          />
        </div>
        <div
          className="pointer-events-none absolute"
          style={{
            top: "96%",
            left: "69%",
            width: "clamp(28px, 3.4vw, 56px)",
            zIndex: 45,
          }}
        >
          <DOTImage
            src="/images/seasons/2026/landing/rules/two_star.webp"
            alt=""
            width={120}
            height={120}
            sizes="56px"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* ── Main content ── */}
        <div className="container mx-auto w-full text-white">
          <h1 className="w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
            Rules
          </h1>

          <div className="relative flex flex-col items-center gap-0 pb-8">
            {/* Floating rule card — z-10 */}
            <div
              className={cn(
                "relative z-10 w-full max-w-2xl transition-[opacity,transform] duration-[1.5s] ease-out-quart",
                "not-motion-reduce:translate-y-6 not-motion-reduce:opacity-0",
                {
                  "not-motion-reduce:translate-y-0 not-motion-reduce:opacity-100":
                    isInView,
                },
              )}
            >
              <RuleCard
                rules={rules}
                api={api}
                setApi={setApi}
                current={current}
                dots={dots}
              />
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
        @media (max-width: 768px) {
          .rules-right-pair {
            bottom: 12% !important;
            right: 3% !important;
          }
          .rules-top-two-star,
          .rules-top-three-star {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Rules;

function RuleItem({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

function RuleList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-outside list-disc space-y-1 pl-5 marker:text-white/80 lg:space-y-2 lg:pl-6">
      {children}
    </ul>
  );
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
