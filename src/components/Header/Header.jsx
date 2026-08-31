import styles from "./Header.module.css";
import { Search, User, ShoppingCart } from "lucide-react";

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer} />

      <div className={styles.inputContainer}>
        <input type="search" />
        <button aria-label="Поиск">
          <Search />
        </button>
      </div>

      <div className={styles.buttonsContainer}>
        <button aria-label="Корзина">
          <ShoppingCart size={30} />
        </button>
        <button aria-label="Профиль">
          <User size={30} />
        </button>
      </div>
    </header>
  );
}

export default Header;
