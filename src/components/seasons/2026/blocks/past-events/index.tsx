"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";
import { eventsList, PlanetConfig } from "./events";

function Planet({ config }: { config: PlanetConfig }) {
  const gradientCss = config.modalGradient
    ? `linear-gradient(to bottom, ${config.modalGradient.fromColor} ${config.modalGradient.fromStopPct}%, ${config.modalGradient.toColor} ${config.modalGradient.toStopPct}%)`
    : "linear-gradient(to bottom, #FFEFF8 19%, #C1BAF0 86%)";

  const is2021 = config.modalContent.title === "Design-a-thon 2021";

  return (
    <Dialog>
      <DialogTrigger
        className={cn(
          "group absolute rounded-full transition-transform duration-300 hover:scale-105 focus:outline-none lg:-translate-y-1/2",
          config.position,
          config.positionTablet,
          config.positionDesktop,
          config.sizeMobile,
          config.sizeTablet,
          config.sizeDesktop,
        )}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <DOTImage
            fill
            src={config.src}
            alt={config.alt}
            className="object-cover"
            sizes="(max-width: 768px) 40vw, 30vw"
          />

          <div className="relative flex h-full w-full items-center justify-center p-4">
            <span
              className={cn(
                "text-center font-mono font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]",
                config.className,
              )}
            >
              {config.title}
            </span>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent
        className="max-h-[90svh] overflow-y-auto border-white/10 bg-transparent [font-family:var(--font-inria-sans)]"
        style={{
          backgroundColor: "transparent",
          backgroundImage: gradientCss,
        }}
      >
        <DialogHeader className="items-start text-start">
          <DialogTitle
            className={cn(
              "text-3xl font-semibold sm:text-4xl",
              is2021 ? "text-white" : "text-[#003847]",
            )}
          >
            {config.modalContent.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Information about {config.modalContent.title}
          </DialogDescription>
        </DialogHeader>

        <div className="text-lg">
          <div className="flex gap-2">
            <h3
              className={cn(
                "font-semibold",
                is2021 ? "text-white" : "text-[#003847]",
              )}
            >
              Theme
            </h3>
            <p className={cn(is2021 ? "text-white/90" : undefined)}>
              {config.modalContent.theme}
            </p>
          </div>

          <div className="flex gap-2">
            <h3
              className={cn(
                "font-semibold",
                is2021 ? "text-white" : "text-[#003847]",
              )}
            >
              Participants
            </h3>
            <p className={cn(is2021 ? "text-white/90" : undefined)}>
              {config.modalContent.participants}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2
            className={cn(
              "text-3xl font-semibold",
              is2021 ? "text-white" : "text-[#003847]",
            )}
          >
            Awarded Entries
          </h2>

          <div className="space-y-4">
            {config.modalContent.entries.map((entry, index) => (
              <div
                key={`${entry.title}-${index}`}
                className="flex flex-col items-center rounded-xl border border-zinc-300 bg-white p-4"
              >
                <h3 className="mb-2 text-lg font-semibold text-[#003847]">
                  {entry.placement}
                </h3>

                <div className="relative mb-4 h-40 w-full rounded-lg border border-zinc-200">
                  <DOTImage
                    fill
                    src={entry.imageURL}
                    alt={entry.title}
                    className="rounded-md object-cover"
                    sizes="50vw"
                  />
                </div>

                <div className="space-y-2 text-center">
                  <h4 className="text-xl font-semibold">{entry.title}</h4>
                  <p className="text-sm leading-tight">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function PastEvents() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    amount: 0.15,
    once: true,
  });

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const planetVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="past-events" className="relative mt-8 overflow-x-clip py-4">
      <div className="relative container mx-auto min-h-full">
        <h1 className="[font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl lg:mb-36 xl:mb-48 xl:text-[7rem]">
          Past Events
        </h1>

        <svg className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-x-clip sm:block">
          {/* tablet */}
          <ellipse
            className="hidden md:block xl:hidden"
            cx="30%"
            cy="45%"
            rx="62%"
            ry="22%"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            transform="rotate(-40, 69%, 55%)"
          />

          {/* desktop */}
          <ellipse
            className="hidden xl:block"
            cx="38%"
            cy="54%"
            rx="54%"
            ry="30%"
            fill="none"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            transform="rotate(-40, 69%, 55%)"
          />
        </svg>

        <motion.div
          ref={ref}
          className="relative min-h-[900px] w-full md:min-h-[1000px] lg:min-h-[900px] xl:min-h-[1100px]"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {eventsList.map((planet) => (
            <motion.div key={planet.title} variants={planetVariants}>
              <Planet config={planet} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
