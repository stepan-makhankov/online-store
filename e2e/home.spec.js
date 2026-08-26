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
});
