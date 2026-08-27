import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <span>RU:</span> Это учебный проект для портфолио. Магазин не осуществляет
      реальных продаж. Все названия, логотипы и товары вымышлены. Любое
      совпадение с реальными брендами случайно.
      <br />
      <br />
      <span>EN:</span> This is a portfolio project. The store does not sell any
      actual products. All names, logos, and products are fictitious. Any
      resemblance to real brands is purely coincidental.
    </footer>
  );
}

export default Footer;
