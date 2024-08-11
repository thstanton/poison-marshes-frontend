import NavBar from "../../components/NavBar/NavBar";
import bgPoster from "../../assets/bg-poster.png";
import { Outlet } from "react-router";

export default function JournalLayout() {
  return (
    <div
      className="h-full min-h-dvh bg-cover"
      style={{ backgroundImage: `url(${bgPoster})` }}
    >
      <div className="h-full min-h-dvh bg-gradient-to-b from-stone-800 via-stone-700/40 to-yellow-300/70">
        <NavBar />
        <div className="mx-auto max-w-[800px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
