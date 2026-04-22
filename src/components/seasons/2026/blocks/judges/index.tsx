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
    name: "Christy Seguritan",
    position: "UI/UX Design Associate",
    company: "Deloitte Digital",
    linkedInURL: "https://www.linkedin.com/in/christyseg/",
    imageURL:
      "/images/seasons/2026/landing/judges/headshots/christy_seguritan.jpeg",
  },
  {
    name: "Haven Park",
    position: "Product Designer",
    company: "Folio",
    linkedInURL: "https://www.linkedin.com/in/havenpark/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/haven_park.jpeg",
  },
  {
    name: "Lucy Han",
    position: "Associate Product Builder",
    company: "LinkedIn",
    linkedInURL: "https://www.linkedin.com/in/lucyxhan/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/lucy_han.jpeg",
  },
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
  {
    name: "Nicole Roberts",
    position: "Senior Product Designer",
    company: "Instacart",
    linkedInURL: "https://www.linkedin.com/in/nicolearoberts/",
    imageURL:
      "/images/seasons/2026/landing/judges/headshots/nicole_roberts.jpeg",
  },
  {
    name: "Tanvi Pisal",
    position: "UX Designer",
    company: "Apple",
    linkedInURL: "https://www.linkedin.com/in/tanvipisal/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/tanvi_pisal.jpeg",
  },
  {
    name: "Iris Li",
    position: "Product Designer",
    company: "Meta",
    linkedInURL: "https://www.linkedin.com/in/irisdesign/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/iris_li.jpeg",
  },
  {
    name: "Jenna Tanner",
    position: "Senior Product Designer",
    company: "TeamSnap",
    linkedInURL: "https://www.linkedin.com/in/jenna-tanner-101672135/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/jenna_tanner.jpeg",
  },
  {
    name: "Victor Tran",
    position: "Product Design Intern",
    company: "SAP",
    linkedInURL: "https://www.linkedin.com/in/tran-victor/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/victor_tran.jpeg",
  },
  {
    name: "John Daniel Norombaba",
    position: "Masters Student",
    company: "UCI Informatics",
    linkedInURL: "https://www.linkedin.com/in/norombabajd/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/john_daniel.jpeg",
  },
  {
    name: "Shirley Guo",
    position: "Founding UX Designer",
    company: "Suger",
    linkedInURL: "https://www.linkedin.com/in/diashirley/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/shirley_guo.jpeg",
  },
  {
    name: "Andrew Huang",
    position: "Product Designer",
    company: "Oracle",
    linkedInURL: "https://www.linkedin.com/in/andrew-huang-art/",
    imageURL: "/images/seasons/2026/landing/judges/headshots/andrew_huang.jpeg",
  },
  {
    name: "Selina Che",
    position: "Senior Digital Product Designer",
    company: "Nike",
    linkedInURL: "https://www.linkedin.com/in/selinache",
    imageURL: "/images/seasons/2026/landing/judges/headshots/selina_che.jpeg",
  },
];

const JUDGES_INITIAL_INDEX = Math.min(2, judges.length - 1);
const PLANET_COUNT = 5;
const LUCY_INDEX = Math.max(
  0,
  judges.findIndex((judge) => judge.name === "Lucy Han"),
);

function getBasePlanetNumberForCard(index: number) {
  const relativeIndex = index - LUCY_INDEX;
  const wrapped =
    (((relativeIndex * 2) % PLANET_COUNT) + PLANET_COUNT) % PLANET_COUNT;
  return wrapped + 1;
}

export default function IndexPage() {
  const [activeIndex, setActiveIndex] = useState(JUDGES_INITIAL_INDEX);
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
      startIndex: JUDGES_INITIAL_INDEX,
    }),
    [],
  );
  const planetNumbers = useMemo(() => {
    const assigned = judges.map((_, index) =>
      getBasePlanetNumberForCard(index),
    );
    if (assigned.length < 2) return assigned;

    const firstIndex = 0;
    const lastIndex = assigned.length - 1;

    // Prevent the loop seam (last -> first) from repeating the same planet.
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

  return (
    <section
      id="judges"
      ref={sectionRef}
      className="overflow-x-clip bg-(--blue) py-12 text-white"
    >
      <div className="container mx-auto flex w-full flex-col items-center gap-0 px-4">
        <h1 className="w-full text-left [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
          Judges
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
              {judges.map((judge, index) => (
                <CarouselItem
                  key={judge.name}
                  className="flex basis-full justify-center py-4 md:basis-1/3 xl:basis-1/4 xl:pl-0"
                >
                  {/* 1-up mobile; 3 md–lg; 4 on xl (1/4) — edge-to-edge like Partners; start centered on 3rd judge */}
                  <div className="origin-center scale-[0.52] md:scale-[0.62] lg:scale-[0.68] xl:scale-[0.68]">
                    <ProfileCard
                      profile={judge}
                      isInView={isInView}
                      index={index}
                      isActive={index === activeIndex}
                      planetNumber={planetNumbers[index]}
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
