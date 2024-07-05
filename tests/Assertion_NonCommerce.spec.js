// const { test, expect } = require("@playwright/test");
// const exp = require("constants");
// const { link } = require("fs");
// test("NonCommerce", async ({ page }) => {

//     // 1. ToHaveURL: To check the URL is match with the expected URL.
//     await page.goto("https://demo.nopcommerce.com/")
//     await expect(page).toHaveURL("https://demo.nopcommerce.com/");

//     // 2. ToHaveTitle: Check the title of the application.
//    console.log(await page.title()); 
//   await expect(page).toHaveTitle("nopCommerce demo store");

//     await page.locator(".ico-register").click();
//     await page.locator("#FirstName").fill("Sourabh");
//     await page.locator("#LastName").fill("Dongre");

//     // 3.  Radio button
//     const MaleRadioBtn = await page.locator("#gender-male");
//     await MaleRadioBtn.click();
//     await expect(MaleRadioBtn).toBeChecked();

//     // 4. Checkbox
//     const Checkbox = await page.locator("#Newsletter");
//     await expect(Checkbox).toBeChecked();
//     await Checkbox.click();

//     // 5. ToHaveTest: 
//         const RegisterText1 = await page.locator("//h1[normalize-space()='Register']");
//        await expect(RegisterText1).toHaveText("Register");

//     // 6. ToHaveContain:
//     // const RegisterText = await page.locator("page-title h1");
//     // await expect(RegisterText).toContainText("Regis");

//     // 7. ToHaveValue: 
//     const EmailInput= await page.locator("#Email");
//     await EmailInput. fill("Email");
//     await expect(EmailInput).toHaveValue("Email");

//     // 8. ToBeVisible:
//     // const ComputerName= await page.locator("[class=top-menu notmobile]").first();
//    const bool= await page.getByRole("link", {name: "Computer"}).isVisible();
//    console.log(bool);

//    const bool1= page.getByRole("link", {name: "Computer"}, {name: "Electronics"},{name: "Apparel"} ,{name:"Books"},{name: "GiftCard"}).isVisible
//    console.log(bool1);
//     // await expect(ComputerName).toBeVisible("Computer");


//     // 9. Check the Attribute for Register button
//     // const RegisterButton = await page.locator("register-button");
//     // await expect(RegisterButton).toHaveAttribute('type','submit');
//     // await RegisterButton.click();

//     // const DropdoenCount = await page.locator("[name='DateOfBirthDay'] option");
//     // await expect(DropdoenCount).toHaveCount(32)
//     // await 




// });