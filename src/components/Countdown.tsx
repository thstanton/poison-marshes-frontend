import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(2024, 8, 17, 14, 0, 0);
    const updateCountdown = () => {
      const currentTime = new Date();
      const difference = targetDate.getTime() - currentTime.getTime();

      if (difference < 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex gap-5 font-unica text-stone-300/60">
      <div>
        <span className="countdown text-6xl font-bold sm:text-8xl">
          <span
            style={
              {
                "--value": String(timeLeft.days).padStart(3, "0"),
              } as React.CSSProperties
            }
          ></span>
        </span>
        days
      </div>
      <div>
        <span className="countdown text-6xl font-bold sm:text-8xl">
          <span
            style={
              {
                "--value": String(timeLeft.hours).padStart(2, "0"),
              } as React.CSSProperties
            }
          ></span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown text-6xl font-bold sm:text-8xl">
          <span
            style={
              {
                "--value": String(timeLeft.minutes).padStart(2, "0"),
              } as React.CSSProperties
            }
          ></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown text-6xl font-bold sm:text-8xl">
          <span
            style={
              {
                "--value": String(timeLeft.seconds).padStart(2, "0"),
              } as React.CSSProperties
            }
          ></span>
        </span>
        sec
      </div>
    </div>
  );
}
