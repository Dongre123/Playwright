// const{test,expect}= require ("@playwright/test");
// const { exec } = require("child_process");
// const exp = require("constants");
// test("Radio and CheckBox Btn", async({page})=>

// {
//  await page.goto("https://testautomationpractice.blogspot.com/");
//  await page.locator("#male").click();
//  await page.locator("#male").check();
//  await expect(page.locator("#male")).toBeChecked();
//  await page.locator("(//input[@id='female'])[1]").click();
//  await expect(page.locator("(//input[@id='female'])[1]")).toBeChecked();

//================================================================================

//Single checkbox Selection:

// await page.locator("#monday").check();
// await expect(page.locator("#monday")).toBeChecked();

// const IsmOndayIsChecked= await expect(page.locator("#monday").isChecked());
// await expect(IsmOndayIsChecked).toBeTruthy(); // It is a direct assertion of javascript not a Playwright.

// await expect(page.locator("#tuesday")).toBeChecked()
// const IsTuesdayNotChecked = await expect(page.locator("#tuesday")).not.toBeChecked();
// await expect(IsTuesdayNotChecked).toBeFalsy(); // It is a direct assertion of javascript not a Playwright.

// await page.locator("#monday").check();
// await expect(page.locator("#monday")).toBeChecked();
//  const IsMondayChecked= await(page.locator("#monday").isChecked());
//  await expect(IsMondayChecked).toBeTruthy();

// await expect (page.locator("#sunday")).not.toBeChecked();
// const IsSundayIsNotchecked= await (page.locator("#sunday").isChecked());
// await expect (IsSundayIsNotchecked).toBeFalsy();


// await page.locator("#monday").click();
// //=================================================================================================================
// //Multiple Selection Checkbox:

// const CheckBoxLocator = [
//                           "//input[@id='monday']",
//                           "//input[@id='tuesday']",
//                           "//input[@id='sunday']"




// ];

// for(const locators of CheckBoxLocator)
//     {

//         await page.locator(locators).check();
//     }
//  await page.pause();

//     for(const locators of CheckBoxLocator)
//     {

//         await page.locator(locators).uncheck();
//     }

// await page.pause();


// });
