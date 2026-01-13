import { Page, Locator } from '@playwright/test';
import { uRL } from '../data/playWrightPageURL';
import { BasePage } from './BasePage';

export class PlayWright extends BasePage{
  readonly page: Page;
  readonly link: Locator;
  

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.link = page.getByRole('link', { name: 'Get started' });
  }

    async goto() {
    await this.page.goto(uRL);
    }


async clickLink() {
  await Promise.all([
    this.page.waitForURL('**/docs/intro'),
    this.link.click()
    ]);
  
}



}