import { Outlet, useNavigate } from "react-router";

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="mb-3 flex flex-row justify-between">
        <li className="btn" onClick={() => navigate("/admin/levels")}>
          Levels
        </li>
        <li className="btn" onClick={() => navigate("/admin/emails")}>
          Emails
        </li>
        <li className="btn" onClick={() => navigate("/admin/acts")}>
          Acts
        </li>
        <li className="btn" onClick={() => navigate("/admin/games")}>
          Games
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
