import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { useInView } from "motion/react";
import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type RuleItem = {
  rule: React.ReactNode;
};

const rules: RuleItem[] = [
  {
    rule: (
      <>
        All members of the team must be current <strong>undergraduate</strong>{" "}
        or graduate students with an associated institutional (.edu) email.
      </>
    ),
  },
  {
    rule: (
      <>
        Teams must <strong>not exceed 4 people</strong> total.
      </>
    ),
  },
  {
    rule: (
      <>
        Each team may <strong>only submit one submission</strong>, which will be
        submitted on behalf of all contributors.
      </>
    ),
  },
  {
    rule: (
      <>
        All work submitted to Lost &amp; Found must be original work.{" "}
        <strong>
          Any submissions with plagiarized work will be disqualified.
        </strong>
      </>
    ),
  },
  {
    rule: (
      <>
        You may not submit work previously designed before Lost &amp; Found.{" "}
        <strong>All designs must be made between April 24 – April 26.</strong>
      </>
    ),
  },
  {
    rule: (
      <>
        Late submissions will <strong>not be accepted.</strong>
      </>
    ),
  },
  {
    rule: (
      <>
        If any adjustments are made after April 26, 2026 at the submission
        deadline, your team’s submission will not count towards judging.
      </>
    ),
  },
  {
    rule: (
      <>
        Teams must be comprised of entirely online or entirely in-person
        participants.
      </>
    ),
  },
];

export default function Rules() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const dots = useMemo(
    () => Array.from({ length: rules.length }).fill(null),
    [],
  );

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -300px 0px",
  });

  return (
    <section id="rules" className="flex justify-center px-4 py-4">
      <div className="container">
        <h2 className="[font-family:var(--font-luxurious-script)] text-6xl leading-loose font-bold text-white [text-shadow:0_0_10px_rgba(255,255,255,0.5)] md:text-7xl">
          Rules
        </h2>
        <div className="relative mx-auto w-full max-w-5xl sm:[aspect-ratio:1040/540]">
          <Image
            src="/images/seasons/2026/landing/rules/frame.svg"
            alt="rules-frame"
            className="inset-0 hidden h-full w-full object-contain object-center sm:absolute sm:block"
            aria-hidden
          />
          <div
            ref={ref}
            className={cn(
              "flex flex-col transition-all duration-700 sm:absolute sm:inset-x-[8%] sm:inset-y-[14%] lg:inset-x-[10%] lg:inset-y-[14%] xl:inset-x-[10%] xl:inset-y-[18%]",
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0",
            )}
          >
            <Card className="flex-1 flex-col rounded-2xl border border-zinc-200/25 bg-white/5 sm:flex sm:min-h-0">
              <CardHeader className="flex flex-col items-center justify-center">
                <CardTitle className="pt-4 font-bold tracking-wide text-white sm:pt-10 sm:text-xl md:pt-3 lg:text-2xl 3xl:text-4xl">
                  Rule 0{current} / 0{rules.length}
                </CardTitle>
                <hr className="mt-6 h-px w-full max-w-lg border-0 bg-white/35" />
              </CardHeader>
              <CardContent className="flex flex-col sm:min-h-0 sm:flex-1">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="mx-auto flex h-full w-full max-w-2xl px-0 sm:px-10 [&>[data-slot=carousel-content]]:min-h-0 [&>[data-slot=carousel-content]]:flex-1"
                  setApi={setApi}
                >
                  <CarouselContent className="m-0 h-full">
                    {rules.map((rule, index) => (
                      <CarouselItem
                        key={index}
                        className="h-full basis-full px-5 sm:px-10 sm:py-1 lg:py-12 3xl:py-20"
                      >
                        <div className="flex h-full items-center justify-center gap-2 select-none lg:gap-8">
                          <div className="text-md max-w-md space-y-2 text-center font-primary text-white lg:max-w-xl lg:space-y-3 lg:text-2xl 3xl:space-y-5 3xl:text-4xl [&_strong]:font-bold">
                            {rule.rule}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="top-1/2 left-2 size-8 border-0 bg-transparent text-white hover:bg-transparent hover:text-[#365A89] [&_svg]:size-12" />
                  <CarouselNext className="top-1/2 right-2 size-8 border-0 bg-transparent text-white hover:bg-transparent hover:text-[#365A89] [&_svg]:size-12" />
                </Carousel>
              </CardContent>
              <CardFooter className="hidden items-center justify-center pb-2 md:flex md:pb-4 lg:pb-6">
                {dots.map((_, index) => (
                  <Fragment key={index}>
                    <button
                      title={`Rule ${index + 1}`}
                      className={cn(
                        "size-4 rounded-full border border-white/45 bg-[#96BAC9]/30 transition-colors duration-200 lg:size-6",
                        {
                          "border-white bg-[#365A89] shadow-[0_0_12px_rgba(255,255,255,0.9)]":
                            current === index + 1,
                        },
                      )}
                      onClick={() => api?.scrollTo(index)}
                    />
                    {index !== dots.length - 1 && (
                      <hr className="h-px w-10 bg-white/35" />
                    )}
                  </Fragment>
                ))}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
