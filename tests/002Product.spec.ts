import { test, expect } from '@playwright/test';
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
import { PageObject } from '../pageobject/PageObject';
import * as config from "../config";
// test.beforeEach(async({page}) => {
//   await page.goto('https://www.saucedemo.com/');
// });
// test.afterEach(async ({page})=>{
//   await delay(5000);
//   await page.close();
// });
test('Product list count :::',async({page}) => {
  // await page.goto('https://www.saucedemo.com/');
  await page.goto(config.PageUrl002);
  const ObjectManager=new PageObject(page);
  await ObjectManager.productObj.username_input_field().fill("standard_user");
  await ObjectManager.productObj.password_input_field().fill("secret_sauce");
  await ObjectManager.productObj.login_button().click();
  const product_count=await ObjectManager.productObj.product_list().count();
  console.log(product_count);
  expect(await ObjectManager.productObj.product_list().count()).toEqual(6);
  for(let i=0;i<product_count;i++){
    const productName = await ObjectManager.productObj.product_list().nth(i).textContent();
    console.log(`Product ${i+1}: ${productName}`);
  }
  await delay(2000);
  const productNames = await ObjectManager.productObj.product_list().allTextContents();
  console.log(productNames);
  await delay(2000);
  await page.close();
});