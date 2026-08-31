import styles from "./BottomNavBar.module.css";
import { User, ShoppingCart } from "lucide-react";

function BottomNavBar() {
  return (
    <nav aria-label="Нижняя панель" className={styles.container}>
      <button>
        <ShoppingCart size={30} />
        Корзина
      </button>

      <button>
        <User size={30} />
        Профиль
      </button>
    </nav>
  );
}

export default BottomNavBar;
