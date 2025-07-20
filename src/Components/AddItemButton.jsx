const AddItemButton = ({ cantidad, onAdd }) => {
  return (
    <button
      onClick={() => onAdd(cantidad)}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Agregar al carrito
    </button>
  );
};

export default AddItemButton;
