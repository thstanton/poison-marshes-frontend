import NavBar from "../components/NavBar";
import bgPoster from "../assets/bg-poster.png";
import { Navigate, Outlet } from "react-router";
import { useUser } from "../hooks/useUser";

export default function JournalLayout() {
  const { data: user, isLoading, error } = useUser();
  console.log(user, isLoading, error);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user) {
    return (
      <div
        className="h-dvh bg-cover"
        style={{ backgroundImage: `url(${bgPoster})` }}
      >
        <div className="h-dvh bg-gradient-to-b from-stone-800 via-stone-700/40 to-yellow-300/70">
          <NavBar />
          <div className="mx-auto max-w-[800px]">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}
