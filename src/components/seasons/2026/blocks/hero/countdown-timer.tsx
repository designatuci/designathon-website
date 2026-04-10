"use client";

import { differenceInSeconds } from "date-fns";
import { fromZonedTime } from "date-fns-tz";
import { useEffect, useMemo, useState } from "react";

const pacificTimeZone = "America/Los_Angeles";

function getAppsCloseDeadline(): Date {
  return fromZonedTime(new Date(2026, 3, 10, 23, 59, 59), pacificTimeZone);
}

function getExtendedAppsCloseDeadline(): Date {
  return fromZonedTime(new Date(2026, 3, 13, 23, 59, 59), pacificTimeZone);
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
  const deadline = useMemo(() => getAppsCloseDeadline(), []);
  const extendedDeadline = useMemo(() => getExtendedAppsCloseDeadline(), []);

  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });
  const [isExtended, setIsExtended] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const shouldUseExtended = differenceInSeconds(deadline, now) <= 0;
      const activeDeadline = shouldUseExtended ? extendedDeadline : deadline;
      const secondsLeft = differenceInSeconds(activeDeadline, now);
      setIsExtended(shouldUseExtended);

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
  }, [deadline, extendedDeadline]);

  return (
    <>
      <span className="text-sm text-white/80 sm:text-base">
        {isExtended ? "Apps extended! Apps close in:" : "Apps close in:"}
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
