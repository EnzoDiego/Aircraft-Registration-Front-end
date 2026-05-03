import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          ✈️ Sistema de Aeronaves
        </Link>

        {/* Menu */}
        <ul className="navbar-nav ms-auto flex-row gap-3">

          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/" ? "active fw-semibold text-warning" : "text-light"}`}
              to="/"
            >
              Cadastro
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/listing" ? "active fw-semibold text-warning" : "text-light"}`}
              to="/listing"
            >
              Lista
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}