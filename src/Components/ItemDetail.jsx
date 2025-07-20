import { faInfoCircle, faTag } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../Context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    const productoConCantidad = { ...producto, cantidad };
    agregarAlCarrito(productoConCantidad);
  };

return (
  <div className="container mt-5 d-flex justify-content-center">
    <div className="card p-4 shadow-sm" style={{ maxWidth: "500px", width: "100%" }}>
      <h2 className="card-title h4">
        <FontAwesomeIcon icon={faInfoCircle} className="me-2 text-primary" />
        {producto.nombre}
      </h2>

      <p className="card-text mb-1">
        <FontAwesomeIcon icon={faTag} className="me-2 text-success" />
        <strong>Precio:</strong> ${producto.precio}
      </p>

      <p className="card-text">{producto.descripcion}</p>

      <ItemQuantitySelector onAdd={handleAdd} />
    </div>
  </div>
);
};

export default ItemDetail;
