import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CarritoPage = () => {
  const { carrito, eliminarDelCarrito, totalPrecio } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h1 className="h3 mb-4">Resumen del carrito</h1>

      {carrito.length === 0 ? (
        <p className="text-muted">
          El carrito está vacío.{" "}
          <Link to="/productos" className="text-primary text-decoration-underline">
            Ver productos
          </Link>
        </p>
      ) : (
        <div className="vstack gap-3">
          {carrito.map((item) => (
            <div
              key={item.id}
              className="card p-3 d-flex flex-row justify-content-between align-items-center"
            >
              <div>
                <p className="fw-semibold mb-1">{item.nombre}</p>
                <p className="mb-0 text-muted">Cantidad: {item.cantidad}</p>
                <p className="mb-0 text-muted">Subtotal: ${item.precio * item.cantidad}</p>
              </div>
              <button
                onClick={() => eliminarDelCarrito(item.id)}
                className="btn btn-danger btn-sm"
              >
                Eliminar
              </button>
            </div>
          ))}

          <div className="text-end mt-3 fw-bold fs-5">
            Total: ${totalPrecio}
          </div>

          <Link to="/checkout">
            <button className="btn btn-success mt-3">
              Finalizar compra
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CarritoPage;
