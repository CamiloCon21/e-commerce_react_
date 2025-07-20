// src/components/CartWidget.jsx

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/carrito" className="relative hover:underline flex items-center gap-1">
      <FaShoppingCart />
      <span>{totalItems}</span>
    </Link>
  );
};

export default CartWidget;
