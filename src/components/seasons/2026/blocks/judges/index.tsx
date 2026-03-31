"use client";
import { useInView } from "motion/react";
import { useCallback, useRef, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { UseEmblaCarouselType } from "embla-carousel-react";
import ProfileCard from "./profile-card";

export interface Judge {
  name: string;
  position: string;
  company: string;
  linkedInURL: string;
  imageURL: string;
}

export interface Planet {
  id: number;
  imageURL: string;
  name: string;
}

const judges: Judge[] = [
  {
    name: "Justin Nguyen",
    position: "Senior Product Designer",
    company: "Ingram Micro",
    linkedInURL: "https://www.linkedin.com/in/justin-hn/",
    imageURL:
      "/images/seasons/2026/landing/judges/headshots/justin_nguyen.jpeg",
  },
  {
    name: "Jamie Lee",
    position: "PhD Student",
    company: "UCI Informatics",
    linkedInURL: "https://www.linkedin.com/in/jamielee3136/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/jamie_lee.jpeg",
  },
  {
    name: "Haron Yam",
    position: "Product Designer ",
    company: "eBay",
    linkedInURL: "https://www.linkedin.com/in/haronyam/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/haron_yam.jpeg",
  },
  {
    name: "Nataliia Dykun",
    position: "UX UI Designer II",
    company: "CoStar",
    linkedInURL: "https://www.linkedin.com/in/nataliia-dykun/",
    imageURL:
      "/images/seasons/2026/landing/judges/headshots/nataliia_dykun.jpeg",
  },
  {
    name: "Ryan Bell",
    position: "Senior Product Designer, Studio Management",
    company: "Netflix",
    linkedInURL: "https://www.linkedin.com/in/rabellux/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/ryan_bell.png",
  },
  {
    name: "Josephine Lo",
    position: "Product Designer",
    company: "LA Fitness",
    linkedInURL: "https://www.linkedin.com/in/josephinelo1/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/josephine_lo.jpeg",
  },
  {
    name: "Jonathan Yu",
    position: "Senior UX Motion Designer",
    company: "Twitch",
    linkedInURL: "https://www.linkedin.com/in/jonathan-y-7061a556/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/jonathan_yu.png",
  },
  {
    name: "Ruijingya Tang",
    position: "Product Designer",
    company: "Chartmetric",
    linkedInURL: "https://www.linkedin.com/in/ruijingyatang/",
    imageURL:
      "/images/seasons/2026/landing/judges/headshots/ruijingya_tang.jpeg",
  },
  {
    name: "Nikki Robyn Apostol",
    position: "Product Designer",
    company: "eBay",
    linkedInURL: "https://www.linkedin.com/in/nikkirobyn/",
    imageURL:
      "/images/seasons/2026/landing/judges/headshots/nikki_apostol.jpeg",
  },
];

export default function IndexPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselApiRef = useRef<UseEmblaCarouselType[1]>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -300px 0px",
  });
  const updateActiveIndex = useCallback(() => {
    if (!carouselApiRef.current) return;
    setActiveIndex(carouselApiRef.current.selectedScrollSnap());
  }, []);

  return (
    <section
      id="judges"
      ref={sectionRef}
      className="flex min-h-screen items-center justify-center overflow-x-clip bg-(--blue) px-4 py-4 text-white"
    >
      <div className="container flex w-full flex-col items-center gap-0 overflow-x-hidden md:overflow-x-visible">
        <h1 className="w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Judges
        </h1>
        <Carousel
          opts={{
            loop: true,
            slidesToScroll: 1,
            align: "center",
            containScroll: "trimSnaps",
          }}
          setApi={(api) => {
            carouselApiRef.current = api;
            api?.on("select", updateActiveIndex);
            updateActiveIndex();
          }}
          className="-mt-8 w-full max-w-[100vw] overflow-visible"
        >
          <div className="relative overflow-visible">
            <CarouselContent allowOverflow className="xl:-ml-120">
              {judges.map((judge, index) => (
                <CarouselItem
                  key={judge.name}
                  className="flex basis-full justify-center py-4 md:basis-1/3 xl:basis-1/5 xl:pl-120"
                >
                  {/* Scale to slide width: 3 planets (md–lg), 5 on xl+; mobile stays 1-up */}
                  <div className="origin-center scale-[0.52] md:scale-[0.62] lg:scale-[0.68] xl:scale-90">
                    <ProfileCard
                      profile={judge}
                      isInView={isInView}
                      index={index}
                      isActive={index === activeIndex}
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
