export default function Product({ name, price, addToCart }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}