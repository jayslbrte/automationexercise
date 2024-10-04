import { Page } from "@playwright/test";
import * as dotenv from 'dotenv'
dotenv.config();

export default class Navigation {
    readonly page:Page;
    
    
    constructor(page:Page ){
        this.page = page;
    }

    public async goto(route:string):Promise<void>{
        await this.page.goto(`${process.env.TEST_WEB}${route}`);
    }
}
