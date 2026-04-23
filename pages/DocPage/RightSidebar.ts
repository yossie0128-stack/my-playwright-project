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
  // 'IntroductionFirst' を含む右サイドバー領域内の link をカウント
  const links = this.page.getByText('IntroductionFirst').getByRole('link');
  await expect(links.first()).toBeVisible(); // 最初の1つが出るまで待機
  const count = await links.count();
  expect(count).toBeGreaterThan(3);
  }
}

