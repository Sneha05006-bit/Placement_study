import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <strong>Placement Kit</strong>
      <NavLink className={s.link} to="/">Home</NavLink>
      <NavLink className={s.link} to="/aptitude">Aptitude</NavLink>
      <NavLink className={s.link} to="/topics">DSA Topics</NavLink>
      <NavLink className={s.link} to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}
