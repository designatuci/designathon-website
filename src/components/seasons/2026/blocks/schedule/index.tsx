"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { useState } from "react";
import {
  eventTypeStyles,
  scheduleDays,
  ScheduleEvent,
} from "./schedule-events";

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
  const style = eventTypeStyles[event.type];

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
            background: isSelected ? style.color : "rgba(255,255,255,0.2)",
            border: `2px solid ${isSelected ? style.color : "rgba(255,255,255,0.3)"}`,
            boxShadow: isSelected ? `0 0 16px ${style.color}` : "none",
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
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : "1.75rem" }}>
        <div
          onClick={onToggle}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            cursor: "pointer",
            padding: "0.4rem 1rem 0.4rem 0",
            transition: "all 0.25s",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.8rem",
              color: "rgba(255, 255, 255, 0.81)",
              minWidth: "70px",
              letterSpacing: "0.05em",
            }}
          >
            {event.time}
          </span>

          <div
            style={{
              padding: "0.35rem 1rem",
              borderRadius: "999px",
              background: isSelected ? style.bg : "rgba(255,255,255,0.06)",
              border: `1px solid ${isSelected ? style.color + "88" : "rgba(255,255,255,0.12)"}`,
              color: isSelected ? style.color : "white",
              fontSize: "0.9rem",
              fontWeight: "bold",
              transition: "all 0.25s",
              whiteSpace: "nowrap",
            }}
          >
            {event.title}
          </div>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              fontSize: "0.8rem",
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
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.7rem",
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
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                fontSize: "0.7rem",
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
              background: "rgba(255,255,255,0.04)",
              border: `1px solid ${style.border}`,
              backdropFilter: "blur(12px)",
              borderLeft: `3px solid ${style.color}`,
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                color: style.color,
                marginBottom: "0.5rem",
                letterSpacing: "0.08em",
              }}
            >
              {event.time} – {event.endTime}
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1rem",
                lineHeight: "1.6",
                margin: 0,
              }}
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
  return (
    <main
      id="itinerary"
      style={{
        minHeight: "100vh",
        padding: "3rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="relative container">
        <Tabs defaultValue={scheduleDays[0].date}>
          {/* Header row: title left, tabs right */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2.5rem",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <h2
              className="[font-family:var(--font-luxurious-script)]"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
                fontWeight: "bold",
                color: "white",
                margin: 0,
                textShadow: "0 0 40px rgba(56,189,248,0.4)",
              }}
            >
              Event Schedule
            </h2>

            <TabsList className="border border-white/10 bg-white/5 backdrop-blur-md">
              {scheduleDays.map((day) => (
                <TabsTrigger
                  key={day.date}
                  value={day.date}
                  className="!text-white data-[state=active]:border-sky-400/40 data-[state=active]:bg-sky-400/20 data-[state=active]:!text-sky-300"
                >
                  {day.date}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {scheduleDays.map((day) => (
            <TabsContent key={day.date} value={day.date}>
              <DayTimeline events={day.events} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  );
}
