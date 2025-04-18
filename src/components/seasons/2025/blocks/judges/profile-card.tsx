import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
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
        "max-w-[350px] translate-y-10 rounded-full border-0 bg-white/60 p-8 opacity-0 transition-all duration-500 ease-out-quart",
        { "translate-y-0 opacity-100": isInView },
      )}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <CardHeader className="relative aspect-square overflow-hidden rounded-full bg-[#FEFCEB] p-0">
        <DOTImage
          alt={profile.name}
          src={profile.imageURL}
          fill
          sizes="(min-width: 0px) 50vw; (min-width: 768px) 25vw"
        />
      </CardHeader>
      <CardContent className="flex flex-grow flex-col items-center justify-between gap-6 pb-4 text-center text-(--blue)">
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
        <div className="flex items-center gap-2">
          <Link
            href={profile.linkedInURL}
            className="rounded-full bg-(--blue) p-2 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
    >
      <path
        d="M17.3799 9.23047C19.0985 9.23047 20.7467 9.91318 21.962 11.1284C23.1772 12.3437 23.8599 13.9919 23.8599 15.7105V23.2705H19.5399V15.7105C19.5399 15.1376 19.3123 14.5882 18.9073 14.1831C18.5022 13.778 17.9528 13.5505 17.3799 13.5505C16.807 13.5505 16.2576 13.778 15.8526 14.1831C15.4475 14.5882 15.2199 15.1376 15.2199 15.7105V23.2705H10.8999V15.7105C10.8999 13.9919 11.5826 12.3437 12.7979 11.1284C14.0131 9.91318 15.6613 9.23047 17.3799 9.23047Z"
        stroke="white"
        strokeWidth="1.62"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.58001 10.3105H2.26001V23.2705H6.58001V10.3105Z"
        stroke="white"
        strokeWidth="1.62"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.42001 7.07098C5.61295 7.07098 6.58001 6.10391 6.58001 4.91098C6.58001 3.71804 5.61295 2.75098 4.42001 2.75098C3.22707 2.75098 2.26001 3.71804 2.26001 4.91098C2.26001 6.10391 3.22707 7.07098 4.42001 7.07098Z"
        stroke="white"
        strokeWidth="1.62"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
