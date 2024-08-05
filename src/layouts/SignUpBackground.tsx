import bgVid from "../assets/bg-vid.mp4";
import bgPoster from "../assets/bg-poster.png";
import { Outlet } from "react-router";

export default function SignUpBackground() {
  return (
    <div className="h-dvh">
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
        <Outlet />
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
