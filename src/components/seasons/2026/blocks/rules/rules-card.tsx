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
  setApi: (api: CarouselApi) => void;
  current: number;
  dots: null[];
  transparent?: boolean;
};

function RuleCard({
  rules,
  api,
  setApi,
  current,
  dots,
  transparent = false,
}: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 lg:p-8",
        transparent && "p-0",
      )}
    >
      {/* Glass card background — hidden when transparent */}
      {!transparent && (
        <>
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "1rem",
            }}
          />
          <div
            className="absolute top-0 right-8 left-8 h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              borderRadius: "1rem",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 80%)",
            }}
          />
          <div className="absolute bottom-4 left-4 h-1 w-1 rounded-full bg-white/60" />
          <div className="absolute bottom-6 left-7 h-0.5 w-0.5 rounded-full bg-white/40" />
          <div className="absolute right-4 bottom-4 h-1 w-1 rounded-full bg-white/60" />
          <div className="absolute right-6 bottom-7 h-0.5 w-0.5 rounded-full bg-white/30" />
        </>
      )}

      {/* Carousel */}
      <div className="relative z-10">
        <Carousel opts={{ align: "start" }} className="w-full" setApi={setApi}>
          <CarouselContent className="m-0">
            {rules.map((rule, index) => (
              <CarouselItem key={index} className="basis-full py-4 select-none">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-medium tracking-widest text-white/50">
                    RULE {index + 1} / {rules.length}
                  </span>
                  <div className="space-y-2 text-base text-white lg:text-xl">
                    {rule}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots + arrows */}
        <div className="mt-2 flex items-center gap-4">
          <button
            onClick={() => api?.scrollPrev()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10"
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
                    ? "h-2 w-5 bg-white"
                    : "h-2 w-2 bg-white/30",
                )}
              />
            ))}
          </div>
          <button
            onClick={() => api?.scrollNext()}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:bg-white/10"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default RuleCard;
