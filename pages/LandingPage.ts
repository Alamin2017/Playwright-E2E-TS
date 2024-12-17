import { Page } from '@playwright/test';
export default class LandingLocator{
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }
    career_text_link(){
        return this.page.locator("//div[@id='/jobs']");
    }
  
}
