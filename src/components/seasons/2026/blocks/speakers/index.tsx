"use client";
import { useInView } from "motion/react";
import { useCallback, useMemo, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";
import { Judge } from "../judges";
import ProfileCard from "../judges/profile-card";

const speakers: Judge[] = [
  {
    name: "Aneesha Bharadwaj",
    position: "Product Designer",
    company: "Amazon",
    linkedInURL: "https://www.linkedin.com/in/aneesha-bharadwaj-59466549",
    imageURL:
      "/images/seasons/2026/landing/judges/headshots/aneesha_bharadwaj.jpeg",
  },
  {
    name: "Shirley Guo",
    position: "Founding UX Designer",
    company: "Suger",
    linkedInURL: "https://www.linkedin.com/in/diashirley/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/shirley_guo.jpeg",
  },
  {
    name: "Chris Chen",
    position: "Product Designer",
    company: "Squarespace",
    linkedInURL: "https://www.linkedin.com/in/chrischen0/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/chris_chen.jpeg",
  },
  {
    name: "Renata Amaral Morris",
    position: "Founder / CEO",
    company: "EAT Studio",
    linkedInURL: "https://www.linkedin.com/in/renataamaralmorris/",
    imageURL:
      "/images/seasons/2026/landing/judges/headshots/renata_morris.jpeg",
  },
  {
    name: "Jonathan Yu",
    position: "Senior UX Motion Designer",
    company: "Twitch",
    linkedInURL: "https://www.linkedin.com/in/jonathan-y-7061a556/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/jonathan_yu.png",
  },
  {
    name: "Jonathan Larson",
    position: "Tabi Places",
    company: "Founder",
    linkedInURL: "https://www.linkedin.com/in/jonlarsonli/",
    imageURL:
      "/images/seasons/2026/landing/judges/headshots/jonathan_larson.jpeg",
  },
];

const SPEAKERS_INITIAL_INDEX = Math.min(2, speakers.length - 1);
const PLANET_COUNT = 5;
const LUCY_INDEX = 0;

function getBasePlanetNumberForCard(index: number) {
  const relativeIndex = index - LUCY_INDEX;
  const wrapped =
    (((relativeIndex * 2) % PLANET_COUNT) + PLANET_COUNT) % PLANET_COUNT;
  return wrapped + 1;
}

export default function Speakers() {
  const [activeIndex, setActiveIndex] = useState(SPEAKERS_INITIAL_INDEX);
  const carouselApiRef = useRef<UseEmblaCarouselType[1] | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -300px 0px",
  });

  const updateActiveIndex = useCallback(() => {
    if (!carouselApiRef.current) return;
    setActiveIndex(carouselApiRef.current.selectedScrollSnap());
  }, []);

  const carouselOpts = useMemo(
    () => ({
      loop: true,
      slidesToScroll: 1,
      align: "center" as const,
      startIndex: SPEAKERS_INITIAL_INDEX,
    }),
    [],
  );

  const planetNumbers = useMemo(() => {
    const assigned = speakers.map((_, index) =>
      getBasePlanetNumberForCard(index),
    );
    if (assigned.length < 2) return assigned;

    const firstIndex = 0;
    const lastIndex = assigned.length - 1;

    if (assigned[firstIndex] === assigned[lastIndex]) {
      const previousToLast = assigned[lastIndex - 1];
      for (let candidate = 1; candidate <= PLANET_COUNT; candidate++) {
        if (
          candidate !== assigned[firstIndex] &&
          candidate !== previousToLast
        ) {
          assigned[lastIndex] = candidate;
          break;
        }
      }
    }

    return assigned;
  }, []);

  const setCarouselApi = useCallback(
    (api: UseEmblaCarouselType[1] | undefined) => {
      carouselApiRef.current = api ?? null;
      if (!api) return;
      api.off("select", updateActiveIndex);
      api.on("select", updateActiveIndex);
      updateActiveIndex();
    },
    [updateActiveIndex],
  );

  const handleCardSelect = useCallback((index: number) => {
    if (!carouselApiRef.current) return;
    carouselApiRef.current.scrollTo(index);
  }, []);

  return (
    <section
      id="speakers"
      ref={sectionRef}
      className="overflow-x-clip bg-(--blue) py-12 text-white"
    >
      <div className="container mx-auto flex w-full flex-col items-center gap-0 px-4">
        <h1 className="w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Keynote Speakers
        </h1>
      </div>

      <div className="relative mx-auto w-full max-w-[1920px] px-4 xl:px-0">
        <Carousel
          opts={carouselOpts}
          setApi={setCarouselApi}
          className="-mt-8 w-full max-w-full overflow-hidden"
        >
          <div className="relative overflow-hidden">
            <CarouselContent className="xl:-ml-0">
              {speakers.map((speaker, index) => (
                <CarouselItem
                  key={`${speaker.name}-${index}`}
                  className="flex basis-full justify-center py-4 md:basis-1/3 xl:basis-1/4 xl:pl-0"
                >
                  <div className="origin-center scale-[0.52] md:scale-[0.62] lg:scale-[0.68] xl:scale-[0.68]">
                    <ProfileCard
                      profile={speaker}
                      isInView={isInView}
                      index={index}
                      isActive={index === activeIndex}
                      planetNumber={planetNumbers[index]}
                      onSelect={() => handleCardSelect(index)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          <CarouselPrevious className="text-white-900 absolute top-1/2 left-10 z-20 size-12 -translate-y-1/2 rounded-full border-2 border-white/0 bg-white/0 opacity-100 shadow-2xl backdrop-blur-md hover:bg-white/50" />
          <CarouselNext className="text-white-900 absolute top-1/2 right-10 z-20 size-12 -translate-y-1/2 rounded-full border-2 border-white/0 bg-white/0 opacity-100 shadow-2xl backdrop-blur-md hover:bg-white/50" />
        </Carousel>
      </div>
    </section>
  );
}
