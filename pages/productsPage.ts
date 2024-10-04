import { Page } from "@playwright/test";
import BasePage from "./basePage";
import { TopMenuPath } from "../utilities/menuPath";


export class ProductsPage extends BasePage{

    constructor (page:Page){
        super(page);}

    //insert components here

    public async visit(): Promise<void>{
        await this.load()
        await this.waitTillLoaded()
    }
    
    public async load(): Promise<void> {
        await this.navigation.goto(TopMenuPath.PRODUCTS);

    }

    public async waitTillLoaded(): Promise<void> {;
        await this.page.waitForLoadState('load');
        await this.page.waitForLoadState('domcontentloaded');

    }

    public async selectProduct(product: string): Promise<void> {
        //this is a straightforward solution  on manipulating hover elements 
        const productSelected = await this.page.getByText(product).first()
        await productSelected.hover();
        const overlay = await this.page.locator('.overlay-content > .btn').first();
        await overlay.click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
        
    }


    }
    
    

















































































