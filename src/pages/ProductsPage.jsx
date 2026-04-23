import { useState } from "react";
import ProductGrid from "../components/products/ProductGrid";
import products from "../data/mockProducts";
import SearchBar from "../components/products/SearchBar";


export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  
  return (
    <div>
      <div className="page-container">
        <h1>Products</h1>
        
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        
        {filteredProducts.length === 0 && (
          <p>No products found</p> 
        )}

        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}