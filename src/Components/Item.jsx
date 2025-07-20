import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{producto.nombre}</h3>
      <p className="text-gray-600">${producto.precio}</p>
      <Link
        to={`/detalle/${producto.id}`}
        className="mt-2 inline-block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
      >
        Ver más
      </Link>
    </div>
  );
};

export default Item;
