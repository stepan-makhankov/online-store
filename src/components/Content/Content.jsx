import styles from "./Content.module.css";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

function Content() {
  const { products } = useProducts();

  return (
    <main className={styles.container}>
      <section aria-labelledby="catalog-heading">
        <h2 id="catalog-heading">Каталог</h2>

        <ul className={styles.productCardContainer}>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Content;
