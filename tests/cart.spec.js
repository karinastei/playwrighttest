const { test, expect } = require("@playwright/test");

test("cart", async ({ page }) => {
  // Navigate to the makeup webshop's homepage
  await page.goto("https://www.loverte.com/");

  // Click on the "Skincare" link
  await page
    .locator('a.desktopMenu-mainCategory-aJo[href="/et/nahahooldus"]')
    .click();

  // Click on the product link
  await page
    .locator('a.item-link-c_G[href="/et/holika-holika-aloe-soothing-gel"]')
    .click();

  // Click on the "Add to cart" link
  await page
    .locator("form")
    .filter({ hasText: "Lisa ostukorvi" })
    .getByRole("button")
    .nth(2)
    .click();

  //Click on the cart image
  await page
    .locator(
      "div.cartTrigger-triggerContainer-13J button.cartTrigger-trigger-dxX"
    )
    .click();

  //Open the cart
  await page.locator("button.miniCart-cartButton-3ot").click();

  //Check the cart for the product
  await page.locator("div.product-name-14T a").click();
});
