import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  reporter: "html",

  use: {
    baseURL: "http://localhost:5173",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },

  webServer: {
    command: "npm run dev",
    url: "http://localhost:5173",
    timeout: 120 * 1000,
  },

  projects: [
    //Десктоп
    {
      name: "Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Safari",
      use: { ...devices["Desktop Safari"] },
    },
    //Мобильное устройство
    {
      name: "Pixel 5",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "iPhone 12",
      use: { ...devices["iPhone 12"] },
    },
  ],
});
