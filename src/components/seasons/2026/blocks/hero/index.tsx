"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const line1 = [
  {
    src: `/images/seasons/2026/landing/hero/1.svg`,
    delay: `0s`,
    duration: `4s`,
    rotate: `-1deg`,
    marginY: 0,
    marginX: -24,
  },
  {
    src: `/images/seasons/2026/landing/hero/2.svg`,
    delay: `0.25s`,
    duration: `5s`,
    rotate: `1deg`,
    marginY: 5,
    marginX: -38,
  },
  {
    src: `/images/seasons/2026/landing/hero/3.svg`,
    delay: `0.5s`,
    duration: `6s`,
    rotate: `-2deg`,
    marginY: 0,
    marginX: -33,
  },
  {
    src: `/images/seasons/2026/landing/hero/4.svg`,
    delay: `0.75s`,
    duration: `4s`,
    rotate: `2deg`,
    marginY: 0,
    marginX: -17,
  },
  {
    src: `/images/seasons/2026/landing/hero/5.svg`,
    delay: `1s`,
    duration: `5s`,
    rotate: `-1deg`,
    marginY: 0,
    marginX: -33,
  },
  {
    src: `/images/seasons/2026/landing/hero/6.svg`,
    delay: `1.25s`,
    duration: `6s`,
    rotate: `3deg`,
    marginY: 0,
    marginX: -31,
  },
];

const line2 = [
  {
    src: `/images/seasons/2026/landing/hero/7.svg`,
    delay: `0s`,
    duration: `4s`,
    rotate: `-1deg`,
    marginY: 0,
    marginX: -33,
  },
  {
    src: `/images/seasons/2026/landing/hero/8.svg`,
    delay: `0.25s`,
    duration: `5s`,
    rotate: `1deg`,
    marginY: 0,
    marginX: -40,
  },
  {
    src: `/images/seasons/2026/landing/hero/9.svg`,
    delay: `0.5s`,
    duration: `6s`,
    rotate: `-2deg`,
    marginY: 0,
    marginX: -40,
  },
  {
    src: `/images/seasons/2026/landing/hero/10.svg`,
    delay: `0.75s`,
    duration: `4s`,
    rotate: `2deg`,
    marginY: 0,
    marginX: -32,
  },
  {
    src: `/images/seasons/2026/landing/hero/11.svg`,
    delay: `1s`,
    duration: `5s`,
    rotate: `-1deg`,
    marginY: 0,
    marginX: -29,
  },
  {
    src: `/images/seasons/2026/landing/hero/12.svg`,
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
        ? "/images/seasons/2026/landing/hero/shooting1.svg"
        : "/images/seasons/2026/landing/hero/shooting2.svg";

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
      style={{ zIndex: 5 }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] justify-center pt-28 pb-10 md:min-h-[120vh] md:pt-40 md:pb-16">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rot)); }
          50%       { transform: translateY(-18px) rotate(calc(var(--rot) * -1)); }
        }
        @keyframes floatAstronaut {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50%       { transform: translateY(-22px) rotate(-12deg); }
        }
      `}</style>

      {/* Shooting stars layer — sits above background, below letters */}
      <div className="z-0">
        <ShootingStars />
      </div>

      {/* Moon */}
      <Image
        src="/images/seasons/2026/landing/hero/moon.svg"
        width={80}
        height={50}
        alt="moon"
        className="pointer-events-none absolute bottom-[-10%] left-1/2 z-10 w-[90%] max-w-3xl -translate-x-1/2 md:bottom-[-23%]"
        style={{
          mixBlendMode: "screen",
          filter: "drop-shadow(0 0 40px rgba(168, 130, 215, 0.6))",
        }}
      />

      {/* Floating letters — --hero-m scales letter size + overlap on small screens */}
      <div className="absolute top-[20vh] left-1/2 flex w-full max-w-5xl -translate-x-1/2 flex-col items-center gap-0 px-2 sm:top-[17vh] sm:px-0 md:top-[15vh]">
        <div
          className="flex flex-col items-center [--hero-m:0.48] sm:[--hero-m:0.72] md:[--hero-m:0.88] lg:[--hero-m:1]"
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

          {/* Lost & Found */}
          <Image
            src="/images/seasons/2026/landing/hero/lostandfound.png"
            alt="Lost & Found"
            width={400}
            height={80}
            className="pointer-events-none ml-4 -mt-20 w-full max-w-[200px] object-contain object-center md:-mt-38 md:max-w-xs"
          />
        </div>
      </div>

      {/* Astronaut */}
      <div className="absolute bottom-[26vh] left-1/2 -translate-x-1/2 rotate-[20deg] md:bottom-60 md:left-[-10px] md:translate-x-0">
        <Image
          src="/images/seasons/2026/landing/hero/astronaunt_pointing.svg"
          width={500}
          height={500}
          alt="astronaunt_pointing"
          className="h-[160px] w-auto object-contain sm:h-[200px] md:h-[280px] lg:h-[380px] xl:h-[500px]"
          style={{
            animation: "floatAstronaut 6s ease-in-out infinite",
            filter:
              "drop-shadow(0 0 18px rgba(160, 80, 255, 0.9)) drop-shadow(0 0 40px rgba(168, 130, 215, 0.5))",
          }}
        />
      </div>
    </section>
  );
}
