import { defineConfig } from "@playwright/test";

export default defineConfig({
  timeout: 10000,
  reporter: [["allure-playwright"]],
});
