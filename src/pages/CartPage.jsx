import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0);

  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  return (
    <>
      <div style={{ padding: "20px" }} className="page-container">
        <h1>Cart</h1>

        {cartItems.length === 0 ? (
          <div className="cart-actions">
              <p>Your cart is empty.</p>
              <Link to="/products" className="secondary-btn">
                Start Shopping
              </Link>
            </div>
          
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>

                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, e.target.value)
                  }
                />

                <p>Price: R{item.price}</p>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}

            <hr />

            <h3>Subtotal: R{subtotal}</h3>
            <h3>Delivery: R{deliveryFee}</h3>
            <h2>Total: R{total}</h2>
            
            <div className="cart-actions">
              <Link to="/products" className="secondary-btn">
                Continue Shopping
              </Link>
              <Link to="/checkout" className="btn">
                Proceed to Checkout
              </Link>
            </div>
            
          </>
        )}
      </div>
    </>
  );
}