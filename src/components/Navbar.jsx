import logo from "../assets/image.png";

export default function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <img
        src={logo}
        alt="Helios Logo"
        className="logo"
        onClick={() => setPage("home")}
      />

      <div>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Products</button>
        <button onClick={() => setPage("contact")}>Contact</button>
      </div>
    </div>
  );
}