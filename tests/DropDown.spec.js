const {test,expect} = require("@playwright/test");
test ("DropDown", async({page})=>
{
//     await page.goto("https://testautomationpractice.blogspot.com/");

// await page.locator("#country").click();
// await page.pause();
// await page. locator("#country").selectOption({label:"India"});

// await page.pause();



//=================================================================================

//2nd Method:
await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator("#country").click();
//await page.pause();
await page. locator("#country").selectOption("India");

//await page.pause();



//=================================
//assertion used in checkbox functionality.

const CountryOption = await page.locator("#country option");
await expect (CountryOption).toHaveCount(10);


const Options = await page.$$("#countr option");
let status=false;

for(const option of Options)
    {

        console.log(await option.textContent);
    }

});