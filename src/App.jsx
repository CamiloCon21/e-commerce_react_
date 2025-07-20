
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard"; 

import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import CarritoPage from "./Components/CarritoPage";
import Checkout from "./Components/Checkout";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar /> {/* ocupa todo el ancho */}
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la Tienda</h1>} />
          <Route path="/productos" element={<ItemListContainer greeting="Nuestros productos" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </>
  );
};


export default App;
