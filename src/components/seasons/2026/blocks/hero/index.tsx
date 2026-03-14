"use client";

import Image from "next/image";

const line1 = [
  { src: `/images/seasons/2026/landing/hero/1.svg`, delay: `0s`, duration: `4s`, rotate: `-1deg`, margin: `0 -24px` },
  { src: `/images/seasons/2026/landing/hero/2.svg`, delay: `0.25s`, duration: `5s`, rotate: `1deg`, margin: `5px -38px` },
  { src: `/images/seasons/2026/landing/hero/3.svg`, delay: `0.5s`, duration: `6s`, rotate: `-2deg`, margin: `0 -33px` },
  { src: `/images/seasons/2026/landing/hero/4.svg`, delay: `0.75s`, duration: `4s`, rotate: `2deg`, margin: `0 -17px` },
  { src: `/images/seasons/2026/landing/hero/5.svg`, delay: `1s`, duration: `5s`, rotate: `-1deg`, margin: `0 -33px` },
  { src: `/images/seasons/2026/landing/hero/6.svg`, delay: `1.25s`, duration: `6s`, rotate: `3deg`, margin: `0 -31px` },
];

const line2 = [
  { src: `/images/seasons/2026/landing/hero/7.svg`, delay: `0s`, duration: `4s`, rotate: `-1deg`, margin: `0 -33px` },
  { src: `/images/seasons/2026/landing/hero/8.svg`, delay: `0.25s`, duration: `5s`, rotate: `1deg`, margin: `0 -37px` },
  { src: `/images/seasons/2026/landing/hero/9.svg`, delay: `0.5s`, duration: `6s`, rotate: `-2deg`, margin: `0 -33px` },
  { src: `/images/seasons/2026/landing/hero/10.svg`, delay: `0.75s`, duration: `4s`, rotate: `2deg`, margin: `0 -37px` },
  { src: `/images/seasons/2026/landing/hero/11.svg`, delay: `1s`, duration: `5s`, rotate: `-1deg`, margin: `0 -29px` },
  { src: `/images/seasons/2026/landing/hero/12.svg`, delay: `1.25s`, duration: `6s`, rotate: `3deg`, margin: `0 -37px` },
];


export default function Hero() {
  return (
    <section className="relative flex justify-center pt-28 pb-10 md:pt-40 md:pb-16 min-h-[600px]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--rot)); }
          50%       { transform: translateY(-18px) rotate(calc(var(--rot) * -1)); }
        }
      `}</style>

      {/* Moon */}
      <Image
        src="/images/seasons/2026/landing/hero/moon.svg"
        width={80}
        height={50}
        alt="moon"
        className="pointer-events-none absolute -top-[12rem] left-1/2 z-10 w-[90%] max-w-3xl -translate-x-1/2 scale-y-[-1] md:-top-[25rem] lg:-top-[30rem]"
        style={{
          mixBlendMode: "screen",
          filter: "drop-shadow(0 0 40px rgba(168, 130, 215, 0.6))",
        }}
      />

      {/* Floating letters */}
      <div className="absolute top-[280px] left-1/2 flex w-[95%] max-w-5xl -translate-x-1/2 flex-col items-center gap-0">
        {/* Line 1: design */}
        <div className="flex items-end justify-center gap-0">
          {line1.map((l, i) => (
            <Image
              key={i}
              src={l.src}
              alt=""
              width={150}
              height={150}
              className="pointer-events-none object-contain"
              style={{
                height: "150px",
                width: "auto",
                margin: l.margin,
                animation: `float ${l.duration} ease-in-out infinite`,
                animationDelay: l.delay,
                "--rot": l.rotate,
                filter: "drop-shadow(0 0 20px rgba(160, 80, 255, 0.8))",
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Line 2: a-thon */}
        <div className="flex items-end justify-center gap-0" style={{ marginTop: "-20px" }}>
          {line2.map((l, i) => (
            <Image
              key={i}
              src={l.src}
              alt=""
              width={150}
              height={150}
              className="pointer-events-none object-contain"
              style={{
                height: "150px",
                width: "auto",
                margin: l.margin,
                animation: `float ${l.duration} ease-in-out infinite`,
                animationDelay: l.delay,
                "--rot": l.rotate,
                filter: "drop-shadow(0 0 20px rgba(160, 80, 255, 0.8))",
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}