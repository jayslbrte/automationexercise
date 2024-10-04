import { Page } from "@playwright/test";
import BasePage from "./basePage";
import { TopMenuPath } from "../utilities/menuPath";

export class CartPage extends BasePage{

    constructor (page:Page){
        super(page);
    }

    public async visit():Promise<void> {
        await this.load()
        await this.waitTillLoaded()
    }

    public async load():Promise<void>{
        await this.navigation.goto(TopMenuPath.CART)
        
    }

    public async waitTillLoaded(): Promise<void> {
        await this.page.waitForLoadState()
        await this.page.waitForLoadState("domcontentloaded")
    }

    public async  proceedToCheckout():Promise<void> {
        await this.page.getByText('Proceed To Checkout').click()
    }
}
