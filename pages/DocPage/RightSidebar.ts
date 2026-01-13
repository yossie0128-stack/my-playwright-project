import { Page, Locator, expect } from '@playwright/test';

export class RightSidebar {
  
  constructor(readonly page: Page) {
  this.page = page;
  }

  async checkAssertionLink(){
  await expect(this.page.getByText('IntroductionFirst').getByRole('link' , { name: 'Assertions' })).toBeVisible();
  }
  
  async checkAssertionScrollable(){
  await this.page.getByText('IntroductionFirst').getByRole('link' , { name: 'Assertions' }).click();
  await expect(this.page.getByRole('heading', { name: 'Assertions' })).toBeInViewport();
  }

  async checkLinkCount(){
  const links = this.page.getByText('IntroductionFirst').getByRole('link');
  expect(await links.count()).toBeGreaterThan(3);
  }
}

