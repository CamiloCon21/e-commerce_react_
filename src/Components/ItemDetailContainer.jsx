import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const mockProductos = [
  {
    id: 1,
    nombre: "Laptop Lenovo ThinkPad",
    precio: 2800000,
    descripcion: "Portátil empresarial confiable con excelente rendimiento y durabilidad.",
  },
  {
    id: 2,
    nombre: "Mouse Inalámbrico Logitech",
    precio: 85000,
    descripcion: "Mouse ergonómico con conexión estable y batería de larga duración.",
  },
  {
    id: 3,
    nombre: "Teclado Mecánico Redragon",
    precio: 150000,
    descripcion: "Teclado retroiluminado ideal para gamers y programadores exigentes.",
  },
  {
    id: 4,
    nombre: "Monitor LED 24'' Samsung",
    precio: 620000,
    descripcion: "Pantalla Full HD con tecnología Eye Saver y Flicker Free.",
  },
  {
    id: 5,
    nombre: "Auriculares Bluetooth JBL",
    precio: 180000,
    descripcion: "Audio potente y claro con conexión inalámbrica y batería duradera.",
  },
  {
    id: 6,
    nombre: "Cámara Web HD Logitech",
    precio: 120000,
    descripcion: "Transmisión nítida en videollamadas con micrófono integrado.",
  },
  {
    id: 7,
    nombre: "Router Wi-Fi TP-Link",
    precio: 95000,
    descripcion: "Cobertura de internet estable para toda la casa u oficina.",
  },
  {
    id: 8,
    nombre: "SSD 500GB Kingston",
    precio: 240000,
    descripcion: "Almacenamiento rápido y confiable para mejorar el rendimiento del sistema.",
  },
  {
    id: 9,
    nombre: "Memoria RAM 16GB DDR4",
    precio: 310000,
    descripcion: "Ideal para multitarea intensiva y rendimiento fluido.",
  },
  {
    id: 10,
    nombre: "Tablet Samsung Galaxy Tab A8",
    precio: 850000,
    descripcion: "Pantalla amplia y buen rendimiento para entretenimiento y productividad.",
  },
];

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Simula llamada a la API
    const productoEncontrado = mockProductos.find((p) => p.id === parseInt(id));
    setTimeout(() => {
      setProducto(productoEncontrado);
    }, 1000);
  }, [id]);

  if (!producto) return <p className="p-4">Cargando producto...</p>;

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
