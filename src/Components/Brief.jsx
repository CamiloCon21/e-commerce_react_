const Brief = ({ carrito }) => {
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="mb-4">
      {carrito.map((item) => (
        <div key={item.id} className="d-flex justify-content-between border-bottom pb-2 mb-2">
          <span>{item.nombre} x{item.cantidad}</span>
          <span>${item.precio * item.cantidad}</span>
        </div>
      ))}
      <div className="text-end fw-bold fs-5">
        Total: ${total}
      </div>
    </div>
  );
};

export default Brief;
