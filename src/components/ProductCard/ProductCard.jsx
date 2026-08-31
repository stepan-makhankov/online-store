import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <article
      aria-labelledby={`title-${product.id}`}
      className={styles.container}
    >
      <div className={styles.image} />

      <h3 id={`title-${product.id}`} className={styles.nameContainer}>
        {product.name}
      </h3>

      <button
        type="button"
        aria-label={`Добавить в корзину: ${product.name}`}
        className={styles.cardButton}
      >
        В корзину
      </button>
    </article>
  );
}

export default ProductCard;
