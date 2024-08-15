import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import LogOutButton from "./LogOutButton";
import icon from "/PM_icon.svg";

export default function NavBar() {
  const { data: user } = useUser();
  return (
    <div className="navbar text-slate-50">
      <div className="navbar-start">
        {/* <h1 className="font-rock">The Poison Marshes</h1> */}
        <img src={icon} alt="The Poison Marshes" className="h-16 w-16" />
      </div>
      <div className="navbar-end gap-4">
        <div className="flex flex-row items-center gap-2">
          <Link to="/journal" className="text-xs hover:font-bold md:text-base">
            {user?.name}'s Journal
          </Link>

          {user?.isAdmin && (
            <>
              |{" "}
              <Link
                to="/admin"
                className="text-xs hover:font-bold md:text-base"
              >
                Admin Tools
              </Link>
            </>
          )}
        </div>
        <LogOutButton />
      </div>
    </div>
  );
}
