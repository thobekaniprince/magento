import { Page } from "@playwright/test";


export class page{
    private _page: Page | undefined;

    set page(value: Page) {
        this._page = value;
      }

    get page(): Page {
        if (!this._page) {
          throw new Error("Page is not initialized.");
        }
        return this._page;
      }
}