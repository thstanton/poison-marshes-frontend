import { useUser } from "../hooks/useUser";
import LogOutButton from "./LogOutButton";

export default function NavBar() {
  const { data: user } = useUser();
  return (
    <div className="navbar text-slate-50">
      <div className="navbar-start">
        <h1 className="font-rock">The Poison Marshes</h1>
      </div>
      <div className="navbar-end gap-4">
        <div className="flex flex-row items-center gap-2">
          <h3>{user?.name}</h3>
        </div>
        <LogOutButton />
      </div>
    </div>
  );
}
