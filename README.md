# Playwright Test Automation Framework

## 概要

このプロジェクトは、転職活動向けに構築したPlaywrightベースのテスト自動化基盤です。

私は過去に品質保証業務やテスト自動化に携わった経験があり、SET（Software Engineer in Test）領域への復帰を目指して本プロジェクトを作成しました。

単なるUIテストのサンプルではなく、

- UIテスト
- APIテスト
- CI/CD
- テストレポート
- Flaky Test対策
- 並列実行

までを含めた、実務で利用される品質保証基盤を意識して構築しています。

---

## このプロジェクトで証明したいこと

このリポジトリの目的は、Playwrightの学習履歴を示すことではありません。

品質保証活動において重要な、

- 保守しやすいテストコードの設計
- 品質を維持しながら開発速度を落とさない仕組み作り
- CI/CDへの継続的な統合
- Flaky Testの削減
- 品質メトリクスの可視化

といった課題に取り組めることを示すために作成しました。

---

## Playwrightを選択した理由

自動テストフレームワークとしてPlaywrightを選択した理由は以下の通りです。

### 1. UI・APIテストを同一フレームワーク内で実装できる

品質保証ではUIだけでなくAPIレベルでの検証も重要です。

PlaywrightはUIテストとAPIテストを同じフレームワークで管理できるため、保守性の高い統合テスト基盤を構築できます。

### 2. Selenium・Cypressとの比較

候補としてSeleniumやCypressも検討しました。

比較した結果、

- 自動待機（Auto Wait）
- API Testing
- 並列実行
- TypeScriptとの親和性

といった点を評価し、Playwrightを選択しました。

### 3. 長期運用を見据えた選定

PlaywrightはMITライセンスで公開されています。

特定ベンダーへの依存度が比較的低く、仮にMicrosoftの開発体制が変化した場合でも、コミュニティ主導で継続できる可能性が高いと考えています。

そのため、長期的な学習投資先として適切であると判断しました。

---

## このプロジェクトで実装した内容

- UI Test Automation
- API Testing
- UI × API Integration Testing
- Page Object Model
- GitHub Actions CI/CD
- Allure Report
- Parallel Execution
- Flaky Test Detection
- Test Artifact Management