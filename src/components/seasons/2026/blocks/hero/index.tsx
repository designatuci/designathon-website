"use client";

import { cn } from "@/lib/utils";
import AppsCloseCountdown from "@components/seasons/2026/blocks/hero/countdown-timer";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const line1 = [
  {
    src: `/images/seasons/2026/landing/hero/1.webp`,
    delay: `0s`,
    duration: `4s`,
    rotate: `-1deg`,
    marginY: 0,
    marginX: -24,
  },
  {
    src: `/images/seasons/2026/landing/hero/2.webp`,
    delay: `0.25s`,
    duration: `5s`,
    rotate: `1deg`,
    marginY: 5,
    marginX: -38,
  },
  {
    src: `/images/seasons/2026/landing/hero/3.webp`,
    delay: `0.5s`,
    duration: `6s`,
    rotate: `-2deg`,
    marginY: 0,
    marginX: -33,
  },
  {
    src: `/images/seasons/2026/landing/hero/4.webp`,
    delay: `0.75s`,
    duration: `4s`,
    rotate: `2deg`,
    marginY: 0,
    marginX: -17,
  },
  {
    src: `/images/seasons/2026/landing/hero/5.webp`,
    delay: `1s`,
    duration: `5s`,
    rotate: `-1deg`,
    marginY: 0,
    marginX: -33,
  },
  {
    src: `/images/seasons/2026/landing/hero/6.webp`,
    delay: `1.25s`,
    duration: `6s`,
    rotate: `3deg`,
    marginY: 0,
    marginX: -31,
  },
];

const line2 = [
  {
    src: `/images/seasons/2026/landing/hero/7.webp`,
    delay: `0s`,
    duration: `4s`,
    rotate: `-1deg`,
    marginY: 0,
    marginX: -33,
  },
  {
    src: `/images/seasons/2026/landing/hero/8.webp`,
    delay: `0.25s`,
    duration: `5s`,
    rotate: `1deg`,
    marginY: 0,
    marginX: -40,
  },
  {
    src: `/images/seasons/2026/landing/hero/9.webp`,
    delay: `0.5s`,
    duration: `6s`,
    rotate: `-2deg`,
    marginY: 0,
    marginX: -40,
  },
  {
    src: `/images/seasons/2026/landing/hero/10.webp`,
    delay: `0.75s`,
    duration: `4s`,
    rotate: `2deg`,
    marginY: 0,
    marginX: -32,
  },
  {
    src: `/images/seasons/2026/landing/hero/11.webp`,
    delay: `1s`,
    duration: `5s`,
    rotate: `-1deg`,
    marginY: 0,
    marginX: -29,
  },
  {
    src: `/images/seasons/2026/landing/hero/12.webp`,
    delay: `1.25s`,
    duration: `6s`,
    rotate: `3deg`,
    marginY: 0,
    marginX: -37,
  },
];

function ShootingStars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeoutId: ReturnType<typeof setTimeout>;

    function spawnStar() {
      if (!container) return;

      // shooting1 = faces left-down  → enters from RIGHT, travels left+down
      // shooting2 = faces right-down → enters from LEFT,  travels right+down
      const goingLeft = Math.random() < 0.5;
      const src = goingLeft
        ? "/images/seasons/2026/landing/hero/shooting1.webp"
        : "/images/seasons/2026/landing/hero/shooting2.webp";

      // Random vertical start position (0–75% down the hero)
      const startYPercent = Math.random() * 75;

      // Random size: 100–200px wide
      const size = 100 + Math.random() * 100;

      // Travel duration: 900ms–1800ms
      const duration = 900 + Math.random() * 900;

      // Travel far enough to fully exit the opposite side
      const travelX = window.innerWidth + size * 2;

      // Steeper downward drop over the journey
      const verticalDrop = size * 1.4;

      const img = document.createElement("img");
      img.src = src;
      img.alt = "";
      img.style.cssText = `
        position: absolute;
        top: ${startYPercent}%;
        width: ${size}px;
        height: auto;
        pointer-events: none;
        opacity: 0;
        transition: opacity 120ms ease-in;
        filter: drop-shadow(0 0 10px rgba(200, 160, 255, 0.85));
        will-change: transform;
      `;

      // Position off-screen on the correct starting side
      if (goingLeft) {
        img.style.right = `-${size}px`;
        img.style.left = "auto";
      } else {
        img.style.left = `-${size}px`;
        img.style.right = "auto";
      }

      container.appendChild(img);

      // Fade in on next frame
      requestAnimationFrame(() => {
        img.style.opacity = "1";
      });

      const startTime = performance.now();

      function animate(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out quad for natural deceleration
        const eased = 1 - (1 - progress) * (1 - progress);

        const x = eased * travelX;
        const y = eased * verticalDrop;

        // For goingLeft: move leftward (negative X), drop down
        // For goingRight: flip image with scaleX(-1), then move rightward.
        // Since scaleX(-1) is applied after translate in CSS order, we keep
        // translate positive and wrap with the flip.
        if (goingLeft) {
          img.style.transform = `translateX(-${x}px) translateY(${y}px)`;
        } else {
          // translateX(x) moves right; scaleX(-1) flips the image visually
          img.style.transform = `translateX(${x}px) translateY(${y}px) scaleX(-1)`;
        }

        // Fade out in the last 20% of travel
        if (progress > 0.8) {
          img.style.opacity = String(1 - (progress - 0.8) / 0.2);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          img.remove();
        }
      }

      requestAnimationFrame(animate);

      // Schedule next star at a random interval between 2–6s
      const nextDelay = 1000 + Math.random() * 4000;
      timeoutId = setTimeout(spawnStar, nextDelay);
    }

    // First star after a short initial pause
    timeoutId = setTimeout(spawnStar, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    />
  );
}

