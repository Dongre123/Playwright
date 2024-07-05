


//Locating multiple Web Element // link

// const {test, except} = require("@playwright/test");
// const { link } = require("fs");

// test.only("Locating multiple Web Element", async ({page})=>
//     {
//         await page.goto("https://demoblaze.com/index.html");
//      const  links = await page.$$("a");
     
//      for (const link of links)
//         {

//       const linktext = await link.textContent();
//       console.log(linktext);
//         }
//     }
// )

// Locating multiple Web Element // Product

// const {test, except} = require("@playwright/test");
// test("Locating multiple Web Element", async ({page})=>
//     {
//        await page.goto ("https://demoblaze.com/index.html");
//       const Products = await page.$$ ("//div[@id='tbodyid']//div//h4/a");
       
//       for (const Product of Products)
//         {
//         const  ProductName = await Product.textContent ();
//         console.log(ProductName);

            
//         }

// });