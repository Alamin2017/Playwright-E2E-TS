import { test, expect, chromium, Page } from '@playwright/test';
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

test.describe.serial('TEST SUITE', async () => {
  let page: Page;
  test.beforeEach("Browser is open without fixture",async()=>{
      const browser=await chromium.launch();
      const context=await browser.newContext();
      page=await context.newPage();
  })
  test.afterEach("Browser is closed without fixture",async()=>{
      page.close();
  })
  test('Without-fixtures 3', async () => {
      await page.goto("https://www.nop-station.com/");
      await page.hover("//body/div[@class='master-wrapper-page']/div[@class='header']/div[@class='container']/div[@class='header-lower']/div[@class='header-links-wrapper']/div[@class='header-links']/ul/li[@class='user-dropdown-menu']/a[1]");
      await page.click("//li[@class='user-dropdown-menu']//ul[@class='user-dropdown']//li//a[@class='ico-register'][normalize-space()='Register']");
      await page.waitForTimeout(5000);
    });
  test('Without-fixtures 4', async () => {
      await page.goto("https://www.nop-station.com/");
      await page.hover("//body/div[@class='master-wrapper-page']/div[@class='header']/div[@class='container']/div[@class='header-lower']/div[@class='header-links-wrapper']/div[@class='header-links']/ul/li[@class='user-dropdown-menu']/a[1]");
      await page.click("//li[@class='user-dropdown-menu']//ul[@class='user-dropdown']//li//a[@class='ico-register'][normalize-space()='Register']");
      await page.waitForTimeout(5000);
    });
});