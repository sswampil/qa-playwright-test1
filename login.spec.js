const { test, expect } = require("@playwright/test");

test("Homepage Loads", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/Example Domain/);
});

//// Just a test change to trigger GitHub Actions
