"use client";

import { differenceInSeconds } from "date-fns";
import { fromZonedTime } from "date-fns-tz";
import { useEffect, useMemo, useState } from "react";

const pacificTimeZone = "America/Los_Angeles";

function getAppsCloseDeadline(): Date {
  // Friday, 4/24/2026 at 5:00 PM PT
  return fromZonedTime(new Date(2026, 3, 24, 17, 0, 0), pacificTimeZone);
}

function getExtendedAppsCloseDeadline(): Date {
  // Sunday, 4/26/2026 at 8:00 AM PT
  return fromZonedTime(new Date(2026, 3, 26, 8, 0, 0), pacificTimeZone);
}

function CountdownPart({ value, unit }: { value: string; unit: string }) {
  return (
    <div className="w-fit min-w-[2.5rem] sm:min-w-[2.75rem]">
      <div className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
        <span>{value}</span>
      </div>
      <div className="text-xs font-medium text-white/65 sm:text-sm">{unit}</div>
    </div>
  );
}

/** Inner content only; wrap with `HeroInfoPanel` in the hero. */
export default function AppsCloseCountdown() {
  const eventStartDeadline = useMemo(() => getAppsCloseDeadline(), []);
  const designingStartDeadline = useMemo(
    () => getExtendedAppsCloseDeadline(),
    [],
  );

  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });
  const [eventHasStarted, setEventHasStarted] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const hasEventStarted = now >= eventStartDeadline;
      const activeDeadline = hasEventStarted
        ? designingStartDeadline
        : eventStartDeadline;
      const secondsLeft = differenceInSeconds(activeDeadline, now);
      setEventHasStarted(hasEventStarted);

      if (secondsLeft <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(secondsLeft / (3600 * 24));
      const hours = Math.floor((secondsLeft % (3600 * 24)) / 3600);
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [eventStartDeadline, designingStartDeadline]);

  return (
    <>
      <span className="text-sm text-white/80 sm:text-base">
        {eventHasStarted ? "Designing ends in:" : "Event starts in:"}
      </span>
      <div className="flex items-start justify-center gap-1.5 text-center text-[#9eb4e8] sm:gap-2">
        <CountdownPart value={timeLeft.days} unit="days" />
        <span className="relative top-0.5 text-lg font-bold sm:text-xl">:</span>
        <CountdownPart value={timeLeft.hours} unit="hrs" />
        <span className="relative top-0.5 text-lg font-bold sm:text-xl">:</span>
        <CountdownPart value={timeLeft.minutes} unit="mins" />
        <span className="relative top-0.5 text-lg font-bold sm:text-xl">:</span>
        <CountdownPart value={timeLeft.seconds} unit="secs" />
      </div>
    </>
  );
}
