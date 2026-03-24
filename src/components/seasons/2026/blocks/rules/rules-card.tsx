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
};

function RuleCard({ rules, api, setApi, current, dots }: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 lg:p-8">
      {/* Glass card background */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "1rem",
        }}
      />

      {/* Top accent streak */}
      <div
        className="absolute top-0 right-8 left-8 h-[2px] rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgb(136, 0, 255), transparent)",
        }}
      />

      {/* Starfield texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          borderRadius: "1rem",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Corner constellation dots */}
      <div className="absolute bottom-4 left-4 h-1 w-1 rounded-full bg-white/60" />
      <div className="absolute bottom-6 left-7 h-0.5 w-0.5 rounded-full bg-white/40" />
      <div className="absolute right-4 bottom-4 h-1 w-1 rounded-full bg-white/60" />
      <div className="absolute right-6 bottom-7 h-0.5 w-0.5 rounded-full bg-white/30" />

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
                  <div className="space-y-2 text-base lg:text-xl text-white">
                    {rule}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots + arrows */}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => api?.scrollPrev()}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/15 text-white/70 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            ←
          </button>
          <div className="hidden sm:flex items-center gap-2">
            {dots.map((_, index) => (
              <button
                key={index}
                title={`Rule ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "rounded-full transition-all duration-200",
                  current === index + 1 ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/30",
                )}
              />
            ))}
          </div>
          <button
            onClick={() => api?.scrollNext()}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/15 text-white/70 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default RuleCard;