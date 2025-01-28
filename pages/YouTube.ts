import { Page } from '@playwright/test';
export default class YouTubeLocator{
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }
    courses_link_locator(){
        return this.page.locator("//div[normalize-space()='Courses']");
    } 
}
