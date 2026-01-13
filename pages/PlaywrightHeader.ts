import { Page, Locator, expect } from '@playwright/test';
import { uRL } from '../data/playWrightPageURL';
import { BasePage} from '../pages/BasePage';
import { SearchButton } from '../components/SearchButton';


export class PlaywrightHeader {
  readonly page: Page;
  readonly logo: Locator;
  readonly docs: Locator;
  readonly api: Locator;
  readonly community: Locator;
  readonly nodeJS: Locator;
  readonly gitHubLink: Locator;
  readonly discordLink: Locator;
  readonly switchColorMode: Locator;
  readonly searchButton: SearchButton;


    constructor(page: Page) {
    this.page = page;
    this.logo = page.getByRole('link', { name: 'Playwright logo Playwright' })
    this.docs = page.getByRole('link', { name: 'Docs', exact: true });
    this.api = page.getByRole('link', { name: 'API', exact: true });
    this.community = page.getByRole('link', { name: 'Community' });
    this.nodeJS = page.getByRole('button', { name: 'Node.js' });
    this.gitHubLink = page.getByRole('link', { name: 'GitHub repository' });
    this.discordLink = page.getByRole('link', { name: 'Discord server', exact: true });
    this.switchColorMode = page.getByRole('button', { name: 'Switch between dark and light' });
    this.searchButton = new SearchButton(page);
    }

    async goTo(){
      await this.page.goto(uRL);
    }

    async clickLogo(){
      await this.logo.click();
    }

    async clickDocs(){
      await this.docs.click();
    }

    async clickApi(){
      await this.api.click();
    }

    async clickCommunity(){
      await this.community.click();
    }

async clickNodeJsMenuItem(target: string) {

  
  // 本来はHoverで処理するべきだが、挙動が安定しないためClickにしてある。
  await this.nodeJS.click();

  // メニュー内のリンクをクリック
  await this.page.getByLabel('Main', { exact: true }).getByRole('link', { name: target }).click();

}


    async clickGithubLink(){
      await this.gitHubLink.click();
    }

    async clickDiscordLink(){
      await this.discordLink.click();
    }


  async toggleColorMode() {
  await this.switchColorMode.click();
  }

}