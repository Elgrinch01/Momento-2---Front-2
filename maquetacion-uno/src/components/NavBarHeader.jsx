import { NavLink } from "react-router-dom";
import BrandLogo from "./BrandLogo";

export default function NavBarHeader() {
  return (
    <header className="navbar">
      <BrandLogo />

      <nav className="nav-links">
        <NavLink to="/filosofia" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Filosofía
        </NavLink>
        <NavLink to="/galeria" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Galería
        </NavLink>
        <NavLink to="/reservas" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
          Reservas
        </NavLink>
      </nav>
    </header>
  );
}