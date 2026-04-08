import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
export default function App() {
  const [page, setPage] = useState("home");
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "products" && (
        <Products
          cartCount={cartCount}
          setCartCount={setCartCount}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      )}
      {page === "contact" && <Contact />}
      <Footer />
    </div>
  );
}