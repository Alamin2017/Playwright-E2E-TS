import { test, expect, chromium, Page } from '@playwright/test';
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
import { faker } from '@faker-js/faker';
// const users_data=[
//   ["Al-Amin","Alhmed",faker.internet.email()],
//   ["Sumon","Alhmed",faker.internet.email()],
//   ["Rasel","Alhmed",faker.internet.email()],
//   ["Raselz","Alhmedz",faker.internet.email()],
//   ["Rosella","Alameda",faker.internet.email()]
// ]
// users_data.forEach(data=>{
//   test(`create user ${data[0]}`, async ({page}) => {
//       await page.goto('https://demo.nopcommerce.com/');
//       await page.getByRole('link', { name: 'Register' }).click();
//       await page.getByLabel('Male', { exact: true }).check();
//       await page.getByLabel('Female').check();
//       await page.getByLabel('First name:').click(); 
//       await page.getByLabel('First name:').fill(data[0]);
//       await page.getByLabel('Last name:').click();
//       await page.getByLabel('Last name:').fill(data[1]);
//       await page.locator('select[name="DateOfBirthDay"]').selectOption('17');
//       await page.locator('select[name="DateOfBirthMonth"]').selectOption('3');
//       await page.locator('select[name="DateOfBirthYear"]').selectOption('1929');
//       await page.getByLabel('Email:').click();
//       await page.getByLabel('Email:').fill(data[2]);
//       await page.getByLabel('Company name:').click();
//       await page.getByLabel('Company name:').fill('BS-23');
//       await page.getByLabel('Newsletter:').uncheck();
//       await page.getByLabel('Password:', { exact: true }).click();
//       await page.getByLabel('Password:', { exact: true }).fill('@tania12');
//       await page.getByLabel('Confirm password:').click();
//       await page.getByLabel('Confirm password:').fill('@tania12');
//       await page.getByRole('button', { name: 'Register' }).click();
//       await expect(page.locator('body')).toContainText('Your registration completed');
//       await delay(2000);
//   });
// });


// test('Handle error messages', async ({ page }) => {
//   const errorMessageLocator = page.locator("//div[contains(@class, 'alert alert-danger mt5 ng-star-inserted')] | //p[contains(text(),'We are unable to access your account due to an inv')]");

//   await expect(errorMessageLocator).toBeVisible();

//   const errorMsg = await errorMessageLocator.innerText();
//   const trimmedErrorMsg = errorMsg.trim();

//   if (trimmedErrorMsg === "Verification Code is invalid") {
//     console.log("Test is completed");
//   } 
//   else if (trimmedErrorMsg === "We are unable to access your account due to an invalid verification code. Please contact Participant Services at 888.333.6315, option 1.") {
//     await Unlock_LOCK_Status(page);
//   } 
//   else {
//     console.log("Unknown error message: " + trimmedErrorMsg);
//   }
// });

// // Define the Unlock_LOCK_Status function
// async function Unlock_LOCK_Status(page: any) {
//   // Add logic to unlock the account status here
//   console.log("Unlocking account...");
// }





const test_data=JSON.parse(JSON.stringify(require("../testdata/testdata.json")));


  test('Login with valid credentials',async({page}) => {
    await page.goto("https://demo.applitools.com/index.html");
    await page.locator("//input[@id='username']").fill(test_data.user.username);
    await page.locator("//input[@id='password']").fill(test_data.user.password);
    await page.locator("//a[@id='log-in']").click();
    await page.close();  
  });
  
  test('data driven test automation', async ({ page }) => {
      const data = require('../testdata/orange_hrm.json');
      for (const user_data of data) {
          await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
          await page.locator("input[placeholder='Username']").fill(user_data.username);
          await page.locator("input[placeholder='Password']").fill(user_data.password);
          await page.locator("button:has-text('Login')").click();
          if (user_data.username === 'Admin' && user_data.password === 'admin123') {
              await page.locator("i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
              await page.waitForTimeout(2000); // Wait for the logout option to be visible
              await page.locator("a:has-text('Logout')").click();
          } else {
              const errorMessage = page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text");
              await expect(errorMessage).toHaveText(user_data.expected);
          }
      }
  });
  test('test automation for e-commerce product 222',async({page}) => {
    await page.goto("https://www.arogga.com/");
    await page.locator("//a[normalize-space()='Veterinary']").click();
  });
  test('file upload test automation', async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[placeholder='Username']").fill("Admin");
    await page.locator("input[placeholder='Password']").fill("admin123");
    await page.locator("button:has-text('Login')").click();
    await page.locator("//span[normalize-space()='My Info']").click();
    await page.locator("//button[normalize-space()='Add']").click();
    await delay(2000);
    await page.locator("//input[@type='file']").setInputFiles('C:\\Users\\hp\\Downloads\\Point-Out-Manual-Check.txt');
    await delay(2000);
    await page.locator("//textarea[@placeholder='Type comment here']").fill("Test Purpose");
    await delay(2000);
    await page.locator("//div[@class='orangehrm-attachment']//button[@type='submit'][normalize-space()='Save']").click();
    await page.locator("//i[@class='oxd-icon bi-trash']").click();
    await delay(2000);
    await page.locator("//button[normalize-space()='Yes, Delete']").click();
    await delay(2000);
  
  
  });




