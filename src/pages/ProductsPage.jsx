import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProductGrid from "../components/products/ProductGrid";
import products from "../data/mockProducts";

export default function ProductsPage() {
  return (
    <>
      <div className="page-container">
        <h1 style={{ textAlign: "center" }}>Products</h1>
        <ProductGrid products={products} />
      </div>
    </>
  );
}