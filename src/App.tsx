import { useEffect, useState } from "react";
import bgVid from "./assets/bg-vid.mp4";
import bgPoster from "./assets/bg-poster.png";

function App() {
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
    <div className="h-screen">
      <div className="absolute -z-10 h-screen w-screen">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover"
          poster={bgPoster}
        >
          <source src={bgVid} type="video/mp4" />
        </video>
      </div>
      <div className="absolute -z-10 h-screen w-screen bg-gradient-to-b from-stone-800 via-stone-700/40 to-yellow-300/70"></div>
      <div className="flex h-full w-full flex-col items-center justify-evenly p-4">
        <div>
          <h1 className="pb-2 text-center font-unica text-6xl font-bold text-stone-300/60 drop-shadow">
            The Poison Marshes
          </h1>
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
        </div>
        <div className="flex w-11/12 -rotate-2 flex-col items-center justify-center gap-8 rounded-lg bg-stone-300/90 p-4 drop-shadow-xl md:w-full md:p-8">
          <div className="text-center font-rock text-lg font-bold text-stone-700 md:text-3xl">
            <p>We need your help to save the village.</p>
            <p>Find out more - soon</p>
          </div>
          <form action="" className="mx-2 flex flex-col gap-2 md:flex-row">
            <input
              type="email"
              className="input input-bordered bg-transparent text-stone-200"
            />
            <button
              className="btn border-0 bg-stone-400 text-neutral"
              type="submit"
            >
              Join Us
            </button>
          </form>
        </div>
        <div className="absolute bottom-0 w-full py-4 text-center font-special text-neutral">
          <p>
            The Poison Marshes is part of{" "}
            <a href="https://alrewas-artsfest.co.uk" target="_blank">
              Alrewas Arts Festival 2024
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
