const AddItemButton = ({ cantidad, onAdd }) => {
  return (
    <button
      onClick={() => onAdd(cantidad)}
      className="btn btn-primary"
    >
      Agregar al carrito
    </button>
  );
};

export default AddItemButton;
