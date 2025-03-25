import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@components/ui/card";

export default function Prizes() {
  return (
    <section className="noise flex justify-center bg-(--blue)">
      <div className="container text-white">
        <h2 className="font-title text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
          Prizes
        </h2>
        <div
          className="relative grid grid-cols-12 gap-2"
          data-status="incomplete"
        >
          <Card
            className={cn(
              "col-span-12 flex flex-col items-center justify-center gap-2 border-0 bg-(--pink) text-[#743C4D]",
              "lg:order-2 lg:col-span-6 lg:py-12",
            )}
          >
            <CardHeader className="text-center">
              <h3 className="text-5xl font-extrabold lg:text-7xl">1st Place</h3>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap justify-center gap-2 text-xs leading-[1] font-extrabold">
                <li>2ND GEN AIRPODS</li>
                <li>1:1 MENTORSHIP</li>
                <li>FEATURED INSTAGRAM POST</li>
              </ul>
            </CardContent>
          </Card>
          <Card
            className={cn(
              "col-span-12 flex flex-col items-center justify-center gap-2 border-0 bg-(--tan) text-black",
              "lg:order-1 lg:col-span-3",
            )}
          >
            <CardHeader className="text-center">
              <h3 className="text-4xl font-extrabold">2nd Place</h3>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap justify-center gap-2 text-xs leading-[1] font-extrabold">
                <li>WIRELESS KEYBOARD</li>
                <li>1:1 MENTORSHIP</li>
                <li>FEATURED INSTAGRAM POST</li>
              </ul>
            </CardContent>
          </Card>
          <Card
            className={cn(
              "col-span-12 flex flex-col items-center justify-center gap-2 border-0 bg-(--tan) text-black",
              "lg:order-3 lg:col-span-3",
            )}
          >
            <CardHeader className="text-center">
              <h3 className="text-4xl font-extrabold">3rd Place</h3>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap justify-center gap-2 text-xs leading-[1] font-extrabold">
                <li>LIGHT UP CAT LAMP</li>
                <li>1:1 MENTORSHIP</li>
                <li>FEATURED INSTAGRAM POST</li>
              </ul>
            </CardContent>
          </Card>
          <Card
            className={cn(
              "col-span-12 flex flex-col items-center gap-2 border-0 bg-(--tan) text-black",
              "lg:order-4 lg:col-span-6",
            )}
          >
            <CardHeader className="text-center">
              <h3 className="text-4xl font-extrabold">People&apos;s Choice</h3>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap justify-center gap-2 text-xs leading-[1] font-extrabold">
                <li>LEGO SETS</li>
                <li>PIXEL PERF MERCH</li>
                <li>DESIGN @UCI STICKERS</li>
              </ul>
            </CardContent>
          </Card>
          <Card
            className={cn(
              "col-span-12 flex flex-col items-center gap-2 border-0 bg-(--tan) text-black",
              "lg:order-5 lg:col-span-6",
            )}
          >
            <CardHeader className="text-center">
              <h3 className="text-4xl font-extrabold">Honorable Mentions</h3>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap justify-center gap-2 text-xs leading-[1] font-extrabold">
                <li>LEGO SETS</li>
                <li>PIXEL PERF MERCH</li>
                <li>DESIGN @UCI STICKERS</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
