import {BeforeAll, AfterAll, Before, After, Status} from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { after, before } from "node:test";
import { invokeBrowser } from "./browser";
import { pageFixture } from "./pageFixture";


let page:Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function() {
    browser = await invokeBrowser("Chrome");
});

Before(async function(){
context = await browser.newContext();
page = await context.newPage();
pageFixture.page = page;

});

after(async function(){
await pageFixture.page.close();
await context.close()
});

AfterAll(async function(){
await browser.close();
});