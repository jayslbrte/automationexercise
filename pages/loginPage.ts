import { test, expect, Locator, Page } from "@playwright/test";
import BasePage from "./basePage";
import Config from "../utilities/config";
import * as dotenv from 'dotenv'
dotenv.config();
export class LoginPage extends BasePage{

    constructor (page:Page){
    super(page);}

    private username = () => this.page.locator('[data-qa="login-email"]')
    private password = () => this.page.getByPlaceholder('Password')
    private loginBtn = () => this.page.locator('[data-qa="login-button"]')
    private sliderCarousel = () => this.page.getByTestId('slider-carousel') 

    
    
    public async visit(): Promise<void>{
    await this.load();
    await this.waitTillLoaded();
    }


    public async load(): Promise<void>{
        console.log(`link: ${process.env.TEST_WEB}`)
        await this.page.goto(`${process.env.TEST_WEB}/login`)
    };


    public async waitTillLoaded(): Promise<void> {
        await expect(this.page.locator('[data-qa="login-button"]')).toBeVisible()
    }

    public async loginAccess():Promise<void>{
       await this.username().fill(`${process.env.USERNAME}`);
       await this.password().fill(`${process.env.PASSWORD}`);
       await this.loginBtn().click();
       await expect(this.sliderCarousel).toBeTruthy()
    }

    public async logoutNow(): Promise<void>{
        await this.page.getByText("Logout").click()
        await expect(this.page.getByText(' Signup / Login')).toBeVisible()
    }

}
