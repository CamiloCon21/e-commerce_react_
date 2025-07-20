
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard"; 

import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import CarritoPage from "./Components/CarritoPage";
import Checkout from "./Components/Checkout";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Routes>
      <Route path="/" element={<h1 className="p-4">Bienvenido a la Tienda</h1>} />
      <Route path="/productos" element={<ItemListContainer greeting="Nuestros productos" />} />
      <Route path="/detalle/:id" element={<ItemDetailContainer />} />
      <Route path="/carrito" element={<CarritoPage />} />
      <Route path="/checkout" element={<Checkout />} />
     </Routes>
    </div>
  );
};

export default App;
