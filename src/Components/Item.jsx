import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">${producto.precio}</p>
        <Link
          to={`/detalle/${producto.id}`}
          className="btn btn-primary mt-2"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Item;
