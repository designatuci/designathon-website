"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@components/ui/card";
import { useInView } from "motion/react";
import { useRef } from "react";

interface EventCard {
  title: string;
  className: string;
  modalContent: EventModalContent;
}

interface EventModalContent {
  title: string;
  theme: string;
  participants: string;
  entries: AwardEntry[];
}

interface AwardEntry {
  imageURL: string;
  placement: string;
  title: string;
  description: string;
}

function PastEvents() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    once: true,
  });

  return (
    <section
      id="past-events"
      className="flex justify-center overflow-x-hidden bg-(--blue) py-16"
    >
      <div
        className="relative container flex w-full flex-col gap-4 py-8 text-white"
        ref={ref}
      >
        <h2 className="font-title text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
          Past Events
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full *:overflow-visible"
        >
          <CarouselContent>
            {eventsList.map((event, index) => (
              <CarouselItem
                key={index}
                className="max-w-2xs md:max-w-xs xl:max-w-sm"
              >
                <div className="h-full">
                  <Card
                    className={cn(
                      "h-full min-h-96 justify-end border-none p-0 px-6 pr-12 pb-6 text-white lg:min-h-[500px] xl:min-h-[600px] xl:pb-8 xl:pl-8",
                      "not-motion-reduce:translate-x-8 not-motion-reduce:translate-y-16 not-motion-reduce:scale-95 not-motion-reduce:opacity-80 not-motion-reduce:transition-all not-motion-reduce:duration-700 not-motion-reduce:ease-out-quart",
                      {
                        "not-motion-reduce:translate-x-0 not-motion-reduce:translate-y-0 not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
                          isInView,
                      },
                      event.className,
                    )}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="flex p-0">
                      <span className="text-3xl font-bold lg:text-4xl lg:leading-tight">
                        {event.title}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 text-black disabled:opacity-0" />
          <CarouselNext className="right-0 text-black disabled:opacity-0" />
        </Carousel>
      </div>
    </section>
  );
}

export default PastEvents;

const eventsList: EventCard[] = [
  {
    title: "True to You 2024",
    className: "bg-gradient-to-b from-[#EB9977] to-[#DA306F]",
    modalContent: {
      title: "True to You 2024",
      theme: "Community & Inclusivity",
      participants: "300+",
      entries: [
        {
          imageURL: "https://via.placeholder.com/150",
          placement: "1st Place",
          title: "Colorful",
          description: "Created by William Han, Megan Phi, Jayden Kang, Amy La",
        },
        {
          imageURL: "https://via.placeholder.com/150",
          placement: "2nd Place",
          title: "Colorful",
          description: "Created by William Han, Megan Phi, Jayden Kang, Amy La",
        },
      ],
    },
  },
  {
    title: "Design-a-thon 2023",
    className: "bg-[#2A0F52]",
    modalContent: {
      title: "Design-a-thon 2023",
      theme: "",
      participants: "",
      entries: [],
    },
  },
  {
    title: "Design-a-thon 2022",
    className: "bg-gradient-to-b from-[#96DAC2] to-[#D8BFE8] text-black",
    modalContent: {
      title: "Design-a-thon 2023",
      theme: "",
      participants: "",
      entries: [],
    },
  },
];
