import { Page, Locator, expect } from '@playwright/test';
import { docURL } from '../data/playWrightPageURL';
import { BasePage } from './BasePage';

export class WritingTest extends BasePage{

 constructor(readonly page: Page) {
  super(page);
  this.page = page;
  }

  async goto(){
      await this.page.goto(docURL);
  }

  async checkCodeBlock(){

     await this.page.getByRole('link', { name: 'Writing tests', exact: true }).click();


     //優れたLocatorができたらこのコードは破棄　
    await expect(this.page.getByText('import { test, expect } from \'@playwright/test\';test(\'has title\', async ({ page')
    ).toContainText(`import { test, expect } from '@playwright/test';test('has title', async ({ page }) => {  await page.goto('https://playwright.dev/');  // Expect a title \"to contain\" a substring.  await expect(page).toHaveTitle(/Playwright/);});test('get started link', async ({ page }) => {  await page.goto('https://playwright.dev/');  // Click the get started link.  await page.getByRole('link', { name: 'Get started' }).click();  // Expects page to have a heading with the name of Installation.  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();});`);
    
     await expect(this.page.getByText('noteAdd // @ts-check at the')).toContainText(`at the start of each test file when using JavaScript in VS Code to get automatic type checking.`);

     await expect(this.page.getByRole('code').filter({ hasText: /^await page\.goto\('https:\/\/playwright\.dev\/'\);$/ })).toContainText(`await page.goto('https://playwright.dev/');`);

     await expect(this.page.getByText('// Create a locator.const')).toContainText(`// Create a locator.const getStarted = page.getByRole('link', { name: 'Get started' });// Click it.await getStarted.click();`);
 
     await expect(this.page.getByRole('code').filter({ hasText: /^await expect\(page\)\.toHaveTitle\(\/Playwright\/\);$/ })).toContainText(`await expect(page).toHaveTitle(/Playwright/);`); 

     await expect(this.page.getByRole('code').filter({ hasText: 'expect(success).toBeTruthy();' })).toContainText(`expect(success).toBeTruthy();`);

     await expect(this.page.getByText(
        'import { test } from \'@playwright/test\';test(\'example test\', async ({ page'))
        .toContainText(
        `import { test } from '@playwright/test';test('example test', async ({ page }) => {  // \"page\" belongs to an isolated BrowserContext, created for this specific test.});test('another test', async ({ page }) => {  // \"page\" in this second test is completely isolated from the first test.});`);
    
     await expect(this.page.getByText('import { test, expect } from \'@playwright/test\';test.describe(\'navigation'))
     .toContainText(
        `import { test, expect } from '@playwright/test';test.describe('navigation', () => {  test.beforeEach(async ({ page }) => {    // Go to the starting url before each test.    await page.goto('https://playwright.dev/');  });  test('main navigation', async ({ page }) => {    // Assertions use the expect API.    await expect(page).toHaveURL('https://playwright.dev/');  });});`);
  

    }

}