const { test, expect } = require("@playwright/test");

test("form error", async ({ page }) => {
  // Navigate to the makeup webshop's homepage
  await page.goto("https://www.loverte.com/");

  // Click on the "Contact Us" link to access the feedback form
  await page.click('[data_id="83"]');

  // Attempt to submit the form without filling in the "Name" field
  await page.getByRole("button", { name: "Saada" }).click();

  // Wait for a short moment to allow for any potential error message to appear
  await page.waitForTimeout(1000);

  //Check for error in the input class
  const nameInput = page.locator('input[name="firstname"]');
  await expect(nameInput).toHaveClass(
    "textInput-input_error-VwF field-input-iL8 null undefined"
  );
});
