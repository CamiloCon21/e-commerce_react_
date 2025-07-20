import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Carrito = () => {
  const { carrito, limpiarCarrito } = useContext(CartContext);

  return (
    <div className="p-4">
      <h2 className="h4 mb-4">🛒 Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {carrito.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.nombre} - ${item.precio}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-danger"
            onClick={limpiarCarrito}
          >
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};

export default Carrito;
