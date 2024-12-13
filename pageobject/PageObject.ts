import { Page } from "@playwright/test";
import { HomeLocator } from "../pages/HomePage";

export class PageObject1{
    homeObj:HomeLocator;
    constructor(page: Page) {
        this.homeObj = new HomeLocator(page);
    }

}