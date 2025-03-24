import { Actions } from "../pageobject/Actions";
import { DashboardPage } from "../pages/DashboardPage";
import { test } from '@playwright/test';
const actions=new Actions();

test.beforeEach(async( {page}) => {
  await page.context().clearCookies();
  await page.context().clearPermissions();
  await page.goto("https://automationexercise.com/");
});
test.afterEach(async({page}) => {
  await page.close();
});
test('File upload test automation', async ({ page }) => {
  await actions.elementVisible(page, DashboardPage.logo_locator);
  await actions.clickElement(page, DashboardPage.signup_login_locator);
  await actions.textValidation(page, DashboardPage.new_user_signup_text, "New User Signup!");
});

