import test from "@playwright/test";
import { TestScope } from "../testscope";


test.describe('User is able to login the system', () => {

    test('successful login', async({page}) => {
      const tester = new TestScope(page)
      const {loginPage} = tester.Pages
      await loginPage.visit()
      await loginPage.loginAccess()

    });
    
});