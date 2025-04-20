import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  april18,
  april19,
  april20,
  ItineraryItem,
} from "@components/seasons/2025/blocks/itinerary/itinerary-dates";
import { ArrowRight, Video } from "lucide-react";
import Link from "next/link";
import { ComponentProps, Fragment } from "react";

function Itinerary() {
  return (
    <section
      id="itinerary"
      className="noise flex justify-center overflow-x-hidden bg-(--blue) py-16"
    >
      <div className="relative container flex w-full flex-col gap-8 py-8 text-white">
        <h2 className="font-title text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
          Itinerary
        </h2>
        <Tabs
          defaultValue="sun"
          className="mx-auto max-w-[400px] gap-8 md:max-w-none"
        >
          <TabsList className="h-12 !divide-x-2 !divide-(--blue) bg-white/50 p-0">
            <ItineraryTabTrigger value="fri">FRI</ItineraryTabTrigger>
            <ItineraryTabTrigger value="sat">SAT</ItineraryTabTrigger>
            <ItineraryTabTrigger value="sun">SUN</ItineraryTabTrigger>
          </TabsList>
          <TabsContent value="fri">
            <ItineraryContent
              items={april18}
              title="Friday - April 18th, 2025"
            />
          </TabsContent>
          <TabsContent value="sat">
            <ItineraryContent
              items={april19}
              title="Saturday - April 19th, 2025"
            />
          </TabsContent>
          <TabsContent value="sun">
            <ItineraryContent
              items={april20}
              title="Sunday - April 20th, 2025"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Itinerary;

function ItineraryTabTrigger({
  children,
  ...props
}: ComponentProps<typeof TabsTrigger>) {
  return (
    <TabsTrigger
      className={cn(
        "h-full rounded-none rounded-r-none border-0 px-8 text-lg font-semibold !text-(--blue) transition-none first:rounded-l-md last:rounded-r-md data-[state=active]:!bg-white/80 data-[state=active]:shadow-none",
      )}
      {...props}
    >
      {children}
    </TabsTrigger>
  );
}

type ItineraryContentProps = {
  items: ItineraryItem[];
  title: string;
};

function ItineraryContent({ items, title }: ItineraryContentProps) {
  return (
    <div className="flex flex-col gap-4 font-bold">
      <div>
        <p className="text-sm font-normal text-(--peach) italic lg:text-base">
          All times are in PST.
        </p>
        <h3>
          <span className="text-xl font-bold sm:text-2xl lg:text-4xl">
            {title}
          </span>
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <Fragment key={`${title}-${index}`}>
            {item.type === "time-mark" && (
              <>
                <div className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-(--pink) to-(--tan) py-4 text-(--blue) sm:py-6 sm:text-2xl">
                  <span>{item.time}</span>
                  <span>|</span>
                  <span>{item.title}</span>
                </div>
                <div>
                  {item.note && (
                    <span className="mx-auto block text-center font-normal italic">
                      Note: {item.note}
                    </span>
                  )}
                </div>
              </>
            )}
            {item.type === "event" && (
              <div
                className={cn(
                  "flex flex-col items-stretch justify-center gap-4",
                  "md:grid md:grid-cols-2 md:gap-8",
                )}
              >
                <div
                  className={cn(
                    "flex flex-col justify-center gap-1 rounded-xl bg-gradient-to-l from-[#A6CDF6] to-[#FFFCED] p-4 text-(--blue) sm:p-8",
                    { "from-violet-300": item.extras?.workshop },
                  )}
                >
                  <span className="text-xl leading-[1.1] font-bold sm:max-w-[350px] sm:text-3xl md:mb-2 lg:max-w-none lg:pr-4 lg:text-4xl">
                    {item.content.title}
                  </span>
                  <span className="text-sm font-medium sm:text-base">
                    {item.content.location}
                  </span>
                  {item.extras?.zoomURL && (
                    <Link
                      href={item.extras.zoomURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative mt-1 w-fit overflow-hidden rounded-md border-[1px] border-(--blue) bg-(--tan) px-3 py-1 font-medium transition-transform duration-200 ease-out-quart hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Video className="inline-block size-4" />
                        Zoom Link
                      </span>
                    </Link>
                  )}
                  <span className="mt-2 flex items-center gap-1 sm:text-lg">
                    {item.content.timeStart}{" "}
                    <ArrowRight className="size-4" strokeWidth={3} />{" "}
                    {item.content.timeEnd}
                  </span>
                </div>
                <div className="space-y-2 text-sm font-normal sm:text-base md:flex md:flex-col md:justify-center md:text-lg">
                  {item.description}
                </div>
              </div>
            )}
            {index !== items.length - 1 && (
              <hr className="rounded-full border-2 border-(--sky)/20" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
