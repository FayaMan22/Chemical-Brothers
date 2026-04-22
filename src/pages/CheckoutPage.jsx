import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate order success
    navigate("/order-success");
  };

  return (
    <>
      <div style={{ padding: "20px" }} className="page-container">
        <h1>Checkout</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            required
            onChange={handleChange}
          />
          <br /><br />

          <textarea
            name="address"
            placeholder="Delivery Address"
            required
            onChange={handleChange}
          />
          <br /><br />

          <h3>Total: R{total}</h3>

          <button className="btn" type="submit">
            Place Order
          </button>
        </form>
      </div>
    </>
  );
}