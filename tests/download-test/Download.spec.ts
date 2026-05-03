import {test,  expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

/*
練習サイト 1：ファイルアップロード
https://www.file.io/
（ファイルをアップロードすると URL が返ってくるサービス）
または
 (the-internet.herokuapp.com in Bing)
（Playwright の教材としてよく使われる）

🔗 練習サイト 2：ファイルダウンロード
 (the-internet.herokuapp.com in Bing)
（クリックするとファイルが即ダウンロードされる）

🟩 問題 1：ファイルアップロード（setInputFiles）
🎯 目的
 を使ってファイルをアップロードし、アップロード結果を検証する。
📝 課題内容
以下のサイトを開く：
👉  (the-internet.herokuapp.com in Bing)
1. 	ページを開く
2. 	 に対して  を使い、任意のファイル（例：sample.txt）をアップロード
3. 	「Upload」ボタンをクリック
4. 	アップロード完了ページで
"File Uploaded!"
が表示されていることを確認
5. 	アップロードされたファイル名が正しく表示されていることを検証

🟦 問題 2：ファイルダウンロード（page.waitForEvent('download')）
🎯 目的
 を使って、ダウンロード完了を正しく待ち受ける。
📝 課題内容
以下のサイトを開く：
👉  (the-internet.herokuapp.com in Bing)
1. 	ページを開く
2. 	 を使ってダウンロードイベントを待機
3. 	任意のファイル（例：some-file.txt）をクリック
4. 	ダウンロードされたファイル名を取得
5. 	任意のパスに保存する（）
6. 	保存されたファイルが存在することを確認する（Node.js の fs を使う）

*/


test('file upload practice1', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  
  const file = 'dummy.txt';
  const filePath = path.join('tests','download-test', file);

  await page.setInputFiles('#file-upload', filePath);

  await page.getByRole('button', { name: 'Upload' }).click();

  await expect(page.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible();
  await expect(page.locator('#uploaded-files')).toHaveText('dummy.txt');
});

test('file download practice1', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  const file = 'test.txt';
  const savePath =path.join('tests', 'download-test', file)

  //たまにファイルが存在していないことがあるから、こうする
  if(await page.getByRole('link', { name: file, exact: true }).isVisible()){
  const downloadPromise = page.waitForEvent('download');

  await page.getByRole('link', { name: file, exact: true }).click();

  const download = await downloadPromise;
  await download.saveAs(savePath);

  expect(fs.existsSync(savePath)).toBe(true);

  await fs.promises.unlink(savePath);
  }

});



