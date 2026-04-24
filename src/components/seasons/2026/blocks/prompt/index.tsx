"use client";

import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";

function PromptCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-l-[3px] border-[rgba(88,63,247,0.75)] border-l-[rgba(26,64,231,0.45)] bg-[rgba(12,8,32,0.88)] p-6 backdrop-blur-[12px] lg:p-10",
        className,
      )}
    >
      <div className="absolute top-0 right-8 left-8 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(111,252,226,0.82),rgba(167,139,250,0.5),transparent)]" />
      {children}
    </div>
  );
}

export default function Prompt() {
  return (
    <section
      id="prompt"
      className="relative overflow-hidden pt-1 pb-0 sm:pt-2 xl:py-4"
    >
      <div className="pointer-events-none absolute -top-2 left-0 w-full max-w-[1000px] select-none sm:top-14 md:-top-[100px] lg:-top-[125px] xl:h-[1000px] 2xl:-top-[175px]">
        <DOTImage
          src="/images/seasons/2026/landing/prompt/saturn.png"
          alt=""
          width={500}
          height={500}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col justify-center gap-8 pt-[525px] md:pt-[1000px] lg:pt-[1100px] 2xl:pt-[1100px]">
          <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal md:text-8xl xl:text-[7rem]">
            Prompt
          </h1>

          <PromptCard>
            <p className="text-base text-[rgba(255,255,255,0.7)] sm:text-base lg:text-lg xl:text-xl">
              A digital cosmos for the undiscovered and the forgotten. <br />
              <br />
              Like matter scattered across a nebula, valuable aspects of
              everyday life become forgotten and unrecognized. <br />
              <br />
              In a world where both objects and memories can slip into the void,
              this challenge asks you to bridge the cosmic gap between lost and
              found. Create a solution that not only helps people recover what’s
              missing, but also reveals what they didn’t realize was gone -
              transforming forgotten pieces into constellations of meaning.
            </p>
          </PromptCard>
        </div>
      </div>
    </section>
  );
}
