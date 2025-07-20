import React from "react";

const ProductCard = ({ nombre, precio, onAgregar }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <h2 className="text-lg font-semibold mb-2">{nombre}</h2>
      <p className="text-gray-700 mb-2">${precio}</p>
      <button
        onClick={onAgregar}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
