import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex gap-5 items-center px-6 py-3.5 bg-blue-900 text-white">
      <strong>Placement Kit</strong>
      <NavLink className="text-blue-100 no-underline [&.active]:text-white [&.active]:font-semibold" to="/">Home</NavLink>
      <NavLink className="text-blue-100 no-underline [&.active]:text-white [&.active]:font-semibold" to="/aptitude">Aptitude</NavLink>
      <NavLink className="text-blue-100 no-underline [&.active]:text-white [&.active]:font-semibold" to="/topics">DSA Topics</NavLink>
      <NavLink className="text-blue-100 no-underline [&.active]:text-white [&.active]:font-semibold" to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}
