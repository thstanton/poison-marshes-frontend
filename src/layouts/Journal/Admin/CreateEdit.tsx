import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function CreateEdit() {
  return (
    <div>
      <ul className="mb-3 flex flex-row gap-4">
        <li className="btn btn-outline btn-sm">
          <Link to="create">Create</Link>
        </li>
        {/* <li className="btn btn-outline btn-sm">
          <Link to="edit">Edit</Link>
        </li> */}
      </ul>
      <Outlet />
    </div>
  );
}
