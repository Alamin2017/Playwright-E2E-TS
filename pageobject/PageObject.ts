import { Page } from "@playwright/test";
import { HomeLocator } from "../pages/HomePage";
import ProductLocator from "../pages/ProductPage";
import YouTubeLocator from "../pages/YouTube";
export class PageObject{
    homeObj:HomeLocator;
    productObj:ProductLocator;
    youtubeObj:YouTubeLocator;
    constructor(page: Page) {
        this.homeObj = new HomeLocator(page);
        this.productObj=new ProductLocator(page);
        this.youtubeObj=new YouTubeLocator(page);
    }
    
}