import test from "@playwright/test";
import { TestScope } from "../testscope";

test.describe('User is able to puchase product', () => {
    test.only('purchase now', async({page}) => {
        const tester = new TestScope(page);
        await page.goto('/');

        const {loginPage,productsPage,cartPage,checkoutPage,paymentPage} = tester.Pages;
        await loginPage.visit()
        await loginPage.loginAccess()
        await productsPage.visit()
        await productsPage.selectProduct('Blue Top')  
        await cartPage.visit()
        await cartPage.proceedToCheckout()
        await checkoutPage.visit()
        await checkoutPage.placeOrder()
        await paymentPage.fillUpPaymentForm("juanito ulanbo","403234234234234","345","11","2030")
    });
});