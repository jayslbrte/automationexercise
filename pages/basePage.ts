import { Page } from "@playwright/test";
import Navigation from "../utilities/navigation";

abstract class BasePage {
    protected readonly page: Page
    protected readonly navigation: Navigation

constructor(page:Page){
    this.page = page;
    this.navigation = new Navigation(page)

}

public abstract load(): void;
public abstract visit() : void;
public abstract waitTillLoaded():Promise<void>

}

export default BasePage;
