import { test, expect, chromium, Page } from '@playwright/test';
import { PageObject } from '../pageobject/PageObject';
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
test('test-1', async ({page}) => {
  await page.goto("https://www.demoblaze.com/index.html");
  console.log("Page URL is   : ",page.url());
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  console.log("Page Title is : ",await page.title());
  await expect(page).toHaveTitle("STORE");
  const pageURL=page.url();
  console.log("Page URL is:",pageURL);
});
test('test-2', async ({page}) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await page.click("//a[@id='login2']");
  await page.fill("//input[@id='loginusername']","pavanol");
  await page.fill("//input[@id='loginpassword']","test@123");
  await page.click("//button[normalize-space()='Log in']");
  const logout_link=page.locator("//a[@id='logout2']");
  await expect.soft(logout_link).toBeVisible();
  await delay(5000);
});
test('test-3', async ({page}) => {
  test.setTimeout(60000);
  await page.goto("https://www.demoblaze.com/index.html");
  const links=await page.$$('a');
  for(const link of links){
    const link_text=await link.textContent();
    console.log(link_text);
  }
  await page.waitForSelector('//*[@id="tbodyid"]//h4/a')
  const products=await page.$$('//*[@id="tbodyid"]//h4/a');
  expect(products).toHaveLength(9);
  for(const product of products){
    const prodName=await product.textContent();
    console.log(prodName);
  }
  await delay(5000);
});
test('test-4', async ({page}) => {
  test.setTimeout(60000);
  await page.goto("https://www.demoblaze.com/index.html");
  await expect.soft(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
});


test('Handle new tab', async ({ page }) => {
  // Navigate to the initial page
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  // Wait for the new page (tab) to open
  const [newTab] = await Promise.all([
    page.context().waitForEvent('page'), // Listen on the browser context
    page.locator("//div[@class='social']//a[1]//*[name()='svg']").click(),
  ]);
  await newTab.waitForLoadState('load', { timeout: 15000 });
  const newTabObject=new PageObject(newTab);
  await newTabObject.youtubeObj.courses_link_locator().click();
  await delay(3000);
  await page.bringToFront();
  await delay(3000);
  await page.locator("//a[normalize-space()='New user? Signup']").click();
  await delay(3000);
  await newTab.bringToFront();
  await delay(3000);
  await newTabObject.youtubeObj.courses_link_locator().click();
  await delay(3000);

});


