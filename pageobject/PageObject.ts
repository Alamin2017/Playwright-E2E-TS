import { Page } from "@playwright/test";
import { HomeLocator } from "../pages/HomePage";
import ProductLocator from "../pages/ProductPage";

export class PageObject{
    homeObj:HomeLocator;
    productObj:ProductLocator;
    constructor(page: Page) {
        this.homeObj = new HomeLocator(page);
        this.productObj=new ProductLocator(page);
    }
    
}