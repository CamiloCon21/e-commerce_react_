import React, { useContext } from "react";
import ProductCard from "./ProductCard"; 
import { CartContext } from "../context/CartContext";

const productos = [
  { id: 1, nombre: "Camisa React", precio: 45000 },
  { id: 2, nombre: "Gorra JS", precio: 30000 },
  { id: 3, nombre: "Sticker Tailwind", precio: 5000 },
];

const ProductosPage = () => {
  const { agregarAlCarrito } = useContext(CartContext);

  return (
<div className="container py-4 d-flex flex-wrap justify-content-center gap-3">
  {productos.map((p) => (
    <ProductCard
      key={p.id}
      nombre={p.nombre}
      precio={p.precio}
      onAgregar={() => agregarAlCarrito(p)}
    />
  ))}
</div>

  );
};

export default ProductosPage;
