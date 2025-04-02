"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
      className="noise flex justify-center overflow-x-hidden bg-(--blue) py-16"
    >
      <div
        className="relative container flex w-full flex-col gap-8 py-8 text-white"
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
                <Dialog>
                  <DialogTrigger>
                    <div className="h-full text-start">
                      <Card
                        className={cn(
                          "relative h-full min-h-96 justify-end overflow-hidden rounded-xl border-none bg-cover p-0 px-6 pr-12 pb-6 text-white lg:min-h-[500px] xl:min-h-[600px] xl:pb-8 xl:pl-8",
                          "not-motion-reduce:translate-x-8 not-motion-reduce:translate-y-16 not-motion-reduce:scale-95 not-motion-reduce:opacity-80 not-motion-reduce:transition-all not-motion-reduce:duration-700 not-motion-reduce:ease-out-quart",
                          {
                            "not-motion-reduce:translate-x-0 not-motion-reduce:translate-y-0 not-motion-reduce:scale-100 not-motion-reduce:opacity-100":
                              isInView,
                          },
                          event.className,
                        )}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/50" />
                        <CardContent className="relative flex p-0">
                          <span className="text-3xl font-bold lg:text-4xl lg:leading-tight">
                            {event.title}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90svh] overflow-y-auto">
                    <DialogHeader className="items-start text-start">
                      <DialogTitle className="text-3xl font-semibold text-(--blue) sm:text-4xl">
                        {event.modalContent.title}
                      </DialogTitle>
                      <DialogDescription className="sr-only">
                        Information about {event.modalContent.title}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="text-lg">
                      <div className="flex gap-2">
                        <h3 className="font-semibold text-(--pink)">Theme</h3>
                        <p>{event.modalContent.theme}</p>
                      </div>
                      <div className="flex gap-2">
                        <h3 className="font-semibold text-(--pink)">
                          Participants
                        </h3>
                        <p>{event.modalContent.participants}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-semibold text-(--blue)">
                        Awarded Entries
                      </h2>
                      <div className="space-y-4">
                        {event.modalContent.entries.map((entry, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center rounded-xl border-[1px] border-zinc-300 p-4"
                          >
                            <h3 className="mb-2 text-lg font-semibold text-(--pink)">
                              {entry.placement}
                            </h3>
                            <div className="relative mb-4 h-40 w-full rounded-lg border-[1px] border-zinc-200">
                              <DOTImage
                                fill
                                src={entry.imageURL}
                                alt={entry.title}
                                className="rounded-md object-cover"
                              />
                            </div>
                            <div className="space-y-2 text-center">
                              <h4 className="text-xl font-semibold text-(--blue)">
                                {entry.title}
                              </h4>
                              <p className="text-sm leading-tight">
                                {entry.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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
    className:
      "bg-[url('https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743632394/winners/Artboard_1.png')]",
    modalContent: {
      title: "True to You 2024",
      theme: "Authenticity & Creativity",
      participants: "200+",
      entries: [
        {
          imageURL:
            "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743406526/winners/daily_doodle.png",
          placement: "1st Place",
          title: "Daily Doodle",
          description:
            "Created by Lazim Jarif, Sia Harisingani, Lucy Yang, and Jade Nguyen",
        },
        {
          imageURL:
            "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743406526/winners/flair.png",
          placement: "2nd Place",
          title: "Flair",
          description:
            "Created by Kaiwen Tang, Alexis Chew, and Richie Sarinana",
        },
        {
          imageURL:
            "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743406526/winners/quilted.png",
          placement: "3rd Place",
          title: "Quilted",
          description:
            "Created by Sun Graham, Jocelyn Le, Ethan Zhao, and Sasha Shor",
        },
      ],
    },
  },
  {
    title: "Design-a-thon 2023",
    className:
      "bg-[url('https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743632395/winners/Artboard_2.png')]",
    modalContent: {
      title: "Design-a-thon 2023",
      theme: "Community & Inclusivity",
      participants: "300+",
      entries: [
        {
          imageURL:
            "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743631938/winners/colorful.png",
          placement: "1st Place",
          title: "Colorful",
          description: "Created by William Han, Megan Phi, Jayden Kang, Amy La",
        },
        {
          imageURL:
            "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743631937/winners/honeycomb.png",
          placement: "2nd Place",
          title: "Honeycomb",
          description: "Created by Mandy Wu, Lea Hidaka",
        },
      ],
    },
  },
  {
    title: "Design-a-thon 2022",
    className:
      "bg-[url('https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743632395/winners/Artboard_3.png')]",
    modalContent: {
      title: "Design-a-thon 2022",
      theme: "Impact",
      participants: "100+",
      entries: [
        {
          imageURL:
            "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743631937/winners/ratatouille.jpg",
          placement: "1st Place",
          title: "Ratatouille",
          description: "Created by Stephanie Chang, Michelle Kou",
        },
        {
          imageURL:
            "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743631937/winners/carbonology.jpg",
          placement: "2nd Place",
          title: "Carbonology",
          description: "Created by Mandy Wu, Lea Hidaka",
        },
      ],
    },
  },
  {
    title: "Design-a-thon 2021",
    className:
      "bg-[url('https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743632395/winners/Artboard_4.png')]",
    modalContent: {
      title: "Design-a-thon 2021",
      theme: "Mindfulness & Productivity",
      participants: "100+",
      entries: [
        {
          imageURL:
            "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743631936/winners/img-motivator.svg",
          placement: "Best Overall",
          title: "Motivator",
          description: "Created by Allison Yick, Jonathan Lum, Stephanie Chang",
        },
        {
          imageURL:
            "https://res.cloudinary.com/ucidesignathon/image/upload/f_auto,q_auto/v1743631937/winners/orin.png",
          placement: "Honorable Mention",
          title: "Orin",
          description: "Created by Isha Godara",
        },
      ],
    },
  },
];
