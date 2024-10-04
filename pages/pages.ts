import { Page } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { ProductsPage } from "./productsPage";
import { CartPage } from "./cart";
import { CheckoutPage } from "./checkoutPage";
import { PaymentPage } from "./paymentPage";

export class Pages {
    constructor(page:Page){
        this.loginPage = new LoginPage(page)
        this.productsPage = new ProductsPage(page)
        this.cartPage = new CartPage(page)
        this.checkoutPage = new CheckoutPage(page)
        this.paymentPage = new PaymentPage(page)
        
        
    }

    loginPage: LoginPage
    productsPage: ProductsPage
    cartPage: CartPage
    checkoutPage: CheckoutPage
    paymentPage: PaymentPage
}