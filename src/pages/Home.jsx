export default function Home() {
  return (
    <div className="container">
      <h1 className="main-title">Helios Automotive</h1>
      <p className="subtitle">Quality Parts for Every Ride</p>
      <div className="section">
        <h2>About Us</h2>
        <p>
          Helios Automotive is a trusted manufacturer of 2W and 3W automotive
          parts. We focus on durability, performance, and affordability.
        </p>
      </div>
      <div className="section grid-3">
        <div className="feature">
          <h3>Quality</h3>
          <p>All products meet industry standards.</p>
        </div>

        <div className="feature">
          <h3>Pricing</h3>
          <p>Competitive and transparent pricing.</p>
        </div>

        <div className="feature">
          <h3>Delivery</h3>
          <p>Fast delivery across India.</p>
        </div>
      </div>

      <div className="section stats">
        <div>200+ Products</div>
        <div>10+ Years Experience</div>
        <div>Trusted by Dealers</div>
      </div>
    </div>
  );
}