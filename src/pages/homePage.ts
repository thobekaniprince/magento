import {Page} from "@playwright/test"



export default class HomePage{

private page: Page;

private homepageelements ={
    MobileNavigation: "//nav/ol/li/a[text()='Mobile']",
    TelevisionNavigation: "//nav/ol/li/a[text()='TV']"
}

async navigatetoHomepage(){
    await this.page.goto("http://live.techpanda.org/index.php/");
}

async clickOnMobileLink()
{
    await this.page.locator(this.homepageelements.MobileNavigation).click();
}
async clickOnTvLink ()
{
    await this.page.locator(this.homepageelements.TelevisionNavigation).click();
}




}