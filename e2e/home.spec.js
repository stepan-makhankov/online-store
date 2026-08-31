import { test, expect } from "@playwright/test";

test.describe("Адаптивность интерфейса", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Хедер", async ({ page, isMobile }) => {
    if (isMobile) {
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
