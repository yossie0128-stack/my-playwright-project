import { Page, Locator, expect } from '@playwright/test';
import { docURL } from '../data/playWrightPageURL';
import { BasePage } from './BasePage';

export class RunningTest  extends BasePage{

 constructor(readonly page: Page) {
  super(page);
  this.page = page;
  }

  async goto(){
      await this.page.goto(docURL);
  }

  async checkCodeBlock(){
    await this.page.getByRole('link', { name: 'Running and debugging tests' }).click();

    await expect(this.page.getByRole('code').filter({ hasText: /^npx playwright test$/ }))
    .toContainText(`npx playwright test`);

    await expect(this.page.getByRole('code').filter({ hasText: 'npx playwright test --headed' }))
    .toContainText(`npx playwright test --headed`);

    await expect(this.page.getByRole('code').filter({ hasText: /^npx playwright test --project webkit$/ }))
    .toContainText(`npx playwright test --project webkit`);

  }
}