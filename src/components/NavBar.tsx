export default function NavBar() {
  return (
    <div className="navbar text-slate-50">
      <div className="navbar-start">
        <h1 className="font-rock">The Poison Marshes Investigation</h1>
      </div>
      <div className="navbar-end gap-4">
        <div className="flex flex-row items-center gap-2">
          <h3>Tim</h3>
          <span className="badge badge-sm">3</span>
        </div>
        <button className="btn btn-outline font-rock">Logout</button>
      </div>
    </div>
  );
}
