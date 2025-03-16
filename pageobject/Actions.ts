import { expect, Page } from '@playwright/test';

export class Actions {
    async clickElement(page: Page, locator: string) {
        try {
            await page.locator(locator).click();
        } catch (error) {
            console.error(`Error clicking element: ${locator}, Error: ${error.message}`);
            throw error;
        }
    }
    async textValidation(page: Page, locator: string, expectedText: string) {
        try {
            const actualText = await page.locator(locator).textContent();
            expect(actualText?.trim()).toBe(expectedText);
        } catch (error) {
            console.error(`Text validation failed for: ${locator}, Error: ${error.message}`);
            throw error;
        }
    }
    async doEnterValue(page: Page, locator: string, value: string) {
        try {
            await page.locator(locator).fill(value);
        } catch (error) {
            console.error(`Error entering value in: ${locator}, Error: ${error.message}`);
            throw error;
        }
    }
    async elementVisible(page: Page, locator: string) {
        try {
            await expect(page.locator(locator)).toBeVisible();
        } catch (error) {
            console.error(`Element not visible: ${locator}, Error: ${error.message}`);
            throw error;
        }
    }
}
