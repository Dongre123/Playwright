// const{test,expect} = require ("@playwright/test");
// test.only("Soft Assertion", async ({page})=>
//     {
// // Hard Assertion: Examples:
//         // await page.goto("https://demoblaze.com/cart.html#");
//         // await expect(page).toHaveTitle("STORE");
//         // await expect(page.locator(".navbar-brand")).toBeVisible;

//         // Soft Assertion
//     await page.goto("https://demoblaze.com/cart.html#");
//     await page.locator("https://demoblaze.com/cart.html#");
//     await expect.soft(page).toHaveURL("https://demoblaze.com/cart.html#");
//     await page.locator("STORE");
//     await expect.soft(page).toHaveTitle("STORE123");
//     await page.locator("//a[@id='nava']//img");
//     await expect.soft(page.locator("//a[@id='nava']//img")).toBeVisible();

//     });