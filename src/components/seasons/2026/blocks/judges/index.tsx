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
    name: "Nicole Liang",
    position: "Senior UX Designer",
    company: "Google",
    linkedInURL: "https://www.linkedin.com/in/nicoleliangmai",
    imageURL: "/images/seasons/2025/landing/judges/nicoleliangmai.jpg",
  },
  {
    name: "Michael Auld",
    position: "Product Illustrator",
    company: "Anduril",
    linkedInURL: "https://www.linkedin.com/in/michaellauld/",
    imageURL: "/images/seasons/2025/landing/judges/michaellauld.jpg",
  },
  {
    name: "Sergio Harashyn",
    position: "Co-founder, Head of Product Design",
    company: "AI2UX",
    linkedInURL: "https://www.linkedin.com/in/harashyn/",
    imageURL: "/images/seasons/2025/landing/judges/sergio-harashyn.jpg",
  },
  {
    name: "Sarina Chen",
    position: "Growth Product Designer & Manager",
    company: "MoBagel",
    linkedInURL: "https://www.linkedin.com/in/yiwen-sarina-chen/",
    imageURL: "/images/seasons/2025/landing/judges/sarina-chen.png",
  },
  {
    name: "Agnes Tran",
    position: "Senior Designer",
    company: "IBM iX",
    linkedInURL: "https://www.linkedin.com/in/agnestran/",
    imageURL: "/images/seasons/2025/landing/judges/agnes-tran.png",
  },
  {
    name: "Kyuha Jung",
    position: "PhD Student & HCI Researcher",
    company: "UCI Informatics",
    linkedInURL: "https://www.linkedin.com/in/jkyuha/",
    imageURL: "/images/seasons/2025/landing/judges/jkyuha.jpg",
  },
  {
    name: "Yuko Shimura",
    position: "Product Designer",
    company: "Centerfield",
    linkedInURL: "https://www.linkedin.com/in/yuko-shimura/",
    imageURL: "/images/seasons/2025/landing/judges/yuko-shimura.png",
  },
  {
    name: "Iris Spear",
    position: "Lead UX Designer",
    company: "Alteryx",
    linkedInURL: "https://www.linkedin.com/in/iris-spear/",
    imageURL: "/images/seasons/2025/landing/judges/iris-spear.png",
  },
  {
    name: "Miles Seiden",
    position: "Fractional Creative Director & Consultant",
    company: "Miles Seiden Creative",
    linkedInURL: "https://www.linkedin.com/in/milesseiden/",
    imageURL: "/images/seasons/2025/landing/judges/milesseiden.png",
  },
  {
    name: "Damjan Krajacic",
    position: "UX Strategist",
    company: "ActiveColor",
    linkedInURL: "https://www.linkedin.com/in/damjankrajacic/",
    imageURL: "/images/seasons/2025/landing/judges/damjankrajacic.jpeg",
  },
  {
    name: "Lawrence Ntim",
    position: "Ex-Senior Product Designer",
    company: "Dropbox",
    linkedInURL: "https://www.linkedin.com/in/lawrencentim/",
    imageURL: "/images/seasons/2025/landing/judges/lawrence.png",
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
