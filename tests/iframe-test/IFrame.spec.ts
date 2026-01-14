import { test, expect } from '@playwright/test';

/*
問題1：iframe 内のボタンをクリックして結果を検証する
サイト：W3Schools – iframe demo
https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe (w3schools.com in Bing)
やること
- frameLocator() を使って iframe に入る
- iframe 内のリンク（"JAVASCRIPT"）をクリック
- 親ページに戻る

問題2：複数の iframe を横断して操作する
サイト：the-internet.herokuapp.com/iframe
https://www.tiny.cloud/docs/tinymce/latest/ (the-internet.herokuapp.com in Bing)
やること
- iframe 内のエディタに文字を入力
- 親ページに戻ってボタンをクリック
- iframe → 親 → iframe の移動を練習

問題3：Stripe 風の決済 iframe にカード番号を入力する
サイト：Stripe Elements Demo
https://stripe.com/docs/payments/accept-a-payment?platform=web&ui=elements (stripe.com in Bing)
（※ 実際の決済は発生しない）
やること
- iframe 内のカード番号欄に入力
- 有効期限・CVC も入力
- Submit ボタンを押す
- エラー表示を検証する
これは実務でよくある「決済 iframe」の練習になる。

複数タブ（ウィンドウ）練習問題
問題4：リンクをクリックして新しいタブを開き、内容を検証する
サイト：the-internet.herokuapp.com/windows
https://the-internet.herokuapp.com/windows (the-internet.herokuapp.com in Bing)
やること
- “Click Here” をクリック
- 新しいタブを context.waitForEvent('page') で取得
- 新タブのタイトルを検証
- 親タブに戻って別の操作をする

問題5：複数タブ間でデータを受け渡す（高度）
- window.open() または target="_blank" のリンクで新タブを開く
- 新タブで何か操作（スクロールでもクリックでもOK）
- 親タブに戻る
- 親タブのフォームの値が保持されていることを確認

これは「タブ間の状態管理」をテストする実務パターン。

iframe × 複数タブの複合問題（最上級）
問題6 :iframe 内のリンクが新しいタブを開くケースをテスト
サイト：自作 or W3Schools iframe + 外部リンク
やること
- iframe 内のリンクをクリック
- 新タブが開く
- 新タブのタイトルを検証
- 親ページに戻る
- iframe に再度アクセスして別の操作をする
これは実務で「外部サービスが iframe 内で開く」ケースに近い。


*/


//ここのテストはWebサイトの仕様、例えばiframeが多用されていたり、広告の影響でとにかくflakyです。

test('irFrame practice1', async ({ page }) => {

await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');

  await page.waitForLoadState('domcontentloaded');

const iframeLocator = page
  .frameLocator('#iframeResult')
  .frameLocator('iframe[title="W3Schools Free Online Web Tutorials"]');
  const iframeElement = await iframeLocator.owner().elementHandle();
  const frame = await iframeElement?.contentFrame();


  await frame!.getByRole('link', { name: 'JAVASCRIPT', exact: true }).click();

  await frame!.getByRole('heading', { name: 'JavaScript Tutorial' }).waitFor();

  await Promise.all([
    frame!.waitForNavigation(),
    frame!.evaluate(() => history.back())
  ]);

});


test('irFrame practice2', async ({ page }) => {
await page.goto('https://www.tiny.cloud/docs/tinymce/latest/');
const iframe = page.frameLocator('#default-editor_ifr');

await iframe.locator('#tinymce').fill('abc');
await page.getByRole('button', { name: 'Bold' }).click();

/*これで iframe → 親 → iframe の移動を練習　が出来るがブラウザ内の動作は無いのでコメントアウトする あとplaywright的に推奨されていないみたいで、問題の解釈が違うみたい
await page.locator('#default-editor_ifr').contentFrame().locator('..').locator('#default-editor_ifr').contentFrame();
*/
});


test('irFrame practice3', async ({ page }) => {
await page.goto('https://stripe.com/docs/payments/accept-a-payment?platform=web&ui=elements');

//const paymentFrame = page.frameLocator('iframe[name^="__privateStripeFrame"]');
const paymentFrame = page.frameLocator('iframe[title="Secure payment input frame"][src*="inner-payment"]:visible');

await paymentFrame.getByRole('button', { name: /Card/i}).filter({ visible: true }).click();
await expect(paymentFrame.getByRole('textbox',{name:'Card number'})).toBeVisible();

await paymentFrame.getByRole('textbox',{name:/Card number/i}).filter({ visible: true }).fill('4297 6901 4636 5555');
await paymentFrame.owner().blur();
await expect(paymentFrame.getByText('Your card number is invalid.')).toBeVisible();
await paymentFrame.getByRole('textbox',{name:/Card number/i}).filter({ visible: true }).fill('4297 6901 4636 4312');

await paymentFrame.getByRole('textbox', { name: /Expiration/i }).filter({ visible: true }).fill('12 / 11');
await paymentFrame.owner().blur();
await expect(paymentFrame.getByText('Your card’s expiration year')).toBeVisible();
await paymentFrame.getByRole('textbox', { name: /Expiration/i}).filter({ visible: true }).fill('12 / 28');

//CVCは整数以外は入力できなく、整数を3桁以上入力できないためassertionはしない
await paymentFrame.getByRole('textbox', { name: /Security code/i }).fill('123');

//このページが参考資料のためかsubmit buttonが出ないため、その処理は行わない

});

test('tab practice4', async ({ page }) => {
await page.goto('https://the-internet.herokuapp.com/windows');
await page.getByRole('link', { name: 'Click Here' }).click();

const newtab = await page.context().waitForEvent('page');
await newtab.waitForLoadState();
await expect(newtab).toHaveTitle(/New Window/);
await newtab.close();

await page.getByRole('link', { name: 'Elemental Selenium' }).click();

});


test('tab practice5', async ({ page }) => {
await page.goto('https://playwright.dev/');

await page.getByRole('button', { name: /Search/i }).click();
await page.getByRole('searchbox').fill('hoge');

const [newTab] = await Promise.all([
 page.waitForEvent('popup'),
  page.evaluate(() => window.open('https://www.tiny.cloud/docs/tinymce/latest/')),
]);

await newTab.waitForURL(/tiny\.cloud/);
await newTab.waitForLoadState('domcontentloaded');

await newTab.close();


await newTab.waitForLoadState('domcontentloaded');
await expect( page.getByRole('searchbox')).toHaveValue('hoge');


});

//このテストは以前と比べて安定したけど、その代償としてブラウザ操作と直接関係ないコードが増えて理解しづらい
test('tab practice6', async ({ page ,context}) => {
await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe');

await page.waitForLoadState('domcontentloaded');

const iframeLocator = page.frameLocator('#iframeResult')
  .frameLocator('iframe[title="W3Schools Free Online Web Tutorials"]');

const link = iframeLocator.getByRole('link', { name: 'JAVASCRIPT', exact: true });

const linkHandle = await link.elementHandle();
await linkHandle!.evaluate((el: HTMLAnchorElement) => {
  el.setAttribute('target', '_blank');
});

const [newTab] = await Promise.all([
context.waitForEvent('page'),
link.click(),
]);

await newTab.waitForFunction(() => document.title !== 'about:blank');
expect(await newTab.title()).toBe('JavaScript Tutorial');

await newTab.close();
await page.waitForLoadState();

await link.click();

});