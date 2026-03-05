import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { LinkedinIconStroke } from "@components/icons/linkedin";
import { Judge } from "@components/seasons/2025/blocks/judges";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import Link from "next/link";

type Props = {
  profile: Judge;
  isInView: boolean;
  index: number;
};

function ProfileCard({ profile, isInView, index }: Props) {
  return (    
    
    <Card
      className={cn(
        "relative w-[380px] h-[380px] rounded-full border-0 bg-white/60 p-8 opacity-0 transition-all duration-500 ease-out-quart",
        { "translate-y-0 opacity-100": isInView }
      )}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <CardHeader className="absolute top-4 left-1/2 w-48 h-48 -translate-x-1/2 overflow-hidden rounded-full bg-[#fefcb]">
        <DOTImage
          alt={profile.name}
          src={profile.imageURL}
          fill
          sizes="(min-width: 0px) 50vw; (min-width: 768px) 25vw"
        />
      </CardHeader>
      <CardContent className="mt-48 px-4 text-center text-(--blue) text-sm leading-tight">
        <div className="space-y-2">
          <h3
            className="text-center text-2xl leading-[1.1] font-bold lg:text-3xl xl:text-4xl"
            // Force newline between first and last name
            style={{ wordSpacing: "100vw" }}
          >
            {profile.name}
          </h3>
          <p className="lg:text-base3xl:text-xl -mx-3 text-sm font-medium 3xl:text-lg">
            {profile.position}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
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
