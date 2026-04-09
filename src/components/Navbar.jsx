import { NavLink } from "react-router-dom";
import logo from "../assets/image.png"; 

export default function Navbar() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#c8102e",
      color: "white",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      textDecoration: "none",
    },
    logoImg: {
      height: "40px",
    },
    logoText: {
      margin: 0,
      fontWeight: "bold",
      color: "white",
    },
    links: {
      display: "flex",
      gap: "25px",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "16px",
    },
  };

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <NavLink to="/" style={styles.logoContainer}>
        <img src={logo} alt="Logo" style={styles.logoImg} />
      </NavLink>

      {/* Navigation Links */}
      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>
          Home
        </NavLink>

        <NavLink to="/products" style={styles.link}>
          Products
        </NavLink>

        <NavLink to="/contact" style={styles.link}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}