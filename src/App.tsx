import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/shared/Navbar";
import SingleProduct from "./pages/SingleProduct";
import { Toaster } from "sonner";

const App = () => {
  return (
    <Router>
        <Navbar />
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
    </Router>
  );
}

export default App;
