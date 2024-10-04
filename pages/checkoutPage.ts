import { Page } from "@playwright/test";
import BasePage from "./basePage";

export class CheckoutPage extends BasePage{

    constructor(page:Page){
        super(page);}

        public async visit(): Promise<void>{
            await this.load()
            await this.waitTillLoaded()
        }

        public async load(): Promise<void> {
        await this.page.goto(`${process.env.TEST_WEB}/checkout`)
        
        }

        public async waitTillLoaded(): Promise<void> {
        await this.page.waitForLoadState("load");
        await this.page.waitForLoadState("domcontentloaded")
        }

        public async placeOrder():Promise<void>{
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.getByText('Place Order').click()
        }


    
}