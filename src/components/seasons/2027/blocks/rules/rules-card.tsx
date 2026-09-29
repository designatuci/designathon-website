"use client";

import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@components/ui/carousel";

type Props = {
  rules: React.ReactNode[];
  api: CarouselApi | undefined;
  setApi: (api: CarouselApi | undefined) => void;
  current: number;
  dots: null[];
};

function RuleCard({ rules, api, setApi, current, dots }: Props) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        border: "1px solid rgba(88, 63, 247, 0.75)",
        borderLeft: "3px solid rgba(26, 64, 231, 0.45)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
        style={{
          background: "rgba(12, 8, 32, 0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
        aria-hidden
      />
      <div
        className="absolute top-0 right-8 left-8 z-[1] h-[2px] rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(111, 252, 226, 0.82), rgba(167,139,250,0.5), transparent)",
        }}
      />

      <div className="relative z-10 p-6 text-[rgba(255,255,255,0.85)] lg:p-10">
        <Carousel
          opts={{ align: "start", duration: 18 }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent className="m-0 will-change-[transform]">
            {rules.map((rule, index) => (
              <CarouselItem key={index} className="basis-full py-2 select-none">
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

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => api?.scrollPrev()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/15 text-white transition-colors select-none hover:border-sky-400/70 hover:bg-sky-500/30"
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-sky-400/40 bg-sky-500/15 text-white transition-colors select-none hover:border-sky-400/70 hover:bg-sky-500/30"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default RuleCard;
