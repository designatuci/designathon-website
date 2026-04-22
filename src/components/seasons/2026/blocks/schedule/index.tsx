"use client";

import DOTImage from "@components/common/dot-image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { useRef, useState } from "react";
import { scheduleDays, ScheduleEvent } from "./schedule-events";

const ACCENT = "#9a8aff"; // sky-400
const ACCENT_DIM = "rgba(56,189,248,0.15)";
const ACCENT_BORDER = "rgba(56,189,248,0.25)";

function LocationIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function EventRow({
  event,
  isSelected,
  isLast,
  onToggle,
}: {
  event: ScheduleEvent;
  isSelected: boolean;
  isLast: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ display: "flex", gap: "1.25rem" }}>
      {/* Node + spine segment */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          onClick={onToggle}
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: ACCENT,
            border: `2px solid ${ACCENT_BORDER}`,
            boxShadow: `0 0 16px ${ACCENT_DIM}`,
            transition: "all 0.25s",
            cursor: "pointer",
            flexShrink: 0,
            marginTop: "0.6rem",
            zIndex: 2,
            position: "relative",
          }}
        />
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: "2px",
              minHeight: "1rem",
              background:
                "linear-gradient(180deg, rgba(56,189,248,0.5) 0%, rgba(167,139,250,0.25) 100%)",
              boxShadow: "0 0 6px rgba(56,189,248,0.3)",
              marginTop: "4px",
            }}
          />
        )}
      </div>

      {/* Row content */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          paddingBottom: isLast ? 0 : "1.75rem",
        }}
      >
        <div
          onClick={onToggle}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            cursor: "pointer",
            padding: "0.4rem 1rem 0.4rem 0",
            transition: "all 0.25s",
            flexWrap: "wrap",
            minWidth: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-inria-sans)",
              fontSize: "1rem",
              color: "white",
              minWidth: "3.5rem",
              flexShrink: 0,
              letterSpacing: "0.05em",
            }}
            className="sm:min-w-[70px]"
          >
            {event.time}
          </span>

          <div
            style={{
              fontFamily: "var(--font-inria-sans)",
              color: "white",
              fontWeight: "bold",
              transition: "all 0.25s",
              minWidth: 0,
              flex: "1 1 12rem",
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
            className="max-w-full text-base sm:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl"
          >
            {event.title}
          </div>

          <span
            style={{
              fontFamily: "var(--font-inria-sans)",
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              fontSize: "1rem",
              color: "rgba(255, 255, 255, 0.81)",
            }}
          >
            <LocationIcon />
            {event.location}
          </span>

          {event.zoom && event.zoomURL && (
            <a
              href={event.zoomURL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontFamily: "var(--font-inria-sans)",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.75rem",
                color: "#38bdf8",
                background: "rgba(56,189,248,0.1)",
                border: "1px solid rgba(56,189,248,0.25)",
                borderRadius: "999px",
                padding: "0.2rem 0.6rem",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(56,189,248,0.22)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(56,189,248,0.1)")
              }
            >
              <ZoomIcon />
              Zoom
            </a>
          )}
          {event.zoom && !event.zoomURL && (
            <span
              style={{
                fontFamily: "var(--font-inria-sans)",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.75rem",
                color: "#38bdf8",
                background: "rgba(56,189,248,0.1)",
                border: "1px solid rgba(56,189,248,0.25)",
                borderRadius: "999px",
                padding: "0.2rem 0.6rem",
              }}
            >
              <ZoomIcon />
              Zoom
            </span>
          )}
        </div>

        {isSelected && (
          <div
            style={{
              marginTop: "0.5rem",
              padding: "1rem 1.25rem",
              borderRadius: "0.75rem",
              // matches Hero timer/date panel
              background: "rgba(12, 8, 32, 0.88)",
              border: "1px solid rgba(88, 63, 247, 0.75)",
              backdropFilter: "blur(14px)",
              borderLeft: "3px solid rgba(26, 64, 231, 0.45)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glare streak — exact same as Rules card */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "2rem",
                right: "2rem",
                height: "2px",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg, transparent, rgba(111, 252, 226, 0.82), rgba(167,139,250,0.5), transparent)",
              }}
            />

            <div
              style={{
                fontFamily: "var(--font-inria-sans)",
                fontSize: "1rem",
                color: ACCENT,
                marginBottom: "0.5rem",
                letterSpacing: "0.08em",
              }}
            >
              {event.time} – {event.endTime}
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                lineHeight: "1.6",
                margin: 0,
              }}
              className="text-base sm:text-base lg:text-lg xl:text-xl"
            >
              {event.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function DayTimeline({ events }: { events: ScheduleEvent[] }) {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  return (
    <div>
      {events.map((event, i) => (
        <EventRow
          key={i}
          event={event}
          isSelected={activeEvent === i}
          isLast={i === events.length - 1}
          onToggle={() => setActiveEvent(activeEvent === i ? null : i)}
        />
      ))}
    </div>
  );
}

export default function Itinerary() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="schedule"
      ref={ref}
      className="relative z-10 py-12"
      style={{
        position: "relative",
      }}
    >
      <div className="relative z-10 container mx-auto w-full">
        <Tabs defaultValue={scheduleDays[0].date}>
          {/* ── Title row: title left, tab selector right aligned to baseline ── */}
          <div
            className="relative isolate"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            <h1 className="relative z-30 [font-family:var(--font-luxurious-script)] text-6xl font-normal text-white md:text-9xl xl:text-[7rem]">
              Itinerary
            </h1>

            {/* Tab selector with alien — baseline-aligned with title */}
            <div className="relative z-10 inline-flex flex-col items-center self-end pb-2">
              {/* Alien stays under the “Itinerary” title on overlap */}
              <div
                className="pointer-events-none absolute max-md:z-[5] md:z-[10]"
                style={{
                  top: "-65px",
                  right: "20px",
                  width: "clamp(150px, 5vw, 200px)",
                  animation: "alien-float 4s ease-in-out infinite",
                  animationDelay: "0.5s",
                }}
              >
                <DOTImage
                  src="/images/seasons/2026/landing/itinerary/alien-top.png"
                  alt=""
                  width={2360}
                  height={1640}
                  className="h-auto w-full object-contain"
                />
              </div>

              <TabsList className="border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-md">
                {scheduleDays.map((day) => (
                  <TabsTrigger
                    key={day.date}
                    value={day.date}
                    className="px-6 py-3 [font-family:var(--font-inria-sans)] text-lg font-semibold text-white/45 data-[state=active]:border-sky-400/40 data-[state=active]:bg-sky-400/20 data-[state=active]:!text-white data-[state=active]:shadow-none dark:text-white/45 dark:data-[state=active]:!text-white"
                  >
                    {day.date}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </div>

          {scheduleDays.map((day) => (
            <TabsContent key={day.date} value={day.date}>
              <DayTimeline events={day.events} />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <style>{`
       
        @keyframes planet-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-16px); }
        }
          @keyframes alien-float {

          50%       { transform: translateY(5%) rotate(15deg); }
        }
      `}</style>
    </section>
  );
}
