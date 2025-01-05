import { Page } from '@playwright/test';
export class HomeLocator{

    private page: Page;

    constructor(page: Page) {
      this.page = page;
    }
    home_text_header(){
        return this.page.locator("//a[normalize-space()='Home']");
    }
    product_link(){
        return this.page.locator("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]");
    }
    add_to_cart_button(){
        return this.page.locator("//button[normalize-space()='Add to cart']");
    }
    view_cart_link(){
        return this.page.locator("//u[normalize-space()='View Cart']");
    }
    proceed_to_checkout_button(){
        return this.page.locator("//a[normalize-space()='Proceed To Checkout']");
    }
    register_login_button(){
        return this.page.locator("//u[normalize-space()='Register / Login']");
    }
    name_input_field(){
        return this.page.locator("//*[@id=\"form\"]/div/div/div[3]/div/form/input[2]");
    }
    email_address_input_field(){
        return this.page.locator("//*[@id=\"form\"]/div/div/div[3]/div/form/input[3]");
    }
    sign_up_button(){
        return this.page.locator("//*[@id=\"form\"]/div/div/div[3]/div/form/button");
    }


}
