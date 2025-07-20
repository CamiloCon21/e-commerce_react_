// Brief.jsx
const Brief = ({ carrito }) => {
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="space-y-3">
      {carrito.map((item) => (
        <div key={item.id} className="flex justify-between border-b pb-2">
          <span>{item.nombre} x{item.cantidad}</span>
          <span>${item.precio * item.cantidad}</span>
        </div>
      ))}
      <div className="text-right font-bold text-lg">
        Total: ${total}
      </div>
    </div>
  );
};

export default Brief;
