

const ProductCard = ({ nombre, precio, onAgregar }) => {
return (
  <div className="card shadow-sm p-3 mb-3" style={{ width: "16rem" }}>
    <div className="card-body">
      <h5 className="card-title fw-semibold">{nombre}</h5>
      <p className="card-text text-muted">${precio}</p>
      <button
        onClick={onAgregar}
        className="btn btn-warning text-white"
      >
        Agregar al carrito
      </button>
    </div>
  </div>
);

};

export default ProductCard;
