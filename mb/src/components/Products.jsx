import products from "../data/products";
import ProductCard from "./ProductCard";
import "../styles/Products.css";

export default function Products() {
  return (
    <section className="products">
      <h2>Productos destacados</h2>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}