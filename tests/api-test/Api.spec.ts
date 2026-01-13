import { test, expect } from '@playwright/test';


/*
APIテストはなかなか試しづらいので、AIに問題を作ってもらってそれを解決する形にする。
問題1：Strawberry を Banana に置き換える
デフォルトでは API が返す最初の果物は Strawberry。
これを Banana に書き換えて表示させるテストを作る。

問題2：果物を1つ追加する
API のレスポンスに 新しい果物（例：Yoshi）を追加して、
ページに表示されることを確認する。

問題3：特定の条件のときだけモックする
route.request().method() を使って
GET のときだけモック、POST のときは本物を流す
というテストを作る。

問題4：POST の内容によってレスポンスを変える
（このデモは GET しか使ってないけど、練習として）
POST の body に { name: "apple" } が含まれていたら
レスポンスを { success: true } に書き換える。

問題5：API のレスポンスを遅延させてローディング表示をテスト
route.fetch() の前に 2 秒待って、
UI がローディング状態を正しく表示するか確認する。

問題6：API を 500 エラーにしてエラーメッセージをテスト
route.fulfill({ status: 500 }) を使って
UI がエラー表示を出すか確認する。
await route.fulfill({ status: 500 }); で出来るけど、１つのテストケースでするのは無理だから、ここのコメントで済ませる。

問題7：レスポンスの一部だけ削除する
API のレスポンスから
2番目の果物だけ削除して UI がどう表示されるか確認する。

問題8：複数の API を同時に横取りして、連動した UI をテスト
例えば：
- /api/v1/fruits → モックしてデータを追加
- /api/v1/vegetables → モックしてデータを削除
UI が両方のデータを正しく表示するか確認する。
サーバー上にはvegetablesが無いのでそれっぽいコードを書いておく。

*/

test('API mocking practice', async ({ page }) => {

  await page.route('**/api/v1/fruits', async route => {
    const method = route.request().method();

    if (method === 'GET') {
      await page.waitForTimeout(2000);

      const response = await route.fetch();
      const json = await response.json();

      json.splice(0, 1, { name: 'Banana', id: 1 });
      json.push({ name: 'Yoshi', id: 101 });
      json.splice(1, 1);

      await route.fulfill({ response, json });
    }

    else if (method === 'POST') {
      const body = route.request().postDataJSON();
      if (body.name === 'apple') {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true })
        });
      } else {
        await route.continue();
      }
    }

    else {
      await route.continue();
    }
  });

  await page.route('**/api/v1/vegetables', async route => {
    try {
      const response = await route.fetch();
      const json = await response.json();
      json.splice(0, 1);
      await route.fulfill({ response, json });
    } catch {
      await route.fulfill({ status: 200, json: [] });
    }
  });

  await page.goto('https://demo.playwright.dev/api-mocking');

  await expect(page.getByRole('listitem').first()).toHaveText('Banana');
  await expect(page.getByText('Yoshi')).toBeVisible();
});