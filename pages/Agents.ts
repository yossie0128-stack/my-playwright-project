import { Page, Locator } from '@playwright/test';
import { docURL } from '../data/playWrightPageURL';
import { TabCodeBlock } from '../components/TabCodeBlock';
import { testAgentsTabCases } from '../data/Agents';
import { BasePage } from './BasePage';

export class Agents extends BasePage{
  readonly tabCodeBlock: TabCodeBlock;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.tabCodeBlock = new TabCodeBlock(page);
  }

    async goTo(){
    await this.page.goto(docURL);
    }
    async checkAgentsPageTab(){
    await this.page.getByRole('button', { name: 'Playwright Test', exact: true }).click();
    await this.page.getByRole('link', { name: 'Agents' }).click();

    await this.tabCodeBlock.checkTab(testAgentsTabCases ,'VS CodeClaude CodeOpenCodenpx' );
    await this.tabCodeBlock.checkCopyButton(testAgentsTabCases ,'VS CodeClaude CodeOpenCodenpx');

    }
}