const heroRevealUrls = [
  ...line1.map((l) => l.src),
  ...line2.map((l) => l.src),
  "/images/seasons/2026/landing/hero/moon.webp",
  "/images/seasons/2026/landing/hero/lostandfound.webp",
];

/** Warm cache; astronaut / alien don’t block the pop-in (often heavier PNGs). */
const heroPrefetchUrls = [
  "/images/seasons/2026/landing/hero/astronaunt_pointing.webp",
  "/images/seasons/2026/landing/hero/alien.webp",
];

const heroInfoPanelStyle: CSSProperties = {
  padding: "1rem 1.25rem",
  borderRadius: "0.75rem",
  background: "rgba(12, 8, 32, 0.88)",
  border: "1px solid rgba(88, 63, 247, 0.75)",
  backdropFilter: "blur(14px)",
  borderLeft: "3px solid rgba(26, 64, 231, 0.45)",
  color: "rgba(255,255,255,0.85)",
  position: "relative",
  overflow: "hidden",
};

const heroInfoPanelTopLineStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: "2rem",
  right: "2rem",
  height: "2px",
  borderRadius: "999px",
  background:
    "linear-gradient(90deg, transparent, rgba(111, 252, 226, 0.82), rgba(167, 139, 250, 0.5), transparent)",
};

function HeroInfoPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center gap-2 text-center [font-family:var(--font-inria-sans)]",
        className,
      )}
      style={heroInfoPanelStyle}
    >
      <div style={heroInfoPanelTopLineStyle} aria-hidden />
      {children}
    </div>
  );
}

