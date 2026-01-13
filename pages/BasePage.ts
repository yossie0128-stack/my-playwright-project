import { Page, Locator, expect } from '@playwright/test';
import {PlaywrightHeader} from '../pages/PlaywrightHeader'
import {PlaywrightFooter} from '../pages/PlaywrightFooter';
import { SearchButton } from '../components/SearchButton';

export class BasePage {
  readonly header: PlaywrightHeader;
  readonly footer: PlaywrightFooter;
  readonly searchButton: SearchButton;

  constructor(readonly page: Page) {
    this.page = page;
    this.header = new PlaywrightHeader(page);
    this.footer = new PlaywrightFooter(page);
    this.searchButton = new SearchButton(page);
  }


}