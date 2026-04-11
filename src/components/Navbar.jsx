import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ✈️ Sistema de Aeronaves
        </Link>

        <div>
        
          <Link className="nav-link d-inline text-light" to="/listing">
            Lista
          </Link>
        </div>
      </div>
    </nav>
  );
}