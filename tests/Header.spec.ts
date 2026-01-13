import { test, expect } from '@playwright/test';
import { PlaywrightHeader } from '../pages/PlaywrightHeader';

test('Playwright header training:Logo', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);

  await pwHeader.goTo();
  await pwHeader.clickLogo();
  await expect(page).toHaveURL(/playwright.dev/);
});

test('Playwright header training:Docs', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);
  await pwHeader.goTo();
  await pwHeader.clickDocs();
  await expect(page).toHaveURL(/docs/);
});

test('Playwright header training:API', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);
  await pwHeader.goTo();
  await pwHeader.clickApi();
  await expect(page).toHaveURL(/docs\/api\/class-playwright/);
});

test('Playwright header training:Community', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);
  await pwHeader.goTo();
  await pwHeader.clickCommunity();
  await expect(page).toHaveURL(/community\/welcome/);
});

test('Playwright header training:Hover menu', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);
  await pwHeader.goTo();
  await pwHeader.clickNodeJsMenuItem("Python");
 });

test('Playwright header training:Hover menu2', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);
  await pwHeader.goTo();
  await pwHeader.clickNodeJsMenuItem("Java");
});

test('Playwright header training:Hover menu3', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);
  await pwHeader.goTo();
  await pwHeader.clickNodeJsMenuItem(".NET");
});

 
test('Playwright header training:OuterLink', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);
  await pwHeader.goTo();
  //本当は実際に外部リンクに移行できるかの確認もしたいが、Webkitだと失敗するからパス。代わりに下記を実行する
   //これ用の関数を用意したほうがスマート

  await expect(pwHeader.gitHubLink).toBeVisible();
  await expect(pwHeader.gitHubLink).toHaveAttribute('href', /github/);

  await expect(pwHeader.discordLink).toBeVisible();
  await expect(pwHeader.discordLink).toHaveAttribute('href', /discord/);
});

test('Playwright header training', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);
  await pwHeader.goTo();
  await pwHeader.toggleColorMode();
});


 test('Playwright header search button', async ({ page }) => {
  const pwHeader = new PlaywrightHeader(page);
  await pwHeader.goTo();

  const searchButton = pwHeader.searchButton;
  await searchButton.clickSearchButton();
  await searchButton.assertSearchBoxVisible();
  await searchButton.typeSearchWord('running test');
  await searchButton.assertSuggestionVisible();
  await searchButton.clickSuggestionItem();
});

