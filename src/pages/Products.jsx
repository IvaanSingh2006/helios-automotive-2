import { PRODUCTS } from "../data/products";
import Product from "../components/Product";
export default function Products({
  cartCount,
  setCartCount,
  cartTotal,
  setCartTotal
}) {
  return (
    <div className="container">
      <h2>Products</h2>

      <p className="cart">
        Items: {cartCount} | Total: ₹{cartTotal}
      </p>

      <button
        onClick={() => {
          setCartCount(0);
          setCartTotal(0);
        }}
      >
        Clear Cart
      </button>

      <div className="grid">
        {PRODUCTS.map((p) => (
          <Product
            key={p.id}
            name={p.name}
            price={p.mrp}
            addToCart={() => {
              setCartCount((prev) => prev + 1);
              setCartTotal((prev) => prev + p.mrp);
            }}
          />
        ))}
      </div>
    </div>
  );
}