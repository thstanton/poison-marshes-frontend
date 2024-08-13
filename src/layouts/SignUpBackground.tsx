// import bgVid from "../assets/bg-vid.mp4";
// import bgPoster from "../assets/bg-poster.png";
import { Outlet } from "react-router";
import { cld } from "../main";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function SignUpBackground() {
  const bgVid = cld
    .video("PM_bg_vid")
    .resize(fill().width(1024).height(768))
    .toURL();
  const bgPoster = cld
    .image("PM_bg_poster")
    .resize(fill().width(1024).height(768))
    .toURL();

  return (
    <div>
      <div className="absolute -z-10 h-full w-full">
        <video
          autoPlay
          muted
          loop
          className="h-full min-h-dvh w-full object-cover"
          poster={bgPoster}
        >
          <source src={bgVid} type="video/mp4" />
        </video>
      </div>
      <div className="absolute -z-10 h-fit min-h-dvh w-screen bg-gradient-to-b from-stone-800 via-stone-700/40 to-yellow-300/70"></div>
      <div className="flex h-auto min-h-dvh w-full flex-col items-center justify-between p-4">
        <Outlet />
        <div className="w-full py-4 text-center font-special text-neutral">
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
