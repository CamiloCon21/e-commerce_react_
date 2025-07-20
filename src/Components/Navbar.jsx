import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

const Navbar = () => {


  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-3">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    <span className="navbar-brand fw-bold fs-4">Tienda React</span>
    <ul className="navbar-nav d-flex flex-row gap-4 align-items-center mb-0">
      <li className="nav-item">
        <Link to="/" className="nav-link text-white">Inicio</Link>
      </li>
      <li className="nav-item">
        <Link to="/productos" className="nav-link text-white">Productos</Link>
      </li>
      <li className="nav-item">
        <CartWidget />
      </li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
