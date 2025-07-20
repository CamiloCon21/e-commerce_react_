import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Carrito = () => {
  const { carrito, limpiarCarrito } = useContext(CartContext);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🛒 Carrito de compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="mb-4">
            {carrito.map((item, index) => (
              <li key={index}>
                {item.nombre} - ${item.precio}
              </li>
            ))}
          </ul>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
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
