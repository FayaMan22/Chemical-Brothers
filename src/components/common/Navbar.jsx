import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useCart } from "../../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";


export default function Navbar() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
  (sum, item) => sum + item.quantity,0);

   const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo-container">
        <img src={logo} alt="Chemical Brothers Logo" className="logo-img" />
      </NavLink>

      <div className="nav-links">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/products" className={linkClass}>Products</NavLink>
        <NavLink to="/cart" className={linkClass + " cart-link"}>
        <FaShoppingCart className="cart-icon" />{totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
          </NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} > ☰
      </button>
    </nav>
  );
}