import { Page, expect } from '@playwright/test';

export class SearchButton {
  constructor(readonly page: Page) {
    this.page = page;
  }

  async clickSearchButton(){
  await this.page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
  }

  async assertSearchBoxVisible(){
  await expect(this.page.getByRole('searchbox')).toBeVisible();
  }
  async typeSearchWord(searchWord: string){
  await this.page.getByRole('searchbox').fill(searchWord);
  }
  
  async assertSuggestionVisible(){
  await expect(this.page.getByRole('button', { name: 'Search', exact: true }).getByRole('option').first()).toBeVisible();
  }

  async clickSuggestionItem(){
  await this.page.getByRole('button', { name: 'Search', exact: true }).getByRole('option').first().click();
  }
}