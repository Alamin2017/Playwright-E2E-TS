import { test, expect } from '@playwright/test';
import * as config from "../config";
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();
import { PageObject } from '../pageobject/PageObject';

test.describe('test2222', () => {
  test.beforeEach(async({page}) => {
    await page.goto(config.PageUrl001);
  });
  test.afterEach(async ({page})=>{
    await delay(2000);
    await page.close();
  });
  test('Add Product E2E Test1',async({page}) => {
    const ObjectManager=new PageObject(page);
    await expect(ObjectManager.homeObj.home_text_header()).toHaveText("Home");
    await ObjectManager.homeObj.product_link().click();
    await ObjectManager.homeObj.add_to_cart_button().click();
    await ObjectManager.homeObj.view_cart_link().click();
    await ObjectManager.homeObj.proceed_to_checkout_button().click();
    await ObjectManager.homeObj.register_login_button().click();
    await ObjectManager.homeObj.name_input_field().fill("tania");
    await ObjectManager.homeObj.email_address_input_field().fill(randomEmail);
    await ObjectManager.homeObj.sign_up_button().click();
  });
  test('Add Product E2E Test2',async({page}) => {
    const ObjectManager=new PageObject(page);
    await expect(ObjectManager.homeObj.home_text_header()).toHaveText("Home");
    await ObjectManager.homeObj.product_link().click();
    await ObjectManager.homeObj.add_to_cart_button().click();
    await ObjectManager.homeObj.view_cart_link().click();
    await ObjectManager.homeObj.proceed_to_checkout_button().click();
    await ObjectManager.homeObj.register_login_button().click();
    await ObjectManager.homeObj.name_input_field().fill("tania");
    await ObjectManager.homeObj.email_address_input_field().fill(randomEmail);
    await ObjectManager.homeObj.sign_up_button().click();
  });
});





