"use client";

import { differenceInSeconds } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { useEffect, useRef, useState } from "react";

const pacificTimeZone = "America/Los_Angeles";

const Countdown = () => {
  // 4/20 at 3:30 PM PT
  const endDatePacificRef = useRef(new Date("2025-04-20T15:30:00"));
  const startDatePacificRef = useRef(new Date("2025-04-18T18:30:00"));
  //   const startDatePacificRef = useRef(new Date("2025-04-17T19:14:00"));

  const [eventHasStartedState, setEventHasStartedState] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });

  useEffect(() => {
    const updateCountdown = () => {
      const nowInPacific = toZonedTime(new Date(), pacificTimeZone);
      const endDatePacific = endDatePacificRef.current;
      const startDatePacific = startDatePacificRef.current;

      const eventHasStarted = nowInPacific >= startDatePacific;

      if (eventHasStarted && !eventHasStartedState) {
        setEventHasStartedState(true);
      }

      const secondsLeft = eventHasStarted
        ? differenceInSeconds(endDatePacific, nowInPacific)
        : differenceInSeconds(startDatePacific, nowInPacific);

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
  }, [eventHasStartedState]);

  return (
    <div className="flex min-w-[250px] flex-col items-center justify-center rounded-full bg-(--tan)/80 px-12 py-2">
      <span className="text-(--pink)">
        {eventHasStartedState ? "Designing ends in:" : "Events starts in:"}
      </span>
      <div className="flex items-start gap-2 text-center font-sans text-lg text-[#617CCB]">
        <CountdownPart value={timeLeft.days} unit="days" />
        <span className="relative top-1 text-lg font-bold">:</span>
        <CountdownPart value={timeLeft.hours} unit="hrs" />
        <span className="relative top-1 text-lg font-bold">:</span>
        <CountdownPart value={timeLeft.minutes} unit="mins" />
        <span className="relative top-1 text-lg font-bold">:</span>
        <CountdownPart value={timeLeft.seconds} unit="secs" />
      </div>
    </div>
  );
};

export default Countdown;

function CountdownPart({ value, unit }: { value: string; unit: string }) {
  return (
    <div className="w-fit">
      <div className="text-3xl font-semibold lg:text-4xl xl:text-5xl">
        <span>{value}</span>
      </div>
      <div className="font-cursive text-sm font-medium text-(--pink)">
        {unit}
      </div>
    </div>
  );
}
