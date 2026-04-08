import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { LinkedinIconStroke } from "@components/icons/linkedin";
import { Judge } from "@components/seasons/2026/blocks/judges";
import Image from "next/image";
import Link from "next/link";

type Props = {
  profile: Judge;
  isInView: boolean;
  index: number;
  isActive: boolean;
};

// Accent colors per planet — glow, ring, streak all match each planet's colors
const planetColors: Record<
  number,
  { glow: string; ring: string; streak: string }
> = {
  1: {
    glow: "rgba(0, 200, 220, 0.5)",
    ring: "#38d4e0",
    streak: "#00c8d4",
  }, // Teal/cyan (water planet)
  2: {
    glow: "rgba(210, 165, 100, 0.5)",
    ring: "#d4a86a",
    streak: "#c49550",
  }, // Golden brown (Saturn-like)
  3: {
    glow: "rgba(180, 150, 110, 0.5)",
    ring: "#c4a574",
    streak: "#a88950",
  }, // Light brown
  4: {
    glow: "rgba(200, 90, 50, 0.5)",
    ring: "#e07848",
    streak: "#c85a28",
  }, // Burnt orange / rust
  5: {
    glow: "rgba(130, 180, 230, 0.5)",
    ring: "#7eb8e6",
    streak: "#5a9ed9",
  }, // Light blue
  6: {
    glow: "rgba(235, 210, 80, 0.5)",
    ring: "#e8c850",
    streak: "#d4b020",
  }, // Yellow
};

const PLANET_COUNT = 5; // TEMP: VOID SATURN FOR NOW

function ProfileCard({ profile, isInView, index, isActive }: Props) {
  const planetNumber = (index % PLANET_COUNT) + 1;
  const color = planetColors[planetNumber] ?? planetColors[1];
  const planetSrc = `/images/seasons/2026/landing/judges/planets/${planetNumber}.png`;
  const planetScale = planetNumber === 1 ? 1.6 : planetNumber === 6 ? 2.4 : 1.5;
  const planetOffset =
    planetNumber === 6 ? "translate(20px, -20px)" : "translate(0, 0)";

  return (
    <div
      className={cn(
        "relative flex h-[460px] w-[320px] flex-shrink-0 items-center justify-center opacity-0 transition-all duration-700 ease-out",
        isInView && "opacity-100",
        isActive ? "z-20" : "z-10",
      )}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div
        className={cn(
          "relative flex flex-col items-center overflow-visible transition-all duration-500 ease-out",
          isActive
            ? "h-[460px] w-[320px] scale-100"
            : "h-[340px] w-[260px] scale-90 opacity-50",
        )}
      >
        {/* Planet as background — scaled up so planet is bigger, info stays same size */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `${planetOffset} scale(${planetScale})`,
          }}
          aria-hidden
        >
          <div className="relative h-full w-full">
            <Image
              src={planetSrc}
              alt=""
              fill
              className="object-contain"
              sizes="320px"
              priority={index < 3}
            />
          </div>
        </div>

        {/* Portrait */}
        <div className="relative z-10 flex flex-col items-center pt-8 pb-0">
          <div
            className={cn(
              "relative overflow-hidden transition-all duration-500",
              isActive ? "h-44 w-44 rounded-full" : "h-32 w-32 rounded-full",
            )}
          >
            <DOTImage
              alt={profile.name}
              src={profile.imageURL}
              fill
              sizes="(min-width: 768px) 176px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Info — frosted panel so text stays readable on any planet color */}
        <div
          className={cn(
            "relative z-10 w-full max-w-[min(100%,288px)] self-center transition-all duration-500",
            isActive ? "mt-5" : "mt-4",
          )}
        >
          <div
            className={cn(
              "flex w-full flex-col items-center justify-center gap-1.5 rounded-full border border-black/[0.06] text-center shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-500",
              isActive ? "bg-black/45 px-6 py-3.5" : "bg-black/40 px-5 py-2.5",
            )}
          >
            <h3
              className={cn(
                "leading-tight tracking-tight text-white transition-all duration-500",
                isActive ? "text-2xl" : "text-lg",
              )}
            >
              {profile.name}
            </h3>

            <p
              className={cn(
                "max-w-[260px] text-white/70 transition-all duration-500",
                isActive ? "text-sm" : "text-xs",
              )}
            >
              {profile.company
                ? `${profile.position} @ ${profile.company}`
                : profile.position}
            </p>

            {/* LinkedIn */}
            {isActive && (
              <Link
                href={profile.linkedInURL}
                className="mt-2 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs text-white transition-all hover:scale-105 hover:brightness-110"
                style={{
                  background: `linear-gradient(135deg, ${color.streak}, ${color.ring})`,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.25)",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIconStroke />
                LinkedIn
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
