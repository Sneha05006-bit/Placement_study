import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <strong>Placement Kit</strong>
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink className="link" to="/aptitude">Aptitude</NavLink>
      <NavLink className="link" to="/topics">DSA Topics</NavLink>
      <NavLink className="link" to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}
