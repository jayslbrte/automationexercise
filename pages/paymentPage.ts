import { Page } from "@playwright/test";
import BasePage from "./basePage";
import { TopMenuPath } from "../utilities/menuPath";

export class PaymentPage extends BasePage {

    constructor(page:Page){
        super(page)
    }
// '[data-qa="login-button"]'
    private cardname =  this.page.locator('[name="name_on_card"]')
    private cardNumber =  this.page.locator('[name="card_number"]')
    private cvc =  this.page.locator('[data-qa="cvc"]')
    private expirationMM =  this.page.locator('[data-qa="expiry-month"]')
    private expirationYY =  this.page.locator('[data-qa="expiry-year"]')
    private confirmPayBtn = this.page.locator('[data-qa="pay-button"]')



    public async visit(): Promise<void>{
        await this.load();
        await this.waitTillLoaded();
    }

    public async load(): Promise<void>{
        await this.navigation.goto(TopMenuPath.PAYMENT)
    }

    public async waitTillLoaded(): Promise<void> {
        await this.page.waitForLoadState()
        await this.page.waitForLoadState("domcontentloaded")
    }

    public async fillUpPaymentForm(name: string, card: string, CVC:string, expirationMM: string, expirationYr: string ): Promise<void>{
        await this.page.waitForLoadState("load")
        await this.page.waitForLoadState("domcontentloaded");
        await this.cvc.fill(CVC)
        await this.cardNumber.fill(card)
        await this.expirationMM.fill(expirationMM)
        await this.expirationYY.fill(expirationYr)
        await this.cardname.fill(name)
        await this.confirmPayBtn.click()
        
    }
}