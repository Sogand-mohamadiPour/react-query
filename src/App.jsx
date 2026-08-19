import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;