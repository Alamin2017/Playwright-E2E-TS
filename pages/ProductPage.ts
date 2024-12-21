import { Page } from '@playwright/test';
export default class ProductLocator{
    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }
    username_input_field(){
        return this.page.locator("//input[@id='user-name']");
    }
    password_input_field(){
      return this.page.locator("//input[@id='password']");
    }
    login_button(){
      return this.page.locator("//input[@id='login-button']")
    }
    product_list(){
      return this.page.locator("//div[@class='inventory_list']//div//div[2]//div//a//div");
    }
  
}
