import { test, expect } from '@playwright/test';
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
import { PageObject } from '../pageobject/PageObject';

test.beforeEach(async({page}) => {
  await page.goto('https://www.saucedemo.com/');
});
test.afterEach(async ({page})=>{
  await delay(5000);
  await page.close();
});
test('Add Product E2E Test1',async({page}) => {

  const ObjectManager=new PageObject(page);
  await ObjectManager.productObj.username_input_field().fill("standard_user");
  await ObjectManager.productObj.password_input_field().fill("secret_sauce");
  await ObjectManager.productObj.login_button().click();
  console.log(await ObjectManager.productObj.product_list().count());

});







