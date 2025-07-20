import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const mockProductos = [
  { id: 1, nombre: "Laptop Lenovo ThinkPad", precio: 2800000 },
  { id: 2, nombre: "Mouse Inalámbrico Logitech", precio: 85000 },
  { id: 3, nombre: "Teclado Mecánico Redragon", precio: 150000 },
  { id: 4, nombre: "Monitor LED 24'' Samsung", precio: 620000 },
  { id: 5, nombre: "Auriculares Bluetooth JBL", precio: 180000 },
  { id: 6, nombre: "Cámara Web HD Logitech", precio: 120000 },
  { id: 7, nombre: "Router Wi-Fi TP-Link", precio: 95000 },
  { id: 8, nombre: "SSD 500GB Kingston", precio: 240000 },
  { id: 9, nombre: "Memoria RAM 16GB DDR4", precio: 310000 },
  { id: 10, nombre: "Tablet Samsung Galaxy Tab A8", precio: 850000 },
];

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Simular carga de datos
    const fetchProductos = () => {
      setTimeout(() => {
        setProductos(mockProductos);
      }, 1000);
    };

    fetchProductos();
  }, []);

  return (
 <div className="container mt-4">
  <h2 className="h4 fw-bold mb-4">{greeting}</h2>
  <ItemList productos={productos} />
</div>

  );
};

export default ItemListContainer;
