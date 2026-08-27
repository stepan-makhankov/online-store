import { test, expect } from "@playwright/test";

test.describe("Адаптивность интерфейса", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Хедер", async ({ page, isMobile }) => {
    if (isMobile) {
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(
        page.getByRole("banner").filter({ has: page.getByRole("searchbox") }),
      ).toBeVisible();
      await expect(
        page
          .getByRole("banner")
          .filter({ has: page.getByRole("button", { name: "Поиск" }) }),
      ).toBeVisible();
      await expect(
        page
          .getByRole("banner")
          .filter({ has: page.getByRole("button", { name: "Корзина" }) }),
      ).not.toBeVisible();
      await expect(
        page
          .getByRole("banner")
          .filter({ has: page.getByRole("button", { name: "Профиль" }) }),
      ).not.toBeVisible();
    } else {
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(
        page.getByRole("banner").filter({ has: page.getByRole("searchbox") }),
      ).toBeVisible();
      await expect(
        page
          .getByRole("banner")
          .filter({ has: page.getByRole("button", { name: "Поиск" }) }),
      ).toBeVisible();
      await expect(
        page
          .getByRole("banner")
          .filter({ has: page.getByRole("button", { name: "Корзина" }) }),
      ).toBeVisible();
      await expect(
        page
          .getByRole("banner")
          .filter({ has: page.getByRole("button", { name: "Профиль" }) }),
      ).toBeVisible();
    }
  });

  test("Футер", async ({ page, isMobile }) => {
    if (isMobile) {
      await expect(page.getByRole("contentinfo")).toBeVisible();
      await expect(
        page
          .getByRole("contentinfo")
          .getByText(
            "RU: Это учебный проект для портфолио. Магазин не осуществляет реальных продаж. Все названия, логотипы и товары вымышлены. Любое совпадение с реальными брендами случайно.",
          ),
      ).toBeVisible();
      await expect(
        page
          .getByRole("contentinfo")
          .getByText(
            "EN: This is a portfolio project. The store does not sell any actual products. All names, logos, and products are fictitious. Any resemblance to real brands is purely coincidental.",
          ),
      ).toBeVisible();
    } else {
      await expect(page.getByRole("contentinfo")).toBeVisible();
      await expect(
        page
          .getByRole("contentinfo")
          .getByText(
            "RU: Это учебный проект для портфолио. Магазин не осуществляет реальных продаж. Все названия, логотипы и товары вымышлены. Любое совпадение с реальными брендами случайно.",
          ),
      ).toBeVisible();
      await expect(
        page
          .getByRole("contentinfo")
          .getByText(
            "EN: This is a portfolio project. The store does not sell any actual products. All names, logos, and products are fictitious. Any resemblance to real brands is purely coincidental.",
          ),
      ).toBeVisible();
    }
  });

  test("Нижняя навигационная панель", async ({ page, isMobile }) => {
    if (isMobile) {
      await expect(
        page.getByRole("navigation", { name: "Нижняя панель" }),
      ).toBeVisible();
      await expect(
        page
          .getByRole("navigation", { name: "Нижняя панель" })
          .filter({ has: page.getByRole("button", { name: "Корзина" }) }),
      ).toBeVisible();
      await expect(
        page
          .getByRole("navigation", { name: "Нижняя панель" })
          .filter({ has: page.getByRole("button", { name: "Профиль" }) }),
      ).toBeVisible();
    } else {
      await expect(
        page.getByRole("navigation", { name: "Нижняя панель" }),
      ).not.toBeVisible();
    }
  });
});
