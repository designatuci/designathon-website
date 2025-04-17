"use client";

import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";
import { useInView } from "motion/react";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";

function Rules() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
    <section
      id="rules"
      ref={ref}
      className="noise flex justify-center bg-(--blue) py-12"
    >
      <div className="container text-white">
        <h2 className="font-title text-3xl leading-loose font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
          Rules
        </h2>
        <p className="mb-8 text-lg font-medium lg:text-2xl">
          Here are the guidelines for the 2025 Design-a-thon!
        </p>
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="relative rounded-lg bg-black/20 lg:col-span-8 lg:rounded-3xl">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full pb-6 lg:pb-8"
              setApi={setApi}
            >
              <CarouselContent className="m-0">
                {rules.map((rule, index) => (
                  <CarouselItem
                    key={index}
                    className="h-full basis-full px-10 py-8 lg:py-12 3xl:py-20"
                  >
                    <div className="flex h-full w-full flex-col items-center gap-2 select-none lg:gap-8">
                      <span className="text-sm font-medium tracking-wide lg:text-base 3xl:text-lg">
                        RULE NUMBER ({index + 1} / {rules.length})
                      </span>
                      <div className="max-w-sm space-y-2 text-lg sm:text-xl lg:max-w-lg lg:space-y-3 lg:text-2xl 3xl:space-y-5 3xl:text-4xl">
                        {rule}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="top-8 left-2 border-0 bg-transparent text-white hover:bg-transparent hover:text-white disabled:opacity-50 lg:top-10 lg:left-4 [&_svg]:!size-6 lg:[&_svg]:!size-8" />
              <CarouselNext className="top-8 right-2 border-0 bg-transparent text-white hover:bg-transparent hover:text-white disabled:opacity-50 lg:top-10 lg:right-4 [&_svg]:!size-6 lg:[&_svg]:!size-8" />
              <div className="hidden items-center justify-center sm:flex">
                {dots.map((_, index) => (
                  <Fragment key={index}>
                    <button
                      title={`Rule ${index + 1}`}
                      className={cn(
                        "size-3 rounded-full bg-[#ABC5EC] transition-colors duration-200 lg:size-4",
                        {
                          "bg-white": current === index + 1,
                        },
                      )}
                      onClick={() => api?.scrollTo(index)}
                    />
                    {index !== dots.length - 1 && (
                      <hr className="w-8 bg-white/50" />
                    )}
                  </Fragment>
                ))}
              </div>
            </Carousel>
          </div>
          <div className="relative hidden overflow-hidden rounded-3xl lg:col-span-4 lg:block">
            <DOTImage
              alt="Rules Graphic"
              src="/images/seasons/2025/landing/rules/rules.jpg"
              sizes="(min-width: 0px) 0vw; (min-width: 1024px) 33vw"
              className={cn(
                "object-cover object-top",
                "transition-transform duration-[2s] ease-out-quart not-motion-reduce:-translate-y-4 not-motion-reduce:scale-125",
                {
                  "not-motion-reduce:translate-y-0 not-motion-reduce:scale-100":
                    isInView,
                },
              )}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rules;

function RuleItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative ml-6 bg-no-repeat before:absolute before:top-2 before:-left-4 before:block before:size-3 before:bg-[url(/images/seasons/2025/landing/star.svg)] before:bg-contain before:content-[''] lg:ml-8 lg:before:-left-8 lg:before:size-6">
      {children}
    </li>
  );
}

function RuleList({ children }: { children: React.ReactNode }) {
  return <ul className="list-outside space-y-1 lg:space-y-2">{children}</ul>;
}

const rules: React.ReactNode[] = [
  <>
    <p>All members of your team must be</p>
    <RuleList>
      <RuleItem>
        a current <strong>undergraduate</strong> or graduate student
      </RuleItem>
      <RuleItem>with an associated institutional (.edu) email</RuleItem>
    </RuleList>
  </>,
  <>
    <p>Teams must not exceed 4 people total.</p>
  </>,
  <>
    <p>
      Each team may only submit one (1) submission which will be submitted on
      behalf of all other contributors.
    </p>
  </>,
  <>
    <p>
      All work submitted to Beyond Our Horizons must be original work. Any
      submissions with plagiarized work will be disqualified.
    </p>
  </>,
  <>
    <p>
      You may not submit work previously designed before Beyond Our Horizons.
      All designs must be made between the dates of April 18 - April 20.
    </p>
  </>,
  <>
    <p>Late submissions will not be accepted.</p>
  </>,
  <>
    <p>
      If any adjustments are made after April 20 2025 at the submission
      deadline, your team&apos;s submission will not count towards judging.
    </p>
  </>,
  <>
    <p>
      Teams must be compromised of entirely online or entirely in-person
      participants.
    </p>
  </>,
];
