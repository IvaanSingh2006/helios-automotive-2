import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Helios Automotive</h2>

      <div style={styles.links}>
        <NavLink to="/" style={styles.link} end>
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

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#c8102e", 
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontWeight: "bold",
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