import { Button } from "@components/ui/button";
import Link from "next/link";

function Stats() {
  return (
    <section className="mask-bottom relative z-10 flex w-full flex-col items-center justify-center gap-8 bg-gradient-to-b from-(--tan) to-white px-4 py-8 sm:pt-16 lg:pt-28">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatsCard stats="189" label="projects" />
        <StatsCard stats="1,100+" label="attendees" />
        <StatsCard stats="1,680+" label="prizes" />
        <StatsCard stats="65,000+" label="social media outreach" />
      </div>
      <Button
        asChild
        className="h-fit w-fit rounded-full bg-(--pink) px-8 py-2 text-lg font-bold text-white transition-all duration-300 ease-out-quart hover:scale-105 hover:bg-(--pink) sm:text-xl lg:text-2xl"
      >
        {/* TODO: add URL */}
        <Link href="/">sponsor 2025</Link>
      </Button>
    </section>
  );
}

type StatsCardProps = {
  stats: string;
  label: string;
};

function StatsCard({ stats, label }: StatsCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-3xl font-extrabold text-(--pink) sm:text-4xl lg:text-5xl">
        {stats}
      </p>
      <p className="max-w-32 text-lg leading-tight font-extrabold text-(--blue) sm:text-xl lg:max-w-56 lg:text-2xl">
        {label}
      </p>
    </div>
  );
}

export default Stats;
