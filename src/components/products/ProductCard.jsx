import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.size}</p>
      <p>R{product.price}</p>
      <Link to={`/products/${product.slug}`} className="btn">
        View
      </Link>
    </div>
  );
}