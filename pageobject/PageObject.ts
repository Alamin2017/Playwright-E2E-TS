import { Page } from "@playwright/test";
import { HomeLocator } from "../pages/HomePage";
import LandingLocator from "../pages/LandingPage";

export class PageObject{
    homeObj:HomeLocator;
    landingObj:LandingLocator;
    constructor(page: Page) {
        this.homeObj = new HomeLocator(page);
        this.landingObj=new LandingLocator(page);
    }
    
}