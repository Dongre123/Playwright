// const {test, expect} = require("@playwright/test");
// const { only } = require("node:test");

// const playwrightConfig = require("../playwright.config");

// test("Test Case", async ({browser}) =>
//     {
//         const context = await browser.newContext();
//         const page = await context.newPage();
//         await page.goto("https://sso.teachable.com/secure/9521/identity/login/password");
//     });

//     test.only ("Test Case 2", async ({page}) =>
//         {
//             await page.goto("https://www.youtube.com")
//             console.log(await page.title());
//            await expect (page). toHaveTitle ("Youtube0");

//         }
//     );


//     test ("Test Cases", async ({browser}) =>
//     {

//         const context = await browser. newcontext();
//         const page = await context.newpage ();
//         await page.goto ("https://www.flipkart.com")
//     }
// );



//   test ("Test Cases",async ({browser}) =>

//     {
//         const context = await browser.newcontext ();
//         const page = await context.newpage ();

//         await page.goto ("https:www.yahho.in")
//     }
// );



// test ("Test Cases", async ({page})=>
//     {

//         await page.goto ("https:www.yahoo.in");
//         console.log(await page.title());
//         await expect(page) . toHaveTitle ("Yahoo");
//     }
// );