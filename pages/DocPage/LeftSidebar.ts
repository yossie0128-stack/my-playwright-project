import { Page, Locator, expect } from '@playwright/test';
import { docURL } from '../../data/playWrightPageURL';

export class LeftSidebar {

  
  constructor(readonly page: Page) {
    this.page = page;
  }

    async goTo(){
    await this.page.goto(docURL);
    }

    async goInstallation(){
    await this.page.getByRole('link', { name: 'Installation' }).click();
    }

    async goWritingTest(){
    await this.page.getByRole('link', { name: 'Writing tests', exact: true }).click();
    }

    async goRunningTest(){
    await this.page.getByRole('link', { name: 'Running and debugging tests' }).click();
    }
 
    async goAgents(){
    await this.page.getByRole('link', { name: 'Agents' }).click();
    }

}
