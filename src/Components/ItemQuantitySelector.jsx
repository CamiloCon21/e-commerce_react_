import { useState } from "react";
import AddItemButton from "./AddItemButton";

const ItemQuantitySelector = ({ onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(c => c + 1);
  const decrementar = () => {
    if (cantidad > 1) setCantidad(c => c - 1);
  };

return (
  <div className="mt-4 d-flex flex-column align-items-center gap-2">
    <div className="d-flex align-items-center gap-2">
      <button onClick={decrementar} className="btn btn-secondary px-3 py-1">-</button>
      <span className="fs-5">{cantidad}</span>
      <button onClick={incrementar} className="btn btn-secondary px-3 py-1">+</button>
    </div>
    <AddItemButton cantidad={cantidad} onAdd={onAdd} />
  </div>
);

};

export default ItemQuantitySelector;