export default function Hero() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    let numLoaded = 0;
    const total = heroRevealUrls.length;

    heroRevealUrls.forEach((src) => {
      const img = document.createElement("img");
      img.onload = img.onerror = () => {
        numLoaded++;
        if (numLoaded === total) setAssetsLoaded(true);
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    heroPrefetchUrls.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
    });
  }, []);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-visible pt-16 pb-8 sm:pt-20 md:block md:min-h-[120vh] md:pt-28 md:pb-16">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rot)); }
          50%       { transform: translateY(calc(var(--float-amplitude, 18px) * -1)) rotate(calc(var(--rot) * -1)); }
        }
        @keyframes floatAstronaut {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50%       { transform: translateY(-22px) rotate(-12deg); }
        }
        @keyframes floatAlien {
          0%, 100% { transform: translateY(0px) rotate(15deg); }
          50%       { transform: translateY(-22px) rotate(12deg); }
        }
      `}</style>

      <div
        className={cn(
          "absolute inset-0 z-20 max-md:relative max-md:inset-auto max-md:z-30 max-md:min-h-0 max-md:flex-1",
          "transition-all duration-1000 ease-out-quart",
          "not-motion-reduce:translate-y-24 not-motion-reduce:scale-95 not-motion-reduce:opacity-0",
          {
            "not-motion-reduce:translate-y-0 not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
              assetsLoaded,
          },
        )}
      >
        {/* Shooting stars layer — behind letters / timer */}
        <div className="absolute inset-0 z-[-1]">
          <ShootingStars />
        </div>

        {/* Title + timer + date: one column on mobile (like archive/2025); md+ unwraps via contents for absolute layout */}
        <div
          className={cn(
            "mx-auto w-full max-w-5xl",
            "max-md:relative max-md:z-20 max-md:flex max-md:flex-col max-md:items-center max-md:gap-1.5 max-md:px-2 max-md:pb-8",
            "md:contents",
          )}
        >
          {/* Floating letters — --hero-m scales letter size + overlap on small screens */}
          <div
            className={cn(
              "z-[12] flex w-full max-w-5xl flex-col items-center gap-0 sm:px-0",
              "max-md:relative max-md:mt-10 max-md:w-full max-md:translate-x-0",
              "md:absolute md:top-[15vh] md:left-1/2 md:z-auto md:-translate-x-1/2 md:px-2",
            )}
          >
            <div
              className="flex flex-col items-center [--float-amplitude:7px] [--hero-m:0.48] sm:[--hero-m:0.72] md:[--float-amplitude:18px] md:[--hero-m:0.88] lg:[--hero-m:0.88]"
              style={{ "--letter-base": "150px" } as React.CSSProperties}
            >
              {/* Line 1 */}
              <div className="flex max-w-full items-end justify-center gap-0">
                {line1.map((l, i) => (
                  <Image
                    key={i}
                    src={l.src}
                    alt=""
                    width={150}
                    height={150}
                    sizes="(max-width: 640px) 20vw, (max-width: 768px) 14vw, 132px"
                    className="pointer-events-none max-w-none object-contain"
                    style={
                      {
                        height:
                          "calc(var(--letter-base, 150px) * var(--hero-m, 1))",
                        width: "auto",
                        marginTop: `calc(${l.marginY}px * var(--hero-m, 1))`,
                        marginBottom: 0,
                        marginLeft: `calc(${l.marginX}px * var(--hero-m, 1))`,
                        marginRight: `calc(${l.marginX}px * var(--hero-m, 1))`,
                        animation: `float ${l.duration} ease-in-out infinite`,
                        animationDelay: l.delay,
                        "--rot": l.rotate,
                        filter: "drop-shadow(0 0 20px rgba(160, 80, 255, 0.8))",
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>

              {/* Line 2 */}
              <div
                className="flex max-w-full items-end justify-center gap-0"
                style={{
                  marginTop: "calc(-20px * var(--hero-m, 1))",
                }}
              >
                {line2.map((l, i) => (
                  <Image
                    key={i}
                    src={l.src}
                    alt=""
                    width={150}
                    height={150}
                    sizes="(max-width: 640px) 20vw, (max-width: 768px) 14vw, 132px"
                    className="pointer-events-none max-w-none object-contain"
                    style={
                      {
                        height:
                          "calc(var(--letter-base, 150px) * var(--hero-m, 1))",
                        width: "auto",
                        marginTop: `calc(${l.marginY}px * var(--hero-m, 1))`,
                        marginBottom: 0,
                        marginLeft: `calc(${l.marginX}px * var(--hero-m, 1))`,
                        marginRight: `calc(${l.marginX}px * var(--hero-m, 1))`,
                        animation: `float ${l.duration} ease-in-out infinite`,
                        animationDelay: l.delay,
                        "--rot": l.rotate,
                        filter: "drop-shadow(0 0 20px rgba(160, 80, 255, 0.8))",
                      } as React.CSSProperties
                    }
                  />
                ))}
              </div>

              {/* Lost & Found — max-md margins eat extra transparent padding in the asset */}
              <Image
                src="/images/seasons/2026/landing/hero/lostandfound.webp"
                alt="Lost & Found"
                width={400}
                height={80}
                priority
                sizes="(max-width: 768px) 200px, 320px"
                className="pointer-events-none -mt-[5.5rem] ml-4 block h-auto w-full max-w-[200px] object-contain object-center max-md:-mb-12 md:-mt-38 md:mb-0 md:max-w-xs"
              />
            </div>
          </div>

          <div
            className={cn(
              "flex w-full max-w-[calc(100vw-1.5rem)] flex-col items-center gap-3",
              "max-md:pointer-events-auto md:pointer-events-none md:absolute md:top-1/2 md:left-1/2 md:z-20 md:-translate-x-1/2 md:translate-y-[0%]",
            )}
          >
            <HeroInfoPanel className="flex min-w-[min(100vw-2rem,280px)] sm:min-w-[300px]">
              <AppsCloseCountdown />
            </HeroInfoPanel>
            <HeroInfoPanel className="flex w-fit max-w-[calc(100vw-2rem)] min-w-0 self-center">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 shrink-0 text-white/70" />
                <p className="text-sm whitespace-nowrap sm:text-base">
                  April 24 - 26, 2026
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 shrink-0 text-white/70" />
                <p className="text-sm whitespace-nowrap sm:text-base">
                  UC Irvine DCE
                </p>
              </div>
            </HeroInfoPanel>
          </div>
        </div>
      </div>

      {/* Moon + astronaut + alien: mobile = in-flow strip (like archive/2025 canvas row); md = full-bleed overlay */}
      <div
        className={cn(
          "pointer-events-none z-[5] flex w-full shrink-0 flex-col items-center gap-1 px-3 pt-2 pb-6",
          "max-md:z-0 max-md:mt-auto",
          "md:absolute md:inset-0 md:mt-0 md:gap-0 md:p-0",
          "transition-all duration-1000 ease-out-quart",
          "not-motion-reduce:translate-y-24 not-motion-reduce:scale-95 not-motion-reduce:opacity-0",
          {
            "not-motion-reduce:translate-y-0 not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
              assetsLoaded,
          },
        )}
      >
        {/* Mobile: astronaut + alien in a row above moon (no overlap); whole strip z-0 under timer/title. Desktop: md:contents. */}
        <div
          className={cn(
            "max-md:relative max-md:z-0 max-md:mx-auto max-md:flex max-md:w-full max-md:max-w-lg max-md:flex-col max-md:items-center max-md:gap-1 max-md:pb-2",
            "md:contents",
          )}
        >
          <div
            className={cn(
              "relative max-md:min-h-[min(26vw,8.25rem)] max-md:w-full",
              "md:contents",
            )}
          >
            <div
              className={cn(
                "flex rotate-[20deg] justify-center",
                "max-md:absolute max-md:bottom-2 max-md:left-1/2 max-md:z-[1] max-md:-translate-x-1/2",
                "md:absolute md:bottom-[44%] md:left-[5%] md:z-auto md:translate-x-0 md:translate-y-[35%] md:rotate-[20deg]",
              )}
            >
              <Image
                src="/images/seasons/2026/landing/hero/astronaunt_pointing.webp"
                width={500}
                height={500}
                alt="astronaunt_pointing"
                className="h-[min(42vw,11rem)] w-auto object-contain sm:h-[min(38vw,12rem)] md:h-[280px] lg:h-[380px]"
                style={{
                  animation: "floatAstronaut 6s ease-in-out infinite",
                  filter:
                    "drop-shadow(0 0 18px rgba(160, 80, 255, 0.9)) drop-shadow(0 0 40px rgba(168, 130, 215, 0.5))",
                }}
              />
            </div>

            <div
              className={cn(
                "flex -rotate-[20deg] justify-center",
                "max-md:absolute max-md:right-[10%] max-md:bottom-[5.5rem] max-md:left-auto max-md:z-[1]",
                "md:absolute md:right-[10%] md:bottom-[40%] md:z-auto md:-rotate-[20deg]",
              )}
            >
              <Image
                src="/images/seasons/2026/landing/hero/alien.webp"
                width={500}
                height={500}
                alt="alien"
                className="h-[min(18vw,4.25rem)] w-auto object-contain md:h-[200px]"
                style={{
                  animation: "floatAlien 6s ease-in-out infinite",
                  filter:
                    "drop-shadow(0 0 18px rgba(105, 105, 252, 0.9)) drop-shadow(0 0 40px rgba(168, 130, 215, 0.5))",
                }}
              />
            </div>
          </div>

          <Image
            src="/images/seasons/2026/landing/hero/moon.webp"
            width={80}
            height={50}
            alt="moon"
            priority
            sizes="(max-width: 768px) 92vw, 750px"
            className={cn(
              "pointer-events-none z-[1] h-auto w-[min(92vw,26rem)] max-w-none object-contain",
              "max-md:relative max-md:mx-auto max-md:-mt-2",
              "md:absolute md:top-1/2 md:left-1/2 md:z-10 md:w-[90%] md:max-w-[750px] md:-translate-x-1/2 md:-translate-y-[10%] md:translate-y-[50%]",
            )}
            style={{
              mixBlendMode: "screen",
              filter: "drop-shadow(0 0 40px rgba(168, 130, 215, 0.6))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
