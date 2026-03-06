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

// Each judge gets a unique nebula accent color
const nebulaColors = [
  { glow: "rgba(0, 0, 255, 0.5)", ring: "#99b1f8", streak: "#97c2ff" },
  { glow: "rgba(56, 189, 248, 0.5)", ring: "#38f8e5", streak: "#02c7a9" },
  { glow: "rgba(200, 0, 186, 0.5)", ring: "#230351", streak: "#a90aff" },
  { glow: "rgba(52, 211, 153, 0.5)", ring: "#34d399", streak: "#059669" },
];

function ProfileCard({ profile, isInView, index, isActive }: Props) {
  const color = nebulaColors[index % nebulaColors.length];

  return (
    <div
      className={cn(
        "relative flex items-center justify-center opacity-0 transition-all duration-700 ease-out",
        isInView && "opacity-100",
        isActive ? "z-20" : "z-10",
      )}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Outer glow halo — only on active */}
      {isActive && (
        <div
          className="pointer-events-none absolute inset-0 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(ellipse at center, ${color.glow} 0%, transparent 70%)`,
            transform: "scale(1.4)",
          }}
        />
      )}

      <Card
        className={cn(
          "relative overflow-hidden border-0 bg-transparent transition-all duration-500 ease-out",
          isActive
            ? "h-[460px] w-[320px] scale-100 shadow-2xl"
            : "h-[340px] w-[260px] scale-90 opacity-50",
        )}
      >
        {/* Glass card background */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: isActive
              ? "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)"
              : "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
            backdropFilter: "blur(20px)",
            border: `1px solid ${isActive ? `${color.ring}55` : "rgba(255,255,255,0.08)"}`,
            borderRadius: "1rem",
          }}
        />

        {/* Top accent streak */}
        {isActive && (
          <div
            className="absolute top-0 right-8 left-8 h-[2px] rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${color.ring}, transparent)`,
            }}
          />
        )}

        {/* Subtle starfield texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
            borderRadius: "1rem",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          }}
        />

        {/* Planet / Portrait image */}
        <CardHeader className="relative z-10 flex items-center justify-center pt-8 pb-0">
          <div
            className={cn(
              "relative overflow-hidden transition-all duration-500",
              isActive ? "h-44 w-44 rounded-full" : "h-32 w-32 rounded-full",
            )}
            style={{
              boxShadow: isActive
                ? `0 0 0 3px ${color.ring}66, 0 0 24px ${color.glow}`
                : "0 0 0 2px rgba(255,255,255,0.15)",
            }}
          >
            {/* Ring orbit line around portrait when active */}
            {isActive && (
              <div
                className="pointer-events-none absolute -inset-3 rounded-full border opacity-40"
                style={{ borderColor: color.ring, borderStyle: "dashed" }}
              />
            )}
            <DOTImage
              alt={profile.name}
              src={profile.imageURL}
              fill
              sizes="(min-width: 768px) 176px"
              className="object-cover"
            />
          </div>
        </CardHeader>

        {/* Info */}
        <CardContent
          className={cn(
            "relative z-10 flex flex-col items-center gap-1 px-6 text-center transition-all duration-500",
            isActive ? "mt-5" : "mt-4",
          )}
        >
          <h3
            className={cn(
              "leading-tight font-bold tracking-tight text-white transition-all duration-500",
              isActive ? "text-2xl" : "text-lg",
            )}
          >
            {profile.name}
          </h3>

          <p
            className={cn(
              "transition-all duration-500",
              isActive
                ? "text-sm font-medium text-white/70"
                : "text-xs text-white/50",
            )}
          >
            {profile.position}
          </p>

          {/* Company badge */}
          <div
            className={cn(
              "mt-1 rounded-full px-3 py-0.5 transition-all duration-500",
              isActive ? "opacity-100" : "opacity-60",
            )}
            style={{
              background: isActive
                ? `linear-gradient(90deg, ${color.streak}33, ${color.ring}33)`
                : "rgba(255,255,255,0.08)",
              border: `1px solid ${isActive ? `${color.ring}55` : "rgba(255,255,255,0.1)"}`,
            }}
          >
            <span
              className="text-xs font-semibold tracking-wide"
              style={{ color: isActive ? color.ring : "rgba(255,255,255,0.5)" }}
            >
              {profile.company}
            </span>
          </div>

          {/* LinkedIn */}
          {isActive && (
            <Link
              href={profile.linkedInURL}
              className="mt-3 flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white transition-all hover:scale-105 hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, ${color.streak}, ${color.ring})`,
                boxShadow: `0 4px 16px ${color.glow}`,
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIconStroke />
              LinkedIn
            </Link>
          )}
        </CardContent>

        {/* Bottom corner constellation dots */}
        {isActive && (
          <>
            <div
              className="absolute bottom-4 left-4 h-1 w-1 rounded-full opacity-60"
              style={{ backgroundColor: color.ring }}
            />
            <div
              className="absolute bottom-6 left-7 h-0.5 w-0.5 rounded-full opacity-40"
              style={{ backgroundColor: color.ring }}
            />
            <div
              className="absolute right-4 bottom-4 h-1 w-1 rounded-full opacity-60"
              style={{ backgroundColor: color.ring }}
            />
            <div
              className="absolute right-6 bottom-7 h-0.5 w-0.5 rounded-full opacity-30"
              style={{ backgroundColor: color.ring }}
            />
          </>
        )}
      </Card>
    </div>
  );
}

export default ProfileCard;
