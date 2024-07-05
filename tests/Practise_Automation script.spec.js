// //const {test,expect} = require("@playwright/test");
// // const { log } = require("console");
// // // test("Login into Application", async({page})=>
// //     {
// //        await page.goto("https://demoblaze.com/");
// //        //page.waitForLoadState('networkidle');

// //        await page.locator("#login2").click();
// //      // page.getByRole('link', { name: 'Log in' }).click();
// //        const bool = page.locator(".modal-content").first().isVisible();
// //        console.log(bool);
// //        await page.on("dialog",dialog=> dialog.Username);
// //       const Username = await page.locator("#loginusername").fill("pavanol");
// //        console.log("userName Entered:"+ Username);
// //        await page.on("dialog",dialog=>dialog.Password);
// //        const Password = await page.locator("#loginpassword").fill("test@123");
// //        console.log("Password Entered");
// //        await page.getByLabel("Log in").click()
// //     }


// // );

// const { test, expect } = require("@playwright/test");
// const { log } = require("console");

// test.only("Login into Application", async ({ page }) => {
//     // Go to the page 
//     await page.goto("https://demoblaze.com/");
//     // Click the log in button.
//     await page.locator("#login2").click();
//     // Navigate to the Pop up window
//     await page.on("dialog", dialog => dialog.Username);
//     // Enter Username in textbox on the pop up window.
//     await page.locator("#loginusername").fill("Pavanol");
//     //Print Username on the console.
//     const Username = ("Pavanol");
//     console.log("Entered UserName:" + Username);
//     // Enter password in textbox on the pop up window.
//     await page.locator("#loginpassword").fill("test@123");
//     // Print the password on the console.
//     const Password = ("test@123");
//     console.log("Entered Password:" + Password);
//     // Click on the login button for navigate in the application.
//     await page.locator("//button[normalize-space()='Log in']").click();
//     // Fetch all text contents for all the product.
//     //---const PageContents = await page.locator("a").allTextContents();
//     // Print all the product text content on the page.
//     //---console.log(PageContents);
//     // Fetch the text content for the individual product.
//     const ProductName = await page.locator(".hrefch").allTextContents();
//     // Print the product text.
//     console.log(ProductName);
//     // Fetch all Mobile categories text.
//     const CategoryOfMobile = await page.locator("#itemc").allTextContents();
//     // Pint the text.
//     console.log(CategoryOfMobile);
//     // Click on the laptop category and navigate to the laptop page.
//     const Laptop = await page.locator("(//a[normalize-space()='Laptops'])[1]").click();
//     // Print the laptop name.
//     console.log(Laptop);
//     // Print the laptop names on the page.
//     const Laptopname = await page.locator(".hrefch").allTextContents();
//     console.log(Laptopname);
//     const Monitor = await page.locator("(//a[normalize-space()='Monitors'])[1]").click();
//     console.log(Monitor);
//     const MonitorName = await page.locator("hrefch").allTextContents();
//     console.log(MonitorName);
//     await page.locator("//a[normalize-space()='Apple monitor 24']").click();
//     const cartButton = await page.locator("//a[normalize-space()='Add to cart']").click();
//     //page.waitForLoadState("domcontentloaded")
//     await page.on("dialog", async dialog => {
//         console.log("Alert Message:", dialog.message());
//         await dialog.accept();
//     });

//     //console.log(cart);
//     const Productname1 = await page.locator(".name").textContent();
//     console.log(Productname1);
//     await page.locator("#cartur"). click();
//     //await page.locator("[class*=table-responsive]")
//     // const rows =  page.locator("tbody tr");
//     // for(var i=0; i<rows.count; i++);
//     // {

//     //     const RowProductName = await rows.nth(i).locator("td").first().textContent();
//     //     if (rows.includes(RowProductName));
//     //     {
//     //         await page.locator("[onclick=deleteItem('d2f9ee23-0c09-13ad-03aa-e64e18241e49')]").click();
            
    
//     //     }
        

//     // }


//     await page.locator("#logout2").click();


// });

