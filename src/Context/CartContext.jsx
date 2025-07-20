import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // 1. Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    const existente = carrito.find((p) => p.id === producto.id);
    if (existente) {
      const actualizado = carrito.map((p) =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + producto.cantidad }
          : p
      );
      setCarrito(actualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  // 2. Eliminar un producto por ID
  const eliminarDelCarrito = (id) => {
    const actualizado = carrito.filter((item) => item.id !== id);
    setCarrito(actualizado);
  };

  // 3. Vaciar el carrito completamente
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // 4. Calcular cantidad total de productos
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  // 5. Calcular total en pesos
  const totalPrecio = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        vaciarCarrito,
        totalItems,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
