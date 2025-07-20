import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CarritoPage = () => {
  const { carrito, eliminarDelCarrito, totalPrecio } = useContext(CartContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Resumen del carrito</h1>

      {carrito.length === 0 ? (
        <p className="text-gray-600">
          El carrito está vacío.{" "}
          <Link to="/productos" className="text-blue-600 underline">
            Ver productos
          </Link>
        </p>
      ) : (
        <div className="space-y-4">
          {carrito.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{item.nombre}</p>
                <p className="text-sm text-gray-600">Cantidad: {item.cantidad}</p>
                <p className="text-sm text-gray-600">Subtotal: ${item.precio * item.cantidad}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => eliminarDelCarrito(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-4 font-bold text-xl">
            Total: ${totalPrecio}
          </div>

          <Link to="/checkout">
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Finalizar compra
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CarritoPage;
