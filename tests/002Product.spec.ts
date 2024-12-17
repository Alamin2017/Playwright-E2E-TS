import { test, expect } from '@playwright/test';
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
import { PageObject } from '../pageobject/PageObject';

test.beforeEach(async({page}) => {
  await page.goto('https://www.arogga.com/');
});
test.afterEach(async ({page})=>{
  await delay(15000);
  await page.close();
});
test('Add Product E2E Test1',async({page}) => {
  const ObjectManager=new PageObject(page);
  await ObjectManager.landingObj.career_text_link().click();
});







