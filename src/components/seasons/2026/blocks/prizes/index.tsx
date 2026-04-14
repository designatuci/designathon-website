"use client";

import Image from "next/image";

const prizes = [
  {
    title: "First Place",
    imageSrc: "/images/seasons/2026/landing/prizes/first.png",
    subtitle: "1 winner",
  },
  {
    title: "Second Place",
    imageSrc: "/images/seasons/2026/landing/prizes/second.png",
    subtitle: "1 winner",
  },
  {
    title: "Third Place",
    imageSrc: "/images/seasons/2026/landing/prizes/third.png",
    subtitle: "1 winner",
  },
];

export default function Prizes() {
  return (
    <section
      id="prizes"
      className="flex justify-center bg-(--blue) px-4 py-12 text-white"
    >
      <style>{`
        @keyframes prize-bob {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }

        .prize-bob {
          animation: prize-bob 2.8s ease-in-out infinite;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .prize-bob {
            animation: none;
          }
        }
      `}</style>
      <div className="container flex w-full flex-col items-center">
        <h1 className="w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Prizes
        </h1>

        <div className="mt-8 grid w-full grid-cols-1 place-items-center gap-8 md:grid-cols-3">
          {prizes.map((prize, index) => (
            <div
              key={prize.title}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div
                className="prize-bob relative h-52 w-52 overflow-hidden md:h-64 md:w-64"
                style={{ animationDelay: `${index * 0.25}s` }}
              >
                <Image
                  src={prize.imageSrc}
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 208px, 256px"
                  priority={prize.title === "First Place"}
                />
              </div>
              <p className="[font-family:var(--font-luxurious-script)] text-4xl leading-none text-white md:text-5xl">
                {prize.title}
              </p>
              <p className="text-sm tracking-wide text-white/70 md:text-base">
                {prize.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}