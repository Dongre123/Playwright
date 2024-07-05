// const {test,expect} = require("@playwright/test");
// test ("getByPlaceholder", async({page})=>
//     {

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//     await page.getByPlaceholder('Username').fill("Admin");
//     await page.getByPlaceholder('Password').fill("admin123");

//     // getByRole: If dont have any attribute and we have only type attribute so we can use getByRole.
//     await page.getByRole('button', {type: 'submit'}).click();
//    const name = await page.locator("//span[@class='oxd-userdropdown-tab']").textContent();
//     await expect (await page.getByText(name)).toBeVisible();
    
//     }
// );