// const{test,expect} = require("@playwright/test");
// const { log } = require("console");
// test("Assertion", async({page})=>
//     {

//         // 1. ToHaveURL
//      await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//      const ApplicationURL= await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
//      const URL1 = ("OrangeHRM");
//      console.log("Entered URL is Correct:", URL1 );

//      // 2. ToHaveTitle
//      const ApplicationTitle = await expect (page).toHaveTitle ("OrangeHRM");
//      console.log("ApplicationTitle:", ApplicationTitle);
//      const title1 = ("OrangeHRM");
//      console.log("Application Title:", title1);

//      // 3. expect(locator).toBeVisible(); (Check web element is availbale or Not)
//      const LogoElement = await page.locator("[alt='company-branding']");
//      await expect(LogoElement).toBeVisible;

//      const Username= await page.locator("[name='username']").fill("Admin");
//      console.log("Username");
//     const Password= await page.locator("[name='password']").fill("admin123");
//     console.log("Password");

//     await page.locator("[type='submit'] ").click();
//     console.log("UserSuccesfully Login");

//      /// Click on Hamburger fop open the sidepanel on Mobile view. 
//     // await page.locator("[class*='oxd-icon bi-list oxd-topbar-header-hamburger']").click();
//     // console.log("SideBarPanel");
    
//     //  //expect (locator) tobeEnable()
    
//     // 5. await expect(SerachBlock).toBeEnabled();
//      const SearchTextbox= await page.locator("[placeholder='Search']")
//      await expect(SearchTextbox).toBeEnabled;
   
//      // 6. await expect().toBeDisable. (Click on the MyInfo Header then we go to Info page)

//      await page.locator("[class*='oxd-text oxd-text--span oxd-main-menu-item--name']").nth(5).click();
     
//      const bool= await page.locator("[class='oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input']").first(0);
//      await bool.click();
//      await expect(bool).toBeVisible;
//      await expect(bool).toBeEnabled;
//      console.log("MaleRadioBtn:", await bool.isVisible());
    
//      const FemaleRadioBtn= await page.locator("[class='oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input']").last(1);
//      await bool.click();
//      await expect(bool).toBeVisible;
//      await expect(bool).toBeDisabled;
//      console.log("FemaleRadioBtn:", bool.isDisabled);

// //    const CheckboxType= await page.locator("[type=checkbox]").first();
// //    await CheckboxType.check();
// //    await page.locator("[class=oxd-checkbox-input oxd-checkbox-input--active --label-right oxd-checkbox-input]").nth(0).click();
// //    console.log(CheckboxType);
// //     await expect(CheckboxType).toBeChecked();
//         // await page.getByRole("columnheader", {type : "checkbox"}).first().check();
//         // await page.pause();

//         await page.locator("[type='checkbox']").first().click();

//     });