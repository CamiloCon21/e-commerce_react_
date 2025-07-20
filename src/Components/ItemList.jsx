import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;
