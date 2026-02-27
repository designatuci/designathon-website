"use client";
import { useRef } from "react";
import { useInView } from "motion/react";

import ProfileCard from "./profile-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";

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
    <main className="min-h-screen flex items-center justify-center bg-(--blue) text-white">
      <section
        ref={sectionRef}
        className="w-full max-w-xl px-4 py-4 flex flex-col items-center gap-0"
        >
        <h1 className="text-center font-title text-3xl font-bold sm:text-4xl -mt-6 mb-2">
            Judges
        </h1>

        <Carousel opts={ { loop: true } } className="w-full -mt-16">
          <CarouselContent>
            {judges.map((judge, index) => (
              <CarouselItem
                key={judge.name}
                className="basis-full flex justify-center py-4"
              >
                <div className="scale-75 origin-center">
                    <ProfileCard
                    profile={judge}
                    isInView={isInView}
                    index={index}
                    />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        
    
        <CarouselPrevious className="size-12 rounded-full bg-white/0 backdrop-blur-md text-white-900 border-2 border-white/0 absolute left-10 top-1/2 -translate-y-1/2 hover:bg-white/50 shadow-2xl opacity-100 z-20" />
        <CarouselNext className="size-12 rounded-full bg-white/0 backdrop-blur-md text-white-900 border-2 border-white/0 absolute right-10 top-1/2 -translate-y-1/2 hover:bg-white/50 shadow-2xl opacity-100 z-20" />

        </Carousel>
      </section>
    </main>
  );
}
