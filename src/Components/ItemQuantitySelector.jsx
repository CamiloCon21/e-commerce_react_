import { useState } from "react";
import AddItemButton from "./AddItemButton";

const ItemQuantitySelector = ({ onAdd }) => {
  const [cantidad, setCantidad] = useState(1);

  const incrementar = () => setCantidad(c => c + 1);
  const decrementar = () => {
    if (cantidad > 1) setCantidad(c => c - 1);
  };

  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <div className="flex gap-2 items-center">
        <button onClick={decrementar} className="bg-gray-200 px-3 py-1 rounded">-</button>
        <span className="text-lg">{cantidad}</span>
        <button onClick={incrementar} className="bg-gray-200 px-3 py-1 rounded">+</button>
      </div>
      <AddItemButton cantidad={cantidad} onAdd={onAdd} />
    </div>
  );
};

export default ItemQuantitySelector;
