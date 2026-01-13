import { Page, expect } from '@playwright/test';
import { PackageTabs } from '../components/TabCodeBlock_data';

export class TabCodeBlock {
  constructor(readonly page: Page) {
    this.page = page;
  }

  async checkTab(tabCases: PackageTabs[], tabCodeBlock: string) {
    const block = this.page.getByText(tabCodeBlock, { exact: false });

    for (const { targetCmd, assertCmd } of tabCases) {
      await block.getByRole('tab', { name: targetCmd, exact: true }).click();
      await expect(block.getByRole('code')).toContainText(assertCmd);
    }
  }

  async checkCopyButton(tabCases: PackageTabs[], tabCodeBlock: string) {
    const block = this.page.getByText(tabCodeBlock, { exact: false });

    for (const { targetCmd } of tabCases) {
      await block.getByRole('tab', { name: targetCmd, exact: true }).click();
      await block.getByRole('button', { name: 'Copy code to clipboard' }).click();

      // "Copied" の表示でコピー成功を検証
      await expect(block.getByRole('button', { name: 'Copied' })).toBeVisible();
    }
  }
}