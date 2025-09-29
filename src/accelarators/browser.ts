import { Browser, LaunchOptions, Page, chromium, firefox, webkit } from "@playwright/test";
import { page } from "./page";

const options: LaunchOptions = {
  headless:false,
}
export const invokeBrowser = (browserType: any)=>{
//const browserType = process.env.BROWSER;
  switch(browserType){
      case "chrome":
          return chromium.launch(options);
      case "firefox":
          return firefox.launch(options);
      case "webkit":
          return webkit.launch(options);
       default:
          throw new Error("Please set the proper browser!");
}

}