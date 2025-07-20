// CartWidget.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/carrito" className="btn btn-light position-relative">
      <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
