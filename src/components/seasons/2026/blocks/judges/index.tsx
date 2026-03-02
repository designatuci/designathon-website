"use client";
import { useInView } from "motion/react";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import ProfileCard from "./profile-card";

export interface Judge {
  name: string;
  position: string;
  linkedInURL: string;
  imageURL: string;
}

const judges: Judge[] = [
  {
    name: "Nicole Liang",
    position: "Senior UX Designer at Google",
    linkedInURL: "https://www.linkedin.com/in/nicoleliangmai",
    imageURL: "/images/seasons/2025/landing/judges/nicoleliangmai.jpg",
  },
  {
    name: "Michael Auld",
    position: "Product Illustrator at Anduril",
    linkedInURL: "https://www.linkedin.com/in/michaellauld/",
    imageURL: "/images/seasons/2025/landing/judges/michaellauld.jpg",
  },
  {
    name: "Sergio Harashyn",
    position: "Co-founder, Head of Product Design at AI2UX",
    linkedInURL: "https://www.linkedin.com/in/harashyn/",
    imageURL: "/images/seasons/2025/landing/judges/sergio-harashyn.jpg",
  },
  {
    name: "Sarina Chen",
    position: "Growth Product Designer & Manager at MoBagel",
    linkedInURL: "https://www.linkedin.com/in/yiwen-sarina-chen/",
    imageURL: "/images/seasons/2025/landing/judges/sarina-chen.png",
  },
  {
    name: "Agnes Tran",
    position: "Senior Designer at IBM iX",
    linkedInURL: "https://www.linkedin.com/in/agnestran/",
    imageURL: "/images/seasons/2025/landing/judges/agnes-tran.png",
  },
  {
    name: "Kyuha Jung",
    position: "PhD Student & HCI Researcher at UCI Informatics",
    linkedInURL: "https://www.linkedin.com/in/jkyuha/",
    imageURL: "/images/seasons/2025/landing/judges/jkyuha.jpg",
  },
  {
    name: "Yuko Shimura",
    position: "Product Designer at Centerfield",
    linkedInURL: "https://www.linkedin.com/in/yuko-shimura/",
    imageURL: "/images/seasons/2025/landing/judges/yuko-shimura.png",
  },
  {
    name: "Iris Spear",
    position: "Lead UX Designer at Alteryx",
    linkedInURL: "https://www.linkedin.com/in/iris-spear/",
    imageURL: "/images/seasons/2025/landing/judges/iris-spear.png",
  },
  {
    name: "Miles Seiden",
    position:
      "Fractional Creative Director & Consultant at Miles Seiden Creative",
    linkedInURL: "https://www.linkedin.com/in/milesseiden/",
    imageURL: "/images/seasons/2025/landing/judges/milesseiden.png",
  },
  {
    name: "Damjan Krajacic",
    position: "UX Strategist at ActiveColor",
    linkedInURL: "https://www.linkedin.com/in/damjankrajacic/",
    imageURL: "/images/seasons/2025/landing/judges/damjankrajacic.jpeg",
  },
  {
    name: "Lawrence Ntim",
    position: "Ex-Senior Product Designer at Dropbox",
    linkedInURL: "https://www.linkedin.com/in/lawrencentim/",
    imageURL: "/images/seasons/2025/landing/judges/lawrence.png",
  },
];

export default function IndexPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -300px 0px",
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-(--blue) text-white">
      <section
        ref={sectionRef}
        className="flex w-full max-w-xl flex-col items-center gap-0 px-4 py-4"
      >
        <h1 className="-mt-6 mb-2 text-center font-title text-3xl font-bold sm:text-4xl">
          Judges
        </h1>

        <Carousel opts={{ loop: true }} className="-mt-16 w-full">
          <CarouselContent>
            {judges.map((judge, index) => (
              <CarouselItem
                key={judge.name}
                className="flex basis-full justify-center py-4"
              >
                <div className="origin-center scale-75">
                  <ProfileCard
                    profile={judge}
                    isInView={isInView}
                    index={index}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="text-white-900 absolute top-1/2 left-10 z-20 size-12 -translate-y-1/2 rounded-full border-2 border-white/0 bg-white/0 opacity-100 shadow-2xl backdrop-blur-md hover:bg-white/50" />
          <CarouselNext className="text-white-900 absolute top-1/2 right-10 z-20 size-12 -translate-y-1/2 rounded-full border-2 border-white/0 bg-white/0 opacity-100 shadow-2xl backdrop-blur-md hover:bg-white/50" />
        </Carousel>
      </section>
    </main>
  );
}
