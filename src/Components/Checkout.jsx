import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Brief from "./Brief";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Checkout = () => {
  const { carrito } = useContext(CartContext);
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

const generarPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Resumen de Compra - Tienda React", 14, 20);

  const tableData = carrito.map((item) => [
    item.nombre,
    item.cantidad,
    `$${item.precio}`,
    `$${item.precio * item.cantidad}`,
  ]);

  // Guardamos la posición final manualmente
  let finalY = 30;

  autoTable(doc, {
    head: [["Producto", "Cantidad", "Precio Unitario", "Subtotal"]],
    body: tableData,
    startY: finalY,
    didDrawPage: (data) => {
      finalY = data.cursor.y; // se actualiza con la posición final
    },
  });

  doc.text(`Total a pagar: $${total}`, 14, finalY + 10);

  doc.save("resumen_compra.pdf");
};


  const finalizarCompra = () => {
    setCompraFinalizada(true);
    generarPDF();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      
      {compraFinalizada ? (
        <div className="text-green-600 font-semibold text-lg">
          ✅ ¡Compra finalizada! Gracias por tu compra.
        </div>
      ) : (
        <>
          <Brief carrito={carrito} />
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={finalizarCompra}
          >
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
