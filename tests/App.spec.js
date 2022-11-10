const { test, expect } = require("@playwright/test");

const URL = "http://localhost:3000";

test("h1 text includes hello world", async ({ page }) => {
  await page.goto(URL);

  const header = page.locator("h1");
  await expect(header).toContainText("hello world", { ignoreCase: true });
});
