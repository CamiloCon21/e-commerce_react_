import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

const Navbar = () => {


  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Tienda React</div>
      <ul className="flex items-center gap-6">
        <li>
          <Link to="/" className="hover:underline">Inicio</Link>
        </li>
        <li>
          <Link to="/productos" className="hover:underline">Productos</Link>
        </li>
       <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
