import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/mockProducts";
import { useCart } from "../context/CartContext";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [message, setMessage] = useState("");

  const product = products.find((p) => p.slug === slug);

  if (!product) return <h2>Product not found</h2>;

  const handleAddToCart = () => {
    addToCart(product);
    setMessage("Added to cart!");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <>
      <div className="product-detail">
        <img src={product.image} alt={product.name} />

        <div className="product-info">
          <h2>{product.name}</h2>
          <p>{product.size}</p>
          <p>R{product.price}</p>

          <div className="product-actions">
            <button className="btn" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/products")}
            >
              Back to Shop
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          </div>

          {message && <p className="cart-message">{message}</p>}
        </div>
      </div>
    </>
  );
}