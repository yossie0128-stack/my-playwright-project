[English README](README.en.md)

my-playwright-project
Playwright を用いた UI × API の E2E テスト自動化プロジェクトです。
開発環境構築から自動化基盤の整備、API テスト、CI/CD 統合までを 10 日以内で構築し、
実務でそのまま活用できるレベルのテスト基盤を再現しています。

🎯 プロジェクト概要
このリポジトリは、以下を目的として構築しています。
- Playwright を用いた UI テスト自動化の実践
- API テストの導入（REST API の検証）
- UI と API を組み合わせた統合テスト
- Page Object Model（POM）によるテスト構造化
- Flaky を抑えるための安定化設計
- 並列実行・shard による高速化
- GitHub Actions を用いた CI/CD パイプラインの構築
- 実務レベルの自動化基盤を短期間で構築できることの証明
![テスト失敗時の表示](./images/screen-trace.png)


🚀 特徴（Features）
1. UI × API の統合テスト
- Playwright の request API を使用
- GET / POST / PUT / DELETE の基本操作を網羅
- ステータスコード・レスポンスボディの検証
- UI と API を組み合わせたシナリオテストも可能
2. Page Object Model（POM）による拡張性の高い構造
- ページごとに責務を分離
- テストコードの可読性・保守性を向上
- 実務で一般的な構成を採用
3. Flaky を抑えるための安定化
- 適切なロケータ選定
- iframe 対応（frameLocator）
- 遅延読み込みへの対策
- 明示的な待機ポイントの最小化
- CI環境の特性を考慮したリトライ戦略とテスト粒度の最適化 
- 個人環境のため最低限のCIランナーを使用しているためどうしてもローカル環境では安定しているテストがCI環境に持ち込むとFlakyになっていますが、実務の場合は高性能のCIランナーを選択することにより、CI環境でもFlakyにならないようにできます。これはエンジニアの工数をCI環境でのスペック不足によるFlaky対応に割くよりも人件費の観点から極めて効率的です。
4. 並列実行・shard による高速化
- Playwright の並列実行機能を活用
- CI 上でも高速に動作するよう最適化
5. GitHub Actions による CI/CD 統合
- push / PR 時に自動でテスト実行
- 成果物（動画・スクリーンショット）の保存
- 実務のワークフローを再現

🕒 開発環境構築〜UI/API 自動化〜CI/CD 統合を 10 日以内で完了
このプロジェクトは、以下の工程を 10 日以内で構築しています。
- Playwright のセットアップ
- UI テストの実装
- API テストの実装
- POM 設計
- Flaky 対策
- 並列実行の設定
- GitHub Actions による CI/CD パイプライン構築
短期間でのキャッチアップと基盤構築能力を示す実例として活用できます。

📁 ディレクトリ構成
my-playwright-project/
├── playwright.config.ts
├── package.json
├── tests/
│   ├── ui/
│   │   └── example.spec.ts
│   ├── api/
│   │   └── api-example.spec.ts
│   └── ...
├── pages/
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── ...
└── .github/
    └── workflows/
        └── playwright.yml



🧪 実行方法
依存関係のインストール
npm install


UI テスト実行
npx playwright test tests/ui


API テスト実行
npx playwright test tests/api


UI モード
npx playwright test --ui



🔧 CI/CD（GitHub Actions）
- push / PR 時に自動実行
- UI / API テストを並列で実行
- 動画・スクリーンショットの保存
- 実務で使える構成を採用

📌 今後の拡張予定
- API モックサーバーとの統合
- テストデータ管理の改善
- UI × API の複雑な統合シナリオ追加
- 負荷テストとの連携


