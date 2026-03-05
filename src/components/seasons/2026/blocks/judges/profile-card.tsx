import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { LinkedinIconStroke } from "@components/icons/linkedin";
import { Judge } from "@components/seasons/2026/blocks/judges";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import Link from "next/link";

type Props = {
  profile: Judge;
  isInView: boolean;
  index: number;
  isActive: boolean;
};

function ProfileCard({ profile, isInView, index, isActive}: Props) {
    index > 0 ? "translate-x-80" : "";
  return (
    <Card
      className={cn(
        "relative h-[500px] w-[500px] rounded-full border-0 bg-white/60 p-8 opacity-0 transition-all duration-500 ease-out-quart",
        isInView && "translate-y-0 opacity-100",
        isActive 
        ? "scale-100 z-20 shadow-2x1"
        : "scale-50 opacity-60"
      )}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <CardHeader className= {cn(
        "absolute overflow-hidden rounded-full bg-[#fefcb]",
        isActive 
        ?  "h-56 w-56 left-35"
        : "inset-0 flex items-center justify-center scale-130"
      )} 
      >
      {isActive ? (
        <>
        <DOTImage
          alt={profile.name}
          src={profile.imageURL}
          fill
          sizes="(min-width: 0px) 50vw; (min-width: 768px) 25vw"
        />
        </>
      ) : (
        <DOTImage
          alt={profile.name} 
          src={`/images/seasons/2026/landing/judges/planets/${(index % 5) + 1}.png`}
          fill
          sizes="(min-width: 0px) 50vw; (min-width: 768px) 25vw"
          className="object-contain"
        />
      )}
      </CardHeader>

      <CardContent className="mt-62 px-4 text-center text-sm leading-tight text-(--blue)">
        <div className="space-y-2">
          <h3
            className="text-center text-2xl leading-[1.1] font-bold lg:text-3xl xl:text-4xl"
            // Force newline between first and last name
            //style={{ wordSpacing: "100vw" }}
          >
            {profile.name}
          </h3>
          <p className="lg:text-base3xl:text-xl -mx-3 text-xl font-medium 3xl:text-x1">
            {profile.position}
          </p>
          <p className="lg:text-base3xl:text-xl -mx-3 text-xl font-medium 3xl:text-lg leading-[1.15]">
            {profile.company}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Link
            href={profile.linkedInURL}
            className="rounded-full bg-(--blue) p-2 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIconStroke />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
