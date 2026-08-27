"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  targetDate: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const emptyTime: TimeLeft = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(emptyTime);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference =
        new Date(targetDate).getTime() - Date.now();

      if (difference <= 0) {
        return emptyTime;
      }

      return {
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-3 xl:-mt-6 -mt-4 tracking-normal font-mono">
      <div>
        <span className="xl:text-7xl text-5xl font-bold">
          {timeLeft.days}
        </span>
        <span className="ml-1 text-sm">D</span>
      </div>

      <div>
        <span className="xl:text-7xl text-5xl font-bold">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="ml-1 text-sm">H</span>
      </div>

      <div>
        <span className="xl:text-7xl text-5xl font-bold">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="ml-1 text-sm">M</span>
      </div>

      <div>
        <span className="xl:text-7xl text-5xl font-bold">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="ml-1 text-sm">S</span>
      </div>
    </div>
  );
}