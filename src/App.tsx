import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ProductInfo from "./pages/ProductInfo";
import { CartCounterProvider } from "./context/CartCounterContext";
import PurchasePage from "./pages/PurchasePage";

const App = () => {
  return (
    <Router>
      <CartCounterProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/purchase/:id" element={<PurchasePage />} />
        </Routes>
      </CartCounterProvider>
    </Router>
  );
}

export default App;
