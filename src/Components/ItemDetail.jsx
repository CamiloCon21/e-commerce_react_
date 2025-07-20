import { CartContext } from "../Context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { useContext } from "react";


const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    const productoConCantidad = { ...producto, cantidad };
    agregarAlCarrito(productoConCantidad);
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-2">{producto.nombre}</h2>
      <p className="text-gray-700 mb-1">Precio: ${producto.precio}</p>
      <p className="text-gray-600">{producto.descripcion}</p>
      <ItemQuantitySelector onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetail;
