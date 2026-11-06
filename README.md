# Playwright Test Automation Framework

## 概要

このプロジェクトは、転職活動向けに構築した Playwright ベースのテスト自動化基盤です。

過去にSeleniumとJenkinsを利用したテスト自動化に携わっており、現在主流となってい
Playwrightベースの技術スタックへキャッチアップするために本プロジェクトを構築しました。

本プロジェクトでは単なる UI テストの実装ではなく、

- UI テスト
- API テスト
- CI/CD
- Test Reporting
- Flaky Test対策
- 並列実行

までを含めた、実務で運用可能な品質保証基盤の構築を目的としています。

---

## 私の品質保証に対する考え方

私はテストを

> 「不具合を見つけるための活動」

だけではなく、

> 「開発チームが安心して高速にリリースを継続するための仕組み」

だと考えています。

品質と開発速度は対立するものではなく、
適切な自動化と継続的な品質保証基盤によって両立できると考えています。

そのため本プロジェクトでは、

- 保守しやすいテストコード
- 安定したCI/CD
- Flaky Test削減
- 品質メトリクスの可視化

を重視しました。

---

# このプロジェクトで証明したいこと

このリポジトリの目的は、

「Playwrightを学習したこと」

ではありません。

以下を実践できることを示すために作成しました。

- テスト自動化基盤の構築
- API/UI統合テスト設計
- Page Object Model設計
- GitHub Actionsを用いたCI/CD構築
- テスト実行時間短縮
- Flaky Testの検出と改善
- 品質メトリクス基盤の整備

---

# Playwrightを選択した理由

## SETを目指す上で必要なスキルだったため

過去に品質保証業務へ携わった経験があり、
テスト自動化・品質基盤構築を担当するSET領域へ再挑戦するために学習を開始しました。

現在利用されている主要な自動テストツールを比較した結果、
Playwrightを採用しました。

---

## Selenium・Cypressとの比較

以下の観点を評価しました。

- Auto Waitによる安定性
- UIテストとAPIテストの統合
- TypeScriptとの親和性
- 並列実行機能
- クロスブラウザ対応

SET業務において必要となる機能を広くカバーできるため、
Playwrightを選択しています。

---

## 長期運用を見据えた技術選定

PlaywrightはMITライセンスで公開されています。

仮に開発主体が変化した場合でも、
コミュニティやフォークによって継続利用できる可能性が高く、
長期的な学習投資先としても魅力があると考えました。

---

# 実装内容

## UI Test Automation

- Playwright
- Cross Browser Testing
- iframe対応
- Download Test
- Screenshot取得
- Video保存

---

## API Testing

Playwright Request API を利用し、

- GET
- POST
- PUT
- DELETE

を実装しています。

レスポンスコードだけでなく、
レスポンスボディの検証も実施しています。

---

## UI × API Integration Testing

UIとAPIを組み合わせた統合シナリオを実装しています。

E2Eテストだけに依存せず、
APIを活用してテストを効率化する設計を意識しました。

---

## Page Object Model

POMを採用しています。

### 目的

- 保守性向上
- 責務分離
- 可読性向上

---

## GitHub Actions CI/CD

以下のタイミングで自動実行されます。

- Push
- Pull Request

また、

- テスト結果
- スクリーンショット
- 動画
- レポート

を成果物として保存しています。

---

## Allure Report

品質メトリクスの可視化を目的として
Allure Reportを利用しています。

Report:

https://yossie0128-stack.github.io/my-playwright-project/index.html

---

# Flaky Test対策

E2Eテストにおいて最も重視したテーマの一つが
Flaky Testの削減です。

対策として以下を実施しました。

- 適切なLocator設計
- frameLocator利用
- Auto Wait活用
- 明示的Waitの最小化
- Retry戦略
- GitHub Actions上での継続検証

テストコードを書くことだけではなく、

「継続的に信頼できるテストを維持すること」

を意識しています。

---

# 苦労した点

最も苦労したのは

## CI環境とローカル環境の差異

です。

ローカルでは成功するテストが
GitHub Actionsでは失敗するケースがありました。

原因調査や改善を行う過程で、

- GitHub Actions
- Linux Runner
- Playwright実行環境
- Flaky分析

について理解を深めることができました。

---

# ディレクトリ構成

```text
my-playwright-project/
├── playwright.config.ts
├── package.json
├── tests/
│   ├── ui/
│   └── api/
├── pages/
│   ├── LoginPage.ts
│   └── DashboardPage.ts
└── .github/
    └── workflows/
        └── playwright.yml
```

---

# 今後改善したいこと

- Fixtures導入
- テストデータ管理改善
- Mock Service Worker導入
- Pact導入検討
- Slack通知
- サービス仮想化
- 品質メトリクス強化

---

# 求めているポジション

私は以下の領域に興味があります。

- QA Engineer
- SET (Software Engineer in Test)
- Test Automation Engineer
- Quality Engineering

特に

- テスト自動化
- 品質保証基盤構築
- CI/CD
- 開発者生産性向上

に強い関心があります。

品質を守るだけではなく、

「品質を維持しながらリリース速度を向上させる」

仕組み作りに貢献したいと考えています。