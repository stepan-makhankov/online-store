import { render, screen } from "@testing-library/react";
import Footer from "./Footer.jsx";

test("Рендеринг футера", () => {
  render(<Footer />);
  expect(screen.getByRole("contentinfo")).toHaveTextContent(
    "RU: Это учебный проект для портфолио. Магазин не осуществляет реальных продаж. Все названия, логотипы и товары вымышлены. Любое совпадение с реальными брендами случайно.",
  );
  expect(screen.getByRole("contentinfo")).toHaveTextContent(
    "EN: This is a portfolio project. The store does not sell any actual products. All names, logos, and products are fictitious. Any resemblance to real brands is purely coincidental.",
  );
});
