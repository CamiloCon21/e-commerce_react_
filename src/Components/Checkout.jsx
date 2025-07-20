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

    let finalY = 30;

    autoTable(doc, {
      head: [["Producto", "Cantidad", "Precio Unitario", "Subtotal"]],
      body: tableData,
      startY: finalY,
      didDrawPage: (data) => {
        finalY = data.cursor.y;
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
    <div className="container py-4">
      <h1 className="h3 mb-4">Checkout</h1>

      {compraFinalizada ? (
        <div className="alert alert-success" role="alert">
          ¡Compra finalizada! Gracias por tu compra.
        </div>
      ) : (
        <>
          <Brief carrito={carrito} />
          <button className="btn btn-success mt-4" onClick={finalizarCompra}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
