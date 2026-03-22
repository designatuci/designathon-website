"use client";

import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { Organization } from "@components/seasons/2026/blocks/partners";
import { useInView } from "motion/react";
import { useRef } from "react";

type SponsorsMarqueeProps = {
  className?: string;
  organizations: Organization[];
};

const BEAM_TOP_W = 0;
const BEAM_BOT_W = 200;
const LOGOS_CONTAINER_W = "100vw";

const SponsorsMarquee = ({
  className,
  organizations,
}: SponsorsMarqueeProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "0px 0px -10% 0px",
  });

  const withContent = organizations.filter((o) => o.content);

  const getBeamBoundsAtY = (yPct: number) => {
    const t = yPct / 100;
    const halfW = (BEAM_TOP_W + (BEAM_BOT_W - BEAM_TOP_W) * t) / 2;
    return { left: 50 - halfW, right: 50 + halfW };
  };

  return (
    <div
      ref={sectionRef}
      className={cn("relative w-full overflow-visible", className)}
      style={{ minHeight: "140vh", position: "relative", zIndex: 2 }}
    >
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: LOGOS_CONTAINER_W,
          bottom: "0%",
        }}
      >
        {/* UFO */}
        <div
          style={{
            width: "clamp(220px, 28vw, 350px)",
            margin: "0 auto",
            position: "relative",
            zIndex: 20,
            filter:
              "drop-shadow(0 0 30px rgba(60, 191, 220, 0.5)) drop-shadow(0 0 60px rgba(171, 56, 248, 0.2))",
            animation: "ufo-hover 4s ease-in-out infinite",
          }}
        >
          <DOTImage
            src="/images/seasons/2026/landing/partners/ufo.png"
            alt="UFO"
            width={600}
            height={400}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Beam + logos container */}
        <div
          style={{
            position: "absolute",
            top: "calc(min(280px, 36vw) * 0.55)",
            left: 0,
            right: 0,
            bottom: "-50%",
            zIndex: 6,
          }}
        >
          {/* Beam shape */}
          <div
            className="noise"
            style={{
              position: "absolute",
              inset: 0,
              clipPath: `polygon(${(100 - BEAM_TOP_W) / 2}% 0%, 
              ${(100 + BEAM_TOP_W) / 2}% 0%, 
              ${(100 + BEAM_BOT_W) / 2}% 45%, 
              ${(100 - BEAM_BOT_W) / 2}% 45%)`,
              maskImage:
                "linear-gradient(to bottom, black 35%, transparent 46%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 35%, transparent 46%)",
              zIndex: 6,
              pointerEvents: "none",
            }}
          >
            {/* Gradient fill */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(180,140,255,0.35) 0%, rgba(120,80,220,0.18) 40%, rgba(80,40,180,0.08) 80%, transparent 100%)",
              }}
            />
            {/* Noise texture overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "url('/images/common/noise.png')",
                backgroundRepeat: "repeat",
                backgroundSize: "200px 200px",
                opacity: 0.12,
                mixBlendMode: "soft-light",
              }}
            />
            {/* Inner glow core */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(56, 175, 190, 0.44) 0%, transparent 60%)",
                clipPath: `polygon(${(100 - BEAM_TOP_W * 0.4) / 2}% 0%, 
              ${(100 + BEAM_TOP_W * 0.4) / 2}% 0%, 
              ${(100 + BEAM_BOT_W * 0.5) / 2}% 100%, 
              ${(100 - BEAM_BOT_W * 0.5) / 2}% 100%)`,
                zIndex: 6,
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Logos — pyramid grid */}
          {(() => {
            const buildPyramidRows = (total: number) => {
              const rows: number[] = [];
              let remaining = total;
              let cols = 2;
              while (remaining > 0) {
                const count = Math.min(cols, remaining);
                rows.push(count);
                remaining -= count;
                cols = Math.min(cols + 1, 5);
              }
              return rows;
            };
            const pyramidRows = buildPyramidRows(withContent.length);
            const totalRows = pyramidRows.length;
            let logoIndex = 0;
            const elements: React.ReactNode[] = [];

            pyramidRows.forEach((colsInRow, rowIndex) => {
              const yPct = 10 + (rowIndex / (totalRows - 1)) * 30;
              const { left: beamLeft, right: beamRight } =
                getBeamBoundsAtY(yPct);
              const beamW = beamRight - beamLeft;
              const padding = -3;

              for (let col = 0; col < colsInRow; col++) {
                if (logoIndex >= withContent.length) break;
                const org = withContent[logoIndex];
                const i = logoIndex;
                logoIndex++;

                const xPct =
                  colsInRow === 1
                    ? 50
                    : beamLeft +
                      padding +
                      (col / (colsInRow - 1)) * (beamW - padding * 2);

                const rotation = org.content!.rotation;
                const sizeVw = 8 + Math.abs(Math.sin(i * 3.1)) * 4; // 8–12vw
                const wiggleDelay = (i * 0.37) % 2;
                const wiggleDuration = 1.8 + ((i * 0.23) % 1.2);

                elements.push(
                  <div
                    key={org.id}
                    className="group/logo"
                    style={
                      {
                        overflow: "visible",
                        position: "absolute",
                        left: `${xPct}%`,
                        top: `${yPct}%`,
                        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                        width: `clamp(50px, ${sizeVw}vw, 120px)`,
                        height: `clamp(50px, ${sizeVw}vw, 120px)`,
                        opacity: isInView ? 1 : 0,
                        transition: "opacity 0.4s ease",
                        animation: `logo-bob ${wiggleDuration}s ease-in-out ${wiggleDelay}s infinite`,
                        zIndex: 15,
                        "--logo-r": `${rotation}deg`,
                      } as React.CSSProperties
                    }
                  >
                    <label
                      htmlFor={`partner-${org.id}`}
                      className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full text-center text-sm font-semibold whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover/logo:opacity-100"
                      style={{ textShadow: "0 0 8px rgba(180,140,255,0.8)" }}
                    >
                      {org.content!.name}
                    </label>
                    <DOTImage
                      id={`partner-${org.id}`}
                      src={org.content!.imageURL}
                      alt={org.content!.name}
                      width={120}
                      height={120}
                      sizes={`${sizeVw}vw`}
                      className="h-auto w-full object-contain transition-transform duration-200 group-hover/logo:scale-110"
                    />
                  </div>,
                );
              }
            });

            return elements;
          })()}
        </div>
      </div>

      <style>{`
        @keyframes ufo-hover {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes logo-bob {
          0%, 100% { transform: translate(-50%, -50%) rotate(var(--logo-r)) translateY(0px); }
          50% { transform: translate(-50%, -50%) rotate(var(--logo-r)) translateY(-8px); }
        }
      `}</style>
    </div>
  );
};

export default SponsorsMarquee;
