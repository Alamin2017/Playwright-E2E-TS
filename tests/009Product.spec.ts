import { test,expect } from '@playwright/test';

test.describe('Playwright Session Example', () => {

  test.beforeEach(async( {page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await page.waitForURL(/inventory.html/);
    await page.context().storageState({ path: 'auth.json' });
  });

  test('Test Case 1: Verify Feature Items', async ({ page }) => {
    const isVisible = await page.locator("xpath=//div[normalize-space()='Sauce Labs Backpack']").isVisible();
    expect(isVisible).toBe(true);
  });

  test('Test Case 2: Scroll to Bottom', async ({ page }) => {
    const backpack = page.locator("xpath=//div[normalize-space()='Sauce Labs Backpack']");
    await backpack.scrollIntoViewIfNeeded();
    await backpack.click();
  });

});
