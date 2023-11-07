const { test, expect } = require("@playwright/test");

test("search", async ({ page }) => {
  // Navigate to the makeup webshop's homepage
  await page.goto("https://www.loverte.com/");

  // Select input and write in it
  await page.locator('input[name="search_query"]').fill("holika");

  // Check if the search worked
  await page
    .getByRole("link", {
      name: "HOLIKA HOLIKA Aloe Shower Gel HOLIKA HOLIKA Aloe Shower Gel KINGIKAMPAANIA HOLIKA HOLIKA Aloe Shower Gel",
    })
    .click();
});
